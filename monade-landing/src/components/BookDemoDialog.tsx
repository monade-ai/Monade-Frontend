'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, Building2, Heart, ShoppingBag, 
  Utensils, Car, Shield, Plus, PhoneIncoming, PhoneOutgoing,
  Calendar, Check
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { LiquidGlassCard } from "./LiquidGlassCard";

const SECTORS = [
  { id: 'realestate', label: 'Real Estate', icon: Building2 },
  { id: 'healthcare', label: 'Healthcare', icon: Heart },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'hospitality', label: 'Hospitality', icon: Utensils },
  { id: 'logistics', label: 'Logistics', icon: Car },
  { id: 'finance', label: 'Finance', icon: Shield },
];

export const BookDemoDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: 'inbound',
    sector: SECTORS[0].id,
    otherSector: '',
    volume: 10000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://calendly.com/monade-ai/demo', '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center px-6 antialiased pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md cursor-pointer" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.95, y: 20 }} 
            className="relative w-full max-w-xl bg-[#FDFBF7] rounded-[32px] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-slate-400 hover:text-black z-20 transition-all">
              <X className="w-4 h-4" />
            </button>

            <form onSubmit={handleSubmit} className="p-10 lg:p-12 space-y-10 text-slate-900">
              {/* Header */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D94126] mb-2">
                  <Calendar className="w-3 h-3" /> Book a Demo
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Request a call</h3>
                <p className="text-sm text-slate-500 font-serif italic">"We'll help you design and deploy your first high-fidelity agent."</p>
              </div>

              {/* ─── Grid: Core Identity ─── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
                  <input required type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-black/5 focus:border-black/20 outline-none text-sm transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email *</label>
                  <input required type="email" placeholder="name@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-black/5 focus:border-black/20 outline-none text-sm transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company</label>
                <input required type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-black/5 focus:border-black/20 outline-none text-sm transition-all" />
              </div>

              {/* ─── Protocol Toggle ─── */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Call Type</label>
                <div className="bg-slate-100 p-1 rounded-2xl flex gap-1 border border-black/5 shadow-inner">
                  <button type="button" onClick={() => setFormData({...formData, type: 'inbound'})}
                    className={cn("flex-1 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                      formData.type === 'inbound' ? "bg-white shadow-md text-black" : "text-slate-400 hover:text-slate-600"
                    )}>
                    <PhoneIncoming className="w-3.5 h-3.5" /> Inbound
                  </button>
                  <button type="button" onClick={() => setFormData({...formData, type: 'outbound'})}
                    className={cn("flex-1 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                      formData.type === 'outbound' ? "bg-white shadow-md text-black" : "text-slate-400 hover:text-slate-600"
                    )}>
                    <PhoneOutgoing className="w-3.5 h-3.5" /> Outbound
                  </button>
                </div>
              </div>

              {/* ─── Industry Selector ─── */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Select your sector</label>
                <div className="relative flex justify-center bg-slate-100/50 p-1.5 rounded-[24px] border border-black/5">
                    {SECTORS.map((track) => (
                        <div key={track.id} className="relative group/sector flex-1">
                            {/* Short Label Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#0F172A] text-white text-[8px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover/sector:opacity-100 transition-all pointer-events-none z-[100] whitespace-nowrap">
                                {track.label}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-[#0F172A]" />
                            </div>

                            <button type="button" onClick={() => setFormData({...formData, sector: track.id})}
                                className="relative w-full py-3 flex items-center justify-center rounded-[18px] z-10 transition-all"
                            >
                                <div className={cn("transition-colors duration-300", formData.sector === track.id ? "text-slate-900" : "text-slate-400")}>
                                    <track.icon className="w-5 h-5 stroke-[1.5px]" />
                                </div>
                                
                                {formData.sector === track.id && (
                                    <motion.div layoutId="modal-glass-selector" className="absolute inset-0 z-[-1] pointer-events-none"
                                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                    >
                                        <LiquidGlassCard className="w-full h-full bg-white/5 border border-white/60" borderRadius="18px" blurIntensity="xl" shadowIntensity="md" glowIntensity="none">
                                            <div className="w-full h-full" />
                                        </LiquidGlassCard>
                                    </motion.div>
                                )}
                            </button>
                        </div>
                    ))}
                    {/* Other Option */}
                    <div className="relative group/sector flex-1">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#0F172A] text-white text-[8px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover/sector:opacity-100 transition-all pointer-events-none z-[100] whitespace-nowrap">
                            Other Sector
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-[#0F172A]" />
                        </div>
                        <button type="button" onClick={() => setFormData({...formData, sector: 'other'})}
                            className="relative w-full py-3 flex items-center justify-center rounded-[18px] z-10 transition-all"
                        >
                            <div className={cn("transition-colors duration-300", formData.sector === 'other' ? "text-[#D94126]" : "text-slate-400")}>
                                <Plus className="w-5 h-5 stroke-[1.5px]" />
                            </div>
                            {formData.sector === 'other' && (
                                <motion.div layoutId="modal-glass-selector" className="absolute inset-0 z-[-1] pointer-events-none"
                                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                >
                                    <LiquidGlassCard className="w-full h-full bg-white/5 border border-[#D94126]/40" borderRadius="18px" blurIntensity="xl" shadowIntensity="md" glowIntensity="none">
                                        <div className="w-full h-full" />
                                    </LiquidGlassCard>
                                </motion.div>
                            )}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                  {formData.sector === 'other' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <input 
                        required
                        type="text" 
                        placeholder="Please specify your sector"
                        value={formData.otherSector}
                        onChange={(e) => setFormData({...formData, otherSector: e.target.value})}
                        className="w-full px-5 py-3 rounded-xl bg-white border border-black/10 outline-none text-sm font-serif italic focus:border-[#D94126]/40 transition-all shadow-inner"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ─── Volume Fader ─── */}
              <div className="space-y-6 pt-4 border-t border-black/5">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Monthly Minutes</label>
                  <span className="text-3xl font-mono font-bold tracking-tighter text-[#D94126] leading-none">
                    {formData.volume.toLocaleString()}
                  </span>
                </div>
                <div className="relative h-10 flex items-center">
                  <div className="absolute inset-x-0 h-[1px] bg-black/10 rounded-full" />
                  <input type="range" min="1000" max="100000" step="1000" value={formData.volume} onChange={(e) => setFormData({...formData, volume: parseInt(e.target.value)})}
                    className="absolute inset-x-0 z-30 opacity-0 cursor-pointer h-full w-full" />
                  <motion.div animate={{ left: `${(formData.volume - 1000) / 99000 * 100}%` }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
                  >
                    <div className="w-8 h-8 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#D94126] rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="w-full py-5 rounded-2xl bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-[#D94126] transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 group">
                Continue to Scheduler <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                Privacy Protected • Secure Connection
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookDemoDialog;
