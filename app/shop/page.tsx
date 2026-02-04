'use client';

import React, { useState, useMemo } from 'react';
import ShopSearch from '../components/ShopSearch';
import CategoryPills from '../components/CategoryPills';
import ShopFilters, { FilterState } from '../components/ShopFilters';
import ShopItemCard from '../components/ShopItemCard';
import Pagination from '../components/Pagination';
import PremiumModal from '../components/PremiumModal';
import CustomAssetsCTA from '../components/CustomAssetsCTA';
import {
  categories,
  shopItems,
  shopPackages,
  itemsPerPage,
  ShopItem,
  ShopPackage,
} from '../constants/shopData';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState<FilterState>({
    licenseType: 'all',
    priceRange: 250,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [premiumModal, setPremiumModal] = useState<{
    isOpen: boolean;
    itemTitle: string;
  }>({
    isOpen: false,
    itemTitle: '',
  });

  // Combine items and packages
  const allProducts = useMemo(() => {
    return [...shopItems, ...shopPackages];
  }, []);

  // Filter products based on search, category, and filters
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter((item) => {
        if ('itemCount' in item) {
          // Package
          return (item as ShopPackage).category === activeCategory;
        } else {
          // Regular item
          return (item as ShopItem).category.includes(activeCategory);
        }
      });
    }

    // License type filter
    if (filters.licenseType === 'free') {
      filtered = filtered.filter((item) => item.price === 'free');
    } else if (filters.licenseType === 'premium') {
      filtered = filtered.filter((item) => item.isPremium);
    }

    // Price range filter
    filtered = filtered.filter((item) => {
      if (item.price === 'free') return true;
      return item.price <= filters.priceRange;
    });

    return filtered;
  }, [allProducts, searchQuery, activeCategory, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, filters]);

  const handleDownload = (item: ShopItem | ShopPackage) => {
    if (item.isPremium) {
      setPremiumModal({
        isOpen: true,
        itemTitle: item.title,
      });
    } else {
      // Handle free download
      console.log('Downloading:', item.title);
      // In a real app, trigger download here
      alert(`Downloading ${item.title}...`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-20 py-10">
        {/* Search & Categories Section */}
        <div className="flex flex-col gap-8 mb-12">
          <ShopSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <CategoryPills
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <ShopFilters onFilterChange={setFilters} />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-[#5e7d8d]">
                Showing {paginatedProducts.length} of {filteredProducts.length} results
              </p>
            </div>

            {/* Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
                  {paginatedProducts.map((item) => (
                    <ShopItemCard key={item.id} item={item} onDownload={handleDownload} />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-20">
                <svg
                  className="w-24 h-24 mx-auto mb-6 text-[#dae2e7] dark:text-white/10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-[#101618] dark:text-white mb-2">
                  No items found
                </h3>
                <p className="text-[#5e7d8d] mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setFilters({ licenseType: 'all', priceRange: 250 });
                  }}
                  className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:shadow-lg transition-shadow"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Custom Assets CTA */}
        <CustomAssetsCTA />
      </main>

      {/* Premium Modal */}
      <PremiumModal
        isOpen={premiumModal.isOpen}
        itemTitle={premiumModal.itemTitle}
        onClose={() => setPremiumModal({ isOpen: false, itemTitle: '' })}
      />
    </div>
  );
}
