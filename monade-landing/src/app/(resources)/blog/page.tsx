import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/markdown.types';
import { getAllPostsCached } from '@/lib/markdown';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog',
  description:
    'Read Monade insights on voice AI, conversational design, and building scalable customer operations.',
  path: '/blog',
});

export default async function BlogPage() {
  const posts = await getAllPostsCached('blog');

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-[#FF4D00] tracking-wide uppercase mb-4">Blog</p>
          <h1 className="text-5xl md:text-6xl font-medium text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
            Thoughts on voice,
            <br />
            <span className="text-[#888]">design, and AI</span>
          </h1>
          <p className="text-xl text-[#666] max-w-2xl leading-relaxed">
            Insights from our team on building conversational AI that people actually want to use.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-[#E5E5E5]" />
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#888] text-lg">No posts yet.</p>
              <p className="text-[#AAA] mt-2">Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-0">
              {posts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block py-12 border-b border-[#E5E5E5] last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4 text-sm text-[#888]">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          {post.readTime && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-[#CCC]" />
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] tracking-tight group-hover:text-[#FF4D00] transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="text-lg text-[#666] leading-relaxed max-w-2xl">{post.excerpt}</p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
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
                      </div>
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-[#E5E5E5] group-hover:border-[#FF4D00] group-hover:bg-[#FF4D00] transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-[#888] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
