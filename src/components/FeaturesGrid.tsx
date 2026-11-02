import React from 'react';
import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

const cards = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    description: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    description: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    description: 'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="relative w-full py-28 md:py-36 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4 border border-white/10 shadow-sm">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
              >
                <div>
                  <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-heading italic text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
