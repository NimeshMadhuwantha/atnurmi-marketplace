import React from 'react';
import Button from './Button';

const CTASection: React.FC = () => {
  return (
    <section className="px-6 lg:px-20 mb-24">
      <div className="bg-ocean dark:bg-primary rounded-[16px] py-20 px-10 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Let's create something beautiful
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">
            Join dozens of high-end brands that trust Atnurmi for their creative needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ghost" size="lg" className="shadow-xl">
              Start Your Project
            </Button>
            <button className="bg-ocean-dark border-2 border-white/30 text-white px-12 py-5 rounded-[16px] font-bold text-lg hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
