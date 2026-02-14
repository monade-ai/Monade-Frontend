'use client';

import React from "react";
import { motion } from "framer-motion";
import { Building2, Heart, GraduationCap } from "lucide-react";

export const Verticals = () => {
  return (
    <section className="py-32 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Verticals We've Solved</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Every industry has invisible complexity. We've mapped it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="w-7 h-7" />,
              vertical: "Real Estate",
              location: "Mumbai Brokers",
              challenge: "8-second spam gate + family decision dynamics + site visit booking friction",
              approach: "Permission-based opening. Family walkthrough offers. Loss framing on inventory. Respectful register with 'ji' honorifics.",
              principles: ["Permission Before Pitch", "Family Decisions Are Real", "Loss Frame First"],
              metric: "3x",
              metricLabel: "Booking Rate Improvement",
              insight: "'Ji' honorific in first 30s = +40% trust score"
            },
            {
              icon: <Heart className="w-7 h-7" />,
              vertical: "Healthcare",
              location: "IVF Clinics",
              challenge: "High-sensitivity topic. After-hours calls going to voicemail = lost patients worth ₹3L+.",
              approach: "Warm, empathetic persona. No medical advice. EMI framing before total cost. Family welcome for consultations.",
              principles: ["Autonomy Preservation", "EMI Before Total Cost", "Family Decision Embrace"],
              metric: "+35%",
              metricLabel: "Appointment Booking Rate",
              insight: "100% after-hours capture (vs 0% before)"
            },
            {
              icon: <GraduationCap className="w-7 h-7" />,
              vertical: "EdTech",
              location: "Career Coaching",
              challenge: "High competition. Parents involved in decisions. ROI skepticism from students.",
              approach: "Social proof anchoring with local alumni data. Parental inclusivity. Micro-commitments before enrollment ask.",
              principles: ["Anchor Early", "Micro-Commitments", "Inoculate Before Pitch"],
              metric: "2.5x",
              metricLabel: "Conversion Rate Increase",
              insight: "Enrollment cycle: 14 days → 6 days"
            },
          ].map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {study.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{study.vertical}</h4>
                  <span className="text-xs text-slate-400 font-medium">{study.location}</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Challenge</span>
                  <p className="text-sm text-slate-600 mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Script Approach</span>
                  <p className="text-sm text-slate-600 mt-1">{study.approach}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.principles.map((p, j) => (
                    <span key={j} className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full">{p}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-mono font-bold text-primary">{study.metric}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase mb-1">{study.metricLabel}</span>
                </div>
                <p className="text-xs text-slate-500 italic mt-2">Key insight: {study.insight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
