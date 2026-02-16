"use client";

import React from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Box, BarChart3, Plug } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getKitBySlug, getRelatedKits } from "@/lib/business-kits";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; badge: string }> = {
  acquire: { bg: "bg-[#D94126]", text: "text-[#D94126]", badge: "Acquire" },
  retain: { bg: "bg-[#0EA5E9]", text: "text-[#0EA5E9]", badge: "Retain" },
  collect: { bg: "bg-[#10B981]", text: "text-[#10B981]", badge: "Collect" },
  operate: { bg: "bg-[#F59E0B]", text: "text-[#F59E0B]", badge: "Operate" },
};

export default function KitPage() {
  const params = useParams();
  const slug = params.slug as string;
  const kit = getKitBySlug(slug);

  if (!kit) {
    notFound();
  }

  const colors = CATEGORY_COLORS[kit.category];
  const related = getRelatedKits(kit.relatedKits);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#D94126] selection:text-white font-sans">
      <Navbar variant="transparent" />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* ─── Back Link ─── */}
          <Link
            href="/open-claw#business-kits"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/40 hover:text-[#D94126] transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Business Kits
          </Link>

          {/* ─── Hero ─── */}
          <header className="max-w-4xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className={cn("px-3 py-1 text-white text-[10px] font-bold uppercase tracking-widest rounded-full", colors.bg)}>
                {colors.badge}
              </span>
              <span className="text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-widest">
                {kit.vertical}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              {kit.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#1A1A1A]/60 font-serif italic leading-relaxed max-w-2xl"
            >
              {kit.tagline}
            </motion.p>

            {kit.metric && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white rounded-full"
              >
                <Zap className="w-4 h-4 text-[#D94126]" />
                <span className="text-sm font-bold">{kit.metric}</span>
              </motion.div>
            )}
          </header>

          {/* ─── Content Grid ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* ─── Main Content ─── */}
            <div className="lg:col-span-8 space-y-16">

              {/* The Problem */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-6">{kit.problem.headline}</h2>
                <p className="text-lg text-[#1A1A1A]/60 leading-relaxed font-serif italic">
                  {kit.problem.body}
                </p>
              </motion.section>

              {/* Placeholder image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative w-full h-[320px] md:h-[400px] bg-[#020617] rounded-[32px] overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <Box className="w-8 h-8 text-white/30" />
                    </div>
                    <p className="text-white/30 text-sm font-bold uppercase tracking-widest">Kit Workflow Diagram</p>
                    <p className="text-white/15 text-xs mt-2">Replace with actual screenshot</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D94126]/10 blur-[100px] rounded-full" />
              </motion.div>

              {/* The Protocol */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white", colors.bg)}>
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">The Protocol</h2>
                </div>

                <div className="space-y-4">
                  {kit.protocol.steps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4 group"
                    >
                      <div className="flex flex-col items-center">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0",
                          colors.bg
                        )}>
                          {i + 1}
                        </div>
                        {i < kit.protocol.steps.length - 1 && (
                          <div className="w-px h-full bg-[#1A1A1A]/10 my-1" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{step.label}</h3>
                        <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{step.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* What's Included */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-white">
                    <Box className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">What&apos;s in the Kit</h2>
                </div>

                <div className="space-y-3">
                  {kit.included.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-white border border-[#1A1A1A]/8 rounded-2xl">
                      <CheckCircle2 className={cn("w-5 h-5 shrink-0 mt-0.5", colors.text)} />
                      <span className="text-sm text-[#1A1A1A]/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Integrations */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-white">
                    <Plug className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Integrations</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {kit.integrations.map((name) => (
                    <span
                      key={name}
                      className="px-4 py-2 bg-white border border-[#1A1A1A]/8 rounded-full text-sm font-bold text-[#1A1A1A]/60"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* ─── Sidebar ─── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">

                {/* Results Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#020617] text-white p-8 rounded-[32px] shadow-2xl"
                >
                  <div className={cn("flex items-center gap-2 mb-8", colors.text)}>
                    <Zap className="w-4 h-4 fill-current" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Expected Results</span>
                  </div>

                  <div className="space-y-8">
                    {kit.expectedResults.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                      >
                        <div className="text-4xl font-mono font-bold tracking-tighter">{stat.value}</div>
                        <div className="text-sm font-serif italic text-white/40 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Deploy CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white border border-[#1A1A1A]/10 p-8 rounded-[32px]"
                >
                  <h3 className="text-xl font-bold mb-3 tracking-tight">Deploy This Kit</h3>
                  <p className="text-sm text-[#1A1A1A]/50 mb-6 leading-relaxed">
                    Get this exact workflow running for your business. Free to start — you only pay for calls.
                  </p>
                  <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#D94126] transition-all flex items-center justify-center gap-2 shadow-lg group">
                    Start Free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a href="/open-claw#pricing" className="block w-full text-center text-sm font-bold text-[#1A1A1A]/40 hover:text-[#D94126] mt-4 transition-colors">
                    See pricing plans
                  </a>
                </motion.div>

                {/* Related Case Study */}
                {kit.relatedCaseStudy && (
                  <Link
                    href={`/open-claw/case-study/${kit.relatedCaseStudy}`}
                    className="block p-6 bg-[#FDFBF7] border border-[#1A1A1A]/8 rounded-[32px] hover:shadow-lg transition-all group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D94126] block mb-2">Related Field Report</span>
                    <span className="text-base font-bold text-[#1A1A1A] group-hover:text-[#D94126] transition-colors">
                      Read the case study &rarr;
                    </span>
                  </Link>
                )}
              </div>
            </aside>
          </div>

          {/* ─── Related Kits ─── */}
          {related.length > 0 && (
            <section className="mt-24 pt-16 border-t border-[#1A1A1A]/10">
              <h2 className="text-2xl font-bold tracking-tight mb-8">Other kits you might need</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((rKit) => {
                  const rColors = CATEGORY_COLORS[rKit.category];
                  return (
                    <Link
                      key={rKit.slug}
                      href={`/open-claw/kit/${rKit.slug}`}
                      className="flex items-center gap-4 p-6 bg-white border border-[#1A1A1A]/8 rounded-2xl hover:shadow-lg hover:border-[#1A1A1A]/15 transition-all group"
                    >
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0", rColors.bg)}>
                        <Zap className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#D94126] transition-colors truncate">{rKit.name}</h3>
                        <p className="text-xs text-[#1A1A1A]/40 truncate">{rKit.tagline}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1A1A1A]/20 group-hover:text-[#D94126] shrink-0 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
