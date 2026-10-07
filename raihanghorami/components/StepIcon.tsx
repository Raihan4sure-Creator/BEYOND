/** Small status icons for the process pills (to-do, in progress, frame review, in review, done). */
export function StepIcon({ name }: { name: 'brief' | 'editing' | 'qc' | 'review' | 'delivered' }) {
  const p = { width: 14, height: 14, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true } as const;
  const s = { stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
  switch (name) {
    case 'brief':
      return (
        <svg {...p}>
          <path d="M8 3.5v9M3.5 8h9" {...s} />
        </svg>
      );
    case 'editing':
      return (
        <svg {...p}>
          <circle cx="8" cy="8" r="5.2" {...s} strokeWidth={1.6} />
          <path d="M8 2.8a5.2 5.2 0 0 1 0 10.4z" fill="currentColor" />
        </svg>
      );
    case 'qc':
      return (
        <svg {...p}>
          <rect x="4" y="4" width="8" height="8" {...s} strokeWidth={1.4} />
          <rect x="2.2" y="2.2" width="3.4" height="3.4" rx="0.8" fill="currentColor" />
          <rect x="10.4" y="2.2" width="3.4" height="3.4" rx="0.8" fill="currentColor" />
          <rect x="2.2" y="10.4" width="3.4" height="3.4" rx="0.8" fill="currentColor" />
          <rect x="10.4" y="10.4" width="3.4" height="3.4" rx="0.8" fill="currentColor" />
        </svg>
      );
    case 'review':
      return (
        <svg {...p}>
          <rect x="3.5" y="3" width="9" height="11" rx="1.6" {...s} strokeWidth={1.6} />
          <path d="M6 2.2h4M6 7.5h4M6 10.5h2.6" {...s} strokeWidth={1.6} />
        </svg>
      );
    case 'delivered':
      return (
        <svg {...p}>
          <path d="M4 8.4l2.6 2.6L12 5.4" {...s} strokeWidth={2} />
        </svg>
      );
  }
}
