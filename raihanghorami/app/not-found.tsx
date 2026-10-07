import { ArrowRight } from '@/components/Icons';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: '70svh' }}>
      <div className="wrap">
        <p className="kicker">404</p>
        <h1 className="h2" style={{ marginTop: 18 }}>
          <span style={{ background: 'var(--pink)', padding: '0 .1em', borderRadius: 6 }}>Cut.</span>
        </h1>
        <p className="hero-sub" style={{ marginTop: 24 }}>
          This page didn’t make the final edit.
        </p>
        <div className="hero-ctas">
          <a href="/" className="btn btn-dark">
            Back to home <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
