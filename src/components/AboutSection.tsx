import { Reveal } from './MotionPrimitives';
import { SafeImage } from './SafeImage';

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F4] text-[#16211B]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Top Editorial Intro Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B47B2B] font-semibold mb-3">
                01 · About Hotel Anjali
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-[#16211B] mb-6">
                Warm Gujarati hospitality crafted for travellers, families &amp; celebrations.
              </h2>
              <div className="h-px w-16 bg-[#B47B2B]/50 mb-6" />
              <p className="text-[#44403C] text-base leading-relaxed mb-5">
                From the welcoming arched gateway of <strong className="font-semibold text-[#16211B]">Hotel Anjali Inn</strong> to the
                crown-topped facade of <strong className="font-semibold text-[#16211B]">Hotel Anjali Restaurant</strong>, every space is
                designed around comfort, cleanliness, and generous Indian hospitality.
              </p>
              <p className="text-[#44403C] text-base leading-relaxed mb-8">
                Whether you are pausing for a hot kulhad chai and a traditional thali, checking into a
                quiet air-conditioned suite, or gathering hundreds of loved ones on our palm-lined
                lawns, our team welcomes every guest like family.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-200">
                <div>
                  <p className="font-display text-2xl font-semibold text-[#16211B]">Stay &amp; Suites</p>
                  <p className="text-sm text-[#57534E] mt-1">
                    Marble-floored suites &amp; private balcony wings
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-[#16211B]">Dine &amp; Celebrate</p>
                  <p className="text-sm text-[#57534E] mt-1">
                    AC restaurant hall, lawns &amp; event pavilions
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Primary Architectural Feature Image */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <figure className="group">
                <div className="overflow-hidden rounded-lg border border-stone-200/80 bg-[#EFECE5] aspect-[4/3]">
                  <SafeImage
                    src="/assets/aistudio/image_f18ce9f4.png"
                    alt="Hotel Anjali building side view showing Gujarati signage, paved driveway, garden pergola, and reception entrance"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#57534E]">
                  <span className="font-serif italic">Fig. 01 — Reception driveway &amp; landscaped front courtyard (હોટલ અંજલી)</span>
                  <span>Main Property Entrance</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Architectural Trio Strip: Archway, Facade & Grand Reception Foyer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Reveal delay={0.05}>
            <figure className="group">
              <div className="overflow-hidden rounded-lg border border-stone-200/80 bg-[#EFECE5] aspect-[4/3]">
                <SafeImage
                  src="/assets/aistudio/image_7b527166.png"
                  alt="Hotel Anjali Inn arched entrance gate with festive drapes and steel-railed stairs"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-xl font-semibold text-[#16211B]">
                  The Welcome Archway
                </p>
                <p className="text-sm text-[#57534E] mt-1 leading-relaxed">
                  Ceremonial entrance gate opening onto our manicured central gardens and guest foyer.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.12}>
            <figure className="group">
              <div className="overflow-hidden rounded-lg border border-stone-200/80 bg-[#EFECE5] aspect-[4/3]">
                <SafeImage
                  src="/assets/aistudio/image_dadc4ea8.png"
                  alt="Palm-lined architectural front view of Hotel Anjali with sculpted topiary trees"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-xl font-semibold text-[#16211B]">
                  Palm-Lined Elevation
                </p>
                <p className="text-sm text-[#57534E] mt-1 leading-relaxed">
                  Three-storey guest residence framed by sculpted topiary gardens and sunny private balconies.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.18}>
            <figure className="group">
              <div className="overflow-hidden rounded-lg border border-stone-200/80 bg-[#EFECE5] aspect-[4/3]">
                <SafeImage
                  src="/assets/aistudio/image_b19a7b77.png"
                  alt="Hotel Anjali black marble reception desk and multi-level interior lobby"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-xl font-semibold text-[#16211B]">
                  Grand Reception Foyer
                </p>
                <p className="text-sm text-[#57534E] mt-1 leading-relaxed">
                  Polished marble lobby with our dedicated front desk, stairwell access, and banquet foyer.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
