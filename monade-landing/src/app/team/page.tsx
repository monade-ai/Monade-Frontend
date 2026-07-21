import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Team",
  description:
    "Meet the Monade founding team building enterprise-ready voice AI systems and customer operations software.",
  path: "/team",
});

const FOUNDERS = [
  {
    name: "Amol Soans",
    role: "Co-founder — CEO",
    image: "/team/Amol%20Photo.jpg",
    line: "I own the direction. Every product bet and every client promise stops with me.",
    linkedin: "https://www.linkedin.com/in/amoldericksoans/",
  },
  {
    name: "Narayan Thakur",
    role: "Co-founder — COO",
    image: "/team/Narayan%20Photo.jpg",
    line: "I run the operation — from the first call to the signed contract, I keep it moving.",
    linkedin: "https://www.linkedin.com/in/narayan-thakur-b63b55281/",
  },
  {
    name: "Aaditya Rangarajan",
    role: "Co-founder — CTO",
    image: "/team/Screenshot%202025-08-18%20141219.png",
    line: "I build the platform — the architecture that keeps every call fast and every deployment steady.",
    linkedin: "https://www.linkedin.com/in/aaditya2200/",
  },
  {
    name: "Shashwat Yashasvi",
    role: "Co-founder — Head of AI",
    image: "/team/shashwat.jpg",
    line: "I train the voice — the models that make our agents sound like people, not software.",
    linkedin: "https://www.linkedin.com/in/shashwat-yashasvi-4082562a1/",
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Navbar variant="transparent" />

      {/* Hero */}
      <section className="pt-44 md:pt-52 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="machine-label text-ink/50 mb-6">01 — The founders</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-ink max-w-3xl">
            The people behind the{" "}
            <span className="serif-accent text-clay">voice.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink/60 leading-relaxed max-w-2xl">
            Four founders, one instrument. We build the voice AI that answers
            India&rsquo;s phones — and we ship it ourselves.
          </p>
        </div>
      </section>

      {/* Founders grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="sr-only">Founders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {FOUNDERS.map((founder) => (
              <article key={founder.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-[var(--hairline)] bg-ochre/20">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover sepia-[0.22] saturate-[0.88] contrast-[1.05]"
                  />
                </div>
                <div className="hairline-b mt-6 pb-5">
                  <p className="machine-label text-ink/50">{founder.role}</p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl text-ink">
                      {founder.name}
                    </h3>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} on LinkedIn`}
                      className="mt-1.5 -m-2 p-2 text-ink/40 hover:text-ink transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
                  &ldquo;{founder.line}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision — one pull-quote */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hairline-t hairline-b py-16 md:py-20">
            <p className="machine-label text-ink/50 mb-8">02 — Why we build</p>
            <blockquote className="serif-accent text-3xl md:text-5xl leading-[1.2] text-ink max-w-4xl">
              We&rsquo;re building voice agents good enough that the person on
              the other end simply feels heard.
            </blockquote>
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
