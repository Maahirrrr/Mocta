import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#capabilities' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Pricing', href: '#cta' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-auto">
      {/* Left: Mocta written brand name */}
      <a href="#home" className="flex items-center group">
        <span className="font-heading italic text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:opacity-85 transition-opacity duration-200">
          Mocta
        </span>
      </a>

      {/* Center (desktop only, hidden md:flex): Navigation links inside liquid-glass pill */}
      <nav className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-2 py-1 border border-white/10 backdrop-blur-md">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-3.5 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        {/* Last item: white solid button "Get Started" with ArrowUpRight */}
        <a
          href="#cta"
          className="ml-1 bg-white text-black rounded-full px-4 py-2 text-sm font-semibold font-body flex items-center gap-1 hover:opacity-90 active:scale-95 transition-all shadow-sm"
        >
          <span>Get Started</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>

      {/* Right on mobile / Tablet quick CTA */}
      <div className="flex md:hidden items-center gap-2">
        <a
          href="#cta"
          className="bg-white text-black rounded-full px-4 py-2 text-xs font-semibold font-body flex items-center gap-1 shadow-sm"
        >
          <span>Get Started</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};
