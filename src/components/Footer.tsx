import React from 'react';
import { Phone, MapPin, Navigation, Star, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090a0d] border-t border-[#1d1f28] text-[#a69e90] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1c1e28]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-wider text-[#f5ebd9] hover:text-[#d4af37] transition-colors">
                {RESTAURANT_INFO.name}
              </span>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#a59a86] font-medium mt-0.5">
                City Center Mall · Patna
              </div>
            </a>

            <p className="text-xs text-[#b0a89a] leading-relaxed max-w-sm">
              Discover the story behind every bite. Enjoy authentic North Indian cuisine, clay-oven tandoori specialties, and multi-cuisine culinary art in an elegant setting.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#dcd6c8]">
              <div className="flex text-[#e5c158]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#e5c158]" />
                ))}
              </div>
              <span className="font-semibold text-[#f5ebd9] tabular-nums">4.5 / 5</span>
              <span className="text-[#888174]">· 418 Reviews (Owner-reported)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#f3eee5] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#f3eee5] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Our Menu</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#f3eee5] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#f3eee5] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Google Reviews</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#f3eee5] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Table Inquiries</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#c7c0b3]">
                  {RESTAURANT_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-[#f0ebe0] hover:text-[#d4af37] font-medium transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#ede8dc] bg-[#161822] hover:bg-[#20222f] border border-[#2b2e3e] rounded transition-colors"
                >
                  <Navigation className="w-3 h-3 text-[#d4af37]" />
                  <span>Open Official Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7d776b]">
          <p>© {currentYear} {RESTAURANT_INFO.name}, Patna. All rights reserved.</p>
          <p className="text-center sm:text-right">
            2nd Floor, City Center Mall, Lodipur, Patna, Bihar 800001
          </p>
        </div>
      </div>
    </footer>
  );
};
