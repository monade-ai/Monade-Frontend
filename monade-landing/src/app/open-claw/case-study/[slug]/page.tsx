'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Zap, Share2, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/case-studies';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params.slug as string;

    const study = CASE_STUDIES.find((s) => s.slug === slug);
    if (!study) {
        notFound();
    }

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const getImpactColor = (rank: number) => {
        switch (rank) {
            case 1: case 4: return { text: "text-rose-500", glow: "bg-rose-500" }; // Reds
            case 3: case 6: return { text: "text-emerald-500", glow: "bg-emerald-500" }; // Greens
            case 2: case 5: return { text: "text-sky-500", glow: "bg-sky-500" }; // Blues
            default: return { text: "text-primary", glow: "bg-primary" };
        }
    };

    const impactStyle = getImpactColor(study.rank);

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#D94126] selection:text-white">
            <Navbar variant="transparent" />

            {/* ─── Progress Bar ─── */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-[#D94126] z-50 origin-left"
                style={{ scaleX }}
            />

            <main className="pt-32 pb-24 px-6">
                <article className="max-w-7xl mx-auto">

                    {/* ─── Back Link ─── */}
                    <Link href="/open-claw" className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/40 hover:text-[#D94126] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
                    </Link>

                    {/* ─── Header ─── */}
                    <header className="max-w-4xl mb-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="px-3 py-1 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Case Study #{study.rank}
                            </span>
                            <span className="text-xs font-bold text-[#D94126] uppercase tracking-widest">
                                {study.industry}
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-[#1A1A1A]"
                        >
                            {study.title}
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-[#1A1A1A]/70 leading-relaxed font-medium max-w-3xl font-serif italic"
                        >
                            {study.subtitle}
                        </motion.p>

                        {/* Author Block */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4 mt-12 pt-8 border-t border-[#1A1A1A]/10"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#020617] to-[#0F172A] flex items-center justify-center text-white font-bold text-lg">
                                {study.author.name.charAt(0)}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[#1A1A1A]">{study.author.name}</div>
                                <div className="text-[10px] text-[#1A1A1A]/50 font-bold uppercase tracking-widest">
                                    {study.author.role} • {study.publishedAt}
                                </div>
                            </div>
                            <div className="ml-auto">
                                <button className="p-3 rounded-full hover:bg-[#1A1A1A]/5 text-[#1A1A1A]/40 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </header>

                    {/* ─── Content Layout ─── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Main Prose */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="prose prose-xl max-w-none text-[#1A1A1A]/90 
                                prose-headings:font-bold prose-headings:text-[#1A1A1A] prose-headings:tracking-tight
                                prose-p:leading-9 prose-p:mb-8
                                prose-strong:text-[#1A1A1A] prose-strong:font-bold
                                prose-blockquote:border-l-4 prose-blockquote:border-[#D94126] prose-blockquote:bg-[#D94126]/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl
                                prose-em:font-serif prose-em:italic
                                prose-a:text-[#D94126] prose-a:no-underline hover:prose-a:underline"
                            >
                                <div dangerouslySetInnerHTML={{ __html: study.content }} />

                                {study.pullQuote && (
                                    <motion.figure 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="my-16 p-10 bg-[#020617] rounded-[40px] text-white -rotate-1 relative overflow-hidden group shadow-2xl"
                                    >
                                        <Quote className="absolute -top-4 -left-4 w-24 h-24 text-white/5 -rotate-12 transition-transform group-hover:scale-110" />
                                        <blockquote className="border-0 p-0 m-0 bg-transparent">
                                            <p className="text-3xl md:text-4xl font-serif italic leading-tight mb-6 relative z-10 text-white">
                                                "{study.pullQuote}"
                                            </p>
                                        </blockquote>
                                        <figcaption className="text-xs font-bold uppercase tracking-[0.2em] text-[#D94126] opacity-80">
                                            — {study.author.role}
                                        </figcaption>
                                    </motion.figure>
                                )}
                            </motion.div>
                        </div>

                        {/* Sticky Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-32 space-y-10">

                                {/* Impact Card */}
                                <motion.div 
                                    initial={{ opacity: 0, rotate: 3, scale: 0.95 }}
                                    animate={{ opacity: 1, rotate: 2, scale: 1 }}
                                    whileHover={{ rotate: 0, scale: 1.02 }}
                                    transition={{ duration: 0.5, type: "spring" }}
                                    className="bg-[#020617] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden"
                                >
                                    <div className={cn("flex items-center gap-2 mb-10", impactStyle.text)}>
                                        <Zap className="w-5 h-5 fill-current" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Live Impact Report</span>
                                    </div>

                                    <div className="space-y-10">
                                        {study.stats.map((stat, i) => (
                                            <motion.div 
                                                key={i} 
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + (i * 0.1) }}
                                                className="border-b border-white/10 pb-8 last:border-0 last:pb-0"
                                            >
                                                <div className="text-5xl font-mono font-bold text-white mb-3 tracking-tighter">
                                                    {stat.value}
                                                </div>
                                                <div className="text-sm font-serif italic text-white/40">
                                                    {stat.label}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Decorative element */}
                                    <div className={cn("absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[80px] opacity-20", impactStyle.glow)} />
                                </motion.div>

                                {/* CTA Card */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="bg-white border border-[#1A1A1A]/10 p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow duration-500"
                                >
                                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 tracking-tight">Deploy This Intelligence</h3>
                                    <p className="text-base text-[#1A1A1A]/60 mb-8 leading-relaxed font-medium">
                                        Clone this exact workflow for your business. Our agents are ready to deploy in minutes.
                                    </p>
                                    <button className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold text-sm hover:bg-[#D94126] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-[#D94126]/20 group">
                                        Start Integration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>

                            </div>
                        </aside>

                    </div>
                </article>
            </main>

            {/* ─── Footer Navigation ─── */}
            <footer className="bg-white border-t border-[#1A1A1A]/5 py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-xs">M</div>
                        <div className="text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-[0.2em]">
                            © 2026 Monade Editorial
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <Link href="/open-claw" className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#D94126] transition-colors">Intelligence</Link>
                        <Link href="/pricing" className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#D94126] transition-colors">Pricing</Link>
                        <Link href="/about" className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#D94126] transition-colors">About</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
