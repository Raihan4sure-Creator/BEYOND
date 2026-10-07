import { avatar } from '@/content/media';
import { site } from '@/content/site';
import { ArrowUpRight } from './Icons';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  return (
    <header className="nav">
      <a href="/" className="nav-logo" aria-label="Raihan Ghorami, home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt="" width={48} height={48} />
      </a>
      <nav className="nav-pill" aria-label="Main">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={site.company.url} target="_blank" rel="noopener noreferrer" className="nav-be">
          <span className="be-mark" aria-hidden="true" />
          Beyond Edits
          <ArrowUpRight size={12} />
        </a>
      </nav>
      <div className="nav-end">
        <ThemeToggle />
        <a href={site.calendly} className="nav-cta" target="_blank" rel="noopener noreferrer">
          Book a call <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}
