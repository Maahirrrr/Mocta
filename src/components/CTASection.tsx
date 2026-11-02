import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hls from 'hls.js';

export const CTASection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl =
    'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS for Safari
      video.src = hlsUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section
      id="use-cases"
      className="relative w-full py-32 md:py-44 border-t border-border/30 overflow-hidden bg-background text-foreground flex items-center justify-center"
    >
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1] backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4">
        {/* Concentric circles logo icon */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60 mb-6">
          <div className="w-5 h-5 rounded-full border border-foreground/60" />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of thoughtful readers and creators shaping the next generation of independent publications.
        </p>

        {/* Two buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-semibold text-sm rounded-lg px-8 py-3.5 hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
          >
            Subscribe Now
          </motion.a>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass text-foreground font-semibold text-sm rounded-lg px-8 py-3.5 hover:border-foreground/40 transition-all w-full sm:w-auto text-center"
          >
            Start Writing
          </motion.a>
        </div>
      </div>
    </section>
  );
};
