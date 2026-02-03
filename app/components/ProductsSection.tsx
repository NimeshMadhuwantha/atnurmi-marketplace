import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyqAU-0NHdDyev97VwMn0Juzv9o6Qjf5zUj2FX_VEFAOXQyAGS7AZAo6AlduGQVhvBmsT81z7aFBt1Z6Avu7qyRyVQ-OSuveZkQJwRTILYXU16GWToRwQqYNIeE4aRNs-4V7S8Vnubu1rNzRDrYf_siQe32FAI2Jy9h6S8p4AL0I9JB5mPnRyhY0KAqES5kNftZhbQA8H6cLlG0-vamTRiw8WiBZ6SioEcGErVHsQaTwG--z2e4JSlIhOp39_LMBSUJALfsTGnN7Wh',
    title: 'Atnurmi UI Kit v2.0',
    description: 'Full Design System for Figma',
    price: 49,
    isPremium: true,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEjG66UaUtgJLyGoSPZ6P_3COediafTbDhm-vyd6ZRPrB91uKaPGsh5EiC5l8mEM8DcwVTjm-BCBJSm_2Fu19dPKvXbaeUWAWbTlC9dRiXobDn-KD5NW5zPzZ6_zlov4MUG6cddfAfblJWr56mN0Y1A1Q6P-6VYsTTzCEF0ZWOngiaYsQAdhuQJ-iREadWzQA9SH8_PrhiqgMDiA404aGR176zBWO0E-lrCbU2D2hVW4X57LdjwftfqyNLsPtmpdhXLYd8MhACPffX',
    title: 'Texture Brush Pack',
    description: '15 High-res Graphite Brushes',
    price: 'FREE',
    isFree: true,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALFoERy3XeeB6wMF-4ppH01R1MnqWT71F1hup-FBF3wElKm5kbpSpfBXYZ2qEr3tJ_mU6z4d97lgWkb43HwoKH294gaDWrtvjQwbF9k203FddFhkLiTEB4nSnQLySaUDQxmNFsBtUEsrjsY89u6FOIy0OFSQyQk7knWrJQw8plrie-FTm5hbicGfm0Pzih0cGDNyfXK_PQTpgeoFAjZ6XQK76BK6tKi2a56bumOEkzLTHVOMAR5sdBNMYeg2DsYZJAbaryjbJBRGj4',
    title: 'Editorial Portfolio Template',
    description: 'Minimalist Web Template',
    price: 29,
    isPremium: true,
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 dark:text-white">
            Digital Items &amp; Downloads
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
          View All Marketplace <span className="material-symbols-outlined">shopping_bag</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
