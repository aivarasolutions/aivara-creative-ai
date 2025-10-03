# Aivara Solutions Website

## Overview
This is a Next.js 14 application for Aivara Solutions, a Creative AI Studio that offers four core services: AI & Education, Web & Marketing, Logistics, and Aivara Music. The website features a modern design with pink-teal-yellow gradient animations, dark theme, and real client portfolio showcases.

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components (Button, Card, Section, PortfolioCard, etc.)

## Project Structure
```
app/
├── globals.css                    # Global styles and Tailwind CSS
├── layout.tsx                     # Root layout with metadata and favicon
├── page.tsx                       # Homepage
├── portfolio/page.tsx             # Portfolio with category filtering
├── contact/page.tsx               # Contact page with form
└── services/
    ├── page.tsx                   # Services hub
    ├── ai-education/page.tsx      # AI & Education service page
    ├── web-marketing/page.tsx     # Web & Marketing service page
    ├── logistics/page.tsx         # Logistics service page
    └── music/page.tsx             # Aivara Music service page

components/
├── layout/
│   ├── Header.tsx                 # Site header with dropdown navigation
│   └── Footer.tsx                 # Site footer
└── ui/
    ├── button.tsx                 # Custom button component
    ├── card.tsx                   # Custom card component
    ├── Section.tsx                # Reusable section wrapper
    ├── PortfolioCard.tsx          # Portfolio item card
    ├── ServiceCard.tsx            # Service offering card
    ├── FAQ.tsx                    # FAQ accordion component
    └── AudioPlayer.tsx            # Audio player component

public/
├── favicon.png                    # Website favicon (Aivara logo)
├── images/
│   ├── aivara-icon.png           # Aivara Solutions logo icon
│   └── portfolio/                 # Client project screenshots
│       ├── richaf-bot.png
│       ├── ipm-apollo.png
│       ├── liftfi.png
│       ├── richaf-ecommerce.png
│       ├── servant-agape.png
│       ├── ipm-seo.png
│       ├── mts-route.png
│       └── freightsync.png
└── data/
    └── portfolio.json             # Portfolio data with 11 real client projects
```

## Development Setup
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows proxy access)
- **Dev Command**: `npm run dev -- --port 5000 --hostname 0.0.0.0`

## Site Structure & Navigation
- **Homepage**: Hero, 4 service cards, featured portfolio (6 items), CTA
- **Services Hub**: Grid of 4 service categories
- **Service Pages**: AI & Education, Web & Marketing, Logistics, Aivara Music (with SoundCloud embeds)
- **Portfolio**: Category filtering (All, AI, Web, Logistics, Music) with 11 real client projects
- **Contact**: Quote request form with service selection

## Portfolio Data
11 real client projects across 4 categories:
- **AI Projects (3)**: RichAF Bot, IPM Apollo, LiftFi
- **Web Projects (3)**: RichAF E-commerce, Servant of Agape, IPM SEO
- **Logistics Projects (2)**: MTS Route, FreightSync
- **Music Projects (3)**: Blow Up, IPM Theme Song, Isabella Nails (with SoundCloud embeds)

## Design System
- **Theme**: Dark background (#000) with gradient accents
- **Colors**: Pink (#db2777), Teal (#14b8a6), Yellow (#facc15)
- **Typography**: Gradient text effects on headings
- **Cards**: Dark with backdrop blur and gradient borders
- **Logo**: Blue/orange "A" icon + "Aivara Solutions" text

## Deployment
- **Target**: Autoscale (stateless website)
- **Build**: `npm run build`
- **Start**: `npm start`

## Recent Changes
- **2025-10-03**: Complete site restructure
  - Created new information architecture with 4 service pages
  - Built portfolio system with category filtering
  - Added 11 real client projects with screenshots
  - Integrated SoundCloud music embeds
  - Updated logo to blue/orange icon with text
  - Implemented dropdown navigation
  - Created contact page with service-specific forms
  - Added FAQ sections to all service pages

- **2025-09-26**: Initial setup for Replit environment
  - Configured Next.js for proxy compatibility
  - Set up development workflow on port 5000
  - Configured deployment settings

## User Preferences
- Dark theme with pink-teal-yellow gradient color scheme
- Clean, modern design
- Responsive mobile-first approach
- Smooth animations and transitions
- Real client data (no mock/placeholder content)
- SoundCloud embeds for music portfolio items
