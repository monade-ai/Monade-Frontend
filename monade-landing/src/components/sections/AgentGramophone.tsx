'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Pause, SkipBack, SkipForward, Phone, 
  X, ChevronRight, Music, Mic2,
  Car, Building, ShoppingBag, Utensils
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

// ─── Types & Mock Data ───
const AGENTS = [
  {
    id: "taxi",
    name: "Ravi",
    icon: <Car className="w-5 h-5" />,
    role: "Night Dispatcher",
    specialty: "Logistics",
    color: "bg-rose-500",
    glow: "rgba(244, 63, 94, 0.2)",
    recordLabel: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "realestate",
    name: "Ananya",
    icon: <Building className="w-5 h-5" />,
    role: "Luxury Consultant",
    specialty: "Real Estate",
    color: "bg-sky-500",
    glow: "rgba(14, 165, 233, 0.2)",
    recordLabel: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "ecommerce",
    name: "Priya",
    icon: <ShoppingBag className="w-5 h-5" />,
    role: "Support Hero",
    specialty: "E-Commerce",
    color: "bg-emerald-500",
    glow: "rgba(16, 185, 129, 0.2)",
    recordLabel: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "restaurant",
    name: "Vikram",
    icon: <Utensils className="w-5 h-5" />,
    role: "The Host",
    specialty: "Hospitality",
    color: "bg-amber-500",
    glow: "rgba(245, 158, 11, 0.2)",
    recordLabel: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

// ─── Components ───

const VinylRecord = ({ isPlaying }: { isPlaying: boolean, image: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const restingRotation = isMobile ? -25 : -45;

  return (
    <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] flex items-center justify-center group">
      <div className="absolute inset-0 bg-black/60 rounded-full blur-3xl scale-95 translate-y-10" />
      <div className="absolute inset-[-12px] rounded-full border-[1px] border-white/5 bg-black/40 shadow-inner" />

      <motion.div
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" } }}
        className="relative w-full h-full bg-[#080C14] rounded-full border-[8px] border-[#161B22] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ 
          backgroundImage: 'repeating-radial-gradient(circle at center, transparent 0, transparent 1px, #000 2px)',
          backgroundSize: '100% 100%'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 pointer-events-none" />
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white p-1.5 shadow-2xl overflow-hidden border-4 border-black/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 bg-[#0F172A] rounded-full border-[3px] border-white/10 shadow-inner" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={isPlaying ? { rotate: [-10, 10] } : { rotate: restingRotation }}
        transition={isPlaying 
          ? { rotate: { duration: 60, ease: "linear" } } 
          : { type: "spring", stiffness: 40, damping: 20 }
        }
        className="absolute -top-12 right-6 w-10 h-56 origin-top z-20 pointer-events-none"
      >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full shadow-lg border border-white/10" />
          <div className="w-2.5 h-full mx-auto bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 rounded-full shadow-md relative mt-4">
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-12 bg-slate-800 rounded-md shadow-2xl flex flex-col items-center justify-start py-2 border border-white/5">
                  <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
                  <div className="w-1 h-1 bg-white/40 absolute bottom-1 rounded-full blur-[1px]" />
              </div>
          </div>
      </motion.div>
    </div>
  );
};

export const AgentGramophone = () => {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const agent = AGENTS[currentAgentIndex];

  return (
    <section className="py-24 px-6 bg-[#FDFBF7] overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-[10px]">
              <Music className="w-3 h-3" /> Laboratory Dispatch v2.2
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
              Intelligence <span className="font-serif italic text-slate-400 font-medium">Station</span>.
            </h2>
          </div>
        </div>

        <div className="mb-10 relative flex justify-center">
          <div className="bg-[#E2E8F0] p-1.5 rounded-[32px] flex items-center gap-2 relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.1),0_1px_2px_rgba(255,255,255,1)]">
            {AGENTS.map((track, idx) => (
              <button
                key={track.id}
                onClick={() => {
                    setCurrentAgentIndex(idx);
                    setIsPlaying(false);
                }}
                className="relative w-16 h-16 flex items-center justify-center rounded-[24px] group z-10"
              >
                <div className="absolute inset-1 bg-black/5 rounded-[20px] shadow-inner opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className={cn(
                    "relative z-10 transition-all duration-300",
                    currentAgentIndex === idx ? "text-slate-900 scale-110" : "text-slate-400 group-hover:text-slate-600"
                )}>
                  {track.icon}
                </div>
                {currentAgentIndex === idx && (
                  <motion.div
                    layoutId="glass-selector"
                    className="absolute inset-0 z-20 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <LiquidGlassCard
                      className="w-full h-full bg-white/5 border border-white/40"
                      borderRadius="24px"
                      blurIntensity="xl"
                      shadowIntensity="md"
                      glowIntensity="sm"
                    >
                      <div className="w-full h-full" />
                    </LiquidGlassCard>
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#020617] rounded-[64px] p-5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.6)] border-[1px] border-slate-800/80 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch relative z-10">
            <div className="lg:col-span-5 bg-[#0F172A] rounded-[48px] p-12 flex flex-col relative overflow-hidden shadow-2xl border border-white/5">
              <div className="relative z-10 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                        <span className={cn("inline-block px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-lg", agent.color)}>
                        Active Payload
                        </span>
                        <div className="text-white/10 text-xl font-mono tracking-tighter italic">#{currentAgentIndex + 1}</div>
                    </div>
                    <h3 className="text-6xl font-bold tracking-tighter text-white leading-none">{agent.name}</h3>
                    <p className="text-2xl font-serif italic text-white/50 leading-snug max-w-[280px]">
                      "{agent.role} specializing in {agent.specialty}."
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-12 relative z-10">
                <div className="bg-black/80 backdrop-blur-3xl rounded-[36px] p-4 border border-white/10 flex items-center justify-between gap-4 shadow-[inset_0_2px_20px_rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-3xl bg-white text-black flex items-center justify-center hover:bg-slate-200 transition-all active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowCallPopup(true)}
                    className={cn(
                        "flex items-center justify-center md:justify-start gap-3 px-4 md:px-8 h-16 text-white rounded-3xl font-bold text-base transition-all shadow-xl group",
                        agent.id === 'taxi' ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20' : 
                        agent.id === 'realestate' ? 'bg-sky-500 hover:bg-sky-600 shadow-sky-500/20' :
                        agent.id === 'ecommerce' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20' :
                        'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20'
                    )}
                  >
                    <Phone className="w-5 h-5 fill-current group-hover:animate-bounce" />
                    <span className="hidden md:inline">Initiate Call</span>
                  </button>
                </div>
              </div>
              <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[120px] transition-colors duration-1000 opacity-20" style={{ backgroundColor: agent.glow }} />
            </div>

            <div className="lg:col-span-7 bg-[#05080F] rounded-[48px] flex items-center justify-center p-12 border border-white/5 shadow-inner relative group min-h-[480px]">
                <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-emerald-500/40 blur-[4px] animate-pulse" />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={agent.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                    >
                        <VinylRecord isPlaying={isPlaying} image={agent.recordLabel} />
                    </motion.div>
                </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showCallPopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl" onClick={() => setShowCallPopup(false)} />
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="relative w-full max-w-lg">
                <LiquidGlassCard className="w-full bg-white/60 p-12 border border-white" borderRadius="48px" blurIntensity="xl" shadowIntensity="lg" glowIntensity="md">
                    <button onClick={() => setShowCallPopup(false)} className="absolute top-8 right-8 p-3 rounded-full hover:bg-black/5 transition-colors"><X className="w-6 h-6" /></button>
                    <div className="flex flex-col items-center text-center space-y-8">
                        <div className="w-20 h-20 rounded-[32px] bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-inner"><Mic2 className="w-10 h-10" /></div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold tracking-tight text-slate-900">Establish Connection</h3>
                            <p className="text-base text-slate-500 font-serif italic max-w-[280px] mx-auto">You are about to speak with {agent.name}, {agent.role}.</p>
                        </div>
                        <div className="w-full space-y-4">
                            <input type="tel" placeholder="+91 00000 00000" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full px-8 py-6 rounded-2xl bg-white/40 border-2 border-slate-200 focus:border-emerald-500 outline-none font-bold text-xl transition-all text-center shadow-inner" />
                            <button className="w-full py-6 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 shadow-2xl">Initiate Protocol <ChevronRight className="w-5 h-5" /></button>
                        </div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.3em]">Signal Encrypted • Monade Network</p>
                    </div>
                </LiquidGlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AgentGramophone;
