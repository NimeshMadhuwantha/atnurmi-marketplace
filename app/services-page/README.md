# Services Section Documentation

## Overview
The services section is a comprehensive multi-page feature showcasing Atnurmi's service offerings across four main categories:

1. **Art and Creation** - Traditional and digital art services
2. **Graphic Design** - Logo, branding, and visual design
3. **UI/UX Design** - Interface and user experience design
4. **Web Development** - Website and web application development

## Folder Structure

```
app/
├── services/
│   ├── page.tsx                    # Main services overview page
│   ├── art-and-creation/
│   │   └── page.tsx               # Art & creation services page
│   ├── graphic-design/
│   │   └── page.tsx               # Graphic design services page
│   ├── uiux-design/
│   │   └── page.tsx               # UI/UX design services page
│   └── web-development/
│       └── page.tsx               # Web development services page
├── components/
│   ├── ServiceHero.tsx            # Hero section component
│   ├── ServicePricingCard.tsx     # Pricing card component
│   ├── ServicePortfolioSection.tsx # Portfolio display component
│   ├── ServiceDigitalShowcase.tsx  # Digital showcase component
│   └── ServiceGallery.tsx         # Gallery grid component
└── constants/
    └── shopData.ts                # Service data and types

public/
└── images/
    └── services/
        └── README.md              # Image requirements documentation
```

## Components

### 1. ServiceHero
**Purpose:** Large hero section with background image, title, and CTA buttons

**Props:**
- `title` - Main heading text
- `subtitle` - Small badge text above title
- `description` - Descriptive paragraph
- `backgroundImage` - Hero background image URL
- `ctaPrimary` - Primary button text (default: "Explore Pricing")
- `ctaSecondary` - Secondary button text (default: "View Archive")
- `onPrimaryCTA` - Primary button click handler
- `onSecondaryCTA` - Secondary button click handler

**Usage:**
```tsx
<ServiceHero
  title="PENCIL ARTS SHOWCASE"
  subtitle="Master Portfolio"
  description="Exquisite graphite portraits..."
  backgroundImage="/images/services/art-hero.jpg"
  onPrimaryCTA={scrollToPricing}
/>
```

### 2. ServicePricingCard
**Purpose:** Display individual pricing tiers with features

**Props:**
- `pricing` - ServicePricing object
- `onSelect` - Selection callback function

**Features:**
- Automatic price formatting
- Popular badge support
- Responsive grid layout
- Custom/numeric price handling

### 3. ServicePortfolioSection
**Purpose:** Showcase portfolio items with descriptions

**Props:**
- `items` - Array of ServicePortfolioItem objects

**Layout:**
- First item displayed as main feature (large)
- Remaining items in grid layout
- Responsive breakpoints

### 4. ServiceDigitalShowcase
**Purpose:** Feature section with image and feature list

**Props:**
- `title` - Section title
- `subtitle` - Small heading text
- `description` - Main description
- `features` - Array of feature objects
- `ctaText` - CTA button text
- `onCTA` - CTA button click handler

### 5. ServiceGallery
**Purpose:** Masonry-style gallery grid

**Props:**
- `items` - Array of ServiceGalleryItem objects

**Features:**
- Responsive masonry layout
- Image placeholders
- Caption display

## Data Structure

### ServicePricing Interface
```typescript
{
  id: string;
  title: string;
  description: string;
  price: string | number;
  features: string[];
  isPopular?: boolean;
  category: string;
}
```

### ServicePortfolioItem Interface
```typescript
{
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}
```

### ServiceGalleryItem Interface
```typescript
{
  id: string;
  image: string;
  caption: string;
  category: string;
}
```

## Page Routes

- `/services` - Main overview page with category navigation
- `/services/art-and-creation` - Art and creation services
- `/services/graphic-design` - Graphic design services
- `/services/uiux-design` - UI/UX design services
- `/services/web-development` - Web development services

## Navigation

The services link has been added to:
- Desktop navigation menu in Navbar.tsx
- Mobile navigation menu in Navbar.tsx

Navigation updates from `#services` (anchor) to `/services` (route).

## Responsive Design

All components include responsive breakpoints:
- Mobile: Single column, stacked layout
- Tablet (md): 2 columns for grids
- Desktop (lg): 3-4 columns for grids
- Extra large: Maximum width container (1400px)

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Image Placeholders

Currently using gradient placeholders for all images. Replace with actual images before production:

### Required Images:
See `/public/images/services/README.md` for complete image requirements and specifications.

## Customization

### Adding New Service Categories

1. Add category to `serviceCategories` in shopData.ts
2. Create folder: `app/services/[category-id]/`
3. Create page: `app/services/[category-id]/page.tsx`
4. Add pricing items with matching category ID
5. Add portfolio items with matching category ID

### Styling

All components use Tailwind CSS with:
- Primary color: `#007ab8`
- Dark mode support
- Consistent spacing and typography
- Smooth transitions and hover effects

## Features

✅ Fully responsive design
✅ Dark mode support
✅ Category-based filtering
✅ Smooth scrolling navigation
✅ Interactive pricing cards
✅ Masonry gallery layout
✅ Image placeholders with fallbacks
✅ SEO-friendly structure
✅ TypeScript type safety

## Next Steps

1. Replace placeholder images with actual service images
2. Add modal for pricing selection
3. Implement contact form integration
4. Add animation on scroll
5. Optimize images for web
6. Add meta tags for SEO

## Notes

- All components are client-side rendered ('use client')
- Data is stored in centralized shopData.ts file
- Each service category has unique pricing and portfolio items
- Gallery items are filtered by category
- Navigation is sticky on scroll
- Placeholder images use SVG icons for better UX
