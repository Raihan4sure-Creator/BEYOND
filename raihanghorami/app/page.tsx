import Link from 'next/link';
import { Clock } from '@/components/Clock';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { Label } from '@/components/Label';
import { Picture } from '@/components/Picture';
import { delay } from '@/components/delay';
import { images } from '@/content/images';
import { formatDate, posts } from '@/content/posts';
import { home, site, updated, work } from '@/content/site';

export default function HomePage() {
  const latest = posts[0];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap grid hero-grid">
          <div className="hero-copy">
            <p className="label" data-reveal>
              <span className="rec" aria-hidden="true" />
              {home.eyebrow} <span aria-hidden="true">·</span> Dhaka
            </p>
            <h1 className="h1" data-reveal style={delay(80)}>
              Raihan <span className="italic">Ghorami</span>
            </h1>
            <p className="lead" data-reveal style={delay(160)}>
              {home.lead}
            </p>
            <div className="hero-ctas" data-reveal style={delay(240)}>
              <Link href="/work/" className="btn btn-primary">
                See the work <ArrowRight />
              </Link>
              <Link href="/about/" className="btn btn-ghost">
                About me
              </Link>
            </div>
          </div>

          <figure className="hero-media" data-reveal style={delay(200)}>
            <div className="frame">
              <Picture img={images.hero} sizes="(max-width: 960px) 90vw, 33vw" priority />
            </div>
            <figcaption className="caption">
              <span>{home.photoCaption}</span>
              <span>
                <Clock /> GMT+6
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Context */}
      <section className="band-tight rule-top">
        <div className="wrap grid context-grid">
          <Label n={1}>{home.context.label}</Label>
          <p className="statement" data-reveal>
            {home.context.statement}
          </p>
          <p className="body" data-reveal style={delay(100)}>
            {home.context.body}
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="band rule-top">
        <div className="wrap">
          <div className="sec-head">
            <Label n={2}>{home.work.label}</Label>
            <h2 className="h2" data-reveal>
              {home.work.title}
            </h2>
            <p className="body" data-reveal style={delay(100)}>
              {home.work.intro}
            </p>
          </div>

          <ul className="rows">
            {work.map((item, i) => {
              const inner = (
                <>
                  <span className="row-index">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="row-title">{item.title}</h3>
                    <p className="row-meta">{item.role}</p>
                  </div>
                  <p className="body">{item.body}</p>
                  <span className="row-arrow">{item.href ? <ArrowUpRight size={20} /> : null}</span>
                </>
              );
              return (
                <li key={item.title} data-reveal style={delay(i * 60)}>
                  {item.href ? (
                    <a href={item.href} className="row" target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div className="row">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <figure className="feature" data-reveal>
            <div className="frame zoom">
              <Picture img={images.desk} sizes="(max-width: 1400px) 94vw, 1360px" />
            </div>
            <figcaption className="caption">
              <span>{home.work.deskCaption}</span>
              <span>Updated {updated}</span>
            </figcaption>
          </figure>

          <div className="mt-40">
            <Link href="/work/" className="arrow-link link">
              All work <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="band rule-top">
        <div className="wrap">
          <div className="sec-head">
            <Label n={3}>{home.services.label}</Label>
            <h2 className="h2" data-reveal>
              {home.services.title}
            </h2>
          </div>
          <div className="cols">
            {home.services.items.map((s, i) => (
              <article className="col" key={s.title} data-reveal style={delay(i * 80)}>
                <span className="row-index" style={{ paddingTop: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="h3">{s.title}</h3>
                <p className="small">{s.body}</p>
                <ul className="tags">
                  {s.tags.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="band surface company">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <Label n={4}>{home.company.label}</Label>
            <h2 className="h2" data-reveal>
              {home.company.title}
            </h2>
          </div>
        </div>

        <figure data-reveal>
          <div className="frame">
            <Picture
              img={images.coverWide}
              sizes="100vw"
              mobile={{ img: images.coverPortrait, maxWidth: 720, sizes: '100vw' }}
            />
          </div>
        </figure>

        <div className="wrap">
          <div className="grid company-body">
            <p className="statement" data-reveal>
              {home.company.statement}
            </p>
            <div className="company-side" data-reveal style={delay(100)}>
              <p className="body">{home.company.body}</p>
              <div>
                <p className="label">{home.company.formatsLabel}</p>
                <ul className="tags mt-16">
                  {home.company.formats.map((f) => (
                    <li className="tag" key={f}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={site.company.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>
                Visit Beyond Edits <ArrowUpRight />
              </a>
            </div>
          </div>

          <dl className="stats">
            {home.company.stats.map((s, i) => (
              <div className="stat" key={s.k} data-reveal style={delay(i * 60)}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Currently */}
      <section className="band">
        <div className="wrap grid split">
          <div>
            <Label n={5}>{home.currently.label}</Label>
            <h2 className="h2 mt-24" data-reveal>
              {home.currently.title}
            </h2>
          </div>
          <dl className="dl" data-reveal style={delay(100)}>
            {home.currently.items.map((c) => (
              <div key={c.k}>
                <dt>{c.k}</dt>
                <dd>{c.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Writing */}
      <section className="band-tight rule-top">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 'clamp(32px, 4vw, 56px)' }}>
            <Label n={6}>{home.notes.label}</Label>
            <h2 className="h2" data-reveal>
              {home.notes.title}
            </h2>
          </div>
          <Link href={`/writing/${latest.slug}/`} className="note-card" data-reveal>
            <div>
              <p className="label">
                {latest.category} <span aria-hidden="true">·</span> {formatDate(latest.date)}
              </p>
              <h3 className="row-title">{latest.title}</h3>
              <p className="body">{latest.description}</p>
            </div>
            <span className="btn btn-ghost">
              Read the note <ArrowRight />
            </span>
          </Link>
        </div>
      </section>

      {/* Off the clock */}
      <section className="band rule-top" style={{ paddingBottom: 'var(--band-tight)' }}>
        <div className="wrap grid split">
          <div>
            <Label n={7}>{home.offClock.label}</Label>
            <h2 className="h2 mt-24" data-reveal>
              {home.offClock.title}
            </h2>
          </div>
          <div data-reveal style={delay(100)}>
            <p className="statement" style={{ fontSize: 'clamp(26px, 2.6vw, 38px)' }}>
              {home.offClock.lead}
            </p>
            <p className="body mt-24">{home.offClock.body}</p>
          </div>
        </div>

        <ul className="strip" aria-label="Things on my desk">
          {images.slides.map((img) => (
            <li className="frame" key={img.name}>
              <Picture img={img} sizes="(max-width: 820px) 60vw, 340px" />
            </li>
          ))}
        </ul>

        <div className="wrap">
          <dl className="facts">
            {home.offClock.facts.map((f, i) => (
              <div key={f.k} data-reveal style={delay(i * 60)}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="small mt-40">
            Also on{' '}
            {site.elsewhere.map((e, i) => (
              <span key={e.href}>
                {i > 0 && ' and '}
                <a href={e.href} target="_blank" rel="noopener noreferrer me" className="link-u" style={{ color: 'var(--fg)' }}>
                  {e.label}
                </a>
              </span>
            ))}
            .
          </p>
        </div>
      </section>
    </>
  );
}
