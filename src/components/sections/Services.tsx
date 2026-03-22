"use client";

import { motion } from "framer-motion";
import { Code, MonitorSmartphone, BrainCircuit, Database, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Applications",
    description: "High-performance, scalable web applications built with modern frameworks and resilient architectures.",
    icon: MonitorSmartphone,
    delay: 0.1,
  },
  {
    title: "Machine Learning Models",
    description: "Custom AI models and data pipelines to extract actionable insights and automate complex workflows.",
    icon: BrainCircuit,
    delay: 0.2,
  },
  {
    title: "SaaS Platforms",
    description: "End-to-end multi-tenant SaaS architectures designed for rapid scaling and global reach.",
    icon: Cloud,
    delay: 0.3,
  },
  {
    title: "CRM & ERP Software",
    description: "Bespoke enterprise resource planning and CRM systems tailored to your business processes.",
    icon: Database,
    delay: 0.4,
  },
  {
    title: "Website Development",
    description: "Premium, modern, and high-converting marketing websites crafted with cutting-edge 3D and 2D animations.",
    icon: Code,
    delay: 0.5,
  },
];

export function Services() {
  return (
    <section className="py-24 px-6 relative z-10 w-full" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver end-to-end digital solutions that transform ideas into industry-leading products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-[#00f0ff]/30 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#7000ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <service.icon className="w-12 h-12 text-[#00f0ff] mb-6 group-hover:scale-110 transition-transform duration-500" />
              
              <h3 className="text-2xl font-semibold mb-3 text-white font-heading">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                {service.description}
              </p>
              
              {/* Highlight line on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
