import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/markdown';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') as 'blog' | 'case-studies' | 'release-notes';

  if (!type || !['blog', 'case-studies', 'release-notes'].includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }

  const posts = getAllPosts(type);
  return NextResponse.json(posts);
}
