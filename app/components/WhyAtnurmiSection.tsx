import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: 'verified',
    title: 'Premium Quality',
    description: 'Exceptional attention to detail in every pixel and brushstroke.',
  },
  {
    icon: 'schedule',
    title: 'Timely Delivery',
    description: 'Reliable project management ensuring deadlines are always met.',
  },
  {
    icon: 'psychology',
    title: 'Strategic Thinking',
    description: 'Creative solutions that align perfectly with your business goals.',
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Support',
    description: 'Direct communication and ongoing assistance after project launch.',
  },
];

const WhyAtnurmiSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/40 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 dark:text-white">
          Why Atnurmi?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Commitment to quality and innovation in every single project.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyAtnurmiSection;
