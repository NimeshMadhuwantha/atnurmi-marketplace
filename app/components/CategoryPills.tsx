'use client';

import React from 'react';

interface Category {
  id: string;
  label: string;
}

interface CategoryPillsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryPills({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pb-2">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-colors border ${
              isActive
                ? 'bg-primary text-white shadow-md shadow-primary/20 border-primary'
                : 'bg-white dark:bg-white/5 border-[#dae2e7] dark:border-white/10 cursor-pointer'
            }`}
          >
            <p
              className={`text-sm font-medium whitespace-nowrap ${
                isActive ? 'text-white' : 'text-[#101618] dark:text-white'
              }`}
            >
              {category.label}
            </p>
          </button>
        );
      })}
    </div>
  );
}
