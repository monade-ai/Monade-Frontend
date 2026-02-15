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
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: 'inbound',
    sector: '',
    otherSector: '',
    volume: 5000
  });

  const handleSectorSelect = (id: string) => {
    setFormData({ ...formData, sector: id });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Calendly or handle submission
    window.open('https://calendly.com/monade-ai/demo', '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center px-6 antialiased">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.95, y: 20 }} 
            className="relative w-full max-w-xl bg-[#FDFBF7] rounded-[32px] border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            {/* Close handle */}
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-slate-400 hover:text-black transition-all z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <form onSubmit={handleSubmit} className="p-10 lg:p-12 space-y-10">
              {/* Header */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">
                  <Calendar className="w-3 h-3" /> Booking_Station_v4
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">Request a Demonstration</h3>
                <p className="text-sm text-slate-500 font-serif italic">"Calibrate your intelligence loadout with our engineering team."</p>
              </div>

              {/* ─── Grid: Core Identity ─── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl bg-white border border-black/5 focus:border-black/20 outline-none text-sm transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl bg-white border border-black/5 focus:border-black/20 outline-none text-sm transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Optional Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email (Optional)</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl bg-white border border-black/5 focus:border-black/20 outline-none text-sm transition-all shadow-sm"
                />
              </div>

              {/* ─── Call Type Toggle (Machined Switch) ─── */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Inbound / Outbound Protocol</label>
                <div className="bg-slate-100 p-1 rounded-2xl flex gap-1 border border-black/5">
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, type: 'inbound'})}
                    className={cn(
                      "flex-1 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                      formData.type === 'inbound' ? "bg-white shadow-md text-black" : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <PhoneIncoming className="w-3.5 h-3.5" /> Inbound
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, type: 'outbound'})}
                    className={cn(
                      "flex-1 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                      formData.type === 'outbound' ? "bg-white shadow-md text-black" : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <PhoneOutgoing className="w-3.5 h-3.5" /> Outbound
                  </button>
                </div>
              </div>

              {/* ─── Sector Selection (Industrial Grid) ─── */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Industry Sector</label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                  {SECTORS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleSectorSelect(s.id)}
                      className={cn(
                        "aspect-square rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all group",
                        formData.sector === s.id 
                          ? "bg-black border-black text-white shadow-lg" 
                          : "bg-white border-black/5 text-slate-400 hover:border-black/20 hover:text-black"
                      )}
                    >
                      <s.icon className="w-5 h-5 stroke-[1.5px]" />
                      <span className="text-[8px] font-bold uppercase tracking-tighter opacity-60">{s.label.split(' ')[0]}</span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleSectorSelect('other')}
                    className={cn(
                      "aspect-square rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all",
                      formData.sector === 'other' 
                        ? "bg-[#D94126] border-[#D94126] text-white shadow-lg" 
                        : "bg-white border-black/5 text-slate-400 hover:border-black/20 hover:text-black"
                    )}
                  >
                    <Plus className="w-5 h-5 stroke-[1.5px]" />
                    <span className="text-[8px] font-bold uppercase tracking-tighter opacity-60">Other</span>
                  </button>
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
                        placeholder="Please specify sector"
                        value={formData.otherSector}
                        onChange={(e) => setFormData({...formData, otherSector: e.target.value})}
                        className="w-full px-5 py-3 mt-2 rounded-xl bg-white border border-black/10 outline-none text-sm font-serif italic"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ─── Call Volume (Machined Fader) ─── */}
              <div className="space-y-6 pt-4 border-t border-black/5">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Monthly Call Minutes</label>
                  <span className="text-3xl font-mono font-bold tracking-tighter text-[#D94126]">
                    {formData.volume.toLocaleString()}
                  </span>
                </div>
                <div className="relative h-10 flex items-center">
                  <div className="absolute inset-x-0 h-0.5 bg-black/5 rounded-full" />
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="500"
                    value={formData.volume}
                    onChange={(e) => setFormData({...formData, volume: parseInt(e.target.value)})}
                    className="absolute inset-x-0 z-30 opacity-0 cursor-pointer h-full w-full"
                  />
                  <motion.div 
                    animate={{ left: `${(formData.volume - 1000) / 49000 * 100}%` }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
                  >
                    <div className="w-8 h-8 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#D94126] rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Submit (Action Resolution) */}
              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-black text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#D94126] transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                Continue to Scheduler <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">
                Privacy First • No Credit Card Required
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookDemoDialog;
