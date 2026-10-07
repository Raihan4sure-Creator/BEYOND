import { site } from '@/content/site';
import { ArrowUpRight } from './Icons';

export function Nav() {
  return (
    <header className="nav">
      <a href="/" className="nav-logo" aria-label="Raihan Ghorami, home">
        R<span>.</span>
      </a>
      <nav className="nav-pill" aria-label="Main">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a href={site.calendly} className="nav-cta" target="_blank" rel="noopener noreferrer">
        Book a call <ArrowUpRight size={14} />
      </a>
    </header>
  );
}
