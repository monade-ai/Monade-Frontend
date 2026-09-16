"use client";

import { useEffect, useRef } from "react";

/**
 * Halftone voice waveform. A horizontal wave rendered as amber dots on a coarse
 * grid, dot size following the amplitude envelope, the whole wave swelling on a
 * ~64 bpm heartbeat. Canvas 2D, a few thousand dots, cheap on any laptop.
 */

const PERIOD = 0.94;
function beat(t: number) {
  const p = (t % PERIOD) / PERIOD;
  const lub = Math.exp(-Math.pow((p - 0.1) / 0.055, 2));
  const dub = 0.55 * Math.exp(-Math.pow((p - 0.32) / 0.07, 2));
  return Math.min(1, lub + dub);
}
function hash(x: number, y: number, s: number) {
  let h = (x * 374761393 + y * 668265263 + s * 1274126177) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

type Props = {
  className?: string;
  /** dot grid pitch in CSS px */
  gap?: number;
  /** max wave half-height as a fraction of canvas height */
  amplitude?: number;
  /** horizontal spread of the envelope (0.2 narrow .. 0.5 wide) */
  spread?: number;
  opacity?: number;
  seed?: number;
};

export default function HalftoneWave({ className = "", gap = 9, amplitude = 0.42, spread = 0.34, opacity = 1, seed = 0 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = 1;
    let w = 0;
    let h = 0;
    const fit = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const b = beat(t + seed);
      const cy = h / 2;
      for (let x = gap / 2; x < w; x += gap) {
        const u = x / w;
        const env = Math.exp(-Math.pow((u - 0.5) / spread, 2));
        const s1 = Math.sin(u * 22 + t * 2.4);
        const s2 = Math.sin(u * 7.3 - t * 1.1);
        const s3 = Math.sin(u * 41 + t * 0.7);
        const amp = (0.22 + 0.62 * Math.abs(s1 * s2) + 0.16 * Math.abs(s3)) * env * (1 + 0.75 * b);
        const height = amp * h * amplitude;
        if (height < 1) continue;
        for (let y = gap / 2; y < h; y += gap) {
          const dy = Math.abs(y - cy);
          if (dy > height) continue;
          const k = 1 - dy / height;
          const r = 0.6 + 3.1 * k * (0.7 + 0.3 * hash(x | 0, y | 0, 3));
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,179,1,${(0.32 + 0.68 * k).toFixed(3)})`;
          ctx.fill();
        }
      }
    };

    let raf = 0;
    let visible = true;
    const start = performance.now();
    const loop = (now: number) => {
      if (visible) draw((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };

    fit();
    if (reduce) draw(1.3);
    else raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      fit();
      if (reduce) draw(1.3);
    });
    ro.observe(canvas);
    const io = new IntersectionObserver((es) => {
      visible = es.some((e) => e.isIntersecting);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [gap, amplitude, spread, seed]);

  return <canvas ref={ref} className={`block h-full w-full ${className}`} style={{ opacity }} aria-hidden />;
}
