import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CtaFooter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const streamUrl = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        capLevelToPlayerSize: false,
        maxBufferLength: 60,
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
        if (data.levels && data.levels.length > 0) {
          const maxLvl = data.levels.length - 1;
          hls.currentLevel = maxLvl;
          hls.loadLevel = maxLvl;
        }
        video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }
  }, [streamUrl]);

  // Live real-time studio clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Automatic stretching logo on scroll
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const logoHeight = useTransform(scrollYProgress, [0, 1], ['100px', '52vh']);

  const p_M = 'M0 475V0H130.68L148.53 200.47L159.36 383.94H161.28L171.47 200.47L189.32 0H320V475H235.63L238.82 262.98L247.10 78.83H245.19L204.38 475H112.57L71.77 78.83H69.22L77.51 262.98L81.33 475H0Z';
  const p_O = 'M340 0H600V475H340V0ZM422 75V400H518V75H422Z';
  const p_C = 'M620 0H870V75H705V400H870V475H620V0Z';
  const p_T = 'M890 0H1180V75H1080V475H990V75H890V0Z';
  const p_A = 'M1202 475L1263.19 0H1407.75L1472 475H1368.74L1359.56 363.56H1312.15L1302.97 475H1202ZM1314.44 279.29H1356.52L1336.63 72.03H1333.57L1314.44 279.29Z';

  return (
    <section id="cta" ref={footerRef} className="relative w-full pt-36 pb-12 bg-black text-white overflow-hidden flex flex-col justify-between">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />

      {/* Top gradient fade (200px) */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />

      {/* Bottom gradient fade (200px) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Centered CTA Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight mb-6">
          Your next website starts here.
        </h2>

        <p className="text-white/70 font-body font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:hello@mocta.design"
            className="liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium font-body text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Book a Call
          </a>
          <a
            href="#capabilities"
            className="bg-white text-black font-semibold text-sm font-body rounded-full px-7 py-3 hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Automatic Resizing Stretched MOCTA Logo (Studio Namma style) */}
      <div className="relative z-20 w-full px-2 sm:px-4 overflow-hidden mb-12 select-none">
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
            {/* Glowing Accent Dot */}
            <div className="absolute left-[10.5%] bottom-[42%] w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.9)] animate-pulse pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-body">
        {/* Left */}
        <div className="text-white/40 text-xs">
          &copy; 2026 Mocta. All rights reserved.
        </div>

        {/* Center: Live clock */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>PARIS, FRANCE</span>
          <span className="text-white font-semibold">{timeStr || '17:51:04'}</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-white/40 text-xs">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          <a href="mailto:hello@mocta.design" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
};
