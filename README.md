# Sajin Saji — Engineering Portfolio

Bilingual Next.js portfolio with local Inter fonts, a neutral background and navy/blue accents. Project images, content and EN/DE functionality are retained. The homepage puts projects immediately after the introduction, followed by experience, skills, education and contact.

## Run locally

```bash
npm ci
npm run dev
```

## Check and build

```bash
npm run lint
npm run build
```

The build generates a static website in `out/`. `npm start` does not serve a static export; use a static server or GitHub Pages.

## Publish to GitHub Pages

The repository includes `.github/workflows/nextjs.yml`. Every push to `main` installs dependencies, runs `npm run build` and deploys the generated `out/` folder to GitHub Pages automatically.

One-time setup: in the repository on GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.

Do not commit `out/`, `.next/` or `node_modules/`; they are generated and already listed in `.gitignore`.

## Edit content

- `data/portfolioData.ts`: project, experience, education and contact text in English and German.
- `components/Hero.tsx`: opening headline and introduction in both languages.
- `app/globals.css`: layout, spacing and visual styles.
- `public/Sajin_Saji_CV.pdf`: linked CV.
- `public/images/portrait.jpeg`: existing portrait; replace with a real photograph if preferred.

The contact form opens the visitor's email application with the message pre-filled and addressed to the email in `data/portfolioData.ts`; no third-party form service is used. Existing technical claims and individual project contributions should be checked against your reports before publication.
