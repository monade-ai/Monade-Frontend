import site from "@/content/site.json";

export default function StatBand() {
  const c = site.clients;
  return (
    <section className="border-y border-border-soft bg-surface/40">
      <div className="container-x py-24 md:py-32">
        <p className="reveal mx-auto max-w-4xl text-center text-[26px] leading-snug font-medium tracking-[-0.02em] md:text-[38px]">
          <span className="md:block">{c.line[0]}</span> <span className="md:block">{c.line[1]}</span>
        </p>
        <div className="reveal mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-8">
          {c.stats.map((st, i) => (
            <div key={st.value} className={`text-center ${i === 0 ? "md:border-r md:border-border-soft" : ""}`}>
              <div className="metal tnum inline-block px-[0.08em] text-[112px] leading-[0.9] font-semibold tracking-[-0.05em] sm:text-[150px] md:text-[190px] lg:text-[220px]">
                {st.value}
              </div>
              <div className="mx-auto mt-5 max-w-md text-[15px] leading-snug text-muted md:text-[17px]">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
