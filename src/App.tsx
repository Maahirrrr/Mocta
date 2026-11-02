import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StartSection } from './components/StartSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturesChess } from './components/FeaturesChess';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { CtaFooter } from './components/CtaFooter';

export const App: React.FC = () => {
  // Initialize luxury smooth slow scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.2 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white font-body selection:bg-white selection:text-black">
      <div className="relative z-10">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div className="bg-black">
          <StartSection />
          <ServicesSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
};

export default App;
