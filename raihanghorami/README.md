# raihanghorami.com

Personal site for Raihan Ghorami. Next.js 15 (App Router) exported as a static site and hosted on Hostinger.

## Edit the words

All copy lives in two files:

- `content/site.ts`: every page (home, about, work, contact, footer)
- `content/posts.ts`: writing. Add a post by adding an object to the `posts` array.

Images are in `public/images/` (AVIF, WebP and JPG at several widths). `content/images.ts` lists them with alt text.

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site in out/
npm run preview   # serve out/ on http://localhost:4173
```

## Deploy to Hostinger

`npm run build`, then upload the files in `out/` over the existing ones in `public_html`, one by one (Hostinger API: `POST /api/hosting/v1/files/upload-urls`, then a TUS upload per file with `?override=true`). Upload `_next/` first and the `.html` files last.

Don't use the archive deploy (`POST …/websites/{domain}/deploy`) or wipe `public_html`. The server holds things that aren't in this repo:

- `api/newsletter.php` and `.newsletter-private/` (newsletter endpoint and its private config)
- `.htaccess` (HTTPS, caching, the `/notes` → `/writing/` redirect, the 404 page)
- `images/`: the original full-quality photos. The copies in `public/images/` were pulled through the CDN and are recompressed, so skip `images/` when uploading unless you're adding new ones.

`deploy/htaccess` is a reference only. The live `.htaccess` already covers it.

## Behaviour carried over from the old site

- Enquiry form on `/contact/` sends topic, budget and details to Calendly (`calendly.com/raihan4sure/new-meeting`) as the `a1` prefill.
- Same URLs (with trailing slashes), so existing links and search results keep working.
- Same structured data (Person, Organization, WebSite) plus BlogPosting on notes.
- No analytics or tracking cookies, as the privacy page says.
