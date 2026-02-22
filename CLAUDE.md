# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and blog for Seungyong Cho, built with Astro 5 (static site generator). Based on the astro-nano theme. Uses MDX for content, Tailwind CSS for styling, and TypeScript throughout.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Type-check (`astro check`) then build to `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Auto-fix lint issues

## Architecture

### Content Collections (`src/content/`)

Two Astro content collections defined in `src/content/config.ts`:
- **blog/** — Markdown posts with frontmatter: `title`, `description`, `date`, `draft?`, `category` (default: "dev"), `id` (number|string)
- **projects/** — Markdown project pages with frontmatter: `title`, `description`, `date`, `draft?`, `demoURL?`, `repoURL?`

### Routing (`src/pages/`)

- `/` — Homepage (index.astro) showing bio, latest posts, recent projects
- `/[category]/[id]` — Blog post pages (dynamic route from blog collection)
- `/[slug]` — Project detail pages (dynamic route from projects collection)
- `/rss.xml` and `/robots.txt` — Generated endpoints

### Component Hierarchy

`PageLayout` (HTML shell + Head + Header + Footer) → `Container` (max-w-screen-sm centered wrapper) → page content. Reusable cards use `ArrowCard` for listing entries.

### Key Files

- `src/consts.ts` — Site metadata, social links, homepage display limits
- `src/types.ts` — TypeScript type definitions
- `src/lib/utils.ts` — Utilities: `cn()` (clsx+twMerge), `formatDate()`, `readingTime()`, `dateRange()`
- `src/styles/global.css` — Tailwind directives, fade-in animations, article prose styling

## Code Conventions

- **Import aliases**: `@components/`, `@layouts/`, `@lib/`, `@consts`, `@types` map to `src/` (configured in tsconfig as `@*` → `./src/*`)
- **Linting**: Semicolons required, double quotes enforced, template literals allowed
- **Strict TypeScript**: Extends `astro/tsconfigs/strict` with `strictNullChecks`
- **Dark mode**: Class-based toggling with localStorage persistence; color palette uses stone shades
- **Fonts**: Inter (sans, body text) and Lora (serif, headings)
- **Animations**: Elements use `.animate` class for staggered fade-in-up entrance effects
