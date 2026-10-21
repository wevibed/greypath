# GreyPath Glass & Aluminium Works

Marketing site for GreyPath Glass & Aluminium Works — glass and aluminium fabrication and
installation for residential and commercial clients, Zimbabwe.

Static Vite + React site. No backend, no auth. Pages: Home, Services, Residential, Commercial,
Projects, About, Contact. Quote enquiries go through `QuoteForm.jsx`.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy — Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` |

No environment variables are required.

## Notes

- Images are served from Base44's media CDN (`media.base44.com`, referenced via `src/lib/images.js`
  and the image helper components) — a leftover external dependency from the original build
  platform, not something this repo controls. If that CDN is ever taken down, these image URLs
  will need to be re-hosted (e.g. to Cloudflare R2/Images).
- `QuoteForm.jsx` is the enquiry form — check how it submits (WhatsApp link, mailto, or a real
  endpoint) before treating it as live.
