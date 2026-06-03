import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-8 border-t border-border/10 font-mono text-[0.8rem] text-muted tracking-wide mt-12 bg-bg/20 backdrop-blur-sm z-10 relative">
      <div>
        Crafted with precision &copy; {currentYear} &middot; Krishkumar Avaiya &middot; Pune, Maharashtra
      </div>
    </footer>
  );
}
