import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SearchSection } from './components/SearchSection';
import { MissionSection } from './components/MissionSection';
import { SolutionSection } from './components/SolutionSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Initialize Studio Namma-inspired smooth slow scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Ultra-smooth slow inertia damping (Studio Namma uses 0.05)
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
          lenis.scrollTo(el as HTMLElement, { offset: -60, duration: 1.4 });
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <ServicesSection />
      <div id="search">
        <SearchSection />
      </div>
      <div id="philosophy">
        <MissionSection />
      </div>
      <SolutionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
