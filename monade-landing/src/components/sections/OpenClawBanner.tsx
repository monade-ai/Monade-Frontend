'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const OpenClawBanner = () => {
  return (
    <div className="relative w-full bg-[#0F172A] text-white py-3 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-center gap-3 text-sm font-medium">
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span className="opacity-90">
          Monade is now the native intelligence layer for <span className="font-bold text-white uppercase tracking-wider text-[11px]">Open Claw</span>.
        </span>
        <span className="hidden md:inline opacity-60">
          Deploy autonomous agents that learn and adapt from every conversation.
        </span>
        <Link 
          href="/open-claw" 
          className="flex items-center gap-1 text-primary hover:text-white transition-colors ml-2 group"
        >
          Explore the plugin
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-primary/10 blur-[40px] pointer-events-none" />
    </div>
  );
};

export default OpenClawBanner;
