import type { Img } from '@/content/images';

type Props = {
  img: Img;
  sizes: string;
  priority?: boolean;
  /** Swap to a different crop below this width (art direction). */
  mobile?: { img: Img; maxWidth: number; sizes: string };
};

const set = (img: Img, ext: string) => img.widths.map((w) => `/images/${img.name}-${w}.${ext} ${w}w`).join(', ');

export function Picture({ img, sizes, priority, mobile }: Props) {
  const fallback = `/images/${img.name}-${img.widths[Math.min(1, img.widths.length - 1)]}.jpg`;
  const media = mobile ? `(max-width: ${mobile.maxWidth}px)` : undefined;

  return (
    <picture>
      {mobile &&
        ['avif', 'webp', 'jpg'].map((ext) => (
          <source
            key={`m-${ext}`}
            media={media}
            type={`image/${ext === 'jpg' ? 'jpeg' : ext}`}
            srcSet={set(mobile.img, ext)}
            sizes={mobile.sizes}
          />
        ))}
      <source type="image/avif" srcSet={set(img, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set(img, 'webp')} sizes={sizes} />
      <img
        src={fallback}
        srcSet={set(img, 'jpg')}
        sizes={sizes}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
      />
    </picture>
  );
}
