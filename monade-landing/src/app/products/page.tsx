import React from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-primary/10">
      <Navbar variant="light" />

      <main className="pt-56 pb-20">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-6xl md:text-[80px] font-semibold tracking-tight leading-[1.05] text-slate-900">
                One platform. <br />
                <span className="font-serif italic text-slate-400 font-medium text-5xl md:text-[70px]">Every interaction.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                Voice, email, and WhatsApp agents that share a single memory. Your customer never repeats themselves — no matter which channel they reach you on.
            </p>
          </div>
        </section>

      {/* Platform Status */}
      <section className="py-12 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">Production Ready</div>
                <div className="text-gray-300 text-sm">Live with enterprise clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">Multi-Channel</div>
                <div className="text-gray-300 text-sm">Voice, Email, WhatsApp integration</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">10+ Languages</div>
                <div className="text-gray-300 text-sm">Hindi, English, Hinglish, Marathi, Tamil, Telugu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase with UI Mockups */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Voice Agent */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/30 overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* UI Mockup */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 border-b border-gray-700/30">
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Live Call</span>
                    </div>
                    <span className="text-gray-400 text-sm">02:34</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-600/20 rounded-lg p-2">
                      <p className="text-blue-300 text-sm">"Hi, I'm calling about your real estate listing..."</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-300 text-sm">"Great! I'd be happy to help. Which property interests you?"</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-600/20 rounded p-2 text-center">
                    <div className="text-green-400 font-bold">95%</div>
                    <div className="text-gray-400">Accuracy</div>
                  </div>
                  <div className="bg-blue-600/20 rounded p-2 text-center">
                    <div className="text-blue-400 font-bold">&lt;200ms</div>
                    <div className="text-gray-400">Response</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Voice Agent</h3>
                <p className="text-gray-400 mb-4">
                  Handles inbound and outbound calls with 8-stage conversation architecture. Qualifies leads, books appointments, and escalates to your team when the deal is hot. Sub-200ms response. 24/7. Hindi, English, and Hinglish.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Natural conversation flow — not IVR menus
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    43:57 talk ratio — your prospect talks more
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Seamless warm transfer to human closers
                  </div>
                </div>
                <p className="text-orange-400 font-semibold">Perfect for sales, support, and lead qualification.</p>
              </div>
            </div>

            {/* Email Agent */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/30 overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* UI Mockup */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 border-b border-gray-700/30">
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-sm font-medium">Draft Email</span>
                    <span className="text-gray-400 text-sm">Auto-generated</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">To: customer@example.com</div>
                    <div className="text-xs text-gray-400">Subject: Follow-up on your inquiry</div>
                    <div className="bg-gray-700/50 rounded-lg p-2 mt-2">
                      <p className="text-gray-300 text-sm">Hi John, Thank you for your interest in our services. Based on our conversation...</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-purple-600/20 rounded p-2 text-center">
                    <div className="text-purple-400 font-bold">85%</div>
                    <div className="text-gray-400">Open Rate</div>
                  </div>
                  <div className="bg-green-600/20 rounded p-2 text-center">
                    <div className="text-green-400 font-bold">45%</div>
                    <div className="text-gray-400">Response Rate</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Email Agent</h3>
                <p className="text-gray-400 mb-4">
                  Auto-generates personalized follow-up emails from call context. Remembers past interactions, adapts tone to the recipient, and sends at optimal times. Your outbound never goes stale.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Context-aware content from call transcripts
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Smart scheduling and drip sequences
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Full CRM integration — no manual drafting
                  </div>
                </div>
                <p className="text-orange-400 font-semibold">Ideal for follow-ups, campaigns, and onboarding flows.</p>
              </div>
            </div>

            {/* WhatsApp Agent */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/30 overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* UI Mockup */}
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 p-6 border-b border-gray-700/30">
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">WhatsApp Chat</span>
                    </div>
                    <span className="text-gray-400 text-sm">Online</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-600/50 rounded-lg p-2 max-w-[80%]">
                      <p className="text-gray-300 text-sm">Hi, I need help with my order</p>
                    </div>
                    <div className="bg-green-600/30 rounded-lg p-2 max-w-[80%] ml-auto">
                      <p className="text-green-200 text-sm">I'd be happy to help! Can you share your order number?</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-600/20 rounded p-2 text-center">
                    <div className="text-green-400 font-bold">&lt;5s</div>
                    <div className="text-gray-400">Response</div>
                  </div>
                  <div className="bg-blue-600/20 rounded p-2 text-center">
                    <div className="text-blue-400 font-bold">24/7</div>
                    <div className="text-gray-400">Available</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Agent</h3>
                <p className="text-gray-400 mb-4">
                  Instant, contextual responses on WhatsApp. Shares unified memory with voice and email — so when a customer calls about an order and then messages on WhatsApp, your agent already knows the full story.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Rich media support (brochures, location, documents)
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cross-channel memory — zero context loss
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    WhatsApp qualification (opportunity, not brush-off)
                  </div>
                </div>
                <p className="text-orange-400 font-semibold">Built for quick support, appointment reminders, and order updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See It In Action</h2>
          <p className="text-xl text-gray-300 mb-8">
            Listen to real voice agent conversations. Sales calls, support interactions, and lead qualification — in Hindi, English, and Hinglish.
          </p>

          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.loom.com/embed/3f9c7780719d4d48845fba5b056c9f98?sid=cdd31389-4283-414c-bef5-549156be1b4b"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                title="Monade AI Voice Agent Demo"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-1">Real Conversations</div>
                <div className="text-gray-400">Actual customer interactions</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-1">Multiple Languages</div>
                <div className="text-gray-400">Hindi, English, Hinglish, Marathi</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-1">Industry Scenarios</div>
                <div className="text-gray-400">Real estate, healthcare, EdTech</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Platform Specifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Production-grade infrastructure built on LiveKit + Gemini 2.5 Live. Designed for Indian market constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">&lt;200ms</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-gray-300 text-sm">Concurrent Calls</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">DPDP</div>
              <div className="text-gray-300 text-sm">Act Compliant</div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <FooterCTA />
    </div>
  );
}
