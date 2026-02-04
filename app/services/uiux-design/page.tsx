'use client';

import React, { useState } from 'react';
import ServiceHero from '../../components/ServiceHero';
import ServicePricingCard from '../../components/ServicePricingCard';
import ServicePortfolioSection from '../../components/ServicePortfolioSection';
import {
  servicePricing,
  servicePortfolio,
  ServicePricing,
} from '../../constants/shopData';

export default function UIUXDesignPage() {
  const [selectedPricing, setSelectedPricing] = useState<ServicePricing | null>(null);

  // Filter data for this category
  const categoryPricing = servicePricing.filter(
    (item) => item.category === 'uiux-design'
  );
  const categoryPortfolio = servicePortfolio.filter(
    (item) => item.category === 'uiux-design'
  );

  const handlePricingSelect = (pricing: ServicePricing) => {
    setSelectedPricing(pricing);
    console.log('Selected pricing:', pricing);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="UI/UX DESIGN MASTERY"
        subtitle="User Experience"
        description="Craft intuitive and beautiful digital experiences that delight users and drive engagement through thoughtful design."
        backgroundImage="/images/services/uiux-hero.jpg"
        ctaPrimary="Explore Pricing"
        ctaSecondary="View Work"
        onPrimaryCTA={scrollToPricing}
        onSecondaryCTA={scrollToPortfolio}
        showBackButton={true}
        categoryId="uiux-design"
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-[#0a1217]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-xs font-black text-primary tracking-[0.3em] uppercase mb-4">
              Design Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#101618] dark:text-white">
              UI/UX Design Services
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPricing.map((pricing) => (
              <ServicePricingCard
                key={pricing.id}
                pricing={pricing}
                onSelect={handlePricingSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <div id="portfolio">
        <ServicePortfolioSection items={categoryPortfolio} />
      </div>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#101618] dark:text-white">
              Our Design Process
            </h2>
            <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto text-[#101618] dark:text-white">
              A proven methodology that ensures exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-2xl">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#101618] dark:text-white">Research</h4>
              <p className="text-sm opacity-70 text-[#101618] dark:text-white">
                Understanding your users and business goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-2xl">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#101618] dark:text-white">Design</h4>
              <p className="text-sm opacity-70 text-[#101618] dark:text-white">
                Creating beautiful and functional interfaces
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-2xl">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#101618] dark:text-white">Refine</h4>
              <p className="text-sm opacity-70 text-[#101618] dark:text-white">
                Testing and iterating for perfection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#101618] dark:text-white">
            Let's Design Something Amazing
          </h2>
          <p className="text-lg md:text-xl opacity-70 mb-8 max-w-2xl mx-auto text-[#101618] dark:text-white">
            Transform your digital product with exceptional UI/UX design.
          </p>
          <button className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black hover:scale-105 transition-transform text-sm md:text-base">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
