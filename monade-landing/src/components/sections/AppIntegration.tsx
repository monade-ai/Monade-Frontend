'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Bot, Zap, Plug
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";

export const AppIntegration = () => {
  return (
    <section className="relative bg-[#020617] py-32 lg:py-48 overflow-hidden rounded-[64px] mx-6 my-12 min-h-[800px] flex items-center">

      {/* Subtle radial glow behind phone */}
      <div className="absolute top-1/2 right-[18%] -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[300px] h-[300px] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

      {/* ─── Background Art: The Claw (Subtle Watermark) ─── */}
      <div className="absolute left-[-10%] bottom-[-15%] w-full max-w-4xl aspect-video pointer-events-none opacity-[0.08] -rotate-12">
        <Image 
          src="/claw_art.png" 
          alt="Claw Art" 
          fill 
          className="object-contain"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-24 w-full relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* ─── Left: Copy ─── */}
          <div className="flex flex-col items-start text-left">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex gap-2 mb-10 flex-wrap"
            >
              {[
                { icon: <Plug className="w-3 h-3" />, label: "Open Claw" },
                { icon: <Zap className="w-3 h-3" />, label: "Plugin" },
                { icon: <Bot className="w-3 h-3" />, label: "24/7 Sales Expert" }
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/50 backdrop-blur-md">
                  {b.icon} {b.label}
                </div>
              ))}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[0.95]"
            >
              Give your Open Claw agent<br />
              <span className="text-white/40 italic font-serif">a sales expert brain</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium"
            >
              Connect Monade to your Open Claw agent via a single plugin. It gets a sales expert that&apos;s always on — setting up inbound scripts, running outbound campaigns, accessing webhooks, analysing responses, and iterating on what converts. No sales team required.
            </motion.p>

            <Link href="/open-claw">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm shadow-2xl hover:bg-slate-100 transition-all"
              >
                Explore Open Claw
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* ─── Right: Phone Mockup ─── */}
          <div className="relative flex justify-center lg:justify-end scale-90 md:scale-100">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <PhoneMockup />

              {/* Optional: Add a "Plugin" connector visual here if needed? 
                  Keeping it simple for now as per design 
              */}
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AppIntegration;
