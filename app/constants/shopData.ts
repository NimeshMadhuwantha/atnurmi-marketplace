export interface ShopItem {
  id: string;
  title: string;
  category: string[];
  price: number | 'free';
  isPremium: boolean;
  image: string;
  description?: string;
  tags?: string[];
}

export interface ShopPackage {
  id: string;
  title: string;
  category: 'icons' | 'stickers';
  price: number;
  isPremium: boolean;
  itemCount: number;
  image: string;
  description?: string;
}

export const categories = [
  { id: 'all', label: 'All Assets' },
  { id: 'icons', label: 'Icons' },
  { id: 'stickers', label: 'Stickers' },
  { id: 'graphic-arts', label: 'Graphic Arts' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'characters', label: 'Characters' },
];

export const shopItems: ShopItem[] = [
  {
    id: 'item-001',
    title: 'Luminal UI Kit',
    category: ['graphic-arts', 'uiux'],
    price: 24,
    isPremium: true,
    image: '/images/uiux/luminal-ui-kit.jpg',
    description: 'Modern minimalist UI components and design system',
    tags: ['ui kit', 'design system', 'components'],
  },
  {
    id: 'item-002',
    title: 'Ethereal Form 02',
    category: ['characters'],
    price: 120,
    isPremium: true,
    image: '/images/images/ethereal-form.jpg',
    description: '3D abstract character sculpture',
    tags: ['3d', 'character', 'sculpture'],
  },
  {
    id: 'item-003',
    title: 'Essential Icons',
    category: ['icons'],
    price: 'free',
    isPremium: false,
    image: '/images/icons/essential-icons.jpg',
    description: 'Collection of essential vector icons',
    tags: ['icons', 'vector', 'free'],
  },
  {
    id: 'item-004',
    title: 'Mesh Gradient V.1',
    category: ['graphic-arts'],
    price: 15,
    isPremium: false,
    image: '/images/graphic-arts/mesh-gradient.jpg',
    description: 'Abstract gradient mesh backgrounds',
    tags: ['gradient', 'background', 'mesh'],
  },
  {
    id: 'item-005',
    title: 'Neo-Retro Stickers',
    category: ['stickers'],
    price: 19,
    isPremium: false,
    image: '/images/stickers/neo-retro.jpg',
    description: 'Retro-inspired digital sticker collection',
    tags: ['stickers', 'retro', 'illustration'],
  },
  {
    id: 'item-006',
    title: 'Geometric Shapes Pack',
    category: ['icons', 'graphic-arts'],
    price: 'free',
    isPremium: false,
    image: '/images/icons/geometric-shapes.jpg',
    description: 'Modern geometric shape elements',
    tags: ['geometric', 'shapes', 'vector'],
  },
  {
    id: 'item-007',
    title: 'Dashboard UI Components',
    category: ['uiux'],
    price: 45,
    isPremium: true,
    image: '/images/uiux/dashboard-ui.jpg',
    description: 'Complete dashboard UI component library',
    tags: ['dashboard', 'ui', 'components'],
  },
  {
    id: 'item-008',
    title: 'Kawaii Emoji Set',
    category: ['stickers'],
    price: 12,
    isPremium: false,
    image: '/images/stickers/kawaii-emoji.jpg',
    description: 'Cute kawaii-style emoji collection',
    tags: ['emoji', 'kawaii', 'cute'],
  },
  {
    id: 'item-009',
    title: 'Abstract Art Collection',
    category: ['graphic-arts'],
    price: 35,
    isPremium: true,
    image: '/images/graphic-arts/abstract-art.jpg',
    description: 'Premium abstract art pieces',
    tags: ['abstract', 'art', 'premium'],
  },
  {
    id: 'item-010',
    title: 'Social Media Icons',
    category: ['icons'],
    price: 'free',
    isPremium: false,
    image: '/images/icons/social-media.jpg',
    description: 'Popular social media platform icons',
    tags: ['social', 'media', 'icons'],
  },
  {
    id: 'item-011',
    title: 'Minimal Line Icons',
    category: ['icons'],
    price: 18,
    isPremium: false,
    image: '/images/icons/minimal-line.jpg',
    description: 'Clean minimal line icon set',
    tags: ['minimal', 'line', 'icons'],
  },
  {
    id: 'item-012',
    title: 'Nature Sticker Pack',
    category: ['stickers'],
    price: 22,
    isPremium: true,
    image: '/images/stickers/nature-pack.jpg',
    description: 'Beautiful nature-themed stickers',
    tags: ['nature', 'outdoor', 'plants'],
  },
  {
    id: 'item-013',
    title: 'Fluid Gradients',
    category: ['graphic-arts'],
    price: 28,
    isPremium: true,
    image: '/images/graphic-arts/fluid-gradients.jpg',
    description: 'Smooth fluid gradient backgrounds',
    tags: ['gradient', 'fluid', 'background'],
  },
  {
    id: 'item-014',
    title: 'Mobile App UI Kit',
    category: ['uiux'],
    price: 55,
    isPremium: true,
    image: '/images/uiux/mobile-app-ui.jpg',
    description: 'Complete mobile app UI design kit',
    tags: ['mobile', 'app', 'ui kit'],
  },
  {
    id: 'item-015',
    title: 'Business Icons',
    category: ['icons'],
    price: 'free',
    isPremium: false,
    image: '/images/icons/business-icons.jpg',
    description: 'Professional business icon collection',
    tags: ['business', 'professional', 'icons'],
  },
  {
    id: 'item-016',
    title: 'Anime Stickers',
    category: ['stickers'],
    price: 25,
    isPremium: true,
    image: '/images/stickers/anime-stickers.jpg',
    description: 'Anime-style character stickers',
    tags: ['anime', 'characters', 'japanese'],
  },
  {
    id: 'item-017',
    title: '3D Icons Pack',
    category: ['icons'],
    price: 42,
    isPremium: true,
    image: '/images/icons/3d-icons.jpg',
    description: '3D rendered icon collection',
    tags: ['3d', 'rendered', 'modern'],
  },
  {
    id: 'item-018',
    title: 'Typography Posters',
    category: ['graphic-arts'],
    price: 32,
    isPremium: true,
    image: '/images/graphic-arts/typography-posters.jpg',
    description: 'Modern typography poster designs',
    tags: ['typography', 'posters', 'design'],
  },
];

export const shopPackages: ShopPackage[] = [
  {
    id: 'pack-001',
    title: 'Complete Icon Bundle',
    category: 'icons',
    price: 99,
    isPremium: true,
    itemCount: 500,
    image: '/images/icons/icon-bundle.jpg',
    description: 'All-in-one icon package with 500+ icons',
  },
  {
    id: 'pack-002',
    title: 'Sticker Mega Pack',
    category: 'stickers',
    price: 79,
    isPremium: true,
    itemCount: 300,
    image: '/images/stickers/sticker-mega-pack.jpg',
    description: 'Ultimate sticker collection with 300+ designs',
  },
  {
    id: 'pack-003',
    title: 'Starter Icon Pack',
    category: 'icons',
    price: 29,
    isPremium: false,
    itemCount: 100,
    image: '/images/icons/starter-icon-pack.jpg',
    description: 'Essential icons for getting started',
  },
  {
    id: 'pack-004',
    title: 'Fun Sticker Collection',
    category: 'stickers',
    price: 35,
    isPremium: false,
    itemCount: 150,
    image: '/images/stickers/fun-collection.jpg',
    description: 'Fun and playful sticker designs',
  },
];

export interface ServicePricing {
  id: string;
  title: string;
  description: string;
  price: string | number;
  features: string[];
  isPopular?: boolean;
  category: string;
}

export interface ServicePortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface ServiceGalleryItem {
  id: string;
  image: string;
  caption: string;
  category: string;
}

export const serviceCategories = [
  { id: 'art-and-creation', label: 'Art and Creation' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'uiux-design', label: 'UI/UX Design' },
  { id: 'web-development', label: 'Web Development' },
];

export const servicePricing: ServicePricing[] = [
  {
    id: 'price-001',
    title: 'Single Person A4',
    description: 'Detailed Graphite Portrait',
    price: 1200,
    category: 'art-and-creation',
    features: [
      'A4 Premium Paper',
      '10-15 Hours Detail',
      'Professional Fixative'
    ]
  },
  {
    id: 'price-002',
    title: 'Couples Portrait',
    description: 'Dual Subject Composition',
    price: 2200,
    category: 'art-and-creation',
    isPopular: true,
    features: [
      'A3 Large Format',
      'Intricate Shading',
      'Texture Detailing'
    ]
  },
  {
    id: 'price-003',
    title: 'Group Masterpiece',
    description: '3-5 Subjects on Large Scale',
    price: 4500,
    category: 'art-and-creation',
    features: [
      'Custom Sizing',
      'Depth-of-Field Study',
      'Collaborative Review'
    ]
  },
  {
    id: 'price-004',
    title: 'Custom Portraits',
    description: 'Concept & Bespoke Art',
    price: 'Custom',
    category: 'art-and-creation',
    features: [
      'Mixed Media Options',
      'Storyboard Integration',
      'Commercial Rights'
    ]
  },
  {
    id: 'price-005',
    title: 'Logo Design',
    description: 'Professional Brand Identity',
    price: 5000,
    category: 'graphic-design',
    isPopular: true,
    features: [
      'Multiple Concepts',
      'Unlimited Revisions',
      'Vector Files Included'
    ]
  },
  {
    id: 'price-006',
    title: 'Brand Package',
    description: 'Complete Visual Identity',
    price: 15000,
    category: 'graphic-design',
    features: [
      'Logo + Brand Guidelines',
      'Business Cards',
      'Social Media Templates'
    ]
  },
  {
    id: 'price-007',
    title: 'Mobile App Design',
    description: 'Complete UI/UX Solution',
    price: 25000,
    category: 'uiux-design',
    isPopular: true,
    features: [
      '10-15 Screens',
      'Interactive Prototype',
      'Design System'
    ]
  },
  {
    id: 'price-008',
    title: 'Website Design',
    description: 'Responsive Web Interface',
    price: 18000,
    category: 'uiux-design',
    features: [
      '5-7 Page Designs',
      'Mobile + Desktop',
      'Figma Source Files'
    ]
  },
  {
    id: 'price-009',
    title: 'Landing Page',
    description: 'Single Page Website',
    price: 8000,
    category: 'web-development',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Performance'
    ]
  },
  {
    id: 'price-010',
    title: 'Full Website',
    description: 'Multi-page Web Application',
    price: 35000,
    category: 'web-development',
    isPopular: true,
    features: [
      'Custom Development',
      'CMS Integration',
      '6 Months Support'
    ]
  }
];

export const servicePortfolio: ServicePortfolioItem[] = [
  {
    id: 'portfolio-001',
    title: 'Pencil Portraits',
    description: 'Captured with hyper-realistic precision, our pencil portraits go beyond a simple likeness. We focus on skin texture, ocular reflection, and the emotional resonance of the subject.',
    image: '/images/services/pencil-portraits.jpg',
    category: 'art-and-creation'
  },
  {
    id: 'portfolio-002',
    title: 'Concept Art',
    description: 'Transforming abstract ideas into tangible visual blueprints. Our concept services bridge the gap between imagination and execution.',
    image: '/images/services/concept-art.jpg',
    category: 'art-and-creation'
  },
  {
    id: 'portfolio-003',
    title: 'Character Drawings',
    description: 'Developing unique personalities through anatomical precision and stylized flair. Each character tells a story through every single line.',
    image: '/images/services/character-drawings.jpg',
    category: 'art-and-creation'
  },
  {
    id: 'portfolio-004',
    title: 'Brand Identity',
    description: 'Complete brand systems that tell your story and connect with your audience through strategic visual design.',
    image: '/images/services/brand-identity.jpg',
    category: 'graphic-design'
  },
  {
    id: 'portfolio-005',
    title: 'Digital Illustrations',
    description: 'Vibrant digital artwork combining traditional techniques with modern tools for stunning visual impact.',
    image: '/images/services/digital-illustrations.jpg',
    category: 'graphic-design'
  }
];

export const serviceGallery: ServiceGalleryItem[] = [
  {
    id: 'gallery-001',
    image: '/images/services/gallery-1.jpg',
    caption: 'Frail whispers of light dancing upon the mirror of a silent, watchful soul.',
    category: 'art-and-creation'
  },
  {
    id: 'gallery-002',
    image: '/images/services/gallery-2.jpg',
    caption: 'Etched timelines across weathered skin telling stories of many long-forgotten golden summers.',
    category: 'art-and-creation'
  },
  {
    id: 'gallery-003',
    image: '/images/services/gallery-3.jpg',
    caption: 'Soft graphite petals holding morning dew within a timeless bloom of gray.',
    category: 'art-and-creation'
  },
  {
    id: 'gallery-004',
    image: '/images/services/gallery-4.jpg',
    caption: 'Monolithic structures rising from the page through precise architectural shadows and stone textures.',
    category: 'art-and-creation'
  },
  {
    id: 'gallery-005',
    image: '/images/services/gallery-5.jpg',
    caption: 'A wild majesty captured in every single strand of graphite fur and fire.',
    category: 'art-and-creation'
  },
  {
    id: 'gallery-006',
    image: '/images/services/gallery-6.jpg',
    caption: 'Ephemeral forms dissolving into the white void of an unfinished, haunting human dream.',
    category: 'art-and-creation'
  }
];

export const itemsPerPage = 12;
