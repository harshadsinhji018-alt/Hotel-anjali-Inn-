import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_HOTEL_PHOTOS, GalleryCategory } from '../data/hotelData';
import { Reveal } from './MotionPrimitives';
import { SafeImage } from './SafeImage';

const GALLERY_FILTERS: GalleryCategory[] = [
  'All',
  'Exterior & Lawns',
  'Rooms & Suites',
  'Dining & Cuisine',
  'Banquets & Events',
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeFilter === 'All'
      ? ALL_HOTEL_PHOTOS
      : ALL_HOTEL_PHOTOS.filter((photo) => photo.category === activeFilter);

  const countFor = (category: GalleryCategory) =>
    category === 'All'
      ? ALL_HOTEL_PHOTOS.length
      : ALL_HOTEL_PHOTOS.filter((p) => p.category === category).length;

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, handleNext, handlePrev]);

  const activePhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] ?? null : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F2EFE9] text-[#16211B]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Header & Category Filter Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-stone-300/70">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B47B2B] font-semibold mb-3">
                05 · Complete Visual Gallery
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-[#16211B]">
                Every corner of Hotel Anjali, captured on site.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <div
              role="tablist"
              aria-label="Gallery category filters"
              className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#E6E1D8] border border-stone-300/60"
            >
              {GALLERY_FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] ${
                    activeFilter === filter
                      ? 'bg-[#16211B] text-[#FAF8F4] shadow-sm'
                      : 'text-[#44403C] hover:text-[#16211B]'
                  }`}
                >
                  {filter} ({countFor(filter)})
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Responsive Masonry-Inspired Columns Preserving Original Photo Aspect Ratios */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filteredPhotos.map((photo, index) => (
            <figure
              key={photo.id}
              className="break-inside-avoid bg-white rounded-lg border border-stone-200/80 overflow-hidden group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative overflow-hidden bg-[#EFECE5]">
                <SafeImage
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                >
                  <span className="text-xs font-medium text-white/95">
                    {photo.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/90 text-[#16211B] flex items-center justify-center">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              <figcaption className="px-4 py-3.5 flex items-baseline justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-[#16211B] leading-snug">
                    {photo.title}
                  </p>
                  <p className="text-xs text-[#57534E] mt-0.5 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Viewer */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-[#0B0F0D]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-white/90 max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-xs sm:text-sm text-stone-300 tabular-nums">
                <span className="text-white font-medium">{lightboxIndex + 1}</span>
                {' / '}
                <span>{filteredPhotos.length}</span>
                <span className="mx-2 text-white/30">·</span>
                <span>{activePhoto.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage with Prev/Next */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-0 sm:left-2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0.4, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="max-h-[72vh] flex items-center justify-center px-12 sm:px-16"
              >
                <SafeImage
                  src={activePhoto.src}
                  alt={activePhoto.caption}
                  className="max-h-[72vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
                />
              </motion.div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-0 sm:right-2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption Footer */}
            <div
              className="max-w-2xl w-full mx-auto text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-2xl font-semibold">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                {activePhoto.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
