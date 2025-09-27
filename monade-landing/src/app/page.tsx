'use client';

import Image from "next/image";
import StackAnimation from "@/components/StackAnimation";
import PhoneUI from "@/components/PhoneUI";
import { useState, useEffect } from 'react';

// Safelist Tailwind classes for dynamic generation:
// hover:border-red-400/50 shadow-red-500/20 bg-red-600/20 hover:bg-red-600/40 border-red-500/30 text-red-400 from-red-500/20
// hover:border-orange-400/50 shadow-orange-500/20 bg-orange-600/20 hover:bg-orange-600/40 border-orange-500/30 text-orange-400 from-orange-500/20
// hover:border-amber-400/50 shadow-amber-500/20 bg-amber-600/20 hover:bg-amber-600/40 border-amber-500/30 text-amber-400 from-amber-500/20
// hover:border-lime-400/50 shadow-lime-500/20 bg-lime-600/20 hover:bg-lime-600/40 border-lime-500/30 text-lime-400 from-lime-500/20
// hover:border-emerald-400/50 shadow-emerald-500/20 bg-emerald-600/20 hover:bg-emerald-600/40 border-emerald-500/30 text-emerald-400 from-emerald-500/20
// hover:border-teal-400/50 shadow-teal-500/20 bg-teal-600/20 hover:bg-teal-600/40 border-teal-500/30 text-teal-400 from-teal-500/20
// hover:border-sky-400/50 shadow-sky-500/20 bg-sky-600/20 hover:bg-sky-600/40 border-sky-500/30 text-sky-400 from-sky-500/20
// hover:border-cyan-400/50 shadow-cyan-500/20 bg-cyan-600/20 hover:bg-cyan-600/40 border-cyan-500/30 text-cyan-400 from-cyan-500/20
// hover:border-purple-400/50 shadow-purple-500/20 bg-purple-600/20 hover:bg-purple-600/40 border-purple-500/30 text-purple-400 from-purple-500/20
// hover:border-yellow-400/50 shadow-yellow-500/20 bg-yellow-600/20 hover:bg-yellow-600/40 border-yellow-500/30 text-yellow-400 from-yellow-500/20
// hover:border-green-400/50 shadow-green-500/20 bg-green-600/20 hover:bg-green-600/40 border-green-500/30 text-green-400 from-green-500/20
// hover:border-blue-400/50 shadow-blue-500/20 bg-blue-600/20 hover:bg-blue-600/40 border-blue-500/30 text-blue-400 from-blue-500/20

export default function Home() {
  const [showPhoneUI, setShowPhoneUI] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<string>('sales');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [currentIndustry, setCurrentIndustry] = useState(0);

  const useCases = [
    { id: 'sales', name: 'Sales Agent', audioPrefix: 'Sales', description: 'Automated outbound sales calls with intelligent lead qualification and conversion optimization.', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', voices: ['english', 'hindi', 'arabic'] },
    { id: 'support', name: 'Customer Support', audioPrefix: 'CustomerSupport', description: '24/7 intelligent customer service with instant issue resolution and seamless escalation.', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z', voices: ['english', 'hindi', 'arabic'] },
    { id: 'real-estate', name: 'Real Estate Agent', audioPrefix: 'RealEstate', description: 'Property inquiries, scheduling viewings, and lead nurturing with personalized conversations.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', voices: ['english', 'hindi', 'arabic'] },
    { id: 'logistics', name: 'Logistics Support', audioPrefix: 'Logistics', description: 'Package tracking, delivery updates, and shipment coordination with real-time status updates.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', voices: ['english', 'hindi', 'arabic'] },
  ];

  const industries = [
    { name: 'Debt Collection', description: 'Automate debt collection with AI voice agents', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' },
    { name: 'Small Business', description: 'Scale customer service with AI voice agents', icon: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' },
    { name: 'E-Commerce', description: 'Enhance customer support with voice AI', icon: 'M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' },
    { name: 'Real Estate', description: 'Automate property inquiries with voice AI', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { name: 'Logistics', description: 'Streamline operations with voice automation', icon: 'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' },
    { name: 'Recruitment', description: 'Screen candidates with AI voice agents', icon: 'M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-5A1.5 1.5 0 0 0 12.04 8.37L9.5 16H12v6h8zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6 7.5H1A1.5 1.5 0 0 0 -.46 8.37L-3 16h2.5v6h8z' },
    { name: 'Healthcare', description: 'Improve patient experience with AI voice', icon: 'M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z' },
  ];


  const handlePlayAudio = (useCaseId: string, language: string) => {
    const useCase = useCases.find(uc => uc.id === useCaseId);
    if (!useCase) return;

    let audioSrc = '';
    const lang = language.charAt(0).toUpperCase() + language.slice(1);

    switch (useCaseId) {
      case 'sales':
        audioSrc = `/audio/Sales${lang}.wav`;
        break;
      case 'support':
        if (language === 'english') audioSrc = '/audio/CustomerSupportEnglish.wav';
        else if (language === 'hindi') audioSrc = '/audio/customersupporthindi.wav';
        else if (language === 'arabic') audioSrc = '/audio/customerarabic.wav';
        break;
      case 'real-estate':
        if (language === 'english') audioSrc = '/audio/RealEstateEnglish.wav';
        else if (language === 'hindi') audioSrc = '/audio/Real%20Estate%20Hindi.wav';
        else if (language === 'arabic') audioSrc = '/audio/RealEstateArabic.wav';
        break;
      case 'logistics':
        if (language === 'english') audioSrc = '/audio/logistics-sample.wav';
        else if (language === 'hindi') audioSrc = '/audio/LogisticsHindi.wav';
        else if (language === 'arabic') audioSrc = '/audio/LogisticArabic.wav';
        break;
      default:
        break;
    }

    if (playingAudio === audioSrc) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(audioSrc);
    }
  };

  const languages = [
    { id: 'english', name: 'English', flag: '🇺🇸', color: 'red' },
    { id: 'hindi', name: 'Hindi', flag: '🇮🇳', color: 'orange' },
    { id: 'tamil', name: 'Tamil', flag: '🇮🇳', color: 'amber' },
    { id: 'marathi', name: 'Marathi', flag: '🇮🇳', color: 'lime' },
    { id: 'spanish', name: 'Spanish', flag: '🇪🇸', color: 'emerald' },
    { id: 'bengali', name: 'Bengali', flag: '🇧🇩', color: 'teal' },
    { id: 'gujarati', name: 'Gujarati', flag: '🇮🇳', color: 'sky' },
    { id: 'kannada', name: 'Kannada', flag: '🇮🇳', color: 'cyan' },
    { id: 'arabic', name: 'Arabic', flag: '🇸🇦', color: 'purple' },
    { id: 'german', name: 'German', flag: '🇩🇪', color: 'yellow' },
    { id: 'italian', name: 'Italian', flag: '🇮🇹', color: 'green' },
    { id: 'french', name: 'French', flag: '🇫🇷', color: 'blue' },
  ];

  return (
    <div className="min-h-screen bg-black text-white cosmic-background">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-900/50 via-black to-orange-900/50 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12 backdrop-blur-sm">
        <div className="hidden md:flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image 
              src="/whatsapp-logo.jpg" 
              alt="Monade AI Voice Agent WhatsApp Integration" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
          </div>
          <span className="text-white font-bold text-xl ml-2">monade.ai</span>
        </div>
        <div className="hidden md:flex items-center justify-center space-x-8 text-gray-200 ml-16">
<a href="/products" className="text-lg font-medium hover:text-white transition-colors">Products</a>
          <a href="#industries" className="text-lg font-medium hover:text-white transition-colors">Industries</a>
          <a href="/pricing" className="text-lg font-medium hover:text-white transition-colors">Pricing</a>
          <a href="/about" className="text-lg font-medium hover:text-white transition-colors">About</a>
          <a href="/team" className="text-lg font-medium hover:text-white transition-colors">Team</a>
        </div>
          <div className="flex items-center space-x-3 ml-auto">
            <button
              onClick={() => setShowPhoneUI(true)}
              className="border border-gray-600/50 px-4 py-2 rounded-lg hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200 flex items-center space-x-2 text-sm font-medium backdrop-blur-sm shimmer"
            >
              <span>Get a Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="https://dashboard.monade.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex border border-gray-600/50 px-4 py-2 rounded-lg hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200 items-center space-x-2 text-sm font-medium backdrop-blur-sm"
            >
              <span>Log In</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
      </nav>

      

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Monade AI Voice Agent",
              "description": "Monade AI Voice Agent offers conversational AI solutions for automated customer service, sales, logistics, and real estate. Our AI virtual assistants enhance efficiency, reduce costs, and provide 24/7 support.",
              "serviceType": "AI Voice Assistant",
              "provider": {
                "@type": "Organization",
                "name": "Monade AI Voice Agent"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Global"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Monade AI Voice Agent Solutions",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Customer Service Automation",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "24/7 AI Customer Support"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Sales Enhancement",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Lead Qualification"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Logistics Optimization",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Shipment Tracking"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Real Estate Efficiency",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Property Inquiry Handling"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          `}
        </script>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Monade AI Voice Agent
          </span>
          <br />
          Your Customers Think
          <br />
          We’re Human
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Automate your customer interactions with our advanced AI voice agents that sound remarkably human.
          Monade provides intelligent conversational AI solutions to handle calls, qualify leads, and provide 24/7 support at a fraction of the cost, enhancing business efficiency and customer experience.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setShowPhoneUI(true)}
            className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 text-lg font-medium"
          >
            <span>Try the Demo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </main>

      {/* Business Summary Section */}
      <section className="relative py-16 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              Live Tech Startup Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Monade AI
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Monade is a <strong className="text-white">live AI voice agent platform</strong> that helps <strong className="text-white">businesses across industries</strong> automate customer interactions with human-like conversational AI. We serve <strong className="text-white">real estate, e-commerce, logistics, and healthcare companies</strong> by providing 24/7 intelligent voice agents that reduce operational costs by up to 80% while improving customer satisfaction and response times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-black/30 rounded-lg p-4 border border-gray-600/30">
                <div className="text-2xl font-bold text-orange-400 mb-2">80%</div>
                <div className="text-gray-300 text-sm">Cost Reduction</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-gray-600/30">
                <div className="text-2xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Availability</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-gray-600/30">
                <div className="text-2xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="relative py-16 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Our AI Voice Agent in Action
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Watch how our AI voice agents handle real customer conversations with human-like intelligence and natural flow.
          </p>
          
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-2xl">
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.loom.com/embed/3f9c7780719d4d48845fba5b056c9f98?sid=cdd31389-4283-414c-bef5-549156be1b4b"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                title="Monade AI Voice Agent Demo"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-1">Real Conversations</div>
                <div className="text-gray-400">Actual customer interactions</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-1">Human-like AI</div>
                <div className="text-gray-400">Natural conversation flow</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-1">50+ Languages</div>
                <div className="text-gray-400">Global deployment ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="relative py-16 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Problem We Solve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional customer service is expensive, limited, and inconsistent. Businesses struggle with high operational costs and poor customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Current Challenges
              </h3>
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2">High Operational Costs</h4>
                  <p className="text-gray-300 text-sm">Hiring, training, and maintaining customer service teams costs $50,000+ per agent annually</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2">Limited Availability</h4>
                  <p className="text-gray-300 text-sm">Human agents work limited hours, leaving customers waiting during off-hours and weekends</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2">Inconsistent Experience</h4>
                  <p className="text-gray-300 text-sm">Service quality varies by agent mood, training level, and experience</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2">Scalability Issues</h4>
                  <p className="text-gray-300 text-sm">Difficult to quickly scale support during peak times or business growth</p>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Monade Solutions
              </h3>
              <div className="space-y-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">80% Cost Reduction</h4>
                  <p className="text-gray-300 text-sm">AI agents cost a fraction of human agents while handling unlimited concurrent calls</p>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">24/7 Availability</h4>
                  <p className="text-gray-300 text-sm">Never miss a customer call with round-the-clock AI agents in 50+ languages</p>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">Consistent Excellence</h4>
                  <p className="text-gray-300 text-sm">Every interaction follows best practices with human-like empathy and professionalism</p>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">Instant Scalability</h4>
                  <p className="text-gray-300 text-sm">Scale from 1 to 1000+ concurrent calls instantly without hiring or training delays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="mt-16 bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-orange-900/30 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Business Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">80%</div>
                <div className="text-gray-300">Lower Costs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">3x</div>
                <div className="text-gray-300">Faster Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
                <div className="text-gray-300">Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Use Cases and Language Selection Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/70 via-cyan-900/50 to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-teal-600/20 via-teal-800/12 to-transparent rounded-full blur-3xl opacity-60"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-radial from-cyan-600/18 via-cyan-700/10 to-transparent rounded-full blur-3xl opacity-55"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-emerald-600/16 via-emerald-800/8 to-transparent rounded-full blur-3xl opacity-50"></div>
          </div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-20 w-0.5 h-0.5 bg-teal-200 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-40 w-0.5 h-0.5 bg-emerald-200 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-20 w-0.5 h-0.5 bg-sky-200 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-teal-100 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-cyan-100 rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-teal-900/15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
                Monade AI Voice Agent: Lifelike Voices for Every Use Case
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Explore how Monade's advanced conversational AI delivers lifelike voices across various applications. Select a use case below to experience our AI virtual assistant capabilities in multiple global languages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Use Cases Column */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 lg:col-span-2">Key Features of Monade AI Voice Agent</h2>
              {useCases.map((useCase) => (
                <div
                  key={useCase.id}
                  className={`bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${selectedUseCase === useCase.id ? 'border-orange-500' : ''}`}
                  onClick={() => setSelectedUseCase(useCase.id)}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>

            {/* Language Cards Column */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex justify-center gap-4">
                {languages
                  .filter(lang => ['english', 'hindi', 'arabic'].includes(lang.id))
                  .map((lang) => {
                    const isEnabled = useCases.find(uc => uc.id === selectedUseCase)?.voices.includes(lang.id);
                    const useCase = useCases.find(uc => uc.id === selectedUseCase);
                    let audioSrc = '';
                    if (useCase) {
                      const langUpper = lang.id.charAt(0).toUpperCase() + lang.id.slice(1);
                      switch (selectedUseCase) {
                        case 'sales':
                          audioSrc = `/audio/Sales${langUpper}.wav`;
                          break;
                        case 'support':
                          if (lang.id === 'english') audioSrc = '/audio/CustomerSupportEnglish.wav';
                          else if (lang.id === 'hindi') audioSrc = '/audio/customersupporthindi.wav';
                          else if (lang.id === 'arabic') audioSrc = '/audio/customerarabic.wav';
                          break;
                        case 'real-estate':
                          if (lang.id === 'english') audioSrc = '/audio/RealEstateEnglish.wav';
                          else if (lang.id === 'hindi') audioSrc = '/audio/Real%20Estate%20Hindi.wav';
                          else if (lang.id === 'arabic') audioSrc = '/audio/RealEstateArabic.wav';
                          break;
                        case 'logistics':
                          if (lang.id === 'english') audioSrc = '/audio/logistics-sample.wav';
                          else if (lang.id === 'hindi') audioSrc = '/audio/LogisticsHindi.wav';
                          else if (lang.id === 'arabic') audioSrc = '/audio/LogisticArabic.wav';
                          break;
                      }
                    }
                    const isPlaying = playingAudio === audioSrc;

                    return (
                      <div
                        key={lang.id}
                        className={`group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 transition-all duration-300 w-full max-w-xs ${isEnabled ? `hover:border-${lang.color}-400/50 hover:scale-105 hover:bg-black/40 shadow-lg shadow-${lang.color}-500/20` : 'opacity-50 cursor-not-allowed'}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{lang.flag}</span>
                            <span className="text-lg font-semibold text-white">{lang.name}</span>
                          </div>
                          <button
                            disabled={!isEnabled}
                            onClick={() => handlePlayAudio(selectedUseCase, lang.id)}
                            className={`w-10 h-10 bg-${lang.color}-600/20 ${isEnabled ? `hover:bg-${lang.color}-600/40` : ''} border border-${lang.color}-500/30 rounded-full flex items-center justify-center transition-all duration-300 ${isEnabled ? 'group-hover:scale-110' : ''}`}
                          >
                            <svg className={`w-5 h-5 text-${lang.color}-400`} fill="currentColor" viewBox="0 0 24 24">
                              {isPlaying ? (
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                              ) : (
                                <path d="M8 5v14l11-7z" />
                              )}
                            </svg>
                          </button>
                          {isPlaying && (
                            <audio src={playingAudio} autoPlay onEnded={() => setPlayingAudio(null)} />
                          )}
                        </div>
                        <div className={`h-1 bg-gradient-to-r from-${lang.color}-500/20 to-transparent rounded-full`}></div>
                      </div>
                    );
                  })}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {languages
                  .filter(lang => !['english', 'hindi', 'arabic'].includes(lang.id))
                  .map((lang) => {
                    const isEnabled = useCases.find(uc => uc.id === selectedUseCase)?.voices.includes(lang.id);
                    const useCase = useCases.find(uc => uc.id === selectedUseCase);
                    let audioSrc = '';
                    if (useCase) {
                      const langUpper = lang.id.charAt(0).toUpperCase() + lang.id.slice(1);
                      switch (selectedUseCase) {
                        case 'sales':
                          audioSrc = `/audio/Sales${langUpper}.wav`;
                          break;
                        case 'support':
                          if (lang.id === 'english') audioSrc = '/audio/CustomerSupportEnglish.wav';
                          else if (lang.id === 'hindi') audioSrc = '/audio/customersupporthindi.wav';
                          else if (lang.id === 'arabic') audioSrc = '/audio/customerarabic.wav';
                          break;
                        case 'real-estate':
                          if (lang.id === 'english') audioSrc = '/audio/RealEstateEnglish.wav';
                          else if (lang.id === 'hindi') audioSrc = '/audio/Real%20Estate%20Hindi.wav';
                          else if (lang.id === 'arabic') audioSrc = '/audio/RealEstateArabic.wav';
                          break;
                        case 'logistics':
                          if (lang.id === 'english') audioSrc = '/audio/logistics-sample.wav';
                          else if (lang.id === 'hindi') audioSrc = '/audio/LogisticsHindi.wav';
                          else if (lang.id === 'arabic') audioSrc = '/audio/LogisticArabic.wav';
                          break;
                      }
                    }
                    const isPlaying = playingAudio === audioSrc;

                    return (
                      <div
                        key={lang.id}
                        className={`group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 transition-all duration-300 ${isEnabled ? `hover:border-${lang.color}-400/50 hover:scale-105 hover:bg-black/40 shadow-lg shadow-${lang.color}-500/20` : 'opacity-50 cursor-not-allowed'}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{lang.flag}</span>
                            <span className="text-lg font-semibold text-white">{lang.name}</span>
                          </div>
                          <button
                            disabled={!isEnabled}
                            onClick={() => handlePlayAudio(selectedUseCase, lang.id)}
                            className={`w-10 h-10 bg-${lang.color}-600/20 ${isEnabled ? `hover:bg-${lang.color}-600/40` : ''} border border-${lang.color}-500/30 rounded-full flex items-center justify-center transition-all duration-300 ${isEnabled ? 'group-hover:scale-110' : ''}`}
                          >
                            <svg className={`w-5 h-5 text-${lang.color}-400`} fill="currentColor" viewBox="0 0 24 24">
                              {isPlaying ? (
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                              ) : (
                                <path d="M8 5v14l11-7z" />
                              )}
                            </svg>
                          </button>
                          {isPlaying && (
                            <audio src={playingAudio} autoPlay onEnded={() => setPlayingAudio(null)} />
                          )}
                        </div>
                        <div className={`h-1 bg-gradient-to-r from-${lang.color}-500/20 to-transparent rounded-full`}></div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Workflow Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Cosmic Background - Same as Hero Section */}
        <div className="absolute inset-0">
          {/* Advanced CSS Cosmic Background */}
          <div className="absolute inset-0 cosmic-background"></div>

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-800/50 via-orange-900/20 to-black"></div>

          {/* Animated cosmic rings */}
          <div className="absolute inset-0 cosmic-ring-1"></div>
          <div className="absolute inset-0 cosmic-ring-2"></div>
          <div className="absolute inset-0 cosmic-ring-3"></div>

          {/* Central cosmic core */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.6)_0%,rgba(255,140,0,0.3)_15%,rgba(255,69,0,0.15)_30%,transparent_60%)] cosmic-pulse"></div>

          {/* Additional cosmic effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,140,0,0.4)_0%,rgba(255,100,0,0.15)_25%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,69,0,0.35)_0%,rgba(255,50,0,0.15)_30%,transparent_60%)]"></div>

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

          {/* Enhanced particle field */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse cosmic-particle"></div>
            <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-1000 cosmic-particle"></div>
            <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-orange-500 rounded-full animate-pulse delay-500 cosmic-particle"></div>
            <div className="absolute top-1/6 left-5/6 w-0.5 h-0.5 bg-orange-400 rounded-full animate-pulse delay-700 cosmic-particle"></div>
            <div className="absolute top-2/3 left-2/3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-pulse delay-300 cosmic-particle"></div>
            <div className="absolute top-1/3 left-4/5 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-800 cosmic-particle"></div>
            <div className="absolute top-1/5 left-1/3 w-0.5 h-0.5 bg-orange-200 rounded-full animate-pulse delay-200 cosmic-particle"></div>
            <div className="absolute top-4/5 left-1/5 w-1 h-1 bg-orange-600 rounded-full animate-pulse delay-600 cosmic-particle"></div>
            <div className="absolute top-3/5 left-4/5 w-0.5 h-0.5 bg-orange-400 rounded-full animate-pulse delay-900 cosmic-particle"></div>
            <div className="absolute top-2/5 left-1/2 w-0.5 h-0.5 bg-orange-300 rounded-full animate-pulse delay-400 cosmic-particle"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                One Intent. Multiple Channels. Monade Handles the Rest.
              </span>
            </h2>
          </div>

          {/* Vertical Stepper */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-9 top-0 h-full w-0.5 bg-orange-500/30"></div>

            {/* Step 1: Command Input */}
            <div className="relative pl-20 pb-16">
              <div className="absolute left-0 top-0 flex items-center justify-center w-18 h-18 rounded-full bg-orange-500/20 border border-orange-400/30">
                <span className="text-2xl font-bold text-orange-300">1</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">You Just Say It…</h3>
              <div className="bg-black rounded-lg p-6 border border-gray-700/50 flex items-center space-x-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                <p className="text-lg text-gray-300 flex-1">“Follow up with the client who visited the Andheri duplex, send the brochure again, and remind them on WhatsApp tomorrow.”</p>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
            </div>

            {/* Step 2: Monade Understands */}
            <div className="relative pl-20 pb-16">
              <div className="absolute left-0 top-0 flex items-center justify-center w-18 h-18 rounded-full bg-orange-500/20 border border-orange-400/30">
                <span className="text-2xl font-bold text-orange-300">2</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Monade AI Understands the Who, What, and When with Advanced NLP.</h3>
              <div className="bg-black rounded-lg p-6 border border-gray-700/50">
                <ul className="space-y-2 text-lg text-gray-300 list-disc list-inside">
                  <li>Fetches the client’s last visit notes from CRM, ensuring contextual understanding.</li>
                  <li>Accurately interprets temporal cues like “tomorrow” as Tuesday at 10 AM.</li>
                  <li>Verifies if the brochure was sent previously, preventing redundant actions.</li>
                  <li>Identifies preferred communication channels, such as WhatsApp, for seamless interaction.</li>
                  <li>Prepares tone-matched messaging, ensuring brand consistency and personalized communication.</li>
                </ul>
                <div className="flex justify-center space-x-4 mt-6">
                  <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Contextual Understanding</span>
                  <span className="bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-sm">Memory & CRM Integration</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Tone Matching</span>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Intent Recognition</span>
                </div>
              </div>
            </div>

            {/* Step 3: Monade Executes */}
            <div className="relative pl-20 pb-16">
              <div className="absolute left-0 top-0 flex items-center justify-center w-18 h-18 rounded-full bg-orange-500/20 border border-orange-400/30">
                <span className="text-2xl font-bold text-orange-300">3</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Monade AI Executes Seamlessly: Automated Actions & Follow-ups.</h3>
              <div className="space-y-4">
                <div className="bg-black rounded-lg p-4 border border-gray-700/50">✉️ <span className="font-semibold">Email drafted + scheduled:</span> “Thanks again for visiting the Andheri duplex. Re-sharing the brochure and pricing options for your review.”</div>
                <div className="bg-black rounded-lg p-4 border border-gray-700/50">📲 <span className="font-semibold">WhatsApp Reminder queued:</span> “Hi! Just reminding you about the 11 AM call tomorrow to discuss the Andheri property.”</div>
                <div className="bg-black rounded-lg p-4 border border-gray-700/50">📞 <span className="font-semibold">Voice call fallback scheduled:</span> In case WhatsApp is unread, Monade auto-calls to confirm follow-up.</div>
              </div>
            </div>

            {/* Step 4: Feedback Loop */}
            <div className="relative pl-20">
              <div className="absolute left-0 top-0 flex items-center justify-center w-18 h-18 rounded-full bg-orange-500/20 border border-orange-400/30">
                <span className="text-2xl font-bold text-orange-300">4</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">And You Stay in the Loop.</h3>
              <div className="bg-black rounded-lg p-6 border border-gray-700/50">
                <ul className="space-y-2 text-lg text-gray-300 list-disc list-inside">
                  <li>Updates client record with actions taken</li>
                  <li>Logs delivery and open statuses</li>
                  <li>Schedules smart follow-up if ignored</li>
                </ul>
                <div className="mt-6 bg-black/30 p-4 rounded-lg border border-gray-600/50">
                  <p>✅ Email: <span className="text-green-400">Opened</span></p>
                  <p>🕒 WhatsApp: <span className="text-yellow-400">Delivered, No Reply</span></p>
                  <p>🔁 Voice Call: <span className="text-sky-400">Scheduled for 6 PM</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <h3 className="text-4xl font-bold text-white mb-6">Your Time is Precious. Let Monade Handle the Busywork.</h3>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="relative z-10 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transform your industry with AI-powered voice solutions tailored to your specific needs
            </p>
          </div>

          {/* Scrolling Marquee */}
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <div className="flex animate-scroll">
              {[...industries, ...industries].map((industry, index) => (
                <div key={index} className="flex-shrink-0 w-80 mx-4">
                  <div className="group bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-black/40 hover:scale-105">
                    <div className="w-16 h-16 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d={industry.icon} />
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-white mb-3">{industry.name}</span>
                    <p className="text-gray-300 text-base">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Monade.ai. All rights reserved.</p>
        </div>
      </footer>

      {/* Phone UI Modal */}
      <PhoneUI isOpen={showPhoneUI} onClose={() => setShowPhoneUI(false)} />
    </div>
  );
}
