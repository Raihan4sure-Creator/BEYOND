'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const stored = (): Theme | null => {
  try {
    const t = localStorage.getItem('theme');
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
};

/** Light / dark switch. The head script sets data-theme before paint; this flips and remembers it. */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setDark(root.dataset.theme === 'dark');

    // Follow the device setting until the visitor picks one.
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      if (stored()) return;
      root.dataset.theme = e.matches ? 'dark' : 'light';
      setDark(e.matches);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next: Theme = dark ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.dataset.theme = next;
      setDark(next === 'dark');
    };
    try {
      localStorage.setItem('theme', next);
    } catch {}
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !still) doc.startViewTransition(apply);
    else apply();
  };

  return (
    <button type="button" className="theme-switch" role="switch" aria-checked={dark} aria-label="Dark mode" onClick={toggle}>
      <span className="knob" aria-hidden="true" />
      <svg className="sun" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
        <path
          d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M5.3 18.7l1.55-1.55M17.15 6.85l1.55-1.55"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg className="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" fill="currentColor" />
      </svg>
    </button>
  );
}
