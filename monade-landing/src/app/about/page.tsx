'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import { CheckCircle2, Globe, Heart, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Honesty by design",
    desc: "We build AI that respects the person on the other end of the line. No tricks, just clear and helpful conversations.",
    icon: Heart
  },
  {
    title: "Precision in detail",
    desc: "From sub-200ms latency to regional accent matching, we obsess over the details that make voice feel human.",
    icon: Zap
  },
  {
    title: "Rooted in India",
    desc: "We understand the nuances of Indian business and culture, building tools specifically for this unique market.",
    icon: Globe
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-primary/10">
      <Navbar variant="light" />

      <main className="pt-56 pb-20">
        {/* Header: Our Story */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-6xl md:text-[80px] font-semibold tracking-tight leading-[1.05] text-slate-900">
                A new standard for <br />
                <span className="font-serif italic text-slate-400 font-medium text-5xl md:text-[70px]">customer voice.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                At Monade, we believe that AI should make human connection more effective, not less personal. We’re building the tools that help businesses listen and respond better.
            </p>
          </div>
        </section>

        {/* The Mission: Content focus */}
        <section className="max-w-4xl mx-auto px-6 mb-32 space-y-10">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            In a world where customer expectations are higher than ever, speed and availability are no longer optional. But automation often comes at the cost of quality. 
          </p>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            We started Monade to fix this. By combining state-of-the-art conversational AI with a deep respect for local context, we empower companies to provide seamless, human-like experiences at every touchpoint.
          </p>
        </section>

        {/* Our Values: Machined Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {VALUES.map((val) => (
              <div key={val.title} className="space-y-6">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    <val.icon className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">{val.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">
                    {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Status: Professional and Direct */}
        <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Proven at scale.</h2>
              <p className="text-base text-slate-500 max-w-md leading-relaxed">
                Monade is a fully operational platform serving enterprise clients with production-ready AI voice agents. We’ve moved beyond concepts to real-world results.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Serving enterprise traffic</span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Live with clients", desc: "Operational and serving high-volume voice traffic." },
                { label: "Founder-led", desc: "Bootstrapped and focused on sustainable growth." },
                { label: "Production ready", desc: "Reliable infrastructure for mission-critical workflows." }
              ].map((item) => (
                <div key={item.label} className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}
