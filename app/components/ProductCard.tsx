import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string | number;
  isPremium?: boolean;
  isFree?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  description, 
  price, 
  isPremium = false,
  isFree = false 
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-[16px] mb-6 bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
        <div 
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
          style={{ backgroundImage: `url('${image}')` }}
        />
        {isPremium && (
          <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Premium
          </div>
        )}
        {isFree && (
          <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Free
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-bold dark:text-white">{title}</h4>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <p className={`font-black ${isFree ? 'text-emerald-500' : 'text-primary'}`}>
          {typeof price === 'number' ? `$${price}` : price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
