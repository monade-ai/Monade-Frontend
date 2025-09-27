"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  type NavLink = { href: string; label: string };

  const desktopLinks: NavLink[] = [
    ...(pathname !== "/products" ? [{ href: "/products", label: "← Back" }] : []),
    { href: "/products", label: "Products" },
    { href: "/demo", label: "Get a Demo" },
    { href: "/login", label: "Log In" },
  ];

  const mobileLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
        }}
      >

        {/* Logo/Home Link - Only show on non-home pages */}
        {pathname !== "/" && (
          <div className="hidden md:block">
            <Link href="/" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none" }}>
              monade.ai
            </Link>
          </div>
        )}

        {/* Mobile Logo - Only show on non-home pages */}
        {pathname !== "/" && (
          <div className="md:hidden">
            <Link href="/" style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "bold", textDecoration: "none" }}>
              monade.ai
            </Link>
          </div>
        )}

        {/* Spacer for home page to center the menu button */}
        {pathname === "/" && <div></div>}

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginTop: "0.5rem" // lowered position in mobile view
          }}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            background: "#000",
            color: "#fff",
            padding: "1rem",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={closeMenu}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            {mobileLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} style={linkStyle}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.2rem",
  fontWeight: "bold",
  backgroundColor: "#000",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
};
