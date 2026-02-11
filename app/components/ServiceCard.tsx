import React from 'react';
import { MdArrowForward } from 'react-icons/md';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image, link = "#" }) => {
  return (
    <div className="group relative bg-gray-50 dark:bg-gray-900 rounded-[16px] hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-800 overflow-hidden">
      {/* Background Image Layer - Full Cover Top */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 opacity-90 dark:opacity-10 bg-cover bg-center pointer-events-none rounded-t-[16px]"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundBlendMode: 'multiply'
        }}
      />
      
      <div className="relative z-10 p-8 pt-32">
        <div className="w-14 h-14 bg-white text-primary rounded-[16px] flex items-center justify-center mb-3 border border-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
        <a 
          className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all" 
          href={link}
        >
          Explore <MdArrowForward className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
