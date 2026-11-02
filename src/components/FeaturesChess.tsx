import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import feature1Gif from '../assets/feature-1.gif';
import feature2Gif from '../assets/feature-2.gif';

export const FeaturesChess: React.FC = () => {
  return (
    <section id="capabilities" className="relative w-full py-28 md:py-36 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4 border border-white/10 shadow-sm">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        {/* Rows */}
        <div className="space-y-24 md:space-y-36">
          {/* Row 1: Content Left / Image Right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text side */}
            <div className="lg:w-1/2 flex flex-col items-start">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[1.05] mb-6">
                Designed to convert. Built to perform.
              </h3>
              <p className="text-white/60 font-body font-light text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Every pixel is intentional. Our AI studies what works across thousands of top sites&mdash;then builds yours to outperform them all.
              </p>
              <a
                href="#cta"
                className="liquid-glass-strong rounded-full px-6 py-2.5 text-sm font-medium font-body text-white flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-md group"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* GIF side */}
            <div className="lg:w-1/2 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden border border-white/10 p-2 md:p-3 shadow-2xl">
                <img
                  src={feature1Gif}
                  alt="Designed to convert preview"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 2: flex-row-reverse (Content Right / Image Left) */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16">
            {/* Text side */}
            <div className="lg:w-1/2 flex flex-col items-start">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[1.05] mb-6">
                It gets smarter. Automatically.
              </h3>
              <p className="text-white/60 font-body font-light text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Your site evolves on its own. AI monitors every click, scroll, and conversion&mdash;then optimizes in real time. No manual updates. Ever.
              </p>
              <a
                href="#cta"
                className="liquid-glass-strong rounded-full px-6 py-2.5 text-sm font-medium font-body text-white flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-md group"
              >
                <span>See how it works</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* GIF side */}
            <div className="lg:w-1/2 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden border border-white/10 p-2 md:p-3 shadow-2xl">
                <img
                  src={feature2Gif}
                  alt="Adaptive intelligence preview"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
