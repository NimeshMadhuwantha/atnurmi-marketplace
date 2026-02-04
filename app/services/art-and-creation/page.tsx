'use client';

import React, { useState } from 'react';
import ServiceHero from '../../components/ServiceHero';
import ServicePricingCard from '../../components/ServicePricingCard';
import ServicePortfolioSection from '../../components/ServicePortfolioSection';
import ServiceDigitalShowcase from '../../components/ServiceDigitalShowcase';
import ServiceGallery from '../../components/ServiceGallery';
import {
  servicePricing,
  servicePortfolio,
  serviceGallery,
  ServicePricing,
} from '../../constants/shopData';

export default function ArtAndCreationPage() {
  const [selectedPricing, setSelectedPricing] = useState<ServicePricing | null>(null);

  // Filter data for this category
  const categoryPricing = servicePricing.filter(
    (item) => item.category === 'art-and-creation'
  );
  const categoryPortfolio = servicePortfolio.filter(
    (item) => item.category === 'art-and-creation'
  );
  const categoryGallery = serviceGallery.filter(
    (item) => item.category === 'art-and-creation'
  );

  const handlePricingSelect = (pricing: ServicePricing) => {
    setSelectedPricing(pricing);
    console.log('Selected pricing:', pricing);
    // You can add modal or navigation logic here
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const digitalFeatures = [
    {
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      title: 'Infinite Precision',
      description: 'Brushstrokes that adapt to 8K resolution for large-scale immersive print displays.',
    },
    {
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      title: 'Dynamic Lighting',
      description: 'Expert use of sub-surface scattering and color grading to bring digital skin to life.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="PENCIL ARTS SHOWCASE"
        subtitle="Master Portfolio"
        description="Exquisite graphite portraits and digital masterpieces crafted with museum-grade precision for the discerning collector."
        backgroundImage="/images/services/art-hero.jpg"
        ctaPrimary="Explore Pricing"
        ctaSecondary="View Archive"
        onPrimaryCTA={scrollToPricing}
        onSecondaryCTA={scrollToPortfolio}
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-[#0a1217]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-xs font-black text-primary tracking-[0.3em] uppercase mb-4">
              Investment Tiers
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#101618] dark:text-white">
              Commission Services
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Digital Realm Section */}
      <ServiceDigitalShowcase
        title="The Digital Realm"
        subtitle="New Media"
        description="Fusing traditional drawing techniques with high-end digital sculpting. Our digital pieces offer limitless scalability and vibrant cinematic lighting."
        features={digitalFeatures}
        ctaText="Inquire Digital Piece"
        onCTA={() => console.log('Digital CTA clicked')}
      />

      {/* Gallery Section */}
      <ServiceGallery items={categoryGallery} />
    </div>
  );
}
