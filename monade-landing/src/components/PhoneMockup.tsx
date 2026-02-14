'use client';

import React from "react";
import { motion } from "framer-motion";
import { Bot, MoreVertical, Send, CheckCheck, Zap } from "lucide-react";

export const chatMessages = [
    {
        role: "user" as const,
        text: "Set up an inbound call script for our real estate leads. Hindi-English, permission-based opening.",
        time: "10:02 AM",
    },
    {
        role: "agent" as const,
        text: "Done. 8-stage script generated with cultural compliance baked in. Opening: Identity → Context → Permission in 8 seconds. Talk ratio locked at 43:57. Ready to deploy?",
        time: "10:02 AM",
    },
    {
        role: "user" as const,
        text: "Deploy it. Also run an outbound campaign to the 500 leads from last week.",
        time: "10:03 AM",
    },
    {
        role: "agent" as const,
        text: "Campaign live. 500 calls queued. I'll analyze responses tonight and iterate the script by morning. ☕",
        time: "10:03 AM",
    },
];

export const PhoneMockup = () => {
    return (
        <div className="relative w-[340px] h-[680px] bg-black rounded-[54px] border-[10px] border-[#1f2c34]/50 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Screen */}
            <div className="absolute inset-0 bg-[#0b141a] flex flex-col font-sans">

                {/* Status Bar */}
                <div className="h-10 px-8 flex justify-between items-center text-[11px] font-bold text-[#e9edef]">
                    <span>10:03</span>
                    <div className="flex items-center gap-1.5">
                        <div className="flex items-end gap-[1.5px] h-3">
                            <div className="w-[3px] h-1.5 bg-[#e9edef] rounded-[0.5px]" />
                            <div className="w-[3px] h-2 bg-[#e9edef] rounded-[0.5px]" />
                            <div className="w-[3px] h-2.5 bg-[#e9edef] rounded-[0.5px]" />
                            <div className="w-[3px] h-3 bg-[#e9edef] rounded-[0.5px]" />
                        </div>
                        <span className="text-[10px] font-black -mt-0.5">5G</span>
                        <div className="w-5.5 h-3 border border-white/30 rounded-[3px] p-[1.5px] relative flex items-center">
                            <div className="h-full w-3/4 bg-[#4ade80] rounded-[1px]" />
                            <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[3.5px] bg-white/30 rounded-r-full" />
                        </div>
                    </div>
                </div>

                {/* Chat Header */}
                <div className="h-14 bg-[#1f2c34] px-3 flex items-center justify-between shadow-md relative z-10">
                    <div className="flex items-center gap-2">
                        {/* Agent Avatar */}
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center border border-white/10">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h3 className="text-[#e9edef] text-[14px] font-semibold leading-none">Open Claw Agent</h3>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <p className="text-emerald-400/70 text-[10px] font-medium">Monade Plugin Active</p>
                            </div>
                        </div>
                    </div>
                    <MoreVertical className="w-5 h-5 text-[#8696a0]" />
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-hidden relative flex flex-col p-3 bg-[#0b141a]">
                    {/* Date Bubble */}
                    <div className="self-center my-3 px-3 py-1 bg-[#182229] rounded-lg text-[#8696a0] text-[10px] font-medium uppercase tracking-wide">
                        Today
                    </div>

                    {/* Messages */}
                    <div className="space-y-2.5">
                        {chatMessages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.25 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                            >
                                <div
                                    className={`relative p-2.5 px-3 rounded-xl text-[12px] max-w-[88%] shadow-sm ${msg.role === "user"
                                        ? "bg-[#202c33] rounded-tr-none text-[#e9edef]"
                                        : "bg-[#005c4b] rounded-tl-none text-[#e9edef]"
                                        }`}
                                >
                                    {/* Tail */}
                                    {msg.role === "user" ? (
                                        <div className="absolute -right-1.5 top-0 w-3 h-3 bg-[#202c33] [clip-path:polygon(0_0,100%_0,0_100%)]" />
                                    ) : (
                                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#005c4b] [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                                    )}

                                    {/* Monade tag on agent messages */}
                                    {msg.role === "agent" && (
                                        <div className="flex items-center gap-1 mb-1">
                                            <Zap className="w-2.5 h-2.5 text-emerald-300" />
                                            <span className="text-[9px] font-bold text-emerald-300/80 uppercase tracking-wider">Monade</span>
                                        </div>
                                    )}

                                    <span className="leading-snug">{msg.text}</span>
                                    <div className={`flex items-center gap-1 mt-1 ${msg.role === "user" ? "justify-end" : "justify-end"}`}>
                                        <span className="text-[10px] text-white/40">{msg.time}</span>
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
                <div className="bg-[#0b141a] p-2 px-3 pb-6 flex items-center gap-2">
                    <div className="flex-1 bg-[#2a3942] rounded-full h-10 flex items-center px-4 gap-3">
                        <span className="text-[#8696a0] text-sm flex-1">Ask your agent...</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                        <Send className="w-4 h-4 text-white" />
                    </div>
                </div>

            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
        </div>
    );
};

export default PhoneMockup;
