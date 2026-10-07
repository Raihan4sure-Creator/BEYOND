import Link from 'next/link';
import { footer, site } from '@/content/site';
import { Clock } from './Clock';
import { delay } from './delay';
import { ArrowRight, ArrowUpRight } from './Icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="grid footer-cta">
          <h2 className="h2" data-reveal>
            {footer.title}
          </h2>
          <div data-reveal style={delay(120)}>
            <p className="body">{footer.body}</p>
            <div className="hero-ctas" style={{ marginTop: 0 }}>
              <Link href="/contact/#enquiry" className="btn btn-primary">
                Start a conversation <ArrowRight />
              </Link>
            </div>
            <a href={`mailto:${site.email}`} className="link-u small">
              {site.email}
            </a>
          </div>
        </div>

        <div className="credits">
          <div>
            <h4>Video projects</h4>
            <p className="small" style={{ maxWidth: '34ch' }}>
              For editing work, email{' '}
              <a href={`mailto:${site.workEmail}`} className="link-u" style={{ color: 'var(--fg)' }}>
                {site.workEmail}
              </a>
              . It goes straight to the Beyond Edits team.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer me">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>Email</a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </li>
              <li>
                <a href={site.company.url} target="_blank" rel="noopener noreferrer" className="arrow-link" style={{ fontWeight: 400 }}>
                  Beyond Edits <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <p className="label">
            © {year} {site.name}
          </p>
          <p className="label">
            <span className="rec" aria-hidden="true" /> Dhaka, Bangladesh <span aria-hidden="true">·</span> <Clock />
          </p>
          <Link href="/privacy/" className="label link">
            Privacy
          </Link>
        </div>

        <p className="footer-mark" aria-hidden="true">
          Raihan Ghorami
        </p>
      </div>
    </footer>
  );
}
