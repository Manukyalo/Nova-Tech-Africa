"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NexGen ERP",
    category: "Cloud Software",
    description: "A comprehensive, AI-driven enterprise resource planning system tailored for multinational logistics.",
  },
  {
    title: "Aura Pay",
    category: "FinTech Platform",
    description: "Secure, high-frequency trading platform with real-time analytics and predictive ML modeling.",
  },
  {
    title: "Lumina Health",
    category: "SaaS Application",
    description: "Healthcare management platform connecting over 10,000 providers with predictive patient care.",
  }
];

const ProjectItem = memo(({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    } gpu`}
  >
    {/* High-End Minimalist UI Mockup Container */}
    <div className="flex-1 w-full aspect-video md:aspect-[16/10] relative rounded-3xl overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#050505] border border-white/5">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-[#7000ff]/10 group-hover:opacity-100 opacity-50 transition-opacity duration-700 pointer-events-none z-0" />
      
      {/* macOS Window Controls */}
      <div className="absolute top-0 left-0 w-full h-10 border-b border-white/5 flex items-center px-4 gap-2 z-20 bg-black/20 backdrop-blur-md">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-500/80 transition-colors duration-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-500/80 transition-colors duration-300 delay-75" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-green-500/80 transition-colors duration-300 delay-150" />
      </div>

      {/* Abstract Dashboard Wireframe */}
      <div className="absolute top-14 left-6 right-6 bottom-6 flex gap-4 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        {/* Sidebar */}
        <div className="w-1/4 h-full rounded-lg border border-white/5 bg-white/[0.02] flex flex-col gap-3 p-3">
          <div className="w-full h-4 rounded bg-white/5" />
          <div className="w-3/4 h-4 rounded bg-white/5" />
          <div className="w-5/6 h-4 rounded bg-white/5" />
        </div>
        {/* Main Content Area */}
        <div className="w-3/4 h-full flex flex-col gap-4">
          <div className="w-full h-1/3 rounded-lg border border-white/5 bg-gradient-to-tr from-[#00f0ff]/10 to-transparent flex items-center justify-center overflow-hidden relative">
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="w-full flex-1 flex gap-4">
             <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02]" />
             <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02]" />
          </div>
        </div>
      </div>
      
      {/* Title Overlay on Hover */}
      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
        <span className="text-white font-heading text-xl tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full bg-white/5">
          View Live Platform
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col justify-center">
      <span className="inline-block px-3 py-1 rounded-full border border-[#00f0ff]/30 text-[#00f0ff] font-medium tracking-widest uppercase text-xs mb-6 self-start bg-[#00f0ff]/5">
        {project.category}
      </span>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight">{project.title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
        {project.description}
      </p>
      <button className="self-start px-8 py-4 rounded-full border border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300 font-medium tracking-wide gpu">
        Read Case Study
      </button>
    </div>
  </motion.div>
));

ProjectItem.displayName = "ProjectItem";

export const Portfolio = memo(() => {
  return (
    <section className="py-24 px-6 relative z-10 w-full bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Delivering excellence across industries.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white hover:text-[#00f0ff] transition-colors pb-2">
            View All Work <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

