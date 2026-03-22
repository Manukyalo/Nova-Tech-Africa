"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", 
  "TensorFlow", "AWS", "Docker", "Kubernetes", "PostgreSQL",
  "Three.js", "GraphQL", "Redis", "Framer Motion", "Tailwind CSS"
];

const TechBadge = memo(({ tech, index }: { tech: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.03 }}
    whileHover={{ y: -3, scale: 1.05 }}
    className="glass px-8 py-4 rounded-xl border border-white/10 hover:border-[#7000ff]/50 hover:shadow-[0_0_30px_rgba(112,0,255,0.15)] transition-all cursor-default bg-black/40 backdrop-blur-md gpu"
  >
    <span className="text-lg font-medium text-gray-200 tracking-wide">{tech}</span>
  </motion.div>
));

TechBadge.displayName = "TechBadge";

export const TechStack = memo(() => {
  return (
    <section className="py-24 px-6 relative z-10 w-full bg-[#030303] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
          Powered by <span className="text-gradient">Modern Tech</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We utilize industry-leading technologies to build fast, secure, and scalable digital products.
        </p>
      </div>

      <div className="relative flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto z-10">
        {technologies.map((tech, i) => (
          <TechBadge key={tech} tech={tech} index={i} />
        ))}
      </div>
    </section>
  );
});

TechStack.displayName = "TechStack";

