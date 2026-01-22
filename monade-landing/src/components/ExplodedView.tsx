import React from 'react';

const ExplodedView = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          {/* Visual: The Exploded View Schematic */}
          <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center">
            {/* Background Glows */}
            <div className="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-heavy animate-pulse"></div>
            
            {/* Layers */}
            <div className="relative w-full h-full flex flex-col items-center justify-center space-y-[-100px]">
              {/* Layer 3: The Mouth */}
              <div className="w-64 h-32 glass rounded-2xl border border-black/5 shadow-premium flex flex-col items-center justify-center p-4 transform -rotate-x-12 hover:translate-y-[-20px] transition-luxury group cursor-help z-30">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Layer 03 // Output</span>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-primary w-2/3 animate-shimmer"></div>
                </div>
                <span className="text-xs font-bold mt-2 group-hover:text-primary transition-colors">Neural Synthesis</span>
              </div>

              {/* Layer 2: The Brain */}
              <div className="w-80 h-40 glass rounded-2xl border border-black/5 shadow-premium flex flex-col items-center justify-center p-4 transform -rotate-x-12 hover:scale-105 transition-luxury z-20">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Layer 02 // Logic</span>
                <div className="grid grid-cols-4 gap-2 w-full">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-1 bg-primary/20 rounded-full"></div>
                  ))}
                </div>
                <span className="text-sm font-bold mt-4 tracking-tight">142ms Intent Resolution</span>
              </div>

              {/* Layer 1: The Ear */}
              <div className="w-64 h-32 glass rounded-2xl border border-black/5 shadow-premium flex flex-col items-center justify-center p-4 transform -rotate-x-12 hover:translate-y-[20px] transition-luxury z-10 opacity-60">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Layer 01 // Input</span>
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 bg-slate-200 rounded-full" style={{ height: `${Math.random() * 20 + 10}px` }}></div>
                  ))}
                </div>
                <span className="text-xs font-bold mt-2">Ambient Noise Isolation</span>
              </div>
            </div>
          </div>

          {/* Text: The Story */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">The Anatomy of a Call</span>
            </div>
            <h2 className="text-5xl font-bold tracking-tight-compact leading-[1.1]">
              Engineered for the <br />Obsessive.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              We disassembled the standard voice stack and rebuilt it for high-density environments. No jitter, no lag, just pure operational presence.
            </p>
            
            <div className="space-y-6 pt-4">
              <DetailPoint title="The Ear" desc="Advanced spectral filtering that isolates the human voice from Mumbai's traffic or Bangalore's office hum." />
              <DetailPoint title="The Brain" desc="A proprietary Hinglish NLP core that understands code-switching in real-time, resolving intent in under 150ms." />
              <DetailPoint title="The Mouth" desc="Neural synthesis trained on regional cadences, ensuring the AI sounds like a local representative, not a server." />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const DetailPoint = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-4 group">
    <div className="w-px h-12 bg-slate-100 group-hover:bg-primary transition-colors"></div>
    <div className="space-y-1">
      <h4 className="text-sm font-bold uppercase tracking-wider">{title}</h4>
      <p className="text-sm text-slate-500 max-w-xs">{desc}</p>
    </div>
  </div>
);

export default ExplodedView;
