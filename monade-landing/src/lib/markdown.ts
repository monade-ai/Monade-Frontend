import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PostMeta, Post } from './markdown.types';

const contentDirectory = path.join(process.cwd(), 'content');

export { type PostMeta, type Post };

function getContentPath(type: 'blog' | 'case-studies' | 'release-notes') {
  return path.join(contentDirectory, type);
}

export function getAllPosts(type: 'blog' | 'case-studies' | 'release-notes'): PostMeta[] {
  const postsPath = getContentPath(type);

  if (!fs.existsSync(postsPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsPath);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author,
        authorRole: data.authorRole,
        coverImage: data.coverImage,
        tags: data.tags,
        readTime: data.readTime,
        version: data.version,
        company: data.company,
        industry: data.industry,
        results: data.results,
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(
  type: 'blog' | 'case-studies' | 'release-notes',
  slug: string
): Promise<Post | null> {
  const postsPath = getContentPath(type);
  const fullPath = path.join(postsPath, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    author: data.author,
    authorRole: data.authorRole,
    coverImage: data.coverImage,
    tags: data.tags,
    readTime: data.readTime,
    version: data.version,
    company: data.company,
    industry: data.industry,
    results: data.results,
    content: contentHtml,
  };
}

export { formatDate } from './markdown.types';
