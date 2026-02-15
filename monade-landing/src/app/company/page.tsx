'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Shield, Activity, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/sections/FooterCTA';
import { cn } from '@/lib/utils';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans antialiased">
      <Navbar variant="transparent" />

      <main className="pt-48 pb-32">
        {/* Header: The Manifest */}
        <section className="max-w-5xl mx-auto px-6 mb-40">
          <div className="space-y-12">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Company_Manifesto_v1.0</span>
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-black">
                The <br />
                <span className="font-serif italic text-slate-300 font-light lowercase">soul.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-slate-400 max-w-3xl leading-tight font-medium italic font-serif mt-12">
                "We aren't building a chat bot. We are building the foundational infrastructure for the next century of high-fidelity human-machine connection."
            </p>
          </div>
        </section>

        {/* The Monolith: Core Pillars */}
        <section className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-56">
          <div className="bg-[#020617] rounded-[48px] p-16 text-white flex flex-col justify-between min-h-[600px] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-10"><Globe className="w-48 h-48" /></div>
            <div className="space-y-8 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The_Mission</span>
                <h3 className="text-5xl font-bold tracking-tighter leading-none uppercase">Democratizing <br />Intelligence.</h3>
                <p className="text-xl text-white/40 leading-relaxed font-medium max-w-md">
                    We believe that world-class generative audio shouldn't be a privilege of the 1%. We are building the tools to let every industry vertical automate empathy and conversion at scale.
                </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Operational Globally
            </div>
          </div>

          <div className="bg-white rounded-[48px] p-16 text-black flex flex-col justify-between min-h-[600px] border border-slate-100 shadow-xl">
            <div className="space-y-8">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">The_Ethics</span>
                <h3 className="text-5xl font-bold tracking-tighter leading-none uppercase">Truth Over <br />Tricks.</h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium italic font-serif max-w-md">
                    "Artificial intelligence doesn't have to be artificial. We value genuine connection over faked emotion. If our agent doesn't add value, it shouldn't exist."
                </p>
            </div>
            <div className="pt-12 border-t border-slate-50 flex flex-wrap gap-4">
                {["DPDP Act Compliant", "Privacy First", "Hinglish Optimized"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400">{tag}</span>
                ))}
            </div>
          </div>
        </section>

        {/* Team: The Engineering Board */}
        <section className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-24 border-b border-black/10 pb-8">
            <h2 className="text-5xl font-bold tracking-tight uppercase">The_Founders</h2>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest pb-2">Active_Nodes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {[
                { name: "Amol Erickson", role: "Founding Engineer", focus: "Low-Latency V2V Architecture" },
                { name: "Monade Team", role: "Design & Product", focus: "Industrial Skeuomorphism & UX" }
            ].map((member, i) => (
                <div key={member.name} className="space-y-6 group">
                    <div className="aspect-[4/5] bg-slate-100 rounded-[40px] overflow-hidden relative border border-slate-200 shadow-inner">
                        {/* Placeholder for real photos */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                            <Sparkles className="w-32 h-32" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold tracking-tight text-black uppercase">{member.name}</h4>
                        <div className="flex flex-col gap-1 mt-2">
                            <span className="text-sm font-bold text-[#D94126] uppercase tracking-widest">{member.role}</span>
                            <span className="text-xs font-medium text-slate-400 font-serif italic">{member.focus}</span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}
