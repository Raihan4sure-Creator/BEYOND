'use client';

import { useState, type FormEvent } from 'react';
import { contact, site } from '@/content/site';
import { ArrowUpRight } from './Icons';

/** Collects a topic and summary, then hands off to Calendly with the answers prefilled. */
export function EnquiryForm() {
  const [topic, setTopic] = useState('');
  const isProduction = topic === 'Production';

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const details = String(data.get('details') ?? '').trim();
    const field = form.elements.namedItem('details') as HTMLTextAreaElement;

    if (details.length < 10) {
      field.setCustomValidity('Add a little more detail, at least 10 characters.');
      field.reportValidity();
      return;
    }

    const url = new URL(site.calendly);
    url.searchParams.set(
      'a1',
      [
        `Enquiry: ${data.get('topic')}`,
        `Project budget (USD): ${isProduction ? data.get('budget') : 'Not a production enquiry'}`,
        `Details: ${details}`,
      ].join('\n'),
    );
    window.location.assign(url.href);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="topic">
          What’s it about?<span className="req">Required</span>
        </label>
        <select id="topic" name="topic" className="input" required value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="" disabled>
            Pick one
          </option>
          {contact.form.topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {isProduction && (
        <div className="field">
          <label htmlFor="budget">
            Rough budget (USD)<span className="req">Required</span>
          </label>
          <select id="budget" name="budget" className="input" required defaultValue="">
            <option value="" disabled>
              Pick a range
            </option>
            {contact.form.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="field">
        <label htmlFor="details">
          Tell me a bit more<span className="req">Required</span>
        </label>
        <textarea
          id="details"
          name="details"
          className="input"
          required
          minLength={10}
          aria-describedby="details-hint"
          onInput={(e) => e.currentTarget.setCustomValidity('')}
        />
        <p id="details-hint" className="hint">
          A couple of sentences is enough. Add a link or a deadline if you have one.
        </p>
      </div>

      <button type="submit" className="btn btn-primary">
        Continue to Calendly <ArrowUpRight />
      </button>
      <p className="hint small muted">{contact.form.note}</p>
    </form>
  );
}
