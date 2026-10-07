import type { Metadata } from 'next';
import { site } from './site';

type Opts = {
  title: string;
  description: string;
  path: string;
  article?: { publishedTime: string };
};

/** Full per-page metadata. Next replaces (not merges) openGraph/twitter objects, so every page sets them all. */
export function pageMeta({ title, description, path, article }: Opts): Metadata {
  const fullTitle = `${title} · ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: 'en_GB',
      ...(article ? { type: 'article', publishedTime: article.publishedTime, authors: [site.name] } : { type: 'website' }),
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description },
  };
}
