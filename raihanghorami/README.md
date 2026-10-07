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

`npm run build`, then upload the contents of `out/` to the site's `public_html`. Upload over the existing files rather than wiping the folder, so anything else on the server stays put (e.g. a newsletter endpoint).

`deploy/htaccess` has an optional `.htaccess` that serves the custom 404 page and caches static assets for a long time. Check the existing `public_html/.htaccess` before replacing it.

## Behaviour carried over from the old site

- Enquiry form on `/contact/` sends topic, budget and details to Calendly (`calendly.com/raihan4sure/new-meeting`) as the `a1` prefill.
- Same URLs (with trailing slashes), so existing links and search results keep working.
- Same structured data (Person, Organization, WebSite) plus BlogPosting on notes.
- No analytics or tracking cookies, as the privacy page says.
