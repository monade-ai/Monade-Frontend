'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Sub-Components ───

const PrecisionToggle = ({ isExpanded }: { isExpanded: boolean }) => (
    <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
        <div className="absolute w-4 h-[1px] bg-black/20" />
        <motion.div 
            animate={{ rotate: isExpanded ? 90 : 0, opacity: isExpanded ? 0 : 1 }}
            className="absolute w-[1px] h-4 bg-black/20" 
        />
    </div>
);

export const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: "robotic",
      q: "Will it sound robotic?",
      a: "Most voice AI does because it ignores how humans actually talk. Our models handle latency with varied fillers and interruption protocols. We design for AI constraints, not around them. If it sounds like an automated machine, we've failed."
    },
    {
      id: "chatgpt",
      q: "How is this different from generic LLMs?",
      a: "General-purpose models are built for text. Our agents are engineered for conversion: 8-stage architecture, 43:57 talk ratio enforcement, and behavioral science mechanics. It is the difference between a chat bot and a closer."
    },
    {
      id: "unknown",
      q: "What if the customer asks something outside the brain?",
      a: "We use a three-tier fallback: rephrasing for clarity, offering multiple choice to narrow intent, or a human callback within 2 hours. Every unknown question is flagged—next week's script will have the answer."
    },
    {
      id: "family",
      q: "How do you handle family consultation?",
      a: `In India, this is culturally normative. We embrace it. Our scripts offer comparison documents or weekend walkthroughs where the whole family can join. We don't fight the culture; we align with it.`
    },
    {
      id: "setup",
      q: "How long does setup take?",
      a: "48 to 72 hours for your first industry vertical. We ingest your data, generate the persuasion map, and perform tonal calibration before going live. Each additional vertical takes less than a day."
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden text-ink hairline-t">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="machine-label text-ink/40 mb-5">07 — Questions</div>
          <h2 className="font-display text-5xl md:text-7xl text-ink leading-[1.02]">
            Asked, <span className="serif-accent text-clay">answered.</span>
          </h2>
        </div>

        {/* ─── The Compact Accordion ─── */}
        <div className="flex flex-col border-t border-black/10">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={cn(
                "group border-b border-black/10 transition-all duration-700",
                expandedFaq === faq.id ? "bg-white shadow-sm" : "bg-transparent hover:bg-black/[0.01]"
              )}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full py-8 flex items-center justify-between text-left px-4 lg:px-8"
              >
                <span className={cn(
                    "font-semibold text-xl md:text-2xl tracking-tight transition-all duration-500 max-w-2xl leading-snug",
                    expandedFaq === faq.id ? "text-ink" : "text-ink/70 group-hover:text-ink"
                )}>
                    {faq.q}
                </span>
                <PrecisionToggle isExpanded={expandedFaq === faq.id} />
              </button>

              <AnimatePresence>
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-4 lg:px-8 pb-10">
                        <div className="h-px w-12 bg-[#D94126] mb-6" />
                        <p className="text-base md:text-lg text-ink/60 leading-relaxed max-w-3xl">
                            {faq.a}
                        </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
