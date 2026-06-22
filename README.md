# Shanu Thakur — Portfolio

Minimal single-page developer portfolio built with **Vite + React + Tailwind CSS**.
Dark theme, mobile-first, no carousels or scroll animations.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy (Vercel / Netlify)

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

## Structure

```
src/
  App.jsx                 # composes the page
  data.js                 # profile + projects (edit content here)
  index.css               # Tailwind layers + base theme
  main.jsx                # entry point
  components/
    Header.jsx            # sticky nav
    Hero.jsx              # name, title, CTAs
    Skills.jsx            # tech grid
    Projects.jsx          # project cards
    Contact.jsx           # email + social links
    Footer.jsx
    SectionHeading.jsx    # shared eyebrow + heading
```

## Editing content

Everything you'll want to change (name, title, summary, email, links, projects)
lives in `src/data.js`. Skills are listed in `src/components/Skills.jsx`.

The accent color and palette are in `tailwind.config.js` under `theme.extend.colors`.
