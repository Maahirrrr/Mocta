import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProcessPricingSection } from './components/ProcessPricingSection';
import { CtaFooter } from './components/CtaFooter';

export const App: React.FC = () => {
  // Smooth inertial scroll & single-shot section reveal observer
  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));

    if (calm || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      revealEls.forEach((el) => io.observe(el));

      // Cleanup observer on unmount
      var disconnectObserver = () => io.disconnect();
    }

    if (calm) return () => disconnectObserver?.();

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.1 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      disconnectObserver?.();
    };
  }, []);

  return (
    <div className="min-h-[100svh] bg-[#080808] text-[#f2f2f0] font-sans">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <CapabilitiesSection />
        <ProcessPricingSection />
      </main>
      <CtaFooter />
    </div>
  );
};

export default App;
