'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PostMeta, formatDate } from '@/lib/markdown.types';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudiesPage() {
  const [studies, setStudies] = useState<PostMeta[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/posts?type=case-studies')
      .then(res => res.json())
      .then(data => {
        setStudies(data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-[#FF4D00] tracking-wide uppercase mb-4"
          >
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-medium text-[#1A1A1A] tracking-tight leading-[1.1] mb-6"
          >
            Real results from
            <br />
            <span className="text-[#888]">real companies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#666] max-w-2xl leading-relaxed"
          >
            See how leading organizations are transforming customer experience with Monade.
          </motion.p>
        </div>
      </section>

      {/* Studies Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {!isLoaded ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl p-8 border border-[#E5E5E5]">
                  <div className="h-4 w-24 bg-[#E5E5E5] rounded mb-6" />
                  <div className="h-8 w-3/4 bg-[#E5E5E5] rounded mb-4" />
                  <div className="h-4 w-full bg-[#E5E5E5] rounded mb-8" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-[#E5E5E5] rounded" />
                    <div className="h-16 bg-[#E5E5E5] rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : studies.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#888] text-lg">No case studies yet.</p>
              <p className="text-[#AAA] mt-2">Check back soon.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {studies.map((study, index) => (
                <motion.article
                  key={study.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group block bg-white rounded-2xl p-8 border border-[#E5E5E5] hover:border-[#CCC] hover:shadow-lg transition-all duration-500 h-full"
                  >
                    {/* Industry Tag */}
                    <div className="flex items-center justify-between mb-6">
                      {study.industry && (
                        <span className="px-3 py-1 text-xs font-medium text-[#666] bg-[#F5F5F5] rounded-full">
                          {study.industry}
                        </span>
                      )}
                      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E5E5E5] group-hover:border-[#FF4D00] group-hover:bg-[#FF4D00] transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-[#888] group-hover:text-white transition-colors duration-300" />
                      </span>
                    </div>

                    {/* Company Name */}
                    {study.company && (
                      <p className="text-sm font-medium text-[#FF4D00] mb-3">
                        {study.company}
                      </p>
                    )}

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] tracking-tight mb-4 group-hover:text-[#333] transition-colors duration-300">
                      {study.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#666] leading-relaxed mb-8">
                      {study.excerpt}
                    </p>

                    {/* Results Grid */}
                    {study.results && study.results.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#F0F0F0]">
                        {study.results.slice(0, 4).map((result, i) => (
                          <div key={i} className="text-center">
                            <p className="text-xs text-[#888] leading-snug">{result}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
