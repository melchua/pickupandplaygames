# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for Pick Up & Play Games and its card game Bananarchy. Next.js 16 App Router (Turbopack), React 19, TypeScript (strict), Tailwind CSS v4. Deployed on Vercel. The one conversion goal is the "Pre-order" button, which sends visitors to the Kickstarter rewards page.

## Commands

```bash
npm run dev        # dev server at http://localhost:3000 (outputs to .next/dev)
npm run build      # production build; typechecks but does NOT lint
npm run start      # serve the production build
npm run lint       # eslint . (flat config in eslint.config.mjs)
npx tsc --noEmit   # typecheck only
```

There is no test runner. `npm run lint` and `npx tsc --noEmit` currently pass clean; keep them that way. Since `next build` no longer lints, run lint explicitly before committing.

Vercel refuses to deploy Next.js versions with known critical vulnerabilities, so a deploy that builds fine but ends in Error with "Vulnerable version of Next.js detected" means bump `next`. Upgrade with `npx @next/codemod@canary upgrade latest`; if it adds `export const instant = false` opt-outs, revert them, since Cache Components are not enabled here.

Task Master task tracking lives in `.taskmaster/` and its CLI reference is in `AGENTS.md` (same content as the old CLAUDE.md). Do not re-run `task-master init`.

## Architecture

### Single source of truth for site facts: `src/lib/site.ts`

Kickstarter/pre-order URLs, price, delivery estimate, player count, funding stat, the YouTube video (id, title, upload date, length), rulebook path, banana values, contact email, social links, nav items, and the four card types with their example card images all live here and are imported by pages and components. Change copy there, not inline. Pages still inline their own long-form copy (team bios in `about`, rules text in `how-to-play`).

### How to Play page (`src/app/how-to-play/`)

This is where the printed rulebook's QR codes land, via the `/rules-qr` redirect in `next.config.ts` (adds `utm_source=rulebook`). It is built for a phone at a table:

- `section-nav.tsx` is a sticky "jump to" bar and exports `SECTIONS`, the ids the page sections use. Sections carry `scroll-mt` so anchors clear the bar.
- `rulebook-notice.tsx` is a client component that reads `useSearchParams` and only renders for `utm_source=rulebook`. It sits inside `Suspense` so the page stays statically prerendered.
- `video-tile.tsx` lazy-loads the YouTube embed on click.
- The FAQ uses native `details`/`summary` and is mirrored in `FAQPage` JSON-LD alongside a `VideoObject`.
- The page sets its own `openGraph`, which replaces the layout's block entirely, so it repeats `siteName`, `url`, and `images`. It also sets a canonical of `/how-to-play` so UTM URLs are not indexed.

### Styling: Tailwind v4, tokens in CSS, not in `tailwind.config.ts`

- Tailwind v4 runs through `@tailwindcss/postcss`. All design tokens (colours, radii, breakpoints, font variables) are declared in `@theme` blocks in `src/app/globals.css`. There is no `tailwind.config.ts` on purpose; add tokens to the CSS. The live banana colour is `#ffc627` (the PRD's `#FFE85D` is outdated).
- Custom utility `bg-rings` (hard-stopped radial banana rings from the style guide) is defined in `globals.css`. Shift its centre with `[--rings-x:78%]` style arbitrary properties on the element.
- The site is **light-only**. A `dark` custom variant exists but only fires on a `.dark` class, never from OS preference.
- Fonts load via `next/font/google` in `layout.tsx`: Londrina Solid as `--font-display` (headlines, `font-display`), Instrument Sans as `--font-body`. Fluid sizing uses `clamp()` in arbitrary values rather than breakpoint classes.

### Component layers

- `src/components/site/` – the current shared primitives: `Container` (1240px max, fluid gutters), `PreorderButton` (the only primary CTA, three sizes), `CtaBanner` (closing section on the rings background). New sections should compose these.
- `src/components/home/` – home page sections in render order: `hero-section`, `reviews`, `game-teaser`, `featured-cards`, `box-contents`.
- `src/components/layout/` – `header` (client, uses `usePathname` for active state; two rows on phones with a horizontally scrolling nav, one row from `md`), `footer`, `cookie-consent` (small corner card; uses `useSyncExternalStore` for its client-only gate because the React hooks lint rule rejects the `setMounted` in `useEffect` pattern).
- `src/components/ui/` – shadcn (new-york style, see `components.json`) `Button` and `Card`. Only the older pages (`privacy`, `not-found`) still use them.

### Server vs client

Pages are Server Components and export `metadata`. Only these are `"use client"`: `layout/header`, `layout/cookie-consent`, `app/contact/page` (form state), `app/how-to-play/video-tile` (lazy YouTube embed on click). Keep new sections server-rendered unless they need state.

### Contact form

`src/app/contact/page.tsx` POSTs JSON to `src/app/api/contact/route.ts`, which sends through Resend to `hello@pickupandplaygames.com`. Requires `RESEND_API_KEY` in `.env` (gitignored). The other keys in `.env` are for Task Master, not the site.

### State

Zustand is used for one thing: `src/store/cookie-consent.ts`, persisted to localStorage with only the consent decision serialised. No analytics are wired up yet; the accept/decline handlers are placeholders.

## Conventions

- Double quotes, semicolons, 2-space indent (Prettier defaults). `.cursor/rules/nextjs-rules.mdc` is a generic template that does not describe this repo: it calls for Standard.js style, CSS modules/Stylus, and Aceternity UI, none of which are used. Follow the existing code, not the Cursor rule.
- `.clinerules/`, `.roo/`, `.windsurf/`, `.trae/`, and `.github/instructions/` are Task Master integration boilerplate for other editors. Nothing project-specific lives there.
- Import alias `@/*` maps to `src/*`.
- Named exports for components, kebab-case file names.
- SEO lives in `layout.tsx` (site-wide metadata with `metadataBase`, OG image `/bananarchy-box-hero.png`) and a JSON-LD `Organization` block in `app/page.tsx` that pulls links from `site.ts`.
- The footer links only to `/privacy`. There is no `/terms` route; do not add a link to one without adding the page.

## Docs

`docs/prd.md` is the original PRD and is out of date (it specifies Fredoka/Poppins, `/games/*` routes, ConvertKit, a launch microsite; none shipped). The current visual reference is `docs/design/bananarchy-style-guide.pdf`. Source artwork is in `docs/assets/`; shipped assets are in `public/`.
