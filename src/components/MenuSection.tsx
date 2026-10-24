import React, { useState, useMemo } from 'react';
import { Phone, MessageCircle, FileText, Search, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleEnquireDish = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hello The Delhi Story, I am interested in ordering or enquiring about "${item.name}". Could you please share today's availability and price?`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-[#0d0e12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2">
            Culinary Offerings
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#fbf7ed]">
            Our Dining Menu
          </h2>
          <p className="mt-4 text-base text-[#cfc7b8] leading-relaxed">
            A curated showcase of signature preparations spanning fragrant North Indian clay oven roasts, Awadhi gravies, wok-tossed Asian flavours, and continental delights.
          </p>
        </div>

        {/* Menu Transparency Note */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-md bg-[#161821] border border-[#2c2f3d] flex items-start gap-3 text-xs text-[#bcb3a3]">
          <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-[#f0ebe0]">Live Seasonal Availability: </span>
            To preserve the highest ingredient standards, our daily specials and exact prices are updated dynamically by our kitchen team. For today’s current printed card or party platters, click <span className="text-[#e5c158] font-medium">“Enquire via WhatsApp”</span> or call our reception.
          </div>
        </div>

        {/* Controls: Search and Filter Tabs */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs (Segmented Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1.5 bg-[#14151c] rounded-lg border border-[#252733] no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-[#831828] text-white shadow-sm font-semibold'
                      : 'text-[#a69f91] hover:text-[#f3eee5] hover:bg-[#1f212b]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-[#888174] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-md bg-[#14151c] border border-[#2b2d3b] text-[#f0ebe0] placeholder-[#7d776b] focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#13141b] rounded-lg border border-[#252835] overflow-hidden flex flex-col justify-between hover:border-[#3d4154] transition-all hover:shadow-xl group"
            >
              <div>
                {/* Dish Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#1c1d27]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback visually attractive styling if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13141b] via-transparent to-transparent" />
                  
                  {/* Category & Veg indicator */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm border ${
                        item.isVeg
                          ? 'border-emerald-600/70 text-emerald-400'
                          : 'border-red-600/70 text-red-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                      {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
                    </span>

                    {item.isChefSpecial && (
                      <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-[#831828]/90 text-amber-100 border border-red-500/40">
                        Chef Special
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-[#f5eedf] leading-snug group-hover:text-[#e5c158] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-[#aba292] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Enquire Buttons */}
              <div className="p-5 pt-0 border-t border-[#1d202b] mt-4 flex items-center justify-between gap-2">
                <span className="text-[11px] text-[#8e8576] italic">
                  {item.priceNote || 'Daily Chef Special'}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEnquireDish(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#e5c158] bg-[#1d1f2b] hover:bg-[#282a3a] border border-[#373a4c] rounded transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="p-1.5 text-[#aba292] hover:text-white bg-[#1a1b24] hover:bg-[#262835] border border-[#2f3140] rounded transition-colors"
                    title="Call Restaurant"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#13141b] rounded-lg border border-[#252835] mt-6">
            <p className="text-[#d8d1c4] text-sm">No dishes match your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#d4af37] underline hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner for Menu PDF & Full Inquiry */}
        <div className="mt-14 p-6 sm:p-8 rounded-lg bg-gradient-to-r from-[#171922] via-[#1c1418] to-[#171922] border border-[#343746] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#831828]/30 border border-[#831828] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[#e5c158]" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-[#f5ebd9]">
                Looking for the Complete Physical Menu or Catering Packages?
              </h4>
              <p className="text-xs text-[#b8b0a1] mt-1">
                We accommodate private family dining, party platters, and custom menus for intimate gatherings at City Center Mall.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20The%20Delhi%20Story%2C%20please%20share%20the%20latest%20complete%20menu%20card%20and%20chef%20specials.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#831828] hover:bg-[#9c1c30] rounded-md transition-colors shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Request Menu on WhatsApp</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#ede8dc] bg-[#1a1b24] hover:bg-[#252733] border border-[#373a48] rounded-md transition-colors"
            >
              Enquire Table
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
