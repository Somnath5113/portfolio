# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment (Vercel)

The site deploys to Vercel via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

- Push to `main` → production deploy
- Pull request → preview deploy

### One-time setup

1. Create the project on Vercel and link it locally once: `npx vercel link`
   (this creates `.vercel/project.json` with the org and project IDs).
2. Create a Vercel access token at <https://vercel.com/account/tokens>.
3. Add these repository secrets in GitHub (Settings → Secrets and variables → Actions):
   - `VERCEL_TOKEN` — the access token
   - `VERCEL_ORG_ID` — from `.vercel/project.json` (`orgId`)
   - `VERCEL_PROJECT_ID` — from `.vercel/project.json` (`projectId`)

Build settings live in [vercel.json](vercel.json) (`vite`, `dist`).
