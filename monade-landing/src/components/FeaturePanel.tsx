"use client";

import { useEffect, useRef, useState } from "react";
import site from "@/content/site.json";

const f = site.features;
const WINDOW_MS = 7000;

/* Real dashboard screens (dashboard.monade.ai), one per feature. */
function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover object-left-top" draggable={false} />
    </div>
  );
}

const MOCKS: Record<string, React.ComponentType> = {
  languages: () => <Shot src="/dashboard/languages.jpg" alt="Call transcript in Hindi and Hinglish with the AI analysis alongside" />,
  crm: () => <Shot src="/dashboard/crm.jpg" alt="Deal room: every qualified lead with its outcome, snippet and recording" />,
  control: () => <Shot src="/dashboard/control.jpg" alt="Call archive: every call with transcript, verdict and recording" />,
  whatsapp: () => <Shot src="/dashboard/whatsapp.jpg" alt="WhatsApp inbox: conversations continued after the call" />,
  database: () => <Shot src="/dashboard/database.jpg" alt="Knowledge library attached to each assistant" />,
  tools: () => <Shot src="/dashboard/tools.jpg" alt="Assistant studio: tool usage and retrieval switches" />,
};

/**
 * Auto-advancing feature cards (the "vertical tabs with autoplay" pattern used by
 * Linear, Stripe and most YC landing pages): a column of cards on the left, one
 * highlighted with a progress bar, and the matching live graphic on the right.
 */
export default function FeaturePanel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const paused = false;
  const [inView, setInView] = useState(false);
  const [runId, setRunId] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => setInView(entries.some((e) => e.isIntersecting)), {
      threshold: 0.2,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let last = performance.now();
    let acc = progress;
    let raf = 0;
    const tick = (now: number) => {
      acc += (now - last) / WINDOW_MS;
      last = now;
      if (acc >= 1) {
        acc = 0;
        setActive((a) => (a + 1) % f.items.length);
        setRunId((r) => r + 1);
      }
      setProgress(acc);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, paused, active]);

  // keep the active chip in view on mobile
  useEffect(() => {
    const list = listRef.current;
    if (!list || window.innerWidth >= 768) return;
    const li = list.children[active] as HTMLElement | undefined;
    li?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  const select = (i: number) => {
    if (i === active) return;
    setActive(i);
    setProgress(0);
    setRunId((r) => r + 1);
  };

  const Mock = MOCKS[f.items[active].key];

  return (
    <section id="features" className="scroll-mt-16 border-t border-border-soft py-20 md:py-28">
      <div className="container-x">
        <h2 className="reveal text-[30px] leading-tight font-medium tracking-[-0.02em] md:text-[34px] xl:whitespace-nowrap lg:text-[38px]">{f.h2}</h2>

        <div ref={wrap} className="reveal mt-12 grid items-start gap-8 md:grid-cols-[minmax(300px,380px)_1fr] md:gap-10 lg:gap-14">
          {/* Cards */}
          <ul
            ref={listRef}
            className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-col md:overflow-visible md:px-0 md:pb-0"
          >
            {f.items.map((it, i) => {
              const isActive = i === active;
              return (
                <li key={it.key} className="w-[260px] shrink-0 snap-start md:w-auto">
                  <button
                    type="button"
                    onClick={() => select(i)}
                    aria-pressed={isActive}
                    className={`relative h-full w-full overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 md:p-5 ${
                      isActive
                        ? "border-amber/60 bg-[#111] shadow-[0_0_0_1px_rgba(245,179,1,0.15),0_20px_50px_-30px_rgba(245,179,1,0.35)]"
                        : "border-border bg-surface hover:border-[#333] hover:bg-[#0f0f0f]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold tnum ${
                          isActive ? "bg-amber text-black" : "bg-[#1a1a1a] text-muted"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className={`text-[15px] font-medium ${isActive ? "text-text" : "text-muted"}`}>{it.title}</span>
                    </div>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out md:grid"
                      style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-2 text-[13px] leading-relaxed text-muted">{it.line}</p>
                      </div>
                    </div>
                    {/* progress */}
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#1c1c1c]">
                      <span
                        className="block h-full bg-amber"
                        style={{ width: isActive ? `${progress * 100}%` : "0%" }}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Graphic */}
          <div
            className="overflow-hidden rounded-2xl border border-border bg-[#070707] shadow-[0_30px_80px_-40px_rgba(245,179,1,0.25)]"
          >
            <div className="relative min-h-[440px] md:min-h-[520px]">
              <div key={`${active}-${runId}`} className="absolute inset-0 fade-up" style={{ animationDuration: "0.35s" }}>
                <Mock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
