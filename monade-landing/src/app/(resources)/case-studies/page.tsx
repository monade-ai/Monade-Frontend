import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getAllPostsCached } from '@/lib/markdown';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Case Studies',
  description:
    'See how teams use Monade to improve conversion, retention, and customer operations outcomes.',
  path: '/case-studies',
});

export default async function CaseStudiesPage() {
  const studies = await getAllPostsCached('case-studies');

  return (
    <main className="min-h-screen bg-background text-ink">
      <section className="pt-44 md:pt-52 pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="machine-label text-ink/40 mb-6">Field recordings</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
            Real <span className="serif-accent text-ink/40">results</span> from
            <br />
            real companies
          </h1>
          <p className="text-lg md:text-xl text-ink/60 max-w-2xl leading-relaxed">
            What changes when a business puts Monade on its phone lines —
            in numbers, not adjectives.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="hairline-t" />
      </div>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {studies.length === 0 ? (
            /* ─── Field recordings: the empty state ─── */
            <div className="card-etched px-8 py-16 md:px-16 md:py-20 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full groove-rings opacity-70"
              />
              <div className="relative z-10 max-w-xl">
                <p className="machine-label text-clay mb-8">
                  Field recordings — in progress
                </p>
                <p className="serif-accent text-3xl md:text-4xl text-ink/80 leading-snug mb-6">
                  The tape is rolling. The stories are still being made.
                </p>
                <p className="text-base text-ink/60 leading-relaxed mb-10 max-w-md">
                  Our first customers are putting Monade to work right now. We&rsquo;ll
                  publish their results here — measured, verified, in their own words.
                </p>
                <a
                  href="mailto:hello@monade.ai?subject=Notify%20me%20about%20case%20studies"
                  className="key-physical w-full sm:w-auto px-8 py-4 bg-ink text-manila font-semibold text-base tracking-tight inline-flex items-center justify-center gap-3"
                >
                  Get notified <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            /* ─── Etched study cards ─── */
            <div className="grid md:grid-cols-2 gap-8">
              {studies.map((study) => (
                <article key={study.slug}>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group card-etched block p-8 hover:-translate-y-0.5 transition-transform duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      {study.industry && (
                        <span className="px-3 py-1 machine-label text-ink/50 border border-[var(--hairline)] rounded-full">
                          {study.industry}
                        </span>
                      )}
                      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--hairline)] group-hover:border-ink/40 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink transition-colors duration-300" />
                      </span>
                    </div>

                    {study.company && (
                      <p className="machine-label text-clay mb-3">{study.company}</p>
                    )}

                    <h2 className="font-display text-xl md:text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                      {study.title}
                    </h2>

                    <p className="text-ink/60 leading-relaxed mb-8">{study.excerpt}</p>

                    {study.results && study.results.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 pt-6 hairline-t">
                        {study.results.slice(0, 4).map((result, i) => (
                          <div key={i}>
                            <p className="text-xs text-ink/50 leading-snug">{result}</p>
                          </div>
                        ))}
                      </div>
                    )}
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
