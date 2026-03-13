'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Activity,
  Mic2,
  Sparkles,
  ArrowUpRight,
  Globe,
  Lock
} from 'lucide-react';
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import { cn } from "@/lib/utils";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

const VOLUME_BREAKPOINT = 10000;
const LOW_VOLUME_RATE = 8;
const HIGH_VOLUME_RATE = 6;

const PrecisionFader = ({ value, min, max, onChange }: { value: number, min: number, max: number, onChange: (val: number) => void }) => {
  const percentage = (value - min) / (max - min);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="relative w-full h-20 flex items-center">
      <div className="absolute inset-x-0 h-[1px] bg-black/10" />

      <div className="absolute inset-x-0 h-10 flex justify-between items-center pointer-events-none px-0.5">
        {[...Array(61)].map((_, i) => (
          <div
            key={i}
            className={cn(
                "w-[1px] transition-colors duration-500",
                i % 10 === 0 ? "h-6 bg-black/40" : i % 5 === 0 ? "h-4 bg-black/20" : "h-2 bg-black/10"
            )}
          />
        ))}
      </div>

      <div className="relative w-full h-full flex items-center">
        <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center justify-center"
            style={{ left: `${percentage * 100}%` }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
            <LiquidGlassCard
              className="w-12 h-12 bg-white/5 border border-white/80 flex items-center justify-center shadow-2xl"
              borderRadius="100%"
              blurIntensity="xl"
              shadowIntensity="none"
              glowIntensity="none"
            >
              <div className="w-[1px] h-4 bg-[#D94126]" />
            </LiquidGlassCard>
        </motion.div>

        <input
          type="range"
          min={min}
          max={max}
          step={100}
          value={value}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
        />
      </div>
    </div>
  );
};

export default function PricingPage() {
  const [callVolume, setCallVolume] = useState(10000);
  const isHighVolume = callVolume >= VOLUME_BREAKPOINT;
  const activeRate = isHighVolume ? HIGH_VOLUME_RATE : LOW_VOLUME_RATE;
  const estimatedMonthlySpend = callVolume * activeRate;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#D94126] selection:text-white antialiased text-[15px]">
      <Navbar variant="transparent" />

      <main className="pt-56 pb-32">
        <section className="max-w-5xl mx-auto px-6 text-center mb-32">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-[#1A1A1A]">
                Honest pricing. <br />
                <span className="font-serif italic text-slate-300 font-light text-[0.9em]">Calibrated.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                No platform fees. No subscriptions. Just one clear volume model: ₹8/min below 10,000 minutes and ₹6/min once you hit 10,000+ minutes a month.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mb-48">
          <div className="bg-[#869781] rounded-[32px] p-16 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] border border-black/5 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-16 relative z-10">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold tracking-tight text-black uppercase">Set your volume</h3>
                <p className="text-lg text-black/40 font-serif italic max-w-md leading-relaxed">
                    Estimate your monthly talk time to see your active rupee-per-minute rate.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full border transition-colors",
                    !isHighVolume ? "bg-black text-white border-black" : "bg-white/20 text-black/50 border-black/10"
                  )}>
                    Under 10,000 mins = ₹8/min
                  </span>
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full border transition-colors",
                    isHighVolume ? "bg-black text-white border-black" : "bg-white/20 text-black/50 border-black/10"
                  )}>
                    10,000+ mins = ₹6/min
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-7xl md:text-8xl font-mono font-bold tracking-tighter text-black leading-none">
                  {callVolume.toLocaleString()}
                </div>
                <div className="flex justify-end items-center gap-3 mt-4">
                    <div className="w-1 h-1 rounded-full bg-black/20" />
                    <span className="text-[8px] font-black text-black/20 uppercase tracking-[0.4em]">Minutes / Month</span>
                </div>
              </div>
            </div>

            <PrecisionFader
              value={callVolume}
              min={1000}
              max={100000}
              onChange={setCallVolume}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 relative z-10">
              <MetricTile label="Active rate" value={`₹${activeRate}/min`} />
              <MetricTile label="Tier" value={isHighVolume ? "High volume" : "Low volume"} />
              <MetricTile label="Estimated spend" value={`₹${estimatedMonthlySpend.toLocaleString()}`} />
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-40">
          <PricingSlab
            label="USE 01"
            title="Usage Pricing"
            price={`₹${activeRate}`}
            unit="/ Min"
            desc="Simple published pricing based on monthly volume. No plan switching, no hidden platform fees."
            features={[
              callVolume < VOLUME_BREAKPOINT ? "Current tier: under 10,000 minutes" : "Current tier: 10,000+ minutes",
              callVolume < VOLUME_BREAKPOINT ? "Rate applied: ₹8 per minute" : "Rate applied: ₹6 per minute",
              "Usage-based billing only"
            ]}
            variant="white"
          />

          <PricingSlab
            label="INC 02"
            title="Included"
            price="Standard"
            desc="The core Monade stack is included with every deployment instead of being hidden behind a separate plan."
            features={[
              'Sub-200ms voice-to-voice flow',
              'Regional accent and Hinglish handling',
              'Webhook and workflow integrations'
            ]}
            variant="obsidian"
            highlight
          />

          <PricingSlab
            label="ENT 03"
            title="Enterprise"
            price="Custom"
            desc="Dedicated infra, compliance controls, and bespoke deployments without changing the public minute-rate story."
            features={[
              'Dedicated clusters',
              'Air-gapped security options',
              'Priority rollout and support'
            ]}
            variant="white"
          />
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-24">
          <div className="flex items-end justify-between mb-16 border-b border-slate-200 pb-8">
            <h2 className="text-5xl font-bold tracking-tight text-slate-900">Technical specifications</h2>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pb-2">Loadout details</span>
          </div>

          <div className="space-y-6">
            {[
                { title: "Native Voice-to-Voice", desc: "No intermediate text stage. Sub-200ms E2E response times.", icon: <Mic2 className="w-5 h-5 text-[#D94126]" /> },
                { title: "Prosody Alignment", desc: "Native understanding of tone, sarcasm, and hesitation.", icon: <Activity className="w-5 h-5 text-[#D94126]" /> },
                { title: "Linguistic Fluidity", desc: "Instant code-switching for Hinglish and regional accents.", icon: <Globe className="w-5 h-5 text-[#D94126]" /> },
                { title: "Security Controls", desc: "Enterprise-grade deployment options for tighter infrastructure and access control needs.", icon: <Lock className="w-5 h-5 text-[#D94126]" /> }
            ].map((item, i) => (
                <div key={i} className="group bg-white p-12 rounded-[24px] border border-slate-100 hover:border-[#D94126]/20 transition-all duration-500 shadow-sm flex items-start justify-between">
                    <div className="flex items-start gap-10">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner border border-slate-100 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold text-[#1A1A1A]">{item.title}</h4>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-serif italic">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}

function MetricTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-black/5 bg-white/35 backdrop-blur-sm px-6 py-5">
      <div className="text-[8px] font-black text-black/30 uppercase tracking-[0.4em]">{label}</div>
      <div className="mt-3 text-3xl font-bold tracking-tight text-black">{value}</div>
    </div>
  );
}

type PricingSlabProps = {
  label: string;
  title: string;
  price: string;
  desc: string;
  features: string[];
  variant: "obsidian" | "white";
  highlight?: boolean;
  unit?: string;
};

function PricingSlab({ label, title, price, desc, features, variant, highlight, unit }: PricingSlabProps) {
    const isObsidian = variant === 'obsidian';
    return (
        <div className={cn(
            "p-16 rounded-[32px] flex flex-col justify-between transition-all duration-700 relative overflow-hidden",
            isObsidian
                ? "bg-[#020617] text-white shadow-[0_80px_120px_-20px_rgba(0,0,0,0.6)] z-10 scale-[1.02]"
                : "bg-white text-[#1A1A1A] border border-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)]"
        )}>
            <div className="space-y-16 relative z-10">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <span className={cn("text-[10px] font-black uppercase tracking-[0.4em]", isObsidian ? "text-primary" : "text-slate-300")}>{label}</span>
                        <h4 className="text-5xl font-bold tracking-tighter uppercase">{title}</h4>
                    </div>
                    {highlight && <Sparkles className="w-6 h-6 text-primary animate-pulse" />}
                </div>

                <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                        <span className="text-7xl font-bold tracking-tighter">{price}</span>
                        {unit && <span className={cn("text-xs font-black uppercase tracking-widest ml-2", isObsidian ? "text-white/20" : "text-black/20")}>{unit}</span>}
                    </div>
                </div>

                <p className={cn("text-xl font-serif italic leading-relaxed", isObsidian ? "text-white/40" : "text-slate-400")}>
                    "{desc}"
                </p>

                <div className={cn("pt-16 border-t", isObsidian ? "border-white/5" : "border-slate-100")}>
                    <ul className="space-y-6">
                        {features.map((f: string) => (
                            <li key={f} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                                <Check className={cn("w-4 h-4", isObsidian ? "text-primary" : "text-[#D94126]")} />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button
                onClick={() => window.open('https://calendly.com/monade-ai/demo', '_blank')}
                className={cn(
                "mt-20 w-full py-6 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-[0.98]",
                isObsidian
                    ? "bg-white text-black hover:bg-slate-100 shadow-2xl"
                    : "bg-black text-white hover:bg-slate-900 shadow-xl"
            )}>
                Get started <ArrowUpRight className="w-4 h-4" />
            </button>
        </div>
    );
}
