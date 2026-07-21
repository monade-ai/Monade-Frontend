'use client';

import React from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";

const PRINCIPLES = [
  {
    id: "01",
    title: "Privacy by design",
    summary: "We design our systems to never see your sensitive data.",
    detail:
      "Our engine identifies and redacts personal information—like Aadhaar numbers and credit cards—at the edge. By the time audio reaches our servers, it has already been anonymized.",
  },
  {
    id: "02",
    title: "Full auditability",
    summary: "Every word, every decision, every turn is logged.",
    detail:
      "Every turn of every call is recorded: what the caller said, what the agent decided, and the reasoning behind it. Each conversation carries a complete decision trace you can replay word by word. Logs are kept for a retention window you set, and the full audit trail exports on demand — into your own systems, in your own format.",
  },
  {
    id: "03",
    title: "Data sovereignty",
    summary: "Your data stays where it belongs.",
    detail:
      "Voice data is processed on GPU clusters in Indian data centers and stays on Indian soil by default. Nothing crosses a border without your explicit consent — no silent mirroring, no offshore backups. Where your data lives is your decision, not a footnote in ours.",
  },
];

const COMPLIANCE_BADGES = [
  "SOC 2-aligned controls",
  "Local data residency",
  "End-to-end encryption",
  "Privacy by design",
];

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans antialiased selection:bg-primary/10">
      <Navbar variant="light" />

      <main className="pt-44 md:pt-52">
        {/* ─── Hero: The Statement ─── */}
        <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
          <div className="machine-label text-ink/40 mb-6">00 — Trust</div>
          <h1 className="font-display text-6xl md:text-[80px] leading-[1.02] mb-8">
            Trust is the quiet <br />
            <span className="serif-accent text-ink/40">confidence</span> of safety.
          </h1>

          <p className="text-lg md:text-xl text-ink/60 max-w-2xl leading-relaxed">
            Reliability isn&rsquo;t a feature we added later. It&rsquo;s the architecture we
            built on. We handle the complexity of security so you can focus on the
            conversations that matter.
          </p>
        </section>

        {/* ─── The Principles: Numbered Index ─── */}
        <section className="hairline-t">
          <div className="max-w-7xl mx-auto">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.id}
                className="group relative hairline-b overflow-hidden"
              >
                <div className="relative z-10 px-6 py-12 md:py-16 transition-transform duration-500 md:group-hover:translate-x-2">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Ghost numeral index with terracotta rule */}
                    <div className="md:col-span-2">
                      <div className="w-8 h-[2px] bg-clay mb-4" />
                      <span className="ghost-numeral text-6xl md:text-7xl leading-none">
                        {principle.id}
                      </span>
                    </div>

                    {/* Title & Summary */}
                    <div className="md:col-span-5">
                      <h3 className="font-display text-2xl md:text-4xl mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-base md:text-lg text-ink/60 font-medium">
                        {principle.summary}
                      </p>
                    </div>

                    {/* Detail */}
                    <div className="md:col-span-4 md:col-start-9">
                      <p className="text-[15px] md:text-base text-ink/60 leading-relaxed max-w-md">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terracotta side rule on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* ─── Compliance: Honest & Direct ─── */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <div className="machine-label text-ink/40 mb-6">04 — Posture</div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Designed for the <br />
                <span className="serif-accent text-ink/40">Indian</span> enterprise.
              </h2>
              <p className="text-base text-ink/60 max-w-md leading-relaxed">
                We respect local realities. Data stays in India by default, every
                byte is encrypted, and every decision an agent makes stays on the
                record.
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="flex flex-wrap gap-3 mb-12">
                {COMPLIANCE_BADGES.map((item) => (
                  <span
                    key={item}
                    className="card-etched rounded-full px-5 py-3 machine-label text-ink/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="mailto:privacy@monade.ai?subject=Security%20whitepaper%20request"
                className="key-physical w-full sm:w-auto px-8 py-4 bg-ink text-manila font-semibold text-base tracking-tight inline-flex items-center justify-center gap-3"
              >
                Request security whitepaper <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}
