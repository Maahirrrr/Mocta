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
    <div className="relative min-h-screen bg-black text-white font-body selection:bg-white selection:text-black">
      {/* 4K UHD Atmospheric Depth & Ambient Lighting */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-50 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 50% -10%, rgba(255, 255, 255, 0.09) 0%, rgba(0, 0, 0, 0) 60%)',
        }}
      />
      {/* 4K Micro-film Grain Texture to eliminate banding on OLED / 4K monitors */}
      <div
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.025] contrast-150 brightness-150"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

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
