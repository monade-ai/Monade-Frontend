import React from "react";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900/50 via-black to-orange-900/50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-orange-900/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              About Monade.ai
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            At Monade.ai, we are redefining the future of customer engagement by building AI-driven communication solutions that help businesses connect with their customers more intelligently and efficiently. In today's world, customer expectations are higher than ever—speed, personalization, and availability are no longer optional, they're essential. That's where we come in.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our mission is simple yet powerful: to empower companies with intelligent, multilingual, and context-aware virtual agents that deliver seamless, human-like experiences across every interaction. By leveraging state-of-the-art AI, natural language processing, and conversational intelligence, we ensure that businesses can engage their customers in a way that feels effortless, personal, and always on.
          </p>
        </div>
      </section>

      {/* Company Status & Funding */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Company Status</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monade is a live tech startup platform currently serving enterprise clients with our AI voice agent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center">
              <div className="w-12 h-12 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Platform</h3>
              <p className="text-gray-300">Currently operational and serving enterprise clients with AI voice agents</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center">
              <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Founder-Led</h3>
              <p className="text-gray-300">Bootstrapped startup founded and operated by our core team</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center">
              <div className="w-12 h-12 bg-orange-600/20 border border-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2025 Founded</h3>
              <p className="text-gray-300">Launched in 2025 with immediate market traction</p>
            </div>
          </div>


        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive AI voice agent solutions across multiple industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Multilingual Customer Support</h3>
              <p className="text-gray-300">Break language barriers with AI assistants capable of understanding and responding in 50+ languages, ensuring inclusivity and global reach.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="w-12 h-12 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry-Specific AI Solutions</h3>
              <p className="text-gray-300">Tailored AI workflows designed for Real Estate, Logistics, Sales, and Healthcare, helping companies automate operations with domain-specific intelligence.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="w-12 h-12 bg-purple-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Voice & Text-Based AI Assistants</h3>
              <p className="text-gray-300">Provide customers with human-like conversations—whether they prefer chat, email, or voice calls—ensuring consistency across all channels.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="w-12 h-12 bg-orange-600/20 border border-orange-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Automated Customer Engagement</h3>
              <p className="text-gray-300">From answering FAQs to handling complex queries, our AI agents ensure your business is always available, building trust and driving satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Stage */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Current Development Stage</h2>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Production Ready
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              <strong className="text-white">Live with Enterprise Clients:</strong> Monade is currently in production, actively serving enterprise clients across multiple industries. Our platform has moved beyond MVP and beta stages to become a fully operational AI voice agent solution with proven market validation and customer success stories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}