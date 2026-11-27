import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="intro-heading"
      className="w-full py-24 md:py-32 bg-[#080808] text-[#f2f2f0]"
    >
      <div className="mocta-wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left study plate */}
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
              Spatial composition from fine-arts drafting applied directly to screen hierarchy.
            </p>
          </div>

          {/* Right studio thesis */}
          <div className="md:col-span-7 md:pt-6 flex flex-col justify-between gap-8">
            <h2
              id="intro-heading"
              data-reveal
              className="font-compressed text-[length:var(--step-head)] leading-[0.92] tracking-[-0.03em] text-[#f2f2f0] max-w-[16ch]"
            >
              Craft, behavior, and engineering
            </h2>

            <p
              data-reveal
              style={{ ['--rd' as string]: '80ms' }}
              className="text-[length:var(--step-lead)] text-[#f2f2f0] leading-[1.38] max-w-[42ch]"
            >
              Small businesses and startups lose customers when their site hides the offer behind vague slogans or cluttered navigation. Mocta pairs observational fine-arts design with behavioral psychology and production AI engineering. We design how an identity feels on first glance, structure pages around buyer decisions, and ship clean production software.
            </p>

            {/* Concrete capabilities strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4">
              <div data-reveal style={{ ['--rd' as string]: '120ms' }}>
                <p className="font-compressed text-[length:var(--step-lead)] leading-none text-[#f2f2f0] tabular mb-2">
                  4 tracks
                </p>
                <p className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Websites, landing pages, apps, and complete brand identities
                </p>
              </div>
              <div data-reveal style={{ ['--rd' as string]: '180ms' }}>
                <p className="font-compressed text-[length:var(--step-lead)] leading-none text-[#f2f2f0] tabular mb-2">
                  Behavioral UX
                </p>
                <p className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Layouts shaped around decision flow and buyer confidence
                </p>
              </div>
              <div data-reveal style={{ ['--rd' as string]: '240ms' }}>
                <p className="font-compressed text-[length:var(--step-lead)] leading-none text-[#f2f2f0] tabular mb-2">
                  AI product lab
                </p>
                <p className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Every recurring client problem becomes a tested software tool
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
