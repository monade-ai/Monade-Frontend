"use client";

import Image from "next/image";
import Link from "next/link";
import { openCookieSettings } from "@/components/consent/ConsentManager";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Products", href: "/products" },
      { label: "Pricing", href: "/pricing" },
      { label: "Trust", href: "/trust" },
      { label: "Open Claw", href: "/open-claw" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "https://calendly.com/adhiraj-n1labs/30min" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Release notes", href: "/release-notes" },
      { label: "Trust center", href: "/trust" },
    ],
  },
];

type FooterCTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
};

export const FooterCTA = ({
  title = "Give your business a voice.",
  description = "Launch a focused voice workflow, prove the outcome, then scale it.",
  primaryLabel = "See pricing",
  primaryHref = "/pricing",
  primaryExternal = false,
  secondaryLabel = "Talk to us",
  secondaryHref = "https://calendly.com/adhiraj-n1labs/30min",
  secondaryExternal = true,
}: FooterCTAProps = {}) => {
  return (
    <footer className="border-t border-ink/10 bg-background text-ink">
      <section className="bg-clay text-manila">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl leading-[0.98] text-balance md:text-7xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-manila/80">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href={primaryHref}
              target={primaryExternal ? "_blank" : undefined}
              rel={primaryExternal ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-12 items-center justify-center bg-ink px-7 font-semibold text-manila transition-colors hover:bg-manila hover:text-ink"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              target={secondaryExternal ? "_blank" : undefined}
              rel={secondaryExternal ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-12 items-center justify-center border border-manila/50 px-7 font-semibold text-manila transition-colors hover:border-manila"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-bold tracking-[-0.04em]">
              <Image src="/monade-new-logo.png" alt="" width={28} height={28} />
              <span className="text-lg">monade</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              Voice agents designed for real conversations across India.
            </p>
          </div>

          {footerLinks.map((category) => (
            <nav key={category.title} aria-label={`${category.title} links`}>
              <h3 className="text-sm font-semibold text-ink">{category.title}</h3>
              <ul className="mt-4 space-y-3">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-ink/60 transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-t border-ink/10 py-8 text-sm text-ink/55 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Monade AI Inc.</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Legal links">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
            <Link href="/cookies" className="hover:text-ink">Cookies</Link>
            <button type="button" onClick={openCookieSettings} className="hover:text-ink">
              Cookie settings
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
