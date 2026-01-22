import React, { useState } from 'react';

const personas = [
  {
    name: "Riya",
    role: "Financial Services",
    quote: "Main aapki repayment schedule manage karne mein help kar sakti hoon.",
    tone: "Empathetic, Professional",
    image: "/team/shashwat.jpg",
    color: "bg-blue-50"
  },
  {
    name: "Arjun",
    role: "Real Estate",
    quote: "Property visit ke liye Saturday ka time theek rahega?",
    tone: "Energetic, Persuasive",
    image: "/team/Narayan Photo.jpg",
    color: "bg-orange-50"
  }
];

const VoiceGallery = () => {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">The Voice Gallery</span>
          <h2 className="text-5xl font-bold tracking-tight">Meet your new team.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {personas.map((p, i) => (
            <div 
              key={p.name}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer transition-luxury ${activePersona === i ? 'ring-2 ring-primary ring-offset-4' : 'opacity-80 hover:opacity-100'}`}
              onClick={() => setActivePersona(i)}
            >
              <div className={`h-[500px] ${p.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                
                <div className="absolute inset-0 flex items-center justify-center text-8xl grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-luxury">
                   {p.name === 'Riya' ? '👩🏽‍💼' : '👨🏽‍💼'}
                </div>

                <div className="absolute bottom-8 left-8 z-20 text-white space-y-1">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="text-sm font-medium opacity-80">{p.role} • {p.tone}</p>
                </div>

                <div className="absolute bottom-8 right-8 z-20 flex items-end gap-1 h-8">
                   {[...Array(4)].map((_, idx) => (
                     <div key={idx} className="w-1 bg-white/40 rounded-full animate-breathe" style={{ height: `${Math.random() * 100}%`, animationDelay: `${idx * 0.2}s` }}></div>
                   ))}
                </div>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <p className="text-xl font-medium italic text-slate-800 animate-breathe">
                  "{p.quote}"
                </p>
                <div className="mt-6 flex items-center justify-between">
                   <div className="flex gap-2">
                     {['Professional', 'Empathetic', 'Urgent'].map(t => (
                       <button key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors">
                         {t}
                       </button>
                     ))}
                   </div>
                   <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-luxury">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceGallery;