"use client";
import React from "react";
import {
    ArrowRight, CheckCircle2,
    Car, Building, ShoppingBag, Utensils,
    Heart, Briefcase, ShieldCheck, GraduationCap,
    Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PhoneMockup from "@/components/PhoneMockup";
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/case-studies';

// Map icons manually since they are React components, harder to store in JSON cleanly without a lookup map
const ICON_MAP: Record<string, React.ReactNode> = {
    "Taxi / Ride Aggregator": <Car className="w-6 h-6" />,
    "Real Estate Qualification": <Building className="w-6 h-6" />,
    "E-commerce Support": <ShoppingBag className="w-6 h-6" />,
    "Restaurant / Cloud Kitchen": <Utensils className="w-6 h-6" />,
    "Healthcare Clinic": <Heart className="w-6 h-6" />,
    "Recruitment Agency": <Briefcase className="w-6 h-6" />,
    "Insurance Renewal": <ShieldCheck className="w-6 h-6" />,
    "Education / Coaching": <GraduationCap className="w-6 h-6" />
};

// We can merge local data with imported data if needed, or just use imported.
// The imported data has the slugs we need.
// Let's create a display map that matches the imported data to icons above.

const useCases = CASE_STUDIES.map(study => {
    // Try to find icon by title, or default to Zap
    // My imported titles might be slightly different than my previous hardcoded ones?
    // Previous hardcoded titles: "Taxi / Ride Aggregator", etc.
    // CASE_STUDIES titles: "The 3 AM Dispatcher Problem", etc.
    // Ah, the CASE_STUDIES file doesn't have the short "Category" title I used in the grid.
    // It has "industry". 

    // Actually, I should just map by rank since I kept the rank consistent!
    // Or I can update the ICON_MAP to use the rank as key.

    return {
        ...study,
        icon: null // Will assign below
    };
});

function getIcon(rank: number) {
    switch (rank) {
        case 1: return <Car className="w-6 h-6" />;
        case 2: return <Building className="w-6 h-6" />;
        case 3: return <ShoppingBag className="w-6 h-6" />;
        case 4: return <Utensils className="w-6 h-6" />;
        case 5: return <Heart className="w-6 h-6" />;
        case 6: return <Briefcase className="w-6 h-6" />;
        case 7: return <ShieldCheck className="w-6 h-6" />;
        case 8: return <GraduationCap className="w-6 h-6" />;
        default: return <Zap className="w-6 h-6" />;
    }
}

// I need to use the short descriptions and workflow summaries I wrote before?
// The CASE_STUDIES file has long content.
// I should probably keep the hardcoded summaries in the main page for the card view, 
// and just add the `slug` to link them.
// Let's recreate the hardcoded list but add the `slug` property to each.

const cardData = [
    {
        rank: 1,
        slug: "taxi-aggregator-automation",
        title: "The Night Dispatcher",
        icon: <Car className="w-6 h-6" />,
        workflow: "Automated night-shift dispatching for Mumbai's fleet networks.",
        impact: "Zero Missed Rides",
        capabilities: ["Voice Webhooks", "WhatsApp"],
        color: "bg-[#020617]",
        rotation: "rotate-2"
    },
    {
        rank: 2,
        slug: "real-estate-qualification",
        title: "Lead Qualification",
        icon: <Building className="w-6 h-6" />,
        workflow: "Filtering 10k+ luxury leads through outcome-based dialogue.",
        impact: "3x Site Visits",
        capabilities: ["Logic Maps", "CRM Sync"],
        color: "bg-[#0F172A]",
        rotation: "-rotate-1"
    },
    {
        rank: 3,
        slug: "ecommerce-order-support",
        title: "Post-Purchase Support",
        icon: <ShoppingBag className="w-6 h-6" />,
        workflow: "Pre-emptive WISMO resolution via Shopify API integration.",
        impact: "70% Ticket Reduction",
        capabilities: ["API Auth", "Sentiment"],
        color: "bg-[#020617]",
        rotation: "rotate-1"
    },
    {
        rank: 4,
        slug: "restaurant-reservation",
        title: "The Zero-Ring Host",
        icon: <Utensils className="w-6 h-6" />,
        workflow: "Intelligent upselling and reservation management for cloud kitchens.",
        impact: "+18% Avg Check",
        capabilities: ["POS Sync", "Upsell Engine"],
        color: "bg-primary",
        rotation: "-rotate-2"
    },
    {
        rank: 5,
        slug: "healthcare-clinic-booking",
        title: "Patient Care",
        icon: <Heart className="w-6 h-6" />,
        workflow: "Soft-voice appointment booking and EMI framing for IVF clinics.",
        impact: "40% Higher Intake",
        capabilities: ["Privacy", "Warmth Tuning"],
        color: "bg-[#0F172A]",
        rotation: "rotate-2"
    },
    {
        rank: 6,
        slug: "recruitment-outbound",
        title: "The Talent Filter",
        icon: <Briefcase className="w-6 h-6" />,
        workflow: "Mass outbound qualification for high-volume tech recruitment.",
        impact: "10x Throughput",
        capabilities: ["Dialer", "A/B Pitching"],
        color: "bg-[#020617]",
        rotation: "-rotate-1"
    },
    {
        rank: 7,
        slug: "insurance-renewal",
        title: "Policy Renewals",
        icon: <ShieldCheck className="w-6 h-6" />,
        workflow: "Loss-aversion based reminders for lapsed policy recovery.",
        impact: "₹2Cr Revenue Saved",
        capabilities: ["Batch Dialing", "Payment"],
        color: "bg-[#0F172A]",
        rotation: "rotate-1"
    },
    {
        rank: 8,
        slug: "education-counseling",
        title: "Parent Counseling",
        icon: <GraduationCap className="w-6 h-6" />,
        workflow: "Bridging the parent-student gap with ROI-focused reporting.",
        impact: "2x Enrollment Speed",
        capabilities: ["Dual-Persona", "Reporting"],
        color: "bg-[#020617]",
        rotation: "-rotate-2"
    }
];

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function OpenClawPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#D94126] selection:text-white overflow-hidden font-sans">
            <Navbar variant="transparent" />

            {/* ─── Hero Section ─── */}
            <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Copy */}
                    <div className="space-y-8 relative z-20 text-center lg:text-left">
                        <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.95] text-[#1A1A1A]">
                            Your next ten thousand <br />
                            <span className="text-[#D94126]">sales calls start now.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[#1A1A1A]/70 font-medium leading-normal max-w-2xl mx-auto lg:mx-0 tracking-tight pt-4 font-serif italic">
                            Open Claw agents dial, qualify, handle objections, and book meetings — autonomously. They follow your best playbook with 100% adherence, never burn out, and close in Hindi, English, or Hinglish.
                        </p>

                        <div className="pt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                            <button className="bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Deploy Your Sales Agent
                            </button>
                            <button className="flex items-center justify-center gap-2 text-[#1A1A1A] font-bold text-lg hover:opacity-60 transition-opacity px-6 py-5">
                                Listen to a Live Call <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end scale-90 lg:scale-100">
                        {/* Blob Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D94126]/5 blur-[120px] rounded-full pointer-events-none" />
                        <PhoneMockup />
                    </div>

                </div>
            </section>

            {/* ─── Use Cases Grid ─── */}
            <section className="py-40 px-6 bg-white border-t border-[#1A1A1A]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32 max-w-3xl mx-auto">
                        <span className="text-[#D94126] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-6 block">The Intelligence Ledger</span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1A1A1A] mb-8">
                            Ranked Proofs.
                        </h2>
                        <p className="text-xl text-[#1A1A1A]/60 font-medium font-serif italic">
                            A curation of high-fidelity workflows currently operating at scale across the subcontinent.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {cardData.map((useCase) => (
                            <motion.div
                                key={useCase.rank}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: useCase.rank * 0.1 }}
                            >
                                <Link href={`/open-claw/case-study/${useCase.slug}`} className="block h-full group">
                                    <div className={cn(
                                        "p-12 rounded-[40px] flex flex-col hover:scale-[1.02] hover:rotate-0 transition-all duration-500 shadow-2xl h-[450px] relative overflow-hidden text-white",
                                        useCase.color,
                                        useCase.rotation
                                    )}>
                                        <div className="relative z-10">
                                            <div className="flex justify-end mb-12">
                                                <div className="text-7xl font-mono font-bold opacity-10 tracking-tighter">
                                                    0{useCase.rank}
                                                </div>
                                            </div>

                                            <h3 className="text-4xl font-bold mb-8 leading-[1.1] tracking-tight group-hover:text-primary transition-colors">
                                                {useCase.title}
                                            </h3>

                                            <p className="text-2xl leading-relaxed font-serif italic text-white/70">
                                                "{useCase.workflow}"
                                            </p>
                                        </div>

                                        {/* Background accent */}
                                        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Footer CTA ─── */}
            <footer className="py-24 px-6 bg-[#1A1A1A] text-white text-center rounded-t-[64px] mx-4 lg:mx-8 mb-8">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Stop losing deals to voicemail.
                    </h2>
                    <p className="text-white/60 text-lg">
                        Deploy your first agent in minutes. No credit card required.
                    </p>
                    <div className="flex justify-center pt-4">
                        <button className="bg-[#D94126] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#b0301a] transition-colors shadow-lg hover:shadow-[#D94126]/20">
                            Deploy Your Sales Agent
                        </button>
                    </div>
                    <p className="text-xs text-white/20 pt-16">
                        © 2026 Monade AI.
                    </p>
                </div>
            </footer>
        </div>
    );
}
