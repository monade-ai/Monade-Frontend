'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { StaticMeshGradient } from '@paper-design/shaders-react';
import {
  ArrowRight, Zap, ShieldCheck, Activity, Database, RefreshCcw,
  Globe, DollarSign, Brain, ChevronDown, ChevronUp,
  Upload, FileCode, Eye, Rocket, TrendingUp,
  Building2, Heart, GraduationCap, Phone, MessageSquare, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ModelIdentityCard } from "@/components/ModelIdentityCard";

const shaderConfigs = [
  {
    colors: ["#FF4D00", "#000000", "#1A1A1A", "#FF5C00"],
    waveX: 0.18,
    rotation: 245
  },
  {
    colors: ["#F5D916", "#FFFFFF", "#F8FAFC", "#E2E8F0"],
    waveX: 0.20,
    rotation: 280
  }
];

const LiveScriptEvolution = () => (
  <div className="space-y-4">
    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
      <div className="flex items-center gap-2 mb-2">
        <Database className="w-3 h-3 text-intellect" />
        <span className="text-[10px] font-mono text-white/40 uppercase">Knowledge Base Input</span>
      </div>
      <p className="text-xs text-white/70 italic">"Our shipping takes 3-5 days. Refund policy is 30 days. EMI available on orders above ₹10,000..."</p>
    </div>
    <div className="flex justify-center">
      <RefreshCcw className="w-4 h-4 text-primary animate-spin-slow" />
    </div>
    <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <Zap className="w-3 h-3 text-primary" />
        <span className="text-[10px] font-mono text-primary uppercase">Finetuned Script v3.1</span>
      </div>
      <p className="text-xs text-white font-medium">"Bilkul, I can help with that. Since delivery takes 3-5 days, aapko Friday tak mil jayega. EMI option bhi available hai — shall I walk you through it?"</p>
      <div className="absolute top-0 right-0 p-2">
        <span className="text-[8px] font-bold text-primary bg-primary/20 px-1.5 py-0.5 rounded">Self-Improving · Hinglish</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary font-sans antialiased text-slate-900">
      <Navbar variant="transparent" />

      <main>
        {/* ═══════════════════════════════════════════════════════════════════
            HERO: The Conversation Science Opener
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">No Platform Fee · Pay Per Second</span>
                </div>
                <h1 className="text-6xl md:text-[84px] font-bold tracking-tighter leading-[0.9] text-slate-900">
                  Most voice AI gets hung up on. <br />
                  <span className="text-slate-400">Ours converts.</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
                  We researched why humans actually say yes on phone calls — then built the platform that implements it. Upload your knowledge base. We generate scripts with built-in conversation science, Indian cultural protocols, and sales psychology. They improve after every call.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Build Your First Agent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="text-sm font-bold">Works with</span>
                  <div className="flex gap-3">
                    <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Zoho</span>
                    <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Notion</span>
                    <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Odoo</span>
                    <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Sheets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Evidence: The Iterative Engine */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full bg-[#0A0A0A] rounded-[48px] overflow-hidden border border-slate-200/10 shadow-3xl">
                <div className="absolute inset-0 opacity-40">
                  <StaticMeshGradient
                    width={800}
                    height={1000}
                    colors={["#FF4D00", "#000000", "#1A1A1A", "#0F172A"]}
                    positions={42}
                    mixing={0.4}
                    waveX={0.3}
                    scale={0.8}
                    rotation={245}
                  />
                </div>
                <div className="relative z-10 p-10 h-full flex flex-col justify-center">
                  <LiveScriptEvolution />
                  <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono text-white/30 uppercase block mb-1">Billing Model</span>
                      <span className="text-lg font-bold text-white">₹0 Platform Fee</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-white/30 uppercase block mb-1">Call Brief</span>
                      <span className="text-lg font-bold text-intellect">AI-Analyzed in &lt;60s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            BENTO GRID: Conversation Science Evidence
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 pb-24">

          {/* Card 1: The 8-Second Problem (Wide) */}
          <div className="md:col-span-8 bg-slate-50 rounded-[40px] p-12 border border-slate-100 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10 max-w-lg">
              <ShieldCheck className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">You have 8 seconds before they hang up.</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Indian customers get 30+ spam calls a week. Unknown numbers trigger Truecaller instincts. Generic voice AI fails this gate — it pitches before asking permission and uses the wrong register.
              </p>
              <p className="text-slate-700 leading-relaxed text-base font-semibold mt-4">
                Our scripts pass it every time: Identity + Context + Permission in the first 8 seconds.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Phone className="w-40 h-40" />
            </div>
          </div>

          {/* Card 2: Pay for Outcomes (Narrow, Dark) */}
          <div className="md:col-span-4 bg-slate-900 rounded-[40px] p-12 text-white flex flex-col justify-between">
            <DollarSign className="w-8 h-8 text-intellect mb-6" />
            <div>
              <h3 className="text-3xl font-bold mb-4">₹0 platform fee. Per-second billing.</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No monthly subscription. No seat licenses. No setup costs. Pay only for seconds your customers actually speak. If it doesn't convert, you pay almost nothing.
              </p>
            </div>
          </div>

          {/* Card 3: 43:57 Talk Ratio */}
          <div className="md:col-span-6 bg-slate-50 rounded-[40px] p-12 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <Activity className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">When AI talks too much, prospects don't buy.</h3>
              <p className="text-slate-500 leading-relaxed text-base font-medium">
                Gong.io analyzed millions of sales calls. When the seller talks more than 43% of the conversation, deals die. Most voice AI scripts monologue at 70-80%.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm font-semibold mt-4">
                Our architecture enforces 43:57 through designed questions, micro-grounding checks, and natural turn-yielding cues.
              </p>
            </div>
            {/* Visual: Talk ratio bars */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-slate-400 w-20 uppercase">Generic AI</span>
                <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-red-400/60 rounded-full" />
                </div>
                <span className="text-[10px] font-mono text-red-400 font-bold">78/22</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-slate-400 w-20 uppercase">Monade</span>
                <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[43%] bg-primary rounded-full" />
                </div>
                <span className="text-[10px] font-mono text-primary font-bold">43/57</span>
              </div>
            </div>
          </div>

          {/* Card 4: Built for India */}
          <div className="md:col-span-6 bg-slate-50 rounded-[40px] p-12 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <Globe className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Built for India — not translated from the West.</h3>
              <p className="text-slate-500 leading-relaxed text-base font-medium mb-4">
                Western scripts fail here. They don't know when to say "aap" vs "tum." They treat family consultation as an objection, not a legitimate next step.
              </p>
              <div className="space-y-2">
                {[
                  "Respectful register by default (honorific protocols)",
                  "Strategic Hindi-English code-switching",
                  "Family walkthrough offers, not objection handling",
                  "Monthly EMI framing before total cost",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: AI Latency Design (Wide) */}
          <div className="md:col-span-8 bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden group">
            <div className="relative z-10 max-w-lg">
              <Zap className="w-8 h-8 text-intellect mb-6" />
              <h3 className="text-3xl font-bold mb-4">Voice AI has 400-1200ms latency. We design for it.</h3>
              <p className="text-slate-400 leading-relaxed text-base font-medium">
                Generic scripts sound robotic because they pretend latency doesn't exist. Awkward pauses. Repeated fillers. Can't handle interruptions.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "5+ varied filler phrases per stage",
                  "Interruption protocol (stop → ack → redirect)",
                  "Tiered repair sequences for misunderstanding",
                  "Reconnection protocols for silence gaps",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <Zap className="w-3 h-3 text-intellect mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 6: Scripts That Learn (Narrow) */}
          <div className="md:col-span-4 bg-slate-50 rounded-[40px] p-12 border border-slate-100 flex flex-col justify-between">
            <RefreshCcw className="w-8 h-8 text-primary mb-6" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Week 1 script ≠ Week 12 script.</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every call generates transcript analysis, objection patterns, drop-off points, and cultural fit scoring. We refine your script weekly based on what actually converts in your vertical.
              </p>
            </div>
          </div>

          {/* Model Identity Cards */}
          <div className="md:col-span-6">
            <ModelIdentityCard
              name="Monade Voice Engine"
              provider="Proprietary"
              type="Self-Improving Script"
              context="Hindi · English · Hinglish"
              pricing="Pay Per Second"
              shaderConfig={shaderConfigs[0]}
            />
          </div>
          <div className="md:col-span-6">
            <ModelIdentityCard
              name="Call Intelligence"
              provider="Real-Time Analysis"
              type="CRM-Synced Insights"
              context="Instant Post-Call Brief"
              pricing="Included"
              shaderConfig={shaderConfigs[1]}
            />
          </div>

        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            HOW IT WORKS: 5-Step Flow
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Knowledge base → script → learning loop.
              </h2>
              <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                First vertical live in 2-3 days. Each additional vertical: 1 day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  icon: <Upload className="w-6 h-6" />,
                  step: "01",
                  title: "Add Knowledge",
                  desc: "Product details, pricing, objections, demographics, cultural context. Upload a Google Sheet, Notion doc, or type it in."
                },
                {
                  icon: <FileCode className="w-6 h-6" />,
                  step: "02",
                  title: "We Generate Script",
                  desc: "8-stage architecture. Adjacency pair design. Cultural compliance. Persuasion mechanics. AI latency handling. All 18 principles applied."
                },
                {
                  icon: <Eye className="w-6 h-6" />,
                  step: "03",
                  title: "You Review",
                  desc: "See the exact dialogue flow. Adjust brand voice. Approve cultural fit. Set deployment rules. Takes 30 minutes."
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  step: "04",
                  title: "Goes Live",
                  desc: "LiveKit + Gemini 2.5 Live. Real-time conversation. State tracking. CRM integration. Sub-200ms response."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  step: "05",
                  title: "It Learns",
                  desc: "Transcript analysis. Objection patterns. Drop-off points. Cultural fit scoring. Weekly script refinement from real calls."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-300 uppercase">Step {item.step}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CRM INTEGRATION STRIP
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Integrates With Your Existing Stack</p>
            <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-2xl font-bold tracking-tighter">ZOHO</span>
              <span className="text-2xl font-bold tracking-tighter">NOTION</span>
              <span className="text-2xl font-bold tracking-tighter">ODOO</span>
              <span className="text-2xl font-bold tracking-tighter">GOOGLE SHEETS</span>
              <span className="text-2xl font-bold tracking-tighter text-slate-300">+ MORE</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            VERTICAL CASE STUDIES
        ═══════════════════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════════════════
            TESTIMONIALS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-32">
              {[
                {
                  quote: "We were losing 40% of inbound leads after 7 PM. Monade picks up every call, qualifies the buyer in Hindi or English, and the lead is in our CRM before the site visit team arrives at 9 AM. Booking rate tripled.",
                  author: "Site Sales Head",
                  role: "Tier-1 Mumbai Builder"
                },
                {
                  quote: "Our receptionist handled 60 calls a day and still missed half. Monade handles 200 — in Hindi, English, and Hinglish. Patients book without waiting. Nobody has complained it's AI.",
                  author: "Clinic Manager",
                  role: "IVF Center, Andheri West"
                },
                {
                  quote: "We used to lose students because we couldn't follow up fast enough. Monade calls within minutes of a form submission, qualifies the lead, and books a demo — before our sales team opens their laptop.",
                  author: "Head of Admissions",
                  role: "Career Coaching Institute"
                }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 55 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  <div className="absolute -left-12 top-0 h-full w-[1px] bg-slate-100 overflow-hidden">
                    <motion.div
                      className="w-full h-24 bg-primary glow-orange"
                      animate={{ y: ["-100%", "400%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  <blockquote className="space-y-12">
                    <h3 className="text-[clamp(28px,4.5vw,48px)] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
                      &ldquo;{t.quote}&rdquo;
                    </h3>
                    <footer className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-slate-900">{t.author}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FAQ SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Common Questions</h2>
              <p className="text-slate-500 mt-2">The questions buyers actually ask.</p>
            </div>

            <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white">
              {[
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
                  a: 'We don\'t treat it as an objection. In India, family consultation is culturally normative. Our scripts embrace it: "Absolutely — this is a family decision. Would it help if I send a comparison document? Or schedule a weekend walkthrough where everyone can join?" Conversion rate after properly supported family consultation: 40-50%.'
                },
                {
                  id: "setup",
                  q: "How long does setup take?",
                  a: "2-3 days for your first vertical. Day 1: Upload knowledge base. Day 1-2: We generate script using 18-principle framework. Day 2: You review and approve. Day 2-3: Technical integration. Day 3: Test calls → goes live. Each additional vertical: 1 day."
                },
              ].map((faq) => (
                <div key={faq.id} className="border-b border-slate-100 last:border-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group text-left"
                  >
                    <span className="font-bold text-sm text-slate-900 pr-4">{faq.q}</span>
                    {expandedFaq === faq.id ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
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

      </main>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Stop losing deals to voicemail.
          </h2>
          <button className="group px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <span className="flex items-center gap-2">
              Build Your First Agent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <p className="text-sm font-medium text-slate-400 pt-8">© 2026 Monade AI. Conversation science for businesses that don't miss calls.</p>
        </div>
      </footer>
    </div>
  );
}
