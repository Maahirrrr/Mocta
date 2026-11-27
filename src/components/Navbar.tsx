import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#080808] text-[#f2f2f0]">
        <div className="mocta-wrap h-16 flex items-center justify-between gap-6">
          <a
            href="#home"
            className="font-compressed text-[length:var(--step-lead)] leading-none tracking-[-0.03em] text-[#f2f2f0] transition-opacity duration-200 hover:opacity-75"
          >
            Mocta
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[length:var(--step-small)] font-medium text-[#a1a19e] hover:text-[#f2f2f0] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-[#f2f2f0] text-[#080808] rounded-full px-5 py-2.5 text-[length:var(--step-small)] font-semibold inline-flex items-center gap-1.5 hover:bg-[#ffffff] active:scale-[0.97] transition-[transform,background-color] duration-150"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="text-[length:var(--step-small)] font-medium text-[#f2f2f0] px-3 py-2 min-h-[44px] inline-flex items-center gap-1.5"
            >
              <Menu className="w-4 h-4" aria-hidden="true" />
              <span>Menu</span>
            </button>
            <a
              href="#pricing"
              className="bg-[#f2f2f0] text-[#080808] rounded-full px-4 py-2 min-h-[44px] text-[length:var(--step-small)] font-semibold inline-flex items-center gap-1"
            >
              <span>Book a call</span>
            </a>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 bg-[#080808] text-[#f2f2f0] flex flex-col justify-between mocta-wrap py-6"
        >
          <div className="flex items-center justify-between h-12">
            <span className="font-compressed text-[length:var(--step-lead)] leading-none tracking-[-0.03em]">
              Mocta
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="min-h-[44px] px-3 text-[length:var(--step-small)] font-medium inline-flex items-center gap-1.5 text-[#f2f2f0]"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              <span>Close</span>
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-compressed text-[length:var(--step-head)] leading-[0.95] tracking-[-0.03em] text-[#f2f2f0]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="w-full bg-[#f2f2f0] text-[#080808] rounded-full py-4 text-center text-[length:var(--step-body)] font-semibold"
            >
              Book a call
            </a>
            <a
              href="mailto:hello@mocta.design"
              className="text-[length:var(--step-small)] text-[#a1a19e] text-center"
            >
              hello@mocta.design
            </a>
          </div>
        </div>
      )}
    </>
  );
};
