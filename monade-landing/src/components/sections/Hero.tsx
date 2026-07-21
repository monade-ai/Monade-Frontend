import Link from "next/link";
import Odometer from "@/components/ui/Odometer";

const stats = [
  { value: "10,000+", label: "Concurrent calls" },
  { value: "0.4s", label: "Time to first word" },
  { value: "24", label: "Languages spoken" },
];

export const Hero = () => {
  return (
    <section className="relative pt-48 md:pt-56 pb-20 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <div className="space-y-9 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            <span className="machine-label text-ink/50">
              Not an IVR. Not a chatbot. A voice.
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-[96px] leading-[1.02] text-ink text-balance">
            Your best call,
            <br />
            <span className="serif-accent text-clay text-[1.08em]">
              ten thousand times at once.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Monade agents answer, qualify, and follow up on real Indian phone
            lines — fluent in 24 languages, at ₹8 a minute, with a human one
            tap away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#listening-room"
              className="key-physical w-full sm:w-auto text-center px-9 py-4 bg-ink text-manila font-semibold text-base tracking-tight"
            >
              Hear it live
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center px-9 py-4 rounded-[0.875rem] text-ink border border-ink/15 font-semibold text-base tracking-tight hover:border-ink/40 hover:bg-ink/[0.03] transition-all"
            >
              Start for free
            </Link>
          </div>

          <div className="pt-16 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 hairline-t">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`pt-5 pb-1 ${i > 0 ? "border-l border-[var(--hairline)]" : ""}`}
                >
                  <div className="font-display text-2xl md:text-3xl text-ink leading-none">
                    <Odometer value={stat.value} />
                  </div>
                  <div className="machine-label text-ink/40 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10">
            <Link
              href="#listening-room"
              className="machine-label text-ink/35 hover:text-clay transition-colors inline-flex items-center gap-2"
            >
              01 — Drop the needle
              <span aria-hidden="true" className="translate-y-px">↓</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
