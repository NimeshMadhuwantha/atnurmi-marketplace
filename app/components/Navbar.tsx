'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo className="size-8 text-primary" />
          <h1 className="text-xl font-black tracking-tighter uppercase dark:text-white">
            Atnurmi
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="/home">
            Home
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#services">
            Services
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="/shop">
            Shop
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#about">
            About
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#contact">
            Contact
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <a 
              className="block text-base font-semibold hover:text-primary transition-colors dark:text-gray-300 py-2" 
              href="/home"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a 
              className="block text-base font-semibold hover:text-primary transition-colors dark:text-gray-300 py-2" 
              href="#services"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a 
              className="block text-base font-semibold hover:text-primary transition-colors dark:text-gray-300 py-2" 
              href="/shop"
              onClick={toggleMobileMenu}
            >
              Shop
            </a>
            <a 
              className="block text-base font-semibold hover:text-primary transition-colors dark:text-gray-300 py-2" 
              href="#about"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a 
              className="block text-base font-semibold hover:text-primary transition-colors dark:text-gray-300 py-2" 
              href="#contact"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <div className="pt-4">
              <Button variant="primary" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
