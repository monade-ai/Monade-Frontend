import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getAllPostsCached } from '@/lib/markdown';

export default async function CaseStudiesPage() {
  const studies = await getAllPostsCached('case-studies');

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-[#FF4D00] tracking-wide uppercase mb-4">Case Studies</p>
          <h1 className="text-5xl md:text-6xl font-medium text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
            Real results from
            <br />
            <span className="text-[#888]">real companies</span>
          </h1>
          <p className="text-xl text-[#666] max-w-2xl leading-relaxed">
            See how leading organizations are transforming customer experience with Monade.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {studies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#888] text-lg">No case studies yet.</p>
              <p className="text-[#AAA] mt-2">Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {studies.map((study) => (
                <article key={study.slug}>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group block bg-white rounded-2xl p-8 border border-[#E5E5E5] hover:border-[#CCC] hover:shadow-lg transition-all duration-500 h-full"
                  >
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

                    {study.company && <p className="text-sm font-medium text-[#FF4D00] mb-3">{study.company}</p>}

                    <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] tracking-tight mb-4 group-hover:text-[#333] transition-colors duration-300">
                      {study.title}
                    </h2>

                    <p className="text-[#666] leading-relaxed mb-8">{study.excerpt}</p>

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
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
