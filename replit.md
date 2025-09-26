# Aivara Creative AI Website

## Overview
This is a Next.js 14 application for Aivara Solutions, a Creative AI Studio that offers services like custom jingles, theme songs, AI marketing, and reels. The website features a modern design with gradient animations and smooth scrolling.

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components (Button, Card)

## Project Structure
```
app/
├── globals.css          # Global styles and Tailwind CSS
├── layout.tsx          # Root layout with metadata
└── page.tsx            # Main homepage component

components/
└── ui/
    ├── button.tsx      # Custom button component
    └── card.tsx        # Custom card component

public/
└── favicon.svg         # Website favicon

next.config.js          # Next.js configuration for Replit environment
package.json           # Dependencies and scripts
tailwind.config.ts     # Tailwind CSS configuration
tsconfig.json          # TypeScript configuration
```

## Development Setup
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows proxy access)
- **Dev Command**: `npm run dev -- --port 5000 --hostname 0.0.0.0`

## Features
- Responsive design with mobile navigation
- Smooth scroll navigation
- Gradient text effects and animations
- Contact form (frontend only)
- Newsletter signup form
- Service showcases
- Modern dark theme with colorful accents

## Deployment
- **Target**: Autoscale (stateless website)
- **Build**: `npm run build`
- **Start**: `npm start`

## Recent Changes
- **2025-09-26**: Initial setup for Replit environment
  - Configured Next.js for proxy compatibility
  - Set up development workflow on port 5000
  - Configured deployment settings
  - Resolved TypeScript/LSP issues

## User Preferences
- Clean, modern design maintained
- Gradient color scheme preserved
- Responsive mobile-first approach
- Smooth animations and transitions