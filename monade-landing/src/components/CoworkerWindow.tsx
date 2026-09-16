"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./Logo";

/**
 * The AI Coworker window, replaying Session 1 of the recorded demo (build the
 * campaign): the golden-hour edit, the messaging research on our own data, and
 * the four variants on one locked layout. Light, cool-neutral chrome; each new
 * message is appended to the thread (it scrolls like a real chat); the preview pane always shows the latest output.
 */

type Scenario = {
  title: string;
  user: string;
  status: string;
  working: string;
  reply: string[];
  file: string;
  kind: "png" | "md";
  preview: "edit" | "angles" | "variants";
};

const SCENARIOS: Scenario[] = [
  {
    title: "Launch campaign",
    user: "On the mobile creative, make the time of day golden hour, keep everything else identical.",
    status: "Editing Mobile-Master_9x16_v2.jpg · ran nano_banana_edit.py",
    working: "Editing the image",
    reply: [
      "Done. Golden hour on the mobile master, everything else identical: same furniture, same framing, same crop.",
      "Before and after side by side. Saved to demo/assets/campaign/ as the approved base for the variants.",
    ],
    file: "Mobile_9x16_goldenhour.png",
    kind: "png",
    preview: "edit",
  },
  {
    title: "Launch campaign",
    user: "What messaging angles should I be thinking of for this property?",
    status: "Read leads_voice.csv, meta_daily_performance.csv, meta_creatives.csv, competitor_intel.json",
    working: "Researching",
    reply: [
      "Who converts on this corridor: IT-corridor HNIs and upgraders moving out of 2 BHKs. That's from leads_voice.csv, the calls where people actually booked a visit.",
      "What worked before: warm, end-of-day creatives out-ran price-led ones by 1.6x on site visits (meta_daily_performance.csv). Competitors are all pushing price and possession dates.",
      "Four angles, each tied to that: homecoming, the upgrade, evenings for the IT corridor, and the commute.",
    ],
    file: "messaging_angles.md",
    kind: "md",
    preview: "angles",
  },
  {
    title: "Launch campaign",
    user: "Show me how the four messages look on the creative.",
    status: "Ran 4 overlay commands, used a tool",
    working: "Rendering four variants",
    reply: [
      "Rendering the four now. Same locked layout on each: mark top-left, big left-aligned caps headline over the plum scrim, gold subline. Only the words change. First two below.",
      "Text goes on deterministically with the overlay script, so the layout is pixel-identical across all four.",
    ],
    file: "Creative_9x16_V1-V4.png",
    kind: "png",
    preview: "variants",
  },
];

type Phase = "typing" | "sent" | "status" | "working" | "reply" | "preview" | "hold";

function useTicker(active: boolean) {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = Date.now();
    const id = setInterval(() => setSec(Math.floor((Date.now() - t0) / 1000)), 500);
    return () => clearInterval(id);
  }, [active]);
  return active ? sec : 0;
}

/* eslint-disable @next/next/no-img-element */
function PreviewEdit() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="grid flex-1 grid-cols-2 gap-4">
        {[
          ["Before · agency master", "/coworker/before.jpg"],
          ["After · golden hour", "/coworker/after.jpg"],
        ].map(([cap, src], i) => (
          <div key={cap} className="fade-up flex min-h-0 flex-col" style={{ animationDelay: `${0.15 + i * 0.35}s` }}>
            <div className="mb-2 text-[11px] uppercase tracking-wider text-[#6b7280]">{cap}</div>
            <div className="min-h-0 flex-1 overflow-hidden rounded-md bg-[#e5e7eb] shadow-[0_8px_30px_-16px_rgba(15,23,42,0.35)]">
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        ))}
      </div>
      <div className="fade-up mt-4 rounded-md border border-[#dcdfe5] bg-white px-3 py-2 text-[12px] text-[#374151]" style={{ animationDelay: "0.9s" }}>
        One edit, pixel-level. Furniture, framing and crop unchanged; only the light changed.
      </div>
    </div>
  );
}

function PreviewAngles() {
  const rows: [string, string, number][] = [
    ["Homecoming", "Some hours you don't schedule. You come home to them.", 78],
    ["The upgrade", "Room for the life you've grown into", 71],
    ["IT-corridor evenings", "Designed around your evenings", 84],
    ["The commute", "Ten minutes from work. A world away from it.", 63],
  ];
  return (
    <div className="p-5">
      <div className="fade-up text-[15px] font-medium text-[#111827]" style={{ animationDelay: "0.1s" }}>
        Messaging angles, ranked on our own booking data
      </div>
      <div className="fade-up mt-1 text-[12px] text-[#6b7280]" style={{ animationDelay: "0.2s" }}>
        Fit score = share of booked site visits from leads who responded to this theme in past campaigns.
      </div>
      <div className="mt-4 space-y-3">
        {rows.map(([t, line, score], i) => (
          <div key={t} className="fade-up rounded-md border border-[#dcdfe5] bg-white p-3" style={{ animationDelay: `${0.4 + i * 0.25}s` }}>
            <div className="flex items-center justify-between gap-3">
              <div className="text-[13px] font-medium text-[#111827]">{t}</div>
              <div className="tnum text-[12px] text-[#6b7280]">{score}</div>
            </div>
            <div className="mt-1 text-[12px] text-[#374151]">“{line}”</div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eef0f3]">
              <div className="h-full rounded-full bg-amber" style={{ width: `${score}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="fade-up mt-3 text-[11px] text-[#6b7280]" style={{ animationDelay: "1.5s" }}>
        Sources: leads_voice.csv · meta_daily_performance.csv · competitor_intel.json
      </div>
    </div>
  );
}

function PreviewVariants() {
  const v = [
    ["V1 · Homecoming", "/coworker/v1.jpg"],
    ["V2 · The upgrade", "/coworker/v2.jpg"],
  ];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="grid flex-1 grid-cols-2 gap-4">
        {v.map(([cap, src], i) => (
          <div key={cap} className="fade-up flex min-h-0 flex-col" style={{ animationDelay: `${0.15 + i * 0.3}s` }}>
            <div className="min-h-0 flex-1 overflow-hidden rounded-md bg-[#e5e7eb] shadow-[0_8px_30px_-16px_rgba(15,23,42,0.35)]">
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            </div>
            <div className="mt-2 text-[11px] text-[#6b7280]">{cap}</div>
          </div>
        ))}
      </div>
      <div className="fade-up mt-4 rounded-md border border-[#dcdfe5] bg-white px-3 py-2 text-[12px] text-[#374151]" style={{ animationDelay: "1s" }}>
        Same layout on all four, only the message changes. Next: a small-budget A/B test on the audience that booked the most visits last time.
      </div>
    </div>
  );
}
/* eslint-enable @next/next/no-img-element */

export default function CoworkerWindow() {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState<number | null>(null); // preview pane starts empty
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [inView, setInView] = useState(false);
  const [history, setHistory] = useState<number[]>([]); // scenarios already in the thread
  const ref = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const sc = SCENARIOS[idx];
  const sec = useTicker(phase === "working");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => setInView(es.some((e) => e.isIntersecting)), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const t0 = setTimeout(() => {
        setTyped(sc.user);
        setShown(idx);
        setPhase("preview");
      }, 0);
      return () => clearTimeout(t0);
    }
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (typed.length < sc.user.length) t = setTimeout(() => setTyped(sc.user.slice(0, typed.length + 2)), 26);
      else t = setTimeout(() => setPhase("sent"), 350);
    } else if (phase === "sent") t = setTimeout(() => setPhase("status"), 500);
    else if (phase === "status") t = setTimeout(() => setPhase("working"), 500);
    else if (phase === "working") t = setTimeout(() => setPhase("reply"), 2400);
    else if (phase === "reply")
      t = setTimeout(() => {
        setShown(idx);
        setPhase("preview");
      }, 900);
    else if (phase === "preview") t = setTimeout(() => setPhase("hold"), 5200);
    else if (phase === "hold")
      t = setTimeout(() => {
        const next = (idx + 1) % SCENARIOS.length;
        // keep earlier exchanges in the thread; start clean only when the loop restarts
        setHistory(next === 0 ? [] : (h) => [...h, idx]);
        if (next === 0) setShown(null); // loop restart: close the preview too
        setIdx(next);
        setTyped("");
        setPhase("typing");
      }, 300);
    return () => clearTimeout(t);
  }, [phase, typed, inView, sc.user, idx]);

  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [phase, typed, history]);

  const sent = phase !== "typing";
  const showStatus = ["status", "working", "reply", "preview", "hold"].includes(phase);
  const showWorking = phase === "working";
  const showReply = ["reply", "preview", "hold"].includes(phase);
  const S = shown === null ? null : SCENARIOS[shown];

  const chevron = (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-[#d5d9e0] bg-[#eef0f3] text-[#111827] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]"
    >
      {/* Window bar */}
      <div className="flex h-10 items-center justify-between border-b border-[#dcdfe5] bg-[#eef0f3] px-3">
        <div className="flex items-center gap-2 text-[12.5px]">
          <LogoMark size={10} />
          <span className="font-medium">{sc.title}</span>
          <span className="text-[#9aa3af]">{chevron}</span>
        </div>
        <div className="flex items-center gap-4 text-[#9aa3af]">
          <svg width="14" height="12" viewBox="0 0 14 12" aria-hidden><rect x="0.75" y="0.75" width="12.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.1" fill="none" /><path d="M8 0.75v10.5" stroke="currentColor" strokeWidth="1.1" /></svg>
          <span className="h-px w-3 bg-current" />
          <span className="h-3 w-3 rounded-[2px] border border-current" />
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M2 2l6 6M8 2 2 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        </div>
      </div>

      <div className="grid md:grid-cols-[44fr_56fr]">
        {/* Chat pane */}
        <div className="flex h-[520px] flex-col border-b border-[#dcdfe5] bg-white md:h-[700px] md:border-b-0 md:border-r">
          <div ref={threadRef} className="thread min-h-0 flex-1 space-y-4 overflow-y-auto px-5 pt-5 pb-2 text-[13.5px]">
            {history.map((h) => {
              const H = SCENARIOS[h];
              return (
                <div key={h} className="space-y-4">
                  <div className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm bg-[#e9edf3] px-3.5 py-2.5 leading-relaxed text-[#111827]">{H.user}</div>
                  <div className="text-[11.5px] text-[#6b7280]">{H.status}</div>
                  {H.reply.map((p, i) => (
                    <div key={i} className="max-w-[96%] leading-relaxed text-[#111827]">
                      {p}
                    </div>
                  ))}
                </div>
              );
            })}
            {sent && (
              <div className="pop-in ml-auto max-w-[88%] rounded-xl rounded-tr-sm bg-[#e9edf3] px-3.5 py-2.5 leading-relaxed text-[#111827]">{sc.user}</div>
            )}
            {showStatus && <div className="fade-up text-[11.5px] text-[#6b7280]">{sc.status}</div>}
            {showWorking && (
              <div className="fade-up flex items-center gap-2 text-[12.5px] text-[#374151]">
                <span className="inline-block h-3 w-3 rounded-[2px] bg-amber spin" />
                {sc.working}… <span className="tnum text-[#9aa3af]">{sec}s</span>
              </div>
            )}
            {showReply &&
              sc.reply.map((p, i) => (
                <div key={i} className="fade-up max-w-[96%] leading-relaxed text-[#111827]" style={{ animationDelay: `${i * 0.35}s` }}>
                  {p}
                </div>
              ))}
          </div>

          {/* Composer */}
          <div className="p-4">
            <div className="rounded-xl border border-[#d5d9e0] bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
              <div className="min-h-[40px] text-[13.5px] leading-relaxed text-[#111827]">
                {!sent ? (
                  <>
                    {typed}
                    <span className="ml-0.5 inline-block h-[14px] w-[1.5px] translate-y-[2px] bg-amber blink" />
                  </>
                ) : (
                  <span className="text-[#9aa3af]">Write a message…</span>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between text-[11.5px] text-[#6b7280]">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md"><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg></span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-md"><svg width="14" height="12" viewBox="0 0 14 12" aria-hidden><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3l1.5 1.5h4.5A1.5 1.5 0 0 1 13 4v5.5A1.5 1.5 0 0 1 11.5 11h-9A1.5 1.5 0 0 1 1 9.5z" stroke="currentColor" strokeWidth="1.1" fill="none" /></svg></span>
                  <span className="flex h-7 items-center gap-1 rounded-md px-2">{chevron}Auto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 items-center gap-1.5 rounded-md px-2 text-[#374151]">
                    Monade Coworker <span className="text-[#9aa3af]">High</span>
                    {chevron}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-md text-[#374151]">
                    <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden><rect x="3.5" y="1" width="5" height="8" rx="2.5" fill="currentColor" /><path d="M1.5 6.5a4.5 4.5 0 0 0 9 0M6 11v2" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" /></svg>
                  </span>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-md ${sent ? "border border-[#cfd4dc] text-[#374151]" : "bg-[#111827] text-white"}`}>
                    {sent ? (
                      <span className="h-2.5 w-2.5 rounded-[2px] bg-current" />
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M5 9V1M1.5 4.5 5 1l3.5 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview pane */}
        <div className="flex h-[420px] flex-col bg-[#f5f6f8] md:h-[700px]">
          <div className="flex h-10 items-center justify-between border-b border-[#dcdfe5] px-3">
            <div className="flex min-w-0 items-center gap-2 text-[#9aa3af]">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><rect x="1.5" y="1.5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.1" fill="none" /><path d="M4.5 1.5v9" stroke="currentColor" strokeWidth="1.1" /></svg>
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><path d="M4 3 1.5 6 4 9M8 3l2.5 3L8 9" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" /></svg>
              {S ? (
                <>
                  <span className="truncate text-[11.5px] text-[#374151]">{S.file}</span>
                  <span className="rounded border border-[#d5d9e0] px-1 text-[9px] uppercase">{S.kind}</span>
                </>
              ) : (
                <span className="truncate text-[11.5px] text-[#9aa3af]">No file open</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[#9aa3af]">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><rect x="3.5" y="3.5" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.1" fill="none" /><path d="M1.5 8.5v-6a1 1 0 0 1 1-1h6" stroke="currentColor" strokeWidth="1.1" fill="none" /></svg>
              <span className="inline-flex h-6 items-center gap-1 rounded-md bg-[#111827] px-2 text-[10.5px] font-medium text-white">
                <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden><path d="M5 1v6M2.5 4.5 5 7l2.5-2.5M1.5 9h7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Download
              </span>
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1 9 4 6M9 1 6 4M6 1h3v3M4 9H1V6" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" /></svg>
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M2 2l6 6M8 2 2 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </div>
          </div>
          <div className="relative flex-1">
            {S ? (
              <div key={shown} className="absolute inset-0 overflow-hidden fade-up" style={{ animationDuration: "0.4s" }}>
                {S.preview === "edit" && <PreviewEdit />}
                {S.preview === "angles" && <PreviewAngles />}
                {S.preview === "variants" && <PreviewVariants />}
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#b3b9c4]">
                  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="mx-auto"><rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.3" /></svg>
                  <div className="mt-2 text-[12px]">Files the coworker creates open here</div>
                </div>
              </div>
            )}
            {showWorking && (
              <div className="absolute right-3 top-3 flex items-center gap-2 rounded-md border border-[#dcdfe5] bg-white/95 px-2 py-1 text-[11px] text-[#374151] shadow-sm">
                <span className="inline-block h-2.5 w-2.5 rounded-[2px] bg-amber spin" /> Updating…
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
