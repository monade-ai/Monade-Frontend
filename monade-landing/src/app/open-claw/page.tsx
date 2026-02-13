"use client";
import React from "react";
import { Phone, BarChart3, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import LiveTranscriptDemo from "@/components/LiveTranscriptDemo";

export default function OpenClawPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#D94126] selection:text-white overflow-hidden font-sans">
            <Navbar variant="black" />

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
                <div className="max-w-5xl mx-auto text-center space-y-8 relative z-20">
                    <h1 className="text-7xl md:text-[7rem] font-bold tracking-tighter leading-[0.9] text-[#1A1A1A]">
                        Your best sales rep <br />
                        <span className="text-[#D94126]">is a crab.</span>
                    </h1>

                    <p className="text-xl md:text-3xl text-[#1A1A1A]/70 font-medium leading-normal max-w-4xl mx-auto tracking-tight pt-4">
                        Open Claw agents don't just chat. They dial, they pitch, they negotiate, and they close. Deploy a full-blown autonomous sales vertical in minutes.
                    </p>

                    <div className="pt-8 flex justify-center gap-6">
                        <button className="bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Deploy Sales Force
                        </button>
                        <button className="flex items-center gap-2 text-[#1A1A1A] font-bold text-lg hover:opacity-60 transition-opacity px-6 py-5">
                            Listen to Calls <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <NetworkVisualization />
                </div>
            </section>

            {/* Live Demo Section */}
            <section className="relative z-20 -mt-20 px-6 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#D94126] font-mono text-xs uppercase tracking-widest font-bold">Live Execution Trace</span>
                    </div>
                    <LiveTranscriptDemo />
                </div>
            </section>

            {/* The "Why" Section */}
            <section className="py-32 px-6 bg-white border-t border-[#1A1A1A]/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl font-bold tracking-tight mb-8 leading-tight">
                            Scale your revenue, <br />
                            <span className="text-[#D94126]">not your headcount.</span>
                        </h2>
                        <p className="text-xl text-[#1A1A1A]/60 leading-relaxed mb-8">
                            Hiring, training, and managing a sales floor is slow and expensive. Open Claw agents are trained instantly, never sleep, and follow your playbook with 100% adherence.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Unlimited concurrent calls",
                                "Perfect script adherence",
                                "Instant CRM updates",
                                "Zero emotional burnout"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                    <CheckCircle2 className="w-6 h-6 text-[#D94126]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Visual: Growth Chart / Call Volume */}
                    <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-[#1A1A1A]/5 aspect-square flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <div className="relative z-10 text-center">
                            <div className="text-8xl font-bold text-[#D94126] mb-2">10k+</div>
                            <div className="text-xl font-medium text-[#1A1A1A]/60">Daily Outbound Dials</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases - Bento Grid */}
            <section className="py-32 px-6 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Full-Cycle Sales Automation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#1A1A1A]/5 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-8">
                                <Phone className="w-8 h-8 text-[#1A1A1A]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Outbound Lead Gen.</h3>
                            <p className="text-[#1A1A1A]/60 leading-relaxed">
                                Cold calling at scale. Open Claw qualifies leads, handles objections, and books meetings directly on your calendar.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#1A1A1A] text-white p-10 rounded-3xl shadow-xl border border-[#1A1A1A]/5 transform md:-translate-y-4">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Inbound Conversion.</h3>
                            <p className="text-white/60 leading-relaxed">
                                Never miss a lead. Instant response to inbound inquiries, qualifying intent and routing hot leads to human closers (or closing them itself).
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#1A1A1A]/5 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-8">
                                <BarChart3 className="w-8 h-8 text-[#D94126]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Revenue Ops.</h3>
                            <p className="text-[#1A1A1A]/60 leading-relaxed">
                                Automated follow-ups, renewal reminders, and payment collections. Ensure your revenue pipeline is always flowing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 bg-white border-t border-[#1A1A1A]/10 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A]">
                        Ready to automate your sales floor?
                    </h2>
                    <div className="flex justify-center gap-4">
                        <button className="bg-[#D94126] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b0301a] transition-colors shadow-lg">
                            Get Early Access
                        </button>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/30 pt-12">
                        © 2025 Monade AI.
                    </p>
                </div>
            </footer>
        </div>
    );
}

// Background visualization of "Connecting Calls"
function NetworkVisualization() {
    return (
        <div className="w-full h-full relative opacity-30">
            {/* Use basic SVG shapes for now to ensure performance and simpler code */}
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
                <circle cx="200" cy="200" r="2" fill="#D94126" className="animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="800" cy="300" r="2" fill="#D94126" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                <circle cx="500" cy="500" r="2" fill="#D94126" className="animate-ping" style={{ animationDuration: '4s' }} />
                <circle cx="100" cy="800" r="2" fill="#D94126" className="animate-ping" style={{ animationDuration: '3.5s' }} />
                <circle cx="900" cy="700" r="2" fill="#D94126" className="animate-ping" style={{ animationDuration: '2.8s' }} />

                {/* Connecting lines */}
                <path d="M200 200 Q 500 100 800 300" stroke="#1A1A1A" strokeWidth="0.5" fill="none" strokeDasharray="5,5" opacity="0.2" />
                <path d="M200 200 Q 100 500 500 500" stroke="#1A1A1A" strokeWidth="0.5" fill="none" strokeDasharray="5,5" opacity="0.2" />
                <path d="M800 300 Q 900 600 500 500" stroke="#1A1A1A" strokeWidth="0.5" fill="none" strokeDasharray="5,5" opacity="0.2" />
            </svg>
        </div>
    );
}
