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
    <main className="min-h-screen bg-background text-ink">
      <section className="pt-44 md:pt-52 pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="machine-label text-ink/40 mb-6">Liner notes</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
            Thoughts on <span className="serif-accent text-ink/40">voice,</span>
            <br />
            design, and AI
          </h1>
          <p className="text-lg md:text-xl text-ink/60 max-w-2xl leading-relaxed">
            Insights from our team on building conversational AI that people actually
            want to use.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="hairline-t" />
      </div>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            /* ─── First pressing: the empty state ─── */
            <div className="card-etched px-8 py-16 md:px-16 md:py-20 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full groove-rings opacity-70"
              />
              <div className="relative z-10 max-w-xl">
                <p className="machine-label text-clay mb-8">
                  Liner notes — coming soon
                </p>
                <p className="serif-accent text-3xl md:text-4xl text-ink/80 leading-snug mb-6">
                  The first pressing is still on the lathe.
                </p>
                <p className="text-base text-ink/60 leading-relaxed mb-10 max-w-md">
                  We&rsquo;re writing about voice, conversational design, and the craft
                  of building instruments people trust. The first notes drop soon.
                </p>
                <a
                  href="mailto:hello@monade.ai?subject=Notify%20me%20when%20the%20blog%20launches"
                  className="key-physical w-full sm:w-auto px-8 py-4 bg-ink text-manila font-semibold text-base tracking-tight inline-flex items-center justify-center gap-3"
                >
                  Get notified <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            /* ─── Editorial rows ─── */
            <div className="hairline-t">
              {posts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block py-12 hairline-b"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4 machine-label text-ink/40">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          {post.readTime && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-ink/20" />
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="text-base md:text-lg text-ink/60 leading-relaxed max-w-2xl">
                          {post.excerpt}
                        </p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 machine-label text-ink/50 border border-[var(--hairline)] rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-[var(--hairline)] group-hover:border-ink/40 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-ink/40 group-hover:text-ink transition-colors duration-300" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
