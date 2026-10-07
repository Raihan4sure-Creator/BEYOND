import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from '@/components/Icons';
import { pageMeta } from '@/content/meta';
import { formatDate, posts } from '@/content/posts';
import { site } from '@/content/site';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/writing/${post.slug}/`,
    article: { publishedTime: post.date },
  });
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@id': `${site.url}/#raihan` },
    mainEntityOfPage: `${site.url}/writing/${post.slug}/`,
  };

  return (
    <article className="article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <header className="article-head">
          <Link href="/writing/" className="label link">
            <ArrowLeft size={13} /> All writing
          </Link>
          <h1 className="h1-page" data-reveal>
            {post.title}
          </h1>
          <div className="byline" data-reveal>
            <span className="label">By {site.name}</span>
            <span className="label">{post.category}</span>
            <time className="label" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
        </header>

        <div className="prose">
          {post.intro.map((t, i) => (
            <p key={i} className={i === 0 ? 'intro' : undefined}>
              {t}
            </p>
          ))}
          {post.blocks.map((b, i) => {
            if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
            if (b.type === 'p') return <p key={i}>{b.text}</p>;
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it.term}>
                    <strong>{it.term}.</strong> {it.text}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>

        <div className="mt-40" style={{ paddingBottom: 'var(--band-tight)', maxWidth: 680 }}>
          <Link href="/writing/" className="arrow-link link">
            <ArrowLeft /> Back to writing
          </Link>
        </div>
      </div>
    </article>
  );
}
