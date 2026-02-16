'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Knowledge",
    desc: "Ingest your raw data from Sheets, Notion, or PDFs.",
    color: "bg-[#708894]" // Steel Blue
  },
  {
    id: "02",
    title: "Synthesis",
    desc: "Map logic using 18 principles of persuasion.",
    color: "bg-[#869781]" // Sage Green
  },
  {
    id: "03",
    title: "Calibration",
    desc: "Adjust tone and resonance until it feels human.",
    color: "bg-[#D97757]" // Burnt Clay
  },
  {
    id: "04",
    title: "Deployment",
    desc: "Go live instantly at sub-200ms latency.",
    color: "bg-[#5A6B7D]" // Muted Storm Blue
  },
  {
    id: "05",
    title: "Evolution",
    desc: "The loop closes. Every call refines the next.",
    color: "bg-[#BC8A7A]" // Muted Terracotta/Clay
  }
];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#FDFBF7] overflow-hidden text-[#1A1A1A] border-y border-black/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header: Pure Clarity */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase text-slate-900">
              A continuous <br />
              <span className="font-serif italic text-slate-300 font-light lowercase">loop of improvement.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-sm leading-relaxed font-medium">
                We remove the technical friction to focus on one outcome: a perfect phone call.
            </p>
          </div>
        </div>

        {/* ─── The Modules ─── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 relative">
            {STEPS.map((step, i) => (
                <motion.div 
                    key={step.id} 
                    onClick={() => setActiveStep(i)}
                    className={cn(
                        "p-10 rounded-[24px] border transition-all duration-700 cursor-pointer flex flex-col h-[340px] justify-between relative overflow-hidden",
                        activeStep === i 
                            ? cn(step.color, "text-white border-white/10 shadow-2xl scale-[1.02] z-10") 
                            : "bg-white border-black/5 text-[#1A1A1A] opacity-40 grayscale group hover:opacity-80"
                    )}
                >
                    {/* Material Bevel */}
                    {activeStep === i && (
                        <div className="absolute inset-0 pointer-events-none border-t border-white/20 rounded-[24px] z-20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
                    )}

                    <div className="space-y-10 relative z-10">
                        <h4 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase leading-[0.9]">
                            {step.title}
                        </h4>
                    </div>

                    <div className={cn(
                        "transition-all duration-700 relative z-10",
                        activeStep === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>
                        <p className="text-lg md:text-xl font-serif italic leading-[1.1] opacity-70">
                            {step.desc}
                        </p>
                    </div>

                    {/* Subtle Texture */}
                    {activeStep === i && (
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    )}
                </motion.div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center pt-10 border-t border-black/5">
            <button 
                onClick={() => window.open('https://calendly.com/monade-ai/demo', '_blank')}
                className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-slate-900 transition-all shadow-lg active:scale-0.98 group"
            >
                Start your pilot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
