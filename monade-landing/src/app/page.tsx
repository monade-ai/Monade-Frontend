'use client';

import Image from "next/image";
import StackAnimation from "@/components/StackAnimation";
import PhoneUI from "@/components/PhoneUI";
import { useState } from 'react';

export default function Home() {
  const [showPhoneUI, setShowPhoneUI] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cosmic Background */}
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

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/monade-logo.svg" alt="Monade" width={40} height={40} />
          </div>
          <span className="text-xl font-semibold tracking-tight">monade.ai</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-gray-200">
          <div className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
            <span className="text-sm font-medium">Products</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <a href="#industries" className="text-sm font-medium hover:text-white transition-colors">Industries</a>
          <a href="#" className="text-sm font-medium hover:text-white transition-colors">Pricing</a>

          <div className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
            <span className="text-sm font-medium">Documentation</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <a href="#" className="text-sm font-medium hover:text-white transition-colors">Blog</a>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowPhoneUI(true)}
            className="border border-gray-600/50 px-4 py-2 rounded-lg hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200 flex items-center space-x-2 text-sm font-medium backdrop-blur-sm"
          >
            <span>Get a Demo</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="border border-gray-600/50 px-4 py-2 rounded-lg hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200 flex items-center space-x-2 text-sm font-medium backdrop-blur-sm">
            <span>Log In</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Voice AI Suite
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              for Enterprises
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Voice Agents and Models for Real Time Communications
          </p>

          <button
            onClick={() => setShowPhoneUI(true)}
            className="bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 px-10 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 text-lg font-medium backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 mx-auto"
          >
            <span>Get a Demo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>

      {/* Use Cases Header */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              100+ Usecases Across
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              10+ Industries
            </span>
          </h2>
          <p className="text-xl text-gray-300 mt-6">
            Any usecase, we got you covered!
          </p>
        </div>
      </section>

      {/* Use Cases Cards Section */}
      <section className="relative z-10 px-4 pt-2 pb-6">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sales Agent</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Automated outbound sales calls with intelligent lead qualification and conversion optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customer Support</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                24/7 intelligent customer service with instant issue resolution and seamless escalation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real Estate Agent</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Property inquiries, scheduling viewings, and lead nurturing with personalized conversations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Logistics Support</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Package tracking, delivery updates, and shipment coordination with real-time status updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language/Voice Selection Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep Teal/Cyan Gradient Background - complementary to orange theme */}
        <div className="absolute inset-0">
          {/* Base teal gradient complementing the orange hero section */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/70 via-cyan-900/50 to-black"></div>

          {/* Cool nebula clouds */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-teal-600/20 via-teal-800/12 to-transparent rounded-full blur-3xl opacity-60"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-radial from-cyan-600/18 via-cyan-700/10 to-transparent rounded-full blur-3xl opacity-55"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-emerald-600/16 via-emerald-800/8 to-transparent rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Cool star field */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-20 w-0.5 h-0.5 bg-teal-200 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-40 w-0.5 h-0.5 bg-emerald-200 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-20 w-0.5 h-0.5 bg-sky-200 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-teal-100 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-cyan-100 rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
          </div>

          {/* Subtle cool overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-teal-900/15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
                Lifelike Voices in
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                12 Global Languages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Engage with customers globally using our natural-sounding voices
            </p>
            <button
              onClick={() => setShowPhoneUI(true)}
              className="bg-teal-600/20 hover:bg-teal-500/30 border border-teal-400/30 px-8 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 text-lg font-medium backdrop-blur-sm hover:scale-105 mx-auto text-white"
            >
              <span>Get a Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Language Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* English Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-lg font-semibold text-white">English</span>
                </div>
                <button className="w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-red-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Hindi Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-lg font-semibold text-white">Hindi</span>
                </div>
                <button className="w-10 h-10 bg-orange-600/20 hover:bg-orange-600/40 border border-orange-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Tamil Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-lg font-semibold text-white">Tamil</span>
                </div>
                <button className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600/40 border border-amber-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Marathi Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-lg font-semibold text-white">Marathi</span>
                </div>
                <button className="w-10 h-10 bg-lime-600/20 hover:bg-lime-600/40 border border-lime-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-lime-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Spanish Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇪🇸</span>
                  <span className="text-lg font-semibold text-white">Spanish</span>
                </div>
                <button className="w-10 h-10 bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Bengali Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇧🇩</span>
                  <span className="text-lg font-semibold text-white">Bengali</span>
                </div>
                <button className="w-10 h-10 bg-teal-600/20 hover:bg-teal-600/40 border border-teal-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-teal-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Gujarati Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-sky-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-lg font-semibold text-white">Gujarati</span>
                </div>
                <button className="w-10 h-10 bg-sky-600/20 hover:bg-sky-600/40 border border-sky-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-sky-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Kannada Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-lg font-semibold text-white">Kannada</span>
                </div>
                <button className="w-10 h-10 bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Arabic Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇸🇦</span>
                  <span className="text-lg font-semibold text-white">Arabic</span>
                </div>
                <button className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full"></div>
            </div>

            {/* German Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇩🇪</span>
                  <span className="text-lg font-semibold text-white">German</span>
                </div>
                <button className="w-10 h-10 bg-yellow-600/20 hover:bg-yellow-600/40 border border-yellow-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Italian Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇹</span>
                  <span className="text-lg font-semibold text-white">Italian</span>
                </div>
                <button className="w-10 h-10 bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-green-500/20 to-transparent rounded-full"></div>
            </div>

            {/* French Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇫🇷</span>
                  <span className="text-lg font-semibold text-white">French</span>
                </div>
                <button className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Unite Your Tools Section */}
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
                Unite Your Tools
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 bg-clip-text text-transparent">
                Effortless and Smooth
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Quickly connect all your daily tools for seamless integration.
            </p>
          </div>

          {/* Tools Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mx-auto px-8">
            {/* Email Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-12 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40 min-h-[400px]">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span className="text-3xl font-semibold text-white">Email</span>
                </div>
                <p className="text-gray-300 text-lg mb-8 flex-grow">
                  Simplify your Email. Just command it, and it will write your email with perfect tone and context.
                </p>
                <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-sm text-orange-300/80 mb-3">Email Preview</div>
                  <div className="text-white text-lg">✉️ Compose • Send • Manage</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-12 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40 min-h-[400px]">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                  </div>
                  <span className="text-3xl font-semibold text-white">WhatsApp</span>
                </div>
                <p className="text-gray-300 text-lg mb-8 flex-grow">
                  The WhatsApp integration makes it easy to send lifelike voice messages in real-time.
                </p>
                <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-sm text-orange-300/80 mb-3">Chat Preview</div>
                  <div className="text-white text-lg">💬 Voice • Text • Media</div>
                </div>
              </div>
            </div>

            {/* Voice Call Card */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-12 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40 min-h-[400px]">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <span className="text-3xl font-semibold text-white">Voice Call</span>
                </div>
                <p className="text-gray-300 text-lg mb-8 flex-grow">
                  Handle calls with natural AI voices that sound completely human and engaging.
                </p>
                <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-sm text-orange-300/80 mb-3">Call Preview</div>
                  <div className="text-white text-lg">📞 Answer • Transfer • Record</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <button className="w-12 h-12 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/30 hover:border-orange-400/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
              <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/30 hover:border-orange-400/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
              <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your industry with AI-powered voice solutions tailored to your specific needs
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto px-8">
            {/* Debt Collection */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white">Debt Collection</span>
                </div>
                <p className="text-gray-300 text-base mb-4">
                  Automate debt collection with AI voice agents
                </p>
              </div>
            </div>

            {/* Small Business */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white">Small Business</span>
                </div>
                <p className="text-gray-300 text-base mb-4">
                  Scale customer service with AI voice agents
                </p>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white">E-Commerce</span>
                </div>
                <p className="text-gray-300 text-base mb-4">
                  Enhance customer support with voice AI
                </p>
              </div>
            </div>

            {/* Real Estate */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white">Real Estate</span>
                </div>
                <p className="text-gray-300 text-base mb-4">
                  Automate property inquiries with voice AI
                </p>
              </div>
            </div>

            {/* Logistics */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white">Logistics</span>
                </div>
                <p className="text-gray-300 text-base mb-4">
                  Streamline operations with voice automation
                </p>
              </div>
            </div>

            {/* Recruitment */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-5A1.5 1.5 0 0 0 12.04 8.37L9.5 16H12v6h8zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6 7.5H1A1.5 1.5 0 0 0 -.46 8.37L-3 16h2.5v6h8z"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white">Recruitment</span>
                </div>
                <p className="text-gray-300 text-base mb-4">
                  Screen candidates with AI voice agents
                </p>
              </div>
            </div>

            {/* Healthcare */}
            <div className="group relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:scale-105 hover:border-orange-400/50 transition-all duration-300 overflow-hidden hover:bg-black/40">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white">Healthcare</span>
                </div>
                <p className="text-gray-300 text-base mb-4">
                  Improve patient experience with AI voice
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => setShowPhoneUI(true)}
              className="bg-orange-600 hover:bg-orange-500 px-12 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3 text-xl font-medium mx-auto hover:scale-105"
            >
              <span>Get a Demo</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Full Stack AI Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                Full Stack AI for your
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                Contact Center
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Our Voice AI transcribes, analyzes, and responds to live calls—unlocking real-time insights and smarter conversations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-600/30 rounded-lg hover:border-gray-500/50 transition-colors cursor-pointer group">
                <span className="text-lg font-medium group-hover:text-orange-300 transition-colors">Text to Speech</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-600/30 rounded-lg hover:border-gray-500/50 transition-colors cursor-pointer group">
                <span className="text-lg font-medium group-hover:text-orange-300 transition-colors">Voice Agents</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <button
              onClick={() => setShowPhoneUI(true)}
              className="bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 px-8 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 text-lg font-medium backdrop-blur-sm hover:scale-105"
            >
              <span>Get a Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Stack Visualization */}
          <div className="relative flex items-center justify-center">
            {/* 3D Stack Animation */}
            <StackAnimation />
          </div>
        </div>
      </section>

      {/* Check out how our agents help you Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Check out how our <span className="text-orange-500">agents</span> help you
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful ways our AI agents transform your business operations and customer interactions
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sales Agent Card */}
            <div
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer ${
                expandedCard && expandedCard !== 'sales' ? 'opacity-30 scale-95' : 'hover:scale-105'
              }`}
              onClick={() => setExpandedCard(expandedCard === 'sales' ? null : 'sales')}
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sales Agent</h3>
              <p className="text-gray-300">
                Automated outbound sales calls with intelligent lead qualification and conversion optimization.
              </p>
            </div>

            {/* Customer Support Card */}
            <div
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer ${
                expandedCard && expandedCard !== 'support' ? 'opacity-30 scale-95' : 'hover:scale-105'
              }`}
              onClick={() => setExpandedCard(expandedCard === 'support' ? null : 'support')}
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customer Support</h3>
              <p className="text-gray-300">
                24/7 intelligent customer service with instant issue resolution and seamless escalation.
              </p>
            </div>

            {/* Real Estate Agent Card */}
            <div
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer ${
                expandedCard && expandedCard !== 'realestate' ? 'opacity-30 scale-95' : 'hover:scale-105'
              }`}
              onClick={() => setExpandedCard(expandedCard === 'realestate' ? null : 'realestate')}
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real Estate Agent</h3>
              <p className="text-gray-300">
                Property inquiries, scheduling viewings, and lead nurturing with personalized conversations.
              </p>
            </div>

            {/* Logistics Support Card */}
            <div
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer ${
                expandedCard && expandedCard !== 'logistics' ? 'opacity-30 scale-95' : 'hover:scale-105'
              }`}
              onClick={() => setExpandedCard(expandedCard === 'logistics' ? null : 'logistics')}
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Logistics Support</h3>
              <p className="text-gray-300">
                Package tracking, delivery updates, and shipment coordination with real-time status updates.
              </p>
            </div>
          </div>

          {/* Expanded Logistics Card */}
          {expandedCard === 'logistics' && (
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-600 rounded-xl p-8 animate-fadeIn">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">Automated Freight Status Calling</h3>
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-300 text-lg mb-6">Real-time Shipment Tracking</p>

                {/* Audio Player */}
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M9 9a3 3 0 000 6h6a3 3 0 000-6H9z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-2">Sample Logistics Call</h4>
                      <audio
                        controls
                        className="w-full"
                        style={{
                          filter: 'invert(1) hue-rotate(180deg)',
                          borderRadius: '8px'
                        }}
                      >
                        <source src="/audio/logistics-sample.wav" type="audio/wav" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>

                  <div className="mt-4 text-gray-400 text-sm">
                    <p>Listen to how our AI agent handles freight status inquiries with professional, real-time updates.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowPhoneUI(true)}
              className="bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3 text-lg font-medium mx-auto hover:scale-105"
            >
              <span>Experience It Yourself</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Phone UI Modal */}
      <PhoneUI isOpen={showPhoneUI} onClose={() => setShowPhoneUI(false)} />
    </div>
  );
}
