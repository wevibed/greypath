# AGENTS.md

## Project Context

This is the GreyPath Glass & Aluminium Works marketing site — a static Vite + React app deployed
on Cloudflare Pages. It was migrated off the Base44 platform (Base44 SDK, auth, and build plugin
removed); treat it as plain, user-owned application code and preserve existing conventions.

Start with `README.md` for local setup and deploy instructions.

## Key Files

- `src/pages/`: Home, Services, Residential, Commercial, Projects, About, Contact.
- `src/components/home/`: homepage-specific sections (HomeHero, SectorPortal, GalleryPreview).
- `src/components/QuoteForm.jsx`: the enquiry form.
- `src/lib/images.js`: image URL constants used across the site.
- `vite.config.js`: plain Vite + React config with an explicit `@` → `src` alias.

## Working Notes

- `npm run dev` / `npm run build` are the only commands needed — no CLI, no local backend, no auth.
- There is no live database or API behind this site.
- Images are hosted on Base44's CDN (`media.base44.com`), referenced by URL only — no SDK call. If
  that CDN ever goes away, re-host the images and update the URLs in `src/lib/images.js`.
