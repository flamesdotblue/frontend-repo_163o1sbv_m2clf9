import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionsPreview from './components/SectionsPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SectionsPreview />
      </main>
      <Footer />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Us</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              George’s Visual Moments blends creative vision with technical precision to craft images that feel authentic and unforgettable. From intimate weddings to bold brand stories, we focus on natural emotion, clean composition and elevated post-production.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              The platform is designed for a seamless experience — clients can review and download galleries, leave testimonials, and manage bookings, while photographers and admins handle delivery and approvals with ease.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="relative z-10 h-full w-full grid place-items-center">
              <div className="text-center">
                <div className="text-5xl">📷</div>
                <p className="mt-2 text-sm text-slate-600">Modern, minimalist photography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
