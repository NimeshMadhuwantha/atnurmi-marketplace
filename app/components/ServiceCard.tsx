import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link = "#" }) => {
  return (
    <div className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-[16px] hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
      <div className="w-14 h-14 bg-primary/10 text-primary rounded-[16px] flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>
      <a 
        className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all" 
        href={link}
      >
        Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </div>
  );
};

export default ServiceCard;
