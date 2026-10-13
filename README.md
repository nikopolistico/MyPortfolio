# Niko Polistico — Portfolio (React)

One-page portfolio. React 19 + Vite + TypeScript + Tailwind 4 + shadcn/ui + Framer Motion + lucide-react.

## Install and run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build -> dist/
npm run preview   # serve dist/ locally
```

## Edit content

Everything is in **`src/data/portfolio.ts`**: profile, education, achievements, certificates, tools, projects, experience. Lines marked `TODO` are placeholders.

| What | Where |
| --- | --- |
| Photo | put `me.jpg` in `public/`, set `profile.photo: '/me.jpg'` |
| CV | put `cv.pdf` in `public/` |
| Social preview | add `public/og.png` (1200×630); edit meta in `index.html` |
| Accent / glow strength | CSS variables at top of `src/index.css` |
| Contact form backend | `FORM_ENDPOINT` in `src/components/sections/Contact.tsx` (Formspree etc.). Empty = opens visitor's email app |

Counters in Achievements are derived: years from `profile.yearsStarted`, projects and certificates from array lengths.

## Effects

| Effect | File |
| --- | --- |
| Cursor spotlight + lit dot grid (disabled on touch) | `src/components/effects/CursorGlow.tsx` |
| Card border glow that tracks cursor | `src/components/effects/GlowCard.tsx` |
| Fade/slide-up reveal, staggered | `src/components/effects/Reveal.tsx` |
| Scroll progress bar | `src/components/effects/ScrollProgress.tsx` |
| Animated counters | `src/components/effects/Counter.tsx` |
| Hero aurora blobs | `Hero.tsx` + keyframes in `index.css` |

Reduced motion is respected: Framer `MotionConfig reducedMotion="user"`, cursor effects off, aurora paused.

## Deploy

**Vercel / Netlify** — import the repo. Build `npm run build`, output `dist`.

**GitHub Pages** — project sites live under `/<repo>/`:

```bash
VITE_BASE=/<repo-name>/ npm run build
```

Publish `dist/` (e.g. `actions/upload-pages-artifact` + `actions/deploy-pages`).
