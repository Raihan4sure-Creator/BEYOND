'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';

const time = (d: Date, timeZone?: string) => new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', timeZone }).format(d);

const dhakaHour = (d: Date) =>
  Number(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hourCycle: 'h23', timeZone: site.timeZone }).format(d));

const partOfDay = (h: number) => (h >= 23 || h < 6 ? 'late night' : h < 9 ? 'morning' : h < 18 ? 'work hours' : 'evening');

/** My time in Dhaka next to the visitor's, so they know if I'm up. */
export function LocalTimes() {
  const [now, setNow] = useState<Date | null>(null);
  const [same, setSame] = useState(false);

  useEffect(() => {
    setSame(Intl.DateTimeFormat().resolvedOptions().timeZone === site.timeZone);
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 20_000);
    return () => window.clearInterval(id);
  }, []);

  const h = now ? dhakaHour(now) : 12;
  const day = h >= 6 && h < 18;

  return (
    <p className={`times${now ? ' is-on' : ''}`}>
      <span className={`times-ico ${day ? 'day' : 'night'}`} aria-hidden="true">
        {day ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4.2" fill="currentColor" />
            <path
              d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M5.3 18.7l1.55-1.55M17.15 6.85l1.55-1.55"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" fill="currentColor" />
          </svg>
        )}
      </span>
      <span>
        <b>{now ? time(now, site.timeZone) : '--:--'}</b> in Dhaka{now ? `, ${partOfDay(h)}` : ''}
      </span>
      {!same && (
        <>
          <span className="times-sep" aria-hidden="true" />
          <span>
            <b>{now ? time(now) : '--:--'}</b> your time
          </span>
        </>
      )}
    </p>
  );
}
