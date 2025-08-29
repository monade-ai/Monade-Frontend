"use client";

import Image from "next/image";
import StackAnimation from "@/components/StackAnimation";
import PhoneUI from "@/components/PhoneUI";
import { useState } from 'react';

export default function Home() {
  const [showPhoneUI, setShowPhoneUI] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState<string>('sales');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const useCases = [
    { id: 'sales', name: 'Sales Agent', audioPrefix: 'Sales', description: 'Automated outbound sales calls with intelligent lead qualification and conversion optimization.', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', voices: ['english', 'hindi', 'arabic'] },
    { id: 'support', name: 'Customer Support', audioPrefix: 'CustomerSupport', description: '24/7 intelligent customer service with instant issue resolution and seamless escalation.', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z', voices: ['english', 'hindi', 'arabic'] },
    { id: 'real-estate', name: 'Real Estate Agent', audioPrefix: 'RealEstate', description: 'Property inquiries, scheduling viewings, and lead nurturing with personalized conversations.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', voices: ['english', 'hindi', 'arabic'] },
    { id: 'logistics', name: 'Logistics Support', audioPrefix: 'Logistics', description: 'Package tracking, delivery updates, and shipment coordination with real-time status updates.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', voices: ['english', 'hindi', 'arabic'] },
  ];

  const languages = [
    { id: 'english', name: 'English', flag: '🇺🇸' },
    { id: 'hindi', name: 'Hindi', flag: '🇮🇳' },
    { id: 'tamil', name: 'Tamil', flag: '🇮🇳' },
    { id: 'marathi', name: 'Marathi', flag: '🇮🇳' },
    { id: 'spanish', name: 'Spanish', flag: '🇪🇸' },
    { id: 'bengali', name: 'Bengali', flag: '🇧🇩' },
    { id: 'gujarati', name: 'Gujarati', flag: '🇮🇳' },
    { id: 'kannada', name: 'Kannada', flag: '🇮🇳' },
    { id: 'arabic', name: 'Arabic', flag: '🇸🇦' },
    { id: 'german', name: 'German', flag: '🇩🇪' },
    { id: 'italian', name: 'Italian', flag: '🇮🇹' },
    { id: 'french', name: 'French', flag: '🇫🇷' },
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

    if (playingAudio === audioSrc) setPlayingAudio(null); else setPlayingAudio(audioSrc);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Top navigation */}
      <nav className="relative z-10 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/monade-logo.svg" alt="Monade.ai" width={32} height={32} />
            <span className="text-xl font-semibold" style={{fontFamily: 'var(--font-funnel)'}}>monade.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[var(--muted-foreground)]">
            <a href="/products" className="text-sm hover:text-[var(--foreground)] transition-colors">Products</a>
            <a href="#industries" className="text-sm hover:text-[var(--foreground)] transition-colors">Industries</a>
            <a href="/pricing" className="text-sm hover:text-[var(--foreground)] transition-colors">Pricing</a>
            <a href="/about" className="text-sm hover:text-[var(--foreground)] transition-colors">About</a>
            <a href="/team" className="text-sm hover:text-[var(--foreground)] transition-colors">Team</a>
          </div>
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <button
              onClick={() => setShowPhoneUI(true)}
              className="px-4 py-2 rounded-none bg-[var(--surface)] border border-[var(--border)] text-sm hover:-translate-y-0.5 transition-all duration-200 hover:shadow-sm"
            >
              Get a Demo
            </button>
            <a
              href="https://dashboard.monade.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-none bg-[var(--brand)] text-[var(--brand-ink)] text-sm hover:opacity-90 transition-opacity"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Illustration above hero */}
        <div className="flex justify-center mb-10">
          <Image src="/globe.svg" alt="Global AI communications" width={120} height={120} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Monade AI Voice Agent
          <br />
          Your Customers Think
          <br />
          We’re Human
        </h1>
        <p className="lede text-lg md:text-xl mt-6 max-w-2xl">
          Automate your customer interactions with our advanced AI voice agents that sound remarkably human. Monade provides intelligent conversational AI solutions to handle calls, qualify leads, and provide 24/7 support at a fraction of the cost, enhancing business efficiency and customer experience.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => setShowPhoneUI(true)}
            className="px-6 py-3 rounded-none bg-[var(--brand)] text-[var(--brand-ink)] text-base font-medium hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
          >
            Try the Demo
          </button>
        </div>
      </header>

      {/* Use cases + Languages */}
      <section className="border-t border-[var(--border)] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Monade AI Voice Agent: Lifelike Voices for Every Use Case</h2>
            <p className="lede text-lg max-w-3xl mx-auto mt-4">
              Explore how Monade's advanced conversational AI delivers lifelike voices across various applications. Select a use case below to experience our AI virtual assistant capabilities in multiple global languages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Use cases */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 lg:col-span-2">Key Features of Monade AI Voice Agent</h3>
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setSelectedUseCase(useCase.id)}
                  className={`text-left p-5 border rounded-none transition-colors ${selectedUseCase === useCase.id ? 'border-[var(--brand)] bg-[var(--surface)]' : 'border-[var(--border)] hover:border-[var(--foreground)]/20'}`}
                >
                  <div className="w-10 h-10 bg-[var(--brand)] text-[var(--brand-ink)] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                    </svg>
                  </div>
                  <div className="font-semibold">{useCase.name}</div>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">{useCase.description}</p>
                </button>
              ))}
            </div>

            {/* Languages */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex flex-wrap gap-4 justify-center">
                {languages.filter(l => ['english','hindi','arabic'].includes(l.id)).map((lang) => {
                  const enabled = useCases.find(uc => uc.id === selectedUseCase)?.voices.includes(lang.id);
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
                    <div key={lang.id} className={`w-full max-w-xs p-5 border rounded-none ${enabled ? 'border-[var(--border)] hover:border-[var(--foreground)]/20' : 'opacity-50 cursor-not-allowed'} transition-colors`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        <button
                          disabled={!enabled}
                          onClick={() => handlePlayAudio(selectedUseCase, lang.id)}
                          className={`w-10 h-10 rounded-none border ${enabled ? 'border-[var(--border)] hover:bg-[var(--brand)] hover:text-[var(--brand-ink)]' : 'border-[var(--border)]'} flex items-center justify-center transition-colors`}
                        >
                          <svg className={`w-5 h-5 ${isPlaying ? '' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                            {isPlaying ? (
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            ) : (
                              <path d="M8 5v14l11-7z" />
                            )}
                          </svg>
                        </button>
                        {isPlaying && (
                          <audio src={playingAudio ?? undefined} autoPlay onEnded={() => setPlayingAudio(null)} />
                        )}
                      </div>
                      <div className="h-px bg-[var(--border)]"></div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {languages.filter(l => !['english','hindi','arabic'].includes(l.id)).map((lang) => {
                  const enabled = useCases.find(uc => uc.id === selectedUseCase)?.voices.includes(lang.id);
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
                    <div key={lang.id} className={`p-5 border rounded-none ${enabled ? 'border-[var(--border)] hover:border-[var(--foreground)]/20' : 'opacity-50 cursor-not-allowed'} transition-colors`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        <button
                          disabled={!enabled}
                          onClick={() => handlePlayAudio(selectedUseCase, lang.id)}
                          className={`w-10 h-10 rounded-none border ${enabled ? 'border-[var(--border)] hover:bg-[var(--brand)] hover:text-[var(--brand-ink)]' : 'border-[var(--border)]'} flex items-center justify-center transition-colors`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            {isPlaying ? (
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            ) : (
                              <path d="M8 5v14l11-7z" />
                            )}
                          </svg>
                        </button>
                        {isPlaying && (
                          <audio src={playingAudio ?? undefined} autoPlay onEnded={() => setPlayingAudio(null)} />
                        )}
                      </div>
                      <div className="h-px bg-[var(--border)]"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual workflow (simplified, minimalist) */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center">One Intent. Multiple Channels. Monade Handles the Rest.</h2>
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]" />
            <div className="pl-12 space-y-10">
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-sm border border-[var(--border)] rounded-none">1</div>
                <h3 className="text-2xl font-semibold mt-3">You Just Say It…</h3>
                <p className="mt-2 text-[var(--muted-foreground)]">“Follow up with the client who visited the Andheri duplex, send the brochure again, and remind them on WhatsApp tomorrow.”</p>
              </div>
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-sm border border-[var(--border)] rounded-none">2</div>
                <h3 className="text-2xl font-semibold mt-3">Monade AI Understands the Who, What, and When with Advanced NLP.</h3>
                <ul className="list-disc list-inside text-[var(--muted-foreground)] mt-2 space-y-1">
                  <li>Fetches the client’s last visit notes from CRM, ensuring contextual understanding.</li>
                  <li>Accurately interprets temporal cues like “tomorrow” as Tuesday at 10 AM.</li>
                  <li>Verifies if the brochure was sent previously, preventing redundant actions.</li>
                  <li>Identifies preferred communication channels, such as WhatsApp, for seamless interaction.</li>
                  <li>Prepares tone-matched messaging, ensuring brand consistency and personalized communication.</li>
                </ul>
              </div>
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-sm border border-[var(--border)] rounded-none">3</div>
                <h3 className="text-2xl font-semibold mt-3">Monade AI Executes Seamlessly: Automated Actions & Follow-ups.</h3>
                <div className="mt-2 space-y-2">
                  <div className="p-3 border border-[var(--border)]">✉️ <span className="font-semibold">Email drafted + scheduled:</span> “Thanks again for visiting the Andheri duplex. Re-sharing the brochure and pricing options for your review.”</div>
                  <div className="p-3 border border-[var(--border)]">📲 <span className="font-semibold">WhatsApp Reminder queued:</span> “Hi! Just reminding you about the 11 AM call tomorrow to discuss the Andheri property.”</div>
                  <div className="p-3 border border-[var(--border)]">📞 <span className="font-semibold">Voice call fallback scheduled:</span> In case WhatsApp is unread, Monade auto-calls to confirm follow-up.</div>
                </div>
              </div>
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-sm border border-[var(--border)] rounded-none">4</div>
                <h3 className="text-2xl font-semibold mt-3">And You Stay in the Loop.</h3>
                <ul className="list-disc list-inside text-[var(--muted-foreground)] mt-2 space-y-1">
                  <li>Updates client record with actions taken</li>
                  <li>Logs delivery and open statuses</li>
                  <li>Schedules smart follow-up if ignored</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold">Industries We Serve</h2>
            <p className="lede text-lg max-w-2xl mx-auto mt-2">Transform your industry with AI-powered voice solutions tailored to your specific needs</p>
          </div>
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {["Debt Collection","Small Business","E-Commerce","Real Estate","Logistics","Recruitment","Healthcare"].map((name, i) => (
                <div key={i} className="flex-shrink-0 w-80">
                  <div className="p-8 border border-[var(--border)] rounded-none h-full text-center">
                    <div className="w-12 h-12 bg-[var(--brand)] text-[var(--brand-ink)] flex items-center justify-center mx-auto mb-4">
                      <span className="font-tertiary">{name.charAt(0)}</span>
                    </div>
                    <div className="text-xl font-semibold">{name}</div>
                    <p className="text-[var(--muted-foreground)] mt-2">AI-powered voice automation and support tailored for {name} operations.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-[var(--muted-foreground)]">
          <p>© {new Date().getFullYear()} Monade.ai. All rights reserved.</p>
        </div>
      </footer>

      <PhoneUI isOpen={showPhoneUI} onClose={() => setShowPhoneUI(false)} />
    </div>
  );
}
