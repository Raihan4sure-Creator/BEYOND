import type { Shot } from '@/components/PhotoStack';

/** Round avatar (nav + hello pill): face crop from "Raihan silhouette at lit workstation". */
export const avatar = '/images/raihan/raihan-avatar.webp';

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
