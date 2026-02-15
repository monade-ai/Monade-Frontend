"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Building2, FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { LiquidGlassCard } from "./LiquidGlassCard";

const CrabIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5" />
    <path d="M10 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.5" />
    <path d="M12.5 21a7.5 7.5 0 0 1-7.5-7.5c0-3.5 2.5-6.5 6-7.2" />
    <path d="M11.5 21a7.5 7.5 0 0 0 7.5-7.5c0-3.5-2.5-6.5-6-7.2" />
    <path d="M15 16l2 2" />
    <path d="M9 16l-2 2" />
    <path d="M16 13l3 1" />
    <path d="M8 13l-3 1" />
  </svg>
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
  const isDarkBg = variant === "black";

  const textColorClass = isDarkBg ? "text-white" : "text-slate-900";
  const mutedTextColorClass = isDarkBg ? "text-white/60 hover:text-white" : "text-slate-500 hover:text-slate-900";

  const navLinks = [
    { href: "/#Product", label: "Product" },
    { href: "/#Workflows", label: "Workflows" },
    { href: "/#Compliance", label: "Compliance" },
    { href: "/pricing", label: "Pricing" },
    { href: "/open-claw", label: "Open Claw", icon: CrabIcon },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-6 py-6 pointer-events-none">
      <div className="max-w-5xl mx-auto w-full pointer-events-auto">
        <LiquidGlassCard
          className={cn(
            "w-full transition-all duration-500 ease-[0.16,1,0.3,1] overflow-visible border",
            isDarkBg ? "bg-black/80 border-white/10" : "bg-white/80 border-slate-200/50"
          )}
          borderRadius={isMenuOpen ? "32px" : "9999px"}
          blurIntensity="xl"
          shadowIntensity="none"
          glowIntensity="none"
        >
          <div className="flex justify-between items-center px-6 md:px-8 py-4 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-10">
              <div className={cn(
                "w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm transition-colors",
                isDarkBg ? "bg-white text-black" : "bg-slate-900 text-white"
              )}>
                M
              </div>
              <span className={cn("font-bold tracking-tight text-lg transition-colors", textColorClass)}>
                monade
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href.startsWith('/#') && pathname === '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-full",
                      isActive ? (isDarkBg ? "text-white" : "text-slate-900") : mutedTextColorClass
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className={cn(
                          "absolute inset-0 rounded-full z-0",
                          isDarkBg ? "bg-white/10" : "bg-slate-100/80"
                        )}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {link.icon && <link.icon className="w-3.5 h-3.5 stroke-[1.5]" />}
                      {link.label}
                    </span>
                  </Link>
                );
              })}

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-full",
                    isResourcesOpen ? (isDarkBg ? "bg-white/10 text-white" : "bg-slate-100/80 text-slate-900") : mutedTextColorClass
                  )}
                >
                  Resources
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isResourcesOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className={cn(
                        "w-64 backdrop-blur-xl border rounded-2xl shadow-2xl p-1.5 overflow-hidden",
                        isDarkBg ? "bg-black/90 border-white/10" : "bg-white/95 border-slate-200/60"
                      )}>
                        {resourceLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsResourcesOpen(false)}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-xl transition-colors group",
                              isDarkBg ? "hover:bg-white/5" : "hover:bg-slate-50"
                            )}
                          >
                            <div className={cn(
                              "flex items-center justify-center w-8 h-8 rounded-lg transition-colors",
                              isDarkBg ? "bg-white/10 text-white/60 group-hover:text-white" : "bg-slate-50 text-slate-400 group-hover:text-primary"
                            )}>
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col text-left">
                              <span className={cn(
                                "text-sm font-semibold transition-colors",
                                isDarkBg ? "text-white/80 group-hover:text-white" : "text-slate-900 group-hover:text-primary"
                              )}>
                                {item.label}
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium">
                                {item.description}
                              </span>
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
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                className={cn("px-4 py-2 text-sm font-semibold transition-colors", mutedTextColorClass)}
              >
                Log In
              </button>
              <button
                type="button"
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold transition-all active:scale-[0.98]",
                  isDarkBg ? "bg-white text-black hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-black"
                )}
              >
                Book Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                isDarkBg ? "hover:bg-white/10" : "hover:bg-slate-100"
              )}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className={cn("w-6 h-6", textColorClass)} />
              ) : (
                <Menu className={cn("w-6 h-6", textColorClass)} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className={cn(
                  "px-6 pb-10 pt-4 space-y-1 border-t",
                  isDarkBg ? "border-white/10" : "border-slate-100/50"
                )}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center gap-3 py-4 text-2xl font-semibold tracking-tight transition-all",
                        pathname === link.href ? "text-primary" : textColorClass
                      )}
                    >
                      {link.icon && <link.icon className="w-6 h-6 text-primary/80" />}
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Resources Accordion */}
                  <div className="py-2">
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className={cn(
                        "flex items-center justify-between w-full py-4 text-2xl font-semibold tracking-tight transition-all",
                        isResourcesPage ? "text-primary" : textColorClass
                      )}
                    >
                      Resources
                      <ChevronDown className={cn("w-6 h-6 transition-transform duration-300", isResourcesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isResourcesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={cn(
                            "overflow-hidden rounded-2xl mx-[-0.5rem] px-4",
                            isDarkBg ? "bg-white/5" : "bg-slate-50"
                          )}
                        >
                          <div className="py-4 space-y-1">
                            {resourceLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className={cn(
                                  "flex items-center gap-4 p-4 rounded-xl",
                                  pathname.startsWith(item.href) ? "text-primary" : (isDarkBg ? "text-white/60" : "text-slate-500")
                                )}
                              >
                                <item.icon className="w-5 h-5" />
                                <div className="flex flex-col">
                                  <span className="text-lg font-semibold">{item.label}</span>
                                  <span className="text-xs font-medium opacity-60">{item.description}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile CTAs */}
                  <div className={cn(
                    "pt-8 mt-6 border-t flex flex-col gap-4",
                    isDarkBg ? "border-white/10" : "border-slate-100/50"
                  )}>
                    <button type="button" className={cn(
                      "w-full py-5 rounded-2xl text-xl font-semibold",
                      isDarkBg ? "bg-white/5 text-white" : "bg-slate-50 text-slate-900"
                    )}>
                      Log In
                    </button>
                    <button
                      type="button"
                      className={cn(
                        "w-full py-5 rounded-2xl text-xl font-bold transition-all active:scale-[0.98]",
                        isDarkBg ? "bg-white text-black" : "bg-slate-900 text-white"
                      )}
                    >
                      Book Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LiquidGlassCard>
      </div >
    </header >
  );
}
