import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface BehaviorAudit {
  label: string;
  steps: string;
  clarity: string;
  targets: string;
  payload: string;
  note: string;
}

const auditModes: Record<'mocta' | 'standard', BehaviorAudit> = {
  mocta: {
    label: 'Mocta UX Build',
    steps: '2 steps',
    clarity: '0.9s',
    targets: '1 action',
    payload: '134 KB',
    note: 'Structured around attention order: immediate headline comprehension, visible social clarity, and one frictionless path to inquire.',
  },
  standard: {
    label: 'Typical Small-Biz Site',
    steps: '6 steps',
    clarity: '4.8s',
    targets: '11 links',
    payload: '2.4 MB',
    note: 'Buried offers, vague taglines, heavy builders, and scattered competing buttons stall first-time visitors before they scroll.',
  },
};

export const CapabilitiesSection: React.FC = () => {
  const [mode, setMode] = useState<'mocta' | 'standard'>('mocta');
  const active = auditModes[mode];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="w-full py-24 md:py-32 bg-[#141414] text-[#f2f2f0]"
    >
      <div className="mocta-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Psychology + Fine-arts visual grounding */}
          <div data-reveal className="lg:col-span-7 flex flex-col gap-6">
            <h2
              id="capabilities-heading"
              className="font-compressed text-[length:var(--step-head)] leading-[0.9] tracking-[-0.03em] text-[#f2f2f0] max-w-[16ch]"
            >
              Psychology meets engineering
            </h2>
            <p className="text-[length:var(--step-body)] text-[#a1a19e] leading-relaxed max-w-[54ch]">
              Before writing interface code, Mocta dissects how people actually evaluate an offer. Applying behavioral psychology alongside fine-arts composition keeps visitor attention on what matters and turns skeptical traffic into real inquiries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <figure className="flex flex-col gap-2">
                <img
                  src="./assets/long-shadows-concrete-wall.webp"
                  width={1024}
                  height={683}
                  alt="Geometric daylight cast across poured concrete panels"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover bg-[#080808]"
                />
                <figcaption className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Clear value contrast directs eye path before secondary copy loads
                </figcaption>
              </figure>
              <figure className="flex flex-col gap-2">
                <img
                  src="./assets/black-white-shot-concrete-wall.webp"
                  width={1024}
                  height={683}
                  alt="Diagonal sunlit railings silhouetted sharply against concrete"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover bg-[#080808]"
                />
                <figcaption className="text-[length:var(--step-small)] text-[#a1a19e]">
                  Every bottleneck solved on client work feeds reusable AI tools
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Right: Interactive Behavioral & Performance Teardown UI Fragment */}
          <div data-reveal style={{ ['--rd' as string]: '100ms' }} className="lg:col-span-5 lg:pt-10">
            <div
              data-ui
              className="bg-[#080808] p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[length:var(--step-small)] font-semibold text-[#f2f2f0]">
                  Behavioral UX Teardown
                </span>
                <div className="flex items-center gap-1 bg-[#141414] p-1">
                  <button
                    type="button"
                    onClick={() => setMode('mocta')}
                    className={`px-3 py-1.5 text-[length:var(--step-small)] font-medium transition-colors duration-150 ${
                      mode === 'mocta'
                        ? 'bg-[#f2f2f0] text-[#080808]'
                        : 'text-[#a1a19e] hover:text-[#f2f2f0]'
                    }`}
                  >
                    Mocta Build
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('standard')}
                    className={`px-3 py-1.5 text-[length:var(--step-small)] font-medium transition-colors duration-150 ${
                      mode === 'standard'
                        ? 'bg-[#f2f2f0] text-[#080808]'
                        : 'text-[#a1a19e] hover:text-[#f2f2f0]'
                    }`}
                  >
                    Standard Site
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-6 py-2">
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    Steps to Primary Action
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.steps}
                  </p>
                </div>
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    Offer Comprehension
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.clarity}
                  </p>
                </div>
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    Competing Choices
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.targets}
                  </p>
                </div>
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    Initial Bundle Weight
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.payload}
                  </p>
                </div>
              </div>

              <p className="text-[length:var(--step-small)] text-[#a1a19e] leading-relaxed">
                {active.note}
              </p>

              <a
                href="#pricing"
                className="bg-[#2563eb] text-[#ffffff] py-3 px-5 text-[length:var(--step-small)] font-semibold inline-flex items-center justify-between hover:opacity-90 transition-opacity duration-150"
              >
                <span>Audit &amp; scope your project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
