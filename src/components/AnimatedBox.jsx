import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = ({ imageSrc, altText }) => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-10 md:mt-0 group">
      {/* Central Image Container */}
      <div className="relative z-20 w-full h-full p-2 bg-retro-bg border-2 border-neon-cyan overflow-hidden rounded-sm box-glow">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-slate-800 relative overflow-hidden"
        >
          {/* Placeholder or Actual Image */}
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={altText || "Profile"}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neon-cyan font-display text-xs">
              [IMG_NOT_FOUND]
            </div>
          )}
          
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent opacity-20 pointer-events-none animate-scanline" />
        </motion.div>
      </div>

      {/* Rotating Border 1 (Cyan) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 z-10 border border-neon-cyan/50 rounded-sm"
      />

      {/* Rotating Border 2 (Pink - Reverse) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-8 z-0 border border-neon-pink/40 rounded-sm"
      />

      {/* Floating corner accents */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-neon-purple"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-neon-purple"
      />
    </div>
  );
};

export default AnimatedBox;
