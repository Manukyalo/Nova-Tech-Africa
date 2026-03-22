"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 px-6 relative z-10 w-full bg-[#030303] border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative glass p-10 rounded-2xl border border-white/10">
              <h2 className="text-4xl font-bold font-heading mb-6 text-white">
                Pioneering <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Nova Tech Africa, we don't just build software. We architect scalable solutions that empower startups and enterprises across the globe to achieve unprecedented growth.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By merging deep technical expertise with stunning, immersive design, we engineer digital products that turn ambitious visions into breathtaking reality.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col gap-10"
        >
          {[
            { year: "2024", title: "Global Expansion", desc: "Partnered with enterprise clients across 3 continents, delivering cloud-native platforms." },
            { year: "2025", title: "AI Integration", desc: "Launched proprietary machine learning pipelines tailored for bespoke SaaS models." },
            { year: "2026", title: "Spatial Computing", desc: "Pioneering the future of immersive 3D web experiences and cutting-edge interactive interfaces." },
          ].map((item, i) => (
            <div key={item.year} className="relative pl-8 border-l border-white/10 group">
              <div className="absolute w-4 h-4 rounded-full bg-[#00f0ff] -left-[8.5px] top-1 shadow-[0_0_15px_#00f0ff] group-hover:scale-150 transition-transform duration-500" />
              <h4 className="text-2xl font-bold text-white mb-2 font-heading">{item.year} - {item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
