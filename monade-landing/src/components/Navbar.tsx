"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Building2, FileText, ChevronDown } from "lucide-react";

const resourceLinks = [
  { href: "/blog", label: "Blog", icon: BookOpen, description: "Thoughts on voice, design, and AI" },
  { href: "/case-studies", label: "Case Studies", icon: Building2, description: "Real results from real companies" },
  { href: "/release-notes", label: "Release Notes", icon: FileText, description: "What's new in Monade" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Determine if we're on a resources page
  const isResourcesPage = ["/blog", "/case-studies", "/release-notes"].some(
    (path) => pathname.startsWith(path)
  );

  // Use light theme for resources pages, dark for others
  const isLightTheme = isResourcesPage;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-colors duration-300 ${
        isLightTheme
          ? "bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-[#E5E5E5]/50"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF4D00] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span
            className={`font-bold tracking-tight text-xl ${
              isLightTheme ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            monade
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? isLightTheme
                    ? "text-[#1A1A1A]"
                    : "text-white"
                  : isLightTheme
                  ? "text-[#666] hover:text-[#1A1A1A]"
                  : "text-white/70 hover:text-white"
              }`}
            >
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
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                isResourcesPage
                  ? isLightTheme
                    ? "text-[#FF4D00]"
                    : "text-white"
                  : isLightTheme
                  ? "text-[#666] hover:text-[#1A1A1A]"
                  : "text-white/70 hover:text-white"
              }`}
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
                  <div className="w-[280px] bg-white rounded-2xl shadow-xl border border-[#E5E5E5]/50 overflow-hidden">
                    <div className="p-2">
                      {resourceLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsResourcesOpen(false)}
                          className={`group flex items-start gap-3 p-3 rounded-xl transition-colors duration-200 ${
                            pathname.startsWith(item.href)
                              ? "bg-[#FF4D00]/5"
                              : "hover:bg-[#F8F8F8]"
                          }`}
                        >
                          <div
                            className={`flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 ${
                              pathname.startsWith(item.href)
                                ? "bg-[#FF4D00]/10 text-[#FF4D00]"
                                : "bg-[#F5F5F5] text-[#888] group-hover:bg-[#FF4D00]/10 group-hover:text-[#FF4D00]"
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="pt-0.5">
                            <span
                              className={`text-sm font-medium transition-colors duration-200 ${
                                pathname.startsWith(item.href)
                                  ? "text-[#FF4D00]"
                                  : "text-[#1A1A1A] group-hover:text-[#FF4D00]"
                              }`}
                            >
                              {item.label}
                            </span>
                            <p className="text-xs text-[#888] mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className={`text-sm font-bold transition-opacity ${
              isLightTheme
                ? "text-[#1A1A1A] hover:opacity-70"
                : "text-white hover:opacity-70"
            }`}
          >
            Log In
          </button>
          <button type="button" className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-black transition-all shadow-soft">
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-2"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isLightTheme ? "text-[#1A1A1A]" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isLightTheme ? "text-[#1A1A1A]" : "text-white"}`} />
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
            className="md:hidden bg-white border-b border-[#E5E5E5] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#FF4D00]"
                      : "text-[#1A1A1A] hover:text-[#FF4D00]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Resources Section */}
              <div className="pt-4 mt-4 border-t border-[#F0F0F0]">
                <p className="text-xs font-medium text-[#888] uppercase tracking-wider mb-3">
                  Resources
                </p>
                {resourceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 py-3 text-lg font-medium transition-colors ${
                      pathname.startsWith(item.href)
                        ? "text-[#FF4D00]"
                        : "text-[#1A1A1A] hover:text-[#FF4D00]"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="pt-6 mt-4 border-t border-[#F0F0F0] space-y-3">
                <button type="button" className="w-full py-3 text-lg font-bold text-[#1A1A1A]">
                  Log In
                </button>
                <button type="button" className="w-full bg-[#1A1A1A] text-white py-3 rounded-full text-lg font-bold">
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
