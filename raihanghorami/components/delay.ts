import type { CSSProperties } from 'react';

/** Stagger for [data-reveal] items. */
export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;
