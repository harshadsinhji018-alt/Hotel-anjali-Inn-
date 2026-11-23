import { ArrowUpRight } from 'lucide-react';
import { VERIFIED_LINKS } from '../data/hotelData';

export function Footer() {
  return (
    <footer className="bg-[#111613] text-[#FAF8F4] border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <a href="#hero" className="inline-flex items-center gap-2.5 mb-3">
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
              <span className="font-display text-2xl font-semibold tracking-tight">
                Hotel Anjali
              </span>
            </a>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Hotel Anjali Inn &amp; Restaurant (હોટલ અંજલી) — Comfortable guest suites, multi-cuisine
              family dining, and manicured celebration lawns.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#E5B869] font-semibold mb-4">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm text-stone-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Hotel
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#restaurant" className="hover:text-white transition-colors">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="#banquets" className="hover:text-white transition-colors">
                  Banquets
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#E5B869] font-semibold mb-4">
              Official Profiles
            </p>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <a
                  href={VERIFIED_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Instagram ({VERIFIED_LINKS.instagramHandle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={VERIFIED_LINKS.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Google Business Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Hotel Anjali Inn &amp; Restaurant. All rights reserved.</p>
          <a href="#hero" className="hover:text-white transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
