import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AcademicJourney } from './components/AcademicJourney';
import { WhatImExploring } from './components/WhatImExploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AcademicJourney />
        <WhatImExploring />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default App;
