import { VENUE_SPACES } from '../data/hotelData';
import { Reveal } from './MotionPrimitives';
import { SafeImage } from './SafeImage';

export function BanquetsSection() {
  const [lawnMain, pavilionMain, ...otherSpaces] = VENUE_SPACES;

  return (
    <section id="banquets" className="py-20 sm:py-28 bg-[#FAF8F4] text-[#16211B]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B47B2B] font-semibold mb-3">
              04 · Lawns, Banquets &amp; Celebrations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-[#16211B] mb-4">
              Designed for grand weddings, family milestones &amp; corporate gatherings.
            </h2>
            <p className="text-[#44403C] text-base leading-relaxed">
              Host open-air receptions on our expansive green lawn, dine beneath crystal chandeliers
              in our celebration pavilion, or welcome guests inside our air-conditioned banquet
              and conference halls.
            </p>
          </Reveal>
        </div>

        {/* Two Primary Flagship Event Spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8">
          {[lawnMain, pavilionMain].map((space, idx) => (
            <Reveal key={space.id} delay={idx * 0.08}>
              <article className="bg-white rounded-lg border border-stone-200/80 overflow-hidden group h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-[#EFECE5]">
                  <SafeImage
                    src={space.image}
                    alt={space.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#78716C] tracking-wide mb-2">
                      {space.meta}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#16211B] mb-2.5">
                      {space.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                      {space.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Four Supporting Event Spaces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherSpaces.map((space, idx) => (
            <Reveal key={space.id} delay={idx * 0.05}>
              <article className="bg-white rounded-lg border border-stone-200/80 overflow-hidden group h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-[#EFECE5]">
                  <SafeImage
                    src={space.image}
                    alt={space.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 flex-1">
                  <p className="text-[11px] uppercase tracking-wider text-[#B47B2B] font-semibold mb-1.5">
                    {space.meta}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#16211B] mb-2">
                    {space.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
