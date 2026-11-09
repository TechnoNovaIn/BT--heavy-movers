# BMS-PL Website — Vite + React

This is the Next.js (pages router) site converted to a plain **Vite + React** SPA.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## What changed from the Next.js version

- **Routing**: Next's file-based `pages/` router is replaced with
  [`react-router-dom`](https://reactrouter.com/). Routes now live in one place,
  `src/App.jsx`:
  - `/` → `src/pages/HomePage.jsx`
  - `/careers` → `src/pages/CareersPage.jsx`
  - `/careers/:slug` → `src/pages/CareerRolePage.jsx`
- **Data fetching**: `getStaticProps` / `getStaticPaths` are gone — `siteData.js`
  was already a static JS object, so `CareerRolePage` just looks the role up
  from the URL param (`useParams`) on the client instead.
- **`next/head`**: replaced with a tiny local `src/components/PageMeta.jsx`
  that sets `document.title` and the meta-description tag on mount.
- **`next/link`**: replaced with `react-router-dom`'s `<Link>` in
  `CareersList.jsx` / `CareersDetail.jsx`. Regular in-page anchors (`<a href="#about">`)
  were already plain `<a>` tags and needed no change.
- **`next/document` / `_app.js`**: the fonts/meta tags from `_document.js` moved
  into `index.html`; the global CSS imports from `_app.js` moved into `src/main.jsx`.
- **File extensions**: component files were renamed `.js` → `.jsx` (Vite's
  default esbuild pipeline only applies the JSX transform to `.jsx`/`.tsx`
  files). Imports didn't need updating since Vite resolves the extension
  automatically.
- **Images/video**: everything in `public/` (images, `aboutpage_video.mp4`)
  was moved as-is — Vite serves `public/` at the site root exactly like
  Next.js did, so all `/images/...` paths in `siteData.js` and components
  work unchanged.
- Dropped: `next.config.js`, `pages/_app.js`, `pages/_document.js`, and the
  unused `components/Home/sections/temp.js` / `temp.css` (they weren't
  imported anywhere in the original app).

Everything else — all section components, all CSS, all content in
`src/data/siteData.js` — is unchanged from the original.
