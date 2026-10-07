import type { Shot } from '@/components/PhotoStack';

/** Round avatar (nav + hello pill): headshot in the black jacket on blue. The tab icons are cut from the same photo. */
export const avatar = '/images/raihan/raihan-headshot.webp';

/** Photo "takes" in About, front first. From Raihan's Photos (used on the original site). */
export const shots: Shot[] = [
  {
    src: '/images/raihan/take-01.webp',
    alt: 'Raihan Ghorami at his workstation in low blue light, looking at the camera',
    pos: '55% 30%',
  },
  {
    src: '/images/raihan/take-02.webp',
    alt: 'Raihan Ghorami in profile at his desk, hands raised, thinking through an edit',
    pos: '50% 40%',
  },
];
