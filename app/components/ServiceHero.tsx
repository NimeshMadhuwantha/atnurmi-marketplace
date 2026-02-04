'use client';

import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaPrimary = 'Explore Pricing',
  ctaSecondary = 'View Archive',
  onPrimaryCTA,
  onSecondaryCTA,
}: ServiceHeroProps) {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      <div className="relative h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center items-start text-white">
        <span className="inline-block px-4 py-1 bg-primary text-[10px] font-black tracking-[0.2em] uppercase rounded mb-6">
          {subtitle}
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-none max-w-4xl">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-xl opacity-90 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onPrimaryCTA}
            className="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-primary hover:text-white transition-all"
          >
            {ctaPrimary}
          </button>
          <button
            onClick={onSecondaryCTA}
            className="border border-white/40 backdrop-blur-md px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-white/10 transition-all"
          >
            {ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
