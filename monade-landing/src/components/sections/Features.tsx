'use client';

import React from "react";
import { RefreshCcw, LayoutGrid, DollarSign } from "lucide-react";
import { ModelIdentityCard } from "../ModelIdentityCard";

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

export const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 pb-40">
      
      {/* Feature 1: The Script Engine */}
      <div className="md:col-span-8 bg-slate-50 rounded-[40px] p-12 border border-slate-100 flex flex-col justify-between group overflow-hidden relative">
        <div className="relative z-10 max-w-md">
          <RefreshCcw className="w-8 h-8 text-[#FF4D00] mb-6" />
          <h3 className="text-3xl font-bold mb-4">Iterative Intelligence.</h3>
          <p className="text-slate-500 leading-relaxed text-lg font-medium">
            Our AI doesn't just speak; it learns. Upload a Google Sheet or Odoo KB, and watch your agent's script improve itself based on real-time user sentiment.
          </p>
        </div>
        {/* Visual Decoration */}
        <div className="absolute right-0 bottom-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
           <LayoutGrid className="w-40 h-40" />
        </div>
      </div>

      {/* Feature 2: Pay as you Go */}
      <div className="md:col-span-4 bg-slate-900 rounded-[40px] p-12 text-white flex flex-col justify-between">
        <DollarSign className="w-8 h-8 text-[#F5D916] mb-6" />
        <div>
          <h3 className="text-3xl font-bold mb-4">Pay only for what they hear.</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            No monthly overhead. No management fees. We only bill for the seconds your customers are on the call.
          </p>
        </div>
      </div>

      {/* Model Identity Section (Social Proof / Capability) */}
      <div className="md:col-span-6">
        <ModelIdentityCard 
          name="Intelligence Alpha"
          provider="Monade Custom"
          type="Iterative Scripting"
          context="Proprietary Hinglish"
          pricing="Pay per Use"
          shaderConfig={shaderConfigs[0]}
        />
      </div>
      <div className="md:col-span-6">
        <ModelIdentityCard 
          name="Analysis Beta"
          provider="Real-time Trace"
          type="CRM Synchronized"
          context="Immediate Feedback"
          pricing="Included"
          shaderConfig={shaderConfigs[1]}
        />
      </div>

    </section>
  );
};
