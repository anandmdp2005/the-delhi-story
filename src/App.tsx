import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { RESTAURANT_INFO } from './data/restaurantData';
import { Phone, Calendar, Navigation } from 'lucide-react';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0e12] text-[#ede8df] flex flex-col font-sans selection:bg-[#831828] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenReservation={() => setReservationModalOpen(true)} />
        <About onOpenReservation={() => setReservationModalOpen(true)} />
        <MenuSection onOpenReservation={() => setReservationModalOpen(true)} />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
        <ReservationSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Quick Table Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      {/* Mobile Bottom Quick-Action Bar (Compact: 48px to comply with <15% sticky cap) */}
      <aside aria-label="Quick mobile dining actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121319]/95 backdrop-blur-md border-t border-[#262837] py-2 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-[#f0ebe0] bg-[#1d1f2b] border border-[#35384a] rounded-md active:bg-[#282b3a] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Call</span>
        </a>

        <button
          onClick={() => setReservationModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-[#831828] hover:bg-[#9c1c30] rounded-md active:scale-95 transition-all shadow"
        >
          <Calendar className="w-3.5 h-3.5 text-[#f5ebd9]" />
          <span>Table</span>
        </button>

        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-[#d4cdc0] bg-[#1a1c25] border border-[#2c2f3e] rounded-md active:bg-[#262835] transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Maps</span>
        </a>
      </aside>
    </div>
  );
}
