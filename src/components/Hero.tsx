import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { BlurText } from './BlurText';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-visible h-[1000px] w-full flex flex-col items-center justify-between bg-black text-white">
      {/* 4K UHD Full-Bleed Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="./images/hero_bg.jpeg"
          className="w-full h-full object-cover object-center scale-[1.03] filter contrast-[1.08] brightness-[0.98] transform-gpu will-change-transform"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle UHD film overlay */}
        <div className="absolute inset-0 bg-black/15 z-0" />
      </div>

      {/* Bottom gradient fade: height 300px, transparent to black */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none z-0"
        style={{ background: 'linear-gradient(to bottom, transparent, black)' }}
      />

      {/* Content: z-10, centered, paddingTop: 150px */}
      <div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 w-full"
        style={{ paddingTop: '150px' }}
      >
        {/* Badge Pill */}
        <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2.5 mb-8 border border-white/10 shadow-lg">
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body tracking-tight">
            New
          </span>
          <span className="text-xs md:text-sm text-white/90 font-body font-normal pr-3">
            Introducing AI-powered web design.
          </span>
        </div>

        {/* Heading: BlurText component */}
        <div className="mb-6 max-w-3xl">
          <BlurText
            text="The Website Your Brand Deserves"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.85] tracking-[-3px] md:tracking-[-4px]"
            delay={100}
            animateBy="words"
            direction="bottom"
          />
        </div>

        {/* Subtext: blur-in animation, delay 0.8s */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="text-sm md:text-base text-white/95 font-body font-normal leading-relaxed max-w-xl mx-auto mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons: delay 1.1s */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
          className="flex items-center gap-5"
        >
          <a
            href="#cta"
            className="liquid-glass-strong rounded-full px-6 py-2.5 text-sm font-medium font-body text-white flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-md group"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#how-it-works"
            className="liquid-glass rounded-full px-5 py-2.5 text-sm font-medium font-body text-white/90 hover:text-white flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-md group"
          >
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Play className="w-2.5 h-2.5 fill-current" />
            </span>
            <span>Watch the Film</span>
          </a>
        </motion.div>
      </div>

      {/* Partners Bar at bottom: mt-auto pb-8 pt-16 */}
      <div className="relative z-10 w-full mt-auto pb-8 pt-16 flex flex-col items-center">
        <div className="liquid-glass rounded-full px-4 py-1 text-xs text-white/60 font-body mb-6 border border-white/10">
          Trusted by the teams behind
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 px-4">
          {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'].map((brand) => (
            <span
              key={brand}
              className="text-2xl md:text-3xl font-heading italic text-white/80 hover:text-white transition-colors duration-200 select-none tracking-tight"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
