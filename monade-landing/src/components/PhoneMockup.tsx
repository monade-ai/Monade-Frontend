'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
    MoreVertical, CheckCheck, Smile, Paperclip, 
    Camera, Mic, Phone, Video, ChevronLeft 
} from "lucide-react";
import { cn } from "@/lib/utils";

export const chatMessages = [
    {
        role: "user" as const,
        text: "Set up an inbound call script for our real estate leads. Hindi-English, permission-based opening.",
        time: "10:02",
    },
    {
        role: "agent" as const,
        text: "Done. 8-stage script generated with cultural compliance baked in. Opening: Identity → Context → Permission in 8 seconds. Talk ratio locked at 43:57. Ready to deploy?",
        time: "10:02",
    },
    {
        role: "user" as const,
        text: "Deploy it. Also run an outbound campaign to the 500 leads from last week.",
        time: "10:03",
    },
    {
        role: "agent" as const,
        text: "Campaign live. 500 calls queued. I'll analyze responses tonight and iterate the script by morning. ☕",
        time: "10:03",
    },
];

export const PhoneMockup = () => {
    return (
        <div className="relative w-[340px] h-[680px] scale-90 md:scale-100 group">
            
            {/* ─── Physical Chassis (The Machined Slab) ─── */}
            <div className="absolute inset-0 bg-[#080C14] rounded-[54px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-[1px] border-white/5" />
            
            {/* Milled Edge (The Bevel) */}
            <div className="absolute inset-[2px] rounded-[52px] border-[2px] border-slate-800 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]" />
            
            {/* Polished Glass Edge (The Handshake) */}
            <div className="absolute inset-[10px] bg-black rounded-[44px] shadow-[0_0_0_4px_#1f2c34]" />

            {/* Hardware: Action Button (Side) */}
            <div className="absolute top-24 -left-0.5 w-[2px] h-8 bg-gradient-to-b from-slate-800 to-slate-950 rounded-l-sm shadow-sm" />
            {/* Hardware: Volume Rockers */}
            <div className="absolute top-40 -left-0.5 w-[2px] h-14 bg-gradient-to-b from-slate-800 to-slate-950 rounded-l-sm shadow-sm" />
            <div className="absolute top-60 -left-0.5 w-[2px] h-14 bg-gradient-to-b from-slate-800 to-slate-950 rounded-l-sm shadow-sm" />
            {/* Hardware: Power Button */}
            <div className="absolute top-40 -right-0.5 w-[2px] h-20 bg-gradient-to-b from-slate-800 to-slate-950 rounded-r-sm shadow-sm" />

            {/* ─── The Display ─── */}
            <div className="absolute inset-[14px] rounded-[40px] overflow-hidden bg-[#0b141a] flex flex-col font-sans select-none z-10">

                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-50 opacity-20" />

                {/* Status Bar */}
                <div className="h-8 px-8 pt-2 flex justify-between items-center text-[10px] font-medium text-white/90 relative z-20">
                    <span>10:03</span>
                    <div className="flex items-center gap-1.5">
                        <div className="flex items-end gap-[1px] h-2.5">
                            <div className="w-[2px] h-[4px] bg-white rounded-[0.5px]" />
                            <div className="w-[2px] h-[6px] bg-white rounded-[0.5px]" />
                            <div className="w-[2px] h-[8px] bg-white/40 rounded-[0.5px]" />
                            <div className="w-[2px] h-[10px] bg-white/40 rounded-[0.5px]" />
                        </div>
                        <div className="w-4 h-2.5 border border-white/40 rounded-[2px] p-[1px] relative flex items-center">
                            <div className="h-full w-3/4 bg-white rounded-[0.5px]" />
                        </div>
                    </div>
                </div>

                {/* WhatsApp Header */}
                <div className="h-14 bg-[#202c33] px-2 flex items-center justify-between border-b border-white/5 pt-1">
                    <div className="flex items-center gap-1">
                        <ChevronLeft className="w-5 h-5 text-[#00a884] -ml-1" />
                        <div className="w-9 h-9 rounded-full bg-[#6a7175] flex items-center justify-center overflow-hidden border border-white/10">
                            <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=100&h=100" alt="Agent" className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-1">
                            <h3 className="text-[#e9edef] text-[15px] font-medium leading-none">MonadeClaw</h3>
                            <p className="text-[#8696a0] text-[11px] mt-1.5">online</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 text-[#aebac1] mr-2">
                        <Video className="w-5 h-5" />
                        <Phone className="w-4.5 h-4.5" />
                        <MoreVertical className="w-5 h-5" />
                    </div>
                </div>

                {/* Chat Area with Pattern */}
                <div className="flex-1 overflow-hidden relative flex flex-col p-3 bg-[#0b141a]">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none grayscale invert" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px' }} />

                    <div className="self-center my-3 px-3 py-1 bg-[#182229] rounded-lg text-[#8696a0] text-[11px] font-medium shadow-sm z-10">
                        TODAY
                    </div>

                    <div className="space-y-1 relative z-10">
                        {chatMessages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-1`}
                            >
                                <div
                                    className={cn(
                                        "relative p-2 px-2.5 rounded-lg text-[13.5px] max-w-[85%] shadow-md",
                                        msg.role === "user"
                                            ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                                            : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                                    )}
                                >
                                    {msg.role === "user" ? (
                                        <svg className="absolute -right-2 top-0 text-[#005c4b] w-3 h-3" viewBox="0 0 8 13"><path fill="currentColor" d="M5.188,1H0v11.193l6.467-8.625C7.526,2.156,6.958,1,5.188,1z"/></svg>
                                    ) : (
                                        <svg className="absolute -left-2 top-0 text-[#202c33] w-3 h-3 scale-x-[-1]" viewBox="0 0 8 13"><path fill="currentColor" d="M5.188,1H0v11.193l6.467-8.625C7.526,2.156,6.958,1,5.188,1z"/></svg>
                                    )}

                                    <div className="leading-[1.4] pr-12">{msg.text}</div>
                                    <div className="flex items-center gap-1 absolute bottom-1 right-1.5">
                                        <span className="text-[10px] text-white/50">{msg.time}</span>
                                        {msg.role === "user" && (
                                            <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Input Bar */}
                <div className="bg-[#0b141a] flex items-center gap-2 relative z-20 pb-10 pt-2 px-2">
                    <div className="flex-1 bg-[#2a3942] rounded-full h-[42px] flex items-center px-3 gap-3">
                        <Smile className="w-6 h-6 text-[#8696a0]" />
                        <span className="text-[#8696a0] text-[15px] flex-1">Message</span>
                        <Paperclip className="w-5 h-5 text-[#8696a0] -rotate-45" />
                        <Camera className="w-6 h-6 text-[#8696a0]" />
                    </div>
                    <div className="w-[42px] h-[42px] rounded-full bg-[#00a884] flex items-center justify-center shadow-lg">
                        <Mic className="w-5 h-5 text-[#0b141a]" />
                    </div>
                </div>

            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20" />
        </div>
    );
};

export default PhoneMockup;
