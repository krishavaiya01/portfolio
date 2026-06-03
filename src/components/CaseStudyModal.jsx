import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const projectData = {
  'devops-copilot': {
    number: '01',
    title: 'AI DevOps Copilot',
    subtitle: 'AI-Powered SRE & Diagnostics',
    desc: [
      'Built an AI-powered DevOps Copilot using LLMs, RAG, and SRE runbooks for automated incident troubleshooting.',
      'Implemented context-aware root cause analysis using infrastructure telemetry, logs, and operational metrics.',
      'Integrated Kubernetes and Docker diagnostics with AI-generated remediation recommendations.',
      'Developed an offline fallback engine and automated CI/CD deployment pipelines using GitHub Actions and Docker.'
    ],
    stack: ['FastAPI', 'React', 'Python', 'Kubernetes', 'Docker', 'GitHub Actions', 'RAG'],
    highlights: 'This project targets SRE reliability. The Copilot orchestrates diagnostic tasks using Python subprocesses and Kubernetes API. By retrieving structured solutions from a Vector Database (RAG) containing historical incident runbooks, the LLM generates actionable bash commands and configuration fixes with high contextual accuracy.',
    links: [
      { text: 'GitHub Repository', url: 'https://github.com/krishavaiya01/AI-DevOps-Copilot', icon: 'github' }
    ]
  },
  'greenvision': {
    number: '02',
    title: 'GreenVision Cloud',
    subtitle: 'Multi-Cloud Management Platform',
    desc: [
      'Architected a full-stack multi-cloud platform integrating AWS, Azure, and GCP via centralized APIs for cross-platform resource monitoring.',
      'Built an AI-driven recommendation engine using OpenAI to analyze infrastructure metrics and suggest performance optimizations.',
      'Integrated a Generative AI chatbot for real-time sustainability insights and automated carbon footprint reporting.',
      'React.js dashboard backed by Node.js/Express and MongoDB to visualize complex cloud and sustainability data.'
    ],
    stack: ['MERN Stack', 'AWS', 'OpenAI', 'Multi-Cloud API', 'Azure', 'GCP'],
    highlights: 'Designed to solve multi-cloud billing and carbon footprint visibility. It monitors compute, memory, and database instances dynamically, querying cloud-native pricing APIs to compute sustainability indices. Integrates OpenAI GPT model to construct detailed cloud refactoring suggestions.',
    links: [
      { text: 'Live Demo', url: 'https://green-vision-cloud.vercel.app/', icon: 'link' },
      { text: 'GitHub Repository', url: 'https://github.com/krishavaiya01/GreenVision-Cloud-', icon: 'github' }
    ]
  },
  'hotel-chatbot': {
    number: '03',
    title: 'Hotel Booking Chatbot',
    subtitle: 'AI-Driven Booking Automation',
    desc: [
      'Built a conversational AI chatbot using Amazon Lex for hotel booking automation.',
      'Integrated AWS Lambda for dynamic pricing based on room type and availability details.',
      'Implemented logical event flows for a smooth, end-to-end booking experience.',
      'Ensured clear communication of booking details and room options to users post-confirmation.'
    ],
    stack: ['Amazon Lex', 'AWS Lambda', 'Python', 'NLP'],
    highlights: 'This chatbot focuses on dynamic conversational flows. Leveraging Amazon Lex slot-filling mechanisms, it captures booking queries. An AWS Lambda backend written in Python executes validation rules, processes reservations, and calculates pricing dynamically depending on seasonal occupancy rates.',
    links: []
  }
};

export default function CaseStudyModal({ projectId, onClose }) {
  const data = projectData[projectId];

  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [data]);

  if (!data) return null;

  return (
    <div 
      className="modal-overlay fixed inset-0 bg-[#050a0f]/85 backdrop-blur-[12px] z-[1000] flex items-center justify-center p-4 active transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="modal-content bg-bg2 border border-border rounded-[24px] w-full max-w-[850px] max-h-[85vh] overflow-y-auto relative p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="modal-close absolute top-5 right-5 bg-white/5 border border-white/10 text-text w-9 h-9 rounded-full flex items-center justify-center text-lg hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300 outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
        
        <div className="modal-header-section mb-7">
          <span className="modal-number font-syne text-[2.2rem] font-extrabold text-accent/15 leading-none block mb-2">{data.number}</span>
          <h3 className="modal-title font-syne font-extrabold text-[1.8rem] md:text-[2.2rem] mb-1 bg-gradient-to-r from-accent to-accent3 bg-clip-text text-transparent">{data.title}</h3>
          <span className="modal-subtitle font-mono text-[0.88rem] text-accent2 uppercase tracking-widest block">{data.subtitle}</span>
        </div>
        
        <div className="modal-body-content">
          <div className="modal-details-grid grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-9">
            
            <div className="modal-details-left">
              <h4 className="font-syne font-bold text-base text-text mb-4">Key Features & Achievements</h4>
              <ul className="modal-desc-list list-none flex flex-col gap-3">
                {data.desc.map((bullet, idx) => (
                  <li key={idx} className="text-[0.98rem] text-muted pl-5 relative leading-relaxed">
                    <span className="absolute left-0 text-accent text-[0.85rem]">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-details-right">
              <h4 className="font-syne font-bold text-base text-text mb-4">Tech Stack</h4>
              <div className="project-stack flex flex-wrap gap-2 mb-6">
                {data.stack.map((tech, idx) => (
                  <span key={idx} className="stack-tag font-mono text-[0.74rem] px-2.5 py-1 bg-[#7b61ff]/10 border border-[#7b61ff]/20 rounded-full text-[#a990ff] tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="modal-extra-section mt-6">
                <h4 className="font-syne font-bold text-base text-text mb-3">Architecture & Highlights</h4>
                <p className="text-[0.94rem] text-muted leading-relaxed">{data.highlights}</p>
              </div>

              {data.links && data.links.length > 0 && (
                <div className="project-links flex flex-wrap gap-3 mt-6">
                  {data.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link inline-flex items-center gap-1.5 font-mono text-[0.76rem] text-accent border border-border rounded-full px-3.5 py-1.5 bg-accent/5 hover:bg-accent hover:text-bg hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {link.icon === 'github' ? <Github size={12} /> : <ExternalLink size={12} />}
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
