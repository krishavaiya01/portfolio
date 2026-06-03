import React from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent/30 selection:text-text font-sans">
      {/* 3D background */}
      <Background3D />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <main className="relative w-full overflow-hidden">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
