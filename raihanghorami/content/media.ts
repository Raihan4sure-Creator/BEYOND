export type Clip = {
  src: string;
  poster: string;
  title: string;
  meta: string;
  ratio: string;
  span: string; // grid-column span class
};

/** Filled from the Beyond Edits clips (public on beyondedits.agency). */
export const clips: Clip[] = [];

/** Cut-out portrait (transparent WebP). Empty string = use the framed photo instead. */
export const cutout = { src: '', width: 0, height: 0 };

export type Review = { text: string; by: string };
/** Client messages sent on Upwork, quoted without names (private messages, so no names or companies). */
export const reviews: Review[] = [
  {
    text: 'Fantastic work again on the first video. Looking forward to continuing to work with you.',
    by: 'VP of Operations, US HR company · YouTube series',
  },
  {
    text: 'Overall great job and I think you got our vibe… you set the bar high! Really sleek!',
    by: 'Software company · Paid social ads',
  },
  {
    text: 'You do a great job of addressing the comments I share, so thank you for being on point always.',
    by: 'Brand owner · Promo videos',
  },
];
