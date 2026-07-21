"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useSpring } from "framer-motion";

const START_ANGLE = -120;
const SWEEP = 240;
const MAX_SECONDS = 1.6;
const TARGET_SECONDS = 0.4;

const angleFor = (seconds: number) =>
  START_ANGLE + (seconds / MAX_SECONDS) * SWEEP;

const polar = (cx: number, cy: number, r: number, angleDeg: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const MAJOR_TICKS = [0, 0.4, 0.8, 1.2, 1.6];

/**
 * Braun-style latency gauge. The needle sweeps once into view and settles
 * at 0.4s — time to first word — with mechanical overshoot. Press to replay.
 */
export const LatencyDial = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const needleRef = useRef<SVGGElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [run, setRun] = useState(0);
  const [armed, setArmed] = useState(false);
  const angle = useSpring(START_ANGLE, { stiffness: 40, damping: 8, mass: 1.2 });

  useEffect(() => {
    const unsubscribe = angle.on("change", (v) => {
      needleRef.current?.setAttribute("transform", `rotate(${v} 130 130)`);
    });
    return unsubscribe;
  }, [angle]);

  useEffect(() => {
    if (!armed) return;
    if (prefersReducedMotion) {
      angle.jump(angleFor(TARGET_SECONDS));
      return;
    }
    angle.jump(START_ANGLE);
    angle.set(angleFor(TARGET_SECONDS));
  }, [armed, run, angle, prefersReducedMotion]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cx = 130;
  const cy = 130;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setRun((r) => r + 1)}
      aria-label="Replay latency sweep — first word in 0.4 seconds"
      className="group relative block w-full max-w-[320px] mx-auto cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-clay/50 rounded-full"
    >
      <svg viewBox="0 0 260 260" className="w-full h-auto">
        {/* face */}
        <circle
          cx={cx}
          cy={cy}
          r={118}
          fill="#FFFDF8"
          stroke="var(--hairline)"
          strokeWidth="1"
        />
        <circle
          cx={cx}
          cy={cy}
          r={110}
          fill="none"
          stroke="var(--hairline)"
          strokeWidth="0.5"
        />

        {/* minor ticks */}
        {Array.from({ length: 33 }, (_, i) => {
          const angle = START_ANGLE + (i / 32) * SWEEP;
          const outer = polar(cx, cy, 104, angle);
          const inner = polar(cx, cy, i % 8 === 0 ? 92 : 99, angle);
          return (
            <line
              key={i}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={i % 8 === 0 ? "#1A1A1A" : "rgba(26,26,26,0.25)"}
              strokeWidth={i % 8 === 0 ? 1.5 : 0.75}
            />
          );
        })}

        {/* major labels */}
        {MAJOR_TICKS.map((s) => {
          const pos = polar(cx, cy, 80, angleFor(s));
          return (
            <text
              key={s}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-mono"
              fontSize="9"
              fill={s === TARGET_SECONDS ? "#D97757" : "rgba(26,26,26,0.45)"}
              fontWeight={s === TARGET_SECONDS ? 700 : 400}
            >
              {s.toFixed(1)}
            </text>
          );
        })}

        {/* the slow zone */}
        <text
          x={cx}
          y={cy + 62}
          textAnchor="middle"
          className="font-mono"
          fontSize="7"
          letterSpacing="0.15em"
          fill="rgba(26,26,26,0.35)"
        >
          LEGACY IVR ≈ 1.2s+
        </text>

        {/* target marker */}
        {(() => {
          const pos = polar(cx, cy, 110, angleFor(TARGET_SECONDS));
          return <circle cx={pos.x} cy={pos.y} r={3} fill="#D97757" />;
        })()}

        {/* needle */}
        <g ref={needleRef} transform={`rotate(${START_ANGLE} 130 130)`}>
          <line
            x1={cx}
            y1={cy + 18}
            x2={cx}
            y2={cy - 96}
            stroke="#D94126"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* hub */}
        <circle cx={cx} cy={cy} r={7} fill="#1A1A1A" />
        <circle cx={cx} cy={cy} r={2.5} fill="#FBF7EF" />

        {/* readout */}
        <text
          x={cx}
          y={cy + 88}
          textAnchor="middle"
          className="font-mono"
          fontSize="13"
          fontWeight="700"
          fill="#1A1A1A"
        >
          0.4s
        </text>
        <text
          x={cx}
          y={cy + 100}
          textAnchor="middle"
          className="font-mono"
          fontSize="6.5"
          letterSpacing="0.18em"
          fill="rgba(26,26,26,0.4)"
        >
          TIME TO FIRST WORD
        </text>
      </svg>

      <span className="machine-label text-ink/30 absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Press to replay
      </span>
    </button>
  );
};

export default LatencyDial;
