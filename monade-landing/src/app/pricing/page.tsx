'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  ShieldCheck,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: number | string;
  desc: string;
  features: string[];
  type: 'light' | 'primary' | 'vault';
  popular?: boolean;
}

interface FeatureRowProps {
  title: string;
  icon: React.ReactNode;
  desc: string;
  isExpanded: boolean;
  onClick: () => void;
}

export default function PricingPage() {
  const [callVolume, setCallVolume] = useState(5000);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const calculateSavings = (volume: number) => {
    const hours = Math.round(volume * 0.15); // Average 9 mins per call
    return { hours };
  };

  const { hours } = calculateSavings(callVolume);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold tracking-tight text-xl">monade</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-black transition-all shadow-soft">
              Book Demo
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Pay for outcomes, <br />
            <span className="text-slate-400 font-medium">not platform fees.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-xl mx-auto">
            No monthly subscription. No seat licensing. No hidden setup costs. Per-second billing calibrated to your call volume. Everything else is included.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-slate-100 rounded-full p-1 relative flex items-center transition-colors"
            >
              <motion.div
                animate={{ x: billingCycle === 'yearly' ? 24 : 0 }}
                className="w-6 h-6 bg-white rounded-full shadow-sm border border-slate-200"
              />
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
              Yearly <span className="text-primary text-[10px] ml-1">Save 20%</span>
            </span>
          </div>
        </section>

        {/* Intent Slider Section */}
        <section className="max-w-5xl mx-auto px-6 mt-20">
          <div className="glass-liquid rounded-3xl p-10 space-y-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
              <div className="space-y-2">
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Calibration</span>
                <h3 className="text-2xl font-bold">What is your monthly volume?</h3>
              </div>
              <div className="text-right">
                <motion.div
                  key={callVolume}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl font-mono font-bold tracking-tighter"
                >
                  {callVolume.toLocaleString()}
                </motion.div>
                <span className="text-slate-400 font-bold text-sm uppercase">Calls / Month</span>
              </div>
            </div>

            <div className="relative pt-4 pb-8">
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={callVolume}
                onChange={(e) => setCallVolume(parseInt(e.target.value))}
                className="relative z-10"
              />
              <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <span>1,000</span>
                <span>50,000</span>
                <span>100,000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-6 rounded-2xl border border-white flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold">~{hours.toLocaleString()}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Hours Reclaimed / Mo</div>
                </div>
              </div>
              <div className="bg-white/50 p-6 rounded-2xl border border-white flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold">99.4%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Audit Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Triptych */}
        <section className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Artisan */}
          <PricingCard
            title="The Artisan"
            price={callVolume < 10000 ? 0.25 : 0.22}
            desc="For teams running their first voice AI pilot. Core Hinglish NLP, standard CRM integrations, 8-stage script architecture. Everything you need to prove ROI."
            features={['Sub-200ms Response', 'Core Hinglish NLP', 'Standard CRM Integration', '8-Stage Script Architecture']}
            type="light"
          />

          {/* Engine */}
          <PricingCard
            title="The Engine"
            price={callVolume < 10000 ? 0.20 : 0.18}
            desc="Your operational core. Custom call rubrics, sentiment heatmaps, priority support, and the full self-improving script engine. Weekly refinement included."
            features={['Everything in Artisan', 'Custom Rubrics & Call Logic', 'Sentiment Heatmaps', 'Weekly Script Refinement']}
            type="primary"
            popular
          />

          {/* Sovereign */}
          <PricingCard
            title="The Sovereign"
            price="Custom"
            desc="Full infrastructure control. Dedicated GPU clusters, air-gapped deployment, global dialect tuning, TRAI/DPDP compliance, and a direct line to our founders."
            features={['Air-gapped Deployment', 'Dedicated GPU Clusters', '24/7 Founder Access', 'Global Dialect Tuning']}
            type="vault"
          />

        </section>

        {/* Feature Deep-Dive (Notion Style) */}
        <section className="max-w-3xl mx-auto px-6 mt-40 space-y-8">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold">The Detail Ledger</h2>
            <p className="text-slate-500">Engineering transparency, one feature at a time.</p>
          </div>

          <div className="border border-slate-100 rounded-2xl overflow-hidden">
            <FeatureRow
              title="Spectral Noise Isolation"
              icon={<Zap className="w-4 h-4" />}
              desc="Filters out Mumbai traffic, office hum, and construction noise in real-time before processing caller intent. Your agent hears clearly, even when your caller can't."
              isExpanded={expandedFeature === 'spectral'}
              onClick={() => setExpandedFeature(expandedFeature === 'spectral' ? null : 'spectral')}
            />
            <FeatureRow
              title="Hinglish Code-Switching"
              icon={<Globe className="w-4 h-4" />}
              desc="Natively understands mixed Hindi-English speech. Technical terms stay in English (EMI, ROI, site visit). Trust phrases stay in Hindi (अच्छा, समझ में आया, ठीक है). Matches the caller's language mix within 1-2 turns."
              isExpanded={expandedFeature === 'hinglish'}
              onClick={() => setExpandedFeature(expandedFeature === 'hinglish' ? null : 'hinglish')}
            />
            <FeatureRow
              title="PII Auto-Redaction"
              icon={<Lock className="w-4 h-4" />}
              desc="Detects and redacts sensitive data — Aadhaar numbers, credit card details, medical info — from both audio recordings and transcripts. DPDP Act compliant by default."
              isExpanded={expandedFeature === 'pii'}
              onClick={() => setExpandedFeature(expandedFeature === 'pii' ? null : 'pii')}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function PricingCard({ title, price, desc, features, type, popular }: PricingCardProps) {
  const isVault = type === 'vault';
  const isPrimary = type === 'primary';

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-8 rounded-3xl relative flex flex-col justify-between h-[600px] transition-luxury ${isVault ? 'glass-vault text-white' : 'glass-liquid text-slate-900'
        } ${isPrimary ? 'ring-2 ring-primary ring-offset-4' : ''}`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
          Most Calibrated
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className={`text-sm font-bold uppercase tracking-widest ${isVault ? 'text-slate-400' : 'text-slate-500'}`}>{title}</h4>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-mono font-bold">{typeof price === 'number' ? `$${price}` : price}</span>
            {typeof price === 'number' && <span className="text-sm font-bold opacity-60">/ min</span>}
          </div>
        </div>
        <p className={`text-sm leading-relaxed ${isVault ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>

        <div className="pt-8 space-y-4">
          {features.map((f: string) => (
            <div key={f} className="flex items-start gap-3 text-sm">
              <Check className={`w-4 h-4 mt-0.5 ${isVault ? 'text-primary' : 'text-primary'}`} />
              <span className="font-medium">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={`w-full py-4 rounded-full font-bold text-sm transition-all shadow-lg ${isVault ? 'bg-white text-slate-900 hover:bg-slate-100' :
          isPrimary ? 'bg-primary text-white hover:bg-orange-600 shadow-orange-500/20' :
            'bg-slate-900 text-white hover:bg-black'
        }`}>
        {isVault ? 'Speak to a Founder' : 'Get Started'}
      </button>
    </motion.div>
  );
}

function FeatureRow({ title, icon, desc, isExpanded, onClick }: FeatureRowProps) {
  return (
    <div className="border-b border-slate-50 last:border-0">
      <button
        onClick={onClick}
        className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
            {icon}
          </div>
          <span className="font-bold text-sm">{title}</span>
        </div>
        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-18 text-sm text-slate-500 leading-relaxed bg-slate-50/50">
              {desc}
              <div className="mt-4 p-4 glass-liquid rounded-xl text-[10px] font-mono flex items-center gap-4">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-400 uppercase font-bold">Live Visualizer</span>
                </div>
                <div className="flex gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 bg-primary/20 rounded-full h-4" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}