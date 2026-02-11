import React from 'react';
import ProductCard from './ProductCard';
import { MdShoppingBag } from 'react-icons/md';

const products = [
  {
    image: '/images/product-1.jpg',
    title: 'Atnurmi UI Kit v2.0',
    description: 'Full Design System for Figma',
    price: 49,
    isPremium: true,
  },
  {
    image: '/images/product-2.jpg',
    title: 'Texture Brush Pack',
    description: '15 High-res Graphite Brushes',
    price: 'FREE',
    isFree: true,
  },
  {
    image: '/images/product-3.jpg',
    title: 'Editorial Portfolio Template',
    description: 'Minimalist Web Template',
    price: 29,
    isPremium: true,
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section id="shop" className="py-16 md:py-24 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 dark:text-white">
            Digital Items &amp; Downloads
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto md:mx-0" />
        </div>
        <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
          View All Marketplace <MdShoppingBag className="text-xl" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            isPremium={product.isPremium}
            isFree={product.isFree}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
