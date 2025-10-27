import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[86vh] flex items-stretch">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center">
        <div className="max-w-2xl py-16 md:py-24">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-medium mb-5">
            <Star size={14} className="text-yellow-400" />
            Capturing timeless moments with modern artistry
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            George’s Visual Moments
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A premium photography experience for brands, weddings, portraits and events. Explore galleries, book sessions, and receive your images through a beautiful delivery system.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
            >
              Book a Session
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
