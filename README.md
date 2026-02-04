# Atnurmi - Art, UI/UX & Web Design Studio

A modern, responsive Next.js website for Atnurmi Creative Studio, showcasing services, products, and portfolio.

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🎨 Component-based architecture
- 🌙 Dark mode support
- 📱 Mobile-first approach
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 SEO optimized

## Project Structure

```
atnurmi/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Button.tsx
│   │   ├── CTASection.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServicesSection.tsx
│   │   └── WhyAtnurmiSection.tsx
│   ├── constants/          # App constants
│   ├── types/              # TypeScript types
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/
│   └── images/             # Static images
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## Components

### Core Components
- **Navbar**: Sticky navigation with logo and menu items
- **Footer**: Multi-column footer with links and newsletter signup
- **Hero**: Full-screen hero section with CTA buttons
- **Button**: Reusable button component with variants

### Section Components
- **ServicesSection**: Grid of service cards
- **WhyAtnurmiSection**: Feature highlights
- **ProductsSection**: Product marketplace showcase
- **CTASection**: Call-to-action banner

### Card Components
- **ServiceCard**: Service offering cards
- **ProductCard**: Product showcase cards
- **FeatureCard**: Feature highlight cards

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols
- **Fonts**: Inter (Google Fonts)

## Color Palette

- **Primary**: #007ab8
- **Ocean**: #005b8a
- **Background Light**: #ffffff
- **Background Dark**: #0f1c23

## License

© 2024 Atnurmi Creative Studio. All rights reserved.
