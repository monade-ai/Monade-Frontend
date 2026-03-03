'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, Pause, Phone, X, ChevronRight, Mic2,
  Car, Building, ShoppingBag, Utensils
} from "lucide-react";
import { cn } from "@/lib/utils";

type TranscriptLine = {
  speaker: "agent" | "customer";
  startSec: number;
  text: string;
};

type AgentProfile = {
  id: "taxi" | "realestate" | "ecommerce" | "restaurant";
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  role: string;
  specialty: string;
  color: string;
  recordLabel: string;
  audioSrc: string;
  instructionSummary: string[];
  transcript: TranscriptLine[];
};

const DEFAULT_TRUNK_NAME = process.env.NEXT_PUBLIC_CALLING_TRUNK_NAME ?? "Monade Test";
const DEFAULT_ASSISTANT_ID = process.env.NEXT_PUBLIC_CALLING_ASSISTANT_ID ?? "";

function formatClock(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;

  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function findActiveTranscriptIndex(lines: TranscriptLine[], currentTimeSec: number): number {
  for (let i = lines.length - 1; i >= 0; i -= 1) {
    if (currentTimeSec >= lines[i].startSec) {
      return i;
    }
  }

  return -1;
}

const AGENTS: AgentProfile[] = [
  {
    id: "taxi",
    name: "Maya",
    category: "Logistics",
    description: "Delivery Reschedule Support",
    icon: <Car className="w-4 h-4" />,
    role: "Parcel Delivery Coordinator",
    specialty: "Slot Confirmation and Rescheduling",
    color: "bg-[#D97757]", // Burnt Clay
    recordLabel: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=200&h=200",
    audioSrc: "/audio/gramophone/taxi.mp3",
    instructionSummary: [
      "Confirm shipment and original ETA first.",
      "Offer fallback options: reschedule or alternate recipient.",
      "Reconfirm revised slot, address, and proactive SMS update.",
    ],
    transcript: [
      { speaker: "agent", startSec: 0, text: "Hello Narayan, hi! This is Maya calling from Stayflo Parcel. I'm calling about your delivery today. Do you have just a moment?" },
      { speaker: "customer", startSec: 8, text: "Sure Maya, go ahead." },
      { speaker: "agent", startSec: 12, text: "Great. So your LED ring light is out for delivery and should reach you between 2:00 and 3:00 PM today. Just wanted to check, will you be available at that time?" },
      { speaker: "customer", startSec: 22, text: "No Maya. 2:00 to 3:00? I won't be available in the afternoon today." },
      { speaker: "agent", startSec: 29, text: "No problem. We can reschedule for another day or we could leave it with someone else at your address like a neighbor or security. What works best for you?" },
      { speaker: "customer", startSec: 39, text: "If we reschedule, then what could be the expected timeline for delivery?" },
      { speaker: "agent", startSec: 45, text: "We could reschedule for tomorrow. Would morning or afternoon work for you then?" },
      { speaker: "customer", startSec: 51, text: "Do we have any evening slots around 5:00 or 6:00?" },
      { speaker: "agent", startSec: 57, text: "Yes, I can schedule it for an evening slot tomorrow around 5:00 to 6:00 PM. Does that work?" },
      { speaker: "customer", startSec: 64, text: "Yeah, that sounds awesome. And will the delivery boy arrive at the same time, right? Not after it or before, because I'll be available only for that one-hour slot window." },
      { speaker: "agent", startSec: 80, text: "I'll definitely note that as a priority for the delivery partner, so they arrive within that window. You'll also get an SMS when they're about 30 minutes away. And just to confirm, the delivery is still to your registered address, right?" },
      { speaker: "customer", startSec: 92, text: "Yeah, yeah. It's to my registered address." },
      { speaker: "agent", startSec: 96, text: "Perfect, Narayan. So we're all set for tomorrow between 5:00 to 6:00 PM. Is there anything else I can help you with?" },
      { speaker: "customer", startSec: 105, text: "Not really, Maya. Thanks a lot." },
      { speaker: "agent", startSec: 109, text: "Wonderful. Have a great day. Bye." },
      { speaker: "customer", startSec: 112, text: "Yeah, bye." },
    ]
  },
  {
    id: "realestate",
    name: "Ria",
    category: "Real Estate",
    description: "Property Lead Qualification",
    icon: <Building className="w-4 h-4" />,
    role: "Sales Relationship Advisor",
    specialty: "Project Pitch and Visit Booking",
    color: "bg-[#708894]", // Steel Blue
    recordLabel: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=200&h=200",
    audioSrc: "/audio/gramophone/realestate.mp3",
    instructionSummary: [
      "Lead with location and financing hook in plain language.",
      "Handle objections with concrete construction and pricing facts.",
      "Convert interest to a firm site-visit slot with WhatsApp follow-up.",
    ],
    transcript: [
      { speaker: "agent", startSec: 0, text: "Hello sir?" },
      { speaker: "customer", startSec: 4, text: "Hello, kaun?" },
      { speaker: "agent", startSec: 6, text: "Namaste Narayan ji, kaise hain aap?" },
      { speaker: "customer", startSec: 11, text: "Haan madam, main badhiya. Aap kaun bol rahe ho?" },
      { speaker: "agent", startSec: 15, text: "Bahut achhe. Narayan ji, main Ria bol rahi thi. Actually, aapko ek property opportunity ke baare mein call kiya tha. Ek minute hai aapke paas?" },
      { speaker: "customer", startSec: 27, text: "Theek hai bolo." },
      { speaker: "agent", startSec: 30, text: "Hum ek naya project leke aaye hain, Manikya, Mahim West mein. Yeh South Bombay ka prime location hai, station se sirf 5-6 minute door, 2 BHK apartments hain. Aur abhi special offer chal raha hai, sirf 50 lakh dekar aap book kar sakte hain aur possession tak koi payment nahi." },
      { speaker: "customer", startSec: 51, text: "Haan batao matlab aur kya-kya hai isme, aur kya-kya benefits vagerah kya hain?" },
      { speaker: "agent", startSec: 79, text: "Isme construction quality bahut achhi hai, Mivan technology se ban raha hai aur possession next year June-September tak expected hai. Early bird phase chal raha hai toh additional discounts bhi mil sakte hain. Ek baar site visit karna chahenge?" },
      { speaker: "customer", startSec: 91, text: "Site visit kar sakte hain around Sunday. Building kitne floor ka hai, aur kitna construction complete hua hai?" },
      { speaker: "agent", startSec: 109, text: "Yeh G+22 storey tower hai aur construction abhi 9th floor tak complete ho gaya hai. Sunday ka plan karte hain. Morning ya evening?" },
      { speaker: "customer", startSec: 115, text: "Afternoon mein ho sakta hai kya 2-3 baje ke around?" },
      { speaker: "agent", startSec: 120, text: "Ji bilkul. 2-3 baje perfect rahega. Main Sunday ke liye confirm kar dungi. Location hai Mahim West, Jimmy Boy Bakery ke paas. WhatsApp pe details bhej deti hoon." },
      { speaker: "customer", startSec: 127, text: "Haan chalega. Payment plan ka 50 lakh wala aur total cost kya hai?" },
      { speaker: "agent", startSec: 140, text: "Total costing approx 2.5 to 2.6 crores hai, depending on size. Abhi 50 lakhs dekar book kar sakte hain, baaki possession ke time dena hai." },
      { speaker: "customer", startSec: 148, text: "Isme kuch negotiable hai kya pricing vagerah?" },
      { speaker: "agent", startSec: 159, text: "Site visit par definitely baat ho sakti hai, kyunki early bird discounts chal rahe hain. Sunday final karein?" },
      { speaker: "customer", startSec: 164, text: "Haan chalega, Sunday ka dopahar mein final karte hain." },
      { speaker: "agent", startSec: 174, text: "Perfect. Sunday 2-3 baje confirm karti hoon aur details WhatsApp pe bhej deti hoon. Thank you Narayan ji." },
    ]
  },
  {
    id: "ecommerce",
    name: "Neha",
    category: "Hiring",
    description: "Recruitment Screening Call",
    icon: <ShoppingBag className="w-4 h-4" />,
    role: "Talent Outreach Specialist",
    specialty: "Role Briefing and Slot Confirmation",
    color: "bg-[#869781]", // Sage Green
    recordLabel: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=200&h=200",
    audioSrc: "/audio/gramophone/ecommerce.mp3",
    instructionSummary: [
      "Qualify candidate interest quickly with role, shift, salary, and location.",
      "Answer clarifying questions without overpromising compensation.",
      "Drive toward a confirmed interview slot and WhatsApp confirmation.",
    ],
    transcript: [
      { speaker: "agent", startSec: 0, text: "Hi Raj, main Neha Monad ki taraf se call kar rahi hoon. Kaise ho?" },
      { speaker: "customer", startSec: 6, text: "Kidhar se bol rahe ho?" },
      { speaker: "agent", startSec: 10, text: "Monad sir, Monad customer service ke liye hire kar raha hai, usi ke baare mein baat karni thi. Aapke paas 30 seconds hain?" },
      { speaker: "customer", startSec: 17, text: "Haan theek hai boliye." },
      { speaker: "agent", startSec: 21, text: "Yeh customer service ka role hai, voice process. Aapko Monad ke customers ke calls handle karne hain. Day shift 10:00 se 7:00 hai, Sunday off milega. Salary 16,000 in-hand hai. Location Navi Mumbai hai." },
      { speaker: "customer", startSec: 37, text: "Role ke baare mein thoda aur batao?" },
      { speaker: "agent", startSec: 41, text: "Yeh customer queries aur complaints call par resolve karna hota hai. Communication skills important hain. Training hum denge, aur growth chances bhi achhe hain. Interview ke liye try karna chahenge?" },
      { speaker: "customer", startSec: 70, text: "Location kidhar hai interview ka?" },
      { speaker: "agent", startSec: 76, text: "Interview ke liye Navi Mumbai aana padega. Hum poora address share kar denge. Kab jaana chahenge?" },
      { speaker: "customer", startSec: 87, text: "Slot kab-kab available hai?" },
      { speaker: "agent", startSec: 94, text: "Slots regularly available rehte hain. Aap kaun se din prefer karenge?" },
      { speaker: "customer", startSec: 100, text: "Kal nahi, parson shaam ke time available hoon. Ho payega?" },
      { speaker: "agent", startSec: 113, text: "Parson shaam ko kitne baje, jaise 3:00-4:00 ke aas-paas?" },
      { speaker: "customer", startSec: 119, text: "5 baje madam." },
      { speaker: "agent", startSec: 123, text: "Theek hai, main 5 baje ka slot dekhne ki koshish karti hoon. Aapka confirmation chahiye bas." },
      { speaker: "customer", startSec: 132, text: "Haan chalega, 5 baje chalega." },
      { speaker: "agent", startSec: 136, text: "Bahut badhiya. Main interview ki details WhatsApp par bhej deti hoon. Kuch aur poochna hai?" },
      { speaker: "customer", startSec: 145, text: "Salary negotiable hai kya ya fixed 16,000?" },
      { speaker: "agent", startSec: 151, text: "Freshers ke liye 16,000 in-hand hi rehti hai. Monad mein growth ke chances achhe hain, par abhi ke liye yahi rahega." },
      { speaker: "customer", startSec: 164, text: "Okay, theek hai." },
      { speaker: "agent", startSec: 169, text: "Theek hai Raj. Main aapko confirmation bhejti hoon. All the best." },
      { speaker: "customer", startSec: 177, text: "Yeah, thanks a lot ma'am." },
    ]
  },
  {
    id: "restaurant",
    name: "Maya",
    category: "Hospitality",
    description: "Hotel Reservation Desk",
    icon: <Utensils className="w-4 h-4" />,
    role: "Booking and Concierge Assistant",
    specialty: "Package Clarification and Add-ons",
    color: "bg-[#C2A370]", // Muted Ochre
    recordLabel: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=200&h=200",
    audioSrc: "/audio/gramophone/restaurant.mp3",
    instructionSummary: [
      "Capture stay dates, nights, and occupancy before pricing.",
      "Compare room tiers clearly and answer amenity questions.",
      "Bundle add-ons, then restate final estimate and booking summary.",
    ],
    transcript: [
      { speaker: "agent", startSec: 0, text: "Good morning, thank you for calling Stayflo Hotel. This is Maya, how can I help you today?" },
      { speaker: "customer", startSec: 8, text: "Hey Maya, I wanted to book a room. Can you help me with that?" },
      { speaker: "agent", startSec: 14, text: "Of course, happy to help. When are you looking to check in and how many nights are you thinking?" },
      { speaker: "customer", startSec: 20, text: "Planning check-in on 15th March and leaving on 18th. So three nights." },
      { speaker: "agent", startSec: 33, text: "Got it. Checking in on 15th and leaving on 18th, that's three nights, right?" },
      { speaker: "customer", startSec: 43, text: "Yeah, correct." },
      { speaker: "agent", startSec: 46, text: "And how many guests will be staying? Just the two of you?" },
      { speaker: "customer", startSec: 52, text: "Me and my wife. Also can children be accommodated in the same room?" },
      { speaker: "agent", startSec: 69, text: "We have two room types. Standard is Rs 4,500 per night with Wi-Fi, housekeeping, and breakfast for two. Luxury is Rs 8,500 with city or pool view, premium amenities, and turn-down service. Both can take a rollaway bed for a child." },
      { speaker: "customer", startSec: 101, text: "Standard works. Can you confirm the standard rate once?" },
      { speaker: "agent", startSec: 115, text: "Standard room is Rs 4,500 plus taxes, roughly Rs 5,040 with taxes. We can arrange a rollaway bed there as well." },
      { speaker: "customer", startSec: 134, text: "Okay that sounds good. Around 5,000 with taxes, cool." },
      { speaker: "agent", startSec: 146, text: "Perfect. Standard room for three nights from 15th March, with rollaway bed noted. Anything else?" },
      { speaker: "customer", startSec: 160, text: "Do you also do airport pick-up and drop?" },
      { speaker: "agent", startSec: 168, text: "Yes, we can arrange airport transfer. Would you like me to book that?" },
      { speaker: "customer", startSec: 176, text: "Sure. How much does that cost?" },
      { speaker: "agent", startSec: 180, text: "Taxi transfer is around Rs 1,500 to Rs 1,800 depending on time. Shall I schedule it?" },
      { speaker: "customer", startSec: 190, text: "Probably, yeah please do that." },
      { speaker: "agent", startSec: 205, text: "Great. Confirming standard room for three nights, rollaway bed, and airport transfer. Is that right?" },
      { speaker: "customer", startSec: 215, text: "Yeah. What is the final total for three nights plus transfer?" },
      { speaker: "agent", startSec: 238, text: "Room total with taxes is about Rs 5,040 per night, so Rs 15,120 for three nights. Taxi transfer around Rs 1,500. Total is approximately Rs 16,620." },
      { speaker: "customer", startSec: 243, text: "Okay, that works." },
      { speaker: "agent", startSec: 254, text: "Perfect, you're all set. I'll send confirmation email and SMS shortly. Anything else?" },
      { speaker: "customer", startSec: 259, text: "Not really, thanks a lot." },
    ]
  }
];

const SchematicRecord = ({ isPlaying, image, activeId }: { isPlaying: boolean, image: string, activeId: string }) => (
  <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] flex items-center justify-center">
    {/* Persistent Disk Container */}
    <motion.div
      animate={{ rotate: isPlaying ? 360 : 0 }}
      transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" } }}
      className="relative w-full h-full rounded-full border border-black/20 flex items-center justify-center bg-white/5 shadow-inner"
    >
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute rounded-full border border-black/10" style={{ inset: `${(i + 1) * 24}px` }} />
      ))}
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/20 bg-white p-1 shadow-sm overflow-hidden">
        {/* Disk Label changes with agent but container is persistent. No fade here. */}
        <Image
          src={image}
          alt="Label"
          fill
          sizes="(max-width: 768px) 96px, 128px"
          className="w-full h-full object-cover rounded-full opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#1E293B] rounded-full border border-white/20 shadow-inner" />
        </div>
      </div>
    </motion.div>

    {/* Fading Tonearm */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeId}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-8 right-4 w-10 h-56 origin-top z-20 pointer-events-none"
      >
        <motion.div
          animate={isPlaying ? { rotate: [-10, 15] } : { rotate: -25 }}
          transition={isPlaying ? { rotate: { duration: 60, ease: "linear" } } : { type: "spring", stiffness: 100, damping: 15 }}
          className="w-full h-full origin-top"
        >
            <div className="w-10 h-10 border border-black/40 bg-[#1E293B] rounded-full mb-1 shadow-lg" />
            <div className="w-1 h-44 bg-black/20 mx-auto relative shadow-sm">
                <div className="absolute bottom-[-2px] left-[-4px] w-3 h-7 border border-black/40 bg-[#1E293B] flex items-center justify-center shadow-lg">
                    <div className="w-[1px] h-3 bg-white/30" />
                </div>
            </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
);

export const AgentGramophone = () => {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'transcript' | 'script'>('transcript');
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [callError, setCallError] = useState<string | null>(null);
  const [callSuccess, setCallSuccess] = useState<string | null>(null);
  const [callConsent, setCallConsent] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [playbackTimeSec, setPlaybackTimeSec] = useState(0);
  const [activeLineIndex, setActiveLineIndex] = useState(-1);
  const transcriptScrollRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const agent = AGENTS[currentAgentIndex];

  const openCallPopup = () => {
    setCallError(null);
    setCallSuccess(null);
    setCallConsent(false);
    setShowCallPopup(true);
  };

  const closeCallPopup = () => {
    if (isCalling) {
      return;
    }
    setShowCallPopup(false);
    setCallError(null);
    setCallSuccess(null);
  };

  const handleInitiateConnection = async () => {
    setCallError(null);
    setCallSuccess(null);

    const trimmedName = userName.trim();
    const trimmedPhoneNumber = phoneNumber.trim();

    if (!trimmedName) {
      setCallError("Please enter your name before initiating a call.");
      return;
    }

    if (!trimmedPhoneNumber) {
      setCallError("Please enter a phone number.");
      return;
    }

    if (!DEFAULT_ASSISTANT_ID) {
      setCallError("Missing NEXT_PUBLIC_CALLING_ASSISTANT_ID.");
      return;
    }

    if (!callConsent) {
      setCallError("Please confirm consent before initiating a call.");
      return;
    }

    setIsCalling(true);
    try {
      const response = await fetch("/api/calling", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: trimmedPhoneNumber,
          assistant_id: DEFAULT_ASSISTANT_ID,
          trunk_name: DEFAULT_TRUNK_NAME,
          use_case: agent.id,
          callee_info: {
            name: trimmedName,
          },
        }),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message =
          typeof responseData?.error === "string"
            ? responseData.error
            : "Failed to initiate call.";
        throw new Error(message);
      }

      setCallSuccess("Call initiated successfully.");
      setPhoneNumber("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to initiate call.";
      setCallError(message);
    } finally {
      setIsCalling(false);
    }
  };

  const toggleAudioPlayback = async () => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    setAudioError(null);

    if (audioEl.paused) {
      try {
        await audioEl.play();
      } catch {
        setAudioError("Could not play this audio preview.");
      }

      return;
    }

    audioEl.pause();
  };

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.load();
    setPlaybackTimeSec(0);
    setActiveLineIndex(-1);
    setIsPlaying(false);
    setAudioError(null);
    lineRefs.current = [];
  }, [agent.id]);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setPlaybackTimeSec(0);
      setActiveLineIndex(-1);
    };
    const onTimeUpdate = () => {
      const currentTime = audioEl.currentTime;
      setPlaybackTimeSec(currentTime);
      const transcriptSpanSec = agent.transcript[agent.transcript.length - 1]?.startSec ?? 0;
      const audioDurationSec =
        Number.isFinite(audioEl.duration) && audioEl.duration > 0
          ? audioEl.duration
          : transcriptSpanSec;

      const normalizedTranscriptTime =
        transcriptSpanSec > 0 && audioDurationSec > 0
          ? (currentTime / audioDurationSec) * transcriptSpanSec
          : currentTime;

      setActiveLineIndex(findActiveTranscriptIndex(agent.transcript, normalizedTranscriptTime));
    };
    const onError = () => {
      setAudioError("Could not load this audio preview.");
      setIsPlaying(false);
    };

    audioEl.addEventListener("play", onPlay);
    audioEl.addEventListener("pause", onPause);
    audioEl.addEventListener("ended", onEnded);
    audioEl.addEventListener("timeupdate", onTimeUpdate);
    audioEl.addEventListener("error", onError);

    return () => {
      audioEl.removeEventListener("play", onPlay);
      audioEl.removeEventListener("pause", onPause);
      audioEl.removeEventListener("ended", onEnded);
      audioEl.removeEventListener("timeupdate", onTimeUpdate);
      audioEl.removeEventListener("error", onError);
    };
  }, [agent.transcript]);

  useEffect(() => {
    if (activeLineIndex === -1) {
      transcriptScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const lineEl = lineRefs.current[activeLineIndex];
    lineEl?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeLineIndex]);

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
                    <button onClick={() => setActiveTab('script')} className={cn("px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all", activeTab === 'script' ? "bg-black/80 text-white" : "text-black/30 hover:text-black/50")}>Instructions</button>
                </div>

                <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {activeTab === 'transcript' ? (
                            <motion.div key="transcript" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                                <div ref={transcriptScrollRef} className="h-[300px] overflow-y-auto scroll-smooth no-scrollbar space-y-6">
                                    {agent.transcript.map((line, i) => (
                                        <div
                                            key={i}
                                            ref={(el) => {
                                              lineRefs.current[i] = el;
                                            }}
                                            className={cn(
                                                "flex flex-col gap-1 transition-all duration-500",
                                                activeLineIndex === -1
                                                  ? "opacity-100"
                                                  : i === activeLineIndex
                                                    ? "opacity-100 scale-[1.01]"
                                                    : i < activeLineIndex
                                                      ? "opacity-45"
                                                      : "opacity-15"
                                            )}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className={cn(
                                                    "text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border border-black/20 shadow-sm",
                                                    line.speaker === 'agent' ? "bg-black text-white" : "bg-white text-black"
                                                )}>
                                                    {line.speaker === 'agent' ? "Agent" : "User"}
                                                </span>
                                                <span className="text-[9px] font-mono text-black/35 font-bold tracking-tighter">{formatClock(line.startSec)}</span>
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
                                <div className="text-[11px] font-bold text-black/20 uppercase tracking-widest mb-4">Call playbook summary</div>
                                <div className="space-y-3">
                                  {agent.instructionSummary.map((item, idx) => (
                                    <div key={item} className="flex items-start gap-3">
                                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/80 text-[10px] font-bold text-white">
                                        {idx + 1}
                                      </span>
                                      <p className="text-[17px] font-medium text-black/70 leading-relaxed">{item}</p>
                                    </div>
                                  ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column: Record Player & Console */}
            <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="hidden lg:flex bg-white/5 rounded-[24px] border border-black/10 flex items-center justify-center p-12 flex-1 min-h-[450px] shadow-inner relative overflow-hidden">
                    <SchematicRecord isPlaying={isPlaying} image={agent.recordLabel} activeId={agent.id} />
                </div>

                <div className="bg-black/5 rounded-[24px] border border-black/10 p-2 flex gap-2 items-center">
                    <audio ref={audioRef} src={agent.audioSrc} preload="metadata" className="hidden" />
                    <button onClick={toggleAudioPlayback} className="w-16 h-16 shrink-0 rounded-[18px] bg-black text-white flex items-center justify-center hover:bg-black/80 active:scale-95 shadow-lg transition-all">
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                    </button>
                    
                    <div className="flex-1 h-16 bg-white rounded-[18px] border border-black/10 flex items-center overflow-hidden shadow-sm focus-within:border-black/30 transition-all">
                        <div className="pl-4 pr-2 text-[11px] font-mono text-slate-500 min-w-[52px]">
                          {formatClock(playbackTimeSec)}
                        </div>
                        <input 
                            type="text" 
                            placeholder="Your name" 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="flex-1 bg-transparent px-6 outline-none text-[14px] font-medium text-slate-900 placeholder:text-slate-300"
                        />
                        <button 
                            onClick={openCallPopup} 
                            className="h-[calc(100%-16px)] mr-2 px-6 bg-black text-white rounded-[12px] font-bold text-[10px] uppercase tracking-[0.1em] flex items-center justify-center gap-2 hover:bg-slate-900 active:scale-[0.98] transition-all"
                        >
                            <Phone className="w-3 h-3 fill-current" />
                            <span>Initiate Call</span>
                        </button>
                    </div>
                </div>
                {audioError ? <p className="text-xs text-red-600 px-1">{audioError}</p> : null}
            </div>

          </div>
        </div>
      </div>

      {/* ─── Call Terminal (Airbnb-Inspired) ─── */}
      <AnimatePresence>
        {showCallPopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={closeCallPopup} />
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden">
                <button onClick={closeCallPopup} className="absolute top-8 right-8 p-2.5 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all z-20 border border-slate-100 disabled:opacity-50" disabled={isCalling}><X className="w-5 h-5" /></button>
                <div className="p-12 flex flex-col items-center text-center">
                    <div className={cn("w-20 h-20 rounded-[28px] flex items-center justify-center mb-8 bg-opacity-10", agent.color)}>
                        <Mic2 className={cn("w-10 h-10 stroke-[1.5px]", agent.color.replace('bg-', 'text-'))} />
                    </div>
                    <div className="space-y-3 mb-10">
                        <h3 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">Establish Connection</h3>
                        <p className="text-lg text-slate-500 font-serif italic max-w-[320px] mx-auto">Connect with {agent.name} to demonstrate the {agent.category} workflow{userName ? `, starting with a greeting for ${userName}` : ''}.</p>
                    </div>
                    <div className="w-full space-y-5">
                        <input type="tel" placeholder="+91 00000 00000" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled={isCalling} className="w-full px-8 py-6 rounded-3xl bg-slate-50 border-2 border-slate-100 focus:border-slate-900 focus:bg-white outline-none font-mono text-2xl text-center text-slate-900 transition-all disabled:opacity-60" />
                        <label className="flex items-start gap-2 text-left text-xs text-slate-600">
                          <input
                            type="checkbox"
                            checked={callConsent}
                            onChange={(event) => setCallConsent(event.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded border-slate-300"
                          />
                          <span>
                            I consent to Monade processing my phone number and call metadata to schedule this demo. See{' '}
                            <Link href="/privacy" className="underline">Privacy Policy</Link> and{' '}
                            <Link href="/terms" className="underline">Terms</Link>.
                          </span>
                        </label>
                        {callError && <p className="text-sm text-red-600 font-medium">{callError}</p>}
                        {callSuccess && <p className="text-sm text-emerald-700 font-medium">{callSuccess}</p>}
                        <button 
                            onClick={handleInitiateConnection} 
                            disabled={isCalling} 
                            className={cn("w-full py-6 rounded-3xl font-bold text-lg text-white shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed", agent.color)}
                        >
                            {isCalling ? "Initiating..." : "Start the call"} <ChevronRight className="w-5 h-5" />
                        </button>
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
