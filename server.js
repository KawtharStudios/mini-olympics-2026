const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));

// SPA fallback: serve index.html for any unknown route (e.g. /forms).
// Express 5's router is strict about wildcard route patterns; `app.get("*")` can crash.
// Using a middleware fallback keeps static assets behavior intact (static middleware runs first).
app.use((req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Mini Olympics server running on http://localhost:${port}`);
});

