'use client';

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

const testimonials = [
  { 
    quote: "Monade didn't just automate our calls; they erased the friction of our entire customer lifecycle.",
    author: "Elena Vardas",
    role: "Hellenic Logistics"
  },
  { 
    quote: "The first Hinglish NLP that actually understands the nuance of Mumbai business talk. It's not a tool, it's a team member.",
    author: "Aditya Shah",
    role: "Fintech Pulse"
  },
  {
    quote: "Zero platform fees and immediate CRM synchronization. Finally, a voice AI that respects the unit economics of a growing business.",
    author: "Sanjay Gupta",
    role: "Odoo Integrations"
  }
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to active index
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const index = Math.max(0, Math.min(
        Math.floor(v * testimonials.length),
        testimonials.length - 1
      ));
      if (index !== activeIndex) setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [smoothProgress, activeIndex]);

  const currentTestimonial = testimonials[activeIndex] || testimonials[0];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-f-55 flex justify-between items-center">
          
          {/* Left: The Monolithic Altar */}
          <div className="w-2/3 h-f-233 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -21, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 21, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-f-55"
              >
                <h3 className="text-[clamp(40px,5vw,72px)] font-medium tracking-tighter text-slate-900 leading-[1.05] max-w-3xl">
                  "{currentTestimonial.quote}"
                </h3>
                <footer className="space-y-f-8">
                   <p className="text-xl font-bold text-slate-900 tracking-tight">
                     {currentTestimonial.author}
                   </p>
                   <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.5em]">
                     {currentTestimonial.role}
                   </p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: The Life Line (Vertical Scroll Indicator) */}
          <div className="relative h-f-233 w-[1px] bg-slate-100">
            {/* Stations */}
            <div className="absolute inset-0 flex flex-col justify-between py-f-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-2 h-2 -ml-[3px] rounded-full transition-colors duration-500",
                    i <= activeIndex ? "bg-slate-300" : "bg-slate-100"
                  )}
                />
              ))}
            </div>

            {/* The Vitality Dot */}
            <motion.div 
              className="absolute -left-[5px] w-[11px] h-[11px] rounded-full bg-primary shadow-glow-orange z-10"
              style={{ 
                top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                translateY: "-50%" 
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper for class merging if not available in this scope
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
