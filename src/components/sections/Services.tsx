"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Code, MonitorSmartphone, BrainCircuit, Database, Cloud } from "lucide-react";

const services = [
  {
    title: "Web Applications",
    description: "High-performance, scalable web apps built with resilient architectures.",
    icon: MonitorSmartphone,
    delay: 0.1,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "AI Models",
    description: "Custom data pipelines to extract actionable business insights.",
    icon: BrainCircuit,
    delay: 0.2,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "SaaS Platforms",
    description: "End-to-end multi-tenant architectures designed for global scaling.",
    icon: Cloud,
    delay: 0.3,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "CRM & ERP",
    description: "Bespoke enterprise resource systems tailored to your workflows.",
    icon: Database,
    delay: 0.4,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Brand & Motion",
    description: "Premium, modern 3D & 2D interactive digital experiences.",
    icon: Code,
    delay: 0.5,
    colSpan: "md:col-span-3 lg:col-span-1",
  },
];

const ServiceCard = memo(({ service }: { service: typeof services[0] }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
    className={`glass p-10 rounded-3xl relative group overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 gpu ${service.colSpan}`}
  >
    {/* Premium Hover Glow */}
    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[radial-gradient(circle,rgba(0,240,255,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500">
      <service.icon className="w-6 h-6 text-white group-hover:text-[#00f0ff] transition-colors duration-500" />
    </div>
    
    <h3 className="text-2xl font-semibold mb-3 text-white font-heading tracking-tight">
      {service.title}
    </h3>
    
    <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base group-hover:text-gray-300 transition-colors duration-500">
      {service.description}
    </p>
  </motion.div>
));

ServiceCard.displayName = "ServiceCard";

export const Services = memo(() => {
  return (
    <section className="py-32 px-6 relative z-10 w-full bg-[#030303]" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Core Capabilities</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tighter text-white">
            Engineering <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

