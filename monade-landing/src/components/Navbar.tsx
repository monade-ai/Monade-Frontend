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
    { href: "/#Product", label: "Product" },
    { href: "/#Workflows", label: "Workflows" },
    { href: "/#Compliance", label: "Compliance" },
    { href: "/pricing", label: "Pricing" },
    { href: "/open-claw", label: "Open Claw", icon: CrabIcon },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-6 py-6 pointer-events-none">
      <div className="max-w-[90%] mx-auto w-full pointer-events-auto">
        <LiquidGlassCard
          className={cn(
            "w-full transition-all duration-300 overflow-visible",
            isLightTheme ? "bg-white/40" : isBlackTheme ? "bg-black/60" : "bg-white/10"
          )}
          borderRadius="9999px"
          blurIntensity="xl"
          shadowIntensity="md"
          glowIntensity="sm"
        >
          <div className="flex justify-between items-center px-6 md:px-8 py-3 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group transition-all">
              <div className="w-8 h-8 bg-[#FF4D00] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className={cn("font-bold tracking-tight text-xl", textColorClass)}>
                monade
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                    pathname === link.href || (link.href.startsWith('/#') && pathname === '/')
                      ? isLightTheme
                        ? "text-[#FF4D00]"
                        : "text-[#FF4D00]"
                      : mutedTextColorClass
                  )}
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.label}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                    isResourcesPage
                      ? isLightTheme
                        ? "text-[#FF4D00]"
                        : "text-[#FF4D00]"
                      : mutedTextColorClass
                  )}
                >
                  Resources
                  <motion.span
                    animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <LiquidGlassCard
                        className="w-[280px] bg-white/40 overflow-hidden"
                        borderRadius="24px"
                        blurIntensity="lg"
                        shadowIntensity="sm"
                        glowIntensity="none"
                      >
                        <div className="p-2">
                          {resourceLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsResourcesOpen(false)}
                              className={cn(
                                "group flex items-start gap-3 p-3 rounded-xl transition-colors duration-200",
                                pathname.startsWith(item.href)
                                  ? "bg-[#FF4D00]/10"
                                  : "hover:bg-black/5"
                              )}
                            >
                              <div
                                className={cn(
                                  "flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200",
                                  pathname.startsWith(item.href)
                                    ? "bg-[#FF4D00]/20 text-[#FF4D00]"
                                    : "bg-black/5 text-[#888] group-hover:bg-[#FF4D00]/20 group-hover:text-[#FF4D00]"
                                )}>
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div className="pt-0.5">
                                <span
                                  className={cn(
                                    "text-sm font-bold transition-colors duration-200",
                                    pathname.startsWith(item.href)
                                      ? "text-[#FF4D00]"
                                      : "text-[#1A1A1A] group-hover:text-[#FF4D00]"
                                  )}
                                >
                                  {item.label}
                                </span>
                                <p className="text-xs text-[#1A1A1A]/60 mt-0.5 font-medium">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </LiquidGlassCard>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                className={cn("text-sm font-bold transition-opacity hover:opacity-70", textColorClass)}
              >
                Log In
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:scale-105 active:scale-95 bg-[#1A1A1A] text-white hover:bg-black"
              >
                Book Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
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
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-8 pb-8 pt-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center gap-3 py-3 text-lg font-medium transition-colors",
                        pathname === link.href ? "text-[#FF4D00]" : cn(textColorClass, "hover:text-[#FF4D00]")
                      )}
                    >
                      {link.icon && <link.icon className="w-5 h-5 text-[#FF4D00]" />}
                      {link.label}
                    </Link>
                  ))}

                  {/* Resources Section */}
                  <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/5">
                    <p className="text-xs font-medium text-[#888] uppercase tracking-wider mb-3">
                      Resources
                    </p>
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "flex items-center gap-3 py-3 text-lg font-medium transition-colors",
                          pathname.startsWith(item.href) ? "text-[#FF4D00]" : cn(textColorClass, "hover:text-[#FF4D00]")
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTAs */}
                  <div className="pt-6 mt-4 border-t border-black/5 dark:border-white/5 space-y-3">
                    <button type="button" className={cn("w-full py-3 text-lg font-bold", textColorClass)}>
                      Log In
                    </button>
                    <button
                      type="button"
                      className="w-full py-3 rounded-full text-lg font-bold shadow-lg bg-[#1A1A1A] text-white"
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
