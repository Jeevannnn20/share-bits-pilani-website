# ShARE BITS Pilani website

Vite + React + TypeScript + Tailwind CSS v4, with shadcn-style components built on Radix.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Pages
Home · About · Services · Our Work (+ /work/:slug case studies) · Team · Join ShARE · Work with us (/contact)

## Where to edit
All copy, stats, clients, case studies, team and FAQs live in `src/data/content.ts`.
Brand tokens (colours, fonts, radii) live in `src/index.css` under `@theme`.

## Before launch
- [ ] Team page: replace placeholder leadership entries with real names, photos and LinkedIn URLs.
- [ ] Contact form: right now it opens a pre-filled email. Connect it to Formspree, Google Forms or a serverless endpoint (`src/pages/contact.tsx`).
- [ ] Confirm the stats (8+ years, 15+ orgs, 70+ consultants, ₹200K+, 1.11%, 80+ alumni) are still current.
- [ ] Add the recruitment timeline dates for the next cycle and an application link (`src/pages/join.tsx`).
- [ ] Add founder testimonials if any clients agree to be quoted.
- [ ] Hosting: for Vercel/Netlify, add an SPA fallback so deep links like /work/vayana load.


## v2 redesign notes

- Pages: Home, Approach, Work (+ case pages), Alumni, BITS Pilani, About, Join, Contact. Old `/services` and `/team` URLs redirect.
- Design: gertix.studio-style framework (thin uppercase display type, mono body, hairline grids with crosshairs, square buttons, pill tags) in ShARE colours.
- Isometric drawings: `src/components/site/iso.tsx` (kit) and `scenes.tsx`. Wireframes: `wireframes.tsx`.
- Alumni: `src/data/alumni.ts`, built from the alumni tracker. Public fields only, no emails or phone numbers. Where the two sheets disagreed, the "ShARE" sheet's company was used.
- Company logos: `public/logos`, fetched with `scripts/fetch-logos.sh`. Missing logos (IFS, Synergy, IIMB, InCred, ARB) fall back to initials.
- BITS facts: `src/data/bits.ts`, compiled from public sources. Verify before launch.
- Still to confirm: core team roles, Christo and Isha's full profiles, recruitment dates.


## v3 redesign notes

- Design follows rikoutaku.work: opening loader with a counter, light layout, very large Inter headlines that rise out of a mask, pill header (logo, "Work with us", "Menu"), rounded project cards, a pinned "question to decision" scroll section, and a closing invitation in the footer.
- Colours sampled from the logo files: green #03C883, charcoal #2F2D2E, grey #ACACAC, plus the deck's cream #FDF4EE.
- Wordmark: Open Sans ExtraBold ("ShARE") and Montserrat ExtraBold ("BITS PILANI"), matched by eye to the logo.
- Isometric drawings removed. Smooth scrolling uses `lenis`. Loader: `src/components/site/loader.tsx` (once per browser session).
- Projects (7): Vayana, Farcast Biosciences, Agnikul Cosmos, Milaap, String Bio, GPLAN, Raptee.HV. Farcast copy is a high-level summary of a PRD marked confidential: get Farcast's approval before publicising. The tree-count figures are attributed to the Agnikul pilot on the basis of the orientation deck.


## v4 changes

- Tabs: Work, Network, Alumni, BITS Pilani, Join, in a floating glass bar. Approach is now a section on the home page (`/#approach`); About became Network.
- Network page: ShARE the organisation, Tony Blair quote with photo, an interactive India map of the 22 chapters (`src/components/site/india-map.tsx`, outline in `src/data/india-map.ts`), then the BITS chapter and core team.
- Photos in `public/photos`: Tony Blair (U.S. Department of State, public domain) and the BITS clock tower (Vinwe, CC BY-SA 3.0), both from Wikimedia Commons. Keep the credits on the pages.
- India outline: Survey of India boundary via Datameet (CC BY 4.0).
- Team photos are still initials. Add files under `public/photos/team/` and swap the avatar in `src/pages/network.tsx`.
