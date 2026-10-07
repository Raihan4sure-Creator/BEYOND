import type { Metadata } from 'next';
import { AmountTyper } from '@/components/AmountTyper';
import { ArrowUpRight } from '@/components/Icons';
import { avatar } from '@/content/media';
import { pageMeta } from '@/content/meta';
import { site } from '@/content/site';

export const metadata: Metadata = pageMeta({
  title: 'Pay',
  description: 'Pay Raihan Ghorami any amount by card. Checkout runs on Stripe and the invoice comes by email.',
  path: '/pay/',
});

export default function PayPage() {
  return (
    <section className="pay">
      <div className="wrap pay-grid">
        <div className="pay-copy">
          <span className="kicker" data-reveal>
            Payments
          </span>
          <h1 className="pay-title" data-reveal>
            Pay in a <span className="hl">minute.</span>
          </h1>
          <p className="pay-sub" data-reveal>
            Type the amount and pay by card. Stripe runs the checkout and emails you an invoice.
          </p>
          <div className="hero-ctas pay-ctas" data-reveal>
            <a href={site.pay} className="btn btn-primary" rel="noopener">
              Pay now <ArrowUpRight />
            </a>
          </div>
          <ul className="pay-notes" data-reveal>
            <li>Paying an invoice? Add the invoice number on the next screen.</li>
            <li>Payments go to Beyond Edits Ltd, my company, in US dollars.</li>
            <li>
              Something off? Email{' '}
              <a href={`mailto:${site.email}`} className="link-u">
                {site.email}
              </a>
              .
            </li>
          </ul>
        </div>

        {/* A preview of the checkout, linking to it. The real amount is typed on Stripe. */}
        <a href={site.pay} rel="noopener" className="pay-card" aria-label="Continue to the Stripe checkout" data-reveal>
          <span className="pc-head" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={avatar} alt="" width={40} height={40} />
            <span>
              <b>Payment to Raihan Ghorami</b>
              <small>Beyond Edits Ltd</small>
            </span>
          </span>

          <span className="pc-field" aria-hidden="true">
            <small>Amount</small>
            <span className="pc-amount">
              <span className="pc-cur">$</span>
              <AmountTyper />
              <i className="pc-caret" />
              <span className="pc-usd">USD</span>
            </span>
            <span className="pc-sel">
              <i className="knob tl" />
              <i className="knob tr" />
              <i className="knob bl" />
              <i className="knob br" />
            </span>
          </span>

          <span className="pc-row" aria-hidden="true">
            <span>Invoice or project</span>
            <small>Optional</small>
          </span>

          <span className="pc-pay" aria-hidden="true">
            Pay
          </span>
          <span className="pc-foot" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Secure checkout by Stripe
          </span>
        </a>
      </div>
    </section>
  );
}
