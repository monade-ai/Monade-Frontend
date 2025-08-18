import React from "react";

export default function PricingPage() {
  return (
    <div style={{ 
      backgroundColor: "#000", 
      color: "#fff", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Contact Sales</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem" }}>
        Let's discuss how Monade.ai can help your business. Schedule a 30-minute meeting with our team.
      </p>
      <a 
        href="https://calendly.com/thakurnarayan4505/30min?month=2025-08" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "0.75rem 1.5rem",
          borderRadius: "5px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "background-color 0.3s ease"
        }}
      >
        Schedule a Meeting
      </a>
    </div>
  );
}
