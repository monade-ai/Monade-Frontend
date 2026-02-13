'use client';

import React from "react";
import ExplodedView from "@/components/ExplodedView";
import VoiceGallery from "@/components/VoiceGallery";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10">
      <Navbar variant="transparent" />

      <main className="pt-40 pb-20">
        {/* Hero Section - Airbnb x Apple: Huge White Space, Clean Typography */}
        <section className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Now live in India</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 text-balance leading-[0.95]">
            Voice Intelligence for the <br />
            <span className="text-slate-400">Next Billion Operations.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Automate high-stakes voice workflows with the world’s most precise Hinglish NLP. Scalable, auditable, and human-grade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
              Start Free Trial
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
              Talk to Sales
            </button>
          </div>
        </section>

        {/* Feature Bento Grid - Notion/Apple style: Each card is a "Product Story" */}
        <section className="max-w-7xl mx-auto px-6 mt-32 grid grid-cols-1 md:grid-cols-12 gap-6">
          <h2 className="sr-only">Product highlights</h2>

          {/* Main Cockpit Preview - The "Big Bento" */}
          <div className="md:col-span-8 bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden relative group">
            <div className="relative z-10 space-y-4 mb-8">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">The Cockpit</span>
              <h3 className="text-3xl font-bold">Total Operational Control.</h3>
              <p className="text-slate-500 max-w-md">Monitor every syllable, every accent, and every compliance checkpoint in real-time.</p>
            </div>

            {/* A "Fire" looking dashboard preview inside the card */}
            <div className="glass rounded-2xl shadow-premium border border-black/5 p-4 transform transition-transform group-hover:scale-[1.02] duration-500">
              <div className="flex items-center justify-between mb-4 border-b border-black/5 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <span className="font-mono text-[10px] text-slate-400">MONADE_TRACE_v4.2</span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-4 items-start bg-white/50 p-3 rounded-xl border border-white">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">A</div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Agent [Hindi-EN]</p>
                    <p className="text-sm font-medium">"Aapka loan approved ho gaya hai, bas signature chahiye."</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">U</div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Customer</p>
                    <p className="text-sm font-medium">"Great! Verification kab tak hogi?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Bento - Precision Moment */}
          <div className="md:col-span-4 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl font-bold">Latency as <br />a Feature.</h3>
              <p className="text-slate-400 text-sm">Instant responses in 50+ languages, including Tier 3 dialects.</p>
            </div>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-7xl font-mono font-bold tracking-tighter">142</span>
              <span className="text-primary font-mono font-bold text-2xl">ms</span>
            </div>
            {/* Visual decoration: Sparkline */}
            <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>

          {/* Language Bento */}
          <div className="md:col-span-4 bg-amber-50 rounded-3xl p-8 border border-amber-100 space-y-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-soft">
              <span className="text-2xl">🇮🇳</span>
            </div>
            <h3 className="text-xl font-bold">True Hinglish.</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We don't just translate; we understand the code-switching nuance of Indian business talk.</p>
          </div>

          {/* Compliance Bento */}
          <div className="md:col-span-4 bg-green-50 rounded-3xl p-8 border border-green-100 space-y-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-soft">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold">Bank-Grade.</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Auto-redact PII, verify identity, and score every call against RBI & GCP rubrics.</p>
          </div>

          {/* Scale Bento */}
          <div className="md:col-span-4 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between">
            <h3 className="text-xl font-bold">Infinite Scale.</h3>
            <div className="flex -space-x-3 mt-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">+10k</div>
            </div>
            <p className="text-slate-500 text-xs mt-4">Handle thousands of concurrent calls without breaking a sweat.</p>
          </div>

        </section>

        {/* The Ive Exploded View */}
        <ExplodedView />

        {/* The Voice Gallery */}
        <VoiceGallery />

        {/* Footer Section */}
        <section className="max-w-5xl mx-auto px-6 mt-40 text-center space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">Ready to humanize your ops?</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all">Get Started</button>
          </div>
          <div className="pt-20 border-t border-slate-100 text-slate-400 text-sm font-medium">
            © 2025 Monade AI. Engineered for Truth.
          </div>
        </section>
      </main>
    </div>
  );
}
