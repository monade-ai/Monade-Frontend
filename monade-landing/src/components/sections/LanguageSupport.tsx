'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Mic2, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const PRIMARY_LANGUAGES = [
  { name: "English", voices: 7, flag: "🇬🇧" },
  { name: "Hindi", voices: 24, flag: "🇮🇳" },
  { name: "Spanish", voices: 10, flag: "🇪🇸" },
  { name: "French", voices: 3, flag: "🇫🇷" },
  { name: "German", voices: 5, flag: "🇩🇪" },
  { name: "Japanese", voices: 9, flag: "🇯🇵" },
  { name: "Arabic", voices: 4, flag: "🇸🇦" },
  { name: "Portuguese", voices: 8, flag: "🇵🇹" },
  { name: "Russian", voices: 4, flag: "🇷🇺" },
  { name: "Italian", voices: 2, flag: "🇮🇹" },
  { name: "Korean", voices: 6, flag: "🇰🇷" },
  { name: "Chinese", voices: 12, flag: "🇨🇳" },
];

const SECONDARY_LANGUAGES = [
  { name: "Bengali", voices: 4, flag: "🇧🇩" },
  { name: "Marathi", voices: 6, flag: "🇮🇳" },
  { name: "Tamil", voices: 8, flag: "🇮🇳" },
  { name: "Telugu", voices: 5, flag: "🇮🇳" },
  { name: "Kannada", voices: 4, flag: "🇮🇳" },
  { name: "Malayalam", voices: 3, flag: "🇮🇳" },
  { name: "Gujarati", voices: 4, flag: "🇮🇳" },
  { name: "Urdu", voices: 3, flag: "🇵🇰" },
  { name: "Vietnamese", voices: 4, flag: "🇻🇳" },
  { name: "Swahili", voices: 2, flag: "🇰🇪" },
  { name: "Turkish", voices: 5, flag: "🇹🇷" },
  { name: "Dutch", voices: 4, flag: "🇳🇱" },
];

export const LanguageSupport = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header: Simplified and Direct */}
        <div className="max-w-7xl flex flex-col md:flex-row justify-between items-start mb-8 relative">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05] mb-6">
              Talk to anyone, anywhere.
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              We support Hindi, Marathi, Tamil, Bengali, Gujarati, Chinese, Swahili, and 24 other languages with 30 high-quality voices.
            </p>
          </div>

          {/* Country Balls visual asset */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative w-[450px] aspect-[3/2] -mr-12 -mt-10"
          >
            <Image
              src="/country balls.png"
              alt="Global coverage"
              fill
              className="object-contain opacity-90 grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Language Grid: Refined and Minimal */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12 transition-all duration-500">
          {PRIMARY_LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all group"
            >
              <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">{lang.flag}</div>
              <h4 className="font-bold text-slate-900 mb-1">{lang.name}</h4>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{lang.voices} voices</p>
            </motion.div>
          ))}

          <AnimatePresence>
            {showMore && SECONDARY_LANGUAGES.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all group"
              >
                <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">{lang.flag}</div>
                <h4 className="font-bold text-slate-900 mb-1">{lang.name}</h4>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{lang.voices} voices</p>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {!showMore && (
            <div 
              onClick={() => setShowMore(true)}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-slate-100 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                <Globe className="w-5 h-5 text-slate-400 group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-sm font-bold text-slate-900">+12 more</span>
            </div>
          )}

          {showMore && (
            <div 
              onClick={() => setShowMore(false)}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-900 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-black transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <X className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold text-white">Show less</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LanguageSupport;
