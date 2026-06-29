# Sri Amutha Dental Care — Landing Page

A modern, responsive landing page for Sri Amutha Dental Care (Micro-Surgical Root Canal Centre). Built as a single-page site with WhatsApp-based booking, Google Maps location, and Google reviews.

## Tech stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion (animations) + Lenis (smooth scroll)
- lucide-react (icons)

## Sections

Navbar · Hero · Trust stats · Services · Why Us · About / Doctor · Reviews · FAQ · Location (Google Maps) · CTA band · Footer · sticky mobile call/WhatsApp bar.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## Configuration

All client-specific content lives in [`src/lib/site.ts`](src/lib/site.ts):
clinic name, WhatsApp number, phone, address, map coordinates, opening hours,
services, doctor details, testimonials, FAQs, and headline stats.

> Note: imagery (hero photos, doctor photo) currently uses Unsplash placeholders,
> and contact details / stats are placeholders pending the client's real data.

## Booking

Booking is handled via WhatsApp click-to-chat deep links (`wa.me`) with a
pre-filled message — no backend required.
