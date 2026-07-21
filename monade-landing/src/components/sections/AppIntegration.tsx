import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Zap, Plug } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";

export const AppIntegration = () => {
  return (
    <section className="relative bg-[#020617] py-24 lg:py-32 overflow-hidden rounded-[64px] mx-6 my-8 min-h-[700px] flex items-center">
      <div className="absolute top-1/2 right-[18%] -translate-y-1/2 w-[500px] h-[500px] bg-clay/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[300px] h-[300px] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-full max-w-3xl aspect-video pointer-events-none opacity-[0.15]">
        <Image src="/claw_art.png" alt="Claw Art" fill sizes="(max-width: 1024px) 80vw, 40vw" className="object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-24 w-full relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="flex flex-col items-start text-left">
            <div className="flex gap-2 mb-10 flex-wrap">
              {[
                { icon: <Plug className="w-3 h-3" />, label: "Open Claw" },
                { icon: <Zap className="w-3 h-3" />, label: "Native plugin" },
                { icon: <Bot className="w-3 h-3" />, label: "Voice intelligence" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/15 rounded-full machine-label text-white/60 backdrop-blur-md"
                >
                  {b.icon} {b.label}
                </div>
              ))}
            </div>

            <h2 className="font-display text-5xl md:text-7xl text-white mb-8 leading-[0.98]">
              Intelligence for your<br />
              <span className="serif-accent text-white/70">Open Claw agent</span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              Connect Monade to your agent with a single plugin. Get an intelligence layer that handles the details,
              setting up scripts, analyzing responses, and adapting to your business needs automatically.
            </p>

            <Link
              href="/open-claw"
              className="key-physical inline-flex items-center gap-3 px-8 py-4 bg-manila text-ink font-semibold text-base tracking-tight"
            >
              Learn more about Open Claw
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative flex justify-center lg:justify-end scale-90 md:scale-100">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegration;
