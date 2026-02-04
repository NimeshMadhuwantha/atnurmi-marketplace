'use client';

import React from 'react';

interface ServiceDigitalShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  ctaText?: string;
  onCTA?: () => void;
}

export default function ServiceDigitalShowcase({
  title,
  subtitle,
  description,
  features,
  ctaText = 'Inquire Digital Piece',
  onCTA,
}: ServiceDigitalShowcaseProps) {
  return (
    <section className="py-16 md:py-24 bg-background-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-3xl blur opacity-30"></div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-700 to-gray-800">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 mx-auto mb-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-black uppercase tracking-widest text-xs md:text-sm mb-4 block">
              {subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-none">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-light mb-8 md:mb-12 leading-relaxed">
              {description}
            </p>

            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 md:gap-6">
                  <div className="size-12 md:size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm md:text-base text-slate-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {onCTA && (
              <button
                onClick={onCTA}
                className="mt-8 md:mt-12 px-8 md:px-10 py-3 md:py-4 bg-primary rounded-xl font-black hover:scale-105 transition-transform text-sm md:text-base"
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
