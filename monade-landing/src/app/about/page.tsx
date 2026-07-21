import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";

const VALUES = [
  {
    title: "Honesty by design",
    desc: "Our agents say what they are and do what they say. The person on the line is never tricked — only helped.",
  },
  {
    title: "Precision in detail",
    desc: "A first word in 0.4 seconds. Accents matched to the region. The details nobody notices are the ones we obsess over.",
  },
  {
    title: "Rooted in India",
    desc: "Built here, for how India actually speaks — and every conversation stays on Indian soil.",
  },
];

const STATUS = [
  "Live with enterprise clients",
  "Founder-led",
  "Production traffic",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Navbar variant="transparent" />

      <section className="pt-44 md:pt-52 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-ink max-w-3xl">
            Voice AI, rooted in India.
          </h1>

          <div className="mt-12 max-w-2xl space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed text-ink font-medium">
              India doesn&rsquo;t sound like one place. It sounds like a
              hundred — Hindi that slips into English mid-sentence, a
              Bengaluru accent ordering in Kannada, a customer in Indore who
              expects a callback before dinner.
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              Most voice AI is built somewhere else and translated here. We
              started Monade to build it here — for the way Indian customers
              actually speak, and the way Indian businesses actually run.
            </p>
            <div className="pt-4">
              <Link
                href="/team"
                className="inline-flex min-h-12 w-full items-center justify-center border border-ink/20 px-7 font-semibold transition-colors hover:border-ink sm:w-auto"
              >
                Meet the founders
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink mb-16">
            What we won&rsquo;t compromise.
          </h2>

          <div className="hairline-b">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="hairline-t py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
              >
                <h3 className="md:col-span-5 font-display text-2xl md:text-3xl text-ink">
                  {value.title}
                </h3>
                <p className="md:col-span-7 text-base md:text-lg leading-relaxed text-ink/60 max-w-xl">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">Where we stand</h2>
          <div className="hairline-t hairline-b py-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-0 sm:justify-between">
            {STATUS.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block h-1.5 w-1.5 rounded-full bg-primary"
                  />
                )}
                <span className="text-sm font-semibold text-ink/70">{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
