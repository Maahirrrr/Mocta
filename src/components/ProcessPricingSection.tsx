import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface Addon {
  id: string;
  label: string;
  price: number;
  summary: string;
}

const addons: Addon[] = [
  {
    id: 'illustration',
    label: 'Fine-Arts Brand & Illustration Pack',
    price: 900,
    summary: 'Drawn logo variations, custom icons, and typography kit',
  },
  {
    id: 'psychology',
    label: 'Behavioral Conversion Audit',
    price: 800,
    summary: 'Decision-flow teardown and friction removal across checkout',
  },
  {
    id: 'ai-agent',
    label: 'AI Quote & Lead Workflow',
    price: 1400,
    summary: 'Automated project scoping, intake routing, and email sync',
  },
];

export const ProcessPricingSection: React.FC = () => {
  const [engagement, setEngagement] = useState<'landing' | 'website' | 'app'>('landing');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['psychology']);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const basePrices: Record<'landing' | 'website' | 'app', { price: number; name: string }> = {
    landing: { price: 2400, name: 'Landing Page Sprint (5 days)' },
    website: { price: 4800, name: 'Startup Website & Brand (2 weeks)' },
    app: { price: 8500, name: 'Web / Mobile App + AI (4 weeks)' },
  };

  const addonTotal = addons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const total = basePrices[engagement].price + addonTotal;

  const chosenNames = addons
    .filter((a) => selectedAddons.includes(a.id))
    .map((a) => a.label)
    .join(', ');

  const mailSubject = encodeURIComponent(`Mocta Project Scope: ${basePrices[engagement].name}`);
  const mailBody = encodeURIComponent(
    `Selected package: ${basePrices[engagement].name}\nOptional modules: ${chosenNames || 'Core build'}\nEstimated budget: $${total.toLocaleString()}\n\nBusiness & timeline notes:`
  );

  return (
    <>
      {/* Services-to-Products Process Section */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="w-full py-24 md:py-32 bg-[#080808] text-[#f2f2f0]"
      >
        <div className="mocta-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div data-reveal className="lg:col-span-5">
              <h2
                id="process-heading"
                className="font-compressed text-[length:var(--step-head)] leading-[0.9] tracking-[-0.03em] text-[#f2f2f0] max-w-[15ch] mb-6"
              >
                From client builds to product software
              </h2>
              <p className="text-[length:var(--step-body)] text-[#a1a19e] leading-relaxed max-w-[40ch] mb-8">
                Every startup website, brand system, and custom app we ship reveals real operational bottlenecks. Solving them for businesses drives both immediate revenue for our clients and the reusable AI products built inside Mocta.
              </p>

              <figure className="flex flex-col gap-2">
                <img
                  src="./assets/concrete-stairs-bw.webp"
                  width={1024}
                  height={683}
                  alt="Stepped concrete architectural silhouette under sharp afternoon light"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/10] object-cover bg-[#141414]"
                />
                <figcaption className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Structured delivery schedule across research, fine-arts study, and code
                </figcaption>
              </figure>
            </div>

            <div
              data-reveal
              style={{ ['--rd' as string]: '100ms' }}
              className="lg:col-span-7 bg-[#141414] p-7 md:p-10 flex flex-col gap-8"
            >
              <div>
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Stage 1: Behavioral research &amp; drawn studies
                </h3>
                <div className="space-y-3 text-[length:var(--step-body)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Buyer friction audit &amp; offer positioning</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Days 1–2</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Hand-drawn layouts, palette &amp; type selection</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 2</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Stage 2: Engineering, UX &amp; AI workflows
                </h3>
                <div className="space-y-3 text-[length:var(--step-body)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Responsive website, landing page, or app code</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Days 3–4</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Quote builders, intake bots &amp; motion physics</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 4</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Stage 3: Device QA, launch &amp; product insights
                </h3>
                <div className="space-y-3 text-[length:var(--step-body)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Real-browser checks across desktop and mobile</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 5</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#f2f2f0] text-[#080808] p-4 flex items-center justify-between gap-4 font-semibold text-[length:var(--step-small)]">
                <span>Live site, brand kit &amp; workflow automation</span>
                <span className="tabular">From 5 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inverted Paper Field: Fine-Arts Drawing Study + Startup Scope Configurator */}
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="w-full py-24 md:py-32 bg-[#f2f2f0] text-[#080808]"
      >
        <div className="mocta-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <h2
                id="pricing-heading"
                className="font-compressed text-[length:var(--step-display)] leading-[0.88] tracking-[-0.03em] text-[#080808] max-w-[12ch]"
              >
                Scope your build
              </h2>
              <p className="text-[length:var(--step-lead)] text-[#080808] leading-[1.35] max-w-[36ch]">
                Clear upfront packages sized for founders, studios, and growing local businesses.
              </p>

              {/* 17th-century ruled pen & graphite study matching Mocta's fine-arts drafting roots */}
              <figure className="flex flex-col gap-2 pt-2">
                <img
                  src="./assets/architectural-study.jpg"
                  width={3887}
                  height={2740}
                  alt="17th-century architectural drawing in pen, ink, and ruled red graphite construction lines"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover"
                />
                <figcaption className="text-[length:var(--step-small)] text-[#4a4a48]">
                  Drafted proportions precede every screen layout. Study via The Met (CC0).
                </figcaption>
              </figure>
            </div>

            <div data-ui className="lg:col-span-7 bg-[#e4e4e0] p-6 md:p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setEngagement('landing')}
                  className={`p-4 text-left transition-colors duration-150 ${
                    engagement === 'landing'
                      ? 'bg-[#080808] text-[#f2f2f0]'
                      : 'bg-[#f2f2f0] text-[#080808] hover:bg-[#ffffff]'
                  }`}
                >
                  <span className="block text-[length:var(--step-small)] font-semibold">
                    Landing Page
                  </span>
                  <span className="font-compressed text-[length:var(--step-head)] leading-none tabular block mt-2">
                    $2,400
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setEngagement('website')}
                  className={`p-4 text-left transition-colors duration-150 ${
                    engagement === 'website'
                      ? 'bg-[#080808] text-[#f2f2f0]'
                      : 'bg-[#f2f2f0] text-[#080808] hover:bg-[#ffffff]'
                  }`}
                >
                  <span className="block text-[length:var(--step-small)] font-semibold">
                    Brand &amp; Website
                  </span>
                  <span className="font-compressed text-[length:var(--step-head)] leading-none tabular block mt-2">
                    $4,800
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setEngagement('app')}
                  className={`p-4 text-left transition-colors duration-150 ${
                    engagement === 'app'
                      ? 'bg-[#080808] text-[#f2f2f0]'
                      : 'bg-[#f2f2f0] text-[#080808] hover:bg-[#ffffff]'
                  }`}
                >
                  <span className="block text-[length:var(--step-small)] font-semibold">
                    App &amp; AI Build
                  </span>
                  <span className="font-compressed text-[length:var(--step-head)] leading-none tabular block mt-2">
                    $8,500
                  </span>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {addons.map((addon) => {
                  const active = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      aria-pressed={active}
                      className={`w-full p-4 text-left flex items-center justify-between gap-4 transition-colors duration-150 ${
                        active
                          ? 'bg-[#080808] text-[#f2f2f0]'
                          : 'bg-[#f2f2f0] text-[#080808] hover:bg-[#ffffff]'
                      }`}
                    >
                      <div>
                        <span className="block text-[length:var(--step-body)] font-semibold">
                          {addon.label}
                        </span>
                        <span
                          className={`text-[length:var(--step-small)] ${
                            active ? 'text-[#a1a19e]' : 'text-[#4a4a48]'
                          }`}
                        >
                          {addon.summary}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-semibold tabular text-[length:var(--step-small)]">
                          +${addon.price.toLocaleString()}
                        </span>
                        <span
                          className={`w-5 h-5 flex items-center justify-center ${
                            active ? 'bg-[#2563eb] text-[#ffffff]' : 'bg-[#d4d4d0]'
                          }`}
                        >
                          {active ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : null}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[length:var(--step-small)] text-[#4a4a48] block">
                    Estimated project total
                  </span>
                  <span className="font-compressed text-[length:var(--step-head)] leading-none tabular text-[#080808]">
                    ${total.toLocaleString()}
                  </span>
                </div>

                <a
                  href={`mailto:hello@mocta.design?subject=${mailSubject}&body=${mailBody}`}
                  className="bg-[#2563eb] text-[#ffffff] rounded-full px-7 py-3.5 text-[length:var(--step-small)] font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-[transform,opacity] duration-150"
                >
                  <span>Book a call</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
