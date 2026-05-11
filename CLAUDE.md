# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Austin Green, hosted at `www.austingreen.net` via GitHub Pages (custom domain in `CNAME`). Built with Next.js (App Router) and Tailwind CSS, exported as a fully static site.

## Commands

```bash
npm run dev      # local dev server at http://localhost:3000
npm run build    # static export to out/
npm run lint     # ESLint
```

## Deployment

Push to `master` → GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys the `out/` directory to GitHub Pages automatically. No manual deploy step needed.

You'll need to enable GitHub Pages in the repo settings (**Settings → Pages → Source: GitHub Actions**) the first time.

## Architecture

Single-page site in `app/page.tsx`. All content (bio, projects list) is hardcoded in that file — no CMS or data layer.

- `next.config.ts` — `output: "export"` for static generation
- `app/layout.tsx` — root layout, metadata, Geist font
- `app/page.tsx` — the entire site: About and Projects sections
- `app/globals.css` — minimal global styles, Tailwind import

