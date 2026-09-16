import CoworkerWindow from "./CoworkerWindow";
import site from "@/content/site.json";

export default function CoworkersSection() {
  const c = site.coworkers;
  return (
    <section id="coworkers" className="scroll-mt-16 border-t border-border-soft py-20 md:py-28">
      <div className="container-x">
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="eyebrow mb-4">{c.eyebrow}</div>
            <h2 className="text-[30px] leading-tight font-medium tracking-[-0.02em] md:text-[36px] xl:whitespace-nowrap lg:text-[40px]">{c.h2}</h2>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-muted md:text-[17px]">{c.body}</p>
          </div>
          <div className="md:col-span-4">
            <ul className="space-y-2">
              {c.pills.map((p) => (
                <li key={p} className="pill w-full">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal mt-12">
          <CoworkerWindow />
        </div>
      </div>
    </section>
  );
}
