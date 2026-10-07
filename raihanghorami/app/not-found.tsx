import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '70svh' }}>
      <div className="wrap">
        <p className="label">404</p>
        <h1 className="h1-page">Cut.</h1>
        <p className="lead">This page didn’t make the final edit.</p>
        <div className="hero-ctas">
          <Link href="/" className="btn btn-primary">
            Back to home <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
