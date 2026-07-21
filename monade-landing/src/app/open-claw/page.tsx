"use client";
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────
   Shared, reliable in-view settings (never leaves content
   stuck at opacity 0 — generous margin + low threshold)
   ──────────────────────────────────────────────────────── */

const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -10% 0px" } as const;

/* ────────────────────────────────────────────────────────
   BUSINESS KITS (content preserved; presentation simplified)
   ──────────────────────────────────────────────────────── */

const BUSINESS_KIT_CATEGORIES = [
  {
    id: "acquire",
    label: "Acquire",
    kits: [
      { slug: "speed-to-lead-engine", name: "Speed-to-Lead Engine", tagline: "Calls new inbound leads in under 30 seconds", vertical: "Any", metric: "<30s response" },
      { slug: "site-visit-scheduler", name: "Site-Visit Scheduler", tagline: "Qualifies, books, sends a car", vertical: "Real Estate", metric: "3x site visits" },
      { slug: "emi-closer", name: "EMI Closer", tagline: "Reframes price as a monthly decision", vertical: "Retail", metric: "2.1x conversion" },
      { slug: "referral-harvester", name: "Referral Harvester", tagline: "Post-success call that generates warm intros", vertical: "Any", metric: "+40% referrals" },
    ],
  },
  {
    id: "retain",
    label: "Retain",
    kits: [
      { slug: "churn-interceptor", name: "Churn Interceptor", tagline: "Calls cancellations before the emotion cools", vertical: "SaaS", metric: "29% save rate" },
      { slug: "renewal-reminder", name: "Renewal Reminder", tagline: "Loss-aversion nudges before policy lapse", vertical: "Insurance", metric: "+40% retention" },
      { slug: "service-retention-engine", name: "Service Retention Engine", tagline: "Pre-emptive service booking + value bundles", vertical: "Automotive", metric: "+37% bookings" },
      { slug: "parent-whisperer", name: "Parent Whisperer", tagline: "Arms students with ROI arguments for parents", vertical: "EdTech", metric: "2x enrollment" },
    ],
  },
  {
    id: "collect",
    label: "Collect",
    kits: [
      { slug: "collections-cfo", name: "Collections CFO", tagline: "Factual, calm, relentlessly scheduled reminders", vertical: "B2B Finance", metric: "+27% recovered" },
      { slug: "fee-reminder", name: "Fee Reminder Parents Don't Hate", tagline: "Respect + options, not threats", vertical: "Schools", metric: "+23% collection" },
      { slug: "payment-nudge-ladder", name: "Payment Link Nudge Ladder", tagline: "Escalating nudges with instant payment links", vertical: "Subscriptions" },
      { slug: "promise-to-pay-tracker", name: "Promise-to-Pay Tracker", tagline: "Logs commitments, follows up on exact dates", vertical: "BFSI" },
    ],
  },
  {
    id: "operate",
    label: "Operate",
    kits: [
      { slug: "3am-dispatcher", name: "3 AM Dispatcher", tagline: "Automated night-shift dispatching that never sleeps", vertical: "Logistics", metric: "0 missed rides" },
      { slug: "eta-truth-machine", name: "ETA Truth Machine", tagline: "Calls drivers, syncs real ETAs into the system", vertical: "Supply Chain", metric: "-47% escalations" },
      { slug: "kyc-finisher", name: "KYC Finisher", tagline: "Micro-commitment doc chase until disbursal", vertical: "BFSI/NBFC", metric: "+32% completion" },
      { slug: "clinic-front-desk", name: "Clinic Front Desk", tagline: "After-hours booking with empathetic protocols", vertical: "Healthcare", metric: "+44% consults" },
    ],
  },
];

/* ────────────────────────────────────────────────────────
   SPEC SHEET — Monade compared with an in-house build
   ──────────────────────────────────────────────────────── */

const SPEC_ROWS = [
  { aspect: "Telephony", monade: "Inbound and outbound lines, number rotation, live transfer to a human.", diy: "SIP trunks, carrier contracts, and routing logic you maintain yourself." },
  { aspect: "Campaigns", monade: "Upload leads, launch call flows, watch results in one console.", diy: "Cron jobs and scripts stitched to a dialer API." },
  { aspect: "Follow-ups", monade: "Voice, WhatsApp, and SMS ladders that fire on schedule.", diy: "A separate WhatsApp provider, template approvals, and glue code." },
  { aspect: "Intelligence", monade: "Transcripts, QA scoring, and conversion insight on every call.", diy: "Raw recordings in a bucket. Someone has to listen." },
  { aspect: "Business kits", monade: "20+ pre-built, outcome-first workflows. Live in a weekend.", diy: "A blank prompt and a quarter of engineering time." },
  { aspect: "Guardrails", monade: "Audit logs, scoped credentials, allowlisted skills, PII retention.", diy: "Trust, and hope." },
  { aspect: "Deployment", monade: "Managed hosting, upgrades, and monitoring included.", diy: "Your pager." },
];

/* ────────────────────────────────────────────────────────
   HOW IT WORKS
   ──────────────────────────────────────────────────────── */

const STEPS = [
  { n: "01", title: "Pick a kit", sub: "Outcome first", desc: "Browse kits by what you want — more bookings, faster collections, fewer no-shows." },
  { n: "02", title: "Connect your data", sub: "CRM · Calendar · Shopify", desc: "Plug in the systems you already use. Your agent inherits your customer data and logic." },
  { n: "03", title: "Launch", sub: "Inbound or outbound", desc: "Go live with a phone number, WhatsApp line, or outbound campaign. Working immediately." },
  { n: "04", title: "Tune", sub: "Transcripts → insight", desc: "Every call generates data. Objection patterns and conversion rates sharpen the agent daily." },
];

/* ────────────────────────────────────────────────────────
   FIELD REPORTS
   ──────────────────────────────────────────────────────── */

const FIELD_REPORTS = [
  { rank: "01", slug: "taxi-aggregator-automation", title: "The Night Dispatcher", workflow: "Automated night-shift dispatching for Mumbai's fleet networks." },
  { rank: "02", slug: "real-estate-qualification", title: "Lead Qualification", workflow: "Filtering 10k+ luxury leads through outcome-based dialogue." },
  { rank: "03", slug: "ecommerce-order-support", title: "WISMO Destroyer", workflow: "Pre-emptive order-status resolution via Shopify integration." },
  { rank: "04", slug: "restaurant-reservation", title: "The Zero-Ring Host", workflow: "Reservation management and quiet upselling for cloud kitchens." },
  { rank: "05", slug: "healthcare-clinic-booking", title: "Empathy at 2 AM", workflow: "Soft-voice appointment booking and EMI framing for IVF clinics." },
  { rank: "06", slug: "recruitment-outbound", title: "The Talent Filter", workflow: "Mass outbound qualification for high-volume tech recruitment." },
];

/* ────────────────────────────────────────────────────────
   TRUST ITEMS
   ──────────────────────────────────────────────────────── */

const TRUST_ITEMS = [
  { title: "Scoped credentials", description: "Separate accounts and tokens per agent. No blast radius." },
  { title: "Audit logs", description: "Every action, every call, every decision — logged and queryable." },
  { title: "Skill allowlisting", description: "Install only what has been reviewed. No rogue plugins." },
  { title: "Human handoff", description: "Configurable escalation for high-risk actions. Always a human in the loop." },
  { title: "PII controls", description: "Retention policies for transcripts and recordings. Privacy by design." },
  { title: "Role-based access", description: "Granular permissions across teams, agents, and campaigns." },
];

/* ────────────────────────────────────────────────────────
   CAMPAIGN CONSOLE — designed CSS object (hero)
   ──────────────────────────────────────────────────────── */

function CampaignConsole() {
  const stats = [
    { label: "Dials", value: "1,284" },
    { label: "Connected", value: "62%" },
    { label: "Qualified", value: "431" },
    { label: "Booked", value: "214" },
  ];
  const calls = [
    { time: "14:02", note: "Lead #4821 — site visit booked", ok: true },
    { time: "13:57", note: "Lead #4818 — callback scheduled, 6 pm", ok: true },
    { time: "13:51", note: "Lead #4816 — handed to human agent", ok: false },
  ];
  return (
    <div className="border-y border-ink/15 py-6 md:py-8">
      <div className="flex items-center justify-between pb-5 hairline-b">
        <span className="machine-label text-ink/40">Campaign console</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="machine-label text-primary">Live</span>
        </span>
      </div>

      <div className="flex items-baseline justify-between py-5 hairline-b">
        <div>
          <div className="font-semibold tracking-tight">Speed-to-lead — Pune inbound</div>
          <div className="text-sm text-ink/50 mt-0.5">Renewal ladder queued behind it</div>
        </div>
        <span className="machine-label text-ink/40">Day 4 / 7</span>
      </div>

      <div className="grid grid-cols-4 py-6 hairline-b">
        {stats.map((s, i) => (
          <div key={s.label} className={cn("pr-3", i > 0 && "pl-4 border-l border-[var(--hairline)]")}>
            <div className="font-mono text-xl md:text-2xl font-bold tracking-tight">{s.value}</div>
            <div className="machine-label text-ink/40 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="py-5 hairline-b">
        <div className="flex justify-between mb-2">
          <span className="machine-label text-ink/40">Follow-up ladder</span>
          <span className="machine-label text-ink/40">3 of 5 rungs</span>
        </div>
        <div className="h-1.5 rounded-full bg-ink/[0.06] overflow-hidden">
          <div className="h-full w-[60%] rounded-full bg-clay" />
        </div>
      </div>

      <div className="pt-4 space-y-0">
        {calls.map((c) => (
          <div key={c.time} className="flex items-center gap-4 py-2.5 border-b border-[var(--hairline)] last:border-b-0">
            <span className="font-mono text-xs text-ink/40">{c.time}</span>
            <span className="text-sm text-ink/70 flex-1">{c.note}</span>
            <span className={cn("w-1.5 h-1.5 rounded-full", c.ok ? "bg-sage" : "bg-ochre")} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   TRANSCRIPT PANEL — designed CSS object (midnight section)
   ──────────────────────────────────────────────────────── */

function TranscriptPanel() {
  const lines = [
    { who: "Agent", text: "Good evening — this is Asha from Meridian Motors. Your service plan comes up for renewal this Friday." },
    { who: "Customer", text: "Honestly, I was going to let it lapse." },
    { who: "Agent", text: "Understood. One thing before you decide — renewing this week keeps the doorstep pickup and holds last year's rate. Shall I keep that for you?" },
    { who: "Customer", text: "Doorstep pickup stays? Fine, keep it." },
  ];
  return (
    <div className="border-y border-manila/15 py-6 md:py-8">
      <div className="flex items-center justify-between pb-4 border-b border-manila/10">
        <span className="machine-label text-manila/40">Call transcript</span>
        <span className="machine-label text-manila/40">Renewal reminder · 03:42</span>
      </div>
      <div className="py-5 space-y-5">
        {lines.map((l, i) => (
          <div key={i} className="grid grid-cols-[5.5rem_1fr] gap-3">
            <span className={cn("machine-label pt-0.5", l.who === "Agent" ? "text-clay" : "text-manila/40")}>{l.who}</span>
            <p className="text-sm leading-relaxed text-manila/75">{l.text}</p>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-manila/10 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="machine-label text-sage">Outcome — renewal confirmed</span>
        <span className="machine-label text-manila/40">CRM updated</span>
        <span className="machine-label text-manila/40">QA score 94</span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   SECTION HEADER
   ──────────────────────────────────────────────────────── */

function SectionHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-3xl mb-14", className)}>
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">{children}</h2>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────── */

export default function OpenClawPage() {
  const [activeCategory, setActiveCategory] = useState("acquire");
  const activeKits = BUSINESS_KIT_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background text-ink selection:bg-primary/15 selection:text-primary font-sans antialiased">
      <Navbar variant="transparent" />

      <main>
        {/* ── HERO ───────────────────────────────────── */}
        <section className="relative px-6 pt-44 md:pt-52 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="machine-label text-primary">Open Claw × Monade</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-ink"
              >
                Give Open Claw a production phone operation.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="text-lg md:text-xl text-ink/60 leading-relaxed max-w-xl mt-8"
              >
                Monade adds phone numbers, campaigns, scheduling, transcripts, follow-ups, and guardrails in one managed layer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="flex flex-col sm:flex-row gap-4 mt-10"
              >
                <a href="#business-kits" className="key-physical w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-manila font-semibold text-base tracking-tight">
                  Browse business kits <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-[0.25rem] border border-ink/15 text-ink font-semibold hover:border-ink/40 hover:bg-ink/[0.03] transition-all">
                  See pricing
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-x-12 gap-y-4 mt-12 pt-6 hairline-t">
                {[
                  { value: "20+", label: "Business kits" },
                  { value: "<30s", label: "Speed to lead" },
                  { value: "24/7", label: "Always on" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-mono text-2xl font-bold tracking-tight">{s.value}</div>
                    <div className="machine-label text-ink/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <CampaignConsole />
            </motion.div>
          </div>
        </section>

        {/* ── BUSINESS KITS — promoted under the hero ── */}
        <section id="business-kits" className="py-24 md:py-32 px-6 hairline-t">
          <div className="max-w-7xl mx-auto">
            <SectionHeader>
              Pick the outcome you need.
            </SectionHeader>

            <div className="flex flex-wrap gap-2 mb-10">
              {BUSINESS_KIT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-[0.25rem] text-sm font-semibold tracking-tight transition-all",
                    activeCategory === cat.id
                      ? "bg-ink text-manila"
                      : "border border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {activeKits?.kits.map((kit) => (
                  <Link
                    key={kit.slug}
                    href={`/open-claw/kit/${kit.slug}`}
                    className="group block border-t border-ink/15 py-7 transition-colors hover:bg-ink/[0.025] md:px-6"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="machine-label text-ink/40">{kit.vertical}</span>
                      {kit.metric && <span className="font-mono text-xs font-bold text-clay">{kit.metric}</span>}
                    </div>
                    <h3 className="font-display text-xl text-ink mb-2">{kit.name}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{kit.tagline}</p>
                    <div className="flex justify-end mt-5">
                      <ArrowRight className="w-4 h-4 text-ink/25 group-hover:text-ink group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────────── */}
        <section id="how-it-works" className="py-24 md:py-32 px-6 hairline-t">
          <div className="max-w-7xl mx-auto">
            <SectionHeader>
              Live in four steps.
            </SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ delay: i * 0.06 }}
                  className="hairline-t pt-6"
                >
                  <div className="ghost-numeral text-5xl leading-none mb-6">{step.n}</div>
                  <h3 className="font-display text-lg text-ink mb-1">{step.title}</h3>
                  <div className="machine-label text-clay mb-3">{step.sub}</div>
                  <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPEC SHEET ─────────────────────────────── */}
        <section id="spec-sheet" className="py-24 md:py-32 px-6 hairline-t">
          <div className="max-w-5xl mx-auto">
            <SectionHeader>
              What Monade runs for you.
            </SectionHeader>

            <div className="overflow-hidden border-y border-ink/15">
              <div className="hidden md:grid md:grid-cols-[8.5rem_1fr_1fr] gap-x-8 px-8 py-5 hairline-b">
                <span />
                <span className="machine-label text-ink">With Monade</span>
                <span className="machine-label text-ink/40">Build it yourself</span>
              </div>
              {SPEC_ROWS.map((row) => (
                <div
                  key={row.aspect}
                  className="grid grid-cols-1 md:grid-cols-[8.5rem_1fr_1fr] gap-x-8 gap-y-3 px-8 py-6 border-b border-[var(--hairline)] last:border-b-0"
                >
                  <div className="machine-label text-ink/40 pt-0.5">{row.aspect}</div>
                  <div className="flex gap-3">
                    <span className="md:hidden machine-label text-ink shrink-0 w-24 pt-0.5">Monade</span>
                    <p className="text-sm text-ink leading-relaxed">{row.monade}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="md:hidden machine-label text-ink/40 shrink-0 w-24 pt-0.5">DIY</span>
                    <p className="text-sm text-ink/45 leading-relaxed">{row.diy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MIDNIGHT — operational proof ───────────── */}
        <section className="py-24 md:py-32 px-6 bg-midnight text-manila">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6 text-manila">
                Voice is the interface. The operation is the product.
              </h2>
              <p className="text-lg text-manila/60 leading-relaxed max-w-lg mb-10">
                Anyone can give an agent a phone call. Businesses win on campaign execution, follow-up ladders, and iteration loops that compound.
              </p>
              <div className="space-y-0">
                {[
                  "Inbound + outbound telephony with routing and handoffs",
                  "Campaign engine: upload leads, run call flows, read results",
                  "Conversation intelligence: transcripts, QA, conversion insight",
                  "Follow-up ladders across voice, WhatsApp, and SMS",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3.5 border-b border-manila/10 last:border-b-0">
                    <Check className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                    <span className="text-sm text-manila/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <TranscriptPanel />
          </div>
        </section>

        {/* ── FIELD REPORTS ──────────────────────────── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader>
              Proof, not promises.
            </SectionHeader>

            <div className="hairline-t">
              {FIELD_REPORTS.map((study) => (
                <Link
                  key={study.slug}
                  href={`/open-claw/case-study/${study.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3.5rem_16rem_1fr_auto] items-center gap-x-4 md:gap-x-8 py-6 hairline-b"
                >
                  <span className="ghost-numeral text-2xl md:text-3xl">{study.rank}</span>
                  <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-clay transition-colors">{study.title}</h3>
                  <p className="hidden md:block text-sm text-ink/50 leading-relaxed">{study.workflow}</p>
                  <ArrowRight className="w-4 h-4 text-ink/25 group-hover:text-ink group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── GUARDRAILS ─────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 hairline-t">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.05] text-ink mb-6">
                Business-grade guardrails.
              </h2>
              <p className="text-base text-ink/60 leading-relaxed">
                Open Claw skills are powerful, and power needs limits. Monade adds the logging, scoping, and access controls a business requires. Encrypted end to end. Data stays on Indian soil.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className="hairline-t py-6">
                  <h3 className="machine-label text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <FooterCTA
        title="Put Open Claw on the phone."
        description="Start with one workflow, measure the outcome, and expand from there."
        primaryLabel="Start the pilot"
        primaryHref="https://calendly.com/adhiraj-n1labs/30min"
        primaryExternal
      />
    </div>
  );
}
