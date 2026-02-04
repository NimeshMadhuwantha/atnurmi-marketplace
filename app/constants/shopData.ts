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

export const itemsPerPage = 12;
