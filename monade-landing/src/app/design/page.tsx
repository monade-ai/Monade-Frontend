'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CodexCard } from "@/components/CodexCard";
import { ModelIdentityCard } from "@/components/ModelIdentityCard";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Sun, Zap, ArrowRight, MousePointer2, Box } from "lucide-react";

const shaderConfigs = [
  {
    // The Core Vitality (Monade Orange + Obsidian)
    colors: ["#FF4D00", "#000000", "#1A1A1A", "#FF5C00"],
    waveX: 0.18,
    rotation: 245
  },
  {
    // The Intellectual Clarity (Monade Lemon + Architectural White)
    colors: ["#F5D916", "#FFFFFF", "#F8FAFC", "#E2E8F0"],
    waveX: 0.20,
    rotation: 280
  },
  {
    // The Engineering Heat Sink (Deep Slates + Subtle Ember)
    colors: ["#0F172A", "#020617", "#1E293B", "#FF4D00"],
    waveX: 0.17,
    rotation: 260
  },
  {
    // The Citrus Dialogue (Lemon to Orange Transition)
    colors: ["#F5D916", "#FF9F0A", "#FF4D00", "#0F172A"],
    waveX: 0.19,
    rotation: 270
  }
];

const mockModels = [
  { name: "GPT-4o", provider: "OpenAI", type: "Multimodal", context: "128k", pricing: "$5.00/M · $15.00/M" },
  { name: "Claude 3.5", provider: "Anthropic", type: "Reasoning", context: "200k", pricing: "$3.00/M · $15.00/M" },
  { name: "Llama 3.1", provider: "Meta", type: "Open Weights", context: "128k", pricing: "$0.15/M · $0.60/M" },
  { name: "Gemini 1.5", provider: "Google", type: "Long Context", context: "2M", pricing: "$3.50/M · $10.50/M" }
];

const TokenRow = ({ label, value, color }: { label: string, value: string, color?: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 group">
    <div className="flex items-center gap-3">
      {color && <div className="w-4 h-4 rounded-full border border-slate-200" style={{ backgroundColor: color }} />}
      <span className="text-sm font-medium text-slate-600">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <code className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded">{value}</code>
    </div>
  </div>
);

const SectionHeader = ({ title, description }: { title: string, description: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">{title}</h2>
    <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">{description}</p>
  </div>
);

const LabSlider = ({ 
  label, 
  value, 
  min, 
  max, 
  step = 0.01, 
  onChange,
  unit = "" 
}: { 
  label: string, 
  value: number, 
  min: number, 
  max: number, 
  step?: number, 
  onChange: (val: number) => void,
  unit?: string
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="text-[10px] font-mono text-primary font-bold">{value}{unit}</span>
    </div>
    <input 
      type="range" 
      min={min} 
      max={max} 
      step={step} 
      value={value} 
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary"
    />
  </div>
);

export default function DesignSystemPage() {
  const [showGrid, setShowGrid] = useState(false);
  const [leading, setLeading] = useState(1.6);
  const [modularScale, setModularScale] = useState(1.25);
  const [friction, setFriction] = useState(0.2);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'g') setShowGrid(prev => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden">
      <Navbar variant="transparent" />

      {/* Grid Overlay */}
      <AnimatePresence>
        {showGrid && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #FF4D00 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-40">
        {/* Header */}
        <div className="mb-24 pb-12 border-b border-slate-100">
          <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            System Documentation v1.1
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Design <br />System.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            A comprehensive guide to Monade's visual identity. Engineered for precision and built to withstand the testament of time.
          </p>
        </div>

        {/* 1. Typography */}
        <section className="mb-32">
          <SectionHeader 
            title="Typography" 
            description="Built on a modular scale for clear hierarchy and absolute readability."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-slate-50 rounded-3xl p-12 border border-slate-100">
              <div className="space-y-12">
                <div 
                  className="transition-all duration-300"
                  style={{ lineHeight: leading, fontSize: `${18 * modularScale}px` }}
                >
                  <h1 className="font-bold tracking-tighter mb-4" style={{ fontSize: `${80 * modularScale}px` }}>Monade.</h1>
                  <p className="text-slate-600 max-w-xl">
                    Automate high-stakes voice workflows with the world’s most precise Hinglish NLP.
                  </p>
                </div>
                <div className="pt-8 border-t border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <LabSlider label="Vertical Rhythm" value={leading} min={1} max={2.5} onChange={setLeading} />
                    <LabSlider label="Modular Scale" value={modularScale} min={1} max={2} step={0.05} onChange={setModularScale} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-400">Tokens</h4>
              <TokenRow label="Font Family" value="Geist Sans" />
              <TokenRow label="Heading Scale" value="1.250 (Major Third)" />
              <TokenRow label="Line Height" value={`${leading}`} />
            </div>
          </div>
        </section>

        {/* 2. Identity Cards (New Section) */}
        <section className="mb-32">
          <SectionHeader 
            title="Model Identity" 
            description="High-precision cards utilizing StaticMeshGradients. Designed to convey authority and technical depth through paper-inspired shaders."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockModels.map((model, i) => (
              <ModelIdentityCard 
                key={i}
                {...model}
                shaderConfig={shaderConfigs[i % shaderConfigs.length]}
              />
            ))}
          </div>
        </section>

        {/* 3. Color Palette */}
        <section className="mb-32">
          <SectionHeader 
            title="Color Palette" 
            description="Functional colors. High-chroma primary for action, systematic neutrals for structure."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square bg-primary rounded-3xl shadow-lg shadow-primary/20 flex items-end p-8 text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-70">Primary</span>
                <h3 className="text-2xl font-bold mt-1">Monade Orange</h3>
              </div>
            </div>
            <div className="aspect-square bg-[#F5D916] rounded-3xl flex items-end p-8 text-slate-900">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50">Accent</span>
                <h3 className="text-2xl font-bold mt-1">Lemon Yellow</h3>
              </div>
            </div>
            <div className="aspect-square bg-slate-900 rounded-3xl flex items-end p-8 text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50">Neutral</span>
                <h3 className="text-2xl font-bold mt-1">Deep Slate</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Interaction */}
        <section className="mb-32">
          <SectionHeader 
            title="Interaction Biology" 
            description="Feedback loops designed for human-grade intuition. We use elastic friction and damped motion."
          />
          <div className="bg-slate-950 rounded-[48px] p-24 flex items-center justify-center overflow-hidden relative">
            <motion.div 
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={friction}
              className="w-48 h-48 bg-white rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-2xl z-10"
            >
              <div className="w-4 h-4 bg-primary rounded-full" />
            </motion.div>
            <div className="absolute inset-0 opacity-20">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-12 right-12 w-64">
               <LabSlider label="Elastic Friction" value={friction} min={0.05} max={0.8} step={0.01} onChange={setFriction} />
            </div>
          </div>
        </section>

      </main>

      <footer className="py-20 border-t border-slate-100 bg-slate-50 text-center">
        <p className="text-sm font-medium text-slate-400">© 2026 Monade AI. Engineered for precision.</p>
      </footer>
    </div>
  );
}
