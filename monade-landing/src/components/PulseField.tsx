"use client";

import { useEffect, useRef } from "react";

/**
 * Heartbeat pulse rings in Monade's grain language.
 * A resting core of amber grain sits at the centre; on every beat a ring of
 * grain is emitted (a strong "lub", a softer "dub") and travels outward,
 * thinning and fading like a sound wave. Everything is dithered dots on black,
 * no gradients, no blur.
 */

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_center;
uniform float u_scale;   // fraction of min(res) that one "unit" spans
uniform float u_seed;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

const float PERIOD = 0.94;   // ~64 bpm
const float DUB = 0.21;      // seconds after the lub
const float SPEED = 0.62;    // units per second
const float LIFE = 3.2;      // seconds a ring stays visible

// One ring: gaussian band around radius r, fading with age.
float ring(float d, float age, float amp, float width) {
  if (age < 0.0 || age > LIFE) return 0.0;
  float r = age * SPEED;
  float w = width * (1.0 + 1.6 * age);           // thins out as it travels
  float band = exp(-pow((d - r) / w, 2.0));
  float fade = exp(-age * 1.15) * amp;
  return band * fade;
}

void main() {
  float m = min(u_res.x, u_res.y);
  vec2 p = (gl_FragCoord.xy - u_center * u_res) / (m * u_scale);
  float d = length(p);
  float t = u_time + u_seed;

  // Beat phase for the core
  float ph = mod(t, PERIOD);
  float lub = exp(-pow((ph - 0.08) / 0.05, 2.0));
  float dub = 0.55 * exp(-pow((ph - 0.08 - DUB) / 0.06, 2.0));
  float beat = clamp(lub + dub, 0.0, 1.0);

  // Core: soft disc of grain that swells on each beat
  float coreR = 0.16 * (1.0 + 0.18 * beat);
  float core = smoothstep(coreR, coreR * 0.35, d) * (0.42 + 0.35 * beat);

  // Rings from the last few beats
  float rings = 0.0;
  float base = t - ph;   // time of the current beat
  for (int k = 0; k < 4; k++) {
    float tb = base - float(k) * PERIOD;
    float a1 = t - (tb + 0.08);
    float a2 = t - (tb + 0.08 + DUB);
    rings += ring(d, a1, 0.95, 0.028);
    rings += ring(d, a2, 0.5, 0.022);
  }

  // Faint resting field so the black is never flat
  float field = 0.03 * exp(-d * 0.9);

  float cov = clamp(core + rings + field, 0.0, 1.0);

  // Colour: amber, warming to a pale gold at the freshest ring, olive far out
  vec3 amber = vec3(0.96, 0.70, 0.0);
  vec3 pale = vec3(1.0, 0.90, 0.55);
  vec3 olive = vec3(0.60, 0.56, 0.36);
  vec3 col = mix(amber, pale, clamp(rings * 0.6, 0.0, 1.0));
  col = mix(col, olive, smoothstep(0.9, 1.9, d));

  float n = hash(gl_FragCoord.xy + u_seed);
  float on = step(n, cov);
  gl_FragColor = vec4(col * on, 1.0);
}
`;

type Props = {
  className?: string;
  center?: [number, number];
  scale?: number;
  seed?: number;
  opacity?: number;
};

export default function PulseField({ className = "", center = [0.5, 0.5], scale = 0.5, seed = 0, opacity = 1 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(sh));
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
    const uScale = gl.getUniformLocation(prog, "u_scale");
    const uSeed = gl.getUniformLocation(prog, "u_seed");

    let raf = 0;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      // 1 fragment per CSS pixel (DPR capped at 1): fine grain, cheap frames.
      const w = Math.max(1, Math.floor(canvas.clientWidth));
      const h = Math.max(1, Math.floor(canvas.clientHeight));
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
      gl.uniform1f(uScale, scale);
      gl.uniform1f(uSeed, seed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    const loop = (now: number) => {
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };
    if (reduce) draw(start + 1500);
    else raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver((es) => {
      visible = es.some((e) => e.isIntersecting);
    });
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      if (reduce) draw(start + 1500);
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      gl.deleteProgram(prog);
    };
  }, [center, scale, seed]);

  return <canvas ref={ref} className={`block h-full w-full ${className}`} style={{ opacity }} aria-hidden />;
}
