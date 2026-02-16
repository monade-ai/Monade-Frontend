"use client";
import React, { useState } from "react";
import {
  ArrowRight, CheckCircle2, ChevronRight, X,
  Car, Building, ShoppingBag, Utensils,
  Heart, Briefcase, ShieldCheck, GraduationCap,
  Zap, TrendingUp, Users, DollarSign, Settings,
  Phone, BarChart3, MessageSquare, Calendar,
  Lock, Eye, UserCheck, FileText,
  Rocket, Target, RefreshCw, Wallet, Wrench,
  Stethoscope, Home, Gem, CreditCard, Truck,
  School, Clapperboard, Check, Minus, Send,
  Image as ImageIcon, Play, Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────
   BUSINESS KITS (with slugs for linking)
   ──────────────────────────────────────────────────────── */

const BUSINESS_KIT_CATEGORIES = [
  {
    id: "acquire", label: "Acquire", icon: <Target className="w-4 h-4" />, color: "#D94126",
    kits: [
      { slug: "speed-to-lead-engine", name: "Speed-to-Lead Engine", tagline: "Calls new inbound leads in under 30 seconds", icon: <Rocket className="w-5 h-5" />, vertical: "Any", metric: "<30s response" },
      { slug: "site-visit-scheduler", name: "Site-Visit Scheduler", tagline: "Qualifies, books, sends a car", icon: <Building className="w-5 h-5" />, vertical: "Real Estate", metric: "3x site visits" },
      { slug: "emi-closer", name: "EMI Closer", tagline: "Reframes price as a monthly decision", icon: <CreditCard className="w-5 h-5" />, vertical: "Retail", metric: "2.1x conversion" },
      { slug: "referral-harvester", name: "Referral Harvester", tagline: "Post-success call that generates warm intros", icon: <Users className="w-5 h-5" />, vertical: "Any", metric: "+40% referrals" },
    ],
  },
  {
    id: "retain", label: "Retain", icon: <RefreshCw className="w-4 h-4" />, color: "#0EA5E9",
    kits: [
      { slug: "churn-interceptor", name: "Churn Interceptor", tagline: "Calls cancellations before the emotion cools", icon: <ShieldCheck className="w-5 h-5" />, vertical: "SaaS", metric: "29% save rate" },
      { slug: "renewal-reminder", name: "Renewal Reminder", tagline: "Loss-aversion nudges before policy lapse", icon: <RefreshCw className="w-5 h-5" />, vertical: "Insurance", metric: "+40% retention" },
      { slug: "service-retention-engine", name: "Service Retention Engine", tagline: "Pre-emptive service booking + value bundles", icon: <Car className="w-5 h-5" />, vertical: "Automotive", metric: "+37% bookings" },
      { slug: "parent-whisperer", name: "Parent Whisperer", tagline: "Arms students with ROI arguments for parents", icon: <GraduationCap className="w-5 h-5" />, vertical: "EdTech", metric: "2x enrollment" },
    ],
  },
  {
    id: "collect", label: "Collect", icon: <Wallet className="w-4 h-4" />, color: "#10B981",
    kits: [
      { slug: "collections-cfo", name: "Collections CFO", tagline: "Factual, calm, relentlessly scheduled reminders", icon: <DollarSign className="w-5 h-5" />, vertical: "B2B Finance", metric: "+27% recovered" },
      { slug: "fee-reminder", name: "Fee Reminder Parents Don't Hate", tagline: "Respect + options, not threats", icon: <School className="w-5 h-5" />, vertical: "Schools", metric: "+23% collection" },
      { slug: "payment-nudge-ladder", name: "Payment Link Nudge Ladder", tagline: "Escalating nudges with instant payment links", icon: <Wallet className="w-5 h-5" />, vertical: "Subscriptions" },
      { slug: "promise-to-pay-tracker", name: "Promise-to-Pay Tracker", tagline: "Logs commitments, follows up on exact dates", icon: <Calendar className="w-5 h-5" />, vertical: "BFSI" },
    ],
  },
  {
    id: "operate", label: "Operate", icon: <Settings className="w-4 h-4" />, color: "#F59E0B",
    kits: [
      { slug: "3am-dispatcher", name: "3 AM Dispatcher", tagline: "Automated night-shift dispatching that never sleeps", icon: <Car className="w-5 h-5" />, vertical: "Logistics", metric: "0 missed rides" },
      { slug: "eta-truth-machine", name: "ETA Truth Machine", tagline: "Calls drivers, syncs real ETAs into the system", icon: <Truck className="w-5 h-5" />, vertical: "Supply Chain", metric: "-47% escalations" },
      { slug: "kyc-finisher", name: "KYC Finisher", tagline: "Micro-commitment doc chase until disbursal", icon: <FileText className="w-5 h-5" />, vertical: "BFSI/NBFC", metric: "+32% completion" },
      { slug: "clinic-front-desk", name: "Clinic Front Desk", tagline: "After-hours booking with empathetic protocols", icon: <Stethoscope className="w-5 h-5" />, vertical: "Healthcare", metric: "+44% consults" },
    ],
  },
];

/* ────────────────────────────────────────────────────────
   COMPARISON TABLE DATA
   ──────────────────────────────────────────────────────── */

const COMPARISON_FEATURES = [
  { feature: "Inbound voice calls", monade: true, clawdtalk: true, zapier: false, diy: false },
  { feature: "Outbound campaigns", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "Number rotation", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "WhatsApp follow-ups", monade: true, clawdtalk: false, zapier: true, diy: false },
  { feature: "Call transcripts + QA", monade: true, clawdtalk: "basic", zapier: false, diy: false },
  { feature: "Campaign analytics", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "Human handoff (live transfer)", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "Pre-built business kits", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "Multi-agent orchestration", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "Scheduling + follow-up ladders", monade: true, clawdtalk: false, zapier: true, diy: false },
  { feature: "CRM integration", monade: true, clawdtalk: false, zapier: true, diy: true },
  { feature: "Compliance / audit logs", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "Managed deployment", monade: true, clawdtalk: false, zapier: false, diy: false },
  { feature: "Open Claw native", monade: true, clawdtalk: true, zapier: false, diy: true },
];

/* ────────────────────────────────────────────────────────
   CASE STUDY CARDS
   ──────────────────────────────────────────────────────── */

const cardData = [
  { rank: 1, slug: "taxi-aggregator-automation", title: "The Night Dispatcher", workflow: "Automated night-shift dispatching for Mumbai's fleet networks.", color: "bg-[#020617]", rotation: "rotate-2" },
  { rank: 2, slug: "real-estate-qualification", title: "Lead Qualification", workflow: "Filtering 10k+ luxury leads through outcome-based dialogue.", color: "bg-[#0F172A]", rotation: "-rotate-1" },
  { rank: 3, slug: "ecommerce-order-support", title: "WISMO Destroyer", workflow: "Pre-emptive WISMO resolution via Shopify API integration.", color: "bg-[#020617]", rotation: "rotate-1" },
  { rank: 4, slug: "restaurant-reservation", title: "The Zero-Ring Host", workflow: "Intelligent upselling and reservation management for cloud kitchens.", color: "bg-primary", rotation: "-rotate-2" },
  { rank: 5, slug: "healthcare-clinic-booking", title: "Empathy at 2 AM", workflow: "Soft-voice appointment booking and EMI framing for IVF clinics.", color: "bg-[#0F172A]", rotation: "rotate-2" },
  { rank: 6, slug: "recruitment-outbound", title: "The Talent Filter", workflow: "Mass outbound qualification for high-volume tech recruitment.", color: "bg-[#020617]", rotation: "-rotate-1" },
];

/* ────────────────────────────────────────────────────────
   TRUST ITEMS
   ──────────────────────────────────────────────────────── */

const TRUST_ITEMS = [
  { icon: <Lock className="w-5 h-5" />, title: "Scoped Credentials", description: "Separate accounts and tokens per agent. No blast radius." },
  { icon: <Eye className="w-5 h-5" />, title: "Audit Logs", description: "Every action, every call, every decision — logged and queryable." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Skill Allowlisting", description: "Install only what's been reviewed. No rogue plugins." },
  { icon: <UserCheck className="w-5 h-5" />, title: "Human Handoff", description: "Configurable escalation for high-risk actions. Always a human in the loop." },
  { icon: <FileText className="w-5 h-5" />, title: "PII Controls", description: "Retention policies for transcripts and recordings. Compliance-ready." },
  { icon: <Users className="w-5 h-5" />, title: "Role-Based Access", description: "Granular permissions across teams, agents, and campaigns." },
];

/* ────────────────────────────────────────────────────────
   CONTACT DIALOG
   ──────────────────────────────────────────────────────── */

function ContactDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white rounded-[32px] shadow-2xl max-w-lg w-full p-10 z-10"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-[#1A1A1A]/30 hover:text-[#1A1A1A] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold tracking-tight mb-2">Talk to our team</h3>
        <p className="text-sm text-[#1A1A1A]/50 mb-8">For custom deployments, volume pricing, and white-label solutions.</p>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#D94126] transition-colors" />
          <input type="email" placeholder="Work email" className="w-full px-4 py-3 border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#D94126] transition-colors" />
          <input type="text" placeholder="Company" className="w-full px-4 py-3 border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#D94126] transition-colors" />
          <textarea placeholder="Tell us what you need" rows={3} className="w-full px-4 py-3 border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#D94126] transition-colors resize-none" />
          <button type="submit" className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#D94126] transition-colors flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   COMPARISON CELL RENDERER
   ──────────────────────────────────────────────────────── */

function CompCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-[#10B981]" />;
  if (value === false) return <Minus className="w-4 h-4 text-[#1A1A1A]/15" />;
  return <span className="text-xs text-[#F59E0B] font-bold">{value}</span>;
}

/* ────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────── */

export default function OpenClawPage() {
  const [activeCategory, setActiveCategory] = useState("acquire");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const activeKits = BUSINESS_KIT_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#D94126] selection:text-white overflow-hidden font-sans">
      <Navbar variant="transparent" />
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* ═══════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-20">
        <div className="absolute inset-0 bg-[#FDFBF7] pointer-events-none" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#D94126]/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D94126] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D94126]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D94126]">Open Claw &times; Monade</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.92] text-[#1A1A1A]">
              Pick a business.
              <br />
              <span className="text-[#D94126]">Launch it.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-[#1A1A1A]/60 font-medium leading-relaxed max-w-xl mt-8 font-serif italic">
              Open Claw is the brain. Monade is the money-making machine around it.
              Phone numbers, campaigns, scheduling, transcripts, analytics &mdash; everything your agent needs to run revenue over calls.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-[#D94126] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#b83520] transition-all shadow-lg shadow-[#D94126]/20 hover:-translate-y-0.5 group">
                Start Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#business-kits" className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-black transition-all group">
                Browse Business Kits <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-x-10 gap-y-3 mt-12 pt-6 border-t border-[#1A1A1A]/10">
              {[{ value: "20+", label: "Business Kits" }, { value: "<30s", label: "Speed-to-Lead" }, { value: "24/7", label: "Always On" }].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold tracking-tight">{s.value}</div>
                  <div className="text-[10px] text-[#1A1A1A]/40 font-bold uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — placeholder hero image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative w-full h-[520px] bg-[#020617] rounded-[32px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#D94126]/20 flex items-center justify-center">
                  <Play className="w-8 h-8 text-[#D94126] ml-1" />
                </div>
                <p className="text-white/40 text-sm font-bold">Watch a live agent call</p>
                <p className="text-white/20 text-xs">Replace with demo video or screenshot</p>
              </div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D94126]/10 blur-[100px] rounded-full" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0EA5E9]/10 blur-[80px] rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SOCIAL PROOF RIBBON
         ═══════════════════════════════════════════════ */}
      <section className="py-12 px-6 bg-white border-y border-[#1A1A1A]/5">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {["Real Estate", "Healthcare", "BFSI", "EdTech", "Logistics", "SaaS", "Retail"].map((v) => (
            <span key={v} className="text-sm font-bold text-[#1A1A1A]/20 uppercase tracking-[0.2em]">{v}</span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THESIS
         ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D94126] blur-[200px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.blockquote initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.15] tracking-tight">
            &ldquo;Most tools give your bot a voice.
            <br />
            <span className="text-[#D94126]">Monade gives your voice a business model.</span>&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW IT WORKS
         ═══════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-32 px-6 bg-[#FDFBF7] border-t border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-[#D94126] font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-[#1A1A1A] mb-6">
              Four steps. <span className="text-[#1A1A1A]/30">One weekend.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", title: "Pick a Kit", sub: "Outcome first", desc: "Browse business kits by what you want to achieve — more bookings, faster collections, fewer no-shows.", icon: <Target className="w-6 h-6" /> },
              { n: "02", title: "Connect Your Data", sub: "CRM, calendar, Shopify", desc: "Plug in the systems you already use. Your agent inherits your customer data and business logic.", icon: <Settings className="w-6 h-6" /> },
              { n: "03", title: "Launch", sub: "Inbound or outbound", desc: "Go live with a phone number, WhatsApp line, or outbound campaign. Your agent starts working immediately.", icon: <Rocket className="w-6 h-6" /> },
              { n: "04", title: "Tune", sub: "Transcripts → insights", desc: "Every call generates data. Transcripts, conversion rates, objection patterns — your agent gets sharper daily.", icon: <BarChart3 className="w-6 h-6" /> },
            ].map((step, i) => (
              <motion.div key={step.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative group">
                <div className="bg-white border border-[#1A1A1A]/8 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-mono font-bold text-[#1A1A1A]/[0.06] mb-4 tracking-tighter leading-none">{step.n}</div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] text-white flex items-center justify-center mb-5 group-hover:bg-[#D94126] transition-colors">{step.icon}</div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-1 tracking-tight">{step.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D94126] mb-3">{step.sub}</p>
                  <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-[#1A1A1A]/15" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BUSINESS KITS (clickable → kit pages)
         ═══════════════════════════════════════════════ */}
      <section id="business-kits" className="py-32 px-6 bg-white border-t border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-[#D94126] font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-4 block">Business Kits</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-[#1A1A1A] mb-6">
              Don&apos;t buy software. <br /><span className="text-[#1A1A1A]/30">Pick a business outcome.</span>
            </h2>
            <p className="text-lg text-[#1A1A1A]/50 leading-relaxed font-serif italic">
              Each kit is a pre-built, revenue-positive workflow: call flow, triggers, follow-up ladder, integrations, and metrics dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {BUSINESS_KIT_CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all",
                activeCategory === cat.id ? "bg-[#1A1A1A] text-white shadow-lg" : "bg-[#1A1A1A]/5 text-[#1A1A1A]/60 hover:bg-[#1A1A1A]/10"
              )}>
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeKits?.kits.map((kit, i) => (
                <motion.div key={kit.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link href={`/open-claw/kit/${kit.slug}`} className="group block relative bg-[#FDFBF7] border border-[#1A1A1A]/8 rounded-3xl p-8 hover:border-[#1A1A1A]/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white" style={{ backgroundColor: activeKits.color }}>{kit.icon}</div>
                      {kit.metric && <span className="text-xs font-mono font-bold text-[#1A1A1A]/30 bg-[#1A1A1A]/5 px-3 py-1 rounded-full">{kit.metric}</span>}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#D94126] transition-colors">{kit.name}</h3>
                    <p className="text-[#1A1A1A]/50 text-sm leading-relaxed mb-4">{kit.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/25">{kit.vertical}</span>
                      <ArrowRight className="w-4 h-4 text-[#1A1A1A]/20 group-hover:text-[#D94126] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PLACEHOLDER — Dashboard Screenshot
         ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[480px] bg-[#020617] rounded-[32px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <ImageIcon className="w-12 h-12 text-white/20" />
              <p className="text-white/30 text-sm font-bold">Campaign Dashboard Screenshot</p>
              <p className="text-white/15 text-xs">Replace with actual product screenshot</p>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D94126]/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPARISON TABLE
         ═══════════════════════════════════════════════ */}
      <section id="comparison" className="py-32 px-6 bg-white border-t border-[#1A1A1A]/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D94126] font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-4 block">Comparison</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1A1A1A] mb-4">Why teams switch to Monade</h2>
            <p className="text-lg text-[#1A1A1A]/50 font-serif italic">Side-by-side against the alternatives.</p>
          </div>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]/10">
                  <th className="text-left py-4 pr-4 text-sm font-bold text-[#1A1A1A]/40 w-[40%]">Feature</th>
                  <th className="text-center py-4 px-3 w-[15%]">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="px-3 py-1 bg-[#D94126] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Monade</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-3 text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-wider w-[15%]">ClawdTalk</th>
                  <th className="text-center py-4 px-3 text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-wider w-[15%]">Zapier + Voice</th>
                  <th className="text-center py-4 px-3 text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-wider w-[15%]">DIY Stack</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={row.feature} className="border-b border-[#1A1A1A]/5 hover:bg-[#FDFBF7] transition-colors">
                    <td className="py-3.5 pr-4 text-sm text-[#1A1A1A]/70">{row.feature}</td>
                    <td className="py-3.5 text-center"><div className="flex justify-center"><CompCell value={row.monade} /></div></td>
                    <td className="py-3.5 text-center"><div className="flex justify-center"><CompCell value={row.clawdtalk} /></div></td>
                    <td className="py-3.5 text-center"><div className="flex justify-center"><CompCell value={row.zapier} /></div></td>
                    <td className="py-3.5 text-center"><div className="flex justify-center"><CompCell value={row.diy} /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRICING
         ═══════════════════════════════════════════════ */}
      <section id="pricing" className="py-32 px-6 bg-[#FDFBF7] border-t border-[#1A1A1A]/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D94126] font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1A1A1A] mb-4">Start free. Scale when ready.</h2>
            <p className="text-lg text-[#1A1A1A]/50 font-serif italic">No hidden fees. No contracts. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="bg-white border border-[#1A1A1A]/10 rounded-[32px] p-8 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">Free</h3>
                <p className="text-sm text-[#1A1A1A]/40">Self-setup. You only pay for calls.</p>
              </div>
              <div className="mb-8">
                <div className="text-5xl font-bold tracking-tight">$0</div>
                <div className="text-sm text-[#1A1A1A]/40 mt-1">/month forever</div>
              </div>
              <div className="space-y-3 mb-10 flex-1">
                {[
                  "All business kits included",
                  "1 phone number",
                  "Open Claw integration",
                  "Call transcripts",
                  "Pay-per-minute calling rates",
                  "Community support",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A1A1A]/60">{f}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="w-full py-4 rounded-2xl font-bold text-sm border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all text-center block">
                Get Started Free
              </a>
            </div>

            {/* Pro — highlighted */}
            <div className="bg-[#1A1A1A] text-white rounded-[32px] p-8 flex flex-col relative overflow-hidden shadow-2xl ring-2 ring-[#D94126]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D94126]/10 blur-[80px] rounded-full" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold">Pro</h3>
                    <span className="px-2 py-0.5 bg-[#D94126] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Popular</span>
                  </div>
                  <p className="text-sm text-white/40">Fully managed. We deploy it for you.</p>
                </div>
                <div className="mb-8">
                  <div className="text-5xl font-bold tracking-tight">$50</div>
                  <div className="text-sm text-white/40 mt-1">/month</div>
                </div>
                <div className="space-y-3 mb-10 flex-1">
                  {[
                    "Everything in Free",
                    "5 phone numbers included",
                    "Number rotation",
                    "Managed deployment + setup",
                    "Secure cloud hosting",
                    "Campaign analytics dashboard",
                    "WhatsApp + SMS follow-ups",
                    "Priority support",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#D94126] shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="w-full py-4 rounded-2xl font-bold text-sm bg-[#D94126] text-white hover:bg-[#b83520] transition-all text-center block shadow-lg shadow-[#D94126]/20">
                  Start Pro Plan
                </a>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-[#1A1A1A]/10 rounded-[32px] p-8 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                <p className="text-sm text-[#1A1A1A]/40">Custom deployments. Volume pricing.</p>
              </div>
              <div className="mb-8">
                <div className="text-5xl font-bold tracking-tight">Custom</div>
                <div className="text-sm text-[#1A1A1A]/40 mt-1">let&apos;s talk</div>
              </div>
              <div className="space-y-3 mb-10 flex-1">
                {[
                  "Everything in Pro",
                  "Unlimited phone numbers",
                  "White-label option",
                  "Custom integrations",
                  "SLA + dedicated support",
                  "On-premise deployment option",
                  "Role-based access controls",
                  "Custom compliance setup",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A1A1A]/60">{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setIsContactOpen(true)} className="w-full py-4 rounded-2xl font-bold text-sm border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DIFFERENTIATION
         ═══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D94126]/10 blur-[200px] rounded-full -translate-y-1/2" /></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D94126] font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-6 block">Why Open Claw + Monade</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-8">
                Voice is not the product. <br /><span className="text-white/30">Voice is the interface.</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed max-w-lg font-serif italic mb-10">
                Competitors can add a phone call to your agent. But businesses don&apos;t win on &ldquo;having voice.&rdquo; They win on campaign execution, follow-up ladders, scheduling, and iteration loops that compound.
              </p>
              <div className="space-y-4">
                {["Inbound + outbound telephony with routing & handoffs", "Campaign engine: upload leads, run call flows, get results", "Conversation intelligence: transcripts, QA, conversion insights", "Follow-up ladders across voice, WhatsApp, and SMS"].map((item) => (
                  <div key={item} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#D94126] shrink-0 mt-0.5" /><span className="text-white/70 text-sm">{item}</span></div>
                ))}
              </div>
            </div>

            {/* Right — placeholder product screenshot */}
            <div className="relative w-full h-[400px] bg-white/5 border border-white/10 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <Headphones className="w-12 h-12 text-white/15" />
                <p className="text-white/25 text-sm font-bold">Agent Conversation View</p>
                <p className="text-white/10 text-xs">Replace with actual product screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FIELD REPORTS
         ═══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-white border-t border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#D94126] font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-4 block">Field Reports</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] text-[#1A1A1A] mb-6">Proof, not promises.</h2>
            <p className="text-lg text-[#1A1A1A]/50 font-serif italic">High-fidelity workflows operating at scale across the subcontinent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {cardData.map((study, i) => (
              <motion.div key={study.rank} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/open-claw/case-study/${study.slug}`} className="block h-full group">
                  <div className={cn("p-12 rounded-[40px] flex flex-col hover:scale-[1.02] hover:rotate-0 transition-all duration-500 shadow-2xl h-[450px] relative overflow-hidden text-white", study.color, study.rotation)}>
                    <div className="relative z-10">
                      <div className="flex justify-end mb-12"><div className="text-7xl font-mono font-bold opacity-10 tracking-tighter">0{study.rank}</div></div>
                      <h3 className="text-4xl font-bold mb-8 leading-[1.1] tracking-tight group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-2xl leading-relaxed font-serif italic text-white/70">&ldquo;{study.workflow}&rdquo;</p>
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRUST & SAFETY
         ═══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#FDFBF7] border-t border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <span className="text-[#D94126] font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-4 block">Trust & Safety</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#1A1A1A] mb-6">Business-grade<br />guardrails.</h2>
              <p className="text-base text-[#1A1A1A]/50 leading-relaxed font-serif italic">
                Open Claw skills are powerful, and power comes with risk. Monade adds the compliance, logging, and access controls that businesses require.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_ITEMS.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white border border-[#1A1A1A]/8 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#020617] text-white flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/40 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER CTA
         ═══════════════════════════════════════════════ */}
      <footer className="py-32 px-6 bg-[#020617] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D94126]/10 blur-[200px] rounded-full" /></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-tight">
            Monade is where Open Claw agents go to become <span className="text-[#D94126]">businesses</span>.
          </motion.h2>
          <p className="text-white/40 text-lg font-serif italic">Deploy your first agent in minutes. No credit card required.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="#pricing" className="bg-[#D94126] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#b83520] transition-all shadow-lg shadow-[#D94126]/20 hover:-translate-y-0.5 inline-block">
              Start Free
            </a>
            <button onClick={() => setIsContactOpen(true)} className="text-white/50 font-bold text-lg hover:text-white transition-colors px-6 py-5 flex items-center justify-center gap-2 group">
              Talk to Sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-[10px] text-white/15 pt-20 uppercase tracking-[0.3em]">&copy; 2026 Monade AI</p>
        </div>
      </footer>
    </div>
  );
}
