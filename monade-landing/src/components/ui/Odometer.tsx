"use client";

import { useEffect, useRef, useState } from "react";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * Drum-odometer numerals: each digit is a vertical strip of 0–9 that rolls
 * into place once when scrolled into view, like a mechanical counter.
 * Non-digit characters (",", "+", ".", "s", "%") render as static text.
 */
export const Odometer = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [armed, setArmed] = useState(false);

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
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const chars = Array.from(value).map((char, i, all) => ({
    char,
    ordinal: /\d/.test(char)
      ? all.slice(0, i).filter((c) => /\d/.test(c)).length
      : -1,
  }));

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline tabular-nums ${className ?? ""}`}
      aria-label={value}
    >
      {chars.map(({ char, ordinal }, i) => {
        if (ordinal === -1) {
          return (
            <span key={i} aria-hidden="true">
              {char}
            </span>
          );
        }
        const target = Number(char);
        const delay = ordinal * 70;
        return (
          <span
            key={i}
            aria-hidden="true"
            className="inline-flex overflow-hidden"
            style={{ height: "1.1em" }}
          >
            <span
              className="flex flex-col leading-[1.1]"
              style={{
                transform: armed
                  ? `translateY(-${(target + 10) * 1.1}em)`
                  : "translateY(0)",
                transition: `transform 1.1s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
              }}
            >
              {[...DIGITS, ...DIGITS].map((d, j) => (
                <span key={j}>{d}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
};

export default Odometer;
