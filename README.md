# Shiane Haidery Events (React + Node)

Responsive landing page for **Mini Olympics** and **Ping Pong & Foosball**, with event-specific registration placeholders.

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

- `/` Landing page (two events, two CTAs each: register opens Google Forms + payment/deadline)
- `/forms/mini-olympics` redirects to the [Mini Olympics Google Form](https://docs.google.com/forms/d/e/1FAIpQLSc-iPCXAJxtjUUL57VKBQMHEGqZIao8qcaLSgLzby3XC4RB8A/viewform)
- `/forms/ping-pong-foosball` redirects to the [Ping Pong & Foosball Google Form](https://docs.google.com/forms/d/e/1FAIpQLSer1udq4tpmy6_3b0pDQ1QefoNQxLSO-5NRCmlf5FycJSB-hQ/viewform)
- `/forms` redirects to `/`

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

This makes sure direct navigation to nested paths (e.g. `/forms/mini-olympics`) serves the SPA entrypoint (`index.html`), so the client-side router can render the correct page.

Docs:
- https://docs.render.com/docs/static-sites
- https://render.com/docs/redirects-rewrites
- https://render.com/docs/deploy-create-react-app

