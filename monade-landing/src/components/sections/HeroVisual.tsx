'use client';

import React from "react";
import { motion } from "framer-motion";
import { StaticMeshGradient } from '@paper-design/shaders-react';
import { Database, RefreshCcw, Zap, TrendingUp, MessageSquare, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingCard = ({ children, className, rotation, delay = 0 }: { children: React.ReactNode, className?: string, rotation: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotate: parseFloat(rotation) * 2 }}
    animate={{ opacity: 1, y: 0, rotate: parseFloat(rotation) }}
    whileHover={{ rotate: 0, y: -5, scale: 1.02 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={cn(
      "p-8 rounded-[40px] shadow-2xl backdrop-blur-xl border border-white/10 transition-shadow hover:shadow-primary/20",
      className
    )}
  >
    {children}
  </motion.div>
);

export const HeroVisual = () => {
  return (
    <div className="mt-24 relative mx-auto max-w-7xl h-[800px] md:h-[700px] flex items-center justify-center">
      {/* Background container with gradient */}
      <div className="absolute inset-0 bg-[#020617] rounded-[64px] overflow-hidden border border-slate-200/5">
        <div className="absolute inset-0 opacity-40">
          <StaticMeshGradient
            width={1400}
            height={800}
            colors={["#FF4D00", "#000000", "#1A1A1A", "#0F172A"]}
            positions={42}
            mixing={0.4}
            waveX={0.3}
            scale={0.8}
            rotation={245}
          />
        </div>
      </div>

      {/* Playful Card Stack */}
      <div className="relative z-10 w-full px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Script Evolution */}
        <div className="md:col-span-5 space-y-6 relative">
          <FloatingCard rotation="-2" delay={0.4} className="bg-[#0F172A] text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-intellect">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-white/40">Business data</span>
            </div>
            <p className="text-lg leading-relaxed font-serif italic opacity-80">
              "We have 15 outlets in Bangalore. Delivery is ₹40. Average prep time is 20 mins. Customers often ask about spice levels..."
            </p>
          </FloatingCard>

          <div className="flex justify-center -my-4 relative z-20">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-[#020617]">
              <RefreshCcw className="w-5 h-5 text-white animate-spin-slow" />
            </div>
          </div>

          <FloatingCard rotation="1" delay={0.6} className="bg-[#020617] text-white border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="text-[11px] font-bold text-primary">Live AI</span>
            </div>
            <p className="text-xl font-bold tracking-tight mb-2 text-balance">
              "Sir, Bangalore outlets par availability check kar li hai. Delivery charge ₹40 rahega — kitna spicy chahiye aapko?"
            </p>
            <div className="flex gap-2 mt-4">
              <span className="text-[10px] font-bold bg-white/5 px-3 py-1 rounded-full opacity-60">Natural flow</span>
              <span className="text-[10px] font-bold bg-white/5 px-3 py-1 rounded-full opacity-60">Context aware</span>
            </div>
          </FloatingCard>
        </div>

        {/* Right Column: Performance & Live Feed */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          <FloatingCard rotation="2" delay={0.8} className="bg-[#020617] text-white md:mt-12">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-mono font-bold text-emerald-500">+420%</div>
                <div className="text-[11px] font-bold text-white/40">Booking rate</div>
              </div>
            </div>
            <div className="h-24 flex items-end gap-1.5">
              {[40, 65, 45, 80, 70, 95, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-white/5 rounded-t-lg group-hover:bg-emerald-500/50 transition-colors" style={{ height: `${h}%` }} />
              ))}
            </div>
          </FloatingCard>

          <FloatingCard rotation="-1" delay={0.9} className="bg-[#0F172A] text-white">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-4 h-4 text-sky-400" />
              <span className="text-[11px] font-bold text-sky-400">Transcript</span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0" />
                <p className="text-xs opacity-60">"Are the apartments in Worli pet-friendly?"</p>
              </div>
              <div className="flex gap-3 justify-end text-right">
                <p className="text-xs text-primary font-bold">"Absolutely. We have a dedicated pet park on the 5th floor."</p>
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0" />
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold opacity-40">Interest: High</span>
                </div>
              </div>
            </div>
          </FloatingCard>

          {/* Bonus floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-8 -left-8 md:left-auto md:right-0 bg-primary text-white p-6 rounded-[32px] shadow-2xl -rotate-12 hover:rotate-0 transition-transform cursor-pointer z-30"
          >
            <MessageSquare className="w-6 h-6 mb-2" />
            <div className="text-sm font-bold leading-tight">Closes in<br />12 Languages</div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
