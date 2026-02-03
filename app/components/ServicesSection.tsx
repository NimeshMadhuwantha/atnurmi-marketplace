import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: 'desktop_windows',
    title: 'UI/UX Design',
    description: 'Modern, user-centric interfaces designed to provide seamless digital navigation.',
  },
  {
    icon: 'brush',
    title: 'Pencil Arts',
    description: 'Bespoke hand-drawn illustrations and digital paintings with artistic soul.',
  },
  {
    icon: 'auto_awesome',
    title: 'Graphic Design',
    description: 'Visual identities and branding that make a lasting impression on your audience.',
  },
  {
    icon: 'code',
    title: 'Front-end Dev',
    description: 'Clean, responsive, and performance-optimized code for modern web apps.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 dark:text-white">
          My Services
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
