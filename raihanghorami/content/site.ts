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
  location: 'Dhaka, Bangladesh',
  description:
    'I’m Raihan. I run Beyond Edits, a video editing team in Dhaka. I started as an editor. Now the team does the editing and I make sure it’s right before it goes out.',
  nav: [
    { href: '/about/', label: 'About' },
    { href: '/work/', label: 'Work' },
    { href: '/writing/', label: 'Writing' },
    { href: '/contact/', label: 'Contact' },
  ],
  social: [
    { href: 'https://www.linkedin.com/in/raihan4sure/', label: 'LinkedIn' },
    { href: 'https://x.com/raihan4sure', label: 'X' },
    { href: 'https://www.instagram.com/raihan4sure/', label: 'Instagram' },
    { href: 'https://www.youtube.com/@RaihanK', label: 'YouTube' },
    { href: 'https://github.com/raihan4sure', label: 'GitHub' },
  ],
  elsewhere: [
    { href: 'https://letterboxd.com/raihan4sure/', label: 'Letterboxd' },
    { href: 'https://steamcommunity.com/id/raihan4sure', label: 'Steam' },
  ],
} as const;

export const updated = 'October 2026';

/* ---------------- Home ---------------- */

export const home = {
  eyebrow: 'Founder, Beyond Edits',
  lead: 'I run Beyond Edits, a video editing team in Dhaka. I started as an editor. Now the team does the editing and I make sure it’s right before it goes out.',
  photoCaption: 'At the desk, Dhaka',

  context: {
    label: 'Where it started',
    statement:
      'I learned to edit at 16 because I wanted a YouTube channel. The channel didn’t go anywhere. The editing stuck.',
    body: 'My first clients came from Fiverr. Then there was more work than I could do alone, so I started building a team. We’re 12 people now, working from our office in Dhaka, and I still watch the cuts.',
  },

  work: {
    label: 'Selected work',
    title: 'A few things I’ve worked on.',
    intro: 'Most of what I do now happens through Beyond Edits. Here’s some of it.',
    deskCaption: 'Most days look like this. A cut on one screen, notes on the other.',
  },

  services: {
    label: 'What I do',
    title: 'Where my time goes.',
    items: [
      {
        title: 'Running Beyond Edits',
        body: 'Hiring, training and keeping projects on time. The business side of the work, which I’m still learning.',
        tags: ['Team', 'Quality control', 'Operations'],
      },
      {
        title: 'Creative direction',
        body: 'Before the edit, I work out who’s watching and what they need. In review, I look at pacing, story and the small things that pull attention.',
        tags: ['Story', 'Pacing', 'Retention'],
      },
      {
        title: 'Hiring and training editors',
        body: 'Finding good editors, giving them honest feedback and writing down how we work, so nobody has to guess.',
        tags: ['Training', 'Workflows', 'Standards'],
      },
      {
        title: 'AI and tools',
        body: 'I test AI tools and build small automations for jobs we repeat every week. I keep what saves time and drop the rest.',
        tags: ['AI', 'Automation', 'Internal tools'],
      },
    ],
  },

  company: {
    label: 'The company',
    title: 'Beyond Edits',
    statement:
      'We’re not the cheapest. Anyone can be cheap. When a client uploads a video, our work goes out with their face on it.',
    body: 'So every video gets a proper review before it reaches the client. We’re a team of editors and creatives in Dhaka, editing for people in the US, UK, Australia, New Zealand and the UAE.',
    stats: [
      { k: 'Team', v: '12 people' },
      { k: 'Studio', v: 'Dhaka, BD' },
      { k: 'Company', v: 'UK registered' },
      { k: 'Clients in', v: '5 countries' },
    ],
    formatsLabel: 'What the team edits',
    formats: ['YouTube', 'Short-form', 'Ads', 'VSLs', 'Talking-head', 'Motion graphics', 'Post-production'],
  },

  currently: {
    label: 'Right now',
    title: 'What’s on my desk.',
    items: [
      { k: 'Building', v: 'Beyond Edits. It’s most of my week.' },
      { k: 'Testing', v: 'AI tools that might save the team a few hours.' },
      { k: 'Learning', v: 'How to run a business. Still working on that one.' },
      { k: 'Hiring', v: 'Editors who care about the small stuff.' },
      { k: 'Based in', v: 'Dhaka, Bangladesh. Friday is our weekend.' },
    ],
  },

  notes: {
    label: 'Writing',
    title: 'Notes from running a video team.',
  },

  offClock: {
    label: 'Off the clock',
    title: 'Outside work.',
    lead: 'Computers, films, games and more coffee than I should probably have.',
    body: 'I build PCs, upgrade my setup for no real reason and fix the home network when it breaks. Sometimes I automate something just to see if I can.',
    facts: [
      { k: 'Fuelled by', v: 'Coffee. A lot of it.' },
      { k: 'Hobby', v: 'Making things look better when nobody asked.' },
      { k: 'Watching', v: 'Films and series, usually later than I should.' },
      { k: 'Playing', v: 'Games with friends, when there’s time.' },
    ],
  },
};

export type WorkItem = {
  title: string;
  href?: string;
  body: string;
  role: string;
  tags: string[];
  kind: 'Company' | 'Client work' | 'Internal';
};

export const work: WorkItem[] = [
  {
    title: 'Beyond Edits',
    href: 'https://beyondedits.agency',
    body: 'The video editing team I started and run. I hire the editors, set the standard and check the work before it goes out.',
    role: 'Founder · Creative direction · Hiring',
    tags: ['Company', 'Team', 'Systems'],
    kind: 'Company',
  },
  {
    title: 'Will Barron / Salesman.com',
    href: 'https://salesman.com/',
    body: 'YouTube videos for Will’s sales education channel. The team handles the edit and motion graphics. I look after the creative direction.',
    role: 'Creative direction by me · Edit and motion by the team',
    tags: ['YouTube', 'Motion graphics'],
    kind: 'Client work',
  },
  {
    title: 'Ray White agents',
    href: 'https://www.raywhite.com',
    body: 'Listing videos and social edits for individual Ray White real estate agents.',
    role: 'Editing · Post-production',
    tags: ['Real estate', 'Short-form'],
    kind: 'Client work',
  },
  {
    title: 'AI in the workflow',
    body: 'Small tools and automations for the boring, repeated parts of running a production team. Some work, some don’t.',
    role: 'Internal tools · Ongoing',
    tags: ['AI', 'Automation'],
    kind: 'Internal',
  },
];

/* ---------------- About ---------------- */

export const about = {
  title: 'I started with a YouTube channel. I ended up with a company.',
  lead: 'I was about 16 when I learned to edit, because I wanted a YouTube channel. The channel didn’t last. I kept editing, and my first paying clients came from Fiverr.',
  facts: [
    { k: 'Based in', v: 'Dhaka, Bangladesh' },
    { k: 'Company', v: 'Beyond Edits' },
    { k: 'Into', v: 'Video, business, AI and tech' },
  ],
  storyLabel: 'How I got here',
  story: [
    {
      when: '2020',
      title: 'Started editing',
      body: 'Rough mashup videos that almost nobody watched. I kept going anyway, and at some point people started paying me.',
    },
    {
      when: 'Freelance',
      title: 'One format at a time',
      body: 'Lyric videos, then music videos, 2D animation and YouTube. Lots of repetition. It taught me to finish things and hit deadlines.',
    },
    {
      when: 'Then',
      title: 'More formats, better ideas',
      body: 'Motion graphics, ads, sales videos and a few documentaries. I started caring about the idea behind a video, not just the edit.',
    },
    {
      when: 'Beyond Edits',
      title: 'From one editor to a team',
      body: 'When we were three people, I could just sit next to everyone. That stopped working as we grew, so I had to learn how to hire, train and write things down.',
    },
    {
      when: 'Today',
      title: 'Running the team',
      body: 'We’re 12 people. The team does the editing. I do the creative direction, hiring, training and reviews, and I test AI tools that might save us time.',
    },
    {
      when: 'Next',
      title: 'Where this is going',
      body: 'I want Beyond Edits to be the best video editing company in Bangladesh, and one of the best anywhere. Getting there means getting better at the work and at running the team.',
    },
  ],
  quote: 'I started Beyond Edits because I love editing videos and building stuff. That’s it, nothing fancy.',
  helpLabel: 'Where I’m useful',
  helpTitle: 'From the edit to the team.',
  helpIntro: 'Most of my job now is deciding what a video needs, helping editors get there and keeping production moving.',
  help: [
    {
      title: 'An eye for detail',
      body: 'I notice the small stuff. A cut a few frames late, spacing that’s slightly off, a graphic that steals attention from the person talking.',
    },
    { title: 'Creative direction', body: 'Deciding what stays, what goes and what needs another pass.' },
    { title: 'Content strategy', body: 'Thinking about who’s watching, what they need to get and where they’ll click away.' },
    { title: 'Systems', body: 'Making briefs, reviews and handoffs simple enough that nobody has to guess.' },
    { title: 'Hiring and team building', body: 'Finding editors, reviewing their work and helping them get better. Honest feedback, both ways.' },
    { title: 'Client communication', body: 'When feedback is vague, I ask questions until I know exactly what needs to change.' },
  ],
  toolsLabel: 'Tools',
  toolsTitle: 'What I use day to day.',
  toolsNote: 'Across the team’s production work and my own experiments. The coffee is not optional.',
  tools: ['Premiere Pro', 'After Effects', 'Photoshop', 'AI tools', 'Automation', 'Workstation hardware', 'Coffee'],
  close: 'The team does the editing. I make sure it’s right.',
};

/* ---------------- Work page ---------------- */

export const workPage = {
  title: 'What I’ve been working on.',
  lead: 'Most of my work happens through Beyond Edits now. I’m in the brief, the reviews and the feedback. The team does the edit.',
  groups: [
    { kind: 'Company', label: 'The company', note: 'What takes up most of my day.' },
    { kind: 'Client work', label: 'Client work', note: 'A few projects the team has worked on.' },
    { kind: 'Internal', label: 'Internal', note: 'Things I’m trying inside the team.' },
  ] as const,
  close: 'Planning some videos? Tell me what you’re making.',
};

/* ---------------- Writing ---------------- */

export const writingPage = {
  title: 'Notes from running a video team.',
  lead: 'Things I’ve learned about briefs, feedback and keeping projects moving. Some of it is about AI.',
};

/* ---------------- Contact ---------------- */

export const contact = {
  title: 'Want to work together, or just say hi?',
  lead: 'For video work, email the team. For anything else, email me. I reply to everything, sometimes a day late.',
  emails: [
    { k: 'Me, directly', email: 'Hello@raihanghorami.com', note: 'Business, partnerships, podcasts, or just hello.' },
    { k: 'Video projects', email: 'Raihan@beyondedits.agency', note: 'Goes straight to the Beyond Edits team.' },
  ],
  routes: [
    {
      title: 'Work with Beyond Edits',
      body: 'Tell us what you’re making, how often you need videos and when you want to start. Some footage and a reference help a lot.',
      cta: { href: 'https://beyondedits.agency', label: 'Visit Beyond Edits' },
    },
    {
      title: 'Business and partnerships',
      body: 'Tell me about your company or idea, and where you think we could work together.',
    },
    {
      title: 'Podcasts and speaking',
      body: 'Happy to talk about running a video team from Dhaka, creative direction, or how we use AI in production.',
      cta: { href: '#enquiry', label: 'Send the details' },
    },
    { title: 'Just saying hi', body: 'No agenda needed. Hi is fine.' },
  ],
  form: {
    label: 'Book a call',
    title: 'What’s on your mind?',
    body: 'Fill this in first so I can prepare. Then pick a time on Calendly. Your answers carry over.',
    note: 'Calendly opens next. You’ll pick a time and confirm there.',
    topics: ['Production', 'Business or partnership', 'Podcast or speaking', 'Something else'],
    budgets: ['Under $1,000', '$1,000–$3,000', '$3,000–$5,000', '$5,000+'],
  },
  based: {
    label: 'Based in',
    title: 'Dhaka, Bangladesh',
    body: 'I work with people in the US, UK, Australia, New Zealand and the UAE, so time zones are part of the job. We work Saturday to Thursday. Friday is our weekend.',
  },
};

/* ---------------- Footer ---------------- */

export const footer = {
  title: 'Got a video project, or just want to say hi?',
  body: 'Tell me what you’re working on. A few lines is enough to start.',
};
