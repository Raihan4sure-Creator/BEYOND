import type { Metadata } from 'next';
import { pageMeta } from '@/content/meta';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import { delay } from '@/components/delay';
import { formatDate, posts } from '@/content/posts';
import { writingPage } from '@/content/site';

export const metadata: Metadata = pageMeta({
  title: 'Writing',
  description:
    'Notes from running a video editing team in Dhaka. Briefs, feedback, hiring, and where AI fits in.',
  path: '/writing/',
});

export default function WritingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="label" data-reveal>
            Writing
          </p>
          <h1 className="h1-page" data-reveal style={delay(80)}>
            {writingPage.title}
          </h1>
          <p className="lead" data-reveal style={delay(160)}>
            {writingPage.lead}
          </p>
        </div>
      </section>

      <section className="band-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ul className="posts">
            {posts.map((p, i) => (
              <li key={p.slug} data-reveal style={delay(i * 60)}>
                <Link href={`/writing/${p.slug}/`} className="post-row">
                  <div>
                    <p className="label">{p.category}</p>
                    <p className="label mt-16">{formatDate(p.date)}</p>
                  </div>
                  <div>
                    <h2 className="row-title">{p.title}</h2>
                    <p className="body mt-16">{p.description}</p>
                  </div>
                  <span className="row-arrow">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="small muted mt-40">More notes coming. I write when I’ve learned something worth sharing.</p>
        </div>
      </section>
    </>
  );
}
