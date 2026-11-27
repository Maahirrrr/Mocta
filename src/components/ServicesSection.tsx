import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface ServiceItem {
  id: string;
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
    title: 'Art direction',
    subtitle: 'Storytelling',
    description:
      'Transforming brand visions into coherent visual narratives with custom typography scales, photography curation, and deliberate editorial pacing.',
    deliverables: ['Visual Systems', 'Editorial Direction', 'Design Tokens', 'Motion Language'],
    videoSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-transcode.webm',
    posterSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-poster-00001.jpg',
  },
  {
    id: 'branding',
    title: 'Branding',
    subtitle: 'Identity',
    description:
      'Foundational visual identities built for lasting clarity: logotypes, proportion rules, color specifications, and packaging guidelines.',
    deliverables: ['Brand Guidelines', 'Typography Hierarchy', 'Mark Construction', 'Print & Digital Specs'],
    videoSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm',
    posterSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-poster-00001.jpg',
  },
  {
    id: 'webflow',
    title: 'Webflow',
    subtitle: 'Integration',
    description:
      'Engineering responsive web applications with fast static performance, structured CMS collections, and custom API integrations.',
    deliverables: ['Custom Code Embeds', 'CMS Architecture', 'Performance Budgets', 'CRM Webhooks'],
    videoSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-transcode.webm',
    posterSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-poster-00001.jpg',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    subtitle: 'Wireframes',
    description:
      'Human-centered product and marketing interfaces shaped through information architecture, working prototypes, and real-browser QA.',
    deliverables: ['Information Architecture', 'Component Libraries', 'Interactive Prototypes', 'Usability Audits'],
    videoSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-transcode.webm',
    posterSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-poster-00001.jpg',
  },
  {
    id: 'gsap',
    title: 'GSAP animations',
    subtitle: 'Transitions',
    description:
      'Responsive micro-interactions, scroll-linked motion sequences, and hardware-accelerated state changes with full reduced-motion fallbacks.',
    deliverables: ['Scroll Choreography', 'SVG Path Morphing', 'Lenis Inertia Scroll', 'Interactive States'],
    videoSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_webm.webm',
    posterSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_poster.0000000.jpg',
  },
  {
    id: 'advertising',
    title: 'Advertising',
    subtitle: 'Creative Ads',
    description:
      'High-contrast campaign creatives, motion cuts, and landing funnels built to communicate the product offer within three seconds.',
    deliverables: ['Performance Motion', 'Social Cutdowns', 'Campaign Landing Pages', 'Pitch Collateral'],
    videoSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-transcode.mp4',
    posterSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-poster-00001.jpg',
  },
  {
    id: 'seo-content',
    title: 'SEO & Content',
    subtitle: 'Ranking',
    description:
      'Semantic HTML structure, schema markup, and editorial content architecture tuned for search engines and answer engines alike.',
    deliverables: ['Semantic Audits', 'Structured Schema', 'Editorial Copywriting', 'Answer Engine Reach'],
    videoSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befca9c05567e63bc4d4a0_seo%20content%20home-transcode.webm',
    posterSrc:
      'https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befca9c05567e63bc4d4a0_seo%20content%20home-poster-00001.jpg',
  },
];

export const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('art-direction');
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const [showAllDrawer, setShowAllDrawer] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement>(null);

  const activeService =
    servicesData.find((s) => s.id === activeId) || servicesData[0];

  useEffect(() => {
    const vid = previewVideoRef.current;
    if (!vid) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      vid.pause();
      return;
    }
    vid.load();
    vid.play().catch(() => {});
  }, [activeId]);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full py-24 md:py-32 bg-[#080808] text-[#f2f2f0]"
    >
      <div className="mocta-wrap">
        {/* Heading + Plain intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12 md:mb-16">
          <div className="md:col-span-7">
            <h2
              id="services-heading"
              data-reveal
              className="font-compressed text-[length:var(--step-head)] leading-[0.9] tracking-[-0.03em] text-[#f2f2f0]"
            >
              Services
            </h2>
          </div>
          <div className="md:col-span-5">
            <p
              data-reveal
              style={{ ['--rd' as string]: '80ms' }}
              className="text-[length:var(--step-body)] text-[#a1a19e] leading-relaxed"
            >
              Seven core disciplines delivered as one integrated team, from art direction and brand systems to custom Webflow engineering and AI automation.
            </p>
          </div>
        </div>

        {/* Desktop: Interactive index left + Fixed preview stage right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Service Index Rows */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {servicesData.map((service, idx) => {
              const isSelected = activeId === service.id;
              const isMobileOpen = mobileOpenId === service.id;
              return (
                <div
                  key={service.id}
                  data-reveal
                  style={{ ['--rd' as string]: `${idx * 45}ms` }}
                  className="w-full"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(service.id)}
                    onFocus={() => setActiveId(service.id)}
                    onClick={() => {
                      setActiveId(service.id);
                      setMobileOpenId(isMobileOpen ? null : service.id);
                    }}
                    aria-expanded={isMobileOpen}
                    className={`w-full text-left px-5 py-5 md:py-6 flex items-center justify-between gap-4 transition-[background-color,opacity,transform] duration-200 ${
                      isSelected
                        ? 'bg-[#141414] opacity-100'
                        : 'bg-transparent opacity-60 hover:opacity-95'
                    }`}
                  >
                    <span className="font-compressed text-[length:var(--step-head)] leading-none tracking-[-0.02em] text-[#f2f2f0]">
                      {service.title}
                    </span>

                    <span className="flex items-center gap-3 shrink-0">
                      <span className="text-[length:var(--step-small)] text-[#a1a19e]">
                        {service.subtitle}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected ? 'text-[#f2f2f0] translate-x-0.5 -translate-y-0.5' : 'text-[#a1a19e]'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  {/* Mobile-only inline accordion preview (collapsed by default to avoid clutter above next item) */}
                  {isMobileOpen && (
                    <div className="lg:hidden bg-[#141414] px-5 pb-6 flex flex-col gap-4">
                      <img
                        src={service.posterSrc}
                        alt={`${service.title} preview frame`}
                        width={640}
                        height={400}
                        loading="lazy"
                        className="w-full aspect-video object-cover bg-[#080808]"
                      />
                      <p className="text-[length:var(--step-body)] text-[#f2f2f0] leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-[length:var(--step-small)] text-[#a1a19e]">
                        Deliverables: {service.deliverables.join(' · ')}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right Sticky Stage */}
          <div
            data-reveal
            style={{ ['--rd' as string]: '120ms' }}
            className="hidden lg:flex lg:col-span-5 flex-col bg-[#141414] p-6 sticky top-24"
          >
            <div className="w-full aspect-[4/3] bg-[#080808] overflow-hidden mb-6">
              <video
                ref={previewVideoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={activeService.posterSrc}
                aria-hidden="true"
                className="w-full h-full object-cover"
              >
                <source src={activeService.videoSrc} type="video/webm" />
                <source src={activeService.videoSrc} type="video/mp4" />
              </video>
            </div>

            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h3 className="font-compressed text-[length:var(--step-lead)] leading-none text-[#f2f2f0]">
                {activeService.title}
              </h3>
              <span className="text-[length:var(--step-small)] text-[#a1a19e]">
                {activeService.subtitle}
              </span>
            </div>

            <p className="text-[length:var(--step-body)] text-[#f2f2f0] leading-relaxed mb-4">
              {activeService.description}
            </p>

            <p className="text-[length:var(--step-small)] text-[#a1a19e] mb-6">
              Deliverables: {activeService.deliverables.join(' · ')}
            </p>

            <a
              href="#pricing"
              className="self-start text-[length:var(--step-small)] font-semibold text-[#f2f2f0] underline underline-offset-4 decoration-[#a1a19e] hover:decoration-[#f2f2f0] transition-colors duration-200"
            >
              Scope {activeService.title} in your sprint
            </a>
          </div>
        </div>

        {/* Bottom Matrix Action Bar */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[length:var(--step-body)] text-[#a1a19e]">
            Available as five-day product sprints or ongoing studio retainers.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAllDrawer(!showAllDrawer)}
              className="bg-[#141414] hover:bg-[#1c1c1b] text-[#f2f2f0] text-[length:var(--step-small)] font-medium px-5 py-3 rounded-full inline-flex items-center gap-2 whitespace-nowrap transition-colors duration-150"
            >
              <span>{showAllDrawer ? 'Hide matrix' : 'All deliverables'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAllDrawer ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <a
              href="#pricing"
              className="bg-[#f2f2f0] text-[#080808] font-semibold text-[length:var(--step-small)] px-5 py-3 rounded-full hover:bg-[#ffffff] inline-flex items-center gap-1.5 whitespace-nowrap transition-colors duration-150"
            >
              <span>Scope build</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Expandable Deliverable Matrix */}
        <AnimatePresence>
          {showAllDrawer && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-[#141414] p-7">
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Direction &amp; Identity
                </h3>
                <ul className="space-y-2.5 text-[length:var(--step-small)] text-[#a1a19e]">
                  <li>Art direction &amp; design systems</li>
                  <li>Bespoke typography &amp; logotypes</li>
                  <li>Motion guidelines &amp; storyboards</li>
                  <li>Editorial art curation</li>
                </ul>
              </div>
              <div className="bg-[#141414] p-7">
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Engineering &amp; Motion
                </h3>
                <ul className="space-y-2.5 text-[length:var(--step-small)] text-[#a1a19e]">
                  <li>Custom React &amp; Webflow builds</li>
                  <li>GSAP &amp; Lenis scroll choreography</li>
                  <li>Responsive touch &amp; keyboard QA</li>
                  <li>Performance tuning &amp; accessibility</li>
                </ul>
              </div>
              <div className="bg-[#141414] p-7">
                <h3 className="font-compressed text-[length:var(--step-lead)] text-[#f2f2f0] mb-4">
                  Growth &amp; Workflows
                </h3>
                <ul className="space-y-2.5 text-[length:var(--step-small)] text-[#a1a19e]">
                  <li>Answer-engine semantic optimization</li>
                  <li>Automated quote &amp; intake triage</li>
                  <li>Performance campaign collateral</li>
                  <li>CRM &amp; webhook pipeline sync</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
