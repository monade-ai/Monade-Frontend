"use client";

import { useEffect, useState } from "react";

/* Shared bits, styled after the Monade dashboard: black surfaces, hairlines,
   uppercase tracked labels, white primary buttons. */

function D({ delay, children, className = "" }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <div className={`fade-up ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <circle cx="7" cy="7" r="6.5" fill="#2f8f5b" />
      <path d="M4 7.2l2 2 4-4.4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Spinner() {
  return <span className="inline-block h-3 w-3 rounded-[2px] bg-amber spin" aria-hidden />;
}

function PanelHeader({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="flex h-11 items-center justify-between border-b border-border px-4">
      <span className="text-[13px] font-medium">{title}</span>
      {right}
    </div>
  );
}

/* 1. Languages: transcript switching from English to Hindi */
export function LanguagesMock() {
  const [lang, setLang] = useState("English");
  useEffect(() => {
    const t = setTimeout(() => setLang("Hindi"), 2100);
    return () => clearTimeout(t);
  }, []);
  const lines = [
    { who: "Agent", text: "Hi Priya, this is Aarav from Aster Learning. You'd asked about the online MBA, is this a good time?", delay: 0.2 },
    { who: "Priya", text: "Haan, but Hindi mein baat kar sakte hain?", delay: 1.4 },
    { who: "Agent", text: "बिल्कुल। आपने ऑनलाइन MBA के बारे में पूछा था, सही? दो साल का प्रोग्राम है, वीकेंड क्लासेस के साथ।", delay: 2.4, hi: true },
    { who: "Priya", text: "Fees kitni hai aur EMI option hai?", delay: 3.6 },
    { who: "Agent", text: "फीस 1.8 लाख है, और हाँ, बिना ब्याज की EMI 24 महीने तक मिलती है।", delay: 4.5, hi: true },
  ];
  return (
    <div className="flex h-full flex-col">
      <PanelHeader
        title="Call · Priya S. · 02:14"
        right={
          <span
            key={lang}
            className="pop-in inline-flex items-center gap-1.5 rounded-md border border-amber/50 bg-amber/10 px-2 py-0.5 text-[11px] text-amber"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {lang}
          </span>
        }
      />
      <div className="flex-1 space-y-3 overflow-hidden p-4">
        {lines.map((l, i) => (
          <D key={i} delay={l.delay}>
            <div className="label mb-1 text-[10px]">{l.who}</div>
            <div
              className={`max-w-[92%] rounded-lg px-3 py-2 text-[13px] leading-relaxed ${
                l.who === "Agent" ? "bg-[#141414] text-text" : "ml-auto bg-[#1b1b1b] text-[#d4d4d4]"
              }`}
            >
              {l.text}
            </div>
          </D>
        ))}
      </div>
      <div className="border-t border-border px-4 py-2 text-[11px] text-muted-2">
        Language switched mid-call · 97 supported
      </div>
    </div>
  );
}

/* 2. CRM: lead record filling in after the call */
export function CrmMock() {
  const fields = [
    ["Name", "Rohan Mehta"],
    ["Phone", "+91 98••• ••210"],
    ["Programme", "Online MBA, 2-year"],
    ["Budget", "₹1.5 to 2 lakh, EMI preferred"],
    ["Intent", "High · wants to start in Jan"],
    ["Next step", "Counsellor call, Thu 11:00"],
  ];
  return (
    <div className="flex h-full flex-col">
      <PanelHeader title="Lead · Rohan Mehta" right={<span className="label text-[10px]">Call ended · 04:12</span>} />
      <div className="flex-1 p-4">
        <div className="overflow-hidden rounded-lg border border-border">
          {fields.map(([k, v], i) => (
            <D key={k} delay={0.3 + i * 0.5} className="grid grid-cols-[110px_1fr] items-center gap-3 border-b border-border-soft px-3 py-2.5 text-[13px] last:border-b-0">
              <span className="text-muted-2">{k}</span>
              <span className="text-text">{v}</span>
            </D>
          ))}
        </div>
        <D delay={3.6} className="mt-3 flex items-center gap-2 text-[12px] text-muted">
          <Tick /> Synced to CRM · recording, transcript and summary attached
        </D>
      </div>
      <div className="flex items-center gap-2 border-t border-border px-4 py-2">
        {["HubSpot", "Salesforce", "Zoho", "LeadSquared", "Custom API"].map((n) => (
          <span key={n} className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-2">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

/* 3. Full control: call log row + prompt change approval */
export function ControlMock() {
  const [approved, setApproved] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setApproved(true), 3600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="flex h-full flex-col">
      <PanelHeader title="Call logs" right={<button className="btn btn-white btn-sm h-7 px-2 text-[11px]">Export CSV</button>} />
      <div className="p-4">
        <div className="overflow-hidden rounded-lg border border-border text-[12px]">
          <div className="grid grid-cols-[28px_1fr_60px_84px_70px] items-center gap-2 border-b border-border-soft bg-[#0f0f0f] px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-2">
            <span />
            <span>Call ID</span>
            <span>Length</span>
            <span>Outcome</span>
            <span>Actions</span>
          </div>
          {[
            ["c_9f21", "03:48", "Qualified", true],
            ["c_9f1e", "01:12", "Callback", false],
            ["c_9f1a", "04:31", "Qualified", true],
          ].map(([id, len, out, ok], i) => (
            <D key={String(id)} delay={0.2 + i * 0.35} className="grid grid-cols-[28px_1fr_60px_84px_70px] items-center gap-2 border-b border-border-soft px-3 py-2 last:border-b-0">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border">
                <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden>
                  <path d="M1 0.5v7l6-3.5z" fill="#f9fafb" />
                </svg>
              </span>
              <span className="font-mono text-muted">{String(id)}</span>
              <span className="tnum">{String(len)}</span>
              <span className={ok ? "text-green" : "text-muted"}>{String(out)}</span>
              <span className="flex gap-2 text-muted-2">
                <span title="Transcript">Txt</span>
                <span title="Comment">Cmt</span>
              </span>
            </D>
          ))}
        </div>

        <D delay={1.6} className="mt-3 rounded-lg border border-amber/40 bg-amber/5 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium">Prompt change awaiting your approval</span>
            <span className="label text-[10px]">v47 → v48</span>
          </div>
          <div className="mt-2 space-y-1 font-mono text-[11px]">
            <div className="text-red/90">- Ask for availability before the fee question</div>
            <div className="text-green">+ Answer the fee question first, then offer a slot</div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {approved ? (
              <span className="pop-in inline-flex items-center gap-1.5 text-[12px] text-green">
                <Tick /> Approved by you · live on next call
              </span>
            ) : (
              <>
                <button className="btn btn-white btn-sm h-7 px-3 text-[11px]">Approve</button>
                <button className="btn btn-ghost btn-sm h-7 px-3 text-[11px]">Reject</button>
              </>
            )}
          </div>
        </D>
      </div>
    </div>
  );
}

/* 4. WhatsApp: the thread after the call, styled like WhatsApp's dark theme */
function WaTicks({ read = true }: { read?: boolean }) {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" aria-hidden className="ml-1 inline-block align-middle">
      <path d="M1 6l3 3 6-7" stroke={read ? "#53bdeb" : "#8696a0"} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6l3 3 6-7" stroke={read ? "#53bdeb" : "#8696a0"} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WaTime({ t, out }: { t: string; out?: boolean }) {
  return (
    <span className="float-right ml-2 mt-1 text-[10px] text-[#8696a0]">
      {t}
      {out && <WaTicks />}
    </span>
  );
}

export function WhatsappMock() {
  const inBubble = "relative max-w-[82%] rounded-lg rounded-tl-none bg-[#202c33] px-2.5 py-1.5 text-[12.5px] leading-snug text-[#e9edef] shadow";
  const outBubble = "relative ml-auto max-w-[82%] rounded-lg rounded-tr-none bg-[#005c4b] px-2.5 py-1.5 text-[12.5px] leading-snug text-[#e9edef] shadow";
  return (
    <div className="flex h-full flex-col">
      <PanelHeader title="WhatsApp agent" right={<span className="label text-[10px]">Same number as the call</span>} />
      <div className="flex flex-1 items-start justify-center p-4">
        <div className="flex w-full max-w-[330px] flex-col overflow-hidden rounded-[22px] border border-[#2a3942] bg-[#0b141a]" style={{ minHeight: 420 }}>
          {/* WhatsApp header */}
          <div className="flex items-center gap-3 bg-[#202c33] px-3 py-2">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="text-[#aebac1]">
              <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25d366] text-[12px] font-semibold text-[#0b141a]">A</span>
            <div className="min-w-0 flex-1 leading-tight">
              <div className="truncate text-[13px] font-medium text-[#e9edef]">Aster Learning</div>
              <div className="text-[10.5px] text-[#8696a0]">online</div>
            </div>
            <div className="flex items-center gap-4 text-[#aebac1]">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden><path d="M3 2h3l1.5 3.5-2 1.5a8 8 0 0 0 3.5 3.5l1.5-2L14 10v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1z" fill="currentColor" /></svg>
              <svg width="4" height="14" viewBox="0 0 4 14" aria-hidden><circle cx="2" cy="2" r="1.5" fill="currentColor" /><circle cx="2" cy="7" r="1.5" fill="currentColor" /><circle cx="2" cy="12" r="1.5" fill="currentColor" /></svg>
            </div>
          </div>

          {/* Thread on the doodle background */}
          <div
            className="flex-1 space-y-1.5 px-3 py-3"
            style={{
              backgroundColor: "#0b141a",
              backgroundImage:
                "radial-gradient(circle at 10px 10px, rgba(255,255,255,0.035) 1px, transparent 1.5px), radial-gradient(circle at 30px 26px, rgba(255,255,255,0.03) 1px, transparent 1.5px)",
              backgroundSize: "40px 40px",
            }}
          >
            <D delay={0.1} className="mx-auto w-fit rounded-md bg-[#182229] px-2 py-0.5 text-[10px] text-[#8696a0]">
              TODAY
            </D>
            <D delay={0.4} className="mx-auto w-fit rounded-md bg-[#182229] px-2 py-1 text-center text-[10px] text-[#8696a0]">
              Voice call · 4 min 12 sec
            </D>
            <D delay={0.9} className={inBubble}>
              Great talking to you, Priya. Here&apos;s the programme brochure we discussed.
              <WaTime t="6:41 pm" />
            </D>
            <D delay={1.6} className={inBubble}>
              <div className="flex items-center gap-2 rounded-md bg-[#1d282f] p-2">
                <span className="flex h-8 w-7 items-center justify-center rounded-sm bg-[#e53935] text-[8px] font-bold text-white">PDF</span>
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-[12px]">Online MBA brochure.pdf</div>
                  <div className="text-[10px] text-[#8696a0]">12 pages · 2.1 MB · PDF</div>
                </div>
              </div>
              <WaTime t="6:41 pm" />
            </D>
            <D delay={2.5} className={inBubble}>
              And the seat booking link. ₹2,000, fully adjusted in your first EMI.
              <div className="mt-1.5 overflow-hidden rounded-md bg-[#1d282f]">
                <div className="h-1 bg-[#25d366]" />
                <div className="px-2 py-1.5 leading-tight">
                  <div className="text-[11.5px] text-[#e9edef]">Reserve your seat · Aster Learning</div>
                  <div className="text-[10px] text-[#8696a0]">pay.aster.example</div>
                </div>
              </div>
              <WaTime t="6:42 pm" />
            </D>
            <D delay={3.6} className={outBubble}>
              Thanks, will do this evening
              <WaTime t="6:47 pm" out />
            </D>
            <D delay={4.4} className={inBubble}>
              Perfect. Reply here anytime, I&apos;ll be around.
              <WaTime t="6:47 pm" />
            </D>
          </div>

          {/* Composer */}
          <div className="flex items-center gap-2 bg-[#202c33] px-2 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="text-[#8696a0]"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" /><circle cx="6.5" cy="7.5" r="0.9" fill="currentColor" /><circle cx="11.5" cy="7.5" r="0.9" fill="currentColor" /><path d="M6 11a4 4 0 0 0 6 0" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" /></svg>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="text-[#8696a0]"><path d="M10.5 4.5 5.8 9.2a2 2 0 0 0 2.8 2.8l5-5a3.3 3.3 0 0 0-4.7-4.7l-5 5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" /></svg>
            <div className="flex-1 rounded-full bg-[#2a3942] px-3 py-1.5 text-[12px] text-[#8696a0]">Message</div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a884]">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="text-[#0b141a]"><rect x="4.5" y="1" width="5" height="7.5" rx="2.5" fill="currentColor" /><path d="M2.5 6.5a4.5 4.5 0 0 0 9 0M7 11v2" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" /></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. Database: live lookup mid-call */
export function DatabaseMock() {
  return (
    <div className="flex h-full flex-col">
      <PanelHeader title="Live call · Karan V." right={<span className="label text-[10px]">Data source: bookings_db</span>} />
      <div className="flex-1 space-y-3 p-4 text-[13px]">
        <D delay={0.2}>
          <div className="label mb-1 text-[10px]">Karan</div>
          <div className="ml-auto max-w-[88%] rounded-lg bg-[#1b1b1b] px-3 py-2 text-[#d4d4d4]">Is there a test drive slot on Saturday morning?</div>
        </D>
        <D delay={1.1} className="rounded-lg border border-border bg-[#0a0a0a] p-3 font-mono text-[11px]">
          <div className="mb-1 flex items-center gap-2 text-muted-2">
            <Spinner /> query · 84 ms
          </div>
          <div className="text-[#c9c9c9]">
            SELECT slot_time FROM test_drives
            <br />
            WHERE showroom = &apos;Indiranagar&apos; AND day = &apos;Sat&apos; AND booked = false;
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1">
            {["10:30", "11:00", "11:30"].map((t, i) => (
              <span key={t} className="pop-in rounded border border-green/40 bg-green/10 px-2 py-1 text-center text-green" style={{ animationDelay: `${1.9 + i * 0.15}s` }}>
                {t}
              </span>
            ))}
          </div>
        </D>
        <D delay={2.8}>
          <div className="label mb-1 text-[10px]">Agent</div>
          <div className="max-w-[88%] rounded-lg bg-[#141414] px-3 py-2">Saturday morning I have 10:30, 11:00 or 11:30 at Indiranagar. Which one works for you?</div>
        </D>
        <D delay={3.9}>
          <div className="label mb-1 text-[10px]">Karan</div>
          <div className="ml-auto max-w-[88%] rounded-lg bg-[#1b1b1b] px-3 py-2 text-[#d4d4d4]">11, please.</div>
        </D>
      </div>
    </div>
  );
}

/* 6. Custom tool calls */
export function ToolsMock() {
  const steps = [
    { name: "send_otp", args: "{ phone: '+91 98•••' }", result: "sent", delay: 0.4 },
    { name: "check_eligibility", args: "{ income: 65000, city: 'Pune' }", result: "eligible · ₹4.2L", delay: 1.7 },
    { name: "book_slot", args: "{ slot: 'Thu 11:00', rep: 'Neha' }", result: "confirmed · invite sent", delay: 3.0 },
    { name: "handoff", args: "{ to: 'Neha', context: true }", result: "warm transfer ready", delay: 4.3 },
  ];
  return (
    <div className="flex h-full flex-col">
      <PanelHeader title="Tool calls · this call" right={<span className="label text-[10px]">4 of 11 tools used</span>} />
      <div className="flex-1 space-y-2 p-4">
        {steps.map((st) => (
          <D key={st.name} delay={st.delay} className="rounded-lg border border-border bg-[#0a0a0a] p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] text-amber">{st.name}()</span>
              <span className="pop-in inline-flex items-center gap-1.5 text-[11px] text-green" style={{ animationDelay: `${st.delay + 0.6}s` }}>
                <Tick /> {st.result}
              </span>
            </div>
            <div className="mt-1 font-mono text-[11px] text-muted-2">{st.args}</div>
          </D>
        ))}
      </div>
      <div className="border-t border-border px-4 py-2 text-[11px] text-muted-2">Any HTTP endpoint can be a tool. Define it once, the agent decides when to use it.</div>
    </div>
  );
}
