import React from 'react';
import { Star, ExternalLink, MessageSquarePlus, ShieldCheck, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#111218] border-t border-[#232530] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Customer Feedback & Ratings</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#fbf7ed]">
            Google Reviews & Reputation
          </h2>
          <p className="mt-4 text-base text-[#cfc7b8] leading-relaxed">
            Real guest experiences from Patna food lovers and diners who have visited The Delhi Story at City Center Mall.
          </p>
        </div>

        {/* Authentic Google-Inspired Rating Hub */}
        <div className="mt-12 max-w-3xl mx-auto bg-[#171922] rounded-xl border border-[#2f3242] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#292c3a]">
            {/* Rating Metric Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-1">
                {/* Official Google 'G' styling */}
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">
                  G
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#bcb3a3]">
                  Google Business Profile
                </span>
              </div>

              <div className="flex items-baseline gap-3 mt-2">
                <span className="font-display text-5xl sm:text-6xl font-bold text-[#f5ebd9] tabular-nums">
                  4.5
                </span>
                <div className="flex flex-col">
                  <div className="flex text-[#f5b300]">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#f5b300]" />
                    ))}
                    {/* Half star visual */}
                    <div className="relative">
                      <Star className="w-5 h-5 text-[#3e4254]" />
                      <div className="absolute inset-0 overflow-hidden w-1/2">
                        <Star className="w-5 h-5 fill-[#f5b300] text-[#f5b300]" />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#a69e90] mt-1 tabular-nums">
                    out of 5.0 stars
                  </span>
                </div>
              </div>

              <div className="mt-2 text-sm font-medium text-[#d9d2c5]">
                Based on <span className="text-[#f5ebd9] font-bold tabular-nums">418</span> Customer Reviews
              </div>
            </div>

            {/* Direct Google Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#831828] hover:bg-[#9d1d32] border border-[#a6233a] rounded-md transition-all shadow-md group"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#f5ebd9] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-[#ded7c9] hover:text-white bg-[#20222d] hover:bg-[#2b2d3c] border border-[#393d4e] rounded-md transition-all"
              >
                <MessageSquarePlus className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Write a Google Review</span>
              </a>
            </div>
          </div>

          {/* Transparent Attribution Notice */}
          <div className="mt-6 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9d9587]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>The Delhi Story · City Center Mall, Chajju Bagh, Patna 800001</span>
            </div>
            <div className="italic text-[11px] text-[#867f73]">
              *Owner-supplied score. Live verification available on Google Maps.
            </div>
          </div>
        </div>

        {/* Why Diners Visit Us Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-lg bg-[#14161e] border border-[#262835] text-center">
            <div className="text-2xl mb-2">✨</div>
            <h3 className="font-display text-base font-semibold text-[#f5ebd9]">Inviting Ambience</h3>
            <p className="mt-1.5 text-xs text-[#a8a092] leading-relaxed">
              Warm mood lighting and comfortable booth seating suited for relaxed family dinners and gatherings.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#14161e] border border-[#262835] text-center">
            <div className="text-2xl mb-2">🥘</div>
            <h3 className="font-display text-base font-semibold text-[#f5ebd9]">Rich North Indian Flavours</h3>
            <p className="mt-1.5 text-xs text-[#a8a092] leading-relaxed">
              Authentic clay oven tandoori roasts, overnight Dal Makhani, and fragrant dum biryanis.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#14161e] border border-[#262835] text-center">
            <div className="text-2xl mb-2">🏙️</div>
            <h3 className="font-display text-base font-semibold text-[#f5ebd9]">City Center Mall Hub</h3>
            <p className="mt-1.5 text-xs text-[#a8a092] leading-relaxed">
              Convenient 2nd floor location with parking, elevator access, and prime retail convenience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
