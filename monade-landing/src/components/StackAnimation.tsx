'use client';

import { useEffect, useRef, useState } from 'react';

export default function StackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const layers = [
    {
      id: 0,
      title: "TELEPHONY ANALYTICS INTEGRATIONS",
      colors: {
        main: "from-red-600 to-red-700",
        top: "from-red-500 to-red-600",
        side: "from-red-700 to-red-800"
      }
    },
    {
      id: 1,
      title: "VOICE AGENTIC PLATFORMS",
      colors: {
        main: "from-orange-500 to-orange-600",
        top: "from-orange-400 to-orange-500",
        side: "from-orange-600 to-orange-700"
      }
    },
    {
      id: 2,
      title: "ELECTRON INTELLIGENCE",
      colors: {
        main: "from-yellow-500 to-orange-500",
        top: "from-yellow-400 to-orange-400",
        side: "from-orange-600 to-orange-700"
      }
    },
    {
      id: 3,
      title: "LIGHTNING VOICE AI",
      colors: {
        main: "from-yellow-400 to-yellow-500",
        top: "from-yellow-300 to-yellow-400",
        side: "from-yellow-500 to-yellow-600"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-96 flex items-center justify-center relative"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative flex flex-col-reverse items-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(15deg) rotateY(-10deg)'
        }}
      >
        {layers.map((layer, index) => (
          <div
            key={layer.id}
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: isVisible
                ? `translateY(${index * -70}px) translateZ(${index * 20}px)`
                : `translateY(${index * -70 + 50}px) translateZ(${index * 20}px) scale(0.8)`,
              transitionDelay: `${index * 200}ms`,
              zIndex: layers.length - index,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* 3D Block Container */}
            <div
              className="relative"
              style={{
                width: '280px',
                height: '50px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Front face */}
              <div
                className={`absolute bg-gradient-to-br ${layer.colors.main} rounded-lg shadow-lg flex items-center justify-center border border-white/20`}
                style={{
                  width: '280px',
                  height: '50px',
                  transform: 'translateZ(25px)'
                }}
              >
                <h3 className="text-white font-bold text-sm tracking-wider px-4 text-center">
                  {layer.title}
                </h3>
              </div>

              {/* Back face */}
              <div
                className={`absolute bg-gradient-to-br ${layer.colors.side} rounded-lg border border-white/10`}
                style={{
                  width: '280px',
                  height: '50px',
                  transform: 'translateZ(-25px)'
                }}
              />

              {/* Top face */}
              <div
                className={`absolute bg-gradient-to-br ${layer.colors.top} rounded-lg border border-white/30`}
                style={{
                  width: '280px',
                  height: '50px',
                  transform: 'rotateX(90deg) translateZ(25px)',
                  transformOrigin: '50% 100%'
                }}
              />

              {/* Bottom face */}
              <div
                className={`absolute bg-gradient-to-br ${layer.colors.side} rounded-lg border border-white/10`}
                style={{
                  width: '280px',
                  height: '50px',
                  transform: 'rotateX(-90deg) translateZ(25px)',
                  transformOrigin: '50% 0%'
                }}
              />

              {/* Right side face */}
              <div
                className={`absolute bg-gradient-to-b ${layer.colors.side} border border-white/10`}
                style={{
                  width: '50px',
                  height: '50px',
                  transform: 'rotateY(90deg) translateZ(140px)',
                  transformOrigin: '0% 50%'
                }}
              />

              {/* Left side face */}
              <div
                className={`absolute bg-gradient-to-b ${layer.colors.side} border border-white/10`}
                style={{
                  width: '50px',
                  height: '50px',
                  transform: 'rotateY(-90deg) translateZ(140px)',
                  transformOrigin: '100% 50%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
