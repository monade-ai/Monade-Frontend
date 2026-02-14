'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: "robotic",
      q: "Will it sound robotic?",
      a: "Most voice AI does — because it ignores how humans actually talk. Our scripts handle 400-1200ms latency with varied filler phrases, interruption protocols (stop → acknowledge → redirect), and tiered repair sequences. We design for AI constraints, not around them. Listen to a sample call. If it sounds like IVR, we're not doing our job."
    },
    {
      id: "chatgpt",
      q: "How is this different from ChatGPT + a phone number?",
      a: "ChatGPT is general-purpose conversation. Our scripts are engineered for conversion: 8-stage architecture, 43:57 talk ratio enforcement, adjacency pair design, Indian cultural compliance, and behavioral science mechanics. It's the difference between 'can talk' and 'actually books appointments.'"
    },
    {
      id: "unknown",
      q: "What if the customer asks something outside the knowledge base?",
      a: "Three-tier fallback: 1) Rephrase the question (maybe it was unclear), 2) Offer multiple choice (narrow down intent), 3) Offer human callback within 2 hours (preserve the lead). Plus: every unknown question gets flagged. Next week's script can answer it."
    },
    {
      id: "family",
      q: '"I need to discuss with my wife" — how do you handle that?',
      a: `We don't treat it as an objection. In India, family consultation is culturally normative. Our scripts embrace it: "Absolutely — this is a family decision. Would it help if I send a comparison document? Or schedule a weekend walkthrough where everyone can join?" Conversion rate after properly supported family consultation: 40-50%.`
    },
    {
      id: "setup",
      q: "How long does setup take?",
      a: "2-3 days for your first vertical. Day 1: Upload knowledge base. Day 1-2: We generate script using 18-principle framework. Day 2: You review and approve. Day 2-3: Technical integration. Day 3: Test calls → goes live. Each additional vertical: 1 day."
    },
  ];

  return (
    <section className="py-32 bg-slate-50 border-y border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Common Questions</h2>
          <p className="text-lg text-slate-500">Everything you need to know about the platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all hover:shadow-lg">
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg text-slate-900 pr-8 leading-snug">{faq.q}</span>
                <div className={cn("w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-colors shrink-0", expandedFaq === faq.id ? "bg-primary text-white" : "text-slate-400")}>
                  {expandedFaq === faq.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed text-base pt-0">
                      {faq.a}
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
