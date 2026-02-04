'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface ServiceBackButtonProps {
  categoryId: string;
}

export default function ServiceBackButton({ categoryId }: ServiceBackButtonProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(`/services-page?category=${categoryId}`);
  };

  return (
    <div className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-sm md:text-base font-semibold text-[#101618] dark:text-white hover:text-primary dark:hover:text-primary transition-colors group"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Categories
        </button>
      </div>
    </div>
  );
}
