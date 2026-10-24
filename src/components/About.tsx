import React from 'react';
import { Sparkles, Users, Utensils, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO, ambienceImage } from '../data/restaurantData';

interface AboutProps {
  onOpenReservation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenReservation }) => {
  return (
    <section id="about" className="py-24 bg-[#111217] border-y border-[#21232d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#2e313f] shadow-2xl group">
              <img
                src={ambienceImage}
                alt="The Delhi Story welcoming restaurant ambience and dining booths at City Center Mall, Patna"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Image Floating Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-md bg-[#13141b]/90 backdrop-blur-md border border-[#343746]">
                <div className="flex items-center justify-between text-xs text-[#d6cfc1]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="font-medium">2nd Floor, City Center Mall, Patna</span>
                  </div>
                  <span className="text-[#a89f8f]">Casual Fine Dining</span>
                </div>
              </div>
            </div>

            {/* Subtle background glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#831828]/15 via-transparent to-[#d4af37]/10 -z-10 rounded-2xl blur-xl" />
          </div>

          {/* Column 2: Introduction Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Patna Dining Destination</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f9f5ec] leading-tight">
              Welcome to The Delhi Story
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#cfc7b8] leading-relaxed">
              <p>
                Situated on the second floor of Patna’s prestigious City Center Mall, 
                <strong className="text-[#f5ebd9] font-medium"> The Delhi Story</strong> invites diners to a memorable gastronomic experience where time-honoured culinary techniques meet contemporary dining comfort.
              </p>
              <p>
                From fragrant slow-dum biryanis and clay-oven tandoori roasts to comforting North Indian curries, Chinese wok creations, and continental favourites, every dish is crafted with fresh ingredients, balanced spices, and artistic presentation.
              </p>
              <p>
                Whether you are organizing a joyous family celebration, catching up over lunch after shopping, or hosting friends for an evening dinner, our thoughtfully illuminated dining hall and attentive team ensure each visit feels special.
              </p>
            </div>

            {/* Three Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#262835]">
              <div className="p-3 bg-[#161820] rounded border border-[#2b2d3a]">
                <Utensils className="w-4 h-4 text-[#d4af37] mb-2" />
                <h3 className="text-xs font-semibold text-[#f0ebe0] uppercase tracking-wider">Diverse Cuisine</h3>
                <p className="text-[11px] text-[#a69e90] mt-1 leading-snug">North Indian, Mughlai, Asian & Continental menus.</p>
              </div>

              <div className="p-3 bg-[#161820] rounded border border-[#2b2d3a]">
                <Users className="w-4 h-4 text-[#d4af37] mb-2" />
                <h3 className="text-xs font-semibold text-[#f0ebe0] uppercase tracking-wider">Family Welcoming</h3>
                <p className="text-[11px] text-[#a69e90] mt-1 leading-snug">Spacious booth seating for families & group dinners.</p>
              </div>

              <div className="p-3 bg-[#161820] rounded border border-[#2b2d3a]">
                <MapPin className="w-4 h-4 text-[#d4af37] mb-2" />
                <h3 className="text-xs font-semibold text-[#f0ebe0] uppercase tracking-wider">Prime Location</h3>
                <p className="text-[11px] text-[#a69e90] mt-1 leading-snug">Easy access at City Center Mall, Lodipur.</p>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831828] hover:bg-[#9e1c31] border border-[#ab2239] rounded-md transition-all shadow-md"
              >
                Reserve a Table
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#d6cfc1] hover:text-white bg-[#1a1b22] hover:bg-[#252732] border border-[#333644] rounded-md transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call to Enquire</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
