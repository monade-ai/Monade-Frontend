'use client';

import React from "react";
import { motion } from "framer-motion";
import { StaticMeshGradient } from '@paper-design/shaders-react';
import { ArrowRight, Database, RefreshCcw, Zap } from "lucide-react";

const LiveScriptEvolution = () => (
  <div className="space-y-4">
    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
       <div className="flex items-center gap-2 mb-2">
         <Database className="w-3 h-3 text-[#F5D916]" />
         <span className="text-[10px] font-mono text-white/40 uppercase">Knowledge Base Input</span>
       </div>
       <p className="text-xs text-white/70 italic">"Our shipping takes 3-5 days. Refund policy is 30 days..."</p>
    </div>
    <div className="flex justify-center">
       <RefreshCcw className="w-4 h-4 text-[#FF4D00] animate-[spin_3s_linear_infinite]" />
    </div>
    <div className="p-4 bg-[#FF4D00]/10 border border-[#FF4D00]/20 rounded-xl relative overflow-hidden">
       <div className="flex items-center gap-2 mb-2">
         <Zap className="w-3 h-3 text-[#FF4D00]" />
         <span className="text-[10px] font-mono text-[#FF4D00] uppercase">Finetuned Script v2.1</span>
       </div>
       <p className="text-xs text-white font-medium">"I can definitely help with that. Since our shipping is 3-5 days, you'll see it by Friday. Would you like to proceed?"</p>
       <div className="absolute top-0 right-0 p-2">
         <span className="text-[8px] font-bold text-[#FF4D00] bg-[#FF4D00]/20 px-1.5 py-0.5 rounded">Iterative Improvement</span>
       </div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
              <span className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">No Platform Fee • Pay per Second</span>
            </div>
            <h1 className="text-6xl md:text-[84px] font-bold tracking-tighter leading-[0.9] text-slate-900">
              Voice AI Workflow, <br />
              <span className="text-slate-400">Perfectly Simplified.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              Zero setup fees. Zero maintenance. Simply upload your knowledge base, and we generate a finetuned script that learns from every call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Build Your Agent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-sm font-bold">Compatible with</span>
              <div className="flex gap-3">
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Zoho</span>
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Notion</span>
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Odoo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Evidence: The Iterative Engine */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full bg-[#0A0A0A] rounded-[48px] overflow-hidden border border-slate-200/10 shadow-3xl">
            <div className="absolute inset-0 opacity-40">
              <StaticMeshGradient
                width={800}
                height={1000}
                colors={["#FF4D00", "#000000", "#1A1A1A", "#0F172A"]}
                positions={42}
                mixing={0.4}
                waveX={0.3}
                scale={0.8}
                rotation={245}
              />
            </div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-center">
              <LiveScriptEvolution />
              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono text-white/30 uppercase block mb-1">Billing Model</span>
                  <span className="text-lg font-bold text-white">$0.00 Platform Fee</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-white/30 uppercase block mb-1">Feedback Loop</span>
                  <span className="text-lg font-bold text-[#F5D916]">Immediate Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
