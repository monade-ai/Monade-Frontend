'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Heart, Rocket, Coffee, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/sections/FooterCTA';
import { cn } from '@/lib/utils';

const VALUES = [
  { 
    title: "Truth in every word", 
    desc: "We believe in voice AI that's honest. We don't try to trick people; we build tools that make human connection clearer and more effective.",
    icon: Heart 
  },
  { 
    title: "Work that moves fast", 
    desc: "The world changes quickly, and so do we. We value focus, speed, and the courage to ship something meaningful every single day.",
    icon: Rocket 
  },
  { 
    title: "Crafted with care", 
    desc: "We are designers and engineers who care about the details. From the first line of code to the final voice prompt, quality is our baseline.",
    icon: Sparkles 
  }
];

const ROLES = [
  { title: "Voice Research Engineer", team: "Engineering", location: "Remote / Bangalore" },
  { title: "Product Designer", team: "Design", location: "Remote / London" },
  { title: "Operations Lead", team: "Business", location: "Remote / Mumbai" }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-primary/10">
      <Navbar variant="light" />

      <main className="pt-56 pb-20">
        {/* Header: Human-centric and welcoming */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-6xl md:text-[80px] font-semibold tracking-tight leading-[1.05] text-slate-900">
                Help us build the <br />
                <span className="font-serif italic text-slate-400 font-medium">future of voice.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                We're a small, focused team building the next generation of voice intelligence. We value craft, clarity, and the people who make it happen.
            </p>
          </div>
        </section>

        {/* Our Values: Clean Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {VALUES.map((val) => (
              <div key={val.title} className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    <val.icon className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">{val.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">
                    {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions: Clean List */}
        <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-100">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Open roles</h2>
            <p className="text-base text-slate-500">We're always looking for talented people who care about their craft.</p>
          </div>

          <div className="space-y-3">
            {ROLES.map((role, i) => (
                <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer">
                    <div className="space-y-1">
                        <h4 className="text-xl font-bold text-slate-900">{role.title}</h4>
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            <span>{role.team}</span>
                            <div className="w-1 h-1 rounded-full bg-slate-200" />
                            <span>{role.location}</span>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                        Apply now <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            ))}
          </div>
        </section>

        {/* Culture Teaser */}
        <section className="max-w-xl mx-auto px-6 text-center mt-20">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
            <Coffee className="w-5 h-5 text-slate-400" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Not seeing a fit?</h3>
          <p className="text-base text-slate-500 mb-8 leading-relaxed">
            We are always happy to hear from interesting people. Tell us what you're working on and how you'd like to help.
          </p>
          <button className="text-slate-900 font-bold hover:opacity-70 transition-opacity flex items-center gap-2 mx-auto underline underline-offset-8">
            Send us a note
          </button>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}
