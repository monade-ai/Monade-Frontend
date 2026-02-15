'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Pause, Phone, X, ChevronRight, Mic2,
  Car, Building, ShoppingBag, Utensils
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data Layer: Industrial B2B Protocols ───
const AGENTS = [
  {
    id: "taxi",
    name: "Ravi",
    category: "Logistics",
    description: "Night Dispatch Automation",
    icon: <Car className="w-4 h-4" />,
    role: "Automated Fleet Dispatcher",
    specialty: "Route Optimization",
    color: "bg-[#D97757]", // Burnt Clay
    recordLabel: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=200&h=200",
    instructionScript: "1. Capture pickup/drop coordinates. 2. Query Driver Webhook. 3. Confirm Vehicle MH-02-CD.",
    transcript: [
      { speaker: 'agent', text: "Namaste, GoFleet. Pune drop?" },
      { speaker: 'customer', text: "Yes, just landed at T2. Need a ride to Pune." },
      { speaker: 'agent', text: "One moment... Found one. Suresh is 4 mins away." },
      { speaker: 'customer', text: "Great, what's the car number?" },
      { speaker: 'agent', text: "White Ertiga, MH-02-CD-5512. Details sent via WhatsApp." }
    ]
  },
  {
    id: "realestate",
    name: "Ananya",
    category: "Real Estate",
    description: "High-Intent Lead Qual",
    icon: <Building className="w-4 h-4" />,
    role: "Luxury Property Consultant",
    specialty: "High-Intent Filtering",
    color: "bg-[#708894]", // Steel Blue
    recordLabel: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=200&h=200",
    instructionScript: "1. Filter for Research vs Investment. 2. Qualify budget (>₹5Cr). 3. Book site visit via API.",
    transcript: [
      { speaker: 'agent', text: "Honestly, most people are just browsing—are you actively looking?" },
      { speaker: 'customer', text: "Looking for investment options in Worli." },
      { speaker: 'agent', text: "Perfect. pre-launch offer ends Tuesday. Site visit?" },
      { speaker: 'customer', text: "Can you arrange pickup for Sunday 4 PM?" },
      { speaker: 'agent', text: "Confirmed. Triggering driver assignment protocol." }
    ]
  },
  {
    id: "ecommerce",
    name: "Priya",
    category: "E-Commerce",
    description: "Post-Purchase Support",
    icon: <ShoppingBag className="w-4 h-4" />,
    role: "Support Automation Hero",
    specialty: "Shopify API / WISMO",
    color: "bg-[#869781]", // Sage Green
    recordLabel: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=200&h=200",
    instructionScript: "1. Authenticate Order ID. 2. Pull Shopify status. 3. Process priority return labels.",
    transcript: [
      { speaker: 'agent', text: "Hi Priya! Calling about your order for the Blue Linen Shirt?" },
      { speaker: 'customer', text: "Yes! It was supposed to be here yesterday." },
      { speaker: 'agent', text: "Delayed at Bhiwandi due to rain. Delivery expected tomorrow." },
      { speaker: 'customer', text: "Can you make it urgent?" },
      { speaker: 'agent', text: "Already flagged for priority. Check your WhatsApp now." }
    ]
  },
  {
    id: "restaurant",
    name: "Vikram",
    category: "Hospitality",
    description: "Reservation & Host Control",
    icon: <Utensils className="w-4 h-4" />,
    role: "Cloud Kitchen Sales Host",
    specialty: "Upselling / POS Sync",
    color: "bg-[#C2A370]", // Muted Ochre
    recordLabel: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=200&h=200",
    instructionScript: "1. Sync with Petpooja POS. 2. Mandatory upsell: Dessert. 3. Print KOT in kitchen.",
    transcript: [
      { speaker: 'agent', text: "Biryani Blues, Namaste. Two Chicken Dum?" },
      { speaker: 'customer', text: "Yes, for delivery." },
      { speaker: 'agent', text: "Typically people order Double Ka Meetha with that. Add one for ₹150?" },
      { speaker: 'customer', text: "Sure, add one." },
      { speaker: 'agent', text: "Done. Your order is at the kitchen station now." }
    ]
  }
];

const SchematicRecord = ({ isPlaying, image }: { isPlaying: boolean, image: string }) => (
  <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] flex items-center justify-center">
    <motion.div
      animate={{ rotate: isPlaying ? 360 : 0 }}
      transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" } }}
      className="relative w-full h-full rounded-full border border-black/20 flex items-center justify-center bg-white/5 shadow-inner"
    >
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute rounded-full border border-black/10" style={{ inset: `${(i + 1) * 24}px` }} />
      ))}
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/20 bg-white p-1 shadow-sm overflow-hidden">
        <img src={image} alt="Label" className="w-full h-full object-cover rounded-full opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#1E293B] rounded-full border border-white/20 shadow-inner" />
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ rotate: -25 }}
      animate={isPlaying ? { rotate: [-10, 15] } : { rotate: -25 }}
      transition={isPlaying ? { rotate: { duration: 60, ease: "linear" } } : { type: "spring", stiffness: 100, damping: 15 }}
      className="absolute -top-8 right-4 w-10 h-56 origin-top z-20 pointer-events-none"
    >
        <div className="w-10 h-10 border border-black/40 bg-[#1E293B] rounded-full mb-1 shadow-lg" />
        <div className="w-1 h-44 bg-black/20 mx-auto relative shadow-sm">
            <div className="absolute bottom-[-2px] left-[-4px] w-3 h-7 border border-black/40 bg-[#1E293B] flex items-center justify-center shadow-lg">
                <div className="w-[1px] h-3 bg-white/30" />
            </div>
        </div>
    </motion.div>
  </div>
);

export const AgentGramophone = () => {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'transcript' | 'script'>('transcript');
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [turnIndex, setTurnIndex] = useState(-1);
  const transcriptScrollRef = useRef<HTMLDivElement>(null);

  const agent = AGENTS[currentAgentIndex];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setTurnIndex(prev => (prev + 1) % agent.transcript.length);
      }, 2000); 
    } else {
      setTurnIndex(-1);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, agent]);

  useEffect(() => {
    if (transcriptScrollRef.current) {
        if (turnIndex === -1) {
            transcriptScrollRef.current.scrollTop = 0;
        } else if (turnIndex > 1) {
            transcriptScrollRef.current.scrollTop = (turnIndex - 1) * 80;
        }
    }
  }, [turnIndex]);

  return (
    <section className="pb-32 px-6 bg-white overflow-visible relative selection:bg-black/10 font-sans antialiased text-black border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* ─── Track Selector - Minimalist Pill Pushed Up ─── */}
        <div className="relative flex justify-center -translate-y-1/2 z-50">
          <div className="bg-white/70 backdrop-blur-xl p-1 rounded-2xl flex flex-wrap items-center justify-center gap-1 border border-slate-200 shadow-sm">
            {AGENTS.map((track, idx) => (
              <div key={track.id} className="relative group">
                {/* Descriptive Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-[#0F172A] text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50 whitespace-nowrap shadow-2xl scale-95 group-hover:scale-100 origin-bottom">
                    {track.description}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-[#0F172A]" />
                </div>

                <button
                    onClick={() => {
                        setCurrentAgentIndex(idx);
                        setIsPlaying(false);
                        setTurnIndex(-1);
                    }}
                    className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl z-10 transition-all active:scale-95 group/btn"
                >
                    <div className={cn(
                        "transition-colors duration-300",
                        currentAgentIndex === idx ? "text-slate-900" : "text-slate-400 group-hover/btn:text-slate-600"
                    )}>
                    {track.icon}
                    </div>
                    <span className={cn(
                        "text-[13px] font-semibold tracking-tight transition-colors duration-300",
                        currentAgentIndex === idx ? "text-slate-900" : "text-slate-400 group-hover/btn:text-slate-600"
                    )}>
                        {track.category}
                    </span>
                    
                    {currentAgentIndex === idx && (
                    <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 z-[-1] bg-slate-100/80 rounded-xl"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                    )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ─── The Main Engineering Deck ─── */}
        <div className={cn(
            "rounded-[32px] border border-black/10 transition-colors duration-700 p-4 shadow-sm",
            agent.color
        )}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch relative z-10">
            
            {/* Left Column: Tabbed Logic & High-Contrast Diarization */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-black/5 rounded-[24px] border border-black/10 p-6 lg:p-10 flex-1 flex flex-col overflow-hidden relative min-h-[350px] lg:min-h-[500px]">
                
                <div className="flex gap-1 bg-black/10 p-1 rounded-xl mb-10 w-fit border border-black/5">
                    <button onClick={() => setActiveTab('transcript')} className={cn("px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all", activeTab === 'transcript' ? "bg-black/80 text-white" : "text-black/30 hover:text-black/50")}>Transcript</button>
                    <button onClick={() => setActiveTab('script')} className={cn("px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all", activeTab === 'script' ? "bg-black/80 text-white" : "text-black/30 hover:text-black/50")}>Agent_Script</button>
                </div>

                <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {activeTab === 'transcript' ? (
                            <motion.div key="transcript" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                                <div ref={transcriptScrollRef} className="h-[300px] overflow-y-auto scroll-smooth no-scrollbar space-y-6">
                                    {agent.transcript.map((line, i) => (
                                        <div key={i} className={cn(
                                            "flex flex-col gap-1 transition-all duration-700",
                                            i <= turnIndex ? "opacity-100" : "opacity-10"
                                        )}>
                                            <div className="flex items-center gap-2">
                                                <span className={cn(
                                                    "text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border border-black/20 shadow-sm",
                                                    line.speaker === 'agent' ? "bg-black text-white" : "bg-white text-black"
                                                )}>
                                                    {line.speaker === 'agent' ? "System_Agent" : "Incoming_User"}
                                                </span>
                                                <span className="text-[8px] font-mono text-black/20 font-bold tracking-tighter">00:0{i}:00</span>
                                            </div>
                                            <p className="text-xl font-bold tracking-tight text-black leading-tight">
                                                "{line.text}"
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div key="script" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                <div className="text-[10px] font-bold text-black/20 uppercase tracking-[0.2em] mb-4 font-black">Core_Instructions_v4</div>
                                <p className="text-xl font-serif italic text-black/60 leading-relaxed font-medium">
                                    "{agent.instructionScript}"
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column: Record Player & Console */}
            <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="hidden lg:flex bg-white/5 rounded-[24px] border border-black/10 flex items-center justify-center p-12 flex-1 min-h-[450px] shadow-inner relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div key={agent.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
                            <SchematicRecord isPlaying={isPlaying} image={agent.recordLabel} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="bg-black/5 rounded-[24px] border border-black/10 p-2 flex gap-2">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="w-16 h-16 rounded-[18px] bg-black text-white flex items-center justify-center hover:bg-black/80 active:scale-95 shadow-lg">
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                    </button>
                    <button onClick={() => setShowCallPopup(true)} className="flex-1 h-16 rounded-[18px] bg-black text-white font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 shadow-xl group">
                    <Phone className="w-4 h-4 fill-current group-hover:animate-bounce" />
                    <span>Initiate Call</span>
                    </button>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── Call Terminal (Airbnb-Inspired) ─── */}
      <AnimatePresence>
        {showCallPopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setShowCallPopup(false)} />
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden">
                <button onClick={() => setShowCallPopup(false)} className="absolute top-8 right-8 p-2.5 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all z-20 border border-slate-100"><X className="w-5 h-5" /></button>
                <div className="p-12 flex flex-col items-center text-center">
                    <div className={cn("w-20 h-20 rounded-[28px] flex items-center justify-center mb-8 bg-opacity-10", agent.color)}>
                        <Mic2 className={cn("w-10 h-10 stroke-[1.5px]", agent.color.replace('bg-', 'text-'))} />
                    </div>
                    <div className="space-y-3 mb-10">
                        <h3 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">Establish Connection</h3>
                        <p className="text-lg text-slate-500 font-serif italic max-w-[320px] mx-auto">Connect with {agent.name} to demonstrate the {agent.category} workflow.</p>
                    </div>
                    <div className="w-full space-y-5">
                        <input type="tel" placeholder="+91 00000 00000" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full px-8 py-6 rounded-3xl bg-slate-50 border-2 border-slate-100 focus:border-slate-900 focus:bg-white outline-none font-mono text-2xl text-center text-slate-900 transition-all" />
                        <button className={cn("w-full py-6 rounded-3xl font-bold text-lg text-white shadow-xl hover:shadow-2xl flex items-center justify-center gap-3", agent.color)}>Initiate Connection <ChevronRight className="w-5 h-5" /></button>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AgentGramophone;
