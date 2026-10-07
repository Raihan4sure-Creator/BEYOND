export type Img = {
  name: string;
  widths: number[];
  width: number;
  height: number;
  alt: string;
};

const portrait = [480, 768, 1080, 1536];

export const images = {
  hero: {
    name: 'raihan/hero-silhouette',
    widths: portrait,
    width: 1536,
    height: 1920,
    alt: 'Raihan Ghorami at his workstation in low blue light, looking at the camera',
  },
  about: {
    name: 'raihan/about-portrait',
    widths: portrait,
    width: 1536,
    height: 1920,
    alt: 'Raihan Ghorami in profile at his desk, hands raised, thinking through something on a monitor',
  },
  desk: {
    name: 'raihan/desk-gesture',
    widths: [640, 1024, 1600],
    width: 1600,
    height: 900,
    alt: 'Raihan Ghorami in profile at his desk, working through an edit on a monitor',
  },
  coverWide: {
    name: 'company/cover-wide',
    widths: [960, 1440, 1920],
    width: 1600,
    height: 349,
    alt: 'Raihan Ghorami in front of the Beyond Edits wall, with the Dhaka office on either side',
  },
  coverPortrait: {
    name: 'company/cover-portrait',
    widths: portrait,
    width: 1536,
    height: 1920,
    alt: 'The Beyond Edits office in Dhaka, with the logo on a yellow wall and a mural beside the table',
  },
  slides: [
    'A mirrorless camera with a large lens on a dark desk',
    'Close-up of a PC case’s perforated side panel',
    'A low-profile keyboard in shadow',
    'Detail of a laptop’s ports and vents',
    'A phone and smartwatch on a textured desk',
    'Camera bodies, lenses and a monitor laid out on a table',
    'A Mac mini next to its box on a steel shelf',
  ].map((alt, i) => ({
    name: `slides/slide-0${i + 1}`,
    widths: [480, 900],
    width: 900,
    height: 900,
    alt,
  })),
} satisfies Record<string, Img | Img[]>;
