"use client";

import { useState } from "react";
import site from "@/content/site.json";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-16 border-t border-border-soft py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <h2 className="text-[30px] leading-tight font-medium tracking-[-0.02em] md:text-[40px]">Questions we get on the first call</h2>
          </div>
          <div className="reveal md:col-span-8">
            <ul className="divide-y divide-border-soft border-y border-border-soft">
              {site.faq.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="text-[16px] font-medium md:text-[17px]">{item.q}</span>
                      <span
                        className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform ${
                          isOpen ? "rotate-45 border-amber text-amber" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 pr-12 text-[15px] leading-relaxed text-muted">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
