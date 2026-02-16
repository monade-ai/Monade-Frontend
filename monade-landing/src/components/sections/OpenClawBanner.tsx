'use client';

import React from "react";
import { ArrowRight } from "lucide-react";

export const OpenClawBanner = () => {
  return (
    <a href="/open-claw#business-kits" className="block group">
      <div className="relative w-full bg-[#020617] text-white py-3 overflow-hidden cursor-pointer">
        {/* Animated gradient underlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D94126]/0 via-[#D94126]/20 to-[#D94126]/0 animate-[shimmer_3s_ease-in-out_infinite]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-center gap-4 text-sm font-medium relative z-10">
          {/* Pulse dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D94126] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D94126]" />
          </span>

          <span className="text-white/70 text-[13px] tracking-wide">
            <span className="font-bold text-white">Open Claw + Monade</span>
            <span className="hidden sm:inline">
              {" "}&mdash; Turn any agent into a revenue machine.
            </span>
            <span className="sm:hidden">
              {" "}&mdash; Build a business.
            </span>
          </span>

          <span className="flex items-center gap-1 text-[#D94126] font-bold text-[13px] group-hover:text-white transition-colors shrink-0">
            Browse Business Kits
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </a>
  );
};

export default OpenClawBanner;
