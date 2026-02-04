'use client';

import React from 'react';
import Link from 'next/link';

export default function CustomAssetsCTA() {
  return (
    <section className="mt-32 mb-10 overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-[#dae2e7] dark:border-white/10 relative">
      <div className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight text-[#101618] dark:text-white">
            Need custom assets?
          </h2>
          <p className="text-xl font-light text-[#5e7d8d] dark:text-gray-400">
            Our studio designers can collaborate with you to create bespoke illustrations,
            UI components, and brand assets tailored to your vision.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 flex items-center justify-center gap-3 bg-primary text-white font-bold py-5 px-10 rounded-full shadow-xl shadow-primary/30 hover:shadow-none hover:translate-y-1 transition-all"
        >
          Contact Our Studio
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
