import React from "react";

export default function PricingPage() {
  return (
    <div style={{
      backgroundColor: "var(--background)",
      color: "var(--foreground)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem",
      borderTop: "1px solid var(--border)"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontFamily: "var(--font-funnel)" }}>Contact Sales</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "640px", marginBottom: "2rem", color: "var(--muted-foreground)" }}>
        Let's discuss how Monade.ai can help your business. Schedule a 30-minute meeting with our team.
      </p>
      <a
        href="https://calendly.com/thakurnarayan4505/30min?month=2025-08"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "var(--brand)",
          color: "var(--brand-ink)",
          padding: "0.75rem 1.5rem",
          borderRadius: 0,
          fontSize: "1.1rem",
          fontWeight: 600,
          textDecoration: "none",
          transition: "opacity 0.2s ease",
          display: "inline-block"
        }}
        onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; }}
        onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
      >
        Schedule a Meeting
      </a>
    </div>
  );
}
