import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Top light glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl text-white mb-8 text-glow-cyan">
          LET'S BUILD THE FUTURE
        </h2>
        
        <div className="flex justify-center gap-8 mb-12">
          {[Github, Twitter, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-3 border border-white/10 rounded-full hover:bg-neon-pink hover:border-neon-pink hover:text-black transition-all duration-300 group"
            >
              <Icon size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-gray-500">
          <p className="mb-2">
            DESIGNED & DEVELOPED BY DIBYA
          </p>
          <p className="flex items-center justify-center gap-1">
            MADE WITH <Heart size={10} className="text-neon-pink fill-neon-pink animate-pulse" /> AND REACT
          </p>
          <p className="mt-4 opacity-50">
            © 2026 ALL RIGHTS RESERVED. SYSTEM_ID: 8X-29
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
