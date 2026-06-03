import React from 'react';

const experiences = [
  {
    icon: '💼',
    role: 'Software Development Engineer (SDE) Intern',
    date: 'Mar 2026 - Apr 2026',
    company: 'Bluestock™ 🔺',
    details: 'Pune City, Maharashtra, India · Remote',
    bullets: [
      'Worked as a Software Development Engineer Intern, contributing to development tasks and gaining hands-on experience in a fintech environment.',
      'Collaborated with team members on real-world development tasks.',
      'Gained exposure to software development lifecycle and best practices.',
      'Worked on improving application features and debugging issues.',
      'Enhanced problem-solving and coding skills.'
    ]
  },
  {
    icon: '🚀',
    role: 'Cloud Computing Intern',
    date: 'May 2025 – July 2025',
    company: 'LaunchedGlobal',
    details: 'Bengaluru, Karnataka · Hybrid',
    bullets: [
      'Designed and deployed cloud-based solutions using core AWS services: EC2, S3, IAM, Lambda, and RDS.',
      'Automated CI/CD pipelines with Python and Shell scripting, reducing deployment time by 40% and achieving 99.9% environment consistency.',
      'Managed real-time cloud infrastructure across 10+ AWS services, maintaining 99.9% uptime and ensuring security compliance.',
      'Deployed 5+ cloud-hosted web applications and internal dashboards, improving deployment reliability and performance monitoring.'
    ]
  },
  {
    icon: '☁️',
    role: 'Cloud Computing Intern',
    date: 'Apr 2023 – Jun 2023',
    company: 'Internship Studio',
    details: 'Pune, Maharashtra · Remote',
    bullets: [
      'Gained hands-on experience with EC2, S3, Lambda, and RDS to design scalable, secure cloud solutions.',
      'Managed deployments via CloudFormation for speed and consistency.',
      'Performed systematic troubleshooting to diagnose issues and optimize cloud performance.',
      'Proactively adopted new cloud practices and emerging technologies.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 w-full px-6 md:px-16 py-24 flex flex-col items-center">
      <div className="w-full max-w-[900px]">
        <div className="section-label font-mono text-[0.82rem] text-accent uppercase tracking-[0.15em] mb-3 flex items-center gap-3 w-full">
          <span className="w-[30px] h-[1px] bg-accent"></span>
          Where I've worked
        </div>
        <h2 className="section-title font-syne font-extrabold text-3xl md:text-5xl leading-tight mb-16 text-text tracking-tight w-full">
          Experience
        </h2>
        
        <div className="timeline relative flex flex-col gap-8 w-full pl-6 md:pl-10">
          {/* Vertical Timeline bar */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent to-transparent"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item relative grid grid-cols-[auto_1fr] gap-4 md:gap-6 items-start w-full">
              {/* Dot Icon */}
              <div className="timeline-dot w-9 h-9 md:w-11 md:h-11 bg-bg2 border-2 border-accent rounded-full flex items-center justify-center text-base md:text-lg flex-shrink-0 z-10 shadow-[0_0_10px_rgba(0,212,255,0.2)]">
                {exp.icon}
              </div>
              
              {/* Timeline Body card */}
              <div className="timeline-body bg-card border border-border rounded-2xl p-6 md:p-7 backdrop-blur-md hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300">
                <div className="timeline-header flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2 w-full">
                  <h3 className="timeline-role font-syne font-bold text-lg text-text">
                    {exp.role}
                  </h3>
                  <span className="timeline-date font-mono text-[0.75rem] text-accent bg-accent/8 border border-accent/15 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <div className="timeline-company font-mono text-[0.88rem] text-accent2 mb-4 tracking-wider">
                  {exp.company} <span className="text-muted/60">·</span> <span className="text-muted text-[0.82rem] font-sans font-normal">{exp.details}</span>
                </div>
                
                <ul className="timeline-bullets list-none flex flex-col gap-2.5">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="text-[0.98rem] text-muted pl-4 relative leading-relaxed">
                      <span className="absolute left-0 text-accent text-[0.75rem] top-0.5">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
