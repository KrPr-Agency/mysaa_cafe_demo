import React from 'react';
import { CAFE_DATA, CafeConfig } from '../data/cafe';
import { Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  config?: CafeConfig;
}

export const Footer: React.FC<FooterProps> = ({ config = CAFE_DATA }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14110F] text-[#FAF8F5] pt-20 pb-12 border-t border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F5]/10">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif text-3xl text-[#FAF8F5]">
              {config.name}
            </h3>
            <p className="text-sm text-[#FAF8F5]/65 max-w-xs leading-relaxed">
              {config.neighborhood}, {config.city}. Artisanal coffee, all-day brunch, and slow moments.
            </p>
            <div className="pt-2">
              <a
                href={config.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B07D48] hover:text-[#FAF8F5] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{config.contact.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B07D48] font-semibold">
              Explore
            </p>
            <nav className="flex flex-col space-y-2.5 text-sm text-[#FAF8F5]/75">
              <a href="#experience" className="hover:text-[#FAF8F5] transition-colors">Our Craft</a>
              <a href="#story" className="hover:text-[#FAF8F5] transition-colors">Philosophy</a>
              <a href="#signature" className="hover:text-[#FAF8F5] transition-colors">Signature Selection</a>
              <a href="#menu" className="hover:text-[#FAF8F5] transition-colors">Full Menu</a>
              <a href="#atmosphere" className="hover:text-[#FAF8F5] transition-colors">Atmosphere</a>
              <a href="#visit" className="hover:text-[#FAF8F5] transition-colors">Location & Hours</a>
            </nav>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B07D48] font-semibold">
              Visit
            </p>
            <div className="text-sm text-[#FAF8F5]/75 space-y-2 leading-relaxed">
              <p>{config.address.line1}</p>
              <p>{config.address.line2}</p>
              <p>{config.hours.days}: {config.hours.time}</p>
              <p className="text-[#B07D48]">{config.contact.phoneDisplay}</p>
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#FAF8F5]/60 hover:text-[#FAF8F5] transition-colors py-2 cursor-pointer group"
              aria-label="Back to top"
            >
              <span>To Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Studio Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50">
          <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Flagship digital presence crafted for hospitality by</span>
            <span className="text-[#FAF8F5]/90 font-medium">Adarsh One</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
