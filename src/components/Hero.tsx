import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Background looping MP4 video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft vignette/dim overlay */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Bottom gradient fade for smooth transition to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 pt-28 md:pt-32">
        {/* Avatar Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="flex -space-x-2">
            <img
              src="./avatar-1.png"
              alt="Subscriber 1"
              className="w-8 h-8 rounded-full border-2 border-background object-cover bg-neutral-900"
            />
            <img
              src="./avatar-2.png"
              alt="Subscriber 2"
              className="w-8 h-8 rounded-full border-2 border-background object-cover bg-neutral-900"
            />
            <img
              src="./avatar-3.png"
              alt="Subscriber 3"
              className="w-8 h-8 rounded-full border-2 border-background object-cover bg-neutral-900"
            />
          </div>
          <span className="text-muted-foreground text-sm font-normal">
            7,000+ people already subscribed
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.08] mb-6 text-foreground"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-[hsl(var(--hero-subtitle))]"
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        {/* Email form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="liquid-glass rounded-full p-2 w-full max-w-lg flex items-center gap-2 mb-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-transparent px-5 py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-semibold text-xs md:text-sm tracking-wider uppercase rounded-full px-8 py-3.5 hover:opacity-90 transition-opacity cursor-pointer shrink-0"
          >
            SUBSCRIBE
          </motion.button>
        </motion.form>

        {subscribed && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-muted-foreground tracking-wide"
          >
            ✓ Welcome to Mocta. Please check your inbox.
          </motion.p>
        )}
      </div>
    </section>
  );
};
