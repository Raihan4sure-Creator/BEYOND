import { contact, site } from '@/content/site';
import { CoffeeMug } from './CoffeeMug';
import { ArrowUpRight, WhatsApp } from './Icons';
import { LocalTimes } from './LocalTimes';

export function Footer() {
  return (
    <footer id="contact" className="contact">
      <div className="wrap">
        <p className="kicker" data-reveal>
          Contact
        </p>
        <h2 className="h2" data-reveal>
          {contact.title[0]}
          <br />
          {contact.title[1]}
          <span className="hl">
            {contact.title[2]}
            <CoffeeMug />
          </span>
        </h2>

        <div className="hero-ctas" data-reveal>
          <a href={site.calendly} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Book a call <ArrowUpRight />
          </a>
          <a href={site.whatsapp} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            <WhatsApp size={18} /> WhatsApp
          </a>
        </div>
        <div data-reveal>
          <LocalTimes />
        </div>
        <p className="small-note" data-reveal>
          Or email{' '}
          <a href={`mailto:${site.email}`} className="link-u">
            {site.email}
          </a>
          . Production work:{' '}
          <a href={`mailto:${site.workEmail}`} className="link-u">
            {site.workEmail}
          </a>
        </p>

        <div className="foot">
          <nav aria-label="Elsewhere">
            {[...site.social, ...site.elsewhere].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer me">
                {s.label}
              </a>
            ))}
          </nav>
          <span>
            © {new Date().getFullYear()} {site.name}, founder of{' '}
            <a href={site.company.url} className="link-u" target="_blank" rel="noopener noreferrer">
              Beyond Edits
            </a>{' '}
            ·{' '}
            <a href="/pay/" className="link-u">
              Pay
            </a>{' '}
            ·{' '}
            <a href="/privacy/" className="link-u">
              Privacy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
