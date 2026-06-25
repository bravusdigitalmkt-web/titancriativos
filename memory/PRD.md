# TITAN CRIATIVOS — PRD

## Original Problem Statement
Premium SaaS landing page for **TITAN CRIATIVOS**, an AI-powered content platform for fashion stores in Goiânia / Região da 44.
Must look like a billion-dollar tech startup (OpenAI / Stripe / Linear / Vercel / Apple / Notion vibe).
Tagline: *"Transformamos fotos dos seus produtos em conteúdo que vende."*

## User Choices (Feb 2026)
- Static React animated marketing site (no backend logic beyond default)
- All CTAs redirect to WhatsApp (placeholder `5562900000000`)
- **Removed**: AI try-on demo ("provador"), Portfolio, Testimonials
- 100% Portuguese (BR)
- No Unsplash placeholders for portfolio (sections removed entirely)

## Stack
- React 19 + CRA + Tailwind + Shadcn UI + Framer Motion
- FastAPI + MongoDB backend (kept intact, default health endpoint only)
- Fonts: Sora (display) + Inter (body) + JetBrains Mono (accents)

## Design Tokens
- Background `#09090B` · Cards `#111827` · Primary Blue `#2563EB`
- Text white `#FFFFFF` · Secondary `#94A3B8` · Muted `#64748B`
- Archetype 4 + 5 (Swiss High-Contrast + Luxury Editorial)

## Implemented (2026-02-25)
- ✅ Sticky glass header w/ scroll-aware backdrop + mobile drawer
- ✅ Hero w/ animated reveal, fashion model image card, floating IA status chips
- ✅ Social Proof: 4-metric animated count-up grid
- ✅ How It Works: 5-step bento cards
- ✅ Services: 8-card responsive grid
- ✅ Pricing: 3 tiers, TITAN highlighted with glow + "Mais popular" badge
- ✅ FAQ: shadcn accordion (4 items)
- ✅ Final CTA: full-width banner with editorial background + dark overlay
- ✅ Footer: logo, socials (WhatsApp / Instagram / Email), nav, legal links
- ✅ All `Solicitar Demonstração` CTAs → `https://wa.me/5562900000000`
- ✅ Frontend testing 100% pass (test_reports/iteration_1.json)

## Backlog (P1)
- Replace placeholder WhatsApp number with real client number
- Real Instagram URL + corporate email
- Privacy / Terms pages (currently `#`)
- Optional: cookie banner (LGPD)
- Optional: lead capture form → MongoDB + email forwarding

## Backlog (P2)
- Custom favicon + OG image
- SEO metadata (sitemap, JSON-LD Organization)
- Add subtle real portfolio when client provides images
- Section-level testimonial carousel when client provides videos
- Analytics (GA4 / Plausible)
