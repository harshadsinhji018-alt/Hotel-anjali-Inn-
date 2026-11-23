import { useState } from 'react';
import { Maximize2, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOM_SUITES, CELEBRATION_DECORS } from '../data/hotelData';
import { Reveal } from './MotionPrimitives';
import { SafeImage } from './SafeImage';

type RoomTab = 'suites' | 'celebration';

interface PreviewImage {
  src: string;
  title: string;
  meta: string;
  description: string;
}

export function RoomsSection() {
  const [activeTab, setActiveTab] = useState<RoomTab>('suites');
  const [preview, setPreview] = useState<PreviewImage | null>(null);

  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#F2EFE9] text-[#16211B]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Section Header + Interactive Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-stone-300/70">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B47B2B] font-semibold mb-3">
                02 · Stay &amp; Accommodations
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-[#16211B]">
                Thoughtfully appointed rooms &amp; bespoke celebration suites.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div
              role="tablist"
              aria-label="Room showcase categories"
              className="inline-flex items-center p-1 rounded-lg bg-[#E6E1D8] border border-stone-300/60"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'suites'}
                onClick={() => setActiveTab('suites')}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] ${
                  activeTab === 'suites'
                    ? 'bg-[#16211B] text-[#FAF8F4] shadow-sm'
                    : 'text-[#44403C] hover:text-[#16211B]'
                }`}
              >
                Rooms &amp; Suites
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'celebration'}
                onClick={() => setActiveTab('celebration')}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] ${
                  activeTab === 'celebration'
                    ? 'bg-[#16211B] text-[#FAF8F4] shadow-sm'
                    : 'text-[#44403C] hover:text-[#16211B]'
                }`}
              >
                Celebration Room Decor
              </button>
            </div>
          </Reveal>
        </div>

        {/* Tab 1: Rooms & Suites */}
        {activeTab === 'suites' ? (
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {ROOM_SUITES.map((room, index) => (
                <Reveal key={room.id} delay={index * 0.06}>
                  <article className="bg-white rounded-lg border border-stone-200/80 overflow-hidden flex flex-col h-full group">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#EFECE5]">
                      <SafeImage
                        src={room.image}
                        alt={room.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setPreview({
                            src: room.image,
                            title: room.name,
                            meta: room.meta,
                            description: room.description,
                          })
                        }
                        aria-label={`Inspect ${room.name}`}
                        className="absolute bottom-3 right-3 w-10 h-10 rounded-md bg-[#111613]/75 hover:bg-[#111613] text-white flex items-center justify-center backdrop-blur-sm transition-colors opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <p className="text-xs text-[#78716C] tracking-wide mb-2">
                          {room.meta}
                        </p>
                        <h3 className="font-display text-2xl font-semibold text-[#16211B] mb-2.5">
                          {room.name}
                        </h3>
                        <p className="text-sm text-[#44403C] leading-relaxed mb-5">
                          {room.description}
                        </p>
                      </div>

                      <div>
                        <ul className="space-y-2 border-t border-stone-100 pt-4 mb-5">
                          {room.highlights.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-xs text-[#44403C]"
                            >
                              <Check className="w-3.5 h-3.5 text-[#B47B2B] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md border border-[#16211B] text-[#16211B] hover:bg-[#16211B] hover:text-white text-xs font-semibold tracking-wide uppercase transition-colors duration-200"
                        >
                          Inquire About Availability
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Balcony & Garden Wing Highlight Strip */}
            <Reveal delay={0.12}>
              <div className="bg-white rounded-lg border border-stone-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] bg-[#EFECE5] overflow-hidden">
                  <SafeImage
                    src="/assets/aistudio/image_b1091f9e.png"
                    alt="Hotel Anjali guest rooms with glass-railed private balconies overlooking palm trees and flowering gardens"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#B47B2B] font-semibold mb-2">
                    Architectural View
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#16211B] mb-3">
                    Private Balconies Overlooking Palm Gardens
                  </h3>
                  <p className="text-sm sm:text-base text-[#44403C] leading-relaxed mb-6">
                    Upper-floor guest rooms open onto sheltered glass-balustrade balconies framed by
                    tall palms and vibrant courtyard blooms—ideal for quiet mornings with masala chai.
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('celebration')}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#16211B] hover:text-[#B47B2B] transition-colors underline underline-offset-4"
                    >
                      View Celebration Room Decor Options
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        ) : (
          /* Tab 2: Celebration Room Styling */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {CELEBRATION_DECORS.map((decor, index) => (
              <Reveal key={decor.id} delay={index * 0.06}>
                <article className="bg-white rounded-lg border border-stone-200/80 overflow-hidden flex flex-col h-full group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EFECE5]">
                    <SafeImage
                      src={decor.image}
                      alt={decor.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setPreview({
                          src: decor.image,
                          title: decor.name,
                          meta: decor.meta,
                          description: decor.description,
                        })
                      }
                      aria-label={`Inspect ${decor.name}`}
                      className="absolute bottom-3 right-3 w-10 h-10 rounded-md bg-[#111613]/75 hover:bg-[#111613] text-white flex items-center justify-center backdrop-blur-sm transition-colors opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <p className="text-xs text-[#78716C] tracking-wide mb-2">
                        {decor.meta}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-[#16211B] mb-2.5">
                        {decor.name}
                      </h3>
                      <p className="text-sm text-[#44403C] leading-relaxed mb-5">
                        {decor.description}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md bg-[#16211B] hover:bg-[#24352B] text-white text-xs font-semibold tracking-wide uppercase transition-colors duration-200"
                    >
                      Request Celebration Setup
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Room Detail Lightbox */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={preview.title}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#FAF8F4] rounded-lg overflow-hidden shadow-2xl border border-stone-200"
            >
              <button
                type="button"
                onClick={() => setPreview(null)}
                aria-label="Close room preview"
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/65 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[70vh] bg-[#111613] flex items-center justify-center overflow-hidden">
                <SafeImage
                  src={preview.src}
                  alt={preview.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-[#78716C] mb-1">{preview.meta}</p>
                <h3 className="font-display text-2xl font-semibold text-[#16211B] mb-2">
                  {preview.title}
                </h3>
                <p className="text-sm text-[#44403C] leading-relaxed">{preview.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
