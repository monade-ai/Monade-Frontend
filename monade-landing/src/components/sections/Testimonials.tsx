'use client';

import React from "react";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "We were losing 40% of inbound leads after 7 PM. Monade picks up every call, qualifies the buyer in Hindi or English, and the lead is in our CRM before the site visit team arrives at 9 AM. Booking rate tripled.",
      author: "Site Sales Head",
      role: "Tier-1 Mumbai Builder",
      rotation: "rotate-2",
      width: "w-[450px]",
      color: "bg-[#020617] text-white"
    },
    {
      quote: "Our receptionist handled 60 calls a day and still missed half. Monade handles 200 — in Hindi, English, and Hinglish. Patients book without waiting. Nobody has complained it's AI.",
      author: "Clinic Manager",
      role: "IVF Center, Andheri West",
      rotation: "-rotate-1",
      width: "w-[350px]",
      color: "bg-[#0F172A] text-white"
    },
    {
      quote: "We used to lose students because we couldn't follow up fast enough. Monade calls within minutes of a form submission, qualifies the lead, and books a demo — before our sales team opens their laptop.",
      author: "Head of Admissions",
      role: "Career Coaching Institute",
      rotation: "rotate-3",
      width: "w-[400px]",
      color: "bg-[#020617] text-white"
    },
    {
      quote: "The ability to handle Hinglish smoothly is a game changer. Other tools struggled with 'iska price kya hai' mixed with English. Monade just gets it.",
      author: "Founder",
      role: "D2C Brand",
      rotation: "-rotate-2",
      width: "w-[380px]",
      color: "bg-primary text-white"
    },
    {
      quote: "Setup took 2 days. The script actually sounds like our top sales rep. The objection handling is better than some of our junior staff.",
      author: "VP Sales",
      role: "EdTech Unicorn",
      rotation: "rotate-1",
      width: "w-[420px]",
      color: "bg-[#0F172A] text-white"
    },
    {
      quote: "Pay per second pricing saved us during the slow season. We're not paying a flat fee for idle bots. It aligns perfectly with our business model.",
      author: "Director",
      role: "Travel Agency",
      rotation: "-rotate-3",
      width: "w-[360px]",
      color: "bg-[#020617] text-white"
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FDFBF7] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FDFBF7] to-transparent z-10" />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-8xl font-serif italic text-slate-900 mb-6 tracking-tight relative inline-block">
          Love letters to Monade
          <svg className="absolute -right-12 -top-8 w-24 h-24 text-primary opacity-80 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50,10 q10,-30 40,0 t-40,0 z" fill="none" />
            <path d="M40,20 l10,-10 m5,15 l10,-5" />
          </svg>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-infinite-scroll w-max hover:[animation-play-state:paused] py-12 px-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "flex-shrink-0 p-10 rounded-[40px] flex flex-col justify-between hover:scale-[1.02] hover:rotate-0 transition-all duration-500 shadow-2xl",
                t.width,
                t.rotation,
                t.color
              )}
            >
              <div className="mb-0">
                <div className="flex gap-1 mb-4 opacity-70">
                  {[1, 2, 3, 4, 5].map(star => (
                    <div key={star} className="w-3 h-3 fill-current text-current">★</div>
                  ))}
                </div>
                <p className="text-xl md:text-2xl leading-snug font-medium tracking-tight font-serif italic">"{t.quote}"</p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm">
                  <div className="w-full h-full flex items-center justify-center font-bold text-lg text-white/90">
                    {t.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg leading-none mb-1">{t.author}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={`dup-${i}`}
              className={cn(
                "flex-shrink-0 p-10 rounded-[40px] flex flex-col justify-between hover:scale-[1.02] hover:rotate-0 transition-all duration-500 shadow-2xl",
                t.width,
                t.rotation,
                t.color
              )}
            >
              <div className="mb-0">
                <div className="flex gap-1 mb-4 opacity-70">
                  {[1, 2, 3, 4, 5].map(star => (
                    <div key={star} className="w-3 h-3 fill-current text-current">★</div>
                  ))}
                </div>
                <p className="text-xl md:text-2xl leading-snug font-medium tracking-tight font-serif italic">"{t.quote}"</p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm">
                  <div className="w-full h-full flex items-center justify-center font-bold text-lg text-white/90">
                    {t.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg leading-none mb-1">{t.author}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
