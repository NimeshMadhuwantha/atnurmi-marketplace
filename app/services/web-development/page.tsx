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

export default function WebDevelopmentPage() {
  const [selectedPricing, setSelectedPricing] = useState<ServicePricing | null>(null);

  // Filter data for this category
  const categoryPricing = servicePricing.filter(
    (item) => item.category === 'web-development'
  );
  const categoryPortfolio = servicePortfolio.filter(
    (item) => item.category === 'web-development'
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
      <ServiceBackButton categoryId="web-development" />

      {/* Hero Section */}
      <ServiceHero
        title="WEB DEVELOPMENT"
        subtitle="Digital Solutions"
        description="Build powerful, scalable web applications with modern technologies that drive your business forward."
        backgroundImage="/images/services/web-dev-hero.jpg"
        ctaPrimary="View Packages"
        ctaSecondary="Our Work"
        onPrimaryCTA={scrollToPricing}
        onSecondaryCTA={scrollToPortfolio}
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-[#0a1217]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-xs font-black text-primary tracking-[0.3em] uppercase mb-4">
              Development Packages
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#101618] dark:text-white">
              Web Development Services
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

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0a1217]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xs font-black text-primary tracking-[0.3em] uppercase mb-4">
              Tech Stack
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-[#101618] dark:text-white">
              Technologies We Use
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((tech) => (
              <div key={tech} className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-2xl font-black text-primary">{tech.charAt(0)}</span>
                </div>
                <p className="text-sm font-semibold text-[#101618] dark:text-white">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#101618] dark:text-white">Fast Performance</h4>
              <p className="text-sm opacity-70 text-[#101618] dark:text-white">
                Lightning-fast load times and optimal performance
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#101618] dark:text-white">Secure & Reliable</h4>
              <p className="text-sm opacity-70 text-[#101618] dark:text-white">
                Built with security best practices and reliability
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#101618] dark:text-white">Responsive Design</h4>
              <p className="text-sm opacity-70 text-[#101618] dark:text-white">
                Perfect experience across all devices and screens
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#101618] dark:text-white">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg md:text-xl opacity-70 mb-8 max-w-2xl mx-auto text-[#101618] dark:text-white">
            Let's create a powerful web presence for your business.
          </p>
          <button className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-black hover:scale-105 transition-transform text-sm md:text-base">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
