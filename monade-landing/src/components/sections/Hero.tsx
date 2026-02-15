'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Badge - Minimalist and informative */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-slate-50 border border-slate-100 rounded-full"
          >
            <div className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-400"></span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Deploy your first agent in minutes</span>
          </motion.div>

          {/* Headline - Human and precise */}
          <h1 className="text-6xl md:text-[90px] font-semibold tracking-tight leading-[1.05] text-slate-900 text-balance">
            Voice AI that feels <br />
            <span className="font-serif italic text-slate-400 font-medium">remarkably human.</span>
          </h1>

          {/* Subhead - Airbnb warmth */}
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We’ve built a platform that handles the details, so you can focus on the conversations that matter most to your business.
          </p>

          {/* CTAs - Clean and balanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg transition-all hover:bg-black active:scale-[0.98]">
              Get started for free
            </button>
            <button className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-[0.98]">
              View the demo
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
