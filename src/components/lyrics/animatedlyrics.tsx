import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LyricLine } from './type';

interface AnimatedLyricsProps {
  currentLyric: LyricLine | null;
}

const AnimatedLyrics: React.FC<AnimatedLyricsProps> = ({ currentLyric }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lyricVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: 90,
      scale: 0.5,
      color: "#fff",
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      color: "#ff69b4",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        duration: 0.8,
      },
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      rotateX: -90,
      scale: 0.5,
      color: "#fff",
      filter: "blur(4px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative w-full h-40">
      <AnimatePresence mode="wait">
        {currentLyric && (
          <motion.div
            key={currentLyric.startTime}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute w-full text-center"
          >
            {currentLyric.text.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block text-2xl capitalize font-bold mr-2 mb-2"
                variants={lyricVariants}
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Sparkle effect */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="sparkle" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`
        }}></div>
      ))}
    </div>
  );
};

export default AnimatedLyrics;