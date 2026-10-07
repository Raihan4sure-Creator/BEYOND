# raihanghorami.com

Raihan Ghorami's one-page site. It's built with Next.js 15 as a static export and hosted on Hostinger.

## Edit the words

- `content/site.ts`: hero, stats, client results, process steps, about, pills and contact
- `content/media.ts`: the cut-out photo and the client quotes
- `content/posts.ts`: the one article, linked from About

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site in out/
npm run preview   # serve out/ on http://localhost:4173
```

## Deploy to Hostinger

`npm run build`, then upload the files in `out/` over the existing ones in `public_html`, one at a time. Use the Hostinger API: `POST /api/hosting/v1/files/upload-urls`, then a TUS upload per file with `?override=true`. Upload `_next/` first and the `.html` files last.

Don't use the archive deploy (`POST …/websites/{domain}/deploy`), and don't wipe `public_html`. The server holds things that aren't in this repo:

- `api/newsletter.php` and `.newsletter-private/`: the newsletter endpoint and its private config
- `.htaccess`: HTTPS, caching, the 404 page, and redirects from the old `/about`, `/work`, `/contact`, `/writing` and `/notes` pages
- `images/`: the original photos from the previous site
