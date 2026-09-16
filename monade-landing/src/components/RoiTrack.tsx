"use client";

import { useEffect, useRef, useState } from "react";
import site from "@/content/site.json";

const r = site.roi;

function Panel({ title, right, children, className = "" }: { title: string; right?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`mt-5 flex flex-1 flex-col overflow-hidden rounded-lg border border-border bg-black ${className}`}>
      <div className="flex h-9 items-center justify-between border-b border-border px-3">
        <span className="label text-[10px]">{title}</span>
        {right}
      </div>
      {children}
    </div>
  );
}

function LiveDot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-green blink" />;
}

/* 01: a live demo call, as the dashboard shows it */
function CallGraphic() {
  const [sec, setSec] = useState(42);
  useEffect(() => {
    const id = setInterval(() => setSec((v) => (v + 1) % 600), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");
  const hs = [6, 12, 20, 14, 24, 18, 10, 22, 15, 26, 12, 19, 8, 16, 11, 21, 13, 9, 17, 23, 12, 7, 15, 20];
  return (
    <Panel
      title="Live call"
      right={
        <span className="flex items-center gap-1.5 text-[11px] text-muted">
          <LiveDot /> <span className="tnum">{mm}:{ss}</span>
        </span>
      }
    >
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 border-b border-border-soft px-3 py-2.5 text-[11px]">
        <span className="text-muted-2">To</span>
        <span className="tnum text-text">+91 98••• ••210</span>
        <span className="text-muted-2">Agent</span>
        <span className="text-text">Aarav · Admissions</span>
        <span className="text-muted-2">Language</span>
        <span className="text-text">Hinglish <span className="text-muted-2">· auto</span></span>
      </div>
      <div className="px-3 py-2.5">
        <svg viewBox="0 0 144 28" className="h-7 w-full" aria-hidden>
          {hs.map((h, i) => (
            <rect key={i} x={i * 6} y={14 - h / 2} width="3" height={h} rx="1" fill="#f5b301" className="wave-bar" style={{ animationDelay: `${(i % 7) * 0.11}s`, animationDuration: `${1 + (i % 3) * 0.2}s` }} />
          ))}
        </svg>
        <div className="mt-2 space-y-1.5 text-[11.5px] leading-snug">
          <div className="flex gap-2"><span className="w-10 shrink-0 text-muted-2">Agent</span><span className="text-text">Aapne online MBA ke baare mein poocha tha right?</span></div>
          <div className="flex gap-2"><span className="w-10 shrink-0 text-muted-2">You</span><span className="text-muted">Haan, fees kitni hai?</span></div>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-2 border-t border-border-soft p-3">
        <a href="#talk" className="btn btn-amber btn-sm">{r.steps[0].cta}</a>
        <a href="https://calendly.com/adhiraj-n1labs/30min" target="_blank" rel="noreferrer" className="btn btn-white btn-sm">{r.steps[0].cta2}</a>
      </div>
    </Panel>
  );
}

/* 02: the pilot report, vendor vs Monade, same leads */
function PilotGraphic({ active }: { active: boolean }) {
  const rows: [string, string, string, string, boolean][] = [
    ["Leads called", "2,000", "2,000", "same list", false],
    ["Connect rate", "38%", "41%", "+3 pts", true],
    ["Qualified", "312", "574", "+84%", true],
    ["Qualification rate", "41%", "70%", "+29 pts", true],
    ["Cost / qualified lead", "₹148", "₹79", "−47%", true],
  ];
  return (
    <Panel title="Pilot report · week 4 of 4" right={<span className="text-[10px] text-muted-2">same script, same leads</span>}>
      <div className="grid grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] gap-2 border-b border-border-soft bg-[#0a0a0a] px-3 py-1.5 text-[9.5px] uppercase tracking-wider text-muted-2">
        <span>Metric</span><span className="text-right">Vendor</span><span className="text-right text-amber">Monade</span><span className="text-right">Δ</span>
      </div>
      {rows.map(([k, a, b, d, good], i) => (
        <div
          key={k}
          className="grid grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] items-center gap-2 border-b border-border-soft px-3 py-1.5 text-[11.5px] transition-opacity duration-500 last:border-b-0"
          style={{ opacity: active ? 1 : 0, transitionDelay: `${0.15 + i * 0.12}s` }}
        >
          <span className="text-muted">{k}</span>
          <span className="tnum text-right text-muted">{a}</span>
          <span className="tnum text-right text-text">{b}</span>
          <span className={`tnum text-right ${good ? "text-green" : "text-muted-2"}`}>{d}</span>
        </div>
      ))}
      <div className="mt-auto space-y-1.5 border-t border-border-soft px-3 py-2.5">
        {r.pilot.metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2 text-[10.5px]">
            <span className="w-[112px] shrink-0 text-muted-2">{m.label}</span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[#1a1a1a]">
              <div className="absolute inset-y-0 left-0 rounded-full bg-[#4b4b4b] transition-[width] duration-[900ms] ease-out" style={{ width: active ? `${m.vendor}%` : "0%" }} />
              <div className="absolute inset-y-0 left-0 rounded-full bg-amber transition-[width] duration-[900ms] ease-out" style={{ width: active ? `${m.monade}%` : "0%", transitionDelay: "0.15s", opacity: 0.9 }} />
            </div>
            <span className="tnum w-14 text-right text-text">{m.monade}{m.unit}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* 03: cumulative return against the previous vendor */
function CurveGraphic({ active }: { active: boolean }) {
  const W = 260;
  const H = 110;
  const pad = { l: 8, r: 8, t: 26, b: 16 };
  const xs = r.curve.months;
  const ys = r.curve.values;
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const sx = (m: number) => pad.l + (m / 6) * (W - pad.l - pad.r);
  const sy = (v: number) => pad.t + (1 - (v - minY) / (maxY - minY)) * (H - pad.t - pad.b);
  const d = xs.map((m, i) => `${i === 0 ? "M" : "L"}${sx(m).toFixed(1)},${sy(ys[i]).toFixed(1)}`).join(" ");
  const area = `${d} L${sx(6).toFixed(1)},${sy(minY).toFixed(1)} L${sx(0).toFixed(1)},${sy(minY).toFixed(1)} Z`;
  const zeroY = sy(0);
  const last = { x: sx(6), y: sy(ys[6]) };
  const be = r.curve.breakEven;
  return (
    <Panel title="Cumulative return" right={<span className="text-[10px] text-muted-2">vs previous vendor</span>}>
      <div className="grid grid-cols-3 divide-x divide-border-soft border-b border-border-soft">
        {[["Break-even", `M${Math.ceil(be)}`], ["Return at M6", "2.6x"], ["Calls / month", "48k"]].map(([k, v]) => (
          <div key={k} className="px-3 py-2">
            <div className="text-[9.5px] uppercase tracking-wider text-muted-2">{k}</div>
            <div className="tnum text-[15px] font-medium text-text">{v}</div>
          </div>
        ))}
      </div>
      <div className="px-3 pt-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
          <defs>
            <linearGradient id="roiFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#f5b301" stopOpacity="0.28" />
              <stop offset="1" stopColor="#f5b301" stopOpacity="0" />
            </linearGradient>
          </defs>
          {xs.map((m) => (
            <line key={m} x1={sx(m)} x2={sx(m)} y1={pad.t} y2={H - pad.b} stroke="#1a1a1a" />
          ))}
          <line x1={pad.l} x2={W - pad.r} y1={zeroY} y2={zeroY} stroke="#3a3a3a" strokeDasharray="3 3" />
          <text x={W - pad.r} y={zeroY - 4} fill="#6b7280" fontSize="8.5" textAnchor="end">break-even</text>
          <line x1={sx(be)} x2={sx(be)} y1={pad.t} y2={H - pad.b} stroke="#2f8f5b" strokeDasharray="2 3" style={{ opacity: active ? 1 : 0, transition: "opacity 0.5s ease 1.2s" }} />
          {xs.map((m) => (
            <text key={m} x={sx(m)} y={H - 4} fill="#6b7280" fontSize="8.5" textAnchor="middle">M{m}</text>
          ))}
          <path d={area} fill="url(#roiFill)" style={{ opacity: active ? 1 : 0, transition: "opacity 1s ease 0.8s" }} />
          <path d={d} fill="none" stroke="#f5b301" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 600, strokeDashoffset: active ? 0 : 600, transition: "stroke-dashoffset 1.6s ease-out 0.2s" }} />
          {xs.map((m, i) => (
            <circle key={m} cx={sx(m)} cy={sy(ys[i])} r="2" fill="#000" stroke="#f5b301" strokeWidth="1.2" style={{ opacity: active ? 1 : 0, transition: `opacity 0.3s ease ${0.3 + i * 0.22}s` }} />
          ))}
          <circle cx={last.x} cy={last.y} r="4" fill="#f5b301" style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 1.6s" }} />
          <g style={{ opacity: active ? 1 : 0, transition: "opacity 0.4s ease 1.7s" }}>
            <rect x={last.x - 58} y={last.y - 22} width="58" height="15" rx="3" fill="#f5b301" />
            <text x={last.x - 29} y={last.y - 11.5} fill="#000" fontSize="8.5" fontWeight="600" textAnchor="middle">ROI proven</text>
          </g>
        </svg>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-border-soft px-3 py-2 text-[10.5px] text-muted-2">
        <span>Spend vs qualified-lead value, cumulative</span>
        <span className="tnum">M0 to M6</span>
      </div>
    </Panel>
  );
}

export default function RoiTrack() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - rect.top) / (rect.height * 0.9);
      setProgress(Math.max(0, Math.min(1, p)));
      if (rect.top < vh * 0.75) setActive(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="roi" className="scroll-mt-16 py-20 md:py-28">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <h2 className="text-[30px] leading-tight font-medium tracking-[-0.02em] md:text-[40px]">{r.h2}</h2>
          <p className="mt-3 text-[16px] text-muted">{r.intro}</p>
        </div>

        <div ref={ref} className="relative mt-12">
          {/* Horizontal track (desktop) */}
          <div className="absolute left-0 right-0 top-[18px] hidden h-px bg-border md:block">
            <div
              className="h-full bg-amber transition-[width] duration-200 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          {/* Vertical track (mobile) */}
          <div className="absolute bottom-0 left-[18px] top-0 w-px bg-border md:hidden">
            <div
              className="w-full bg-amber transition-[height] duration-200 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {r.steps.map((st, i) => {
              const lit = progress > i / 3 + 0.05;
              return (
                <div key={st.n} className="relative flex flex-col pl-14 md:pl-0">
                  <div
                    className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border text-[12px] font-medium tnum transition-colors md:relative ${
                      lit ? "border-amber bg-amber text-black" : "border-border bg-black text-muted"
                    }`}
                  >
                    {st.n}
                  </div>
                  <div className="flex flex-1 flex-col md:mt-6">
                    <h3 className="text-[17px] font-medium leading-snug xl:whitespace-nowrap">{st.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted md:min-h-[4.4rem]">{st.body}</p>
                    {i === 0 && <CallGraphic />}
                    {i === 1 && <PilotGraphic active={active} />}
                    {i === 2 && <CurveGraphic active={active} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
