import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'cyber');

  useEffect(() => {
    if (theme === 'steel') {
      document.documentElement.setAttribute('data-theme', 'steel');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'cyber' ? 'steel' : 'cyber');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-16 py-5 bg-[#050a0f]/85 backdrop-blur-[20px] border-b border-[#00d4ff]/15">
      <div className="nav-logo flex items-center gap-2">
        <span className="logo-text font-syne font-bold text-lg text-text">Krishkumar</span>
      </div>
      
      <div className="flex items-center gap-7">
        <ul className="nav-links hidden md:flex gap-9 list-none">
          <li>
            <a href="#skills" className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
        
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn w-9 h-9 rounded-full bg-accent/8 border border-border flex items-center justify-center text-accent hover:bg-accent hover:text-bg hover:border-accent hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 outline-none cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'steel' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </nav>
  );
}
