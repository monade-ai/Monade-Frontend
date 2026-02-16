export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author?: string;
    authorRole?: string;
    coverImage?: string;
    tags?: string[];
    readTime?: string;
    version?: string;
    company?: string;
    industry?: string;
    results?: string[];
}

export interface Post extends PostMeta {
    content: string;
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
