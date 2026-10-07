import type { Metadata } from 'next';
import { pageMeta } from '@/content/meta';
import Link from 'next/link';
import { Clock } from '@/components/Clock';
import { EnquiryForm } from '@/components/EnquiryForm';
import { ArrowRight, ArrowUpRight, WhatsApp } from '@/components/Icons';
import { Label } from '@/components/Label';
import { delay } from '@/components/delay';
import { contact, site } from '@/content/site';

export const metadata: Metadata = pageMeta({
  title: 'Contact',
  description:
    'Email me, message me on WhatsApp or book a call. For video projects, Raihan@beyondedits.agency goes straight to the Beyond Edits team.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="label" data-reveal>
            Contact
          </p>
          <h1 className="h1-page" data-reveal style={delay(80)}>
            {contact.title}
          </h1>
          <p className="lead" data-reveal style={delay(160)}>
            {contact.lead}
          </p>

          <div className="emails">
            {contact.emails.map((e, i) => (
              <div className="email-block" key={e.email} data-reveal style={delay(200 + i * 80)}>
                <p className="label">{e.k}</p>
                <a href={`mailto:${e.email}`} className="link">
                  {e.email}
                </a>
                <p className="small">{e.note}</p>
              </div>
            ))}
          </div>

          <div className="hero-ctas mt-40" data-reveal style={delay(320)}>
            <a href="#enquiry" className="btn btn-primary">
              Book a call <ArrowRight />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <WhatsApp size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="band-tight rule-top">
        <div className="wrap">
          <div className="cards two">
            {contact.routes.map((r, i) => (
              <article key={r.title} data-reveal style={delay((i % 2) * 80)}>
                <span className="card-index">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="h3">{r.title}</h2>
                <p className="small">{r.body}</p>
                {r.cta &&
                  (r.cta.href.startsWith('#') ? (
                    <a href={r.cta.href} className="arrow-link mt-8">
                      {r.cta.label} <ArrowRight />
                    </a>
                  ) : (
                    <a href={r.cta.href} target="_blank" rel="noopener noreferrer" className="arrow-link mt-8">
                      {r.cta.label} <ArrowUpRight />
                    </a>
                  ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="band rule-top">
        <div className="wrap grid form-grid">
          <div>
            <Label n={1}>{contact.form.label}</Label>
            <h2 className="h2 mt-24" data-reveal>
              {contact.form.title}
            </h2>
            <p className="body mt-24" data-reveal style={delay(80)}>
              {contact.form.body}
            </p>
            <p className="small mt-24" data-reveal style={delay(120)}>
              Prefer email?{' '}
              <a href={`mailto:${site.workEmail}`} className="link-u" style={{ color: 'var(--fg)' }}>
                {site.workEmail}
              </a>
            </p>
          </div>
          <div data-reveal style={delay(120)}>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="band-tight rule-top">
        <div className="wrap grid split" style={{ alignItems: 'end' }}>
          <div>
            <Label n={2}>{contact.based.label}</Label>
            <h2 className="h2 mt-24" data-reveal>
              {contact.based.title}
            </h2>
          </div>
          <div data-reveal style={delay(100)}>
            <p className="body">{contact.based.body}</p>
            <p className="label mt-24">
              <span className="rec" aria-hidden="true" /> It’s <Clock /> here right now
            </p>
            <Link href="/work/" className="arrow-link link mt-40" style={{ display: 'inline-flex' }}>
              See the work first <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
