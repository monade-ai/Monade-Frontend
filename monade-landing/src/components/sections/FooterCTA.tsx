'use client';

import React from "react";

export const FooterCTA = () => {
  return (
    <footer className="py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.95]">
          Stop losing deals<br />to voicemail.
        </h2>
        <div className="flex flex-col items-center gap-6">
          <button className="px-12 py-6 bg-slate-900 text-white rounded-full font-bold text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
            Build Your First Agent
          </button>
          <p className="text-sm font-medium text-slate-400">
            No credit card required · Setup in <span className="text-slate-900">2 days</span>
          </p>
        </div>

        <div className="pt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-100 mt-24">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="font-bold text-xl tracking-tight text-slate-900">monade</span>
          </div>
          <p className="text-sm text-slate-400">© 2026 Monade AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Socials placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
