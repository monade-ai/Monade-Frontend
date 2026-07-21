'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/sections/FooterCTA';

const ROLES = [
  { title: "Voice Research Engineer", team: "Engineering", location: "Remote / Bangalore" },
  { title: "Product Designer", team: "Design", location: "Remote / London" },
  { title: "Operations Lead", team: "Business", location: "Remote / Mumbai" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans antialiased selection:bg-primary/10">
      <Navbar variant="light" />

      <main className="pt-44 md:pt-52">
        {/* ─── Hero ─── */}
        <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
          <div className="machine-label text-ink/40 mb-6">
            {ROLES.length} open roles — Bangalore · London · Mumbai
          </div>
          <h1 className="font-display text-6xl md:text-[80px] leading-[1.02] mb-8">
            Help us build the <br />
            <span className="serif-accent text-ink/40">future</span> of voice.
          </h1>
          <p className="text-lg md:text-xl text-ink/60 max-w-2xl leading-relaxed">
            We&rsquo;re a small, focused team building the next generation of voice
            intelligence. We value craft, clarity, and the people who make it happen.
          </p>
        </section>

        {/* ─── Manifesto ─── */}
        <section className="hairline-t">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="machine-label text-ink/40 mb-6">01 — How we work</div>
            <p className="text-xl md:text-2xl text-ink/80 leading-relaxed max-w-2xl">
              We build honest instruments. No tricks, no theater — voice AI that makes
              human connection clearer. We move quickly and ship something meaningful
              every day, but never at the expense of the details. From the first line
              of code to the final voice prompt, quality is the baseline, not the goal.
            </p>
          </div>
        </section>

        {/* ─── Open roles: hairline-ruled table ─── */}
        <section id="roles" className="hairline-t">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="mb-12">
              <div className="machine-label text-ink/40 mb-6">02 — Open roles</div>
              <h2 className="font-display text-3xl md:text-4xl">
                Take a <span className="serif-accent text-ink/40">seat</span> at the bench.
              </h2>
            </div>

            <div className="hairline-t">
              {ROLES.map((role) => (
                <a
                  key={role.title}
                  href={`mailto:careers@monade.ai?subject=${encodeURIComponent(`Application — ${role.title}`)}`}
                  className="group grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-6 py-6 md:py-7 hairline-b transition-colors hover:bg-ink/[0.03]"
                >
                  <div className="md:col-span-6">
                    <span className="font-display text-xl md:text-2xl group-hover:text-primary transition-colors">
                      {role.title}
                    </span>
                  </div>
                  <div className="md:col-span-3 text-[13px] font-medium text-ink/50 uppercase tracking-widest">
                    {role.team}
                  </div>
                  <div className="md:col-span-2 text-[13px] font-medium text-ink/50">
                    {role.location}
                  </div>
                  <div className="md:col-span-1 md:justify-self-end">
                    <ArrowRight className="w-5 h-5 text-ink/40 group-hover:text-ink group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterCTA
        title="Come build the instrument."
        description="No role that fits? Tell us what you're working on and how you'd like to help. We're always happy to hear from people who care about their craft."
        primaryLabel="See open roles"
        primaryHref="#roles"
        secondaryLabel="Send us a note"
        secondaryHref="mailto:careers@monade.ai"
        secondaryExternal={false}
      />
    </div>
  );
}
