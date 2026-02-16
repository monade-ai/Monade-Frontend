import { NextResponse } from 'next/server';
import { getPostBySlugCached } from '@/lib/markdown';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') as 'blog' | 'case-studies' | 'release-notes';
  const { slug } = await params;

  if (!type || !['blog', 'case-studies', 'release-notes'].includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const post = await getPostBySlugCached(type, slug);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}
