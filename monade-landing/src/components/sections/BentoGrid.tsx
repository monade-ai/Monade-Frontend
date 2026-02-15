'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, DollarSign, Activity, Globe, Zap, RefreshCcw, 
  Clock, ArrowRight, User, Settings, Database
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── The Monolith Wrapper ───
const Module = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
            "rounded-[32px] p-12 flex flex-col justify-between transition-all duration-700 relative overflow-hidden border border-black/[0.03]",
            className
        )}
    >
        {children}
    </motion.div>
);

export const BentoGrid = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-4 pb-48 font-sans selection:bg-black/10 antialiased">

      {/* 01: The Anxiety of Time (The 8-Second Gate) */}
      <div className="md:col-span-8">
        <Module className="bg-white min-h-[500px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
            <div className="max-w-xl relative z-10">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-12">System_Constraint_01</div>
                <h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1A1A1A] leading-[0.85] mb-8">
                    You have <br />
                    <span className="font-serif italic text-slate-300 font-light lowercase">eight seconds.</span>
                </h3>
                <p className="text-slate-500 text-xl leading-relaxed max-w-md font-medium">
                    Human instinct triggers at the 8-second mark. Generic AI pitches. We ask for permission.
                </p>
            </div>
            
            {/* The 8s Sculpture */}
            <div className="absolute right-[-5%] bottom-[-5%] pointer-events-none">
                <div className="text-[25rem] font-black text-black/[0.02] leading-none select-none italic">08</div>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-12 bg-slate-100" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">Identity // Context // Permission</span>
            </div>
        </Module>
      </div>

      {/* 02: The Economic Module (Anodized Oxide) */}
      <div className="md:col-span-4">
        <Module className="bg-[#D97757] text-white shadow-2xl h-full">
            <div className="space-y-12 relative z-10">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Economics_Mod</div>
                <h3 className="text-4xl font-bold tracking-tighter leading-none uppercase">
                    Zero <br />
                    <span className="text-white/40 font-light">Platform_Tax.</span>
                </h3>
                <p className="text-white/60 text-lg font-medium leading-snug">
                    No subscriptions. No seat licenses. Pay only for the seconds of generated audio.
                </p>
            </div>
            <div className="pt-12 border-t border-white/10 flex justify-between items-baseline">
                <div className="space-y-1">
                    <span className="text-[8px] font-black uppercase text-white/20">Active_Rate</span>
                    <div className="text-5xl font-mono font-bold tracking-tighter italic">₹3.00</div>
                </div>
                <div className="text-right space-y-1">
                    <span className="text-[8px] font-black uppercase text-white/20">Setup</span>
                    <div className="text-5xl font-mono font-bold tracking-tighter text-white/20 italic">₹0</div>
                </div>
            </div>
        </Module>
      </div>

      {/* 03: The Calibration (Talk Ratio) */}
      <div className="md:col-span-6">
        <Module className="bg-[#708894] text-white h-full">
            <div className="relative z-10 space-y-12">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Calibration_Ratio</div>
                <h3 className="text-4xl font-bold tracking-tighter uppercase leading-[0.9]">
                    Optimized <br />
                    <span className="text-white/40">Talk_Ratio.</span>
                </h3>
                <p className="text-white/70 text-lg font-medium leading-snug">
                    Deals die in monologues. We tune our agents to a 43:57 ratio—listening more than they speak.
                </p>
                
                {/* Minimalist Bar Sculpture */}
                <div className="space-y-8 pt-8 border-t border-white/5">
                    <div className="flex justify-between items-end">
                        <div className="space-y-2 flex-1">
                            <div className="flex justify-between text-[9px] font-black uppercase tracking-widest opacity-30 mb-2">
                                <span>Monade_V4</span>
                                <span>43%</span>
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "43%" }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                    className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Module>
      </div>

      {/* 04: The Linguistic Module (Sage Field) */}
      <div className="md:col-span-6">
        <Module className="bg-[#869781] text-white h-full">
            <div className="relative z-10 space-y-12">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Linguistic_System</div>
                <h3 className="text-4xl font-bold tracking-tighter uppercase leading-[0.9]">
                    Native <br />
                    <span className="text-white/40">Fluidity.</span>
                </h3>
                <p className="text-white/70 text-lg font-medium leading-snug">
                    Natively code-switches between Hindi, English, and regional dialects. It understands honorifics instantly.
                </p>
                <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                    {["Hinglish", "Honorifics", "Context", "Dialects"].map((item) => (
                        <span key={item} className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </Module>
      </div>

      {/* 05: The Signal Path (Latency Design) */}
      <div className="md:col-span-12 lg:col-span-8">
        <Module className="bg-[#020617] text-white border-white/5 min-h-[450px]">
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 h-full">
                <div className="space-y-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Signal_Path_v4</div>
                    <h3 className="text-5xl font-bold tracking-tighter leading-none uppercase">
                        Zero <br />
                        <span className="text-white/20">Latency.</span>
                    </h3>
                    <p className="text-white/40 text-xl font-serif italic leading-relaxed">
                        "We design for the 400ms delay. Using predictive fillers to make the machine feel immediate."
                    </p>
                </div>
                {/* Circuit Trace Schematic */}
                <div className="bg-white/5 rounded-3xl p-10 border border-white/10 font-mono text-[10px] space-y-8 relative shadow-inner">
                    <div className="flex justify-between items-center opacity-20">
                        <span className="tracking-[0.3em]">TRACE_ID: 8829-X</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="space-y-6 text-xs uppercase font-black tracking-tight">
                        <div className="flex gap-6 items-center">
                            <span className="opacity-10 text-xl italic">01</span>
                            <span className="text-white/40">Detect_Audio_Packet</span>
                        </div>
                        <div className="flex gap-6 items-center pl-6 border-l-2 border-primary/30">
                            <span className="text-primary text-xl italic">02</span>
                            <span className="text-primary">Predict_Semantic_Filler</span>
                        </div>
                        <div className="flex gap-6 items-center">
                            <span className="opacity-10 text-xl italic">03</span>
                            <span className="text-white/40">Stream_V2V_Payload</span>
                        </div>
                    </div>
                </div>
            </div>
        </Module>
      </div>

      {/* 06: The Learning Loop */}
      <div className="md:col-span-12 lg:col-span-4">
        <Module className="bg-white border-black/5 shadow-sm h-full">
            <div className="space-y-12 h-full flex flex-col justify-between">
                <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-12">Evolution_Mod</div>
                    <h3 className="text-4xl font-bold tracking-tighter text-[#1A1A1A] leading-[0.9] uppercase">
                        Infinite <br />
                        <span className="font-serif italic text-slate-300 font-light lowercase text-3xl">Refinement.</span>
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium mt-6">
                        Week 1 script ≠ Week 12. We refine your models weekly based on real conversion data.
                    </p>
                </div>
                <div className="pt-12 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Active_Learning</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-200" />
                </div>
            </div>
        </Module>
      </div>

    </section>
  );
};

export default BentoGrid;
