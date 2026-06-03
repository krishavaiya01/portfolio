import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'krishavaiya9@gmail.com',
      url: 'mailto:krishavaiya9@gmail.com',
      icon: <Mail size={18} />
    },
    {
      label: 'GitHub',
      value: 'github.com/krishavaiya01',
      url: 'https://github.com/krishavaiya01',
      icon: <Github size={18} />
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/KRISHKUMAR-AVAIYA',
      url: 'https://linkedin.com/in/KRISHKUMAR-AVAIYA',
      icon: <Linkedin size={18} />
    },
    {
      label: 'Phone',
      value: '+91 93285 50511',
      url: 'tel:+919328550511',
      icon: <Phone size={18} />
    }
  ];

  return (
    <section id="contact" className="relative z-10 w-full px-6 md:px-16 py-24 flex flex-col items-center">
      <div className="w-full max-w-[800px] bg-card border border-border rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Neon glow effect inside card */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent3/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="contact-inner flex flex-col items-center text-center">
          <div className="section-label font-mono text-[0.82rem] text-accent uppercase tracking-[0.15em] mb-4 flex justify-center items-center gap-3">
            <span className="w-[30px] h-[1px] bg-accent"></span>
            Let's connect
          </div>
          
          <h2 className="section-title font-syne font-extrabold text-3xl md:text-5xl leading-tight mb-6 text-text tracking-tight w-full">
            Get In Touch
          </h2>
          
          <p className="contact-text text-base md:text-lg text-muted max-w-[580px] leading-relaxed mb-10">
            I'm currently pursuing my MCA in Cloud Computing and open to internships,
            collaborations, and full-time opportunities in cloud engineering and full-stack development.
          </p>
          
          <div className="contact-links grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[640px] text-left">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-4 bg-bg/40 border border-border/60 hover:border-accent hover:bg-bg2/80 rounded-2xl p-4 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,212,255,0.1)]"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg group-hover:border-accent transition-all duration-300">
                  {link.icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-mono text-[0.7rem] text-muted uppercase tracking-wider">{link.label}</span>
                  <span className="font-sans text-[0.92rem] text-text font-medium group-hover:text-accent transition-colors duration-300 truncate">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
