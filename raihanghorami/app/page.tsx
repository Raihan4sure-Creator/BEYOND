import { Cursor } from '@/components/Cursor';
import { FounderBadge } from '@/components/FounderBadge';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { PhotoStack } from '@/components/PhotoStack';
import { delay } from '@/components/delay';
import { avatar, shots } from '@/content/media';
import { posts } from '@/content/posts';
import { about, hero, process, results, site, stats } from '@/content/site';

export default function HomePage() {
  const note = posts[0];

  return (
    <>
      {/* ---------- Hero: the headline is being edited ---------- */}
      <section className="hero">
        <div className="wrap">
          <p className="hello" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={avatar} alt="" width={30} height={30} />
            Hi, I’m Raihan Ghorami
          </p>

          <h1>
            <span className="hero-line" data-reveal>
              {hero.line}
            </span>{' '}
            <span className="edit-wrap" data-reveal style={delay(120)}>
              <span className="sel" aria-hidden="true">
                <span className="knob bl" />
                <span className="knob tr" />
              </span>
              <span className="edit-word">{hero.word}.</span>
              <span className="sel-cursor" aria-hidden="true">
                <Cursor label="Raihan" />
              </span>
              {/* Same link as the nav and footer, so it stays out of the heading text and tab order */}
              <a
                className="frame-label"
                href={site.company.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
              >
                <span className="be-mark" />
                Founder · Beyond Edits
                <ArrowUpRight size={12} />
              </a>
            </span>
          </h1>

          <p className="hero-sub" data-reveal style={delay(200)}>
            {hero.sub}
          </p>
          <div className="hero-ctas" data-reveal style={delay(260)}>
            <a href={site.calendly} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Book a call <ArrowUpRight />
            </a>
            <a href="#process" className="btn btn-ghost">
              How it works <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section className="proof" aria-label="Results">
        <div className="wrap">
          <ul className="stats">
            {stats.map((s, i) => (
              <li key={s.k} data-reveal style={delay(i * 70)}>
                <b>{s.v}</b>
                <span>{s.k}</span>
              </li>
            ))}
          </ul>
          <p className="clients" data-reveal>
            <span className="kicker">Clients include</span>
            {results.map((r) => (
              <span className="client" key={r.name}>
                {r.name} <small>{r.note}</small>
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section id="process" className="band process">
        <div className="wrap">
          <span className="kicker">Process</span>
          <h2 className="h2" data-reveal>
            How a video moves
            <br />
            through <em>Beyond Edits.</em>
          </h2>
          <ol className="steps">
            {process.map((s, i) => (
              <li className="step" key={s.label} data-reveal style={delay(i * 90)}>
                <span className="step-pill" style={{ ['--d' as string]: `${i * 1.2}s` }}>
                  <span className="ico" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.label}
                </span>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="band">
        <div className="wrap about-grid">
          <div data-reveal>
            <PhotoStack shots={shots}>
              <FounderBadge className="badge-about" />
            </PhotoStack>
          </div>

          <div className="about-copy">
            <span className="kicker">About</span>
            <h2 className="h2" data-reveal>
              {about.title}
            </h2>
            <p data-reveal style={delay(80)}>
              {about.text}
            </p>
            <blockquote className="quote" data-reveal style={delay(160)}>
              “{about.quote}”
            </blockquote>
            <a href={`/writing/${note.slug}/`} className="note-link" data-reveal style={delay(220)}>
              Read my note: {note.title} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
