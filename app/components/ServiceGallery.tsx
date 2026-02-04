'use client';

import React from 'react';
import { ServiceGalleryItem } from '../constants/shopData';

interface ServiceGalleryProps {
  items: ServiceGalleryItem[];
}

export default function ServiceGallery({ items }: ServiceGalleryProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-xs font-black text-primary tracking-[0.4em] uppercase mb-4">
            Gallery Archives
          </h2>
          <h3 className="text-3xl md:text-4xl font-black uppercase text-[#101618] dark:text-white">
            Recent Creations
          </h3>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {items.map((item) => (
            <div key={item.id} className="break-inside-avoid mb-6 md:mb-8">
              <div className="group relative overflow-hidden rounded-2xl mb-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                <div className="aspect-[4/5] flex items-center justify-center p-8">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 text-gray-400 dark:text-gray-600"
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
                    <p className="text-xs font-medium text-gray-400 dark:text-gray-600">Gallery Item</p>
                  </div>
                </div>
              </div>
              <p className="text-xs italic text-center font-medium opacity-60 leading-relaxed px-4 md:px-6 text-[#101618] dark:text-white">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
