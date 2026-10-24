import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Car, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#111218] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2">
            Find Us in Patna
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#fbf7ed]">
            Location & Directions
          </h2>
          <p className="mt-4 text-base text-[#cfc7b8] leading-relaxed">
            Conveniently situated inside City Center Mall, one of Patna's premier retail and leisure destinations.
          </p>
        </div>

        {/* Content Box: Map + Info Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Address, Directions, and Access Details */}
          <div className="lg:col-span-5 bg-[#161822] rounded-xl border border-[#2b2e3e] p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Official Address</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#f5ebd9] leading-snug">
                The Delhi Story
              </h3>

              <p className="mt-3 text-sm text-[#d4cdc0] leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>

              {/* Action Buttons for Location */}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-white bg-[#831828] hover:bg-[#9d1c31] border border-[#ab2239] rounded-md transition-all shadow-md group"
                >
                  <Navigation className="w-4 h-4 text-[#f5ebd9] group-hover:scale-110 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#dad3c5] hover:text-white bg-[#1f212d] hover:bg-[#282b3a] border border-[#373a4b] rounded-md transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Open in Maps</span>
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#dad3c5] hover:text-white bg-[#1f212d] hover:bg-[#282b3a] border border-[#373a4b] rounded-md transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mall Amenities & Visiting Information */}
              <div className="mt-8 pt-6 border-t border-[#252837] space-y-4 text-xs text-[#a8a092]">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#ede8dc]">Mall Parking Available: </span>
                    Underground and multi-level parking is accessible directly at City Center Mall.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#ede8dc]">Mall Dining Hours: </span>
                    {RESTAURANT_INFO.openingHoursNote}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#232533] text-[11px] text-[#857e72]">
              Landmark: Christian Colony / Chajju Bagh area, Lodipur, Central Patna.
            </div>
          </div>

          {/* Column 2: Google Maps Responsive Embed */}
          <div className="lg:col-span-7 bg-[#161822] rounded-xl border border-[#2b2e3e] overflow-hidden min-h-[360px] lg:min-h-full relative shadow-xl">
            <iframe
              title="The Delhi Story Location at City Center Mall, Patna"
              src={RESTAURANT_INFO.googleMapsEmbedUrl}
              className="w-full h-full min-h-[400px] border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Direct overlay indicator */}
            <div className="absolute top-4 left-4 bg-[#121319]/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-[#2f3242] text-[11px] text-[#f5ebd9] shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5c158]" />
              <span>City Center Mall, 2nd Floor · Patna</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
