"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Building2, FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { LiquidGlassCard } from "./LiquidGlassCard";
import OpenClawBanner from "./sections/OpenClawBanner";

const OpenClawIcon = ({ className }: { className?: string }) => (
  <div className={cn("relative overflow-hidden", className)}>
    <Image
      src="/openclaw-color.png"
      alt="Open Claw"
      fill
      className="object-contain"
    />
  </div>
);

const resourceLinks = [
  { href: "/blog", label: "Blog", icon: BookOpen, description: "Thoughts on voice, design, and AI" },
  { href: "/case-studies", label: "Case Studies", icon: Building2, description: "Real results from real companies" },
  { href: "/release-notes", label: "Release Notes", icon: FileText, description: "What's new in Monade" },
];

interface NavbarProps {
  variant?: "transparent" | "light" | "black";
}

export default function Navbar({ variant }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Determine if we're on a resources page
  const isResourcesPage = ["/blog", "/case-studies", "/release-notes"].some(
    (path) => pathname.startsWith(path)
  );

  // Determine effective theme
  let isLightTheme = false;
  let isBlackTheme = false;

  if (variant === "light") {
    isLightTheme = true;
  } else if (variant === "black") {
    isBlackTheme = true;
  } else if (variant === "transparent") {
    // defaults
  } else {
    // Auto-detect
    isLightTheme = isResourcesPage;
  }

  const textColorClass = "text-[#1A1A1A]";
  const mutedTextColorClass = "text-[#1A1A1A]/70 hover:text-[#1A1A1A]";

  const navLinks = [
    { href: "/#Experience", label: "Experience" },
    { href: "/#HowItWorks", label: "How it works" },
    { href: "/trust", label: "Trust" },
    { href: "/pricing", label: "Pricing" },
    { href: "/open-claw", label: "Open Claw", icon: OpenClawIcon },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
      <OpenClawBanner />
      <div className="max-w-[95%] mx-auto w-full pointer-events-auto mt-4 md:mt-6">
        <div
          className={cn(
            "w-full transition-all duration-500 rounded-2xl border border-slate-200/50 shadow-sm overflow-visible",
            isLightTheme ? "bg-white/70" : isBlackTheme ? "bg-black/70 text-white" : "bg-white/80",
            "backdrop-blur-xl"
          )}
        >
          <div className="flex justify-between items-center px-6 md:px-10 py-6 w-full">
            {/* Logo - Precise and balanced */}
            <Link href="/" className="flex items-center gap-0.5 group transition-all text-3xl">
              <div className="w-[2.35em] h-[2.35em] relative overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/monade-new-logo.png"
                  alt="Monade"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={cn("font-bold tracking-tight", textColorClass)}>
                monade
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 text-lg font-medium transition-colors duration-200",
                    pathname === link.href || (link.href.startsWith('/#') && pathname === '/')
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900",
                    isBlackTheme && (pathname === link.href ? "text-white" : "text-slate-400 hover:text-white")
                  )}
                >
                  {link.icon && <link.icon className="w-5 h-5" />}
                  {link.label}
                </Link>
              ))}

              {/* Resources - Minimalist dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium transition-colors duration-200",
                    isResourcesPage ? "text-slate-900" : "text-slate-500 hover:text-slate-900",
                    isBlackTheme && (isResourcesPage ? "text-white" : "text-slate-400 hover:text-white")
                  )}
                >
                  Resources
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isResourcesOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="w-64 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-xl p-2">
                        {resourceLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsResourcesOpen(false)}
                            className={cn(
                              "group flex items-start gap-3 p-3 rounded-xl transition-colors duration-200",
                              pathname.startsWith(item.href) ? "bg-slate-50" : "hover:bg-slate-50"
                            )}
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900 transition-colors">
                              <item.icon className="w-6 h-6" />
                            </div>
                            <div className="pt-0.5">
                              <span className="block text-base font-bold text-slate-900">{item.label}</span>
                              <p className="text-sm text-slate-500 mt-0.5 font-medium leading-tight">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-5">
              <Link
                href="https://dashboard.monade.ai/login"
                className={cn("text-lg font-bold transition-opacity hover:opacity-70", textColorClass)}
              >
                Log In
              </Link>
              <button
                type="button"
                className="px-6 py-2.5 rounded-full text-lg font-bold transition-all shadow-lg hover:scale-105 active:scale-95 bg-[#1A1A1A] text-white hover:bg-black"
              >
                Book Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className={cn("w-8 h-8", textColorClass)} />
              ) : (
                <Menu className={cn("w-8 h-8", textColorClass)} />
              )}
            </button>
          </div>

          {/* Mobile Menu - Minimalist slide */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="md:hidden overflow-hidden border-t border-slate-100"
              >
                <div className="px-6 pb-8 pt-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center gap-3 py-4 text-3xl font-bold transition-all",
                        pathname === link.href ? "text-slate-900" : "text-slate-500 hover:text-slate-900",
                        isBlackTheme && (pathname === link.href ? "text-white" : "text-slate-400 hover:text-white")
                      )}
                    >
                      {link.icon && <link.icon className={cn("w-8 h-8", pathname === link.href ? "text-primary" : "text-slate-400")} />}
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Resources Accordion */}
                  <div className="py-2">
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className={cn(
                        "flex items-center justify-between w-full py-4 text-3xl font-bold transition-all",
                        isResourcesPage ? "text-slate-900" : "text-slate-500",
                        isBlackTheme && (isResourcesPage ? "text-white" : "text-slate-400")
                      )}
                    >
                      Resources
                      <ChevronDown className={cn("w-8 h-8 transition-transform", isResourcesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isResourcesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-slate-50 rounded-xl px-4"
                        >
                          <div className="py-4 space-y-1">
                            {resourceLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className={cn(
                                  "flex items-center gap-4 p-4 rounded-xl transition-all",
                                  pathname.startsWith(item.href) ? "text-slate-900" : "text-slate-500"
                                )}
                              >
                                <item.icon className="w-8 h-8" />
                                <div className="flex flex-col">
                                  <span className="text-xl font-bold">{item.label}</span>
                                  <p className="text-sm text-[#1A1A1A]/60 mt-0.5 font-medium">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile CTAs */}
                  <div className="pt-8 mt-4 border-t border-black/5 space-y-4">
                    <Link
                      href="https://dashboard.monade.ai/login"
                      className={cn("block w-full py-4 text-3xl font-bold text-center", textColorClass)}
                    >
                      Log In
                    </Link>
                    <button
                      type="button"
                      className="w-full py-5 rounded-full text-3xl font-bold shadow-lg bg-[#1A1A1A] text-white active:scale-95 transition-transform"
                    >
                      Book Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
