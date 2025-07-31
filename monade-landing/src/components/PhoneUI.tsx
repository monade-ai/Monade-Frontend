'use client';

import { useState, useEffect } from 'react';

interface PhoneUIProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhoneUI({ isOpen, onClose }: PhoneUIProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCall = () => {
    setIsConnecting(true);
    // Simulate connection delay
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      // Simulate agent speaking
      setTimeout(() => {
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 3000);
      }, 1000);
    }, 2000);
  };

  const handleHangup = () => {
    setIsConnected(false);
    setIsConnecting(false);
    setCallDuration(0);
    setIsSpeaking(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* iPhone Container */}
      <div className="relative">
        {/* iPhone Frame */}
        <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl border-8 border-gray-800">
          {/* iPhone Screen */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="bg-white px-6 py-2 flex justify-between items-center text-black text-sm font-medium">
              <span>9:41</span>
              <div className="flex items-center space-x-1">
                {/* Signal bars */}
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-2 bg-black rounded-full"></div>
                </div>
                {/* WiFi */}
                <svg className="w-4 h-4" fill="black" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
                {/* Battery */}
                <div className="w-6 h-3 border border-black rounded-sm relative">
                  <div className="w-4 h-1.5 bg-black rounded-sm absolute top-0.5 left-0.5"></div>
                  <div className="w-0.5 h-1 bg-black rounded-r absolute -right-1 top-1"></div>
                </div>
              </div>
            </div>

            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full"></div>

            {/* Call Interface */}
            <div className="flex flex-col h-full pt-12 pb-8">
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Call Status */}
              <div className="text-center px-6 mb-8">
                {isConnecting && (
                  <div className="text-gray-600 text-lg">
                    Connecting...
                  </div>
                )}

                {isConnected && (
                  <div className="text-green-600 text-lg font-medium">
                    Connected • {formatTime(callDuration)}
                  </div>
                )}

                {!isConnecting && !isConnected && (
                  <div className="text-gray-600 text-lg">
                    Ready to Call
                  </div>
                )}
              </div>

              {/* Contact Card */}
              <div className="flex-1 flex flex-col items-center justify-center px-6">
                {/* Avatar */}
                <div className={`w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center mb-6 transition-all duration-300 ${
                  isSpeaking ? 'animate-pulse scale-110' : ''
                }`}>
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                  </svg>
                </div>

                {/* Contact Info */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-2">Monade AI Agent</h3>
                  <p className="text-gray-600">
                    {isConnected ? (isSpeaking ? 'Speaking...' : 'Listening...') : 'Ready to help'}
                  </p>
                </div>
              </div>

              {/* Call Controls */}
              <div className="flex justify-center items-center space-x-16 px-6 mb-8">
                {!isConnected && !isConnecting && (
                  <button
                    onClick={handleCall}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </button>
                )}

                {(isConnected || isConnecting) && (
                  <button
                    onClick={handleHangup}
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.7l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.1-.7-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/>
                    </svg>
                  </button>
                )}
              </div>

              {/* Instructions */}
              <div className="px-6 text-center">
                <p className="text-gray-500 text-sm mb-4">
                  Speak naturally - our AI agent is listening
                </p>

                {/* Try asking section */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="text-black font-medium mb-2">Try asking:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• "What services do you offer?"</li>
                    <li>• "How can AI help my business?"</li>
                    <li>• "Tell me about voice agents"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
