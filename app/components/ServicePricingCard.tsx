'use client';

import React from 'react';
import { ServicePricing } from '../constants/shopData';

interface ServicePricingCardProps {
  pricing: ServicePricing;
  onSelect: (pricing: ServicePricing) => void;
}

export default function ServicePricingCard({ pricing, onSelect }: ServicePricingCardProps) {
  const displayPrice = typeof pricing.price === 'number' ? `LKR ${pricing.price.toLocaleString()}` : pricing.price;

  return (
    <div
      className={`p-6 md:p-8 rounded-2xl flex flex-col ${
        pricing.isPopular
          ? 'border-2 border-primary bg-white dark:bg-background-dark shadow-xl relative'
          : 'border border-gray-100 dark:border-[#2d3748] bg-gray-50 dark:bg-card-dark'
      }`}
    >
      {pricing.isPopular && (
        <span className="absolute -top-3 right-8 bg-primary text-white text-[10px] font-black uppercase px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      
      <h4 className="text-lg font-bold mb-1 text-[#101618] dark:text-white">{pricing.title}</h4>
      <p className="text-sm opacity-60 mb-6">{pricing.description}</p>
      
      <div className="mb-8">
        <span className="text-2xl md:text-3xl font-black text-[#101618] dark:text-white">{displayPrice}</span>
      </div>
      
      <ul className="space-y-4 mb-10 text-sm flex-grow">
        {pricing.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
            <span className="text-[#101618] dark:text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => onSelect(pricing)}
        className={`w-full py-3 md:py-4 rounded-xl font-black transition-all ${
          pricing.isPopular
            ? 'bg-primary text-white hover:opacity-90'
            : typeof pricing.price === 'string'
            ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-black hover:opacity-90'
            : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
        }`}
      >
        {typeof pricing.price === 'string' ? 'Inquire' : 'Select'}
      </button>
    </div>
  );
}
