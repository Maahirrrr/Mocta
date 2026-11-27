import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="intro-heading"
      className="w-full py-24 md:py-32 bg-[#080808] text-[#f2f2f0]"
    >
      <div className="mocta-wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left architectural specimen */}
          <div data-reveal className="md:col-span-5 flex flex-col gap-3">
            <img
              src="./assets/perspective-shot-building-windows-melbourne.webp"
              width={1024}
              height={1024}
              alt="Monochrome upward perspective of concrete building walls and window grid framing sharp daylight sky"
              loading="lazy"
              decoding="async"
              className="w-full aspect-square object-cover bg-[#141414]"
            />
            <p className="text-[length:var(--step-small)] text-[#a1a19e] leading-relaxed">
              Disciplined proportion: structural clarity carried from printed architecture to production code.
            </p>
          </div>

          {/* Right editorial statement */}
          <div className="md:col-span-7 md:pt-6 flex flex-col justify-between gap-8">
            <h2
              id="intro-heading"
              data-reveal
              className="font-compressed text-[length:var(--step-head)] leading-[0.92] tracking-[-0.03em] text-[#f2f2f0] max-w-[16ch]"
            >
              Why teams build with Mocta
            </h2>

            <p
              data-reveal
              style={{ ['--rd' as string]: '80ms' }}
              className="text-[length:var(--step-lead)] text-[#f2f2f0] leading-[1.38] max-w-[40ch]"
            >
              Most agencies spend sixteen weeks circulating static slide decks before a single component renders in a browser. Mocta starts directly in production code from week one, combining custom typography, tested interaction motion, and practical quote and intake automation shipped cleanly to your own stack.
            </p>

            {/* Open editorial baseline figures (unboxed, clean scale) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div data-reveal style={{ ['--rd' as string]: '120ms' }}>
                <p className="font-compressed text-[length:var(--step-head)] md:text-[length:var(--step-lead)] lg:text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular mb-2">
                  5 days
                </p>
                <p className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Average window from brief to live staging build
                </p>
              </div>
              <div data-reveal style={{ ['--rd' as string]: '180ms' }}>
                <p className="font-compressed text-[length:var(--step-head)] md:text-[length:var(--step-lead)] lg:text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular mb-2">
                  100%
                </p>
                <p className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Owned clean React, Webflow, or static repository code
                </p>
              </div>
              <div data-reveal style={{ ['--rd' as string]: '240ms' }}>
                <p className="font-compressed text-[length:var(--step-head)] md:text-[length:var(--step-lead)] lg:text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular mb-2">
                  Paris / SF
                </p>
                <p className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Direct senior design and engineering teams across three time zones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
