import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Info } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const projects = [
  {
    id: 'devops-copilot',
    number: '01',
    title: 'AI DevOps Copilot',
    subtitle: 'AI-Powered SRE & Diagnostics',
    categories: ['devops', 'ai'],
    desc: [
      'Built an AI-powered DevOps Copilot using LLMs, RAG, and SRE runbooks for automated incident troubleshooting.',
      'Implemented context-aware root cause analysis using infrastructure telemetry, logs, and operational metrics.',
      'Integrated Kubernetes and Docker diagnostics with AI-generated remediation recommendations.',
      'Developed an offline fallback engine and automated CI/CD deployment pipelines using GitHub Actions and Docker.'
    ],
    stack: ['FastAPI', 'React', 'Python', 'Kubernetes', 'Docker', 'GitHub Actions', 'RAG'],
    links: [
      { text: 'GitHub', url: 'https://github.com/krishavaiya01/AI-DevOps-Copilot', icon: 'github' }
    ]
  },
  {
    id: 'greenvision',
    number: '02',
    title: 'GreenVision Cloud',
    subtitle: 'Multi-Cloud Management Platform',
    categories: ['devops'],
    desc: [
      'Architected a full-stack multi-cloud platform integrating AWS, Azure, and GCP via centralized APIs for cross-platform resource monitoring.',
      'Built an AI-driven recommendation engine using OpenAI to analyze infrastructure metrics and suggest performance optimizations.',
      'Integrated a Generative AI chatbot for real-time sustainability insights and automated carbon footprint reporting.',
      'React.js dashboard backed by Node.js/Express and MongoDB to visualize complex cloud and sustainability data.'
    ],
    stack: ['MERN Stack', 'AWS', 'OpenAI', 'Multi-Cloud API', 'Azure', 'GCP'],
    links: [
      { text: 'Live Demo', url: 'https://green-vision-cloud.vercel.app/', icon: 'link' },
      { text: 'GitHub', url: 'https://github.com/krishavaiya01/GreenVision-Cloud-', icon: 'github' }
    ]
  },
  {
    id: 'hotel-chatbot',
    number: '03',
    title: 'Hotel Booking Chatbot',
    subtitle: 'AI-Driven Booking Automation',
    categories: ['ai'],
    desc: [
      'Built a conversational AI chatbot using Amazon Lex for hotel booking automation.',
      'Integrated AWS Lambda for dynamic pricing based on room type and availability details.',
      'Implemented logical event flows for a smooth, end-to-end booking experience.',
      'Ensured clear communication of booking details and room options to users post-confirmation.'
    ],
    stack: ['Amazon Lex', 'AWS Lambda', 'Python', 'NLP'],
    links: []
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.categories.includes(filter);
  });

  return (
    <section id="projects" className="relative z-10 w-full px-6 md:px-16 py-24 bg-[#0b1420]/50 backdrop-blur-sm flex flex-col items-center">
      <div className="w-full max-w-[1180px]">
        <div className="section-label font-mono text-[0.82rem] text-accent uppercase tracking-[0.15em] mb-3 flex items-center gap-3">
          <span className="w-[30px] h-[1px] bg-accent"></span>
          What I've built
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 w-full">
          <h2 className="section-title font-syne font-extrabold text-3xl md:text-5xl leading-tight text-text tracking-tight">
            Projects
          </h2>
          
          {/* Category Filter Buttons */}
          <div className="project-filters flex gap-3 flex-wrap">
            <button 
              onClick={() => setFilter('all')} 
              className={`filter-btn font-mono text-[0.82rem] px-5 py-2.5 rounded-full border tracking-wide transition-all duration-300 outline-none cursor-pointer ${filter === 'all' ? 'bg-accent text-bg border-accent shadow-[0_0_20px_rgba(0,212,255,0.2)]' : 'bg-accent/5 border-border text-muted hover:bg-accent hover:text-bg hover:border-accent hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('devops')} 
              className={`filter-btn font-mono text-[0.82rem] px-5 py-2.5 rounded-full border tracking-wide transition-all duration-300 outline-none cursor-pointer ${filter === 'devops' ? 'bg-accent text-bg border-accent shadow-[0_0_20px_rgba(0,212,255,0.2)]' : 'bg-accent/5 border-border text-muted hover:bg-accent hover:text-bg hover:border-accent hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]'}`}
            >
              Cloud & DevOps
            </button>
            <button 
              onClick={() => setFilter('ai')} 
              className={`filter-btn font-mono text-[0.82rem] px-5 py-2.5 rounded-full border tracking-wide transition-all duration-300 outline-none cursor-pointer ${filter === 'ai' ? 'bg-accent text-bg border-accent shadow-[0_0_20px_rgba(0,212,255,0.2)]' : 'bg-accent/5 border-border text-muted hover:bg-accent hover:text-bg hover:border-accent hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]'}`}
            >
              AI & NLP
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <motion.div layout className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="project-card bg-card border border-border rounded-[20px] overflow-hidden flex flex-col backdrop-blur-md hover:border-accent hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,212,255,0.15)] transition-all duration-300"
              >
                <div className="project-header p-7 pb-0">
                  <div className="project-number font-syne text-[3rem] font-extrabold text-accent/10 leading-none mb-3">{project.number}</div>
                  <h3 className="project-title font-syne font-bold text-lg text-text mb-1.5 leading-snug">{project.title}</h3>
                  <div className="project-subtitle font-mono text-[0.82rem] text-accent2 uppercase tracking-wide mb-5">{project.subtitle}</div>
                </div>
                
                <div className="project-body p-7 pt-0 flex-1 flex flex-col">
                  <ul className="project-desc list-none flex flex-col gap-2 mb-6 flex-1">
                    {project.desc.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="text-[0.96rem] text-muted pl-4 relative leading-relaxed">
                        <span className="absolute left-1 text-accent text-lg top-0 leading-[1.3]">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="project-stack flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {project.stack.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="stack-tag font-mono text-[0.74rem] px-2.5 py-0.5 bg-[#7b61ff]/10 border border-[#7b61ff]/20 rounded-full text-[#a990ff] tracking-wide">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="stack-tag font-mono text-[0.74rem] px-2.5 py-0.5 bg-[#7b61ff]/5 border border-[#7b61ff]/15 rounded-full text-[#a990ff]/60">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                  
                  <div className="project-links flex flex-wrap gap-2.5 pt-4 mt-auto border-t border-border/40 w-full">
                    {project.links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link inline-flex items-center gap-1 font-mono text-[0.76rem] text-accent border border-border rounded-full px-3.5 py-1.5 bg-accent/5 hover:bg-accent hover:text-bg hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {link.icon === 'github' ? <Github size={12} /> : <ExternalLink size={12} />}
                        {link.text}
                      </a>
                    ))}
                    <button 
                      onClick={() => setSelectedProject(project.id)}
                      className="project-link inline-flex items-center gap-1 font-mono text-[0.76rem] text-accent border border-border rounded-full px-3.5 py-1.5 bg-accent/5 hover:bg-accent hover:text-bg hover:border-accent hover:-translate-y-0.5 transition-all duration-300 outline-none cursor-pointer"
                    >
                      <Info size={12} /> Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal 
        projectId={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
