'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StaticMeshGradient } from '@paper-design/shaders-react';
import { cn } from '@/lib/utils';

interface ModelIdentityCardProps {
  name: string;
  provider: string;
  type: string;
  context: string;
  pricing: string;
  shaderConfig: {
    colors: string[];
    waveX: number;
    rotation: number;
  };
  className?: string;
}

export const ModelIdentityCard = ({
  name,
  provider,
  type,
  context,
  pricing,
  shaderConfig,
  className,
}: ModelIdentityCardProps) => {
  return (
    <div className={cn(
      "relative h-[500px] w-full bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 ease-out group",
      className
    )}>
      {/* Paper Shader Layer */}
      <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-1000">
        <StaticMeshGradient
          width={1280}
          height={720}
          colors={shaderConfig.colors}
          positions={42}
          mixing={0.38}
          waveX={0.49}
          waveXShift={0}
          waveY={1}
          waveYShift={0}
          scale={0.68}
          rotation={shaderConfig.rotation}
          grainMixer={0}
          grainOverlay={0.78}
          offsetX={-0.28}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">
        {/* Top: Icon Placeholder */}
        <div className="w-12 h-12 flex items-center justify-center text-lg font-bold text-white/80 bg-white/10 rounded-md group-hover:scale-110 transition-transform duration-500">
          {name.charAt(0)}
        </div>

        {/* Bottom: Identity */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/70 block mb-2">
              {provider}
            </span>
            <h3 className="text-5xl font-bold tracking-tight leading-none">
              {name}
            </h3>
          </div>

          <div className="pt-4">
            <p className="text-sm font-mono tracking-[0.2em] text-white/50 uppercase leading-relaxed">
              {type} • {context}
              <br />
              <span className="font-bold text-white/90">{pricing}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
