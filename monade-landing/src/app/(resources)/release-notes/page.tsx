'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PostMeta, formatDate } from '@/lib/markdown.types';
import { Package, ChevronDown, ChevronUp } from 'lucide-react';

interface ReleaseNote extends PostMeta {
  content?: string;
}

export default function ReleaseNotesPage() {
  const [releases, setReleases] = useState<ReleaseNote[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/posts?type=release-notes')
      .then(res => res.json())
      .then(data => {
        setReleases(data);
        setIsLoaded(true);
        // Auto-expand the first one
        if (data.length > 0) {
          setExpandedId(data[0].slug);
        }
      });
  }, []);

  const fetchContent = async (slug: string) => {
    if (releases.find(r => r.slug === slug)?.content) return;

    const res = await fetch(`/api/posts/${slug}?type=release-notes`);
    const data = await res.json();

    setReleases(prev =>
      prev.map(r => (r.slug === slug ? { ...r, content: data.content } : r))
    );
  };

  const toggleExpand = async (slug: string) => {
    if (expandedId === slug) {
      setExpandedId(null);
    } else {
      setExpandedId(slug);
      await fetchContent(slug);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-[#FF4D00] tracking-wide uppercase mb-4"
          >
            Release Notes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-medium text-[#1A1A1A] tracking-tight leading-[1.1] mb-6"
          >
            What's new
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#666] leading-relaxed"
          >
            The latest features, improvements, and fixes to the Monade platform.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {!isLoaded ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse border border-[#E5E5E5] rounded-2xl p-6">
                  <div className="h-6 w-32 bg-[#E5E5E5] rounded mb-2" />
                  <div className="h-4 w-24 bg-[#E5E5E5] rounded" />
                </div>
              ))}
            </div>
          ) : releases.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#888] text-lg">No release notes yet.</p>
            </motion.div>
          ) : (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[23px] top-8 bottom-8 w-px bg-[#E5E5E5] hidden md:block" />

              <div className="space-y-4">
                {releases.map((release, index) => (
                  <motion.div
                    key={release.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-6 w-[47px] hidden md:flex items-center justify-center">
                      <div
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${expandedId === release.slug
                            ? 'bg-[#FF4D00]'
                            : 'bg-[#E5E5E5]'
                          }`}
                      />
                    </div>

                    {/* Release Card */}
                    <div className="md:ml-16">
                      <button
                        onClick={() => toggleExpand(release.slug)}
                        className={`w-full text-left bg-white border rounded-2xl p-6 transition-all duration-300 ${expandedId === release.slug
                            ? 'border-[#FF4D00]/30 shadow-lg'
                            : 'border-[#E5E5E5] hover:border-[#CCC]'
                          }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 ${expandedId === release.slug
                                  ? 'bg-[#FF4D00] text-white'
                                  : 'bg-[#F5F5F5] text-[#888]'
                                }`}
                            >
                              <Package className="w-5 h-5" />
                            </div>
                            <div>
                              <h2 className="text-xl font-medium text-[#1A1A1A] tracking-tight">
                                {release.title}
                              </h2>
                              <p className="text-sm text-[#888] mt-1">
                                {formatDate(release.date)}
                              </p>
                              {release.excerpt && expandedId !== release.slug && (
                                <p className="text-[#666] mt-3 line-clamp-2">
                                  {release.excerpt}
                                </p>
                              )}
                            </div>
                          </div>
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${expandedId === release.slug
                                ? 'border-[#FF4D00] text-[#FF4D00]'
                                : 'border-[#E5E5E5] text-[#888]'
                              }`}
                          >
                            {expandedId === release.slug ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedId === release.slug && release.content && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 pt-6 border-t border-[#F0F0F0]"
                          >
                            <div
                              className="prose prose-sm prose-slate max-w-none
                                prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-[#1A1A1A]
                                prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-4 prose-h2:first:mt-0
                                prose-h3:text-base prose-h3:mt-6 prose-h3:mb-3
                                prose-p:text-[#555] prose-p:leading-relaxed prose-p:mb-4
                                prose-a:text-[#FF4D00] prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-[#1A1A1A] prose-strong:font-medium
                                prose-ul:my-4 prose-li:text-[#555] prose-li:marker:text-[#CCC]
                                prose-ol:my-4
                                prose-code:text-[#D94126] prose-code:bg-[#FFF5F2] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-normal"
                              dangerouslySetInnerHTML={{ __html: release.content }}
                            />
                          </motion.div>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
