import React from 'react';

const educationData = [
  {
    degree: 'MCA — Cloud Computing',
    school: 'MIT ADT University, Pune',
    cgpa: '7.96 CGPA',
    year: 'Aug 2024 – Present'
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'Sutex Bank College, Surat',
    cgpa: '6.20 CGPA',
    year: 'Jul 2020 – Apr 2023'
  },
  {
    degree: 'Higher Secondary School',
    school: 'N.P. Jikadara U.M. Shala, Surat',
    cgpa: '64%',
    year: 'Jul 2018 – Jul 2020'
  }
];

export default function Education() {
  return (
    <section id="education" className="relative z-10 w-full px-6 md:px-16 py-24 flex flex-col items-center">
      <div className="w-full max-w-[1180px]">
        <div className="section-label font-mono text-[0.82rem] text-accent uppercase tracking-[0.15em] mb-3 flex items-center gap-3 w-full">
          <span className="w-[30px] h-[1px] bg-accent"></span>
          My background
        </div>
        <h2 className="section-title font-syne font-extrabold text-3xl md:text-5xl leading-tight mb-16 text-text tracking-tight w-full">
          Education
        </h2>
        
        <div className="edu-grid grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="edu-card bg-card border border-border rounded-2xl p-7 flex flex-col justify-between backdrop-blur-md hover:border-accent hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,212,255,0.15)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-300"></div>
              
              <div>
                <div className="edu-degree font-syne font-bold text-lg md:text-xl text-text mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {edu.degree}
                </div>
                <div className="edu-school font-sans text-[0.98rem] text-muted mb-6 leading-relaxed">
                  {edu.school}
                </div>
              </div>
              
              <div className="edu-meta flex justify-between items-center mt-auto border-t border-border/30 pt-4 w-full">
                <div className="edu-cgpa font-mono text-[0.88rem] text-accent2 bg-accent2/8 border border-accent2/15 px-3 py-1 rounded-full">
                  {edu.cgpa}
                </div>
                <div className="edu-year font-mono text-[0.78rem] text-muted/80">
                  {edu.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
