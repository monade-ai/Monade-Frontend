import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { formatDate } from '@/lib/markdown.types';
import { getAllPostsCached, getPostBySlugCached } from '@/lib/markdown';
import { buildPageMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  const posts = await getAllPostsCached('blog');
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugCached('blog', slug);

  if (!post) {
    return buildPageMetadata({
      title: 'Blog',
      description: 'Blog post not found.',
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt || 'Monade blog post',
    path: `/blog/${post.slug}`,
    openGraphType: 'article',
    publishedTime: post.date,
    tags: post.tags,
    section: 'Blog',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlugCached('blog', slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/blog"
          className="group flex items-center gap-2 text-sm text-[#888] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5E5E5] group-hover:border-[#1A1A1A] transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
          </span>
          <span className="hidden md:inline">Back to Blog</span>
        </Link>
      </div>

      <article className="pt-32 pb-20 px-6">
        <header className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-4 text-sm text-[#888] mb-6">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#CCC]" />
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-medium text-[#1A1A1A] tracking-tight leading-[1.15] mb-8">
            {post.title}
          </h1>

          {(post.author || post.tags) && (
            <div className="flex flex-wrap items-center gap-6">
              {post.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#FF8C00] flex items-center justify-center text-white font-medium text-sm">
                    {post.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">{post.author}</p>
                    {post.authorRole && <p className="text-xs text-[#888]">{post.authorRole}</p>}
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
            </div>
          )}
        </header>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="h-px bg-[#E5E5E5]" />
        </div>

        <div className="max-w-3xl mx-auto">
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
        </div>
      </article>

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
