# Base44 → Cloudflare Pages Migration Report — GreyPath Glass & Aluminium Works

## Summary

Same shape as Buffalo Hardware Center / real-hardware / ngenaz-builders: a static Vite/React
services site wrapped in a dead Base44 auth check, with only the built-in `User` entity defined
(never wired to anything) and no live product/data entities. No live-data risk.

## Audit findings

- 7 routes: Home, Services, Residential, Commercial, Projects, About, Contact — `App.jsx`.
- `AuthContext` wrapped the whole app behind `base44.app.getPublicSettings()`, blocking rendering
  on a spinner. **Removed.**
- The five auth pages (Login, Register, ForgotPassword, ResetPassword, OAuthConsent) plus
  `AuthLayout`, `UserNotRegisteredError`, `ProtectedRoute`, `GoogleIcon` (only used by the removed
  Login page) were never routed / became orphaned. **Removed.**
- `QuoteForm.jsx`, `PhoneHubs.jsx`, `ProcessSteps.jsx`, `ServiceCard.jsx`, `GalleryGrid.jsx`,
  `SectorPortal.jsx` — no Base44 references in any of them; purely presentational/form components.
- Images referenced via `src/lib/images.js` and the `image.jsx`/`responsive-image.jsx` helper
  components point at `media.base44.com` by plain URL string — same CDN-dependency pattern as
  every other migrated site.

## Changes made

**Removed:**
- `@base44/sdk`, `@base44/vite-plugin`, `nitro` from `package.json`
- Base44 plugin from `vite.config.js`
- `base44/` platform-config directory
- `src/api/base44Client.js`, `AuthContext.jsx`, `app-params.js`, `authReturnTo.js`
- 5 unused auth pages + `AuthLayout.jsx`, `UserNotRegisteredError.jsx`, `ProtectedRoute.jsx`,
  `GoogleIcon.jsx`
- Stale `package-lock.json`, `.env.local`, `.git`

**Rewrote:**
- `vite.config.js` — dropped the Base44 plugin, added an explicit `@` → `src` alias.
- `App.jsx` — dropped the `AuthProvider`/`AuthenticatedApp` wrapper; the 7 routes render directly.
- `PageNotFound.jsx` — dropped the `base44.auth.me()` admin-role lookup and its note block.
- `.gitignore` / `.npmrc` — dropped Base44-specific lines.
- `index.html` — removed the Base44-logo favicon link and the `manifest.json` link (pointed at a
  file absent from this export).
- `package.json` — renamed from the placeholder `"base44-app"` to `"greypath-glass-aluminium"`,
  and added a `jiti` override (`"overrides": {"jiti": "1.21.7"}`) up front — a known `npm ci`
  lockfile-sync failure on Cloudflare Pages for this template family (see prior fixes on
  `tiffanys-closet` and `dressed-by-priv`).
- `README.md` / `AGENTS.md` — rewritten for the plain static-site workflow, no Base44 CLI.

**Left intentionally:**
- `src/components/ui/image.jsx`, `responsive-image.jsx`, `use-responsive-image.jsx`,
  `image-helpers.js`, `src/lib/images.js` — pure URL/string handling against `media.base44.com`,
  no SDK call, nothing that breaks without Base44's app backend. If that CDN is ever taken down,
  these image URLs will need to be re-hosted.

## Verification

Unlike earlier migrations in this conversation, this sandbox had network access to npm's
registry, so this one was actually installed and built rather than only statically checked:
- `npm install` — completed cleanly, no Base44 packages, no lockfile conflicts.
- `npm run build` — succeeded with **zero errors and zero warnings** (cleaner than most of the
  other migrated sites, which typically carry one harmless Tailwind class-ambiguity warning).
- Full-tree grep for remaining `base44` references — only the CDN-URL handling described above.

## Deploy — Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` |

No environment variables required.
