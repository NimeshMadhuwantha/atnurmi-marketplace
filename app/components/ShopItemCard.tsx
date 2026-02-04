'use client';

import React from 'react';
import Image from 'next/image';
import { ShopItem, ShopPackage } from '../constants/shopData';

interface ShopItemCardProps {
  item: ShopItem | ShopPackage;
  onDownload: (item: ShopItem | ShopPackage) => void;
}

export default function ShopItemCard({ item, onDownload }: ShopItemCardProps) {
  const isPackage = 'itemCount' in item;
  const displayPrice = item.price === 'free' ? 'Free' : `$${item.price}`;
  const priceColor = item.price === 'free' ? 'text-green-600' : 'text-primary';

  return (
    <div className="item-card group relative flex flex-col bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-[#f0f3f5] dark:border-white/10 transition-shadow hover:shadow-lg">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        {/* Premium Badge */}
        {item.isPremium && (
          <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-1.5 shadow-md">
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        )}

        {/* Package Badge */}
        {isPackage && (
          <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {(item as ShopPackage).itemCount}+ Items
          </div>
        )}

        {/* Image */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          <div className="text-gray-400 dark:text-gray-600 text-center p-8">
            <svg
              className="w-20 h-20 mx-auto mb-2"
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
            <p className="text-sm font-medium">{item.title}</p>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="hover-overlay absolute inset-0 bg-[#101618]/60 flex flex-col items-center justify-center gap-3 opacity-0 transition-opacity duration-300">
          <button
            onClick={() => onDownload(item)}
            className="bg-white text-[#101618] font-bold px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </button>
          <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-5 py-2 rounded-full hover:bg-white/40 transition-colors text-sm">
            Preview
          </button>
        </div>
      </div>

      <div className="p-4 flex justify-between items-start">
        <div>
          <h4 className="font-bold text-base text-[#101618] dark:text-white">
            {item.title}
          </h4>
          <p className="text-xs text-[#5e7d8d]">
            {isPackage
              ? `${(item as ShopPackage).category.charAt(0).toUpperCase() + (item as ShopPackage).category.slice(1)} Package`
              : Array.isArray((item as ShopItem).category)
              ? (item as ShopItem).category
                  .map((cat) => cat.charAt(0).toUpperCase() + cat.slice(1))
                  .join(', ')
              : (item as ShopItem).category}
          </p>
        </div>
        <span className={`font-bold ${priceColor}`}>{displayPrice}</span>
      </div>
    </div>
  );
}
