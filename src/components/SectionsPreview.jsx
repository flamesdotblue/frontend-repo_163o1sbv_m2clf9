import React from 'react';
import { Image, Users, Calendar, Mail, Star } from 'lucide-react';

export default function SectionsPreview() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card id="explore" title="Explore Galleries" icon={<Image className="text-slate-900" size={22} />}>
            Browse curated collections from weddings, portraits, lifestyle and commercial projects.
          </Card>

          <Card id="pricing" title="Transparent Pricing" icon={<Star className="text-slate-900" size={22} />}>
            Choose from flexible packages for shoots, edits and delivery. Perfect for individuals and brands.
          </Card>

          <Card id="portfolio" title="Signature Portfolio" icon={<Users className="text-slate-900" size={22} />}>
            See standout work that blends storytelling with crisp, modern aesthetics.
          </Card>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50">
            <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2" id="blog">
              Latest from the Blog
            </h3>
            <p className="mt-2 text-slate-600">
              Tips, behind-the-scenes, gear discussions and creative guidance to elevate your shoots.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <BlogTeaser title="How to pose naturally on camera" />
              <BlogTeaser title="Lighting setups for cinematic portraits" />
            </div>
          </div>

          <div id="book" className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
              <Calendar size={20} /> Book a Session
            </h3>
            <p className="mt-2 text-slate-600">Quickly request your preferred date and receive confirmation by email.</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input type="text" name="name" placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <input type="email" name="email" placeholder="Email address" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <input type="date" name="date" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <textarea name="message" placeholder="What would you like to shoot?" rows="3" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                <Mail size={18} /> Send request
              </button>
              <p className="text-xs text-slate-500">This is a preview. Full booking and email notifications will be connected to the backend.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ id, title, icon, children }) {
  return (
    <div id={id} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100">{icon}</div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm">{children}</p>
      <a href={`#${id}`} className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:underline">
        Learn more
      </a>
    </div>
  );
}

function BlogTeaser({ title }) {
  return (
    <a href="#blog" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <p className="text-xs text-slate-600 mt-1">Read more →</p>
    </a>
  );
}
