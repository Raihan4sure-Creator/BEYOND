export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: { term: string; text: string }[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  intro: string[];
  blocks: Block[];
};

export const posts: Post[] = [
  {
    slug: 'a-clear-handoff-before-the-first-cut',
    title: 'A clear handoff before the first cut.',
    description: 'What to tell your editor before they start, so the first cut needs fewer fixes.',
    category: 'Agency operations',
    date: '2026-09-14',
    intro: [
      'A lot of edits go wrong before editing even starts. The editor gets a folder of footage and a deadline, and has to guess the rest.',
      'A brief fixes most of that. It doesn’t need to be long. It just needs to answer a few questions before the first cut, somewhere the editor can find it again.',
    ],
    blocks: [
      { type: 'h2', text: 'Say who the video is for.' },
      {
        type: 'p',
        text: 'Start with the viewer. “This is for someone seeing our website for the first time. By the end, they should get what we do.” That gives the editor a lot more to work with than “make a brand video.”',
      },
      {
        type: 'p',
        text: 'Keep coming back to it in review. A new opening might look great but take longer to explain the service. If the goal changes, update the brief too.',
      },
      { type: 'h2', text: 'List what you need back.' },
      {
        type: 'p',
        text: 'How many videos? Roughly how long? Landscape, vertical or both? Captions burned in, a separate caption file, or a clean version? Write it down before editing starts.',
      },
      {
        type: 'p',
        text: 'If some assets are missing, say so, and say who’s sending them. Mark anything that has to stay, like a disclaimer. Agree on the first-cut date and how many review rounds there are. And if you suggest a music style, say whether it’s a must or just an idea.',
      },
      { type: 'h2', text: 'Explain your reference.' },
      {
        type: 'p',
        text: 'Two people can watch the same reference and notice completely different things. Point to the part you mean: the pace of the opening, the caption size, how little music there is.',
      },
      {
        type: 'p',
        text: '“Use this pace, but keep our graphics simpler” is enough. The editor needs to know what you liked about it. They don’t need to copy the whole video.',
      },
      { type: 'h2', text: 'Sort the feedback before you send it.' },
      {
        type: 'p',
        text: 'Pick one person to collect comments and settle disagreements. Your editor shouldn’t have to choose between two people asking for opposite changes.',
      },
      {
        type: 'p',
        text: 'Add the version and a timestamp, then describe the problem. “At 00:18 I still don’t understand what the offer includes” is easy to act on. “This bit feels off” isn’t. Say which notes are must-fix and which are just ideas.',
      },
      { type: 'h2', text: 'A brief you can reuse.' },
      { type: 'p', text: 'Copy these into your project doc, next to the footage link:' },
      {
        type: 'list',
        items: [
          { term: 'Viewer and purpose', text: 'Who’s watching, and what should they take away?' },
          { term: 'Deliverables', text: 'Which files and versions do you need?' },
          { term: 'Assets', text: 'Where’s the footage, and what’s still missing?' },
          { term: 'Direction', text: 'Which references matter, and why?' },
          { term: 'Review', text: 'Who collects feedback and gives the final OK?' },
          { term: 'Timing', text: 'When are the first cut, feedback and final delivery due?' },
        ],
      },
      {
        type: 'p',
        text: 'That’s it. Ten minutes on this usually saves a full round of revisions.',
      },
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
