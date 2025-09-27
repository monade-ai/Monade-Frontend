export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900/50 via-black to-orange-900/50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-orange-900/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Live Production Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Our AI-Powered Agents
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Unified memory across all channels ensures seamless customer experiences. Currently serving enterprise clients with proven results.
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
                <div className="text-2xl font-bold text-blue-400 mb-2">50+ Languages</div>
                <div className="text-gray-300 text-sm">Global deployment ready</div>
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
                  Engage customers with lifelike AI voice interactions that understand context and intent, available 24/7 in 50+ languages.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Human-like conversation flow
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Real-time sentiment analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Seamless call transfers
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
                  Automate personalized email communication with AI that remembers past interactions and adapts tone and content.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Personalized content generation
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Smart scheduling and follow-ups
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    CRM integration
                  </div>
                </div>
                <p className="text-orange-400 font-semibold">Ideal for follow-ups, campaigns, and onboarding.</p>
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
                  Deliver instant, contextual responses on WhatsApp with AI that shares unified memory across all channels.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Instant message responses
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Rich media support
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Cross-channel memory
                  </div>
                </div>
                <p className="text-orange-400 font-semibold">Great for quick support, reminders, and updates.</p>
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
            Experience our AI voice agents through interactive demos and real customer conversations.
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
                <div className="text-gray-400">Test in 50+ languages</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 mb-1">Industry Scenarios</div>
                <div className="text-gray-400">Sales, support, real estate</div>
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
              Enterprise-grade infrastructure powering our AI voice agent platform.
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
              <div className="text-2xl font-bold text-orange-400 mb-2">SOC 2</div>
              <div className="text-gray-300 text-sm">Compliant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
