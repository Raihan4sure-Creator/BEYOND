import type { Shot } from '@/components/PhotoStack';

/** Nav avatar: headshot in the black jacket on blue. The tab icons are cut from the same photo. */
export const avatar = '/images/raihan/raihan-headshot.webp';

/** Hello pill: his lit side profile against the monitor, so it differs from the nav photo. */
export const profile = '/images/raihan/raihan-profile.webp';

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
