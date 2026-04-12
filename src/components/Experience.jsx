import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Graduate Engineer Trainee",
    company: "Coforge",
    period: "2026-PRESENT",
    description: "Currently working as a Graduate Engineer Trainee at Coforge, gaining hands-on experience in software development and contributing to various real-life projects across different domains."
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "TechNova Systems",
    period: "2025 - 2026",
    description: "Leading the frontend architecture for next-gen SaaS platforms. Implemented micro-frontends and improved performance by 40%."
    
  },
  {
    id: 3,
    role: "Creative Developer",
    company: "PixelPerfect Studios",
    period: "2024 - 2025",
    description: "Crafted award-winning interactive websites using WebGL and GSAP. Collaborated closely with designers to bring concepts to life."
    
  },
  {
    id: 4,
    role: "Full Stack Developer",
    company: "InnovateX",
    period: "2023 - 2024",
    description: "Built scalable APIs and responsive UIs for fintech startups. Mentored junior developers and established code quality standards."
    
  },
  {
    id: 5,
    role: "Game Developer Intern",
    company: "ArcadeLabs",
    period: "2022 - 2023",
    description: "Assisted in developing indie games using Unity. Focused on gameplay mechanics and user experience enhancements."
    
  }
];

const ExperienceItem = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full ${isEven ? 'md:flex-row' : ''}`}>
      
      {/* Timeline Center Line Artifact (Dot) */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-retro-bg-dark border-2 border-neon-cyan rounded-full z-10 transform -translate-x-[2px] md:-translate-x-1/2 group-hover:scale-125 group-hover:bg-neon-cyan transition-all duration-300 mt-1 md:mt-0">
        <div className="absolute inset-0 bg-neon-cyan blur-sm opacity-50" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-8 md:ml-0 p-4 md:p-6 bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-colors rounded-sm relative ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
      >
        <div className="absolute top-0 right-0 p-2 opacity-20">
          <Briefcase size={40} />
        </div>
        
        <div className="flex items-center gap-2 mb-2 text-neon-pink font-mono text-xs tracking-wider">
          <Calendar size={12} />
          {exp.period}
        </div>
        
        <h3 className="text-xl font-display text-white mb-1 group-hover:text-neon-cyan transition-colors">
          {exp.role}
        </h3>
        
        <h4 className="text-gray-400 font-mono text-sm mb-4">
          @{exp.company}
        </h4>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {exp.description}
        </p>

        {/* Connecting Line (Mobile Only visual fix) */}
        <div className="absolute top-1/2 -left-12 w-8 h-[1px] bg-neon-cyan/30 md:hidden" />
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-12 bg-retro-bg-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-xl md:text-5xl font-display text-white mb-4">
            EXPERIENCE_LOG
          </h2>
          <div className="w-24 h-1 bg-neon-pink mx-auto" />
        </motion.div>

        {/* Central Timeline Line */}
        <div className="absolute left-[7px] md:left-1/2 top-32 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2">
           {/* Animated Pulse traveling down */}
           <motion.div
             animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="absolute left-1/2 top-0 w-1 h-20 bg-gradient-to-b from-transparent via-neon-cyan to-transparent transform -translate-x-1/2"
           />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
            <div className="inline-block px-4 py-2 border border-dashed border-white/20 text-xs font-mono text-gray-500">
                END_OF_LOG
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
