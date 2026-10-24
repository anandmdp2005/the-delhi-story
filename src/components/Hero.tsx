import React from 'react';
import { Compass, UtensilsCrossed, Star, MapPin, ChevronDown } from 'lucide-react';
import { RESTAURANT_INFO, heroImage } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Delhi Story royal dining spread with North Indian specialties and fine tableware"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered rich dark scrim for WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/75 to-[#0d0e12]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0d0e12]/40 to-[#0d0e12]/85" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase text-[#d4af37] border-b border-[#d4af37]/30">
          <MapPin className="w-3.5 h-3.5" />
          <span>City Center Mall · Lodipur, Patna</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#fbf7ed] max-w-4xl text-balance leading-[1.15]">
          Discover the Story Behind Every Bite
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#d4cdc0] max-w-2xl text-balance leading-relaxed font-normal">
          Experience memorable flavours, inviting ambience, and delightful dining at The Delhi Story, Patna.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#831828] hover:bg-[#9e1c31] border border-[#ab2239] rounded-md shadow-lg shadow-red-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#f5ebd9]" />
            <span>Explore Our Menu</span>
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#ede7da] bg-[#1a1b22]/90 hover:bg-[#252732] border border-[#3b3e4d] rounded-md hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Trust & Proof Metadata Bar */}
        <div className="mt-14 pt-8 border-t border-[#2d2f3b]/70 w-full max-w-3xl flex flex-wrap items-center justify-around gap-6 text-xs text-[#b8b0a1]">
          <div className="flex items-center gap-2">
            <div className="flex text-[#e5c158]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#e5c158]" />
              ))}
            </div>
            <span className="font-semibold text-[#f0ebe0] tabular-nums">4.5 / 5</span>
            <span>(418 Reviews · Owner Reported)</span>
          </div>

          <div className="hidden sm:block text-[#4e5163]">·</div>

          <div className="flex items-center gap-1.5">
            <span className="text-[#e5c158]">📍</span>
            <span>2nd Floor, City Center Mall</span>
          </div>

          <div className="hidden sm:block text-[#4e5163]">·</div>

          <div className="flex items-center gap-1.5">
            <span className="text-[#e5c158]">🍽️</span>
            <span>Authentic Multi-Cuisine</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-8 text-[#8c8577] hover:text-[#e5c158] transition-colors p-2"
          aria-label="Scroll down to About section"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
