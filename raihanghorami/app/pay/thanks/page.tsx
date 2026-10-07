import type { Metadata } from 'next';
import { ArrowRight } from '@/components/Icons';
import { pageMeta } from '@/content/meta';
import { site } from '@/content/site';

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Payment received',
    description: 'Thanks for the payment. Stripe emails the invoice.',
    path: '/pay/thanks/',
  }),
  robots: { index: false, follow: false },
};

export default function PayThanksPage() {
  return (
    <section className="pay pay-done">
      <div className="wrap">
        <span className="kicker" data-reveal>
          Payment received
        </span>
        <h1 className="pay-title" data-reveal>
          Paid. <span className="hl">Thank you.</span>
        </h1>
        <p className="pay-sub" data-reveal>
          Your invoice is on its way from Stripe. If anything looks off, email{' '}
          <a href={`mailto:${site.email}`} className="link-u">
            {site.email}
          </a>
          .
        </p>
        <div className="hero-ctas" data-reveal>
          <a href="/" className="btn btn-primary">
            Back to the site <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
