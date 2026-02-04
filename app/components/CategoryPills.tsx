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
    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${
              isActive
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white dark:bg-white/5 border border-[#dae2e7] dark:border-white/10 hover:border-primary cursor-pointer'
            }`}
          >
            <p
              className={`text-sm font-medium ${
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
