import React from 'react';
import { Camera, Shield } from 'lucide-react';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-slate-900 text-white group-hover:rotate-6 transition-transform">
            <Camera size={20} />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">George’s Visual Moments</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem href="#explore">Explore</NavItem>
          <NavItem href="#pricing">Pricing</NavItem>
          <NavItem href="#portfolio">Portfolio</NavItem>
          <NavItem href="#blog">Blog</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <CalendarDot className="hidden md:block" size={18} />
            Book Now
          </a>
          <a
            href="#login"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
            title="Secure login"
          >
            <Shield size={18} />
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}

function CalendarDot(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <circle cx="12" cy="16" r="1.5"></circle>
    </svg>
  );
}
