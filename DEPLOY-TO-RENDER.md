# Ashish Bisariya Portfolio — Render Deployment

This is the **Ashish Bisariya Portfolio** website, built with Vite + React + TypeScript and prepared for deployment on Render as a Static Site.

## Render settings

- **Service type:** Static Site
- **Service name:** `ashish-bisariya-portfolio`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

A `render.yaml` file is included with these settings.

## Deploy from GitHub

1. Push this project to a GitHub repository.
2. In Render, create a new **Static Site**.
3. Connect the GitHub repository.
4. Use the settings above, or let Render use the included `render.yaml`.
5. Deploy.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

The production files are generated in `dist/`.

## Important

Do not commit or upload `node_modules/`. Render installs the required dependencies during the build.
