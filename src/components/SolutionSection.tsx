import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay },
});

export const SolutionSection: React.FC = () => {
  const features = [
    {
      title: 'Curated Feed',
      description:
        'A distraction-free reading stream prioritizing signal over outrage, algorithmically tuned to your intellectual curiosity.',
    },
    {
      title: 'Writer Tools',
      description:
        'Clean typography, native subscriber management, analytics that respect privacy, and automated distribution channels.',
    },
    {
      title: 'Community',
      description:
        'Thoughtful discussion threads anchored directly inside the publication, connecting writers and readers as intellectual peers.',
    },
    {
      title: 'Distribution',
      description:
        'Seamless multi-platform syndication across email inboxes, RSS, web archives, and automated AI summary feeds.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full py-32 md:py-44 px-8 md:px-28 border-t border-border/30 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            {...fadeUp(0)}
            className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4 font-semibold"
          >
            SOLUTION
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-medium tracking-tight"
          >
            The platform for <span className="font-serif italic font-normal">meaningful</span> content
          </motion.h2>
        </div>

        {/* Video: rounded-2xl, aspect-[3/1] object-cover */}
        <motion.div
          {...fadeUp(0.2)}
          className="w-full aspect-[3/1] rounded-2xl overflow-hidden mb-20 border border-border/40 bg-card relative"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/20 pointer-events-none" />
        </motion.div>

        {/* 4-column feature grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              {...fadeUp(0.1 * idx)}
              className="liquid-glass rounded-xl p-6 border border-border/30 hover:border-foreground/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-base mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
