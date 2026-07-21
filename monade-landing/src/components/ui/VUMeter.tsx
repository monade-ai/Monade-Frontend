"use client";

import { useEffect, useRef } from "react";

const REST_ANGLE = -52;
const MAX_ANGLE = 52;

/**
 * Analog VU meter with needle ballistics (fast attack, slow release).
 * Driven by a WebAudio AnalyserNode when available; falls back to a
 * synthetic speech-shaped wander while audio is playing, so the needle
 * never depends on audio-graph plumbing to feel alive.
 */
export const VUMeter = ({
  analyser,
  active,
}: {
  analyser: AnalyserNode | null;
  active: boolean;
}) => {
  const needleRef = useRef<SVGGElement>(null);
  const peakRef = useRef<SVGCircleElement>(null);
  const levelRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    const buffer = analyser ? new Uint8Array(analyser.fftSize) : null;
    const started = performance.now();

    const frame = (now: number) => {
      let target = 0;

      if (active) {
        if (analyser && buffer) {
          analyser.getByteTimeDomainData(buffer);
          let sum = 0;
          for (let i = 0; i < buffer.length; i++) {
            const v = (buffer[i] - 128) / 128;
            sum += v * v;
          }
          target = Math.min(1, Math.sqrt(sum / buffer.length) * 4.2);
        } else {
          // speech-shaped wander: syllabic pulses + slow phrase envelope
          const t = (now - started) / 1000;
          const phrase = 0.55 + 0.45 * Math.sin(t * 0.9);
          const syllable = Math.abs(Math.sin(t * 5.3) * Math.sin(t * 3.1));
          target = Math.min(1, (0.18 + 0.5 * syllable) * phrase + Math.random() * 0.06);
        }
      }

      // needle ballistics: attack fast, release slow
      const k = target > levelRef.current ? 0.32 : 0.07;
      levelRef.current += (target - levelRef.current) * k;

      const angle = REST_ANGLE + (MAX_ANGLE - REST_ANGLE) * levelRef.current;
      needleRef.current?.setAttribute("transform", `rotate(${angle} 60 64)`);
      peakRef.current?.setAttribute(
        "fill",
        levelRef.current > 0.78 ? "#D94126" : "rgba(26,26,26,0.12)",
      );

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [analyser, active]);

  return (
    <div className="rounded-xl bg-[#FFFDF8] border border-black/10 shadow-sm px-2 pt-1 pb-1.5 w-[104px] select-none pointer-events-none">
      <svg viewBox="0 0 120 74" className="w-full h-auto" aria-hidden="true">
        {/* scale arc ticks */}
        {Array.from({ length: 11 }, (_, i) => {
          const angle = REST_ANGLE + (i / 10) * (MAX_ANGLE - REST_ANGLE);
          const rad = ((angle - 90) * Math.PI) / 180;
          const r1 = 44;
          const r2 = i % 5 === 0 ? 36 : 40;
          const red = i >= 8;
          return (
            <line
              key={i}
              x1={60 + r2 * Math.cos(rad)}
              y1={64 + r2 * Math.sin(rad)}
              x2={60 + r1 * Math.cos(rad)}
              y2={64 + r1 * Math.sin(rad)}
              stroke={red ? "#D94126" : "rgba(26,26,26,0.4)"}
              strokeWidth={i % 5 === 0 ? 1.6 : 0.8}
            />
          );
        })}
        <text
          x="22"
          y="24"
          fontSize="8"
          className="font-mono"
          fill="rgba(26,26,26,0.4)"
        >
          −
        </text>
        <text
          x="93"
          y="24"
          fontSize="8"
          className="font-mono"
          fill="#D94126"
        >
          +
        </text>

        {/* needle */}
        <g ref={needleRef} transform={`rotate(${REST_ANGLE} 60 64)`}>
          <line
            x1="60"
            y1="64"
            x2="60"
            y2="18"
            stroke="#1A1A1A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
        <circle cx="60" cy="64" r="4" fill="#1A1A1A" />

        {/* peak lamp */}
        <circle ref={peakRef} cx="106" cy="60" r="3" fill="rgba(26,26,26,0.12)" />

        <text
          x="60"
          y="60"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          className="font-mono"
          fill="rgba(26,26,26,0.55)"
        >
          VU
        </text>
      </svg>
      <div className="text-[6.5px] font-mono uppercase tracking-[0.22em] text-black/35 text-center">
        Signal
      </div>
    </div>
  );
};

export default VUMeter;
