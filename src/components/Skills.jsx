import React from 'react';

const skillsData = [
  {
    icon: '☁️',
    title: 'Cloud Computing',
    tags: ['AWS EC2', 'S3', 'Lambda', 'IAM', 'RDS', 'CloudFormation', 'Azure', 'GCP']
  },
  {
    icon: '⚡',
    title: 'Full-Stack & AI Dev',
    tags: ['MongoDB', 'Express.js', 'React.js', 'React Native (Expo)', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Socket.io', 'Firebase Auth', 'Auth0', 'FastAPI', 'Flask', 'OpenAI API', 'RAG', 'LLMs', 'PHP']
  },
  {
    icon: '🔁',
    title: 'DevOps & Automation',
    tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD Pipelines', 'IaC', 'Shell Scripting', 'Unix/Linux', 'Git/GitHub']
  },
  {
    icon: '💻',
    title: 'Programming & Databases',
    tags: ['Python', 'JavaScript (ES6+)', 'C / C++', 'MongoDB', 'MySQL', 'SQLite', 'REST APIs', 'SDLC', 'Debugging', 'Troubleshooting', 'Problem Solving']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full px-6 md:px-16 py-24 bg-[#0b1420]/50 backdrop-blur-sm flex flex-col items-center">
      <div className="w-full max-w-[1180px]">
        <div className="section-label font-mono text-[0.82rem] text-accent uppercase tracking-[0.15em] mb-3 flex items-center gap-3">
          <span className="w-[30px] h-[1px] bg-accent"></span>
          What I know
        </div>
        <h2 className="section-title font-syne font-extrabold text-3xl md:text-5xl leading-tight mb-16 text-text tracking-tight">
          Technical Skills
        </h2>
        
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="skill-card bg-card border border-border rounded-2xl p-7 flex flex-col backdrop-blur-md hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              <div className="skill-card-icon w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-xl mb-4">
                {skill.icon}
              </div>
              <h3 className="skill-card-title font-syne font-bold text-lg text-text mb-3">
                {skill.title}
              </h3>
              <div className="skill-tags flex flex-wrap gap-2 mt-auto">
                {skill.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="skill-tag font-mono text-[0.78rem] px-2.5 py-1 bg-accent/6 border border-accent/12 rounded-full text-muted hover:text-accent hover:border-accent/40 transition-colors duration-300 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
