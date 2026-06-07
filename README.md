# The Holocaust — English Project

A single-page website on the Holocaust for a school English project.
Built with Vite + React + TypeScript + Tailwind CSS + Framer Motion.

**Presenters:** Aayaan Sultan · Nairit · Oushnik · Abhradeep

---

## Running the project

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → opens at http://localhost:5173

# Build for production / offline use
npm run build
# → output goes to dist/

# Preview the production build
npm run preview
# → serves dist/ at http://localhost:4173
```

The built `dist/` folder is fully static — open `dist/index.html` directly in a
browser, or serve it from any static host or USB drive for offline presentation.
No server required after building.

---

## Adding images

All image slots currently show labelled placeholders. To add a real image:

1. Download the image from the source listed in `IMAGES.md`.
2. Place it in `public/images/` (create the folder if needed).
3. In `src/components/ImagePlaceholder.tsx`, replace the placeholder `<div>`
   with an `<img>` tag pointing to `/images/your-file.jpg`, keeping the `alt`.

See `IMAGES.md` for per-slot source recommendations and attribution captions.

---

## Project structure

```
src/
  data.ts                     ← all content: timeline entries, people
  App.tsx                     ← page assembly
  index.css                   ← CSS custom properties (tokens) + Tailwind
  components/
    HeroSection.tsx
    DescriptionSection.tsx
    TimelineSection.tsx         ← vertical timeline with scroll-reveal
    PeopleSection.tsx           ← tabbed people section
    ClosingSection.tsx
    Footer.tsx
    ScrollReveal.tsx            ← Framer Motion scroll-reveal wrapper
    ImagePlaceholder.tsx        ← image placeholder component
    ui/
      tabs.tsx                  ← Radix UI Tabs, restyled to design tokens
      dialog.tsx                ← Radix UI Dialog, restyled to design tokens
```

---

## Design notes

**Register:** `literary` + `depth`. Designed to feel like a quiet, candlelit
memorial edition of a book — not a digital slideshow.

**Type pairing:**
- *Cormorant Garamond* (display) — section and hero headings. Thin, elegant
  serifs carry gravitas without drama.
- *Lora* (body) — all reading text. Reading-optimised serif for long passages.
- *DM Sans* (UI) — dates, labels, captions, navigation.

**Color strategy:** Single-accent committed dark. Warm near-black backgrounds
(candlelight hue). Single oxblood accent (`oklch(42% 0.10 20)`) on the timeline
spine, active states, and section labels only. No gradients, no glassmorphism.

**Motion:** Framer Motion with `useReducedMotion` checks throughout. Timeline
cards reveal on scroll with a directional fade. Hero elements stagger in on load.
Nothing bounces, nothing loops.

**Accessibility:** Semantic HTML (`main`, `section`, `article`, `figure`,
`footer`). `alt` text on every image. 44×44px minimum touch targets. Focus
states use the oxblood accent.
