import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

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

  // Live real-time studio clock (Paris time matching Studio Namma)
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

  // Stretches smoothly from subtle height up to monumental 75vh on scroll
  const logoHeight = useTransform(scrollYProgress, [0, 1], ['120px', '76vh']);

  // Precise SVG Path for MOCTA extracted from Mixtape Extra Condensed-ExtraBold font
  const moctaPath = 'M0 465.76L91.45 465.76L100.85 120.17L152.84 465.76L230.51 465.76L285 120.17L292.52 465.76L385.85 465.76L358.92 9.24L236.77 9.24L193.55 290.12L149.71 9.24L27.56 9.24M551.22 475C647.05 475 683.38 384.69 683.38 237.50C683.38 91.02 647.05 0 551.22 0C455.38 0 419.05 91.02 419.05 237.50C419.05 384.69 455.38 475 551.22 475M551.22 382.56C525.54 382.56 517.39 339.18 517.39 237.50C517.39 135.82 525.54 92.44 551.22 92.44C576.27 92.44 584.42 135.82 584.42 237.50C584.42 339.18 576.27 382.56 551.22 382.56M851.25 475C904.50 475 947.72 438.74 960.87 350.56L883.20 322.83C878.82 362.65 869.42 382.56 851.25 382.56C825.57 382.56 817.43 339.90 817.43 237.50C817.43 135.82 825.57 92.44 851.25 92.44C868.79 92.44 878.19 112.35 882.57 152.17L960.87 124.44C947.09 36.26 904.50 0 851.25 0C755.42 0 719.09 91.02 719.09 237.50C719.09 383.98 755.42 475 851.25 475M1038.54 465.76L1132.50 465.76L1132.50 99.55L1189.50 99.55L1189.50 9.24L981.54 9.24L981.54 99.55L1038.54 99.55M1180.73 465.76L1273.44 465.76L1286.59 370.47L1361.76 370.47L1374.91 465.76L1472 465.76L1389.94 9.24L1262.79 9.24M1299.12 280.16L1324.80 98.13L1349.86 280.16';

  const footerVideos = [
    {
      src: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-transcode.mp4',
      poster: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-poster-00001.jpg',
    },
    {
      src: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa1926bb2adbd4315d488_Zefir%20footerV2-transcode.mp4',
      poster: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa1926bb2adbd4315d488_Zefir%20footerV2-poster-00001.jpg',
    },
    {
      src: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa2440a49684a10b9e055_FOOTER%20-%20BRANDINGV2-transcode.mp4',
      poster: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa2440a49684a10b9e055_FOOTER%20-%20BRANDINGV2-poster-00001.jpg',
    },
    {
      src: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa20fc54b7796aaa5edf6_SILVR-Video%201%20footersV3-transcode.mp4',
      poster: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa20fc54b7796aaa5edf6_SILVR-Video%201%20footersV3-poster-00001.jpg',
    },
    {
      src: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa0feb2681e0616dc3b3a_Footer-supercomics-transcode.mp4',
      poster: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa0feb2681e0616dc3b3a_Footer-supercomics-poster-00001.jpg',
    },
  ];

  return (
    <section
      id="cta"
      ref={footerRef}
      className="relative w-full pt-28 pb-4 bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none"
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />

      {/* 1. STUDIO NAMMA STYLE: TOP VIDEO REELS CAPSULES */}
      <div className="relative z-20 w-full px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-7xl mx-auto">
          {footerVideos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-500 shadow-xl"
            >
              <video
                src={vid.src}
                poster={vid.poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. CENTER CTA SECTION */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-6">
          Your next website starts here.
        </h2>

        <p className="text-white/70 font-body font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:hello@mocta.design"
            className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium font-body text-white hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Book a Call
          </a>
          <a
            href="#capabilities"
            className="bg-white text-black font-semibold text-sm font-body rounded-full px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center gap-1.5"
          >
            <span>View Pricing</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 3. STUDIO NAMMA STYLE: EDITORIAL FOOTER MENU */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-12 mb-16 pt-12 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs font-mono text-white/70">
          {/* Column 1 */}
          <div className="flex flex-col space-y-2.5">
            <span className="text-white/40 uppercase tracking-widest text-[10px] mb-1">Navigation</span>
            <a href="#services" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Work</a>
            <a href="#metrics" className="hover:text-white transition-colors">Approach</a>
            <a href="#reviews" className="hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2.5">
            <span className="text-white/40 uppercase tracking-widest text-[10px] mb-1">Social</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a href="https://github.com/Maahirrrr/Mocta" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Column 3 */}
          <div className="col-span-2 md:col-span-1 leading-relaxed text-white/60">
            <span className="text-white/40 uppercase tracking-widest text-[10px] mb-2 block">Studio</span>
            <p>We are a creative AI web design studio based in Paris, Lyon & San Francisco.</p>
          </div>

          {/* Column 4 */}
          <div className="leading-relaxed text-white/60">
            <span className="text-white/40 uppercase tracking-widest text-[10px] mb-2 block">Inquiries</span>
            <p className="mb-2">Big project? Crazy thought? Or just feel like chatting?</p>
            <a
              href="mailto:hello@mocta.design"
              className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              hello@mocta.design
            </a>
          </div>

          {/* Column 5 */}
          <div className="leading-relaxed text-white/50">
            <span className="text-white/40 uppercase tracking-widest text-[10px] mb-2 block">Copyright</span>
            <p>&copy; 2026 Mocta Studio.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* 4. MONUMENTAL AUTOMATIC RESIZING / STRETCHING WORDMARK (Exact Studio Namma aesthetic) */}
      <div className="relative z-20 w-full overflow-hidden select-none">
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
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={moctaPath}
                fill="#d8d8d8"
                className="transition-colors duration-300"
              />
            </svg>

            {/* Glowing Accent Blue Dot matching Studio Namma */}
            <div className="absolute left-[36.5%] bottom-[40%] w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-blue-600 shadow-[0_0_24px_rgba(37,99,235,1)] animate-pulse pointer-events-none" />

            {/* Studio Namma Cookie Policy Card (Bottom Left) */}
            <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 max-w-[280px] sm:max-w-[340px] bg-black/85 backdrop-blur-md border border-white/15 rounded-lg p-3 sm:p-4 text-[11px] sm:text-xs font-body text-white/80 leading-snug shadow-2xl z-30 pointer-events-auto">
              We care about your data, and we'd use cookies only to improve your experience. By using this website, you accept our{' '}
              <a href="#cta" className="text-white font-medium underline underline-offset-2 hover:text-white/80">
                Cookies Policy
              </a>
              .
            </div>

            {/* Monospace Paris Studio Clock (Bottom Right) */}
            <div className="absolute bottom-3 right-16 sm:bottom-4 sm:right-20 font-mono text-[11px] sm:text-xs tracking-wider text-white/70 uppercase z-30 select-none">
              PARIS, FRANCE &nbsp;
              <span className="text-white font-semibold tabular-nums">{timeStr || '17:51:04'}</span>
            </div>

            {/* Floating Blue WhatsApp / Support Bubble (Bottom Right corner) */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Studio"
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.7)] hover:scale-110 active:scale-95 transition-all z-30"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-none" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
