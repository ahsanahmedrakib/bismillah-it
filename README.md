# Bismillah Computer & Technology

Company website for **Bismillah Computer & Technology (BCT)** — a comprehensive IT solutions provider offering web design, cloud services, voice systems, internet connectivity, and managed IT support.

Built with the **Next.js App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with a custom Node.js server for production
- **UI:** React 19, TypeScript, Tailwind CSS v4
- **Icons:** lucide-react, react-icons
- **Sliders:** swiper
- **Animations:** tsparticles-engine, tsparticles-slim, react-tsparticles
- **Package manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18.18+ and pnpm installed

### Installation

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production build & start

```bash
pnpm build
pnpm start
```

`pnpm start` serves the production build through a custom HTTP server (`server.js`), which supports the `HOSTNAME` and `PORT` environment variables (defaults: `localhost:3000`).

### Lint

```bash
pnpm lint
```

## Scripts

| Script      | Command                              | Description                          |
| ----------- | ------------------------------------ | ------------------------------------ |
| `dev`       | `next dev`                           | Start the development server         |
| `build`     | `next build`                         | Create a production build            |
| `start`     | `NODE_ENV=production node server.js` | Serve the production build           |
| `lint`      | `eslint`                             | Run ESLint                           |

## Project Structure

```
├── public/                          # Static assets (images, logos, favicon)
│   └── images/
│       ├── navbar/                  # Mega-menu icons/images
│       ├── home/                    # Home page assets
│       └── ...                      # Per-feature image folders
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── page.tsx                 # Home route
│   │   ├── layout.tsx               # Root layout (Navbar, Footer, SocialChat)
│   │   ├── globals.css              # Global Tailwind styles
│   │   ├── not-found.tsx            # Root 404 page
│   │   └── (web)/                   # Route group for public pages
│   │       ├── web/                 #   Web services & sub-pages
│   │       ├── it-support/          #   IT support & sub-pages
│   │       ├── cloud/               #   Cloud services & sub-pages
│   │       ├── voice/               #   Voice systems & sub-pages
│   │       ├── internet/            #   Internet & sub-pages
│   │       ├── industries/          #   Industries page
│   │       ├── contact/             #   Contact page
│   │       └── not-found.tsx        #   Route-group 404 page
│   │
│   ├── features/                    # Feature-based modules
│   │   ├── home/                    # Landing page sections
│   │   ├── web/                     # Web services
│   │   ├── it-support/              # IT support services
│   │   ├── cloud/                   # Cloud / Microsoft solutions
│   │   ├── voice/                   # Voice & phone systems
│   │   ├── internet/                # Internet connectivity
│   │   ├── industries/              # Industry-specific solutions
│   │   └── contact/                 # Contact information
│   │
│   └── shared/                      # Reusable shared code
│       ├── components/
│       │   ├── layout/              # Navbar, Footer, SocialChat
│       │   └── ui/                  # Hero, HeroSlider, ImageCard, ListCard,
│       │                            # IconFeatureCard, TestimonialCard, FAQAccordion,
│       │                            # HoverableContentCard
│       ├── data/                    # Navigation / mega-menu data
│       └── hooks/                   # useTouchHover
│
├── server.js                        # Custom production HTTP server
├── next.config.ts                   # Next.js configuration
├── postcss.config.mjs               # PostCSS / Tailwind config
├── eslint.config.mjs                # ESLint config
├── tsconfig.json                    # TypeScript config
└── package.json
```

## Feature Architecture

Each feature under `src/features/` follows a consistent pattern:

```
src/features/<feature>/
├── page.tsx            # Page entry (imported by the matching app route)
├── _components/        # Feature-specific page components
│   ├── <Feature>Page.tsx
│   └── index.ts        # Barrel export
└── data/               # Feature-specific content data
    └── <feature>Data.ts
```

Page routes in `src/app/(web)/<route>/page.tsx` are thin wrappers that set page-specific `metadata` and render the feature component.

### Navigation

The top navigation and mega menus are fully data-driven from `src/shared/data/navbar.ts`, which defines:

- `NAV_ITEMS` — top-level navigation (IT, VOICE, INTERNET, CLOUD, WEB, INDUSTRIES, CONTACT)
- Mega-menu data for each section (e.g. `IT_MEGA_MENU`, `VOICE_MEGA_MENU`, `INTERNET_MEGA_MENU`, `CLOUD_MEGA_MENU`, `WEB_MEGA_MENU`, `INDUSTRIES_MEGA_MENU`)
- `UTILITY_LINKS` (Customer Portal, Success Centre, Status) and `SOCIAL_ICONS`

## Configuration

- **Path alias:** `@/*` maps to `./src/*` (see `tsconfig.json`).
- **Next.js config** (`next.config.ts`): `images.unoptimized`, `poweredByHeader: false`, `compress: true`.
- **Environment variables:** `HOSTNAME` and `PORT` are read by `server.js`.

## Deployment

The production build is served by a custom Node HTTP server (`server.js`) using Next.js's request handler:

```bash
pnpm build
HOSTNAME=0.0.0.0 PORT=3000 pnpm start
```
