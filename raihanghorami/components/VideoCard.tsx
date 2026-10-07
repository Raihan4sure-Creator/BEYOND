'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster: string;
  title: string;
  meta: string;
  ratio: string;
  className?: string;
};

/** Muted looping clip: plays on hover (mouse) or while on screen (touch). */
export function VideoCard({ src, poster, title, meta, ratio, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = ref.current;
    if (v) v.play().catch(() => {});
  };
  const pause = () => ref.current?.pause();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const touch = window.matchMedia('(hover: none)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!touch || calm) return;
    const io = new IntersectionObserver(([e]) => (e.intersectionRatio > 0.6 ? play() : pause()), { threshold: [0, 0.6, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      className={`vcard${playing ? ' is-playing' : ''}${className ? ` ${className}` : ''}`}
      style={{ aspectRatio: ratio }}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
      tabIndex={0}
    >
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label={`${title}, ${meta}`}
      >
        <source src={src} type="video/mp4" />
      </video>
      <span className="tag">
        <i aria-hidden="true" /> Delivered
      </span>
      <span className="play-hint" aria-hidden="true">
        <svg width="12" height="14" viewBox="0 0 12 14">
          <path d="M1 1.5v11l10-5.5z" fill="#131313" />
        </svg>
      </span>
      <figcaption className="cap">
        <b>{title}</b>
        {meta}
      </figcaption>
    </figure>
  );
}
