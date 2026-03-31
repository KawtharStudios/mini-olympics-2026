# Mini Olympics (React + Node)

Responsive, poster-inspired landing page with a placeholder info section and a `/forms` route.

## Run (development)

```bash
npm run dev
```

Open the app at `http://localhost:5173/`.

## Build + serve (production)

```bash
npm run build
npm start
```

Open the app at `http://localhost:3000/` (Express serves the built static files with SPA fallback).

## Routes

- `/` Landing page (includes the `Register` CTA)
- `/forms` Placeholder forms page

## Deploy on Render (Static Site)

Render static sites host only the built frontend (no Node/Express runtime), so you should deploy the Vite build output and configure a rewrite rule for React Router.

1. Create a new `Static Site` in the Render dashboard.
2. Set:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. In the `Redirects/Rewrites` tab, add a rewrite rule:
   - Source Path: `/*`
   - Destination Path: `/index.html`
   - Action: `Rewrite`

This makes sure direct navigation to `/forms` serves the SPA entrypoint (`index.html`), so the client-side router can render the correct page.

Docs:
- https://docs.render.com/docs/static-sites
- https://render.com/docs/redirects-rewrites
- https://render.com/docs/deploy-create-react-app

