import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => {
      if (calm.matches) {
        video.removeAttribute('autoplay');
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (calm.matches) return;
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    syncMotion();
    calm.addEventListener('change', syncMotion);

    return () => {
      observer.disconnect();
      calm.removeEventListener('change', syncMotion);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-4rem)] w-full flex flex-col justify-end overflow-hidden bg-[#080808] text-[#f2f2f0]"
    >
      {/* Full-bleed background film */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="./images/hero_bg.jpeg"
          aria-hidden="true"
          className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[0.95]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Neutral bottom scrim behind display typography */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[52%] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, rgba(8, 8, 8, 0.94) 0%, rgba(8, 8, 8, 0.65) 55%, rgba(8, 8, 8, 0) 100%)' }} /* taste-skill-ignore: neutral scrim over film bottom edge per colour.md §7 */
      />

      <div className="relative z-20 mocta-wrap pb-8 md:pb-12 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 className="font-compressed text-[length:var(--step-display)] leading-[0.88] tracking-[-0.03em] text-[#f2f2f0]">
              <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <span data-line style={{ ['--i' as string]: 0 }}>
                  UX, branding &amp; AI
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <span data-line style={{ ['--i' as string]: 1 }}>
                  built for startups
                </span>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end gap-5">
            <p
              data-load
              style={{ ['--d' as string]: '240ms' }}
              className="text-[length:var(--step-body)] text-[#f2f2f0] leading-relaxed max-w-[34ch] lg:text-right"
            >
              Websites, branding, apps, and AI engineered for startups that convert.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#pricing"
                data-load
                style={{ ['--d' as string]: '340ms' }}
                className="bg-[#f2f2f0] text-[#080808] rounded-full px-6 py-3 text-[length:var(--step-small)] font-semibold inline-flex items-center gap-1.5 hover:bg-[#ffffff] active:scale-[0.97] transition-[transform,background-color] duration-150"
              >
                <span>Book a call</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#process"
                data-load
                style={{ ['--d' as string]: '420ms' }}
                className="text-[length:var(--step-small)] font-medium text-[#f2f2f0] underline underline-offset-4 decoration-[#a1a19e] hover:decoration-[#f2f2f0] transition-colors duration-200 py-2"
              >
                How we work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
