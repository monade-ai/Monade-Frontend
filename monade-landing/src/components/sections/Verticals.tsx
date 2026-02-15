'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Heart, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DATA = [
  {
    id: "01",
    icon: Building2,
    vertical: "Real Estate",
    location: "Mumbai Brokers",
    challenge: "8-second spam gate and family decision dynamics.",
    approach: "Permission-based opening. Family walkthrough offers. Loss framing on inventory. Respectful register with 'ji' honorifics.",
    metric: "3x",
    color: "bg-[#D97757]" // Burnt Clay
  },
  {
    id: "02",
    icon: Heart,
    vertical: "Healthcare",
    location: "IVF Clinics",
    challenge: "High-sensitivity topics and after-hours call loss.",
    approach: "Warm, empathetic persona. No medical advice. EMI framing before total cost. Family welcome for consultations.",
    metric: "+35%",
    color: "bg-[#869781]" // Sage Green
  },
  {
    id: "03",
    icon: GraduationCap,
    vertical: "EdTech",
    location: "Career Coaching",
    challenge: "High competition and parental ROI skepticism.",
    approach: "Social proof anchoring with local alumni data. Parental inclusivity. Micro-commitments before enrollment ask.",
    metric: "2.5x",
    color: "bg-[#708894]" // Steel Blue
  }
];

export const Verticals = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#FDFBF7] overflow-hidden text-[#1A1A1A] border-y border-black/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-black leading-[0.85] uppercase">
            Industries <br />
            <span className="font-serif italic text-slate-300 font-light lowercase">mapped.</span>
          </h2>
        </div>

        {/* ─── The Machined Registry ─── */}
        <div className="flex flex-col border-t border-black/5">
          {DATA.map((item, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setActiveIndex(i)}
              className="relative transition-all duration-700 cursor-pointer overflow-hidden group"
            >
              {/* THE PIGMENT SLIDE */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 22 }}
                    className={cn("absolute inset-0 z-0", item.color)}
                  />
                )}
              </AnimatePresence>

              {/* The Interaction Slot */}
              <div className={cn(
                "relative z-10 px-6 py-10 lg:px-16 transition-all duration-700",
                activeIndex === i ? "text-white" : "text-black/40 hover:text-black"
              )}>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Col 1: Identity */}
                    <div className="lg:col-span-3 flex items-center gap-6 lg:gap-8">
                        <item.icon className={cn(
                            "w-6 h-6 lg:w-8 lg:h-8 transition-all duration-500",
                            activeIndex === i ? "stroke-[2px] scale-110" : "stroke-[1px] opacity-40 group-hover:opacity-100"
                        )} />
                        <div>
                            <h4 className="text-2xl lg:text-4xl font-bold tracking-tighter uppercase leading-none mb-1">{item.vertical}</h4>
                            <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest opacity-40">{item.location}</span>
                        </div>
                    </div>

                    {/* Col 2: THE TYPOGRAPHIC BLOOM */}
                    <div className="lg:col-span-6">
                        <AnimatePresence mode="wait">
                            {activeIndex === i && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <p className="text-lg lg:text-2xl font-serif italic leading-tight max-w-xl">
                                        "{item.approach}"
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Col 3: The Metric */}
                    <div className="lg:col-span-3 lg:text-right">
                        <motion.div 
                            animate={{ 
                                opacity: activeIndex === i ? 1 : 0.1,
                                scale: activeIndex === i ? 1 : 0.95
                            }}
                            className="text-6xl lg:text-8xl font-mono font-bold tracking-tighter leading-none"
                        >
                            {item.metric}
                        </motion.div>
                    </div>

                </div>

                {/* The Challenge Reveal */}
                <motion.div
                    animate={{ 
                        height: activeIndex === i ? "auto" : 0,
                        opacity: activeIndex === i ? 0.4 : 0,
                        marginTop: activeIndex === i ? 32 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                >
                    <p className="text-xs uppercase font-black tracking-[0.2em] border-t border-current pt-8">
                        The Challenge: {item.challenge}
                    </p>
                </motion.div>

              </div>
            </div>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-24 flex justify-center">
            <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] group">
                Deploy for your industry 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Verticals;
