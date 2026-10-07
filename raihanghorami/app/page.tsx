import { Clock } from '@/components/Clock';
import { Cursor } from '@/components/Cursor';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { PhysicsPills } from '@/components/PhysicsPills';
import { Picture } from '@/components/Picture';
import { VideoCard } from '@/components/VideoCard';
import { delay } from '@/components/delay';
import { images } from '@/content/images';
import { clips, cutout, reviews } from '@/content/media';
import { posts } from '@/content/posts';
import { about, hero, pills, process, results, site, stats } from '@/content/site';

export default function HomePage() {
  const note = posts[0];

  return (
    <>
      {/* ---------- Hero: the headline is being edited ---------- */}
      <section className="hero">
        <div className="wrap">
          <p className="hello" data-reveal>
            <img src="/images/raihan/hero-silhouette-480.jpg" alt="" width={30} height={30} />
            Hi, I’m Raihan Ghorami
          </p>

          <h1>
            <span className="hero-line" style={{ display: 'block' }} data-reveal>
              {hero.line}
            </span>
            <span className="edit-wrap" data-reveal style={delay(120)}>
              <span className="sel" aria-hidden="true">
                <span className="knob bl" />
                <span className="knob tr" />
              </span>
              <span className="sel-cursor" aria-hidden="true">
                <Cursor label="Raihan" color="#6e56f0" />
              </span>
              <span className="edit-word">{hero.word}.</span>
              <span className="sparkle" aria-hidden="true">
                ✨
              </span>

              <span className="float f-comment" aria-hidden="true">
                <span className="comment">
                  <span className="avatar">R</span>
                  <span>
                    <b>
                      Raihan<span className="tc">00:18</span>
                    </b>
                    {hero.comment}
                  </span>
                </span>
              </span>
              <span className="float f-status" aria-hidden="true">
                <span className="status">
                  {hero.statuses.map((s) => (
                    <span key={s.label}>
                      <i style={{ background: s.color }} />
                      {s.label}
                      {s.label === 'Approved' ? ' ✓' : ''}
                    </span>
                  ))}
                </span>
              </span>
              <span className="float f-editor drift-a" aria-hidden="true">
                <Cursor label="Editor" color="#1d84f2" />
              </span>
              <span className="float f-qc drift-b" aria-hidden="true">
                <Cursor label="QC" color="#14a862" />
              </span>
            </span>
          </h1>

          <p className="hero-sub" data-reveal style={delay(200)}>
            {hero.sub}
          </p>
          <div className="hero-ctas" data-reveal style={delay(260)}>
            <a href={site.calendly} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
              Book a call <ArrowUpRight />
            </a>
            <a href="#work" className="btn btn-light">
              See the work <ArrowRight />
            </a>
          </div>
          <p className="rating" data-reveal style={delay(300)}>
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>
            4.9 on Upwork · Top Rated Plus
          </p>

          <div className="timeline" aria-hidden="true" data-reveal style={delay(340)}>
            <div className="ruler">
              {['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30'].map((t, i) => (
                <span key={t} className={i % 2 ? 'hide-m' : undefined}>
                  {t}
                </span>
              ))}
            </div>
            <div className="track">
              <span className="track-name">V1</span>
              {hero.timeline.map((c) => (
                <span key={c.label} className={`clip${c.hideMobile ? ' hide-m' : ''}`} style={{ background: c.bg, flex: c.flex }}>
                  {c.label}
                </span>
              ))}
            </div>
            <div className="track">
              <span className="track-name">A1</span>
              <span className="wave" />
            </div>
            <span className="playhead" />
          </div>
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section className="band" style={{ paddingTop: 'clamp(56px, 6vw, 88px)' }} aria-label="Results">
        <div className="wrap">
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={s.k} data-reveal style={delay(i * 70)}>
                <b>{s.v}</b>
                <span>{s.k}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="marquee" aria-label="Clients and results">
          <div className="marquee-track">
            {[...results, ...results, ...results, ...results].map((r, i) => (
              <span className="marquee-item" key={i} aria-hidden={i >= results.length ? 'true' : undefined}>
                {r.name} <small>{r.note}</small>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Work ---------- */}
      {clips.length > 0 && (
        <section id="work" className="band" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker">Work</span>
                <h2 className="h2" data-reveal>
                  Recent <em>cuts.</em>
                </h2>
              </div>
              <p className="sec-note" data-reveal>
                Edited by the Beyond Edits team. Hover to play.
              </p>
            </div>
            <div className="work-grid">
              {clips.map((c, i) => (
                <div key={c.src} className={c.span} data-reveal style={delay((i % 3) * 80)}>
                  <VideoCard {...c} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Process ---------- */}
      <section id="process" className="band process">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="sec-head">
            <div>
              <span className="kicker">Process</span>
              <h2 className="h2" data-reveal>
                How a video moves
                <br />
                through <em>Beyond Edits.</em>
              </h2>
            </div>
          </div>
          <ol className="steps">
            {process.map((s, i) => (
              <li className="step" key={s.label} data-reveal style={delay(i * 90)}>
                <span className="glow" style={{ ['--c' as string]: s.c, ['--d' as string]: `${i * 1}s` }}>
                  <span className="ico" aria-hidden="true">
                    {s.icon}
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
        <div className="wrap">
          <div className="about-grid">
            <div className="portrait" data-reveal>
              {cutout.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="cut" src={cutout.src} width={cutout.width} height={cutout.height} alt="Raihan Ghorami" loading="lazy" />
              ) : (
                <div className="photo">
                  <Picture img={images.hero} sizes="(max-width: 860px) 90vw, 40vw" />
                </div>
              )}
              <span className="chip chip-a">
                <span>
                  <small>{about.chips[0].k}</small>
                  {about.chips[0].v}
                </span>
              </span>
              <span className="chip chip-b">
                <span>
                  <small>{about.chips[1].k}</small>
                  {about.chips[1].v}
                </span>
              </span>
              <span className="chip chip-c">
                <span className="live">
                  <i aria-hidden="true" /> Dhaka · <Clock />
                </span>
              </span>
            </div>

            <div className="about-copy">
              <span className="kicker">About</span>
              <h2 className="h2" style={{ marginTop: 14 }} data-reveal>
                {about.title}
              </h2>
              {about.lines.map((l, i) => (
                <p key={i} data-reveal style={delay(80 + i * 60)}>
                  {l}
                </p>
              ))}
              <p className="quote" data-reveal style={delay(220)}>
                “{about.quote}”<span>How I run Beyond Edits</span>
              </p>
              <p style={{ marginTop: 28 }} data-reveal>
                <a href={`/writing/${note.slug}/`} className="link-u">
                  Read my note: {note.title}
                </a>
              </p>
            </div>
          </div>

          <PhysicsPills items={pills} />
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      {reviews.length > 0 && (
        <section id="reviews" className="band" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker">Reviews</span>
                <h2 className="h2" data-reveal>
                  What clients <em>say.</em>
                </h2>
              </div>
              <p className="sec-note" data-reveal>
                From client messages on Upwork. 4.9★ · Top Rated Plus.
              </p>
            </div>
            <div className="reviews">
              {reviews.map((r, i) => (
                <blockquote className="review" key={i} data-reveal style={delay(i * 80)}>
                  <p>“{r.text}”</p>
                  <footer>{r.by}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
