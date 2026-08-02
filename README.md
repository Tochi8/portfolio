# Portfolio

Production-ready Next.js implementation of the approved portfolio design and product architecture.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Self-hosted variable fonts (Space Grotesk + Inter) via `next/font/local` — no external font requests at build or runtime

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

The project builds cleanly with no errors (`npm run build` was verified during implementation).

## Replace before launch

A few pieces are placeholders and need real assets/copy before this goes live:

- `public/images/portrait.jpg` — hero portrait (currently a placeholder)
- `public/images/about-portrait.jpg` — About section portrait
- `public/images/project-polly.jpg`, `project-archiva.jpg`, `project-peakfit.jpg` — project preview images
- `public/resume.pdf` — linked from the nav and Contact section, not yet included
- Social links in `components/layout/Footer.tsx` and `components/sections/Contact.tsx` (GitHub/LinkedIn/X currently point to placeholder URLs)
- Email address in `components/sections/Contact.tsx`
- Project descriptions/links in `components/sections/FeaturedProjects.tsx`

These are marked as **Open Questions** in the spec (final copy, project metrics, SEO/OG assets) — everything else (layout, color, type, spacing, motion, component structure) is implemented exactly as specified and was not altered.

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Base styles, focus states, reduced-motion, reveal utility
components/
  ui/                Button, PillButton, Container, Section, Divider, Heading, Card, Badge, Reveal
  layout/            Navbar, Footer
  sections/          Hero, ValueProposition, FeaturedProjects, Skills,
                      EngineeringPhilosophy, About, Timeline, Contact
```

## Notes on implementation choices (not covered by spec)

- Skills section uses three groups (Frontend / Backend / Infrastructure) since the spec described the first two explicitly and said "much stronger" grouped format generally — a third group was added for infrastructure/tooling to round out the section without resorting to a logo grid.
- Timeline milestones and About/contact copy are placeholder content matching the tone requested ("professional, not biography overload") — swap in real history and metrics.
- Scroll reveal is implemented with a lightweight `IntersectionObserver` component (`Reveal`) rather than a library, keeping bundle size minimal and respecting `prefers-reduced-motion`.
