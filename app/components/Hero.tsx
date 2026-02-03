import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6 md:mb-8">
          Atnurmi — Art, UI/UX <br className="hidden md:block" /> &amp; Web Design Studio
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
          Elevating brands through high-impact visual storytelling and pixel-perfect digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <Button variant="ghost" size="md" className="transform hover:-translate-y-1 w-full sm:w-auto">
            Explore Our Work
          </Button>
          <Button variant="secondary" size="md" className="transform hover:-translate-y-1 w-full sm:w-auto">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
