import { AboutTakes } from '@/components/AboutTakes';
import { Cursor } from '@/components/Cursor';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { StepIcon } from '@/components/StepIcon';
import { delay } from '@/components/delay';
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
        <ProcessTimeline />
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
                <span className="step-pill" style={{ ['--c' as string]: s.c, ['--d' as string]: `${i * 1.2}s` }}>
                  <span className="ico">
                    <StepIcon name={s.icon} />
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
          <AboutTakes takes={about.takes} note={{ href: `/writing/${note.slug}/`, title: note.title }} />
        </div>
      </section>
    </>
  );
}
