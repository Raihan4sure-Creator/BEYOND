'use client';

import { useState } from 'react';
import type { Take } from '@/content/site';
import { FounderBadge } from './FounderBadge';
import { ArrowRight } from './Icons';

const pad = (n: number) => String(n).padStart(2, '0');

/** Take 01's monitor: a small editing timeline with a playhead running over it. */
function TimelineScreen() {
  return (
    <div className="screen screen-timeline" aria-hidden="true">
      <div className="tl-ruler">
        <span>00:00:14:08</span>
      </div>
      <div className="tl-track tl-v">
        <i style={{ flex: 3 }} />
        <i style={{ flex: 5 }} />
        <i style={{ flex: 2 }} />
        <i style={{ flex: 4 }} />
      </div>
      <div className="tl-track tl-a" />
      <span className="tl-head" />
    </div>
  );
}

/** Take 02's monitor: an AI prompt typing itself out, right where his fingertips point. */
function PromptScreen() {
  return (
    <div className="screen screen-prompt" aria-hidden="true">
      <span className="pr-bar">
        <svg viewBox="-10 -10 20 20" className="pr-spark">
          <path d="M0 -10Q1.6 -1.6 10 0Q1.6 1.6 0 10Q-1.6 1.6 -10 0Q-1.6 -1.6 0 -10Z" />
        </svg>
        <span className="pr-text">find the best take</span>
      </span>
    </div>
  );
}

/**
 * About, told in two takes. The photo stack and the text switch together:
 * Take 01 is the editing business as it is, Take 02 is where it's going with AI.
 */
export function AboutTakes({ takes, note }: { takes: readonly Take[]; note: { href: string; title: string } }) {
  const [front, setFront] = useState(0);
  const n = takes.length;

  return (
    <>
      <div data-reveal>
        <div className="stack">
          {takes.map((t, k) => {
            const depth = (k - front + n) % n;
            return (
              <figure
                key={t.id}
                className="take"
                style={{ zIndex: n - depth, ['--depth' as string]: depth }}
                aria-hidden={depth !== 0}
                onClick={() => setFront((front + 1) % n)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${t.img}-1080.webp`}
                  srcSet={`${t.img}-720.webp 720w, ${t.img}-1080.webp 1080w`}
                  sizes="(max-width: 860px) 88vw, 520px"
                  width={1080}
                  height={1350}
                  alt={depth === 0 ? t.alt : ''}
                  loading="lazy"
                  decoding="async"
                />
                {t.screen === 'timeline' ? <TimelineScreen /> : <PromptScreen />}
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
            Take {pad(front + 1)} · {takes[front].label}
          </span>
          <FounderBadge className="badge-about" />

          <div className="take-switch" role="tablist" aria-label="About Raihan">
            {takes.map((t, k) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={k === front}
                aria-controls={`panel-${t.id}`}
                tabIndex={k === front ? 0 : -1}
                onClick={() => setFront(k)}
                onKeyDown={(e) => {
                  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
                  const next = (front + (e.key === 'ArrowRight' ? 1 : n - 1)) % n;
                  setFront(next);
                  document.getElementById(`tab-${takes[next].id}`)?.focus();
                }}
              >
                <span>{pad(k + 1)}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="about-copy">
        <span className="kicker">About</span>
        <div className="about-panels" data-reveal>
          {takes.map((t, k) => (
            <div
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${t.id}`}
              className={`about-panel${k === front ? ' is-on' : ''}`}
              inert={k !== front}
            >
              <h2 className="h2">{t.title}</h2>
              <p>{t.text}</p>
              <blockquote className="quote">“{t.quote}”</blockquote>
            </div>
          ))}
        </div>
        <a href={note.href} className="note-link" data-reveal>
          Read my note: {note.title} <ArrowRight size={14} />
        </a>
      </div>
    </>
  );
}
