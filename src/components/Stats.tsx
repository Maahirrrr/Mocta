import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const statItems = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
];

export const Stats: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamUrl = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';

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
    <section className="relative w-full py-28 md:py-36 bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background HLS Video (Desaturated / B&W) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        style={{ filter: 'saturate(0)' }}
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

      {/* Centered Stats Card */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-6 md:px-12">
        <div className="liquid-glass rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {statItems.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-none mb-3">
                  {stat.value}
                </span>
                <span className="text-white/60 font-body font-light text-sm md:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
