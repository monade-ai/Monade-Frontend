'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { formatDate, Post } from '@/lib/markdown.types';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetch(`/api/posts/${params.slug}?type=blog`)
        .then(res => {
          if (!res.ok) throw new Error('Not found');
          return res.json();
        })
        .then(data => {
          setPost(data);
          setIsLoading(false);
        })
        .catch(() => {
          router.push('/blog');
        });
    }
  }, [params.slug, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#FDFBF7]">
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-4 w-24 bg-[#E5E5E5] rounded mb-8" />
            <div className="h-12 w-3/4 bg-[#E5E5E5] rounded mb-6" />
            <div className="h-6 w-1/2 bg-[#E5E5E5] rounded mb-12" />
            <div className="space-y-4">
              <div className="h-4 w-full bg-[#E5E5E5] rounded" />
              <div className="h-4 w-full bg-[#E5E5E5] rounded" />
              <div className="h-4 w-2/3 bg-[#E5E5E5] rounded" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) return null;

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
          href="/blog"
          className="group flex items-center gap-2 text-sm text-[#888] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5E5E5] group-hover:border-[#1A1A1A] transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
          </span>
          <span className="hidden md:inline">Back to Blog</span>
        </Link>
      </motion.div>

      {/* Article Header */}
      <article className="pt-32 pb-20 px-6">
        <header className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 text-sm text-[#888] mb-6"
          >
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#CCC]" />
                <span>{post.readTime}</span>
              </>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-[#1A1A1A] tracking-tight leading-[1.15] mb-8"
          >
            {post.title}
          </motion.h1>

          {(post.author || post.tags) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6"
            >
              {post.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#FF8C00] flex items-center justify-center text-white font-medium text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">{post.author}</p>
                    {post.authorRole && (
                      <p className="text-xs text-[#888]">{post.authorRole}</p>
                    )}
                  </div>
                </div>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#666] bg-[#F5F5F5] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </header>

        {/* Divider */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="h-px bg-[#E5E5E5]" />
        </div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-[#1A1A1A]
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-[#444] prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#FF4D00] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1A1A1A] prose-strong:font-medium
              prose-ul:my-6 prose-li:text-[#444] prose-li:marker:text-[#CCC]
              prose-ol:my-6
              prose-blockquote:border-l-2 prose-blockquote:border-[#FF4D00] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#666]
              prose-code:text-[#D94126] prose-code:bg-[#FFF5F2] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal
              prose-pre:bg-[#1A1A1A] prose-pre:text-[#F5F5F5]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E5] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[#888]">
            Enjoyed this article?{' '}
            <Link href="/blog" className="text-[#FF4D00] hover:underline">
              Read more from our blog
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
