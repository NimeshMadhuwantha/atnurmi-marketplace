'use client';

import React from 'react';
import { ServicePortfolioItem } from '../constants/shopData';

interface ServicePortfolioSectionProps {
  items: ServicePortfolioItem[];
}

export default function ServicePortfolioSection({ items }: ServicePortfolioSectionProps) {
  if (items.length === 0) return null;

  const mainItem = items[0];
  const detailItems = items.slice(1, 3);

  return (
    <section className="py-16 md:py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Portfolio Item */}
        {mainItem && (
          <div className="mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                {mainItem.title}
              </h2>
              <p className="text-lg md:text-xl font-light opacity-70 mb-8 leading-relaxed">
                {mainItem.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Placeholder detail images */}
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400 dark:text-gray-600"
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
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400 dark:text-gray-600"
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
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-gray-400 dark:text-gray-600"
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
                  <p className="text-sm font-medium text-gray-400 dark:text-gray-600">{mainItem.title}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Portfolio Items */}
        {detailItems.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {detailItems.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 md:mb-8 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <svg
                        className="w-20 h-20 mx-auto mb-2 text-gray-400 dark:text-gray-600"
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
                      <p className="text-sm font-medium text-gray-400 dark:text-gray-600">{item.title}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase text-[#101618] dark:text-white">
                  {item.title}
                </h3>
                <p className="opacity-70 font-light leading-relaxed text-[#101618] dark:text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
