import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9-XPVrkzAiSAVbERbRg5lH-Bgdrv84tQuR2KwdUe_G1_6BoukT85NqSmJ5nNjs-ldH0wH0E-Ercaur4S8FdRJmrKcQYtQsu8bJ3ToVOfjGMH8jICHUKqLDSSu8hjqYk_j2Ncwz3KTp9qagrDj4VfIjBvnyCRaEHkeNXMWvZpvECGQqWohixN00ZXPc_WD-A7EqtUfo_oLv-OPSm8v6Gd6SYvQzSwfi-MNwHifpBuudLxihUyAKd33bH5NSiWxTFo2t_zSrQ39GtwG')" }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
          Atnurmi — Art, UI/UX <br className="hidden md:block" /> &amp; Web Design Studio
        </h2>
        <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Elevating brands through high-impact visual storytelling and pixel-perfect digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="ghost" size="md" className="transform hover:-translate-y-1">
            Explore Our Work
          </Button>
          <Button variant="secondary" size="md" className="transform hover:-translate-y-1">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
