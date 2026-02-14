'use client';

import React from "react";
import { motion } from "framer-motion";
import { StaticMeshGradient } from '@paper-design/shaders-react';
import { ArrowRight, Database, RefreshCcw, Zap } from "lucide-react";

const LiveScriptEvolution = () => (
  <div className="space-y-4">
    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
      <div className="flex items-center gap-2 mb-2">
        <Database className="w-3 h-3 text-intellect" />
        <span className="text-[10px] font-mono text-white/40 uppercase">Knowledge Base Input</span>
      </div>
      <p className="text-xs text-white/70 italic">"Our shipping takes 3-5 days. Refund policy is 30 days. EMI available on orders above ₹10,000..."</p>
    </div>
    <div className="flex justify-center">
      <RefreshCcw className="w-4 h-4 text-primary animate-spin-slow" />
    </div>
    <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <Zap className="w-3 h-3 text-primary" />
        <span className="text-[10px] font-mono text-primary uppercase">Finetuned Script v3.1</span>
      </div>
      <p className="text-xs text-white font-medium">"Bilkul, I can help with that. Since delivery takes 3-5 days, aapko Friday tak mil jayega. EMI option bhi available hai — shall I walk you through it?"</p>
      <div className="absolute top-0 right-0 p-2">
        <span className="text-[8px] font-bold text-primary bg-primary/20 px-1.5 py-0.5 rounded">Self-Improving · Hinglish</span>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50/80 backdrop-blur-sm border border-slate-200/60 rounded-full shadow-sm"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">No Platform Fee · Pay Per Second</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.9] text-slate-900 text-balance">
            Most voice AI
            <span className="block font-serif italic text-slate-400 mt-2 font-medium">gets hung up on.</span>
            <span className="block text-primary mt-4">Ours converts.</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            We researched why humans actually say yes on phone calls — then built the platform that implements it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Build Your First Agent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg shadow-sm hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
              View Demo Scripts
            </button>
          </div>

          {/* Works With */}
          <div className="pt-12 flex flex-col items-center gap-4 text-slate-400 opacity-60 mix-blend-multiply">
            <span className="text-xs font-bold uppercase tracking-widest">Seamlessly integrates with</span>
            <div className="flex gap-8 items-center grayscale">
              {["Zoho", "Notion", "Odoo", "Salesforce"].map((logo) => (
                <span key={logo} className="text-sm font-bold font-mono tracking-tight">{logo}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative mx-auto max-w-6xl aspect-[16/9] md:aspect-[21/9] bg-[#020617] rounded-[48px] overflow-hidden border border-slate-200/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]"
        >
          <div className="absolute inset-0 opacity-60">
            <StaticMeshGradient
              width={1400}
              height={800}
              colors={["#FF4D00", "#000000", "#1A1A1A", "#0F172A"]}
              positions={42}
              mixing={0.4}
              waveX={0.3}
              scale={0.8}
              rotation={245}
            />
          </div>

          {/* Floating UI Elements inside the visual */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="flex gap-8 p-12 w-full max-w-5xl items-center">
              <div className="flex-1 space-y-6">
                <LiveScriptEvolution />
              </div>
              <div className="hidden md:block flex-1 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Conversion Rate</div>
                        <div className="text-xs text-white/50">Real-time metric</div>
                      </div>
                    </div>
                    <span className="text-2xl font-mono font-bold text-primary">+340%</span>
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[30, 45, 35, 60, 75, 55, 80, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/10 rounded-t-sm hover:bg-primary transition-colors" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
