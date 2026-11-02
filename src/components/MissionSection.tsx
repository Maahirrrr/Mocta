import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
  isHighlight?: boolean;
}

const Word: React.FC<WordProps> = ({ children, range, progress, isHighlight }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    ['hsl(0 0% 40%)', isHighlight ? 'hsl(var(--foreground))' : 'hsl(var(--hero-subtitle))']
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
};

export const MissionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const p1Text =
    "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const p1Words = p1Text.split(' ');

  const p2Text =
    "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";
  const p2Words = p2Text.split(' ');

  const highlights = new Set(['curiosity', 'meets', 'clarity']);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative w-full pt-0 pb-32 md:pb-44 px-8 md:px-28 bg-background text-foreground flex flex-col items-center"
    >
      {/* 800x800 looping autoplaying muted video */}
      <div className="w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden mb-20 border border-border/40 relative shadow-2xl bg-card">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Scroll-driven word-by-word reveal */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Paragraph 1 */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-snug md:leading-tight">
          {p1Words.map((word, i) => {
            const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
            const start = (i / p1Words.length) * 0.5;
            const end = start + 0.5 / p1Words.length;
            return (
              <Word
                key={i}
                range={[start, end]}
                progress={scrollYProgress}
                isHighlight={highlights.has(cleanWord)}
              >
                {word}
              </Word>
            );
          })}
        </p>

        {/* Paragraph 2 */}
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-relaxed text-muted-foreground">
          {p2Words.map((word, i) => {
            const start = 0.5 + (i / p2Words.length) * 0.5;
            const end = start + 0.5 / p2Words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
};
