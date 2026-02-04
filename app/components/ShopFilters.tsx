'use client';

import React, { useState } from 'react';

interface ShopFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  licenseType: 'all' | 'free' | 'premium';
  priceRange: number;
}

export default function ShopFilters({ onFilterChange }: ShopFiltersProps) {
  const [licenseType, setLicenseType] = useState<'all' | 'free' | 'premium'>('all');
  const [priceRange, setPriceRange] = useState(250);

  const handleApplyFilters = () => {
    onFilterChange({
      licenseType,
      priceRange,
    });
  };

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="flex flex-col gap-8 sticky top-28">
        {/* License Type */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#101618] dark:text-white mb-4">
            License Type
          </h3>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dae2e7] dark:border-white/10 p-3 flex-row-reverse cursor-pointer hover:bg-white dark:hover:bg-white/5 transition-colors">
              <input
                className="h-5 w-5 border-2 border-[#dae2e7] dark:border-white/20 bg-transparent text-primary focus:ring-0 focus:ring-offset-0"
                name="license"
                type="radio"
                checked={licenseType === 'all'}
                onChange={() => setLicenseType('all')}
              />
              <div className="flex grow flex-col">
                <p className="text-sm font-medium text-[#101618] dark:text-white">
                  All Items
                </p>
              </div>
            </label>

            <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dae2e7] dark:border-white/10 p-3 flex-row-reverse cursor-pointer hover:bg-white dark:hover:bg-white/5 transition-colors">
              <input
                className="h-5 w-5 border-2 border-[#dae2e7] dark:border-white/20 bg-transparent text-primary focus:ring-0 focus:ring-offset-0"
                name="license"
                type="radio"
                checked={licenseType === 'free'}
                onChange={() => setLicenseType('free')}
              />
              <div className="flex grow flex-col">
                <p className="text-sm font-medium text-[#101618] dark:text-white">
                  Free Access
                </p>
              </div>
            </label>

            <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dae2e7] dark:border-white/10 p-3 flex-row-reverse cursor-pointer hover:bg-white dark:hover:bg-white/5 transition-colors">
              <input
                className="h-5 w-5 border-2 border-[#dae2e7] dark:border-white/20 bg-transparent text-primary focus:ring-0 focus:ring-offset-0"
                name="license"
                type="radio"
                checked={licenseType === 'premium'}
                onChange={() => setLicenseType('premium')}
              />
              <div className="flex grow flex-col">
                <p className="text-sm font-medium text-[#101618] dark:text-white">
                  Premium Only
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#101618] dark:text-white mb-4">
            Price Range
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#5e7d8d] mb-2">
              <span>$0</span>
              <span>${priceRange}</span>
            </div>
            <input
              className="w-full h-1 bg-[#f0f3f5] dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
              type="range"
              min="0"
              max="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPriceRange(50)}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  priceRange <= 50
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-white/5 border border-[#dae2e7] dark:border-white/10 text-[#101618] dark:text-white'
                }`}
              >
                Under $50
              </button>
              <button
                onClick={() => setPriceRange(500)}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  priceRange >= 400
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-white/5 border border-[#dae2e7] dark:border-white/10 text-[#101618] dark:text-white'
                }`}
              >
                High End
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handleApplyFilters}
          className="w-full flex items-center justify-center rounded-xl h-12 bg-primary text-white font-bold transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
}
