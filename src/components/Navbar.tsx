import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VERIFIED_LINKS } from '../data/hotelData';

const NAV_LINKS = [
  { label: 'Hotel', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md border-b border-stone-200/80 text-[#16211B] py-3.5 shadow-[0_2px_16px_rgba(22,33,27,0.05)]'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single clean brand wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] rounded-sm"
          >
            <svg
              viewBox="0 0 28 20"
              fill="none"
              className="w-6 h-4 shrink-0 text-[#D49A42]"
              aria-hidden="true"
            >
              <path
                d="M2 16L4.5 5.5L10 10.5L14 3L18 10.5L23.5 5.5L26 16H2Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <line x1="2" y1="18.5" x2="26" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="font-display text-2xl sm:text-[26px] font-semibold tracking-tight leading-none">
              Hotel Anjali
            </span>
          </a>

          {/* Zone 2: Clean single-line text nav links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#B47B2B] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] rounded-sm ${
                  scrolled ? 'text-[#2C3630] hover:text-[#16211B]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide uppercase rounded-md whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] ${
                scrolled
                  ? 'bg-[#16211B] text-[#FAF8F4] hover:bg-[#24352B]'
                  : 'bg-[#FAF8F4] text-[#16211B] hover:bg-white'
              }`}
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B47B2B] ${
                scrolled
                  ? 'text-[#16211B] hover:bg-stone-200/60'
                  : 'text-white hover:bg-white/15'
              }`}
            >
              <Menu className="w-6 h-6" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#111613] text-[#FAF8F4] flex flex-col justify-between p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <a
                href="#hero"
                onClick={handleLinkClick}
                className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight"
              >
                <svg
                  viewBox="0 0 28 20"
                  fill="none"
                  className="w-6 h-4 text-[#D49A42]"
                  aria-hidden="true"
                >
                  <path
                    d="M2 16L4.5 5.5L10 10.5L14 3L18 10.5L23.5 5.5L26 16H2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <line x1="2" y1="18.5" x2="26" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>Hotel Anjali</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex items-center justify-center w-11 h-11 rounded-md text-white/80 hover:text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" strokeWidth={1.75} />
              </button>
            </div>

            <nav className="flex flex-col py-8 divide-y divide-white/10">
              {[
                { label: 'Hotel & Story', href: '#about' },
                { label: 'Stay & Rooms', href: '#rooms' },
                { label: 'Restaurant & Menu', href: '#restaurant' },
                { label: 'Banquets & Lawns', href: '#banquets' },
                { label: 'Photo Gallery', href: '#gallery' },
                { label: 'Location & Directions', href: '#location' },
                { label: 'Contact & Inquiry', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="py-4 font-display text-3xl font-medium text-[#FAF8F4] hover:text-[#D49A42] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-50" />
                </a>
              ))}
            </nav>

            <div className="border-t border-white/15 pt-5 flex flex-wrap items-center justify-between gap-4 text-sm text-stone-300">
              <a
                href={VERIFIED_LINKS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D49A42] transition-colors inline-flex items-center gap-1.5"
              >
                Instagram {VERIFIED_LINKS.instagramHandle}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={VERIFIED_LINKS.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D49A42] transition-colors inline-flex items-center gap-1.5"
              >
                Google Business Profile
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
