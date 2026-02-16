import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Zap, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/case-studies';

export async function generateStaticParams() {
    return CASE_STUDIES.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = CASE_STUDIES.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#D94126] selection:text-white">
            <Navbar variant="transparent" />

            {/* ─── Reading Indicator (Visual only, simple) ─── */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-[#1A1A1A]/5 z-50">
                <div className="h-full bg-[#D94126] w-[20%]" />
            </div>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <article className="max-w-7xl mx-auto">

                    {/* ─── Back Link ─── */}
                    <Link href="/open-claw" className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/40 hover:text-[#D94126] transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" /> Back to Intelligence
                    </Link>

                    {/* ─── Header ─── */}
                    <header className="max-w-4xl mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Case Study #{study.rank}
                            </span>
                            <span className="text-xs font-bold text-[#D94126] uppercase tracking-widest">
                                {study.industry}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] mb-8 text-[#1A1A1A]">
                            {study.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-[#1A1A1A]/60 leading-relaxed font-medium max-w-3xl">
                            {study.subtitle}
                        </p>

                        {/* Author Block */}
                        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#1A1A1A]/10">
                            <div className="w-12 h-12 rounded-full bg-[#e5e5e5] overflow-hidden relative">
                                {/* Placeholder avatar */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-400" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[#1A1A1A]">{study.author.name}</div>
                                <div className="text-xs text-[#1A1A1A]/50 font-mono">
                                    {study.author.role} • {study.publishedAt}
                                </div>
                            </div>
                            {/* Share button can't be interactive in Server Component easily without client wrapper, 
                                but standard button is fine, just won't do anything for now. */}
                            <div className="ml-auto">
                                <button className="p-2 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A]/40">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* ─── Content Layout ─── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                        {/* Main Prose */}
                        <div className="lg:col-span-8">
                            <div
                                className="prose prose-lg md:prose-xl max-w-none text-[#1A1A1A]/80 
                                prose-headings:font-bold prose-headings:text-[#1A1A1A] prose-headings:tracking-tight
                                prose-p:leading-relaxed prose-strong:text-[#1A1A1A] prose-strong:font-bold
                                prose-a:text-[#D94126] prose-a:no-underline hover:prose-a:underline"
                                dangerouslySetInnerHTML={{ __html: study.content }}
                            />
                        </div>

                        {/* Sticky Sidebar */}
                        <aside className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-32">

                            {/* Impact Card */}
                            <div className="bg-[#1A1A1A] text-white p-8 rounded-3xl shadow-2xl">
                                <div className="flex items-center gap-2 mb-8 text-[#D94126]">
                                    <Zap className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Impact Report</span>
                                </div>

                                <div className="space-y-6">
                                    {study.stats.map((stat, i) => (
                                        <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                            <div className="text-4xl font-mono font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-xs font-bold text-white/40 uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-white border border-[#1A1A1A]/10 p-8 rounded-3xl shadow-lg">
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Deploy This Agent</h3>
                                <p className="text-sm text-[#1A1A1A]/60 mb-8 leading-relaxed">
                                    Clone this exact workflow for your business.
                                </p>
                                <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                                    Start Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                        </aside>

                    </div>
                </article>
            </main>

            {/* ─── Footer Navigation ─── */}
            <footer className="bg-white border-t border-[#1A1A1A]/5 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-sm font-bold text-[#1A1A1A]/40">
                        © Monade Editorial
                    </div>
                    <Link href="/open-claw" className="text-sm font-bold text-[#1A1A1A] hover:text-[#D94126]">
                        View all case studies
                    </Link>
                </div>
            </footer>
        </div>
    );
}
