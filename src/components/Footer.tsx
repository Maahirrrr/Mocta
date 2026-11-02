import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-8 md:px-28 border-t border-border/30 bg-background text-foreground flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-muted-foreground text-sm font-normal">
        © 2026 Mocta. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-muted-foreground text-sm">
        <a href="#privacy" className="hover:text-foreground transition-colors">
          Privacy
        </a>
        <a href="#terms" className="hover:text-foreground transition-colors">
          Terms
        </a>
        <a href="mailto:hello@mocta.design" className="hover:text-foreground transition-colors">
          Contact
        </a>
      </div>
    </footer>
  );
};
