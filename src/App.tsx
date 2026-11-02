import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchSection } from './components/SearchSection';
import { MissionSection } from './components/MissionSection';
import { SolutionSection } from './components/SolutionSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <SearchSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
