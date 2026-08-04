# Prestige Landscapes — Modern v2

A complete reimagining of the Prestige Landscapes website with modern design patterns, Apple-inspired animations, and best-in-class SEO.

## What's New vs. Original

| Feature | Original | Modern v2 |
|---------|----------|-----------|
| Animations | Basic CSS transitions | Framer Motion: scroll-triggered, staggered, spring physics, parallax |
| Design Language | Traditional layout, sharp corners | Apple-like: glass morphism, rounded corners, subtle shadows, smooth transitions |
| Typography | Open Sans + Montserrat | Inter (system-optimized, modern) |
| SEO | Basic meta + schema | Enhanced: multiple JSON-LD schemas, geo tags, FAQ schema, breadcrumbs, Sitemap, Robots |
| Performance | Standard Next.js | Standalone output, security headers, image optimization, reduced motion support |
| Mobile UX | Basic dropdown | Animated overlay with spring physics, body scroll lock |
| Navigation | Flat links | Animated underline indicators, sticky glass header |
| Contact Form | Basic HTML form | Animated states (sending/sent/error), micro-interactions |
| Accessibility | Basic | Reduced motion support, focus-visible rings, semantic HTML |

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript)
- **Animations:** Framer Motion 12
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Railway (Docker)

## Getting Started

```bash
cd modern-v2
npm install
npm run dev
```

## Deployment to Railway

1. Create a new Railway project
2. Connect this repo (or a new repo with just the `modern-v2/` folder)
3. Set the root directory to `modern-v2/`
4. Railway will pick up the Dockerfile automatically
5. Set environment variable: `NEXT_PUBLIC_BASE_URL` to your Railway domain

## Project Structure

```
modern-v2/
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens, glass utilities, scrollbar
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page with all structured data
│   │   ├── not-found.tsx       # Custom 404
│   │   ├── robots.ts           # SEO: robots.txt rules
│   │   └── sitemap.ts          # SEO: dynamic sitemap
│   ├── components/
│   │   ├── animations/
│   │   │   └── index.tsx       # ScrollReveal, StaggerContainer, Parallax, MagneticButton
│   │   ├── layout/
│   │   │   ├── TopBar.tsx      # Contact strip with hours
│   │   │   ├── Header.tsx      # Sticky glass header with animated mobile menu
│   │   │   ├── Footer.tsx      # Rich footer with nav links
│   │   │   └── ScrollProgress.tsx  # Reading progress bar
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Full-screen hero with parallax
│   │       ├── ServicesSection.tsx   # Hover-animated service cards
│   │       ├── UvStableSection.tsx   # Feature gallery
│   │       ├── ProcessSection.tsx    # Numbered step cards with connectors
│   │       ├── ReviewsSection.tsx    # Glass-morphism testimonial cards
│   │       ├── LatestProject.tsx     # Image gallery with hover zoom
│   │       ├── FaqContactSection.tsx # Animated accordion + smart form
│   │       └── CtaSection.tsx        # Dark gradient CTA banner
│   ├── hooks/
│   │   └── index.tsx           # useScrollProgress, useInView, useMediaQuery, useReducedMotion
│   ├── lib/
│   │   ├── content.ts          # All site content (same as original)
│   │   ├── seo.ts              # JSON-LD schema generators
│   │   └── utils.ts            # cn() utility
│   └── types/
│       └── content.ts          # TypeScript interfaces
├── public/
│   ├── images/                 # Copy from parent project
│   └── seo/                    # Copy from parent project
├── Dockerfile
├── railway.json
├── package.json
├── next.config.ts
└── tsconfig.json
```
