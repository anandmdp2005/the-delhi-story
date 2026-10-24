import React, { useState, useEffect } from 'react';
import { Phone, Navigation, Menu, X, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f1013]/95 backdrop-blur-md border-b border-[#2a2c35] py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#0a0b0d]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              className="group flex flex-col text-left whitespace-nowrap shrink-0 focus:outline-none"
            >
              <span className="font-display text-2xl sm:text-3xl font-semibold tracking-wider text-[#f3eedf] group-hover:text-[#e5c158] transition-colors">
                The Delhi Story
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#a59a86] font-medium">
                City Center Mall · Patna
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#c8c1b3]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#e5c158] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#e8e2d4] bg-[#1d1f27] hover:bg-[#282b36] border border-[#373a46] rounded-md transition-all whitespace-nowrap shrink-0 shadow-sm"
                title={`Call ${RESTAURANT_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#831828] hover:bg-[#991d30] border border-[#a12338] rounded-md transition-all whitespace-nowrap shrink-0 shadow-md hover:shadow-red-950/40"
              >
                <Calendar className="w-3.5 h-3.5 text-[#f3eedf]" />
                <span>Table Enquiry</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="p-2 text-[#e5c158] bg-[#1d1f27] border border-[#373a46] rounded-md"
                aria-label="Call Restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#ede8df] hover:text-white bg-[#1a1b22] border border-[#2e303b] rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#121319] border-l border-[#2e303b] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#252732]">
                <div>
                  <div className="font-display text-xl font-semibold text-[#f3eedf]">
                    The Delhi Story
                  </div>
                  <div className="text-[10px] tracking-widest uppercase text-[#a59a86]">
                    Patna
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#a8a193] hover:text-white rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-6 text-base font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-[#dad3c5] hover:text-[#d4af37] border-b border-[#1c1d25] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#252732] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#831828] hover:bg-[#991d30] rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire About a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#e8e2d4] bg-[#1d1f27] border border-[#373a46] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call +91 92890 28709</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-[#b5ad9e] hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
