'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';

const fmt = () =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: site.timeZone,
  }).format(new Date());

/** Live Dhaka time. Renders a placeholder on the server so hydration matches. */
export function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(fmt());
    const id = window.setInterval(() => setTime(fmt()), 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time suppressHydrationWarning aria-label={time ? `${time} in Dhaka` : undefined}>
      {time ?? '--:--'}
    </time>
  );
}
