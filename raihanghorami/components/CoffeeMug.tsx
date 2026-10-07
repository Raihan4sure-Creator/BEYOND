'use client';

import { useRef, useState } from 'react';
import { site } from '@/content/site';

const SIPS = 3;

/** Rough coffee count for today in Dhaka. Not scientific. */
const coffeesSoFar = () => {
  const h = Number(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: site.timeZone }).format(new Date()));
  return Math.min(6, Math.max(1, Math.floor((h - 7) / 2.5) + 1));
};

const star = 'M0 -10Q1.6 -1.6 10 0Q1.6 1.6 0 10Q-1.6 1.6 -10 0Q-1.6 -1.6 0 -10Z';

/** A mug that steams (sometimes an AI sparkle comes out). Click it to take a sip. */
export function CoffeeMug() {
  const [sips, setSips] = useState(0);
  const [say, setSay] = useState<{ id: number; text: string } | null>(null);
  const [sipping, setSipping] = useState(false);
  const count = useRef<number | null>(null);
  const busy = useRef(false);

  const talk = (text: string) => setSay({ id: Date.now(), text });

  const sip = () => {
    if (busy.current) return;
    const next = sips + 1;
    setSips(next);
    setSipping(false);
    requestAnimationFrame(() => setSipping(true));
    if (next < SIPS) {
      talk('sip.');
      return;
    }
    talk('empty.');
    busy.current = true;
    window.setTimeout(() => {
      count.current = (count.current ?? coffeesSoFar()) + 1;
      setSips(0);
      talk(`refill #${count.current}`);
      busy.current = false;
    }, 1400);
  };

  const level = (sips / SIPS) * 38;

  return (
    <span
      className={`mug${sips >= SIPS ? ' empty' : ''}${sipping ? ' sip' : ''}`}
      aria-hidden="true"
      onClick={sip}
      onAnimationEnd={(e) => e.target === e.currentTarget && setSipping(false)}
      title="Take a sip"
    >
      <svg viewBox="0 0 64 92">
        <defs>
          <clipPath id="mug-inside">
            <path d="M11 47h34v25a13 13 0 0 1-13 13h-8a13 13 0 0 1-13-13z" />
          </clipPath>
        </defs>
        <g className="steam">
          <path d="M21 38c-5-5 5-9 0-15s4-9 0-13" pathLength={34} />
          <path d="M32 36c-5-5 5-9 0-15s4-9 0-13" pathLength={34} />
          <path d="M43 38c-5-5 5-9 0-15s4-9 0-13" pathLength={34} />
        </g>
        <g transform="translate(32 20)">
          <path className="spark" d={star} />
        </g>
        <path className="handle" d="M48 53h3a9 9 0 0 1 0 18h-3" />
        <path className="body" d="M8 44h40v28a16 16 0 0 1-16 16h-8A16 16 0 0 1 8 72z" />
        <g clipPath="url(#mug-inside)">
          <rect className="coffee" x="8" y="50" width="40" height="40" style={{ transform: `translateY(${level}px)` }} />
        </g>
      </svg>
      {say && (
        <span key={say.id} className="mug-say">
          {say.text}
        </span>
      )}
    </span>
  );
}
