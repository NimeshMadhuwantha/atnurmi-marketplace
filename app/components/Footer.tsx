'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { MdPublic, MdSend } from 'react-icons/md';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import logo from '@/public/images/images/logo.png';

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatusMessage(null);

    if (!formRef.current) return;

    // Rate limiting: 60 seconds cooldown
    const now = Date.now();
    const cooldownPeriod = 60000; // 1 minute
    if (now - lastSubmitTime < cooldownPeriod) {
      const remainingTime = Math.ceil((cooldownPeriod - (now - lastSubmitTime)) / 1000);
      setStatusMessage({ type: 'error', text: `Please wait ${remainingTime}s before sending another message` });
      return;
    }

    const formData = new FormData(formRef.current);
    const message = formData.get('message') as string;
    const honeypot = formData.get('website') as string;

    // Honeypot check (bot detection)
    if (honeypot) {
      setStatusMessage({ type: 'error', text: 'Invalid submission' });
      return;
    }

    // Sanitize and validate
    const sanitizedMessage = message?.trim();
    
    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      setStatusMessage({ type: 'error', text: 'Message must be at least 10 characters' });
      return;
    }

    if (sanitizedMessage.length > 1000) {
      setStatusMessage({ type: 'error', text: 'Message is too long (max 1000 characters)' });
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_1qulk9a',
        'template_sekgqur',
        formRef.current,
        'HpPR_CONvHT4as4NZ'
      );

      if (result.status === 200) {
        setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
        setLastSubmitTime(now);
        formRef.current.reset();
      }
    } catch (error: any) {
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMessage(null), 5000);
    }
  };

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 py-12 md:py-20 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Brand Section */}
          <div className="col-span-1 text-center sm:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
              <Image src={logo} alt="Atnurmi Logo" width={24} height={24} className="object-contain" />
              <h2 className="text-lg font-black tracking-tighter uppercase dark:text-white">
                Atnurmi
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Premium creative studio specializing in editorial art, UI/UX, and high-end digital solutions.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                <MdPublic className="text-lg" />
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="https://www.facebook.com/share/1Au9bmYf5Y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-lg" />
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="https://wa.me/94769963432" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h6 className="font-bold mb-4 md:mb-6 dark:text-white">Services</h6>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">UI/UX Design</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Graphic Arts</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Web Development</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Branding</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="text-center sm:text-left">
            <h6 className="font-bold mb-4 md:mb-6 dark:text-white">Shop</h6>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Figma Kits</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Brush Packs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Wallpapers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Templates</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h6 className="font-bold mb-4 md:mb-6 dark:text-white">Contact</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-6">
              Get in touch with Atnurmi. Send us a message.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              {/* Honeypot field - hidden from users, catches bots */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              
              <div className="flex gap-2 max-w-sm mx-auto sm:mx-0">
                <textarea 
                  name="message"
                  className="flex-1 bg-gray-50 dark:bg-gray-800 border-none rounded-[10px] text-sm px-4 py-3 focus:ring-2 focus:ring-primary dark:text-white resize-none min-h-[48px]" 
                  placeholder="Your message..." 
                  disabled={loading}
                  maxLength={1000}
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary text-white p-3 rounded-[12px] hover:bg-ocean transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed h-fit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <MdSend className="text-xl pl-1" />
                  )}
                </button>
              </div>
              {statusMessage && (
                <p className={`text-xs ${statusMessage.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {statusMessage.text}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-10 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 gap-4">
          <p className="text-center md:text-left">© 2025 Atnurmi Creative Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
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
