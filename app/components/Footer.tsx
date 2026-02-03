import React from 'react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 py-20 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="size-6 text-primary" />
              <h2 className="text-lg font-black tracking-tighter uppercase dark:text-white">
                Atnurmi
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Premium creative studio specializing in editorial art, UI/UX, and high-end digital solutions.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-bold mb-6 dark:text-white">Services</h6>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">UI/UX Design</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Graphic Arts</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Web Development</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Branding</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h6 className="font-bold mb-6 dark:text-white">Shop</h6>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Figma Kits</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Brush Packs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Wallpapers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Templates</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-bold mb-6 dark:text-white">Contact</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Stay updated with our latest releases.
            </p>
            <div className="flex gap-2">
              <input 
                className="flex-1 bg-gray-50 dark:bg-gray-800 border-none rounded-[16px] text-sm px-4 focus:ring-2 focus:ring-primary" 
                placeholder="Email" 
                type="email"
              />
              <button className="bg-primary text-white p-3 rounded-[16px] hover:bg-ocean transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400">
          <p>© 2024 Atnurmi Creative Studio. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a className="hover:text-primary" href="#">Privacy</a>
            <a className="hover:text-primary" href="#">Terms</a>
            <a className="hover:text-primary" href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
