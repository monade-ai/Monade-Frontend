'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Pause, SkipBack, SkipForward, Phone, 
  X, ChevronRight, Music, Mic2 
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types & Mock Data ───
const AGENTS = [
  {
    id: "ravi",
    name: "Ravi",
    role: "Night Dispatcher",
    specialty: "Logistics & Hinglish",
    color: "bg-rose-500",
    recordLabel: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "ananya",
    name: "Ananya",
    role: "Luxury Consultant",
    specialty: "Real Estate & Qualification",
    color: "bg-sky-500",
    recordLabel: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

// ─── Components ───

const VinylRecord = ({ isPlaying, image }: { isPlaying: boolean, image: string }) => (
  <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] flex items-center justify-center group">
    {/* The Record Shadow */}
    <div className="absolute inset-0 bg-black/40 rounded-full blur-3xl scale-90 translate-y-8" />
    
    {/* The Vinyl Body */}
    <motion.div
      animate={{ rotate: isPlaying ? 360 : 0 }}
      transition={{ 
        rotate: { 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        } 
      }}
      className="relative w-full h-full bg-[#0F172A] rounded-full border-[10px] border-[#1E293B] shadow-2xl flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: 'repeating-radial-gradient(circle at center, transparent 0, transparent 2px, #000 3px)',
        backgroundSize: '100% 100%'
      }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
      <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-white p-1 shadow-inner overflow-hidden border-8 border-black/20">
        <img src={image} alt="Agent" className="w-full h-full object-cover rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-[#0F172A] rounded-full border-2 border-white/20" />
        </div>
      </div>
    </motion.div>

    {/* The Tonearm */}
    <motion.div
      initial={{ rotate: -45 }}
      animate={isPlaying ? { rotate: [-10, 10] } : { rotate: -45 }}
      transition={isPlaying 
        ? { rotate: { duration: 60, ease: "linear" } } 
        : { type: "spring", stiffness: 40, damping: 20 }
      }
      className="absolute -top-10 right-4 w-10 h-56 origin-top z-20 pointer-events-none"
    >
      <div className="w-3 h-full bg-gradient-to-b from-slate-300 to-slate-500 rounded-full shadow-lg relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-slate-600 rounded-lg shadow-xl flex items-center justify-center">
          <div className="w-0.5 h-6 bg-slate-400 rounded-full" />
        </div>
      </div>
    </motion.div>
  </div>
);

export const AgentGramophone = () => {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const agent = AGENTS[currentAgentIndex];

  const handleNext = () => {
    setCurrentAgentIndex((prev) => (prev + 1) % AGENTS.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentAgentIndex((prev) => (prev - 1 + AGENTS.length) % AGENTS.length);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 px-6 bg-[#FDFBF7] overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-[10px]">
              <Music className="w-3 h-3" /> Monade Lab v2.0
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
              Agent <span className="font-serif italic text-slate-400 font-medium">Listening</span> Station.
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-medium font-serif italic max-w-xs md:text-right">
            Test our models in real-time or simulate a live production call.
          </p>
        </div>

        <div className="bg-[#020617] rounded-[56px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Left: Agent Info & Premium Controls */}
            <div className="lg:col-span-5 bg-[#0F172A] rounded-[42px] p-10 flex flex-col relative overflow-hidden">
              <div className="relative z-10 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <span className={cn("inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white", agent.color)}>
                      Active Agent
                    </span>
                    <h3 className="text-5xl font-bold tracking-tighter text-white">{agent.name}</h3>
                    <p className="text-xl font-serif italic text-white/50 leading-snug">
                      "{agent.role} specializing in {agent.specialty}."
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* High-End Control Panel */}
              <div className="mt-10 relative z-10">
                <div className="bg-black/40 backdrop-blur-xl rounded-[32px] p-3 border border-white/5 flex items-center justify-between gap-3 shadow-inner">
                  <div className="flex items-center gap-2">
                    <button onClick={handlePrev} className="p-3 rounded-2xl hover:bg-white/5 transition-colors text-white/30 hover:text-white">
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all active:scale-95 shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                    </button>
                    <button onClick={handleNext} className="p-3 rounded-2xl hover:bg-white/5 transition-colors text-white/30 hover:text-white">
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  <button 
                    onClick={() => setShowCallPopup(true)}
                    className="flex items-center gap-2 px-6 h-14 bg-emerald-500 text-white rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/10 group"
                  >
                    <Phone className="w-4 h-4 fill-current group-hover:scale-110" />
                    <span>Live Call</span>
                  </button>
                </div>
              </div>

              {/* Decorative accent */}
              <div className={cn("absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[100px] opacity-10 transition-colors duration-1000", agent.color)} />
            </div>

            {/* Right: The Gramophone Chassis */}
            <div className="lg:col-span-7 bg-black/20 rounded-[42px] flex items-center justify-center p-8 border border-white/5 overflow-hidden">
              <VinylRecord isPlaying={isPlaying} image={agent.recordLabel} />
            </div>

          </div>
        </div>
      </div>

      {/* ─── Call Popup Overlay ─── */}
      <AnimatePresence>
        {showCallPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setShowCallPopup(false)} />
            
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden p-10"
            >
              <button onClick={() => setShowCallPopup(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-[24px] bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Mic2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight">Connect with {agent.name}</h3>
                  <p className="text-sm text-slate-500 font-serif italic">
                    Demonstrating {agent.specialty}.
                  </p>
                </div>

                <div className="w-full space-y-3">
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl bg-slate-100 border-2 border-transparent focus:border-emerald-500 outline-none font-bold text-base transition-all text-center"
                  />
                  <button className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-base hover:bg-emerald-500 transition-all flex items-center justify-center gap-2">
                    Start Call <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[9px] uppercase font-bold text-slate-300 tracking-[0.2em]">
                  End-to-End Encryption Enabled
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AgentGramophone;
