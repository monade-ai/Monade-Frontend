'use client';

import React from "react";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Knowledge",
      desc: "Ingest your raw data. Google Sheets, Notion, or documentation. The foundation of context."
    },
    {
      number: "02",
      title: "Synthesis",
      desc: "Our engine architecturally maps your script. 18 principles of persuasion applied instantly."
    },
    {
      number: "03",
      title: "Calibration",
      desc: "Review the logic. Adjust the tone. Ensure the cultural resonance is absolute."
    },
    {
      number: "04",
      title: "Deployment",
      desc: "Go live in sub-200ms. Real-time execution via LiveKit and Gemini 2.5."
    },
    {
      number: "05",
      title: "Evolution",
      desc: "The loop closes. Every call refines the next. A singular, self-optimizing system."
    }
  ];

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* The Manifest Header */}
        <div className="mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-6"
          >
            The Architecture of Conversion
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 max-w-4xl leading-[0.95]"
          >
            A singular, continuous <br /> 
            <span className="text-slate-300">loop of improvement.</span>
          </motion.h2>
        </div>

        {/* The Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-slate-100 border-y border-slate-100">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white py-16 pr-8 group hover:bg-slate-50/50 transition-colors duration-500"
            >
              <div className="space-y-12">
                {/* Precision Indicator */}
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono font-bold text-primary">{step.number}</span>
                  <div className="h-[1px] w-8 bg-slate-100 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold tracking-tight text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Implementation Time</span>
            <div className="text-4xl font-bold tracking-tighter text-slate-900">48 Hours.</div>
          </div>
          <p className="text-xs text-slate-400 max-w-xs text-right leading-relaxed">
            Eliminating the unnecessary. Focusing on the relationship between data and the outcome.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
