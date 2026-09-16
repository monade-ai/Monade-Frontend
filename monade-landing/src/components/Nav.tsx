"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import site from "@/content/site.json";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-black/75 backdrop-blur-md border-b border-border-soft" : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* three equal columns so the middle links sit on the true centre line of the page */}
      <div className="container-x grid h-16 grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/" className="flex items-center justify-self-start" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {site.nav.links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[14px] text-muted transition-colors hover:text-text">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end md:flex">
          <a href={site.nav.loginHref} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            {site.nav.login}
          </a>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-md border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 top-0 h-[1.5px] w-4 bg-text transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-[1.5px] w-4 bg-text transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border-soft bg-black md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {site.nav.links.map((l) => (
              <Link key={l.href} href={l.href} className="py-3 text-[16px] text-text" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <a href={site.nav.loginHref} target="_blank" rel="noreferrer" className="btn btn-ghost mt-3" onClick={() => setOpen(false)}>
              {site.nav.login}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
