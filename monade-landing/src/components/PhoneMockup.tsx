'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    MoreVertical, CheckCheck, Smile, Paperclip, 
    Camera, Mic, Phone, Video, ChevronLeft,
    FileText, X, Download, Share2, Search
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "agent";
    text: string;
    time: string;
    type?: "text" | "file";
    fileName?: string;
}

const initialMessages: Message[] = [
    {
        role: "user",
        text: "Set up an inbound call script for our real estate leads. Hindi-English, permission-based opening.",
        time: "10:02",
    },
    {
        role: "agent",
        text: "Done. 8-stage script generated with cultural compliance baked in. Opening: Identity → Context → Permission in 8 seconds. Talk ratio locked at 43:57. Ready to deploy?",
        time: "10:02",
    },
    {
        role: "user",
        text: "Deploy it. Also run an outbound campaign to the 500 leads from last week.",
        time: "10:03",
    },
    {
        role: "agent",
        text: "Campaign live. 500 calls queued. I'll analyze responses tonight and iterate the script by morning. ☕",
        time: "10:03",
    },
];

const TranscriptsDoc = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute inset-x-0 top-8 bottom-0 bg-white z-[60] flex flex-col shadow-2xl rounded-t-2xl overflow-hidden"
                >
                    {/* Word-style Header */}
                    <div className="bg-[#2b579a] text-white p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            <span className="text-xs font-semibold truncate max-w-[180px]">Leads_Analysis_Feb16.docx - Word</span>
                        </div>
                        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded">
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Word Toolbar UI */}
                    <div className="bg-[#f3f2f1] border-b border-gray-300 p-1.5 flex gap-3 px-3">
                        <div className="w-4 h-4 bg-gray-400/20 rounded" />
                        <div className="w-4 h-4 bg-gray-400/20 rounded" />
                        <div className="w-4 h-4 bg-gray-400/20 rounded" />
                        <div className="ml-auto flex gap-2">
                            <Share2 className="w-3.5 h-3.5 text-gray-500" />
                            <Download className="w-3.5 h-3.5 text-gray-500" />
                        </div>
                    </div>

                    {/* Document Content */}
                    <div className="flex-1 bg-gray-100 overflow-y-auto p-2">
                        <div className="bg-white shadow-sm min-h-full p-3 font-serif">
                            <h2 className="text-sm font-bold border-b border-gray-300 pb-2 mb-3 text-gray-800">
                                Qualified Leads Analysis - Outbound Run #502
                            </h2>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-[9px] border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="border border-gray-300 p-1 text-left">Name</th>
                                            <th className="border border-gray-300 p-1 text-left">Lead Score</th>
                                            <th className="border border-gray-300 p-1 text-left">Summary</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="border border-gray-300 p-1 font-semibold">Amit Khanna</td>
                                            <td className="border border-gray-300 p-1 text-green-600 font-bold">94/100</td>
                                            <td className="border border-gray-300 p-1">High intent; 3BHK in Gurgaon; Move-in: 30 days.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-1 font-semibold">Siddharth M.</td>
                                            <td className="border border-gray-300 p-1 text-green-600 font-bold">91/100</td>
                                            <td className="border border-gray-300 p-1">Confirmed budget; Requesting site visit Saturday.</td>
                                        </tr>
                                        <tr className="bg-blue-50/30">
                                            <td className="border border-gray-300 p-1 font-semibold">Priya Sharma</td>
                                            <td className="border border-gray-300 p-1 text-orange-600 font-bold">88/100</td>
                                            <td className="border border-gray-300 p-1">Interested; Awaiting bank loan pre-approval.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-[10px] font-bold text-gray-700 mb-1">Key Transcript Excerpt (Amit Khanna):</h3>
                                <div className="bg-gray-50 p-2 border-l-2 border-blue-500 italic text-[8.5px] leading-relaxed text-gray-600">
                                    "Yes, I'm looking for a premium 3BHK. My company is relocating me to Gurgaon next month, so I need to finalize the deal quickly. Is the site office open this weekend?"
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const PhoneMockup = () => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [isDocOpen, setIsDocOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    useEffect(() => {
        const runSequence = async () => {
            // Stage 1: Request Transcripts
            await new Promise(r => setTimeout(r, 4000));
            setMessages(prev => [...prev, {
                role: "user",
                text: "can you send me the transcripts",
                time: "10:04"
            }]);

            // Stage 2: Agent Delivery
            await new Promise(r => setTimeout(r, 1500));
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 2000));
            setIsTyping(false);
            setMessages(prev => [...prev, 
                {
                    role: "agent",
                    text: "Sure, here are the qualified leads from today's outbound run.",
                    time: "10:04"
                },
                {
                    role: "agent",
                    text: "Leads_Analysis_Feb16.docx",
                    time: "10:04",
                    type: "file",
                    fileName: "Leads_Analysis_Feb16.docx"
                }
            ]);

            // Stage 3: Open Document
            await new Promise(r => setTimeout(r, 2000));
            setIsDocOpen(true);

            // Stage 4: Review Time
            await new Promise(r => setTimeout(r, 5000));
            setIsDocOpen(false);

            // Stage 5: Final Evaluation
            await new Promise(r => setTimeout(r, 1500));
            setMessages(prev => [...prev, {
                role: "user",
                text: "okay what do you think?",
                time: "10:05"
            }]);

            await new Promise(r => setTimeout(r, 1500));
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 2500));
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "agent",
                text: "I find these leads promising. Particularly the ones with scores above 90—they're ready for immediate conversion. I'll follow up with them via text messages now.",
                time: "10:05"
            }]);

            // Stage 6: Agent feedback on conversion rates / analysis
            await new Promise(r => setTimeout(r, 4000));
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 4000));
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "agent",
                text: "I've noticed our conversion rates have dropped. An analysis shows the agent isn't able to respond to queries about RERA status, and some customers are asking for nearest landmarks. I need these details to improve the script.",
                time: "10:15"
            }]);

            // Stage 7: Agent requests documents
            await new Promise(r => setTimeout(r, 2000));
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 3000));
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "agent",
                text: "I see. That's a a critical gap. To ensure I handle these specific objections correctly, could you please upload the RERA documentation and a list of key landmarks? I can integrate them into the script's knowledge base.",
                time: "10:16"
            }]);

            // Stage 8: User uploads documents
            await new Promise(r => setTimeout(r, 2000));
            setMessages(prev => [...prev, {
                role: "user",
                text: "sure",
                time: "10:17"
            }]);
            await new Promise(r => setTimeout(r, 1000));
            setMessages(prev => [...prev, 
                { role: "user", text: "RERA_Allotment_Letter.pdf", time: "10:17", type: "file", fileName: "RERA_Allotment_Letter.pdf" },
                { role: "user", text: "Agreement_for_Sale.pdf", time: "10:17", type: "file", fileName: "Agreement_for_Sale.pdf" },
                { role: "user", text: "Project_Layout_Plan.pdf", time: "10:17", type: "file", fileName: "Project_Layout_Plan.pdf" }
            ]);

            // Stage 9: Agent confirms script update and campaign pause
            await new Promise(r => setTimeout(r, 4000));
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 3500));
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "agent",
                text: "Thanks. I've analyzed the documents and updated the script's knowledge base to handle RERA and landmark queries. The new script version is ready. I've paused the current campaign. Shall I resume it with the updated script?",
                time: "10:20"
            }]);

            // Stage 10: User approves
            await new Promise(r => setTimeout(r, 2000));
            setMessages(prev => [...prev, {
                role: "user",
                text: "sure",
                time: "10:21"
            }]);

            // Stage 11: Agent reports success
            await new Promise(r => setTimeout(r, 2000));
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 3000)); // Simulate "resuming campaign"
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "agent",
                text: "Campaign resumed with the new script.",
                time: "10:21"
            }]);
            await new Promise(r => setTimeout(r, 5000)); // Simulate campaign running
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 4000));
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "agent",
                text: "The campaign is complete. We've increased the conversion rate for site visits by 3%. I'm emailing you and the team the full reports now.",
                time: "10:26"
            }]);
        };

        runSequence();
    }, []);

    return (
        <div className="relative w-[340px] h-[680px] scale-90 md:scale-100 group">
            
            {/* ─── Physical Chassis ─── */}
            <div className="absolute inset-0 bg-[#080C14] rounded-[54px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-[1px] border-white/5" />
            
            <div className="absolute inset-[2px] rounded-[52px] border-[2px] border-slate-800 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]" />
            <div className="absolute inset-[10px] bg-black rounded-[44px] shadow-[0_0_0_4px_#1f2c34]" />

            <div className="absolute top-24 -left-0.5 w-[2px] h-8 bg-gradient-to-b from-slate-800 to-slate-950 rounded-l-sm shadow-sm" />
            <div className="absolute top-40 -left-0.5 w-[2px] h-14 bg-gradient-to-b from-slate-800 to-slate-950 rounded-l-sm shadow-sm" />
            <div className="absolute top-60 -left-0.5 w-[2px] h-14 bg-gradient-to-b from-slate-800 to-slate-950 rounded-l-sm shadow-sm" />
            <div className="absolute top-40 -right-0.5 w-[2px] h-20 bg-gradient-to-b from-slate-800 to-slate-950 rounded-r-sm shadow-sm" />

            {/* ─── The Display ─── */}
            <div className="absolute inset-[14px] rounded-[40px] overflow-hidden bg-[#0b141a] flex flex-col font-sans select-none z-10">

                <TranscriptsDoc isOpen={isDocOpen} onClose={() => setIsDocOpen(false)} />

                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-50 opacity-20" />

                {/* Status Bar */}
                <div className="h-8 px-8 pt-2 flex justify-between items-center text-[10px] font-medium text-white/90 relative z-20">
                    <span>10:05</span>
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

                {/* Chat Area */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto relative flex flex-col p-3 bg-[#0b141a] scroll-smooth">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none grayscale invert" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px' }} />

                    <div className="self-center my-3 px-3 py-1 bg-[#182229] rounded-lg text-[#8696a0] text-[11px] font-medium shadow-sm z-10">
                        TODAY
                    </div>

                    <div className="space-y-1 relative z-10">
                        <AnimatePresence initial={false}>
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={`msg-${i}`}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} mb-1`}
                                >
                                    <div
                                        className={cn(
                                            "relative p-2 px-2.5 rounded-lg text-[13px] max-w-[85%] shadow-md",
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

                                        {msg.type === 'file' ? (
                                            <div 
                                                className="flex items-center gap-3 p-1 cursor-pointer"
                                                onClick={() => setIsDocOpen(true)}
                                            >
                                                <div className="w-10 h-10 bg-[#2b579a] rounded flex items-center justify-center shadow-inner">
                                                    <FileText className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[12px] font-medium truncate">{msg.fileName}</p>
                                                    <p className="text-[10px] text-white/50">24 KB • DOCX</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="leading-[1.4] pr-10">{msg.text}</div>
                                        )}
                                        
                                        <div className="flex items-center gap-1 absolute bottom-1 right-1.5">
                                            <span className="text-[9px] text-white/50">{msg.time}</span>
                                            {msg.role === "user" && (
                                                <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start mb-2"
                                >
                                    <div className="bg-[#202c33] p-2 px-4 rounded-lg rounded-tl-none flex gap-1">
                                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" />
                                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" />
                                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Input Bar */}
                <div className="bg-[#0b141a] flex items-center gap-2 relative z-20 pb-10 pt-2 px-2">
                    <div className="flex-1 bg-[#2a3942] rounded-full h-[40px] flex items-center px-3 gap-3">
                        <Smile className="w-5 h-5 text-[#8696a0]" />
                        <span className="text-[#8696a0] text-[14px] flex-1">Message</span>
                        <Paperclip className="w-5 h-5 text-[#8696a0] -rotate-45" />
                        <Camera className="w-5 h-5 text-[#8696a0]" />
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full bg-[#00a884] flex items-center justify-center shadow-lg">
                        <Mic className="w-5 h-5 text-[#0b141a]" />
                    </div>
                </div>

            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20" />
        </div>
    );
};

export default PhoneMockup;

