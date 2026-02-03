'use client';

import React from 'react';
import { Logo } from './Logo';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="size-8 text-primary" />
          <h1 className="text-xl font-black tracking-tighter uppercase dark:text-white">
            Atnurmi
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#">
            Home
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#">
            Services
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#">
            Shop
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#">
            About
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-300" href="#">
            Contact
          </a>
        </div>

        <Button variant="primary" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
