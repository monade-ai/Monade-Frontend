'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";

const PRINCIPLES = [
  {
    id: "01",
    title: "Privacy by design",
    summary: "We design our systems to never see your sensitive data.",
    detail: "Our engine identifies and redacts personal information—like Aadhaar numbers and credit cards—at the edge. By the time audio reaches our servers, it has already been anonymized.",
    color: "bg-slate-900"
  },
  {
    id: "02",
    title: "Full auditability",
    summary: "Every word, every decision, every turn is logged.",
    detail: "We provide a complete decision trace for every call. You can audit exactly why an agent chose a specific response, ensuring absolute accountability for your brand's voice.",
    color: "bg-slate-800"
  },
  {
    id: "03",
    title: "Data sovereignty",
    summary: "Your data stays where it belongs.",
    detail: "We are fully compliant with the Indian DPDP Act of 2023. We process voice data on local GPU clusters and ensure it never leaves the country without your explicit consent.",
    color: "bg-slate-700"
  }
];

export default function TrustPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-primary/10">
      <Navbar variant="light" />

      <main className="pt-56 pb-20">
        {/* ─── Hero: The Statement ─── */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <h1 className="text-6xl md:text-[80px] font-semibold tracking-tight leading-[1.05] mb-8 text-slate-900">
            Trust is the quiet <br />
            <span className="font-serif italic text-slate-400 font-medium">confidence of safety.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Reliability isn’t a feature we added later. It’s the architecture we built on. We handle the complexity of security so you can focus on the conversations that matter.
          </p>
        </section>

        {/* ─── The Principles: Functional List ─── */}
        <section className="border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            {PRINCIPLES.map((principle, i) => (
              <div 
                key={principle.id}
                onMouseEnter={() => setActiveIndex(i)}
                className="group relative border-b border-slate-100 cursor-pointer overflow-hidden"
              >
                <div className={cn(
                  "relative z-10 px-6 py-12 md:py-16 transition-all duration-500",
                  activeIndex === i ? "translate-x-4" : "translate-x-0"
                )}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Index */}
                    <div className="md:col-span-1">
                      <span className="text-xs font-bold text-slate-300 font-mono tracking-widest">{principle.id}</span>
                    </div>

                    {/* Title & Summary */}
                    <div className="md:col-span-5">
                      <h3 className="text-2xl md:text-4xl font-semibold tracking-tight mb-2 text-slate-900">
                        {principle.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-500 font-medium">
                        {principle.summary}
                      </p>
                    </div>

                    {/* Detail - Visible on Hover/Active */}
                    <div className="md:col-span-5 md:col-start-8">
                      <AnimatePresence mode="wait">
                        {activeIndex === i && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
                              {principle.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Subtle side indicator */}
                {activeIndex === i && (
                  <motion.div 
                    layoutId="side-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-20"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Compliance: Honest & Direct ─── */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                Designed for the <br />Indian enterprise.
              </h2>
              <p className="text-base text-slate-500 max-w-md leading-relaxed mb-8">
                We don’t just follow global standards; we respect local realities. From the DPDP Act to TRAI regulations, our platform is built to navigate the unique regulatory landscape of Indian business.
              </p>
              
              <div className="space-y-4">
                {[
                  "SOC2 Type II compliant architecture",
                  "Certified DPDP Act data handling",
                  "Local data residency by default",
                  "End-to-end encryption for every byte"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="max-w-xl mx-auto px-6 text-center">
          <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-base hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg">
            Request security whitepaper <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}
