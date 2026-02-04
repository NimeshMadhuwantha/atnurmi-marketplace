'use client';

import React from 'react';

interface ShopSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ShopSearch({ searchQuery, onSearchChange }: ShopSearchProps) {
  return (
    <div className="w-full">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-light mb-8 text-[#101618] dark:text-white leading-tight">
          Curated Digital Assets <br />
          <span className="font-bold">for the Modern Creator</span>
        </h1>
        <label className="flex flex-col w-full">
          <div className="flex w-full items-stretch rounded-xl h-14 bg-white dark:bg-white/5 border border-[#dae2e7] dark:border-white/10 shadow-sm overflow-hidden transition-all focus-within:ring-2 focus-within:ring-primary/20">
            <div className="text-[#5e7d8d] flex items-center justify-center px-5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="flex w-full border-none bg-transparent focus:outline-0 focus:ring-0 text-[#101618] dark:text-white placeholder:text-[#5e7d8d] text-lg font-light leading-normal px-4"
              placeholder="Search icons, UI kits, graphics..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </label>
      </div>
    </div>
  );
}
