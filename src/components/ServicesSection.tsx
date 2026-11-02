import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  videoSrc: string;
  posterSrc: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'art-direction',
    number: '01',
    title: 'Art direction',
    subtitle: 'Storytelling',
    description: 'Transforming brand visions into immersive visual narratives with bespoke typography, art curation, and cinematic pacing.',
    deliverables: ['Visual Systems', 'Editorial Direction', 'Design Tokens', 'Motion Language'],
    videoSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-transcode.webm',
    posterSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-poster-00001.jpg',
  },
  {
    id: 'branding',
    number: '02',
    title: 'branding',
    subtitle: 'Identity',
    description: 'Foundational visual identities built for enduring prestige. Logos, logotypes, color theory, and bespoke typographic guidelines.',
    deliverables: ['Brand Guidelines', 'Typography Hierarchy', 'Iconography', 'Packaging & Collateral'],
    videoSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm',
    posterSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-poster-00001.jpg',
  },
  {
    id: 'webflow',
    number: '03',
    title: 'Webflow',
    subtitle: 'Integration',
    description: 'Engineering responsive, lightning-fast web applications with clean headless architecture, CMS mastery, and custom API pipelines.',
    deliverables: ['Custom Code Embeds', 'CMS Architecture', 'Performance Optimization', 'CRM & Webhooks'],
    videoSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-transcode.webm',
    posterSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-poster-00001.jpg',
  },
  {
    id: 'ui-ux',
    number: '04',
    title: 'UI/UX Design',
    subtitle: 'Wireframes',
    description: 'Intuitive human-centered digital experiences sculpted from thorough product strategy, high-density wireframes, and tested prototypes.',
    deliverables: ['Information Architecture', 'Figma Design Systems', 'Interactive Prototyping', 'User Testing'],
    videoSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-transcode.webm',
    posterSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-poster-00001.jpg',
  },
  {
    id: 'gsap',
    number: '05',
    title: 'GSAP animations',
    subtitle: 'Transitions',
    description: 'Liquid micro-interactions, scroll-driven choreographies, and inertia physics that make interactions feel alive and physical.',
    deliverables: ['Custom ScrollTriggers', 'SVG Path Morphing', 'Canvas Visualizers', 'WebGL Shaders'],
    videoSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_webm.webm',
    posterSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_poster.0000000.jpg',
  },
  {
    id: 'advertising',
    number: '06',
    title: 'advertising',
    subtitle: 'Creative Ads',
    description: 'High-conversion campaign collateral, dynamic motion assets, and viral storytelling designed to command user attention across channels.',
    deliverables: ['Performance Motion', 'Social Video Assets', 'Display Ad Systems', 'Pitch Decks'],
    videoSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-transcode.mp4',
    posterSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-poster-00001.jpg',
  },
  {
    id: 'seo-content',
    number: '07',
    title: 'SEO & Content',
    subtitle: 'Ranking',
    description: 'AI-assisted semantic search optimization and editorial content distribution designed to win generative engine discovery.',
    deliverables: ['LLM Search Optimization (GEO)', 'Technical Audit', 'Content Architecture', 'Authority Building'],
    videoSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befca9c05567e63bc4d4a0_seo%20content%20home-transcode.webm',
    posterSrc: 'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befca9c05567e63bc4d4a0_seo%20content%20home-poster-00001.jpg',
  },
];

export const ServicesSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showAllDrawer, setShowAllDrawer] = useState(false);

  return (
    <section id="services" className="relative w-full py-32 md:py-48 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-white/50 tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>[ 02 / SERVICES ]</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              Design, Motion &amp; <span className="font-serif italic font-normal">Intelligence</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-md font-normal leading-relaxed">
            From creative art direction and identity systems to Webflow engineering and autonomous workflow automation.
          </p>
        </div>

        {/* Studio Namma inspired Services List */}
        <div 
          className="relative divide-y divide-white/10"
          onMouseLeave={() => setHoveredId(null)}
        >
          {servicesData.map((service) => {
            const isHovered = hoveredId === service.id;
            const isAnyHovered = hoveredId !== null;
            const opacity = isAnyHovered ? (isHovered ? 1 : 0.22) : 1;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                className="group relative transition-opacity duration-300 py-8 md:py-12 cursor-pointer"
                style={{ opacity }}
              >
                {/* Main Row Container */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-mono text-xs md:text-sm text-white/40 group-hover:text-white transition-colors duration-200">
                      ({service.number})
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-3 text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 self-start md:self-auto pl-12 md:pl-0">
                    <div className="font-mono text-xs md:text-sm text-white/60 uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/40 group-hover:text-white transition-all">
                      {service.subtitle}
                    </div>
                    <motion.div
                      animate={{ rotate: isHovered ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Expanding Media & Details Accordion on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mt-6 md:mt-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-2xl liquid-glass border border-white/10 bg-black/60">
                        {/* Looping Visual Preview Video */}
                        <div className="md:col-span-5 relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={service.posterSrc}
                            className="w-full h-full object-cover filter brightness-95"
                          >
                            <source src={service.videoSrc} type="video/webm" />
                            <source src={service.videoSrc} type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Deliverables and Description */}
                        <div className="md:col-span-7 flex flex-col justify-between py-2">
                          <div>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-normal">
                              {service.description}
                            </p>
                            <div className="mb-4">
                              <span className="font-mono text-xs uppercase tracking-wider text-white/40 block mb-3">
                                Deliverables &amp; Scope
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {service.deliverables.map((d, i) => (
                                  <span
                                    key={i}
                                    className="font-mono text-xs px-3 py-1 rounded bg-white/5 border border-white/10 text-white/90"
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="font-mono text-xs text-white/40">Studio Production / Q1</span>
                            <a
                              href="#contact"
                              className="font-mono text-xs text-white underline underline-offset-4 hover:text-white/70 transition-colors"
                            >
                              Inquire regarding {service.title} →
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Action: [See all] Button & Studio Statement */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-white/50 uppercase tracking-widest text-center sm:text-left">
            Comprehensive studio engagements • Fixed-timeline sprints • Retainers
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAllDrawer(!showAllDrawer)}
              className="liquid-glass text-white font-mono text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:border-white/40 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>{showAllDrawer ? 'Hide Matrix' : 'See all'}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform duration-300 ${showAllDrawer ? 'rotate-180' : ''}`}
              >
                <path d="M2 4L6 8L10 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <a
              href="https://studionamma.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              <span>Explore Studio</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 9L9 1M9 1H3M9 1V7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Collapsible Full Service Matrix */}
        <AnimatePresence>
          {showAllDrawer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl liquid-glass border border-white/10 bg-neutral-950/80">
                <div className="border border-white/10 p-6 rounded-xl bg-white/[0.02]">
                  <span className="font-mono text-xs text-white/40 block mb-2">PHASE 01</span>
                  <h4 className="text-xl font-medium mb-3">Creative Direction &amp; Identity</h4>
                  <ul className="space-y-2 text-xs font-mono text-white/70">
                    <li>• Art Direction &amp; Design Systems</li>
                    <li>• Bespoke Typography &amp; Logotypes</li>
                    <li>• Motion Guidelines &amp; Storyboards</li>
                    <li>• Generative Art Concepts</li>
                  </ul>
                </div>
                <div className="border border-white/10 p-6 rounded-xl bg-white/[0.02]">
                  <span className="font-mono text-xs text-white/40 block mb-2">PHASE 02</span>
                  <h4 className="text-xl font-medium mb-3">Engineering &amp; Interaction</h4>
                  <ul className="space-y-2 text-xs font-mono text-white/70">
                    <li>• Custom Webflow &amp; React Development</li>
                    <li>• GSAP &amp; Lenis Physics Animations</li>
                    <li>• Shader Visuals &amp; Micro-interactions</li>
                    <li>• Lighthouse 100 Performance Tuning</li>
                  </ul>
                </div>
                <div className="border border-white/10 p-6 rounded-xl bg-white/[0.02]">
                  <span className="font-mono text-xs text-white/40 block mb-2">PHASE 03</span>
                  <h4 className="text-xl font-medium mb-3">Growth &amp; AI Workflows</h4>
                  <ul className="space-y-2 text-xs font-mono text-white/70">
                    <li>• Generative Engine Optimization (GEO)</li>
                    <li>• Automated Quote &amp; Intake Triage</li>
                    <li>• Performance Display &amp; Ad Creatives</li>
                    <li>• Autonomous Document Processing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
