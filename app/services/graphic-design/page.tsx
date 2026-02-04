'use client';

import React, { useState } from 'react';
import ServiceHero from '../../components/ServiceHero';
import ServicePricingCard from '../../components/ServicePricingCard';
import ServicePortfolioSection from '../../components/ServicePortfolioSection';
import ServiceBackButton from '../../components/ServiceBackButton';
import {
  servicePricing,
  servicePortfolio,
  ServicePricing,
} from '../../constants/shopData';

export default function GraphicDesignPage() {
  const [selectedPricing, setSelectedPricing] = useState<ServicePricing | null>(null);

  // Filter data for this category
  const categoryPricing = servicePricing.filter(
    (item) => item.category === 'graphic-design'
  );
  const categoryPortfolio = servicePortfolio.filter(
    (item) => item.category === 'graphic-design'
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
      {/* Back Button */}
      <ServiceBackButton categoryId="graphic-design" />

      {/* Hero Section */}
      <ServiceHero
        title="GRAPHIC DESIGN EXCELLENCE"
        subtitle="Creative Solutions"
        description="Transform your brand with stunning visual designs that captivate and communicate your unique story to the world."
        backgroundImage="/images/services/graphic-design-hero.jpg"
        ctaPrimary="View Packages"
        ctaSecondary="See Portfolio"
        onPrimaryCTA={scrollToPricing}
        onSecondaryCTA={scrollToPortfolio}
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-[#0a1217]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-xs font-black text-primary tracking-[0.3em] uppercase mb-4">
              Design Packages
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#101618] dark:text-white">
              Graphic Design Services
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#101618] dark:text-white">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg md:text-xl opacity-70 mb-8 max-w-2xl mx-auto text-[#101618] dark:text-white">
            Let's create something extraordinary together. Contact us to discuss your project.
          </p>
          <button className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black hover:scale-105 transition-transform text-sm md:text-base">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
