import { site } from '@/content/site';

/** Spinning "Founder · Beyond Edits" sticker with the BE mark. Links to the agency. */
export function FounderBadge({ className }: { className?: string }) {
  const text = 'FOUNDER ✦ BEYOND EDITS ✦ FOUNDER ✦ BEYOND EDITS ✦ ';
  return (
    <a
      href={site.company.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`badge${className ? ` ${className}` : ''}`}
      aria-label="Beyond Edits, the video editing company I founded"
    >
      <svg viewBox="0 0 120 120" className="badge-ring" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text>
          <textPath href="#badge-circle" textLength="289">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="badge-mark" aria-hidden="true" />
    </a>
  );
}
