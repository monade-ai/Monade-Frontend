'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CodexCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  accent?: 'orange' | 'lemon' | 'none';
  interactive?: boolean;
}

export const CodexCard = ({
  children,
  className,
  title,
  subtitle,
  accent = 'none',
  interactive = true,
}: CodexCardProps) => {
  const accentGlows = {
    orange: 'group-hover:shadow-glow-orange',
    lemon: 'group-hover:shadow-glow-lemon',
    none: 'group-hover:shadow-glass',
  };

  const accentText = {
    orange: 'text-vitality',
    lemon: 'text-intellect',
    none: 'text-slate-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 21 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={interactive ? { y: -5 } : {}}
      className={cn(
        "relative overflow-hidden rounded-[34px] bg-white/40 border border-slate-100/50 backdrop-blur-premium group transition-all duration-500",
        accentGlows[accent],
        className
      )}
    >
      {/* Material Persistence Layer: Subtle SVG Grain/Refraction */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Internal Padding - Fibonacci f-34 */}
      <div className="relative z-10 p-f-34 h-full flex flex-col">
        {(title || subtitle) && (
          <div className="mb-f-55">
            {title && (
              <span className={cn(
                "font-bold text-[11px] uppercase tracking-[0.2em] mb-f-8 block",
                accentText[accent]
              )}>
                {title}
              </span>
            )}
            {subtitle && (
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                {subtitle}
              </h3>
            )}
          </div>
        )}
        <div className="flex-grow">
          {children}
        </div>
      </div>

      {/* Hover Light Path */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/20 to-transparent" />
    </motion.div>
  );
};
