# Product Requirements Document (PRD) – Pickup & Play Games Website

## 1. Purpose

Build the official web presence for **Pickup & Play Games**, showcasing the studio, its flagship game **Bananarchy**, and future titles.  
The site must educate visitors, capture emails, and funnel interested players to the dedicated launch microsite at **https://bananarchylaunch.pickupandplaygames.com** (which in turn links to Kickstarter).

## 2. Goals & KPIs

- Collect **5 000+** emails company-wide before Bananarchy Kickstarter day-one
- Deliver **≥ 40 %** click-through from the Bananarchy page to the launch microsite during launch week
- Achieve Lighthouse performance **≥ 90** on mobile & desktop

## 3. Target Audience

| Segment                      | Motivation                            | Example Games They Love                        |
| ---------------------------- | ------------------------------------- | ---------------------------------------------- |
| Casual party gamers (18-35)  | Quick, funny, social experiences      | Exploding Kittens, UNO, Cards Against Humanity |
| Kickstarter backers          | Early access, exclusive rewards       | Throw Throw Burrito, Here to Slay              |
| Content creators / reviewers | Unique, entertaining tabletop content | Dice Tower, Shut Up & Sit Down                 |

## 4. Brand & Visual Style

- **Studio tone**: playful, mischievous, approachable
- **Palette**: `#FFE85D` (banana), `#000000` (ink), `#F45B69` (hot-pink accent) plus neutral grays for corporate pages
- **Typography**: "Fredoka" (display), "Poppins" (body)
- Component tokens defined in `docs/design/design_system_profile.json`

## 5. Information Architecture & Key Pages

| ID  | Route               | Purpose                                                            | CTA                                        |
| --- | ------------------- | ------------------------------------------------------------------ | ------------------------------------------ |
| P0  | `/` (Home)          | Introduce Pickup & Play Games, teaser for current & upcoming games | "Explore Bananarchy" ➝ `/games/bananarchy` |
| P1  | `/about`            | Founders story, press kit download                                 | "Contact Us"                               |
| P2  | `/games`            | List of games (grid). Initially only Bananarchy card               | "View Game"                                |
| P3  | `/games/bananarchy` | Dedicated Bananarchy page (detailed below)                         | "Back on Kickstarter" ➝ launch microsite   |
| P4  | `/contact`          | Simple form, ConvertKit email capture                              | "Send"                                     |
| P5  | `/404`              | Fun banana-peel slip animation                                     | —                                          |

### 5.1 Bananarchy Game Page Details

1. **Hero** – chaotic banana artwork with overlay text:
   > Snatch, Stash, Snack & Smash your way to victory in this fast-paced, mischievous party game.
2. **Gameplay Overview** – four animated cards (Snatch, Stash, Snack, Smash).
3. **How-to-Play Video** – embedded YouTube/Vimeo ≤ 3 min.
4. **What's in the Box** – component mock-ups (`docs/assets/*.jpeg`).
5. **Social Proof** – testimonials, press quotes, Instagram slider.
6. **Primary CTA Banner** – "Back on Kickstarter" button linking **bananarchylaunch.pickupandplaygames.com** (opens new tab).
7. **Secondary CTA** – email opt-in (for late pledges & future games).

## 6. Functional Requirements

- Responsive (mobile-first, 375-1440 px)
- WCAG 2.1 AA accessibility
- Server-side rendered metadata & JSON-LD per page
- Email forms ⇒ **ConvertKit** REST API
- GDPR cookie consent banner (Zustand state)
- Plausible analytics + Vercel Web Vitals

## 7. Non-Functional Requirements

- Lighthouse score ≥ 90 (mobile & desktop)
- JS bundle ≤ 300 kB after tree-shaking
- Vercel preview deployments on every PR

## 8. Tech Stack & Conventions

| Area       | Choice                          | Notes                               |
| ---------- | ------------------------------- | ----------------------------------- |
| Framework  | Next.js 14 (App Router)         | Prefers React Server Components     |
| Language   | TypeScript                      | Standard.js style (workspace rules) |
| UI         | TailwindCSS + Shadcn UI         | Aceternity for motion/animations    |
| State      | **Zustand**                     | Cookie consent, modal handling      |
| URL Params | **nuqs**                        | e.g., `?ref=` tracking              |
| Testing    | Jest + React Testing Library    | ≥ 90 % component coverage           |
| Linting    | ESLint + Prettier (Standard.js) | Already configured                  |

## 9. User Stories (MVP)

1. **Visitor** → I land on the home page and instantly understand what the company does.
2. **Player** → I can deep-dive into Bananarchy and watch a < 3 min video to learn how to play.
3. **Potential Backer** → From the Bananarchy page I can click one button to reach the launch microsite and pledge.
4. **Media** → I can download press assets from the About page.
5. **Fan** → I can join the email list for updates on this and future games.

## 10. Milestones & Estimates

| ID  | Description                          | Owner        | ETA    |
| --- | ------------------------------------ | ------------ | ------ |
| M0  | Repo init, CI/CD, Tailwind setup     | Dev          | Day 1  |
| M1  | Design tokens & global styles        | Design + Dev | Day 3  |
| M2  | Core pages (Home, About, Contact)    | Dev          | Day 5  |
| M3  | Games list + layout                  | Dev          | Day 6  |
| M4  | Bananarchy game page                 | Dev          | Day 8  |
| M5  | Integrations (ConvertKit, Plausible) | Dev          | Day 9  |
| M6  | Polishing, a11y, testing, SEO        | Dev          | Day 10 |

## 11. Out of Scope (Phase 2+)

- Multi-language localization
- E-commerce checkout (post-Kickstarter retail)
- Additional game pages until new titles are announced

## 12. Assets Inventory

- Images: `docs/assets/*.jpeg`
- Inspiration: `docs/inspiration/*`
- Design tokens: `docs/design/design_system_profile.json`
- Fonts: Google Fonts – Fredoka, Poppins
- Temporary logo: `/public/file.svg`

## 13. Acceptance Criteria

- All pages render correctly on latest Chrome, Safari, Firefox, Edge
- Home ➝ Bananarchy ➝ Launch flow < 3 clicks
- Lighthouse, a11y, SEO targets met
- CI passes unit + integration tests
- Email capture returns success/error states

## 14. Open Questions

- Final card art delivery date?
- Press pack finalization date?
- Kickstarter slug confirmed before site launch?

## 15. Appendix

- Figma link to mock-ups (TBD)
- Brand guidelines PDF (`docs/design/bananarchy-style-guide.pdf`)
