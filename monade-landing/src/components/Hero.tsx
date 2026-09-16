import HalftoneWave from "./HalftoneWave";
import HeroCtas from "./HeroCtas";
import site from "@/content/site.json";

export default function Hero() {
  const h = site.hero;
  return (
    <section id="voice-ai" className="relative overflow-hidden pt-16">
      <div className="container-x relative">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center pb-10 pt-10 text-center md:pt-12">
          {/* Text block, pushed up */}
          <div className="flex w-full flex-col items-center">
            <div className="eyebrow mb-6">{h.eyebrow}</div>
            <h1 className="text-[42px] leading-[1.04] font-medium tracking-[-0.025em] sm:text-[56px] md:text-[72px]">
              <span className="block">{h.h1[0]}</span>
              <span className="block">{h.h1[1]}</span>
            </h1>
            <p className="mt-7 max-w-3xl text-[17px] leading-relaxed text-muted md:max-w-none md:text-[19px] lg:text-[20px]">
              <span className="md:block md:whitespace-nowrap">{h.sub[0]}</span>{" "}
              <span className="md:block md:whitespace-nowrap">{h.sub[1]}</span>
            </p>
            <div className="mt-9 w-full">
              <HeroCtas />
            </div>
          </div>

          {/* The pulse lives in the empty band below the text, clear of it */}
          <div className="pointer-events-none flex w-full items-end pt-6 md:pt-8">
            <div className="mx-auto h-[150px] w-full max-w-4xl md:h-[200px]">
              <HalftoneWave gap={9} amplitude={0.44} spread={0.36} opacity={0.9} />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
