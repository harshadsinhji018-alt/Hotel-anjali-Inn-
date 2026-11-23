/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { RestaurantSection } from './components/RestaurantSection';
import { BanquetsSection } from './components/BanquetsSection';
import { GallerySection } from './components/GallerySection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#16211B]">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <RoomsSection />
          <RestaurantSection />
          <BanquetsSection />
          <GallerySection />
          <LocationContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
