"use client";

import { motion, Variants } from "framer-motion";

export function HeroContent() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVars: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pointer-events-none">
      {/* Radial Gradient Mask to ensure text is always readable over 3D */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,5,0.3)_0%,transparent_60%)] -z-10" />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center pointer-events-auto mix-blend-screen"
      >
        <motion.div variants={textVars} className="mb-6 inline-block">
          <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs md:text-sm font-medium tracking-widest uppercase text-gray-400 glass gpu">
            Digital Excellence Engineered
          </span>
        </motion.div>

        <motion.h1 variants={textVars} className="text-6xl md:text-8xl lg:text-[9rem] font-bold font-heading tracking-tighter leading-[0.9] text-white">
          Architecting <br />
          <span className="text-neon italic pr-4">Tomorrow.</span>
        </motion.h1>
        
        <motion.p variants={textVars} className="text-lg md:text-xl text-gray-400 mt-10 mb-12 max-w-2xl font-light leading-relaxed tracking-wide">
          We engineer high-performance software and artificial intelligence pipelines tailored for Africa&apos;s most ambitious enterprises.
        </motion.p>
        
        <motion.div variants={textVars} className="flex flex-col sm:flex-row gap-6 mt-4">
          <button className="px-10 py-5 rounded-full bg-white text-black font-semibold tracking-widest uppercase text-sm hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] gpu">
            Begin Journey
          </button>
          <button className="px-10 py-5 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-white font-semibold tracking-widest uppercase text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-500 gpu group">
            <span className="group-hover:text-neon transition-colors duration-300">Explore Work</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
