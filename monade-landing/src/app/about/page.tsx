import React from "react";
import Image from "next/image";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Monade.ai</h1>
        <p className="about-text">
          At Monade.ai, we are redefining the future of customer engagement by building AI-driven communication solutions that help businesses connect with their customers more intelligently and efficiently. In today’s world, customer expectations are higher than ever—speed, personalization, and availability are no longer optional, they’re essential. That’s where we come in.
        </p>
        <p className="about-text">
          Our mission is simple yet powerful: to empower companies with intelligent, multilingual, and context-aware virtual agents that deliver seamless, human-like experiences across every interaction. By leveraging state-of-the-art AI, natural language processing, and conversational intelligence, we ensure that businesses can engage their customers in a way that feels effortless, personal, and always on.
        </p>
      </section>

      <section className="about-services">
        <h2>What We Do</h2>
        <ul>
          <li>AI-Powered Multilingual Customer Support - Break language barriers with AI assistants capable of understanding and responding in multiple languages, ensuring inclusivity and global reach.</li>
          <li>Industry-Specific AI Solutions - Tailored AI workflows designed for Real Estate, Logistics, and Sales, helping companies automate lead nurturing, booking, and support operations with domain-specific intelligence.</li>
          <li>Voice & Text-Based AI Assistants - Provide customers with human-like conversations—whether they prefer chat, email, or voice calls—ensuring consistency and reliability across all channels.</li>
          <li>Custom AI Integrations for Business Workflows - Seamlessly connect with existing CRMs, ERPs, and communication platforms to enhance business processes without disrupting established systems.</li>
          <li>24/7 Automated Customer Engagement - From answering FAQs to handling complex queries, our AI agents ensure your business is always available, building trust and driving satisfaction around the clock.</li>
        </ul>
      </section>

      
    </div>
  );
}
