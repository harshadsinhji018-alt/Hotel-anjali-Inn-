import { useState } from 'react';
import { Utensils, Sparkles } from 'lucide-react';
import { FOOD_ITEMS, FoodCategory } from '../data/hotelData';
import { Reveal } from './MotionPrimitives';
import { SafeImage } from './SafeImage';

const FOOD_TABS: FoodCategory[] = [
  'All',
  'Thali & Curries',
  'Starters & Snacks',
  'Chai & Beverages',
];

export function RestaurantSection() {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>('All');

  const filteredFood =
    selectedCategory === 'All'
      ? FOOD_ITEMS
      : FOOD_ITEMS.filter((item) => item.category === selectedCategory);

  const thaliHero = FOOD_ITEMS.find((item) => item.featured);
  const gridDishes = filteredFood.filter(
    (item) => !(selectedCategory === 'All' && item.featured)
  );

  return (
    <section id="restaurant" className="py-20 sm:py-28 bg-[#111613] text-[#FAF8F4]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Part 1: Restaurant Atmosphere & Dining Halls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#E5B869] font-semibold mb-3">
                03 · Hotel Anjali Restaurant
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-white mb-5">
                Spacious indoor dining &amp; open-air evening hospitality.
              </h2>
              <p className="text-stone-300 text-base leading-relaxed max-w-xl">
                Step inside our climate-controlled restaurant hall with sculpted cove lighting and
                generous family tables, or dine beneath the stars in our lush palm-lined garden and
                chandelier pavilion.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex flex-wrap lg:justify-end gap-8 text-sm text-stone-300 border-t lg:border-t-0 pt-6 lg:pt-0 border-white/10">
            <div>
              <p className="text-white font-medium">Air-Conditioned Hall</p>
              <p className="text-stone-400 text-xs mt-1">Family-friendly seating &amp; attentive service</p>
            </div>
            <div>
              <p className="text-white font-medium">Lawn &amp; Pavilion Dining</p>
              <p className="text-stone-400 text-xs mt-1">Open-air seating &amp; illuminated evening trees</p>
            </div>
          </div>
        </div>

        {/* Dining Spaces Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          <Reveal className="lg:col-span-7">
            <figure className="group h-full flex flex-col">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[#1B221E] aspect-[16/11] flex-1">
                <SafeImage
                  src="/assets/aistudio/image_38ee7de4.png"
                  alt="Hotel Anjali spacious air-conditioned restaurant dining hall with red-covered chairs and sculpted golden ceiling"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400">
                <span className="text-stone-200 font-medium">Main Indoor Restaurant Hall</span>
                <span>Air-Conditioned Family Dining</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Reveal delay={0.08}>
              <figure className="group">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-[#1B221E] aspect-[16/10]">
                  <SafeImage
                    src="/assets/aistudio/image_288d377a.png"
                    alt="Evening pavilion dining tables with ornate golden chairs and chandeliers at Hotel Anjali"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between text-xs text-stone-400">
                  <span className="text-stone-200 font-medium">Evening Pavilion Dining</span>
                  <span>Chandelier Canopy</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.14}>
              <figure className="group">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-[#1B221E] aspect-[16/10]">
                  <SafeImage
                    src="/assets/aistudio/image_429d7830.png"
                    alt="Night garden view at Hotel Anjali with illuminated plumeria tree and fairy-lit palm"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between text-xs text-stone-400">
                  <span className="text-stone-200 font-medium">Illuminated Night Garden</span>
                  <span>Open-Air Lawn Ambience</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Part 2: Food & Menu Showcase */}
        <div className="pt-16 border-t border-white/15">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <Reveal>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E5B869] font-semibold mb-3">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Culinary Showcase</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Freshly prepared favourites from our kitchen.
                </h3>
              </Reveal>
            </div>

            {/* Category Filter Tabs */}
            <Reveal delay={0.06}>
              <div
                role="tablist"
                aria-label="Menu photo categories"
                className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-white/[0.06] border border-white/10"
              >
                {FOOD_TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === tab}
                    onClick={() => setSelectedCategory(tab)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B869] ${
                      selectedCategory === tab
                        ? 'bg-[#B47B2B] text-white'
                        : 'text-stone-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Featured Thali Dual Spread when viewing All */}
          {selectedCategory === 'All' && thaliHero && (
            <Reveal>
              <article className="mb-8 rounded-lg overflow-hidden border border-white/10 bg-[#181F1B] grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                  <SafeImage
                    src={thaliHero.image}
                    alt={thaliHero.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-center">
                  <p className="text-xs text-[#E5B869] tracking-wide uppercase font-semibold mb-2">
                    {thaliHero.meta}
                  </p>
                  <h4 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
                    {thaliHero.name}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6">
                    {thaliHero.description}
                  </p>
                  <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
                    <span className="inline-flex items-center gap-1.5 text-stone-300">
                      <Sparkles className="w-3.5 h-3.5 text-[#E5B869]" />
                      Served fresh for lunch &amp; dinner
                    </span>
                    <a
                      href="#contact"
                      className="text-[#E5B869] hover:text-white font-semibold transition-colors"
                    >
                      Inquire for Group Dining →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          )}

          {/* Dish Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridDishes.map((dish, idx) => (
              <Reveal key={dish.id} delay={(idx % 4) * 0.05}>
                <article className="rounded-lg overflow-hidden border border-white/10 bg-[#181F1B] flex flex-col h-full group">
                  <div className="relative aspect-[4/4] overflow-hidden bg-[#222A25]">
                    <SafeImage
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#E5B869] mb-1.5">
                        {dish.meta}
                      </p>
                      <h4 className="font-display text-xl font-semibold text-white mb-2 leading-snug">
                        {dish.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
