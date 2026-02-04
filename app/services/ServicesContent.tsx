'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { serviceCategories } from '../constants/shopData';
import Image from 'next/image';

// Image mapping for each category
const categoryImages: Record<string, string> = {
  'art-and-creation': '/images/images/art-cover.webp',
  'graphic-design': '/images/images/graphic-cover.webp',
  'uiux-design': '/images/images/uiux-cover.webp',
  'web-development': '/images/images/webdev-cover.webp',
};

export default function ServicesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('art-and-creation');

  // Update active category from URL params
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && serviceCategories.some(cat => cat.id === categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    router.push(`/services/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-black tracking-[0.2em] uppercase rounded mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-none text-[#101618] dark:text-white">
              WHAT WE OFFER
            </h1>
            <p className="text-lg md:text-xl font-light opacity-70 max-w-3xl mx-auto leading-relaxed text-[#101618] dark:text-white">
              From traditional art to cutting-edge digital solutions, we bring your creative visions to life with precision and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 z-40 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-[#101618] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 transition-all duration-700 ease-out group-hover:scale-[1.02] shadow-lg group-hover:shadow-2xl">
                  {/* Background Image */}
                  <Image
                    src={categoryImages[category.id]}
                    alt={category.label}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase">
                      {category.label}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explore {category.label.toLowerCase()} services
                  </p>
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#101618] dark:text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl opacity-70 mb-8 max-w-2xl mx-auto text-[#101618] dark:text-white">
            Let's collaborate to bring your creative vision to reality. Get in touch with us today.
          </p>
          <button className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black hover:scale-105 transition-transform text-sm md:text-base">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
