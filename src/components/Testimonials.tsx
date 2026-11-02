import React from 'react';

const testimonials = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full py-28 md:py-36 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4 border border-white/10 shadow-sm">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        {/* 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
            >
              <p className="text-white/80 font-body font-light text-sm md:text-base italic mb-8 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <h4 className="text-white font-body font-medium text-sm">
                  {t.name}
                </h4>
                <p className="text-white/50 font-body font-light text-xs mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
