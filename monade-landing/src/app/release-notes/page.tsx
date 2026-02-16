'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Mic2, Globe, Shield, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/sections/FooterCTA';
import { cn } from '@/lib/utils';

const RELEASES = [
  {
    version: "4.6.0",
    date: "February 24, 2026",
    status: "Latest",
    highlights: [
      { title: "Smoother conversations", desc: "Our agents now handle network delays more gracefully, making every interaction feel more natural and immediate.", icon: Activity },
      { title: "Local accent matching", desc: "Voice models now automatically adapt to regional dialects across India for a truly local experience.", icon: Mic2 },
      { title: "Faster connections", desc: "We've improved our underlying hardware integration to connect your customers even faster than before.", icon: Cpu }
    ]
  },
  {
    version: "4.5.2",
    date: "February 12, 2026",
    status: "Stable",
    highlights: [
      { title: "Natural Hinglish flow", desc: "Significant improvements to how our agents switch between Hindi and English during technical discussions.", icon: Globe },
      { title: "Enhanced privacy", desc: "Updated our real-time redaction engine to better protect sensitive customer information.", icon: Shield }
    ]
  }
];

export default function ReleaseNotesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-primary/10">
      <Navbar variant="light" />

      <main className="pt-56 pb-20">
        {/* Header: The Chronicle */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-6xl md:text-[80px] font-semibold tracking-tight leading-[1.05] text-slate-900">
                Improvements and <br />
                <span className="font-serif italic text-slate-400 font-medium text-5xl md:text-[70px]">new capabilities.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                We believe in constant refinement. Every update is a step toward more human, more reliable voice intelligence.
            </p>
          </div>
        </section>

        {/* The Update Feed */}
        <section className="max-w-5xl mx-auto px-6 space-y-20">
          {RELEASES.map((release) => (
            <div key={release.version} className="relative border-t border-slate-100 pt-16">
                {/* Release Meta */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold tracking-tight text-slate-900">v.{release.version}</span>
                        <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                            release.status === 'Latest' ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-400 border-slate-100"
                        )}>
                            {release.status}
                        </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-400">{release.date}</div>
                </div>

                {/* Highlights List: Clean and Descriptive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {release.highlights.map((item) => (
                        <div key={item.title} className="space-y-4 group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary/5 transition-colors">
                                    <item.icon className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                            </div>
                            <p className="text-base text-slate-500 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          ))}
        </section>

        {/* Registry CTA */}
        <section className="max-w-5xl mx-auto px-6 mt-40 pt-16 border-t border-slate-100">
            <div className="bg-slate-50 rounded-3xl p-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">Reliability is built-in.</h3>
                    <p className="text-slate-500 font-medium">Read more about our infrastructure and security standards.</p>
                </div>
                <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all active:scale-[0.98] flex items-center gap-2">
                    Review security <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}
