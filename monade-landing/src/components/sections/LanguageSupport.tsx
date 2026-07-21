import Image from "next/image";

const LANGUAGES: { name: string; voices: number; home?: boolean }[] = [
  { name: "Hindi", voices: 24, home: true },
  { name: "English", voices: 7, home: true },
  { name: "Marathi", voices: 6, home: true },
  { name: "Tamil", voices: 8, home: true },
  { name: "Telugu", voices: 5, home: true },
  { name: "Bengali", voices: 4, home: true },
  { name: "Kannada", voices: 4, home: true },
  { name: "Malayalam", voices: 3, home: true },
  { name: "Gujarati", voices: 4, home: true },
  { name: "Urdu", voices: 3, home: true },
  { name: "Chinese", voices: 12 },
  { name: "Spanish", voices: 10 },
  { name: "Japanese", voices: 9 },
  { name: "Portuguese", voices: 8 },
  { name: "Korean", voices: 6 },
  { name: "German", voices: 5 },
  { name: "Turkish", voices: 5 },
  { name: "Arabic", voices: 4 },
  { name: "Russian", voices: 4 },
  { name: "Vietnamese", voices: 4 },
  { name: "Dutch", voices: 4 },
  { name: "French", voices: 3 },
  { name: "Italian", voices: 2 },
  { name: "Swahili", voices: 2 },
];

export const LanguageSupport = () => {
  return (
    <section className="py-24 md:py-32 bg-background hairline-t overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-14 relative">
          <div className="max-w-3xl">
            <div className="machine-label text-ink/40 mb-5">04 — Languages</div>
            <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.05] mb-6">
              Talk to anyone, <span className="serif-accent text-clay">anywhere.</span>
            </h2>
            <p className="text-lg md:text-xl text-ink/60 leading-relaxed max-w-2xl">
              Ten Indian languages first. Fourteen more for wherever your
              customers are.
            </p>
          </div>

          <div className="hidden lg:block relative w-[420px] aspect-[3/2] -mr-10 -mt-8">
            <Image
              src="/country balls.png"
              alt="Global coverage"
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>

        {/* Type specimen — the languages ARE the design */}
        <div className="hairline-t pt-10">
          <p className="max-w-6xl leading-[1.9]">
            {LANGUAGES.map((lang, i) => (
              <span key={lang.name} className="inline-block">
                <span
                  className={`font-display text-2xl md:text-4xl tracking-tight transition-colors duration-300 hover:text-clay cursor-default ${
                    lang.home ? "text-ink" : "text-ink/35"
                  }`}
                >
                  {lang.name}
                </span>
                <sup className="font-mono text-[0.55em] text-ink/40 ml-1">
                  {lang.voices}
                </sup>
                {i < LANGUAGES.length - 1 && (
                  <span className="text-ink/20 text-2xl md:text-4xl mx-3 select-none">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>

          <div className="mt-10 flex items-center gap-6">
            <div className="machine-label text-ink/40">
              24 languages · 140+ studio voices
            </div>
            <div className="h-px flex-1 bg-[var(--hairline)]" />
            <div className="machine-label text-ink/40">
              Superscript = voices available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSupport;
