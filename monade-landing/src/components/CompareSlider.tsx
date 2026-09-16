"use client";

import { useEffect, useRef, useState } from "react";
import WavePlayer, { useAudioClip, type AudioClip } from "./WavePlayer";
import site from "@/content/site.json";

const s = site.slider;

function Pane({ side, left, right }: { side: "left" | "right"; left: AudioClip; right: AudioClip }) {
  const isLeft = side === "left";
  // Each pane renders BOTH columns on the same grid, so the wipe replaces
  // content at exactly the same spot. The pane's own world is bright; the
  // other world's column is shown as what it can't do (left) or what it solved (right).
  return (
    <div className={`h-full w-full ${isLeft ? "bg-[#0b0b0b]" : "bg-[#0d0c07]"}`}>
      <div className="grid h-full grid-rows-[auto_1fr] p-5 md:p-8">
        {/* Listen row: the two players are the only thing in this space; the
            one-line definition sits quietly under each waveform */}
        <div className="grid grid-cols-2 items-start gap-4 border-b border-border-soft pb-6 pt-1 md:gap-6 md:pb-8 md:pt-2">
          <div className={`min-w-0 md:max-w-[460px] ${isLeft ? "" : "opacity-30"}`}>
            <WavePlayer clip={left} accent="#e5484d" base="#3a3a3a" label={s.audio.left.label} labelClass="text-[#d4d4d4]" size="md" />
            <p className="mt-3 hidden text-[12.5px] leading-relaxed text-muted-2 sm:block md:pl-[60px]">{s.left.definition}</p>
          </div>
          <div className={`min-w-0 md:max-w-[460px] ${isLeft ? "opacity-30" : ""}`}>
            <WavePlayer clip={right} accent="#f5b301" base="#4a3d10" label={s.audio.right.label} labelClass="text-text" size="md" prompt />
            <p className="mt-3 hidden text-[12.5px] leading-relaxed text-muted-2 sm:block md:pl-[60px]">{s.right.definition}</p>
          </div>
        </div>
        {/* Paired rows */}
        <ul className="mt-1">
          {s.pairs.map((pair, i) => (
            <li key={i} className="grid min-h-[64px] grid-cols-2 items-center gap-4 border-b border-border-soft py-2 last:border-b-0 md:gap-6">
              {/* Problem column */}
              <div className="flex items-center gap-3">
                {isLeft ? (
                  <>
                    <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-red/80" />
                    <span className="text-[14px] text-[#d4d4d4] md:text-[17px]">{pair.problem}</span>
                  </>
                ) : (
                  <>
                    <Check />
                    <span className="text-[14px] text-muted-2 line-through decoration-muted-2/60 md:text-[17px]">{pair.problem}</span>
                  </>
                )}
              </div>
              {/* Fix column */}
              <div className="flex items-center gap-3">
                {isLeft ? (
                  <>
                    <Cross />
                    <span className="text-[14px] text-muted-2 line-through decoration-muted-2/60 md:text-[17px]">{pair.fix}</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-green" />
                    <span className="text-[14px] text-text md:text-[17px]">{pair.fix}</span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="shrink-0">
      <circle cx="7" cy="7" r="6.5" fill="#2f8f5b" />
      <path d="M4 7.2l2 2 4-4.4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="shrink-0">
      <circle cx="7" cy="7" r="6.5" fill="#3a3a3a" />
      <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#bbb" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function CompareSlider() {
  const wrap = useRef<HTMLDivElement>(null);
  const REST = 50;
  const [x, setX] = useState(50);
  const [stopLeft, setStopLeft] = useState(0);
  const [stopRight, setStopRight] = useState(0);
  const leftClip = useAudioClip(s.audio.left.src, 72, { onPlay: () => setStopRight((v) => v + 1), stopSignal: stopLeft });
  const rightClip = useAudioClip(s.audio.right.src, 72, { onPlay: () => setStopLeft((v) => v + 1), stopSignal: stopRight });
  const dragging = useRef(false);
  const interacted = useRef(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 3000;
        const hold = 600;
        const tick = (now: number) => {
          if (interacted.current) return;
          const t = Math.max(0, Math.min(1, (now - t0 - hold) / dur));
          // 50 -> 82 -> 18 -> 50: show the STT world take over, then voice-to-voice take over, then rest.
          const v = REST + 32 * Math.sin(t * Math.PI * 2) * Math.sin(t * Math.PI);
          setX(v);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const setFromClient = (clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const v = ((clientX - r.left) / r.width) * 100;
    setX(Math.max(4, Math.min(96, v)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    interacted.current = true;
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClient(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClient(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="reveal">
          <h2 className="text-[30px] leading-tight font-medium tracking-[-0.02em] md:text-[36px] xl:whitespace-nowrap xl:text-[38px]">{s.h2}</h2>
        </div>

        <div
          ref={wrap}
          className="reveal relative mt-10 select-none overflow-hidden rounded-2xl border border-border"
          style={{ touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* Base: right pane */}
          <div className="relative">
            <Pane side="right" left={leftClip} right={rightClip} />
          </div>
          {/* Overlay: left pane, clipped */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}
            aria-hidden
          >
            <Pane side="left" left={leftClip} right={rightClip} />
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0"
            style={{ left: `${x}%`, transform: "translateX(-50%)" }}
          >
            <div className="h-full w-px bg-amber/70" />
            <button
              type="button"
              aria-label="Drag to compare"
              className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-amber bg-black text-amber shadow-[0_0_0_6px_rgba(245,179,1,0.12)]"
              onKeyDown={(e) => {
                interacted.current = true;
                if (e.key === "ArrowLeft") setX((v) => Math.max(4, v - 4));
                if (e.key === "ArrowRight") setX((v) => Math.min(96, v + 4));
              }}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
                <path d="M6 1 1 6l5 5M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {leftClip.audio}
        {rightClip.audio}
      </div>
    </section>
  );
}
