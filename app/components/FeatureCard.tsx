import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-[16px] shadow-sm border border-gray-100 dark:border-gray-700">
      <span className="material-symbols-outlined text-primary text-4xl mb-4">
        {icon}
      </span>
      <h4 className="font-bold text-lg mb-2 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
