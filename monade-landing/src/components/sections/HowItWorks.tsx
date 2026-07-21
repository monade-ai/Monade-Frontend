'use client';

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Knowledge",
    desc: "Ingest your raw data from Sheets, Notion, or PDFs.",
    dot: "#708894",
  },
  {
    id: "02",
    title: "Synthesis",
    desc: "Map logic using 18 principles of persuasion.",
    dot: "#869781",
  },
  {
    id: "03",
    title: "Calibration",
    desc: "Adjust tone and resonance until it feels human.",
    dot: "#D97757",
  },
  {
    id: "04",
    title: "Deployment",
    desc: "Go live instantly at sub-200ms latency.",
    dot: "#5A6B7D",
  },
  {
    id: "05",
    title: "Evolution",
    desc: "The loop closes. Every call refines the next.",
    dot: "#BC8A7A",
  },
];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden text-ink hairline-t">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

          {/* Left: header + spinning record label */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="machine-label text-ink/40 mb-5">03 — The Method</div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.98] text-ink">
                A continuous
                <br />
                <span className="serif-accent text-clay">loop of improvement.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-ink/60 max-w-sm leading-relaxed">
              We remove the technical friction to focus on one outcome: a
              perfect phone call.
            </p>

            {/* The side label — a record spinning through the five tracks */}
            <div className="relative w-56 h-56 hidden lg:block mt-4">
              <div
                className="absolute inset-0 rounded-full groove-rings border border-[var(--hairline)] transition-colors duration-700"
                style={{ backgroundColor: `${STEPS[activeStep].dot}22` }}
              />
              <div
                className="absolute inset-[38%] rounded-full transition-colors duration-700 flex items-center justify-center"
                style={{ backgroundColor: STEPS[activeStep].dot }}
              >
                <span className="font-mono text-white text-xs font-bold">
                  {STEPS[activeStep].id}
                </span>
              </div>
            </div>
          </div>

          {/* Right: the tracklist — every step always legible */}
          <div className="lg:col-span-7">
            <div className="flex flex-col hairline-t">
              {STEPS.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "group text-left border-b border-[var(--hairline)] py-6 md:py-7 px-4 md:px-6 grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 md:gap-6 transition-colors duration-500",
                    activeStep === i ? "bg-ink/[0.035]" : "hover:bg-ink/[0.02]"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-sm font-bold transition-colors duration-500",
                      activeStep === i ? "text-clay" : "text-ink/30"
                    )}
                  >
                    {step.id}
                  </span>
                  <div>
                    <div
                      className={cn(
                        "font-display text-2xl md:text-3xl leading-tight transition-colors duration-500",
                        activeStep === i ? "text-ink" : "text-ink/60 group-hover:text-ink"
                      )}
                    >
                      {step.title}
                    </div>
                    <p className="text-sm md:text-base text-ink/55 mt-1.5 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                  <span
                    className="w-2.5 h-2.5 rounded-full self-center transition-all duration-500"
                    style={{
                      backgroundColor: step.dot,
                      opacity: activeStep === i ? 1 : 0.25,
                      transform: activeStep === i ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="mt-10 flex">
              <button
                onClick={() => window.open('https://calendly.com/adhiraj-n1labs/30min', '_blank')}
                className="key-physical flex items-center gap-3 px-9 py-4 bg-ink text-manila font-semibold text-base tracking-tight group w-full sm:w-auto justify-center"
              >
                Start your pilot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
