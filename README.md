# Yash B Joshi — Portfolio

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)
![Netlify](https://img.shields.io/badge/Netlify-000000?style=flat&logo=netlify&logoColor=00C7B7)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)

Personal site — backend engineering, workflow orchestration and distributed systems.

**Live:** https://yashbjoshi-portfolio.netlify.app

---

## Build

Static, built with [Astro](https://astro.build). **Zero JavaScript bundles** — the
handful of interactions (scroll reveal, cursor spotlight, the progress rail) are a
few dozen inline lines, so nothing is fetched before the page paints.

Everything third-party is compiled in rather than loaded at runtime: brand icons come
from `simple-icons` at build time, and images are optimised by Astro's own pipeline.
The one external request is the web font.

| | |
|---|---|
| Framework | Astro |
| Styling | Plain CSS with custom properties — no framework |
| Icons | `simple-icons`, inlined as SVG at build time |
| Hosting | Netlify, deployed from `main` |

## Structure

```
src/
  data/site.js        all copy and content — edit this, not the markup
  components/         Nav, Hero, Focus, OpenSource, Work, Stack, Contact,
                      Marquee, Rail, Icon, Glyph, Chip
  layouts/Base.astro  document shell, inline scripts, loader
  styles/global.css   design tokens and shared primitives
```

Content lives in one file on purpose. The previous version of this site went stale
because changing anything meant editing dozens of hand-written markup blocks.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Notes

- Every animation is gated behind `prefers-reduced-motion`, and the cursor spotlight
  is skipped on touch devices.
- The loader is skipped entirely on a deep link (`/#work`) — someone who asked for a
  section should land on it.
- Layout is verified from 360px through 4K.
