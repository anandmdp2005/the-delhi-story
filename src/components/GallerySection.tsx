import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ambience', label: 'Ambience & Interior' },
    { id: 'food', label: 'Culinary Delicacies' },
    { id: 'dining', label: 'Dining Experience' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) =>
    selectedCategory === 'all' ? true : photo.category === selectedCategory
  );

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => ((prev! + 1) % filteredPhotos.length));
  };

  const handlePrev = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev! === 0 ? filteredPhotos.length - 1 : prev! - 1
    );
  };

  return (
    <section id="gallery" className="py-24 bg-[#0d0e12] border-t border-[#21232d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2">
            Visual Journey
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#fbf7ed]">
            Photo Gallery
          </h2>
          <p className="mt-4 text-base text-[#cfc7b8] leading-relaxed">
            Glimpse into the dining atmosphere, culinary creations, and warm ambience at The Delhi Story, City Center Mall, Patna.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#831828] text-white shadow font-semibold'
                  : 'bg-[#151720] text-[#a8a193] hover:text-[#f3eee5] hover:bg-[#20222e] border border-[#262835]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative h-72 rounded-lg overflow-hidden bg-[#161822] border border-[#272938] cursor-pointer shadow-md hover:border-[#41465c] transition-all"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover overlay details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="self-end p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4 text-[#e5c158]" />
                </div>

                <div>
                  <h3 className="font-display text-base font-semibold text-[#f8f5ec]">
                    {photo.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#bcb3a3] line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-[#1b1d28]/90 text-[#f0ebe0] hover:text-white hover:bg-[#2a2c3d] border border-[#353849] z-20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#1b1d28]/90 text-[#f0ebe0] hover:text-[#e5c158] hover:bg-[#2a2c3d] border border-[#353849] z-20 transition-colors"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#1b1d28]/90 text-[#f0ebe0] hover:text-[#e5c158] hover:bg-[#2a2c3d] border border-[#353849] z-20 transition-colors"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredPhotos[activePhotoIndex].image}
              alt={filteredPhotos[activePhotoIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-md shadow-2xl border border-[#2b2d3c]"
            />
            <div className="mt-4 text-center max-w-2xl px-4">
              <h4 className="font-display text-lg font-semibold text-[#f5ebd9]">
                {filteredPhotos[activePhotoIndex].title}
              </h4>
              <p className="mt-1 text-xs text-[#b8b0a1] leading-relaxed">
                {filteredPhotos[activePhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
