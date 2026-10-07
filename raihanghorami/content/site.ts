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
    'I run Beyond Edits, a 12-person video editing team in Dhaka. 2,000+ videos edited, ~200M organic views, 4.9★ Top Rated Plus on Upwork.',
  nav: [
    { href: '/#process', label: 'Process' },
    { href: '/#about', label: 'About' },
    { href: '/#reviews', label: 'Reviews' },
    { href: '/#contact', label: 'Contact' },
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
  sub: 'I run Beyond Edits, a 12-person video editing team in Dhaka. The team edits. I make sure it’s right.',
  comment: 'Cut 4 frames earlier. Let the joke land.',
  statuses: [
    { label: 'Rough cut', color: '#1d84f2' },
    { label: 'In review', color: '#f5a524' },
    { label: 'Approved', color: '#14a862' },
  ],
  timeline: [
    { label: 'Hook', bg: '#ddd5ff', flex: 1.1 },
    { label: 'Story', bg: '#f6c9de', flex: 2.4 },
    { label: 'Proof', bg: '#c3e6f4', flex: 1.6, hideMobile: true },
    { label: 'CTA', bg: '#dcf56a', flex: 0.9 },
  ],
};

export const stats = [
  { v: '2,000+', k: 'videos edited' },
  { v: '~200M', k: 'organic views' },
  { v: '4.9★', k: 'Top Rated Plus on Upwork' },
  { v: '12', k: 'people in Dhaka' },
];

export const results = [
  { name: 'Will Barron', note: '0 → 15K subscribers' },
  { name: 'Photography Explained', note: '30K → 90K subscribers' },
  { name: 'Salesman.com', note: 'YouTube' },
  { name: 'Ray White agents', note: 'Listing videos' },
];

export const process = [
  { label: 'Brief', icon: '+', c: '165, 160, 255', text: 'Footage and a reference. That’s enough to start.' },
  { label: 'Editing', icon: '◐', c: '94, 234, 230', text: 'One editor owns your video, start to finish.' },
  { label: 'QC', icon: '⌗', c: '196, 160, 255', text: 'Every cut gets checked before you see it.' },
  { label: 'Your review', icon: '≡', c: '250, 214, 72', text: 'Timestamped notes. Fixes come back fast.' },
  { label: 'Delivered', icon: '✓', c: '74, 222, 128', text: 'Every version you need. Files kept a year.' },
];

export const about = {
  title: 'Hi, I’m Raihan.',
  lines: [
    'I learned to edit at 16 because I wanted a YouTube channel. The channel didn’t go anywhere. The editing stuck.',
    'First clients came from Fiverr. Now it’s a team of 12, and I still watch the cuts.',
  ],
  quote: 'Not the cheapest. Anyone can be cheap.',
  chips: [
    { k: 'Started at', v: '16, on Fiverr' },
    { k: 'Now', v: '12 people · Dhaka' },
  ],
};

export const pills = [
  { t: 'J-cuts', bg: '#dcf56a' },
  { t: '4 frames earlier', bg: '#f6c9de' },
  { t: 'Cutting on the beat', bg: '#c3e6f4' },
  { t: 'Retention', bg: '#ffd84a' },
  { t: 'Clean audio', bg: '#cdeab0' },
  { t: 'Hiring editors', bg: '#ddd5ff' },
  { t: 'QC', bg: '#ffffff' },
  { t: 'AI tools', bg: '#f07c3a', fg: '#fff' },
  { t: 'Building PCs', bg: '#c3e6f4' },
  { t: 'Films', bg: '#f6c9de' },
  { t: 'Coffee ☕', bg: '#131313', fg: '#fff' },
  { t: 'Making it look better', bg: '#dcf56a' },
];

export const contact = {
  title: ['Got a video?', 'Let’s ', 'talk.'],
  note: 'Production work goes straight to the team:',
};
