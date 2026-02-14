'use client';

import React from "react";
import { ShieldCheck, DollarSign, Activity, Globe, Zap, RefreshCcw } from "lucide-react";
import { ModelIdentityCard } from "@/components/ModelIdentityCard";

const shaderConfigs = [
  {
    colors: ["#FF4D00", "#000000", "#1A1A1A", "#FF5C00"],
    waveX: 0.18,
    rotation: 245
  },
  {
    colors: ["#F5D916", "#FFFFFF", "#F8FAFC", "#E2E8F0"],
    waveX: 0.20,
    rotation: 280
  }
];

export const BentoGrid = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 pb-32">

      {/* Card 1: The 8-Second Problem (Wide, White) */}
      <div className="md:col-span-8 bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">You have 8 seconds before they hang up.</h3>
          <p className="text-slate-500 leading-relaxed text-lg font-medium max-w-xl">
            Indian customers get 30+ spam calls a week. Unknown numbers trigger Truecaller instincts. Generic voice AI fails this gate — it pitches before asking permission.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm font-bold text-slate-900">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>The Solution: Identity + Context + Permission in &lt;8s</span>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 translate-y-1/4 translate-x-1/4">
          <svg viewBox="0 0 200 200" className="w-96 h-96 text-primary fill-current">
            <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
          </svg>
        </div>
      </div>

      {/* Card 2: Pay for Outcomes (Narrow, Dark) */}
      <div className="md:col-span-4 bg-[#0F172A] rounded-3xl p-10 md:p-14 text-white flex flex-col justify-between group overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
            <DollarSign className="w-6 h-6 text-intellect" />
          </div>
          <h3 className="text-3xl font-bold mb-4 tracking-tight">₹0 platform fee.<br /><span className="text-slate-400">Pay per second.</span></h3>
          <p className="text-slate-400 text-sm leading-relaxed mt-6">
            No monthly subscription. No seat licenses. Pay only for seconds your customers actually speak.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Cost / min</span>
              <div className="text-3xl font-mono font-bold text-white mt-1">₹3-5</div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Setup Fee</span>
              <div className="text-3xl font-mono font-bold text-intellect mt-1">₹0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: 43:57 Talk Ratio (White) */}
      <div className="md:col-span-6 bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">When AI talks too much,<br />prospects don't buy.</h3>
          <p className="text-slate-500 leading-relaxed font-medium mb-8">
            Gong.io data proves that when sellers talk 43% of the time, deals die. Most voice AI monologues at 80%.
          </p>
        </div>

        {/* Visual: Talk ratio bars - Cleaned up */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Generic AI</span>
              <span>78% Talk</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-[78%] bg-red-400"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-900">
              <span>Monade</span>
              <span className="text-primary">43% Talk</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-[43%] bg-primary shadow-[0_0_10px_rgba(255,77,0,0.4)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Built for India (White) */}
      <div className="md:col-span-6 bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Built for India.<br />Not translated.</h3>
          <p className="text-slate-500 leading-relaxed font-medium mb-8">
            Western scripts don't know "aap" vs "tum". They treat family consultation as an objection. We embrace the chaos of Indian sales.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Honorific Protocols",
              "Hinglish Code-Switching",
              "Family Decisions",
              "EMI First Framing"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 5: AI Latency Design (Wide, Dark) */}
      <div className="md:col-span-8 bg-[#0F172A] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
              <Zap className="w-6 h-6 text-intellect" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Voice AI has latency.<br />We design for it.</h3>
            <p className="text-slate-400 leading-relaxed font-medium">
              Generic scripts sound robotic because they ignore the 400-1200ms delay. We use fillers, interruption protocols, and tiered repairs to make it feel instant.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
            <div className="space-y-4 font-mono text-xs">
              <div className="flex gap-3">
                <span className="text-slate-500">USER</span>
                <span className="text-white">"Actually, I need to check with..."</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">AI</span>
                <span className="text-primary/70">[Interrupt Detected]</span>
              </div>
              <div className="flex gap-3 pl-8 border-l-2 border-primary/20">
                <span className="text-slate-500">ACTION</span>
                <span className="text-white">Stop Audio → Acknowledge → Redirect</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">AI</span>
                <span className="text-intellect">"Totally understood. Take your time..."</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 6: Scripts That Learn (Narrow, White) */}
      <div className="md:col-span-4 bg-white rounded-3xl p-10 md:p-14 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
            <RefreshCcw className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <h3 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Week 1 script ≠ Week 12.</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            We refine your script weekly based on transcript analysis, objection handling patterns, and real-world conversion data.
          </p>
        </div>
        <div className="mt-8">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Improvement Cycle</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-bold text-slate-900">Active Learning</span>
          </div>
        </div>
      </div>

      {/* Model Identity Cards */}
      <div className="md:col-span-6">
        <ModelIdentityCard
          name="Monade Voice Engine"
          provider="Proprietary"
          type="Self-Improving Script"
          context="Hindi · English · Hinglish"
          pricing="Pay Per Second"
          shaderConfig={shaderConfigs[0]}
          className="rounded-3xl h-[400px]"
        />
      </div>
      <div className="md:col-span-6">
        <ModelIdentityCard
          name="Call Intelligence"
          provider="Real-Time Analysis"
          type="CRM-Synced Insights"
          context="Instant Post-Call Brief"
          pricing="Included"
          shaderConfig={shaderConfigs[1]}
          className="rounded-3xl h-[400px]"
        />
      </div>

    </section>
  );
};

export default BentoGrid;
