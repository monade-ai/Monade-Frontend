'use client';

import React from "react";

export const CRMIntegrations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-bold text-slate-400 mb-12">Connects with your existing tools</p>
        <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-2xl font-bold tracking-tighter">ZOHO</span>
          <span className="text-2xl font-bold tracking-tighter">NOTION</span>
          <span className="text-2xl font-bold tracking-tighter">ODOO</span>
          <span className="text-2xl font-bold tracking-tighter">GOOGLE SHEETS</span>
          <span className="text-2xl font-bold tracking-tighter text-slate-300">+ MORE</span>
        </div>
      </div>
    </section>
  );
};

export default CRMIntegrations;
