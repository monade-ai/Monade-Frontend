"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/trust", label: "Trust" },
  { href: "/pricing", label: "Pricing" },
  { href: "/open-claw", label: "Open Claw" },
  { href: "/blog", label: "Resources" },
];

export default function HomeNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="home-nav">
      <div className="home-shell home-nav__inner">
        <Link href="/" className="home-brand" aria-label="Monade home">
          <Image
            src="/monade-new-logo.png"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span>monade</span>
        </Link>

        <nav className="home-nav__links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="home-nav__actions">
          <Link href="https://dashboard.monade.ai/login" className="home-nav__login">
            Log in
          </Link>
          <Link
            href="https://calendly.com/adhiraj-n1labs/30min"
            className="home-button home-button--small"
            target="_blank"
            rel="noreferrer"
          >
            Get a demo
          </Link>
        </div>

        <button
          type="button"
          className="home-nav__toggle"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="home-mobile-nav"
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <div
        id="home-mobile-nav"
        className={`home-mobile-nav ${isOpen ? "is-open" : ""}`}
      >
        <nav className="home-shell" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://dashboard.monade.ai/login"
            onClick={() => setIsOpen(false)}
          >
            Log in
          </Link>
          <Link
            href="https://calendly.com/adhiraj-n1labs/30min"
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noreferrer"
          >
            Get a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
