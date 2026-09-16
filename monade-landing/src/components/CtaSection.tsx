import HalftoneWave from "./HalftoneWave";
import HeroCtas from "./HeroCtas";
import site from "@/content/site.json";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border-soft">
      <div className="container-x relative pt-24 pb-10 md:pt-32">
        <div className="reveal mx-auto max-w-4xl text-center">
          <h2 className="text-[36px] leading-[1.05] font-medium tracking-[-0.02em] md:whitespace-nowrap md:text-[56px]">{site.cta.h2}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-muted md:max-w-none md:whitespace-nowrap md:text-[19px]">{site.cta.line}</p>
          <div className="mt-9">
            <HeroCtas withAnchors={false} idPrefix="cta" />
          </div>
        </div>
        <div className="pointer-events-none mx-auto mt-12 h-[120px] w-full max-w-3xl md:h-[150px]">
          <HalftoneWave gap={8} amplitude={0.42} spread={0.34} opacity={0.7} seed={3} />
        </div>
      </div>
    </section>
  );
}
