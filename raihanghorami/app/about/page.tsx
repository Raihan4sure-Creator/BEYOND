import type { Metadata } from 'next';
import { pageMeta } from '@/content/meta';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import { Label } from '@/components/Label';
import { Picture } from '@/components/Picture';
import { delay } from '@/components/delay';
import { images } from '@/content/images';
import { about, site } from '@/content/site';

export const metadata: Metadata = pageMeta({
  title: 'About',
  description:
    'How I went from editing YouTube videos at 16 to running Beyond Edits, a 12-person video editing team in Dhaka.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap grid about-hero">
          <div>
            <p className="label" data-reveal>
              About
            </p>
            <h1 className="h1-page" data-reveal style={delay(80)}>
              {about.title}
            </h1>
            <p className="lead" data-reveal style={delay(160)}>
              {about.lead}
            </p>
            <dl className="dl" data-reveal style={delay(240)}>
              {about.facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
              <div>
                <dt>Website</dt>
                <dd>
                  <a href={site.company.url} className="link-u" target="_blank" rel="noopener noreferrer">
                    beyondedits.agency
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <figure data-reveal style={delay(200)}>
            <div className="frame">
              <Picture img={images.about} sizes="(max-width: 960px) 90vw, 33vw" priority />
            </div>
          </figure>
        </div>
      </section>

      <section className="band rule-top">
        <div className="wrap">
          <div className="sec-head">
            <Label n={1}>{about.storyLabel}</Label>
            <h2 className="h2" data-reveal>
              The story so far.
            </h2>
          </div>
          <ol className="timeline">
            {about.story.map((s, i) => (
              <li key={s.title} data-reveal style={delay(i * 40)}>
                <span className="when">{s.when}</span>
                <h3 className="row-title">{s.title}</h3>
                <p className="body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band surface">
        <div className="wrap">
          <blockquote data-reveal>
            <p className="quote">{about.quote}</p>
            <footer className="label quote-by">{site.name}</footer>
          </blockquote>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <Label n={2}>{about.helpLabel}</Label>
            <h2 className="h2" data-reveal>
              {about.helpTitle}
            </h2>
            <p className="body" data-reveal style={delay(100)}>
              {about.helpIntro}
            </p>
          </div>
          <div className="cards">
            {about.help.map((h, i) => (
              <article key={h.title} data-reveal style={delay((i % 3) * 60)}>
                <span className="card-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{h.title}</h3>
                <p className="small">{h.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band-tight rule-top">
        <div className="wrap grid split">
          <div>
            <Label n={3}>{about.toolsLabel}</Label>
            <h2 className="h2 mt-24" data-reveal>
              {about.toolsTitle}
            </h2>
          </div>
          <div data-reveal style={delay(100)}>
            <ul className="tags">
              {about.tools.map((t) => (
                <li className="tag" key={t} style={{ fontSize: 13, padding: '10px 16px 9px' }}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="body mt-24">{about.toolsNote}</p>
          </div>
        </div>
      </section>

      <section className="band-tight rule-top">
        <div className="wrap grid split" style={{ alignItems: 'end' }}>
          <p className="statement" data-reveal>
            {about.close}
          </p>
          <div className="hero-ctas" data-reveal style={delay(100)}>
            <Link href="/work/" className="btn btn-primary">
              See the work <ArrowRight />
            </Link>
            <Link href="/contact/" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
