# Sondre G. — Web Development Portfolio

A responsive portfolio for Sondre G., showcasing website services for small and local businesses. It includes service and starting-price information, a project process, a featured fictional project, and contact details.

## Services

- Quick improvements to existing websites, from **$60**
- Landing pages, from **$270**
- Website refreshes, from **$430**

The portfolio's featured project is **Nordlys Renhold**, a fictional Norwegian cleaning-company website concept.

## Tech stack

- React 19
- JavaScript
- CSS
- Vite

## Run locally

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Available commands

```sh
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Deployment

The site is deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`, which builds the site and deploys it on pushes to `main` or a manual workflow run. Vite is configured with `/portfolio/` as the base path for the deployed site.
