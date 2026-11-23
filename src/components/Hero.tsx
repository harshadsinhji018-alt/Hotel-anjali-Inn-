import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex items-end overflow-hidden bg-[#111613]"
    >
      {/* Full-bleed Property & Lawn Hero Photograph with Subtle Parallax */}
      <motion.div
        style={shouldReduceMotion ? undefined : { scale: imageScale, y: imageY }}
        className="absolute inset-0 will-change-transform"
      >
        <SafeImage
          src="/assets/aistudio/image_630862b8.png"
          alt="Hotel Anjali Restaurant exterior building with rooftop crown sign, palm trees, and green dining lawn"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Measured Contrast Scrims */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0D1310]/95 via-[#0D1310]/45 to-[#0D1310]/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0D1310]/70 via-[#0D1310]/20 to-transparent"
      />

      {/* Editorial Hero Content */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 pt-28 pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm tracking-[0.18em] uppercase text-[#E5B869] font-medium mb-4"
          >
            <span>Hotel Anjali Inn &amp; Restaurant</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>હોટલ અંજલી</span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white font-semibold tracking-tight leading-[1.04] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}
          >
            Restful stays, generous dining &amp; lush celebration lawns.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-stone-200 max-w-xl leading-relaxed mb-8"
          >
            Welcome to Hotel Anjali—where comfortable air-conditioned guest suites, authentic
            Gujarati and Punjabi cuisine, and expansive palm-lined gardens come together under one roof.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#rooms"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#B47B2B] hover:bg-[#9C6820] text-white text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Hotel</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#restaurant"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Restaurant</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Clean Operational Strip at Bottom */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="mt-12 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs sm:text-sm text-stone-300"
        >
          <div>
            <p className="text-white font-medium mb-0.5">Guest Accommodation</p>
            <p className="text-stone-400">Air-Conditioned Rooms &amp; Suites</p>
          </div>
          <div>
            <p className="text-white font-medium mb-0.5">Multi-Cuisine Dining</p>
            <p className="text-stone-400">Gujarati, Punjabi &amp; Cafe Bites</p>
          </div>
          <div>
            <p className="text-white font-medium mb-0.5">Banquets &amp; Lawns</p>
            <p className="text-stone-400">Indoor Halls &amp; Open-Air Grounds</p>
          </div>
          <div>
            <p className="text-white font-medium mb-0.5">On-Site Convenience</p>
            <p className="text-stone-400">Spacious Paved Parking &amp; Reception</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
