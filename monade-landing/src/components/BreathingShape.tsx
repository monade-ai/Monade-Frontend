"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_center;   // 0..1 in canvas space
uniform float u_radius;  // fraction of min(res)
uniform float u_seed;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// Heartbeat at ~64 bpm: a sharp "lub", a smaller "dub", then rest. Returns 0..1.
float heartbeat(float t) {
  float period = 0.94;
  float p = mod(t, period) / period;
  float lub = exp(-pow((p - 0.10) / 0.055, 2.0));
  float dub = 0.55 * exp(-pow((p - 0.32) / 0.07, 2.0));
  return clamp(lub + dub, 0.0, 1.0);
}

void main() {
  float m = min(u_res.x, u_res.y);
  // slow float of the whole shape, a few percent of the frame
  vec2 drift = vec2(0.035 * sin(0.19 * (u_time + u_seed)), 0.025 * cos(0.13 * (u_time + u_seed) + 1.2));
  vec2 p = (gl_FragCoord.xy - (u_center + drift) * u_res) / m;
  float d = length(p);
  float th = atan(p.y, p.x);
  float t = u_time + u_seed;

  float b = heartbeat(t);
  float R0 = u_radius * (1.0 + 0.085 * b);

  // Never-repeating silhouette: incommensurate sines on the angle, drifting slowly.
  float w = 0.0;
  w += 0.11 * sin(3.0 * th + 0.21 * t + 1.7);
  w += 0.07 * sin(5.0 * th - 0.14 * t + 0.4);
  w += 0.05 * sin(2.0 * th + 0.09 * t + 3.1);
  w += 0.035 * sin(7.0 * th + 0.27 * t);
  w += 0.04 * sin(1.0 * th - 0.07 * t + 2.2);
  float R = R0 * (1.0 + w);

  float s = d - R;            // signed distance, negative inside
  float rimW = 0.06 * u_radius * (1.0 + 0.5 * b);

  vec3 amber = vec3(0.96, 0.70, 0.0);
  vec3 olive = vec3(0.54, 0.54, 0.42);
  vec3 green = vec3(0.16, 0.56, 0.36);
  vec3 col = vec3(0.0);
  float cov = 0.0;

  if (s < 0.0) {
    float rim = smoothstep(rimW * 1.6, 0.0, -s);
    // green core, drifting a little, brightens on each beat
    vec2 cq = p - vec2(0.05 * sin(0.13 * t), -0.04 * cos(0.09 * t)) * R;
    float core = exp(-dot(cq, cq) / (0.16 * R * R)) * (0.5 + 0.5 * b);
    vec3 inner = mix(olive, green, clamp(core, 0.0, 1.0));
    col = mix(inner, amber, rim);
    cov = mix(0.62 + 0.18 * core, 1.0, rim);
  } else {
    // sparse amber speckle outside, denser near the rim, fading out
    float fall = exp(-s / (0.9 * u_radius));
    float halo = smoothstep(rimW * 3.0, 0.0, s) * 0.55;
    col = amber;
    cov = 0.045 * fall + halo;
  }

  // Grain: dither the coverage against a fixed per-pixel hash. Dots only change
  // where the shape moves, so there is no global flicker.
  float n = hash(gl_FragCoord.xy + u_seed);
  float on = step(n, cov);
  gl_FragColor = vec4(col * on, 1.0);
}
`;

type Props = {
  className?: string;
  center?: [number, number];
  radius?: number;
  seed?: number;
  opacity?: number;
};

export default function BreathingShape({
  className = "",
  center = [0.7, 0.5],
  radius = 0.26,
  seed = 0,
  opacity = 1,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
      }
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uCenter = gl.getUniformLocation(prog, "u_center");
    const uRadius = gl.getUniformLocation(prog, "u_radius");
    const uSeed = gl.getUniformLocation(prog, "u_seed");

    let raf = 0;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      // One fragment per CSS pixel (DPR capped at 1): fine grain, cheap frames.
      const scale = 1;
      const w = Math.max(1, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(1, Math.floor(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const draw = (now: number) => {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uCenter, center[0], 1 - center[1]);
      gl.uniform1f(uRadius, radius);
      gl.uniform1f(uSeed, seed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const loop = (now: number) => {
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      draw(start + 1200);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver((entries) => {
      visible = entries.some((e) => e.isIntersecting);
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      if (reduce) draw(start + 1200);
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      gl.deleteProgram(prog);
    };
  }, [center, radius, seed]);

  return (
    <canvas
      ref={ref}
      className={`block h-full w-full ${className}`}
      style={{ opacity }}
      aria-hidden
    />
  );
}
