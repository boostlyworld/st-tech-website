# GrowthLab Agency Website

A modern, premium, high-converting agency website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives (shadcn/ui style)
- **Icons**: Lucide React
- **Font**: Plus Jakarta Sans (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx           # Root layout with metadata & SEO
│   └── page.tsx             # Main page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky navbar with scroll behavior
│   │   └── Footer.tsx       # Multi-column footer
│   ├── sections/
│   │   ├── HeroSection.tsx         # Full-viewport hero with animations
│   │   ├── TrustedSection.tsx      # Animated logo marquee
│   │   ├── ServicesSection.tsx     # 8-service card grid
│   │   ├── WhyUsSection.tsx        # 4 feature blocks
│   │   ├── ProcessSection.tsx      # 4-step timeline
│   │   ├── ResultsSection.tsx      # Animated count-up stats
│   │   ├── TestimonialsSection.tsx # 3 testimonial cards
│   │   ├── FAQSection.tsx          # Accordion FAQ
│   │   ├── CTASection.tsx          # Blue gradient CTA block
│   │   └── ContactSection.tsx      # Contact form with validation
│   └── ui/
│       ├── accordion.tsx    # Radix accordion
│       ├── badge.tsx        # Badge component
│       ├── button.tsx       # Button with variants
│       ├── input.tsx        # Input field
│       ├── label.tsx        # Form label
│       └── textarea.tsx     # Textarea
├── hooks/
│   ├── useCountUp.ts        # Intersection-observer count-up animation
│   └── useScrolled.ts       # Scroll position hook for navbar
└── lib/
    └── utils.ts             # cn() utility
```

## Sections

1. **Hero** — Full-viewport with gradient background, headline, CTA buttons, trust indicators, and stats bar
2. **Trusted Companies** — Animated marquee of company logos
3. **Services** — 8 service cards in a responsive grid with hover effects
4. **Why Us** — 4 feature blocks with icons and highlight pills
5. **Process** — 4-step timeline (Discovery → Strategy → Execution → Optimization)
6. **Results** — Animated count-up statistics + case study highlights
7. **Testimonials** — 3 client testimonial cards with ratings and results
8. **FAQ** — Accordion with 8 detailed questions
9. **CTA** — Full-width blue gradient call-to-action section
10. **Contact** — Contact form with validation + sidebar info

## Customization

- **Colors**: Update `tailwind.config.ts` color palette
- **Content**: Edit text directly in each section component
- **Services**: Modify the `services` array in `ServicesSection.tsx`
- **Company info**: Update contact details in `Footer.tsx` and `ContactSection.tsx`
- **SEO metadata**: Edit `src/app/layout.tsx`

## Deployment

Deploy to Vercel with one click:

```bash
npx vercel
```

Or deploy to any platform that supports Next.js (Netlify, AWS, Railway, etc.).

## License

MIT
