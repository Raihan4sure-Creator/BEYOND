export const site = {
  name: 'Raihan Ghorami',
  url: 'https://raihanghorami.com',
  role: 'Founder of Beyond Edits',
  email: 'Hello@raihanghorami.com',
  workEmail: 'Raihan@beyondedits.agency',
  company: { name: 'Beyond Edits', url: 'https://beyondedits.agency' },
  calendly: 'https://calendly.com/raihan4sure/new-meeting',
  whatsapp: 'https://wa.me/8801856875758?text=Hi%20Raihan%2C%20I%20found%20you%20through%20your%20website.',
  timeZone: 'Asia/Dhaka',
  description:
    'I run Beyond Edits, a 20-person video editing team in Dhaka. 2,000+ videos edited, ~200M organic views, 4.9★ Top Rated Plus on Upwork.',
  nav: [
    { href: '/#about', label: 'About' },
    { href: '/#process', label: 'Process' },
  ],
  social: [
    { href: 'https://www.linkedin.com/in/raihan4sure/', label: 'LinkedIn' },
    { href: 'https://x.com/raihan4sure', label: 'X' },
    { href: 'https://www.instagram.com/raihan4sure/', label: 'Instagram' },
    { href: 'https://www.youtube.com/@RaihanK', label: 'YouTube' },
  ],
  elsewhere: [
    { href: 'https://letterboxd.com/raihan4sure/', label: 'Letterboxd' },
    { href: 'https://steamcommunity.com/id/raihan4sure', label: 'Steam' },
  ],
} as const;

export const hero = {
  line: 'Good videos are made in the',
  word: 'edit',
  sub: 'I run Beyond Edits, a 20-person video editing team in Dhaka. The team edits. I make sure it’s right.',
};

export const stats = [
  { v: '2,000+', k: 'Videos edited' },
  { v: '~200M', k: 'Organic views' },
  { v: '4.9★', k: 'Top Rated Plus, Upwork' },
  { v: '20', k: 'People in Dhaka' },
];

export const results = [
  { name: 'Will Barron', note: '0 → 15K subs' },
  { name: 'Photography Explained', note: '30K → 90K subs' },
  { name: 'Salesman.com', note: 'YouTube' },
  { name: 'Ray White agents', note: 'Listing videos' },
];

/** `c` is the pill's status colour (r, g, b), kept muted on purpose. */
export const process = [
  { label: 'Brief', icon: 'brief', c: '176, 172, 246', text: 'Footage and a reference. That’s enough to start.' },
  { label: 'Editing', icon: 'editing', c: '112, 214, 206', text: 'One editor owns your video, start to finish.' },
  { label: 'QC', icon: 'qc', c: '192, 168, 244', text: 'Every cut gets checked before you see it.' },
  { label: 'Your review', icon: 'review', c: '232, 200, 104', text: 'Timestamped notes. Fixes come back fast.' },
  { label: 'Delivered', icon: 'delivered', c: '116, 208, 144', text: 'Every version you need. Files kept a year.' },
] as const;

/** About is told in two takes: the editing business as it is, then where it's going with AI. */
export const about = {
  takes: [
    {
      id: 'edit',
      label: 'The edit',
      title: 'Hi, I’m Raihan.',
      text: 'I learned to edit at 16 because I wanted a YouTube channel. The channel didn’t go anywhere. The editing stuck. First clients came from Fiverr. Now it’s a team of 20, and I still watch the cuts.',
      quote: 'Not the cheapest. Anyone can be cheap.',
      img: '/images/raihan/take-edit',
      alt: 'Raihan Ghorami at his editing desk at night, two bright monitors behind him, hand at his chin',
      screen: 'timeline',
    },
    {
      id: 'next',
      label: 'What’s next',
      title: 'Where this is going.',
      text: 'I build AI stuff because I like it. Editing has a lot of slow, boring work in it, and that part should be automated. The plan for Beyond Edits is simple: AI does the grunt work, editors keep the taste. Coffee helps.',
      quote: 'Faster is nice. Better is the point.',
      img: '/images/raihan/take-next',
      alt: 'Raihan Ghorami in profile, fingertips raised toward his monitor, working something out',
      screen: 'prompt',
    },
  ],
} as const;

export type Take = (typeof about.takes)[number];

export const contact = {
  title: ['Got a video?', 'Let’s ', 'talk.'],
};
