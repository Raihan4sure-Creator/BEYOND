import { contact, site } from '@/content/site';
import { Clock } from './Clock';
import { Cursor } from './Cursor';
import { ArrowUpRight, WhatsApp } from './Icons';

export function Footer() {
  return (
    <footer id="contact" className="band contact" style={{ paddingTop: 'clamp(32px, 4vw, 56px)', paddingBottom: 0 }}>
      <div className="wrap">
        <p className="kicker" data-reveal>
          Contact
        </p>
        <h2 className="h2 mt" data-reveal style={{ marginTop: 18 }}>
          {contact.title[0]}
          <br />
          {contact.title[1]}
          <span className="hl">
            {contact.title[2]}
            <Cursor label="You" color="#131313" />
          </span>
        </h2>

        <div className="hero-ctas" data-reveal>
          <a href={site.calendly} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
            Book a call <ArrowUpRight />
          </a>
          <a href={site.whatsapp} className="btn btn-light" target="_blank" rel="noopener noreferrer">
            <WhatsApp size={18} /> WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-light">
            {site.email}
          </a>
        </div>
        <p className="small-note" data-reveal>
          {contact.note}{' '}
          <a href={`mailto:${site.workEmail}`} className="link-u">
            {site.workEmail}
          </a>
        </p>

        <div className="foot">
          <span className="live">
            <i aria-hidden="true" /> Dhaka · <Clock />
          </span>
          <nav aria-label="Elsewhere">
            {[...site.social, ...site.elsewhere].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer me">
                {s.label}
              </a>
            ))}
          </nav>
          <span>
            © {new Date().getFullYear()} {site.name} ·{' '}
            <a href="/privacy/" className="link-u">
              Privacy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
