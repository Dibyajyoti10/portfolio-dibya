import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Code, Mail } from 'lucide-react';

const NavItem = ({ icon: Icon, label, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      className="relative flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-neon-cyan transition-colors"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
    >
      {isHovered && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-pink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <Icon size={18} />
      <span className="font-display text-xs md:text-sm tracking-widest hidden sm:inline">{label}</span>
    </motion.a>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-20 border-b border-white/10 bg-retro-bg-dark/90 backdrop-blur-md z-50 flex items-center justify-between px-4 md:px-12">
      <div className="flex items-center gap-4 shrink-0">
        <h1 className="font-display text-lg md:text-2xl text-neon-pink text-glow-pink cursor-pointer">
          PORTFOLIO
        </h1>
        <div className="h-6 w-1 bg-neon-cyan hidden md:block" />
      </div>

      <div className="flex items-center gap-2 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth">
        <NavItem icon={Terminal} label="HOME" href="#hero" />
        <NavItem icon={User} label="ABOUT" href="#about" />
        <NavItem icon={Code} label="PROJECTS" href="#projects" />
        <NavItem icon={Mail} label="CONTACT" href="#contact" />
      </div>

      <div className="hidden md:block text-right">
        <div className="text-[10px] text-gray-600 font-mono leading-tight">
          <p>V 1.0.0</p>
          <p>SYS.ONLINE</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
