"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, CheckCircle2 } from "lucide-react";

// Script Data
const SCRIPT = [
    {
        speaker: "AI",
        text: "Hi Sarah, this is Alex from Monade. I noticed your enterprise plan is up for renewal next Tuesday.",
        highlight: "next Tuesday",
        action: {
            type: "calendar",
            label: "Check Availability",
            result: "Feb 18th: 2pm, 4pm Open",
        },
    },
    {
        speaker: "User",
        text: "Oh right. usage has been high. Can you send me the new volume pricing?",
        delay: 1000,
    },
    {
        speaker: "AI",
        text: "Absolutely. I'm pulling the Q1 rate card now...",
        highlight: "send me the new volume pricing",
        action: {
            type: "email",
            label: "Dispatch Email",
            result: "Pricing_Q1_2025.pdf Sent",
        },
    },
    {
        speaker: "AI",
        text: "Just sent that over. Should I put you down for that 2pm slot on Tuesday to review it?",
        delay: 500,
    },
];

export default function LiveTranscriptDemo() {
    const [currentStep, setCurrentStep] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [showAction, setShowAction] = useState(false);
    const [completedActions, setCompletedActions] = useState<number[]>([]);

    useEffect(() => {
        let charIndex = 0;
        let timeoutId: NodeJS.Timeout;
        const stepData = SCRIPT[currentStep];

        if (!stepData) return;

        // Reset for new step
        setDisplayedText("");
        setShowAction(false);

        const typeWriter = () => {
            if (charIndex < stepData.text.length) {
                setDisplayedText((prev) => prev + stepData.text[charIndex]);
                charIndex++;
                // Varied typing speed for realism
                const speed = Math.random() * 30 + 30;
                timeoutId = setTimeout(typeWriter, speed);
            } else {
                // Finished typing
                if (stepData.action) {
                    setShowAction(true);
                    // Wait for action visual to complete before moving on
                    setTimeout(() => {
                        setCompletedActions((prev) => [...prev, currentStep]);
                        setTimeout(() => setCurrentStep((prev) => prev + 1), 1500);
                    }, 3000);
                } else {
                    // No action, just wait and next
                    setTimeout(() => {
                        setCurrentStep((prev) => prev + 1);
                    }, 1500);
                }
            }
        };

        // Initial delay before starting step
        const startDelay = stepData.delay || 500;
        timeoutId = setTimeout(typeWriter, startDelay);

        return () => clearTimeout(timeoutId);
    }, [currentStep]);

    // Restart loop
    useEffect(() => {
        if (currentStep >= SCRIPT.length) {
            const timeout = setTimeout(() => {
                setCurrentStep(0);
                setCompletedActions([]);
                setDisplayedText("");
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [currentStep]);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white border border-[#1A1A1A]/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">

            {/* Sidebar / Metadata */}
            <div className="w-full md:w-64 bg-[#F5F5F5] border-r border-[#E5E5E5] p-6 flex flex-col gap-6">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">Active Session</span>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold font-mono text-[#1A1A1A]">00:42:15</span>
                    </div>
                </div>

                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">Context</span>
                    <div className="mt-2 space-y-2">
                        <div className="bg-white p-2 rounded border border-[#E5E5E5] text-xs text-[#666]">
                            <span className="font-bold text-[#1A1A1A]">Account:</span> Acme Corp
                        </div>
                        <div className="bg-white p-2 rounded border border-[#E5E5E5] text-xs text-[#666]">
                            <span className="font-bold text-[#1A1A1A]">Intent:</span> Upsell / Renewal
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="text-[10px] uppercase font-bold text-[#D94126] mb-2 tracking-widest">Action Log</div>
                    <div className="space-y-2">
                        {completedActions.map((idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A]"
                            >
                                <CheckCircle2 className="w-3 h-3 text-[#D94126]" />
                                {SCRIPT[idx].action?.label}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Transcript Area */}
            <div className="flex-1 p-8 relative flex flex-col justify-end">
                <div className="space-y-6">
                    {SCRIPT.map((step, idx) => {
                        if (idx > currentStep) return null;

                        const isActive = idx === currentStep;
                        const text = isActive ? displayedText : step.text;
                        const hasAction = !!step.action;
                        const isActionActive = isActive && showAction;
                        const isDone = completedActions.includes(idx);

                        return (
                            <div key={idx} className={`flex gap-4 ${step.speaker === 'AI' ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${step.speaker === 'AI' ? 'bg-[#1A1A1A] text-white' : 'bg-[#E5E5E5] text-[#1A1A1A]'}`}>
                                    {step.speaker === 'AI' ? 'M' : 'U'}
                                </div>

                                <div className={`relative max-w-[80%] p-4 rounded-2xl text-lg leading-relaxed ${step.speaker === 'AI' ? 'bg-[#FDFBF7] border border-[#1A1A1A]/5 text-[#1A1A1A]' : 'bg-white border border-[#E5E5E5] text-[#666]'}`}>
                                    {hasAction ? (
                                        <span>
                                            {text.split(step.highlight!).map((part, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && (
                                                        <span className={`relative inline-block px-1 transition-colors duration-500 ${isActionActive || isDone ? 'bg-[#ff4d00]/10 text-[#D94126] font-semibold rounded' : ''}`}>
                                                            {step.highlight}
                                                            {(isActionActive || isDone) && (
                                                                <motion.div
                                                                    layoutId={`connector-${idx}`}
                                                                    className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-[#D94126]"
                                                                    style={{ y: '100%' }}
                                                                />
                                                            )}
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </span>
                                    ) : (
                                        <span>{text}</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Action Card Layer */}
                <AnimatePresence>
                    {showAction && SCRIPT[currentStep].action && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute bottom-8 right-8 z-20 w-72 bg-[#1A1A1A] text-white rounded-xl shadow-2xl p-4 overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                                <div className="w-8 h-8 rounded bg-[#D94126] flex items-center justify-center">
                                    {SCRIPT[currentStep].action.type === 'calendar' ? <Calendar className="w-4 h-4 text-white" /> : <Mail className="w-4 h-4 text-white" />}
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Open Claw</div>
                                    <div className="text-sm font-bold">{SCRIPT[currentStep].action.label}</div>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded p-3 text-sm font-mono text-white/80">
                                &gt; {SCRIPT[currentStep].action.result}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
