import { motion } from 'motion/react';
import { Terminal, Shield, Award, GraduationCap, Mail, Linkedin, MapPin, Code, Cpu, Lock, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i === text.length) clearInterval(intervalId);
      }, 50);
      return () => clearInterval(intervalId);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className="font-mono">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-cyber-green align-middle ml-1"
      />
    </span>
  );
};

const Card = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-cyber-gray border border-cyber-border rounded-xl p-6 hover:border-cyber-green/50 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text p-4 md:p-8 lg:p-12 font-sans selection:bg-cyber-green selection:text-cyber-dark">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-cyber-green mb-4">
            <Terminal size={24} />
            <span className="font-mono text-sm tracking-widest uppercase opacity-80">System.Initialize()</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
            Nilay Anand
          </h1>
          <div className="text-xl md:text-2xl text-cyber-muted font-mono h-8">
            <TypewriterText text="> Cybersecurity Analyst" delay={500} />
          </div>
        </motion.header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About / Location */}
          <Card className="md:col-span-2 flex flex-col justify-center" delay={0.1}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyber-dark rounded-lg border border-cyber-border text-cyber-green">
                <Shield size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Profile Overview</h2>
                <p className="text-cyber-muted leading-relaxed">
                  Dedicated Cybersecurity Analyst and student at C. V. Raman Global University. 
                  Passionate about securing digital infrastructures, identifying vulnerabilities, 
                  and implementing robust defense mechanisms. Focused on continuous learning in 
                  the ever-evolving landscape of information security.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-mono text-cyber-muted">
                  <MapPin size={16} className="text-cyber-green" />
                  <span>Ranchi, Jharkhand, India</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Links */}
          <Card className="flex flex-col justify-center space-y-4" delay={0.2}>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Lock size={18} className="text-cyber-green" />
              Connect
            </h2>
            <a 
              href="mailto:nilayanand9525@gmail.com" 
              className="flex items-center gap-3 p-3 rounded-lg bg-cyber-dark border border-cyber-border hover:border-cyber-green/50 hover:text-cyber-green transition-all group"
            >
              <Mail size={18} />
              <span className="text-sm font-mono truncate">nilayanand9525@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nilay-anand-b73399323" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-cyber-dark border border-cyber-border hover:border-cyber-green/50 hover:text-cyber-green transition-all group"
            >
              <Linkedin size={18} />
              <span className="text-sm font-mono truncate">LinkedIn Profile</span>
              <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Card>

          {/* Education */}
          <Card className="md:col-span-1" delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyber-dark rounded-md border border-cyber-border text-cyber-green">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-lg font-semibold">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="relative pl-4 border-l border-cyber-border">
                <div className="absolute w-2 h-2 bg-cyber-green rounded-full -left-[4.5px] top-1.5 shadow-[0_0_8px_rgba(0,255,65,0.6)]" />
                <h3 className="font-medium">C. V. Raman Global University</h3>
                <p className="text-sm text-cyber-muted mt-1">Bhubaneswar</p>
                <p className="text-xs font-mono text-cyber-green mt-2">2024 - 2028</p>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card className="md:col-span-1" delay={0.4}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyber-dark rounded-md border border-cyber-border text-cyber-green">
                <Cpu size={20} />
              </div>
              <h2 className="text-lg font-semibold">Top Skills</h2>
            </div>
            <div className="space-y-3">
              {['Training', 'Communication', 'Problem Solving'].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <span className="text-cyber-green font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 bg-cyber-dark border border-cyber-border rounded px-3 py-2 text-sm font-medium group-hover:border-cyber-green/30 transition-colors">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="md:col-span-1" delay={0.5}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyber-dark rounded-md border border-cyber-border text-cyber-green">
                <Award size={20} />
              </div>
              <h2 className="text-lg font-semibold">Certifications</h2>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-cyber-dark border border-cyber-border rounded-lg hover:border-cyber-green/30 transition-colors">
                <div className="flex items-start gap-3">
                  <Code size={16} className="text-cyber-green mt-1 shrink-0" />
                  <span className="text-sm font-medium leading-tight">Programming with Generative AI(IIT GUWAHATI)</span>
                </div>
              </div>
              <div className="p-3 bg-cyber-dark border border-cyber-border rounded-lg hover:border-cyber-green/30 transition-colors">
                <div className="flex items-start gap-3">
                  <Shield size={16} className="text-cyber-green mt-1 shrink-0" />
                  <span className="text-sm font-medium leading-tight">Foundations of Cybersecurity</span>
                </div>
              </div>
            </div>
          </Card>

        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-12 pb-6 text-center text-cyber-muted font-mono text-xs"
        >
          <p>System.Exit(0) // Portfolio generated for Nilay Anand</p>
        </motion.footer>

      </div>
    </div>
  );
}
