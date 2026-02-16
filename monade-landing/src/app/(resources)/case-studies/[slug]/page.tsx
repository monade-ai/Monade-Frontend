import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { formatDate } from '@/lib/markdown.types';
import { getAllPostsCached, getPostBySlugCached } from '@/lib/markdown';

export async function generateStaticParams() {
  const studies = await getAllPostsCached('case-studies');
  return studies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getPostBySlugCached('case-studies', slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/case-studies"
          className="group flex items-center gap-2 text-sm text-[#888] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5E5E5] group-hover:border-[#1A1A1A] transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
          </span>
          <span className="hidden md:inline">All Case Studies</span>
        </Link>
      </div>

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            {study.industry && (
              <span className="px-3 py-1 text-xs font-medium text-[#666] bg-[#F5F5F5] rounded-full">
                {study.industry}
              </span>
            )}
            <time dateTime={study.date} className="text-sm text-[#888]">
              {formatDate(study.date)}
            </time>
          </div>

          {study.company && <p className="text-lg font-medium text-[#FF4D00] mb-4">{study.company}</p>}

          <h1 className="text-4xl md:text-5xl font-medium text-[#1A1A1A] tracking-tight leading-[1.15] mb-8">
            {study.title}
          </h1>

          <p className="text-xl text-[#666] leading-relaxed max-w-3xl">{study.excerpt}</p>
        </div>
      </section>

      {study.results && study.results.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12">
              <p className="text-xs font-medium text-[#888] uppercase tracking-wider mb-8">Key Results</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {study.results.map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF4D00]" />
                    </div>
                    <p className="text-sm md:text-base text-white font-medium leading-snug">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </article>

      <footer className="border-t border-[#E5E5E5] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] tracking-tight mb-4">
            Ready to see similar results?
          </h3>
          <p className="text-[#666] mb-8">
            Let&apos;s discuss how Monade can transform your customer experience.
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
