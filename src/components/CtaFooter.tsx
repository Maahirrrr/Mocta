import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const CtaFooter: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [timeStr, setTimeStr] = useState<string>('--:--:--');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const syncSize = () => setIsMobile(mq.matches);
    syncSize();
    mq.addEventListener('change', syncSize);
    return () => mq.removeEventListener('change', syncSize);
  }, []);

  // Live Paris studio clock in tabular body figures
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-GB', {
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

  // Automatic resizing stretching MOCTA wordmark on scroll
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const desktopHeight = useTransform(scrollYProgress, [0, 1], ['96px', '42vh']);
  const mobileHeight = useTransform(scrollYProgress, [0, 1], ['64px', '22vh']);
  const logoHeight = isMobile ? mobileHeight : desktopHeight;

  // Authentic Mixtape Extra Condensed vector paths for MOCTA
  const moctaPath =
    'M0 465.76L91.45 465.76L100.85 120.17L152.84 465.76L230.51 465.76L285 120.17L292.52 465.76L385.85 465.76L358.92 9.24L236.77 9.24L193.55 290.12L149.71 9.24L27.56 9.24M551.22 475C647.05 475 683.38 384.69 683.38 237.50C683.38 91.02 647.05 0 551.22 0C455.38 0 419.05 91.02 419.05 237.50C419.05 384.69 455.38 475 551.22 475M551.22 382.56C525.54 382.56 517.39 339.18 517.39 237.50C517.39 135.82 525.54 92.44 551.22 92.44C576.27 92.44 584.42 135.82 584.42 237.50C584.42 339.18 576.27 382.56 551.22 382.56M851.25 475C904.50 475 947.72 438.74 960.87 350.56L883.20 322.83C878.82 362.65 869.42 382.56 851.25 382.56C825.57 382.56 817.43 339.90 817.43 237.50C817.43 135.82 825.57 92.44 851.25 92.44C868.79 92.44 878.19 112.35 882.57 152.17L960.87 124.44C947.09 36.26 904.50 0 851.25 0C755.42 0 719.09 91.02 719.09 237.50C719.09 383.98 755.42 475 851.25 475M1038.54 465.76L1132.50 465.76L1132.50 99.55L1189.50 99.55L1189.50 9.24L981.54 9.24L981.54 99.55L1038.54 99.55M1180.73 465.76L1273.44 465.76L1286.59 370.47L1361.76 370.47L1374.91 465.76L1472 465.76L1389.94 9.24L1262.79 9.24M1299.12 280.16L1324.80 98.13L1349.86 280.16';

  return (
    <footer
      id="cta"
      ref={footerRef}
      className="relative w-full pt-20 pb-8 bg-[#080808] text-[#f2f2f0] overflow-hidden"
    >
      <div className="mocta-wrap">
        {/* Top Footer Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 pb-16 text-[length:var(--step-small)]">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5">
            <span className="text-[#f2f2f0] font-semibold mb-1">Studio</span>
            <a href="#home" className="text-[#a1a19e] hover:text-[#f2f2f0] transition-colors">
              Overview
            </a>
            <a href="#services" className="text-[#a1a19e] hover:text-[#f2f2f0] transition-colors">
              Services
            </a>
            <a href="#capabilities" className="text-[#a1a19e] hover:text-[#f2f2f0] transition-colors">
              Capabilities
            </a>
            <a href="#process" className="text-[#a1a19e] hover:text-[#f2f2f0] transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-[#a1a19e] hover:text-[#f2f2f0] transition-colors">
              Pricing
            </a>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5">
            <span className="text-[#f2f2f0] font-semibold mb-1">Channels</span>
            <a
              href="https://github.com/Maahirrrr/Mocta"
              target="_blank"
              rel="noreferrer"
              className="text-[#a1a19e] hover:text-[#f2f2f0] inline-flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#a1a19e] hover:text-[#f2f2f0] inline-flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#a1a19e] hover:text-[#f2f2f0] inline-flex items-center gap-1 transition-colors"
            >
              <span>X</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="col-span-2 md:col-span-4 flex flex-col gap-2 text-[#a1a19e]">
            <span className="text-[#f2f2f0] font-semibold mb-1">Offices &amp; Inquiries</span>
            <p className="leading-relaxed">
              Mocta Studio — Paris, Lyon, and San Francisco. Direct senior engineering for product launches and identity systems.
            </p>
            <a
              href="mailto:hello@mocta.design"
              className="text-[#f2f2f0] font-medium underline underline-offset-4 decoration-[#a1a19e] hover:decoration-[#f2f2f0] self-start mt-1"
            >
              hello@mocta.design
            </a>
          </div>

          <div className="col-span-2 md:col-span-4 flex flex-col md:items-end justify-between gap-4 text-[#a1a19e]">
            <div className="md:text-right">
              <span className="text-[#f2f2f0] font-semibold block mb-1">Paris Studio Time</span>
              <span className="tabular text-[#f2f2f0] font-medium">{timeStr} CET</span>
            </div>
            <p className="text-[length:var(--step-small)] md:text-right">
              Architectural photography{' '}
              <a
                href="https://www.rawpixel.com/image/3297348/free-photo-image-angle-architecture-australia"
                target="_blank"
                rel="noreferrer"
                className="text-[#f2f2f0] underline underline-offset-4"
              >
                via rawpixel (CC0)
              </a>
              .
            </p>
          </div>
        </div>

        {/* Automatic Resizing / Stretching MOCTA Monumental Wordmark (clean unobstructed baseline) */}
        <div className="w-full overflow-hidden select-none mb-6">
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
                aria-label="Mocta"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={moctaPath}
                  fill="#e4e4e0"
                />
              </svg>

              {/* Signature cobalt accent marker inside the O */}
              <div
                aria-hidden="true"
                className="absolute left-[37.4%] bottom-[44%] w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-[#2563eb] pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Clean Single-Line Legal Footnote Beneath Wordmark */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[length:var(--step-small)] text-[#a1a19e]">
          <span>&copy; 2026 Mocta Studio. All rights reserved.</span>
          <span>Zero cookies stored by default.</span>
        </div>
      </div>
    </footer>
  );
};
