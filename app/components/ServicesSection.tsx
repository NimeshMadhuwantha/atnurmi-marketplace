import React from 'react';
import ServiceCard from './ServiceCard';
import { MdDesktopWindows, MdBrush, MdAutoAwesome, MdCode, MdDraw } from 'react-icons/md';
import { ImDisplay } from 'react-icons/im';

const services = [
  {
    icon: <ImDisplay size={24} />,
    title: 'UI/UX Design',
    description: 'Modern, user-centric interfaces designed to provide seamless digital navigation.',
    image: '/images/images/uiux-cover.webp',
  },
  {
    icon: <MdBrush size={24} />,
    title: 'Pencil Arts',
    description: 'Bespoke hand-drawn illustrations and digital paintings with artistic soul.',
    image: '/images/images/art-cover.webp',
  },
  {
    icon: <MdAutoAwesome size={24} />,
    title: 'Graphic Design',
    description: 'Visual identities and branding that make a lasting impression on your audience.',
    image: '/images/images/graphic-cover.webp',
  },
  {
    icon: <MdCode size={24} />,
    title: 'Front-end Dev',
    description: 'Clean, responsive, and performance-optimized code for modern web apps.',
    image: '/images/images/webdev-cover.webp',
  },
  {
    icon: <MdDraw size={24} />,
    title: 'Graphic Art',
    description: 'Creative digital artwork and illustrations that bring imagination to life.',
    image: '/images/images/graphic-art.webp',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-8 md:py-12 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 dark:text-white">
          My Services
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
