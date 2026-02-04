'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  showBackButton?: boolean;
  categoryId?: string;
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
  showBackButton = false,
  categoryId,
}: ServiceHeroProps) {
  const router = useRouter();

  const handleBackClick = () => {
    if (categoryId) {
      router.push(`/services?category=${categoryId}`);
    } else {
      router.push('/services');
    }
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      <div className="relative h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center items-start text-white">
        {showBackButton && (
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-sm md:text-base font-semibold text-white/60 hover:text-white transition-colors mb-6 group"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Categories
          </button>
        )}
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
