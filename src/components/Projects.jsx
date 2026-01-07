import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "NEON_DREAMS",
    category: "WEB_APP",
    description: "A retro-futuristic dashboard for crypto analytics. Features real-time data visualization and a cyberpunk aesthetic.",
    tech: ["React", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "CYBER_CHAT",
    category: "MOBILE_APP",
    description: "End-to-end encrypted messaging app with self-destructing messages and glitch-art filters.",
    tech: ["React Native", "Firebase", "Encryption"],
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "SYNTH_WAVE_UI",
    category: "LIBRARY",
    description: "An open-source UI component library focused on 80s retro aesthetics for modern web applications.",
    tech: ["Vue.js", "SCSS", "Storybook"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "AI_NEXUS",
    category: "AI_MODEL",
    description: "Generative art platform powered by custom trained GANs. Create unique digital landscapes.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group h-80 w-full bg-retro-bg-dark border border-white/10 overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110 transform transition-transform"
      />
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-20 animate-scanline pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-retro-bg-dark via-retro-bg-dark/80 to-transparent">
        <motion.div
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-neon-cyan text-xs font-mono px-2 py-0.5 border border-neon-cyan/30 rounded-full bg-neon-cyan/5">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-display text-white mb-2 group-hover:text-neon-pink transition-colors">
            {project.title}
          </h3>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-gray-500 font-mono">#{t}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 border-t border-white/10">
                  <button className="flex items-center gap-2 text-xs font-display text-white hover:text-neon-cyan transition-colors">
                    <Github size={14} /> CODE
                  </button>
                  <button className="flex items-center gap-2 text-xs font-display text-white hover:text-neon-pink transition-colors">
                    <ExternalLink size={14} /> DEMO
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-pink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-12 relative bg-retro-bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end gap-4"
        >
          <h2 className="text-xl md:text-5xl font-display text-white">
            SELECTED_WORKS
          </h2>
          <div className="h-1 flex-1 bg-white/10 mb-2 relative overflow-hidden">
             <motion.div 
               initial={{ x: '-100%' }}
               whileInView={{ x: '100%' }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 h-full w-1/3 bg-neon-purple/50 blur-sm"
             />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
