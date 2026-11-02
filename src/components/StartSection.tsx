import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { ArrowUpRight } from 'lucide-react';

export const StartSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamUrl = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
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

  return (
    <section id="how-it-works" className="relative w-full min-h-[600px] flex items-center justify-center bg-black text-white overflow-hidden py-32">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
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

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl px-6 min-h-[400px] justify-center">
        {/* Badge */}
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6 border border-white/10 shadow-sm">
          How It Works
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white mb-6">
          You dream it. We ship it.
        </h2>

        {/* Subtext */}
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10">
          Share your vision. Our AI handles the rest&mdash;wireframes, design, code, launch. All in days, not quarters.
        </p>

        {/* CTA */}
        <a
          href="#cta"
          className="liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium font-body text-white flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-md group"
        >
          <span>Get Started</span>
          <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
