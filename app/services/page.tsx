import React, { Suspense } from 'react';
import ServicesContent from './ServicesContent';

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading services...</p>
        </div>
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}
