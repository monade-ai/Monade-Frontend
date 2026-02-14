'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-16 px-6 overflow-hidden">
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
      </div>
    </section>
  );
};

export default Hero;
