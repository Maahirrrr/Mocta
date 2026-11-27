import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface TelemetryMode {
  label: string;
  fcp: string;
  lcp: string;
  cls: string;
  bundle: string;
  note: string;
}

const telemetryModes: Record<'mocta' | 'legacy', TelemetryMode> = {
  mocta: {
    label: 'Mocta Build',
    fcp: '0.4s',
    lcp: '0.8s',
    cls: '0.00',
    bundle: '42 KB',
    note: 'Clean React + native motion tokens compiled without third-party page builders.',
  },
  legacy: {
    label: 'Typical Agency Deck',
    fcp: '2.1s',
    lcp: '4.4s',
    cls: '0.24',
    bundle: '680 KB',
    note: 'Heavy plugins, unoptimized sliders, and render-blocking tag managers.',
  },
};

export const CapabilitiesSection: React.FC = () => {
  const [mode, setMode] = useState<'mocta' | 'legacy'>('mocta');
  const active = telemetryModes[mode];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="w-full py-24 md:py-36 bg-[#141414] text-[#f2f2f0]"
    >
      <div className="mocta-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Architectural visuals */}
          <div data-reveal className="lg:col-span-7 flex flex-col gap-6">
            <h2
              id="capabilities-heading"
              className="font-compressed text-[length:var(--step-head)] leading-[0.9] tracking-[-0.03em] text-[#f2f2f0] max-w-[16ch]"
            >
              Crafted in live code
            </h2>
            <p className="text-[length:var(--step-body)] text-[#a1a19e] leading-relaxed max-w-[54ch]">
              Design and engineering move in one repository. Every grid measure, motion curve, and responsive breakpoint is verified in a real Chromium browser before deployment.
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
                  Grid discipline and surface hierarchy without ornamental borders
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
                  Hardware-accelerated motion with explicit reduced-motion states
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Right: Real interactive studio UI fragment marked data-ui */}
          <div data-reveal style={{ ['--rd' as string]: '100ms' }} className="lg:col-span-5 lg:pt-12">
            <div
              data-ui
              className="bg-[#080808] p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[length:var(--step-small)] font-semibold text-[#f2f2f0]">
                  Production Runtime Comparison
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
                    onClick={() => setMode('legacy')}
                    className={`px-3 py-1.5 text-[length:var(--step-small)] font-medium transition-colors duration-150 ${
                      mode === 'legacy'
                        ? 'bg-[#f2f2f0] text-[#080808]'
                        : 'text-[#a1a19e] hover:text-[#f2f2f0]'
                    }`}
                  >
                    Legacy CMS
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-6 py-2">
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    First Contentful Paint
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.fcp}
                  </p>
                </div>
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    Largest Contentful Paint
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.lcp}
                  </p>
                </div>
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    Layout Shift
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.cls}
                  </p>
                </div>
                <div>
                  <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-1">
                    Initial JS Payload
                  </p>
                  <p className="font-compressed text-[length:var(--step-head)] leading-none text-[#f2f2f0] tabular">
                    {active.bundle}
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
                <span>Start a five-day sprint</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
