'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { formatDate, Post } from '@/lib/markdown.types';

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const [study, setStudy] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetch(`/api/posts/${params.slug}?type=case-studies`)
        .then(res => {
          if (!res.ok) throw new Error('Not found');
          return res.json();
        })
        .then(data => {
          setStudy(data);
          setIsLoading(false);
        })
        .catch(() => {
          router.push('/case-studies');
        });
    }
  }, [params.slug, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#FDFBF7]">
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-4 w-24 bg-[#E5E5E5] rounded mb-8" />
            <div className="h-12 w-3/4 bg-[#E5E5E5] rounded mb-6" />
            <div className="h-6 w-1/2 bg-[#E5E5E5] rounded mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 bg-[#E5E5E5] rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!study) return null;

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link
          href="/case-studies"
          className="group flex items-center gap-2 text-sm text-[#888] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5E5E5] group-hover:border-[#1A1A1A] transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
          </span>
          <span className="hidden md:inline">All Case Studies</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            {study.industry && (
              <span className="px-3 py-1 text-xs font-medium text-[#666] bg-[#F5F5F5] rounded-full">
                {study.industry}
              </span>
            )}
            <time dateTime={study.date} className="text-sm text-[#888]">
              {formatDate(study.date)}
            </time>
          </motion.div>

          {study.company && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-lg font-medium text-[#FF4D00] mb-4"
            >
              {study.company}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-[#1A1A1A] tracking-tight leading-[1.15] mb-8"
          >
            {study.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-[#666] leading-relaxed max-w-3xl"
          >
            {study.excerpt}
          </motion.p>
        </div>
      </section>

      {/* Results Banner */}
      {study.results && study.results.length > 0 && (
        <section className="py-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12">
              <p className="text-xs font-medium text-[#888] uppercase tracking-wider mb-8">
                Key Results
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {study.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF4D00]" />
                    </div>
                    <p className="text-sm md:text-base text-white font-medium leading-snug">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-[#1A1A1A]
              prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-[#444] prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#FF4D00] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1A1A1A] prose-strong:font-medium
              prose-ul:my-6 prose-li:text-[#444] prose-li:marker:text-[#CCC]
              prose-ol:my-6
              prose-blockquote:border-l-2 prose-blockquote:border-[#FF4D00] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#555] prose-blockquote:not-italic prose-blockquote:font-serif prose-blockquote:text-xl
              prose-code:text-[#D94126] prose-code:bg-[#FFF5F2] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
        </motion.div>
      </article>

      {/* CTA Footer */}
      <footer className="border-t border-[#E5E5E5] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] tracking-tight mb-4">
            Ready to see similar results?
          </h3>
          <p className="text-[#666] mb-8">
            Let's discuss how Monade can transform your customer experience.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
          >
            Book a Demo
          </Link>
        </div>
      </footer>
    </main>
  );
}
