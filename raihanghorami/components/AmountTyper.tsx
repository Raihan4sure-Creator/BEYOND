'use client';

import { useEffect, useState } from 'react';

const AMOUNTS = ['250.00', '1,200.00', '75.00', '3,400.00'];

/** Types example amounts into the mock amount field: hold, delete, type the next one. */
export function AmountTyper() {
  const [text, setText] = useState(AMOUNTS[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = 0;
    let n = AMOUNTS[0].length;
    let phase: 'hold' | 'delete' | 'type' = 'hold';
    let t = 0;

    const step = () => {
      let wait = 45;
      if (phase === 'hold') {
        phase = 'delete';
      } else if (phase === 'delete') {
        n -= 1;
        if (n <= 0) {
          n = 0;
          i = (i + 1) % AMOUNTS.length;
          phase = 'type';
          wait = 320;
        }
      } else {
        n += 1;
        wait = 110;
        if (n >= AMOUNTS[i].length) {
          phase = 'hold';
          wait = 2200;
        }
      }
      setText(AMOUNTS[i].slice(0, n));
      t = window.setTimeout(step, wait);
    };

    t = window.setTimeout(step, 2400);
    return () => window.clearTimeout(t);
  }, []);

  return <span className="pc-typed">{text}</span>;
}
