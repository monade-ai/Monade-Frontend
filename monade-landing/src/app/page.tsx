'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AgentGramophone from "@/components/sections/AgentGramophone";
import BentoGrid from "@/components/sections/BentoGrid";
import AppIntegration from "@/components/sections/AppIntegration";
import HowItWorks from "@/components/sections/HowItWorks";
import LanguageSupport from "@/components/sections/LanguageSupport";
import CRMIntegrations from "@/components/sections/CRMIntegrations";
import Verticals from "@/components/sections/Verticals";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary font-sans antialiased text-slate-900">
      <Navbar variant="transparent" />

      <main>
        <Hero />
        <AgentGramophone />
        <BentoGrid />
        <AppIntegration />
        <HowItWorks />
        <LanguageSupport />
        <CRMIntegrations />
        <Verticals />
        <Testimonials />
        <FAQ />
      </main>

      <FooterCTA />
    </div>
  );
}
