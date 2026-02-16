'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Building2,
  FileText,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

interface ResourcesDropdownProps {
  variant?: 'light' | 'dark';
}

const menuItems = [
  {
    title: 'Blog',
    description: 'Thoughts on voice, design, and AI',
    href: '/blog',
    icon: BookOpen,
  },
  {
    title: 'Case Studies',
    description: 'Real results from real companies',
    href: '/case-studies',
    icon: Building2,
  },
  {
    title: 'Release Notes',
    description: "What's new in Monade",
    href: '/release-notes',
    icon: FileText,
  },
];

export default function ResourcesDropdown({ variant = 'light' }: ResourcesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-500';
  const hoverTextColor = variant === 'dark' ? 'text-white' : 'text-black';

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        className={`flex items-center gap-1.5 text-sm font-medium ${textColor} hover:${hoverTextColor} transition-colors duration-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Resources
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
          >
            <div className="w-[320px] bg-white rounded-2xl shadow-xl border border-[#E5E5E5]/50 overflow-hidden">
              {/* Menu Items */}
              <div className="p-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-[#F8F8F8] transition-colors duration-200"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F5F5F5] group-hover:bg-[#FF4D00]/10 transition-colors duration-200">
                      <item.icon className="w-5 h-5 text-[#888] group-hover:text-[#FF4D00] transition-colors duration-200" />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#FF4D00] transition-colors duration-200">
                          {item.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#CCC] group-hover:text-[#FF4D00] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <p className="text-xs text-[#888] mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#F0F0F0] p-3 bg-[#FAFAFA]">
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-2 rounded-lg hover:bg-white transition-colors duration-200"
                >
                  <span className="text-xs font-medium text-[#888]">
                    View all resources
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CCC] group-hover:text-[#FF4D00] transform group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
