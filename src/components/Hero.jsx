import React, { useState, useEffect } from 'react';
import { Mail, Github } from 'lucide-react';

export default function Hero() {
  const [cpu, setCpu] = useState(42);
  const [mem, setMem] = useState(58);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 35) + 30);
      setMem(Math.floor(Math.random() * 10) + 50);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 py-32 overflow-hidden max-w-[1200px] mx-auto">
      {/* Background orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial-gradient top-[-100px] right-[-100px] blur-[80px] opacity-12 pointer-events-none animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-gradient bottom-0 left-[200px] blur-[80px] opacity-10 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="hero-grid grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-10 items-center w-full z-10">
        
        {/* Profile Content */}
        <div className="hero-content flex flex-col items-start lg:text-left text-center max-w-[800px] mx-auto lg:mx-0">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/8 border border-border font-mono text-[0.82rem] text-accent uppercase tracking-widest mb-6 animate-fadeUp">
            <span className="badge-dot w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_10px_var(--accent2)] animate-blink"></span>
            Available for opportunities
          </div>
          
          <h1 className="hero-name font-syne font-extrabold text-[2.5rem] md:text-[3.5rem] lg:text-[4.4rem] leading-none tracking-tight mb-4 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            Krishkumar<br />
            <span className="highlight bg-gradient-to-r from-accent to-accent3 bg-clip-text text-transparent">Avaiya</span>
          </h1>
          
          <p className="hero-title font-mono text-sm md:text-base text-muted tracking-wider mb-5 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            Cloud Engineer · <span className="text-accent2">AI DevOps Specialist</span> · Full-Stack Developer
          </p>
          
          <p className="hero-summary text-base md:text-lg text-muted font-light leading-relaxed mb-10 max-w-[640px] animate-fadeUp" style={{ animationDelay: '0.3s' }}>
            MCA Cloud Computing student at MIT ADT University specializing in AI DevOps, Kubernetes orchestration,
            and RAG pipelines. Hands-on experience in building automated incident troubleshooting engines,
            CI/CD telemetry, and scalable full-stack applications.
          </p>
          
          <div className="hero-ctas flex flex-wrap gap-4 justify-center lg:justify-start w-full md:w-auto animate-fadeUp" style={{ animationDelay: '0.4s' }}>
            <a href="mailto:krishavaiya9@gmail.com" className="btn-primary inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-lg font-syne font-bold text-sm hover:bg-[#33deff] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,0.3)] transition-all duration-300">
              <Mail size={16} /> Get In Touch
            </a>
            <a href="https://github.com/krishavaiya01" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2 border border-border text-text px-7 py-3.5 rounded-lg font-syne font-semibold text-sm backdrop-blur-md hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* SRE Dashboard Control Panel */}
        <div className="hero-dashboard-container w-full max-w-[500px] mx-auto lg:mx-0 [perspective:1000px] z-10">
          <div className="sre-dashboard bg-card border border-border rounded-2xl p-6 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-accent hover:-translate-y-1 hover:rotate-y-0 lg:[transform:rotateY(-5deg)] transition-all duration-500 font-mono text-[0.8rem] relative overflow-hidden">
            
            <div className="dashboard-header flex justify-between items-center border-b border-accent/15 pb-3 mb-5 text-[0.78rem]">
              <div className="dashboard-title flex items-center gap-2 text-text font-medium tracking-wide">
                <span className="pulse-dot w-2 h-2 bg-accent2 rounded-full shadow-[0_0_10px_var(--accent2)] animate-pulse"></span>
                SRE CONTROL PANEL v1.0.4
              </div>
              <div className="dashboard-status text-accent2 tracking-wide">STATUS: ONLINE</div>
            </div>
            
            <div className="dashboard-section mb-6">
              <div className="section-heading text-[0.75rem] text-muted tracking-widest mb-4">ACTIVE CI/CD PIPELINE</div>
              <div className="pipeline-graph relative w-full h-[75px] flex items-center">
                <svg className="pipeline-svg absolute left-0 top-1/2 -translate-y-1/2 w-full h-[60px] z-10 pointer-events-none" viewBox="0 0 400 60">
                  <path id="pipeline-path" d="M 30,30 L 370,30" stroke="rgba(0,212,255,0.12)" strokeWidth="4" fill="none" />
                  <path d="M 30,30 L 370,30" className="pulse-path" stroke="var(--accent)" strokeWidth="4" fill="none" strokeDasharray="25, 100" strokeDashoffset="0" />
                </svg>
                <div className="pipeline-nodes flex justify-between w-full relative z-20">
                  <div className="pipeline-node flex flex-col items-center w-12 active">
                    <div className="node-icon w-9 h-9 bg-bg2 border border-accent rounded-full flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:bg-accent/15 hover:scale-110 transition-all duration-300">💻</div>
                    <div className="node-text text-[0.65rem] text-text mt-1.5 uppercase tracking-wide">Code</div>
                  </div>
                  <div className="pipeline-node flex flex-col items-center w-12 active">
                    <div className="node-icon w-9 h-9 bg-bg2 border border-accent rounded-full flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:bg-accent/15 hover:scale-110 transition-all duration-300">⚙️</div>
                    <div className="node-text text-[0.65rem] text-text mt-1.5 uppercase tracking-wide">Build</div>
                  </div>
                  <div className="pipeline-node flex flex-col items-center w-12 active">
                    <div className="node-icon w-9 h-9 bg-bg2 border border-accent rounded-full flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:bg-accent/15 hover:scale-110 transition-all duration-300">📦</div>
                    <div className="node-text text-[0.65rem] text-text mt-1.5 uppercase tracking-wide">Docker</div>
                  </div>
                  <div className="pipeline-node flex flex-col items-center w-12 active">
                    <div className="node-icon w-9 h-9 bg-bg2 border border-accent rounded-full flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:bg-accent/15 hover:scale-110 transition-all duration-300">☸️</div>
                    <div className="node-text text-[0.65rem] text-text mt-1.5 uppercase tracking-wide">K8s</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-metrics-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="metric-card bg-bg/40 border border-accent/8 rounded-xl p-4">
                <div className="metric-header flex justify-between text-[0.7rem] mb-2.5 tracking-wide">
                  <span className="metric-label text-muted">CLUSTER CPU LOAD</span>
                  <span className="metric-value text-accent font-bold">{cpu}%</span>
                </div>
                <div className="metric-bar-bg w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="metric-bar-fill h-full bg-gradient-to-r from-accent to-accent3 rounded-full transition-all duration-[800ms]" style={{ width: `${cpu}%` }}></div>
                </div>
              </div>
              
              <div className="metric-card bg-bg/40 border border-accent/8 rounded-xl p-4">
                <div className="metric-header flex justify-between text-[0.7rem] mb-2.5 tracking-wide">
                  <span className="metric-label text-muted">MEMORY UTILIZATION</span>
                  <span className="metric-value text-accent font-bold">{mem}%</span>
                </div>
                <div className="metric-bar-bg w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="metric-bar-fill memory-bar h-full bg-gradient-to-r from-accent3 to-accent2 rounded-full transition-all duration-[800ms]" style={{ width: `${mem}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="dashboard-footer-metrics grid grid-cols-3 gap-3 border-t border-accent/10 pt-4 text-center">
              <div className="footer-metric flex flex-col gap-1">
                <div className="fm-title text-[0.62rem] text-muted tracking-wide">SYSTEM UPTIME</div>
                <div className="fm-value text-glow-green text-[0.95rem] font-bold">99.998%</div>
              </div>
              <div className="footer-metric flex flex-col gap-1">
                <div className="fm-title text-[0.62rem] text-muted tracking-wide">ACTIVE PODS</div>
                <div className="pod-status-grid grid grid-cols-4 gap-1 justify-center items-center h-full min-h-[24px]">
                  <span className="pod-dot active w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_4px_var(--accent2)]"></span>
                  <span className="pod-dot active w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_4px_var(--accent2)]"></span>
                  <span className="pod-dot active w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_4px_var(--accent2)]"></span>
                  <span className="pod-dot active w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_4px_var(--accent2)]"></span>
                  <span className="pod-dot active w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_4px_var(--accent2)]"></span>
                  <span className="pod-dot active w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_4px_var(--accent2)]"></span>
                  <span className="pod-dot active w-1.5 h-1.5 bg-accent2 rounded-full shadow-[0_0_4px_var(--accent2)]"></span>
                  <span className="pod-dot active pulse-orange w-1.5 h-1.5 bg-[#ffaa00] rounded-full shadow-[0_0_8px_#ffaa00] animate-pulse"></span>
                </div>
              </div>
              <div className="footer-metric flex flex-col gap-1">
                <div className="fm-title text-[0.62rem] text-muted tracking-wide">DEPLOY SAVED</div>
                <div className="fm-value text-glow-blue text-[0.95rem] font-bold">40%</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
