import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h4 className="text-slate-900 font-semibold">George’s Visual Moments</h4>
          <p className="text-sm text-slate-600 mt-1 max-w-md">
            Modern, minimalist photography crafted with care. Weddings, portraits, brands, and more.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="mailto:george.ndungu.279@gmail.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <Mail size={18} /> Email
          </a>
          <a href="tel:+0000000000" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <Phone size={18} /> Call
          </a>
          <div className="w-px h-5 bg-slate-300" />
          <a href="#instagram" aria-label="Instagram" className="text-slate-700 hover:text-slate-900">
            <Instagram size={20} />
          </a>
          <a href="#facebook" aria-label="Facebook" className="text-slate-700 hover:text-slate-900">
            <Facebook size={20} />
          </a>
          <a href="#twitter" aria-label="Twitter" className="text-slate-700 hover:text-slate-900">
            <Twitter size={20} />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} George’s Visual Moments. All rights reserved.</div>
    </footer>
  );
}
