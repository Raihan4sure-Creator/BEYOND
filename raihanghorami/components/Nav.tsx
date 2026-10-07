'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import { ArrowRight } from './Icons';
import { Clock } from './Clock';

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(href);

export function Nav() {
  const pathname = usePathname() ?? '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled || open ? ' is-scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <Link href="/" className="wordmark" aria-label="Raihan Ghorami, home">
            Raihan Ghorami
          </Link>

          <nav aria-label="Main">
            <ul className="nav-links">
              {site.nav.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact/"
                  className="btn btn-primary nav-cta"
                  aria-current={isActive(pathname, '/contact/') ? 'page' : undefined}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu-sheet"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <div id="menu-sheet" className={`menu-sheet${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            <li>
              <Link href="/" className="big" tabIndex={open ? 0 : -1} aria-current={pathname === '/' ? 'page' : undefined}>
                Home
              </Link>
            </li>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="big"
                  tabIndex={open ? 0 : -1}
                  aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <a href={`mailto:${site.email}`} className="arrow-link" tabIndex={open ? 0 : -1}>
            {site.email} <ArrowRight />
          </a>
          <p className="label mt-24">
            <span className="rec" aria-hidden="true" /> Dhaka <Clock />
          </p>
        </div>
      </div>
    </>
  );
}
