'use client';

import { useState, type ReactNode } from 'react';

export type Shot = { src: string; alt: string; pos?: string; fit?: 'cover' | 'contain' };

/** A stack of photo "takes". The front one is selected like a layer; click to bring the next take forward. */
export function PhotoStack({ shots, children }: { shots: readonly Shot[]; children?: ReactNode }) {
  const [front, setFront] = useState(0);
  const n = shots.length;
  const next = () => setFront((v) => (v + 1) % n);

  return (
    <div className="stack">
      {shots.map((s, k) => {
        const depth = (k - front + n) % n;
        return (
          <figure
            key={s.src}
            className={`take${s.fit === 'contain' ? ' contain' : ''}`}
            style={{ zIndex: n - depth, ['--depth' as string]: depth }}
            aria-hidden={depth !== 0}
            onClick={n > 1 ? next : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={depth === 0 ? s.alt : ''} loading="lazy" style={{ objectPosition: s.pos }} />
          </figure>
        );
      })}

      <span className="take-sel" aria-hidden="true">
        <i className="knob tl" />
        <i className="knob tr" />
        <i className="knob bl" />
        <i className="knob br" />
      </span>
      <span className="take-label" aria-hidden="true">
        Take {String(front + 1).padStart(2, '0')}/{String(n).padStart(2, '0')}
      </span>
      {n > 1 && (
        <button type="button" className="take-next" onClick={next}>
          Next take <span aria-hidden="true">↻</span>
        </button>
      )}
      {children}
    </div>
  );
}
