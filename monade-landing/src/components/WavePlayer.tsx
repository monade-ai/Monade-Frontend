"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Audio clip controller + minimal waveform view.
 *
 * `useAudioClip` owns one hidden <audio> element and the decoded peaks, so the
 * same clip can be drawn in several places (both halves of the compare slider)
 * and every view stays in sync. `WavePlayer` is the view: a round play button,
 * a bar waveform that fills with the accent colour as the clip plays, and the
 * time. Progress is read every animation frame (not on the coarse `timeupdate`
 * event), and the bar under the playhead fills fractionally, so the fill is
 * continuous rather than stepping bar by bar.
 */

export type AudioClip = {
  src: string;
  peaks: number[] | null;
  playing: boolean;
  dur: number;
  toggle: () => void;
  seek: (fraction: number) => void;
  progress: () => number;
  audio: React.ReactNode;
};

export function useAudioClip(src: string, bars = 96, opts?: { onPlay?: () => void; stopSignal?: number }): AudioClip {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [peaks, setPeaks] = useState<number[] | null>(null);
  const [playing, setPlaying] = useState(false);
  const [dur, setDur] = useState(0);
  const onPlayRef = useRef(opts?.onPlay);
  const onPlay = opts?.onPlay;
  useEffect(() => {
    onPlayRef.current = onPlay;
  }, [onPlay]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(src);
        const buf = await res.arrayBuffer();
        const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new Ctx();
        const audio = await ctx.decodeAudioData(buf);
        const data = audio.getChannelData(0);
        const block = Math.floor(data.length / bars);
        const out: number[] = [];
        for (let i = 0; i < bars; i++) {
          let sum = 0;
          const start = i * block;
          for (let j = 0; j < block; j += 8) sum += Math.abs(data[start + j]);
          out.push(sum / (block / 8));
        }
        const max = Math.max(...out) || 1;
        if (!cancelled) setPeaks(out.map((v) => Math.max(0.06, v / max)));
        ctx.close();
      } catch {
        if (!cancelled) setPeaks(Array.from({ length: bars }, (_, i) => 0.3 + 0.5 * Math.abs(Math.sin(i * 0.7))));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [src, bars]);

  // metadata can load before React hydrates and attaches the event handlers
  // (the <audio> is in the server HTML), so read the duration directly too.
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const read = () => {
      if (Number.isFinite(a.duration) && a.duration > 0) setDur(a.duration);
    };
    read();
    a.addEventListener("durationchange", read);
    a.addEventListener("loadedmetadata", read);
    return () => {
      a.removeEventListener("durationchange", read);
      a.removeEventListener("loadedmetadata", read);
    };
  }, [src]);

  const stopSignal = opts?.stopSignal;
  useEffect(() => {
    if (stopSignal === undefined) return;
    audioRef.current?.pause();
  }, [stopSignal]);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      onPlayRef.current?.();
      a.play();
    } else a.pause();
  }, []);

  const seek = useCallback((fraction: number) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    a.currentTime = Math.max(0, Math.min(1, fraction)) * a.duration;
  }, []);

  const progress = useCallback(() => {
    const a = audioRef.current;
    if (!a || !a.duration) return 0;
    return a.currentTime / a.duration;
  }, []);

  const audio = useMemo(
    () => (
      <audio
        key={src}
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
      />
    ),
    [src]
  );

  return { src, peaks, playing, dur, toggle, seek, progress, audio };
}

type ViewProps = {
  clip: AudioClip;
  accent: string; // fill colour for the played part
  base: string; // colour for the unplayed bars
  label?: string;
  sub?: string;
  labelClass?: string;
  size?: "sm" | "md" | "lg";
  prompt?: boolean; // pulsing rings that invite a click while paused
  className?: string;
};

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function WavePlayer({ clip, accent, base, label, sub, labelClass = "", size = "md", prompt = false, className = "" }: ViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const [tick, setTick] = useState(0); // bumps a redraw after a seek while paused
  const { peaks, playing, dur, toggle, seek, progress } = clip;

  useEffect(() => {
    const c = canvasRef.current;
    if (!c || !peaks) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let lastDrawn = -1;

    const draw = (now: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = c.clientWidth;
      const h = c.clientHeight;
      if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const p = progress();
      const n = peaks.length;
      const gap = 2;
      const bw = (w - gap * (n - 1)) / n;
      const head = p * n;
      for (let i = 0; i < n; i++) {
        const x = i * (bw + gap);
        let amp = peaks[i];
        // a soft ripple around the playhead while playing, so the wave feels alive
        if (playing) {
          const d = Math.abs(i + 0.5 - head);
          if (d < 4) amp *= 1 + 0.18 * (1 - d / 4) * (0.5 + 0.5 * Math.sin(now / 90 + i));
        }
        const bh = Math.max(2, Math.min(h, amp * h));
        const y = (h - bh) / 2;
        ctx.fillStyle = base;
        ctx.beginPath();
        ctx.roundRect(x, y, bw, bh, 1.5);
        ctx.fill();
        const f = Math.max(0, Math.min(1, head - i));
        if (f > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(x, 0, bw * f, h);
          ctx.clip();
          ctx.fillStyle = accent;
          ctx.beginPath();
          ctx.roundRect(x, y, bw, bh, 1.5);
          ctx.fill();
          ctx.restore();
        }
      }
      if (timeRef.current && dur) {
        const s = Math.floor(p * dur);
        if (s !== lastDrawn) {
          timeRef.current.textContent = `${fmt(s)} / ${fmt(dur)}`;
          lastDrawn = s;
        }
      }
      if (playing) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    const ro = new ResizeObserver(() => {
      if (!playing) raf = requestAnimationFrame(draw);
    });
    ro.observe(c);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [peaks, playing, accent, base, dur, progress, tick]);

  const onSeek = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    seek((e.clientX - r.left) / r.width);
    setTick((t) => t + 1);
  };

  const btn = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14 md:h-16 md:w-16" : "h-11 w-11";
  const icon = size === "lg" ? 18 : 12;

  return (
    <div
      className={`flex items-center gap-3 md:gap-4 ${className}`}
      // don't let a click on the player start a slider drag
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="relative shrink-0">
        {prompt && !playing && (
          <>
            <span className="ring-pulse absolute inset-0 rounded-full" style={{ borderColor: accent }} aria-hidden />
            <span className="ring-pulse absolute inset-0 rounded-full" style={{ borderColor: accent, animationDelay: "0.9s" }} aria-hidden />
          </>
        )}
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${label ?? "clip"}` : `Play ${label ?? "clip"}`}
          className={`relative flex ${btn} items-center justify-center rounded-full border transition-transform hover:scale-105`}
          style={{ borderColor: accent, color: playing ? "#000" : accent, background: playing ? accent : "transparent" }}
        >
          {playing ? (
            <svg width={icon} height={icon} viewBox="0 0 12 12" aria-hidden><rect x="2" y="1.5" width="3" height="9" rx="0.8" fill="currentColor" /><rect x="7" y="1.5" width="3" height="9" rx="0.8" fill="currentColor" /></svg>
          ) : (
            <svg width={icon} height={icon} viewBox="0 0 12 12" aria-hidden><path d="M3.5 1.5v9l7-4.5z" fill="currentColor" /></svg>
          )}
        </button>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <div className="min-w-0">
            {label && <div className={`hidden truncate text-[13px] font-medium sm:block md:text-[14px] ${labelClass}`}>{label}</div>}
            {sub && <div className="hidden truncate text-[11.5px] text-muted-2 sm:block">{sub}</div>}
          </div>
          <span ref={timeRef} className="tnum hidden shrink-0 text-[11px] text-muted-2 sm:inline">
            0:00 / {fmt(dur)}
          </span>
        </div>
        <canvas
          ref={canvasRef}
          onClick={onSeek}
          className={`w-full cursor-pointer ${label || sub ? "sm:mt-2" : ""} ${size === "sm" ? "h-9" : "h-12"}`}
          aria-hidden
        />
      </div>
    </div>
  );
}
