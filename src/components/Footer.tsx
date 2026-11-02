import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [timeStr, setTimeStr] = useState<string>('');

  // Live real-time studio clock (updating every second)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as 24-hr HH:MM:SS in Paris or UTC
      const formatted = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-driven automatic resizing / stretching of the giant wordmark
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  // Stretches height smoothly from 120px to 65vh as user reaches the very bottom
  const logoHeight = useTransform(scrollYProgress, [0, 1], ['120px', '58vh']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Precise architectural SVG glyphs for M O C T A matching Studio Namma's ultra-condensed style
  const p_M = 'M0 475V0H130.68L148.53 200.47L159.36 383.94H161.28L171.47 200.47L189.32 0H320V475H235.63L238.82 262.98L247.10 78.83H245.19L204.38 475H112.57L71.77 78.83H69.22L77.51 262.98L81.33 475H0Z';
  const p_O = 'M340 0H600V475H340V0ZM422 75V400H518V75H422Z';
  const p_C = 'M620 0H870V75H705V400H870V475H620V0Z';
  const p_T = 'M890 0H1180V75H1080V475H990V75H890V0Z';
  const p_A = 'M1202 475L1263.19 0H1407.75L1472 475H1368.74L1359.56 363.56H1312.15L1302.97 475H1202ZM1314.44 279.29H1356.52L1336.63 72.03H1333.57L1314.44 279.29Z';

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black text-white border-t border-white/10 overflow-hidden pt-20 flex flex-col justify-between"
    >
      {/* Top Header / Studio Inquiries Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/10 pb-12">
          {/* Studio Wordmark & Pitch */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-white/60">
                <div className="w-3 h-3 rounded-full border border-white/60 group-hover:scale-125 transition-transform" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Mocta</span>
            </a>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Autonomous workflows, bespoke websites, and high-craft brand direction. Operating globally for ambitious teams.
            </p>
          </div>

          {/* Studio Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 font-mono text-xs uppercase tracking-widest text-white/60">
            <div className="flex flex-col gap-3">
              <span className="text-white/30 text-[10px]">[ INDEX ]</span>
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#search" className="hover:text-white transition-colors">Discovery</a>
              <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white/30 text-[10px]">[ SOCIAL ]</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a>
              <a href="mailto:hello@mocta.design" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>

          {/* Action / Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-6">
            <a
              href="#hero"
              className="liquid-glass text-white font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:border-white/40 transition-all flex items-center gap-2"
            >
              <span>Start a Project</span>
              <span className="text-white/60">↗</span>
            </a>

            <button
              onClick={scrollToTop}
              className="font-mono text-xs text-white/50 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
            >
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>
      </div>

      {/* Centerpiece: Automatic Resizing & Stretching Logo (Studio Namma Style) */}
      <div className="relative w-full px-2 sm:px-4 overflow-hidden select-none">
        <motion.div
          style={{ height: logoHeight }}
          className="w-full flex items-end justify-center overflow-hidden will-change-[height]"
        >
          <div className="relative w-full h-full flex items-end">
            <svg
              className="w-full h-full"
              viewBox="0 0 1472 475"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={p_M} fill="currentColor" className="text-white" />
              <path d={p_O} fillRule="evenodd" fill="currentColor" className="text-white" />
              <path d={p_C} fill="currentColor" className="text-white" />
              <path d={p_T} fill="currentColor" className="text-white" />
              <path d={p_A} fillRule="evenodd" fill="currentColor" className="text-white" />
            </svg>

            {/* Glowing Accent Studio Dot (Signature Studio Namma detail placed on wordmark) */}
            <div className="absolute left-[10.5%] bottom-[42%] w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.9)] animate-pulse pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Information & Real-Time Clock Bar (Identical to Studio Namma screenshot) */}
      <div className="w-full border-t border-white/10 bg-black py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/60">
        {/* Left: Studio & Cookie Statement */}
        <div className="text-center md:text-left max-w-lg leading-tight">
          We craft digital products, websites, and intelligent systems.
          By using this site, you appreciate thoughtful design.
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-white/40">
          © 2026 Mocta Studio. All rights reserved.
        </div>

        {/* Right: Live Real-Time Studio Clock */}
        <div className="flex items-center gap-2 tracking-widest text-white/80 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>PARIS, FRANCE</span>
          <span className="text-white font-semibold">{timeStr || '17:51:04'}</span>
        </div>
      </div>
    </footer>
  );
};
