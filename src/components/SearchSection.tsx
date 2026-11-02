import React from 'react';
import { motion, type TargetAndTransition } from 'framer-motion';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay },
});

export const SearchSection: React.FC = () => {
  const platforms = [
    {
      name: 'ChatGPT',
      icon: './icon-chatgpt.png',
      description: 'Generative AI search synthesizes information into immediate, direct answers instead of pages of blue links.',
    },
    {
      name: 'Perplexity',
      icon: './icon-perplexity.png',
      description: 'Conversational answer engine with live web citations, shifting discovery toward comprehensive synthesized summaries.',
    },
    {
      name: 'Google AI',
      icon: './icon-google.png',
      description: 'AI Overviews placed above organic search results, transforming search intent from browsing to instant clarity.',
    },
  ];

  return (
    <section className="relative w-full pt-52 md:pt-64 pb-6 md:pb-9 px-8 md:px-28 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          {...fadeUp(0)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.08] mb-6 text-foreground"
        >
          Search has <span className="font-serif italic font-normal">changed.</span> Have you?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24"
        >
          Algorithms now curate understanding rather than rank websites. If your content lacks substance, it ceases to exist in the new discovery paradigm.
        </motion.p>

        {/* 3 platform cards */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 text-left">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.name}
              {...fadeUp(0.15 * idx)}
              className="liquid-glass rounded-2xl p-8 flex flex-col items-center text-center group hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-[200px] h-[200px] flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-card border border-border/40 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground">
                {platform.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-muted-foreground text-sm text-center tracking-wide"
        >
          If you don't answer the questions, someone else will.
        </motion.p>
      </div>
    </section>
  );
};
