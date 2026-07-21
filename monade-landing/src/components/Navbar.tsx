"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/trust", label: "Trust" },
  { href: "/pricing", label: "Pricing" },
  { href: "/open-claw", label: "Open Claw" },
  { href: "/blog", label: "Resources" },
];

interface NavbarProps {
  variant?: "transparent" | "light" | "black";
}

export default function Navbar({ variant }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header data-variant={variant} className="fixed inset-x-0 top-0 z-[1000] border-b border-ink/10 bg-background/92 text-ink backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] w-[min(1440px,calc(100%-64px))] items-center justify-between gap-8 max-md:w-[calc(100%-32px)]">
        <Link href="/" className="inline-flex items-center gap-2 font-bold tracking-[-0.04em]" aria-label="Monade home">
          <Image src="/monade-new-logo.png" alt="" width={28} height={28} priority />
          <span className="text-[1.05rem]">monade</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors ${
                isCurrent(link.href) ? "text-ink" : "text-ink/60 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="https://dashboard.monade.ai/login"
            className="text-sm font-medium text-ink/60 transition-colors hover:text-ink"
          >
            Log in
          </Link>
          <Link
            href="https://calendly.com/adhiraj-n1labs/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center bg-ink px-5 text-sm font-semibold text-background transition-colors hover:bg-primary"
          >
            Get a demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink/15 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="site-mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="site-mobile-nav"
        className={`grid border-t transition-[grid-template-rows,border-color] duration-300 lg:hidden ${
          isOpen ? "grid-rows-[1fr] border-ink/10" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <nav className="min-h-0 overflow-hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex w-[calc(100%-32px)] flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className="border-b border-ink/10 py-4 text-xl font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://dashboard.monade.ai/login"
              onClick={() => setIsOpen(false)}
              className="border-b border-ink/10 py-4 text-xl font-semibold"
            >
              Log in
            </Link>
            <Link
              href="https://calendly.com/adhiraj-n1labs/30min"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="my-4 inline-flex min-h-12 items-center justify-center bg-ink px-5 font-semibold text-background"
            >
              Get a demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
