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
    id: 'identity',
    label: 'Brand Identity & Type System',
    price: 2000,
    summary: 'Wordmark geometry, palette roles, and typography kit',
  },
  {
    id: 'motion',
    label: 'Custom GSAP & Scroll Choreography',
    price: 1500,
    summary: 'Scroll-linked reveals and reduced-motion engineering',
  },
  {
    id: 'automation',
    label: 'AI Quote & Intake Workflow',
    price: 1800,
    summary: 'Automated lead triage, pricing slips, and CRM sync',
  },
];

export const ProcessPricingSection: React.FC = () => {
  const [engagement, setEngagement] = useState<'sprint' | 'retainer'>('sprint');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['motion']);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const basePrice = engagement === 'sprint' ? 6500 : 4800;
  const addonTotal = addons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const total = basePrice + addonTotal;

  const chosenNames = addons
    .filter((a) => selectedAddons.includes(a.id))
    .map((a) => a.label)
    .join(', ');

  const mailSubject = encodeURIComponent(
    `Mocta Project Brief: ${engagement === 'sprint' ? 'Five-Day Sprint' : 'Studio Retainer'}`
  );
  const mailBody = encodeURIComponent(
    `Engagement: ${engagement === 'sprint' ? 'Five-Day Sprint ($6,500 base)' : 'Studio Retainer ($4,800/mo)'}\nSelected tracks: ${chosenNames || 'Core build'}\nEstimated budget: $${total.toLocaleString()}\n\nTell us about your project:`
  );

  return (
    <>
      {/* Five-day Sprint Process Section */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="w-full py-24 md:py-36 bg-[#080808] text-[#f2f2f0]"
      >
        <div className="mocta-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div data-reveal className="lg:col-span-5">
              <h2
                id="process-heading"
                className="font-compressed text-[length:var(--step-head)] leading-[0.9] tracking-[-0.03em] text-[#f2f2f0] max-w-[14ch] mb-6"
              >
                Five days from brief to launch
              </h2>
              <p className="text-[length:var(--step-body)] text-[#a1a19e] leading-relaxed max-w-[38ch] mb-8">
                Every build follows one fixed studio schedule: architecture on Monday, live interactive build on Wednesday, browser QA and launch on Friday.
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
                  Clear daily increments replace multi-month approval cycles
                </figcaption>
              </figure>
            </div>

            {/* Itinerary on surface slip */}
            <div data-reveal style={{ ['--rd' as string]: '100ms' }} className="lg:col-span-7 bg-[#141414] p-7 md:p-10 flex flex-col gap-8">
              <div>
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Monday: Scope &amp; art direction
                </h3>
                <div className="space-y-3 text-[length:var(--step-body)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Subject inventory &amp; messaging architecture</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 1 morning</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Type scale, palette roles &amp; hero direction</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 1 evening</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Wednesday: Live code &amp; motion
                </h3>
                <div className="space-y-3 text-[length:var(--step-body)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Responsive React / Webflow grid assembly</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 2–3</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Scroll physics, hover previews &amp; AI intake hooks</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 3 evening</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Friday: Device verification &amp; launch
                </h3>
                <div className="space-y-3 text-[length:var(--step-body)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Desktop, tablet &amp; phone screenshot audit</span>
                    <span className="text-[#a1a19e] tabular shrink-0">Day 4–5</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#f2f2f0] text-[#080808] p-4 flex items-center justify-between gap-4 font-semibold text-[length:var(--step-small)]">
                <span>Shipped production repository &amp; live domain</span>
                <span className="tabular">Total: 5 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inverted Paper Field: Interactive Project Scope & Pricing Configurator */}
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="w-full py-24 md:py-32 bg-[#f2f2f0] text-[#080808]"
      >
        <div className="mocta-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <h2
                id="pricing-heading"
                className="font-compressed text-[length:var(--step-display)] leading-[0.88] tracking-[-0.03em] text-[#080808] max-w-[12ch]"
              >
                Scope your build
              </h2>
              <p className="text-[length:var(--step-lead)] text-[#080808] leading-[1.35] max-w-[36ch]">
                Select an engagement model and optional deliverables to calculate your exact fixed project fee.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 max-w-md">
                <div>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none tabular mb-1">
                    200+
                  </p>
                  <p className="text-[length:var(--step-small)] text-[#4a4a48]">
                    Shipped studio builds
                  </p>
                </div>
                <div>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none tabular mb-1">
                    98%
                  </p>
                  <p className="text-[length:var(--step-small)] text-[#4a4a48]">
                    Client satisfaction score
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Configurator */}
            <div data-ui className="lg:col-span-6 bg-[#e4e4e0] p-6 md:p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setEngagement('sprint')}
                  className={`p-4 text-left transition-colors duration-150 ${
                    engagement === 'sprint'
                      ? 'bg-[#080808] text-[#f2f2f0]'
                      : 'bg-[#f2f2f0] text-[#080808] hover:bg-[#ffffff]'
                  }`}
                >
                  <span className="block text-[length:var(--step-small)] font-semibold">
                    Five-Day Sprint
                  </span>
                  <span className="font-compressed text-[length:var(--step-head)] leading-none tabular block mt-2">
                    $6,500
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setEngagement('retainer')}
                  className={`p-4 text-left transition-colors duration-150 ${
                    engagement === 'retainer'
                      ? 'bg-[#080808] text-[#f2f2f0]'
                      : 'bg-[#f2f2f0] text-[#080808] hover:bg-[#ffffff]'
                  }`}
                >
                  <span className="block text-[length:var(--step-small)] font-semibold">
                    Monthly Retainer
                  </span>
                  <span className="font-compressed text-[length:var(--step-head)] leading-none tabular block mt-2">
                    $4,800/mo
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
                    Estimated total
                  </span>
                  <span className="font-compressed text-[length:var(--step-head)] leading-none tabular text-[#080808]">
                    ${total.toLocaleString()}
                    {engagement === 'retainer' ? '/mo' : ''}
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
