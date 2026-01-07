import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedBox from './AnimatedBox';

const Hero = () => {
  // Placeholder image - user can replace this
  const placeholderImage = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden grid-bg pt-20 md:pt-0">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-neon-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        
        {/* Left Content */}
        <div className="order-2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 border border-neon-cyan/50 rounded-full bg-neon-cyan/5 mb-4">
              <span className="font-mono text-neon-cyan text-[10px] md:text-xs tracking-wider">SYSTEM_READY</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-display leading-tight mb-2">
              HI, I'M <span className="text-neon-pink text-glow-pink">DIBYA</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-mono flex items-center gap-2">
              <span className="text-neon-purple">&gt;</span>
              <span className="typing-effect">CREATIVE_DEVELOPER</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-3 h-6 bg-neon-cyan block"
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 max-w-lg leading-relaxed border-l-2 border-white/10 pl-4"
          >
            Crafting digital experiences with a blend of retro aesthetics and modern performance. 
            Building the future, one pixel at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start w-full sm:w-auto px-4 sm:px-0"
          >
            <button className="group relative px-6 py-3 bg-neon-pink text-black font-display text-xs tracking-wider hover:bg-white transition-colors w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                VIEW_WORK <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-neon-pink blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="px-6 py-3 border border-white/20 hover:border-neon-cyan text-white font-display text-xs tracking-wider hover:text-neon-cyan transition-colors w-full sm:w-auto">
              CONTACT_ME
            </button>
          </motion.div>
        </div>

        {/* Right Content - Animated Box */}
        <div className="order-1 md:order-2 flex justify-center">
          <AnimatedBox imageSrc={placeholderImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
