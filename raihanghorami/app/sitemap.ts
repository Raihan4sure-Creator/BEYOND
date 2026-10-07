import type { MetadataRoute } from 'next';
import { posts } from '@/content/posts';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/privacy/'];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'monthly' as const, priority: p === '/' ? 1 : 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/writing/${p.slug}/`, lastModified: p.date, priority: 0.6 })),
  ];
}
