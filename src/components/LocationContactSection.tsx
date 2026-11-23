import { useState, FormEvent } from 'react';
import {
  MapPin,
  Navigation,
  Instagram,
  ExternalLink,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { VERIFIED_LINKS } from '../data/hotelData';
import { Reveal } from './MotionPrimitives';
import { SafeImage } from './SafeImage';

type InquiryType = 'Room Stay' | 'Restaurant & Group Dining' | 'Banquet & Lawn Event';

export function LocationContactSection() {
  const [guestName, setGuestName] = useState('');
  const [inquiryType, setInquiryType] = useState<InquiryType>('Room Stay');
  const [preferredDate, setPreferredDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [notes, setNotes] = useState('');
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCompose = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setError('Please enter your name to prepare an inquiry message.');
      return;
    }
    setError(null);

    const lines = [
      `Hello Hotel Anjali Team,`,
      `Name: ${guestName.trim()}`,
      `Inquiry For: ${inquiryType}`,
      preferredDate ? `Preferred Date: ${preferredDate}` : null,
      guestCount ? `Estimated Guests: ${guestCount}` : null,
      notes.trim() ? `Details: ${notes.trim()}` : null,
    ].filter(Boolean);

    setPreparedMessage(lines.join('\n'));
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF8F4] text-[#16211B]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Location & Arrival Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch pb-20 border-b border-stone-200">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B47B2B] font-semibold mb-3">
                06 · Location &amp; Arrival
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-[#16211B] mb-5">
                Easy highway access with dedicated on-site parking.
              </h2>
              <p className="text-[#44403C] text-base leading-relaxed mb-8">
                Look for the signature <strong className="font-semibold text-[#16211B]">Hotel Anjali Inn</strong> arched
                welcome gateway and palm-lined facade. Open our verified Google Business Profile
                for live GPS navigation, verified guest reviews, and official contact details.
              </p>

              <div className="space-y-4">
                <a
                  href={VERIFIED_LINKS.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-lg bg-white border border-stone-200 hover:border-[#B47B2B] transition-colors group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-[#F2EFE9] text-[#16211B] flex items-center justify-center shrink-0">
                      <Navigation className="w-5 h-5 text-[#B47B2B]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#16211B]">
                        Google Business Profile &amp; Directions
                      </p>
                      <p className="text-xs text-[#57534E] mt-0.5">
                        Open live Google Maps directions, hours &amp; verified call button
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#78716C] group-hover:text-[#B47B2B] shrink-0" />
                </a>

                <a
                  href={VERIFIED_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-lg bg-white border border-stone-200 hover:border-[#B47B2B] transition-colors group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-[#F2EFE9] text-[#16211B] flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5 text-[#B47B2B]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#16211B]">
                        Instagram {VERIFIED_LINKS.instagramHandle}
                      </p>
                      <p className="text-xs text-[#57534E] mt-0.5">
                        Follow latest events, celebration setups &amp; direct messages
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#78716C] group-hover:text-[#B47B2B] shrink-0" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08} className="h-full">
              <div className="relative h-full min-h-[340px] rounded-lg overflow-hidden border border-stone-200/80 bg-[#EFECE5] group">
                <SafeImage
                  src="/assets/aistudio/image_6b9da2fd.png"
                  alt="Roadside view of Hotel Anjali Inn welcome gate and palm-lined main hotel building"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0D1310]/85 via-[#0D1310]/20 to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#E5B869] font-semibold mb-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Verified Property Gateway</span>
                    </div>
                    <p className="font-display text-2xl sm:text-3xl font-semibold">
                      Hotel Anjali Inn &amp; Restaurant
                    </p>
                  </div>
                  <a
                    href={VERIFIED_LINKS.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#B47B2B] hover:bg-[#9C6820] text-white text-xs font-semibold tracking-wide uppercase whitespace-nowrap transition-colors"
                  >
                    <span>Get Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Contact & Interactive Inquiry Composer */}
        <div id="contact" className="pt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B47B2B] font-semibold mb-3">
                07 · Contact &amp; Direct Inquiry
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] text-[#16211B] mb-4">
                Plan your stay, family table, or celebration.
              </h2>
              <p className="text-[#44403C] text-base leading-relaxed mb-6">
                Draft your inquiry details below to generate a ready-to-send message, then reach
                our hospitality desk directly via our verified Instagram profile or Google Business
                Profile listing.
              </p>

              <div className="rounded-lg border border-stone-200 bg-[#F2EFE9] p-6 space-y-3 text-sm text-[#44403C]">
                <p className="font-semibold text-[#16211B]">
                  Official Verified Channels
                </p>
                <p className="text-xs leading-relaxed text-[#57534E]">
                  For verified phone contact, live driving directions, and current desk timings,
                  please open our Google Business Profile or message us on Instagram.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={VERIFIED_LINKS.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#16211B] text-white text-xs font-semibold hover:bg-[#24352B] transition-colors"
                  >
                    <span>Google Business Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={VERIFIED_LINKS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-stone-300 bg-white text-[#16211B] text-xs font-semibold hover:border-[#B47B2B] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#B47B2B]" />
                    <span>{VERIFIED_LINKS.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <form
                onSubmit={handleCompose}
                className="bg-white rounded-lg border border-stone-200/90 p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-2">
                    Inquiry Category
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {(
                      [
                        'Room Stay',
                        'Restaurant & Group Dining',
                        'Banquet & Lawn Event',
                      ] as InquiryType[]
                    ).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`px-3.5 py-2.5 rounded-md text-xs font-medium border text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] ${
                          inquiryType === type
                            ? 'bg-[#16211B] text-white border-[#16211B]'
                            : 'bg-[#FAF8F4] text-[#44403C] border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="guest-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Full name"
                      className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 bg-[#FAF8F4] text-sm text-[#16211B] placeholder:text-stone-400 focus:outline-none focus:border-[#B47B2B]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="preferred-date"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 bg-[#FAF8F4] text-sm text-[#16211B] focus:outline-none focus:border-[#B47B2B]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guest-count"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5"
                  >
                    Number of Guests / Rooms (Optional)
                  </label>
                  <input
                    id="guest-count"
                    type="text"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    placeholder="e.g., 2 guests / 1 deluxe room or 150 banquet guests"
                    className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 bg-[#FAF8F4] text-sm text-[#16211B] placeholder:text-stone-400 focus:outline-none focus:border-[#B47B2B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-notes"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5"
                  >
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention suite preferences, celebration room styling, thali/group dining timing, or event requirements..."
                    className="w-full px-3.5 py-2.5 rounded-md border border-stone-300 bg-[#FAF8F4] text-sm text-[#16211B] placeholder:text-stone-400 focus:outline-none focus:border-[#B47B2B]"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-[#8E2424]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#B47B2B] hover:bg-[#9C6820] text-white text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16211B]"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare Inquiry Message</span>
                </button>

                {preparedMessage && (
                  <div className="mt-5 p-4 sm:p-5 rounded-md bg-[#F2EFE9] border border-stone-300/80 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#16211B]">
                        Ready-to-Send Inquiry Brief
                      </p>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-stone-300 text-xs font-medium text-[#16211B] hover:border-[#B47B2B] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-[#2C3630] leading-relaxed bg-white p-3.5 rounded border border-stone-200">
                      {preparedMessage}
                    </pre>
                    <p className="text-xs text-[#57534E]">
                      Copy this message and paste it in an Instagram DM to{' '}
                      <a
                        href={VERIFIED_LINKS.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium text-[#16211B] hover:text-[#B47B2B]"
                      >
                        {VERIFIED_LINKS.instagramHandle}
                      </a>{' '}
                      or contact the desk directly via our{' '}
                      <a
                        href={VERIFIED_LINKS.googleProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium text-[#16211B] hover:text-[#B47B2B]"
                      >
                        Google Business Profile
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
