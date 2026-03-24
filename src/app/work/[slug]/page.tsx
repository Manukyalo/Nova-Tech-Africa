import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = {
  "nexgen-erp": {
    title: "NexGen ERP",
    category: "Logistics",
    overview: "A comprehensive digital transformation for a multinational logistics firm operating across 6 African countries. They struggled with fragmented legacy systems that delayed real-time decision-making.",
    challenge: "The client needed to consolidate fleet management, supply chain tracking, and financial reporting into a single, high-performance platform capable of handling 500k+ daily transactions in low-bandwidth regions.",
    solution: "We architected a microservices-based ERP using Next.js for the interface and Node.js for high-speed transaction processing. We implemented an offline-first data sync layer to ensure field agents could work without stable internet.",
    results: ["34% Overhead Reduction", "99.97% System Uptime", "6 Countries Consolidated"],
    stack: ["Next.js", "PostgreSQL", "AWS", "Docker", "Redis"],
    accent: "#00FFB2",
    liveUrl: undefined as string | undefined,
  },
  "aura-pay": {
    title: "Aura Pay",
    category: "FinTech",
    overview: "Aura Pay is a next-generation payment gateway designed for cross-border transactions in Sub-Saharan Africa, focusing on speed and anti-fraud security.",
    challenge: "Existing gateways suffered from high failure rates and vulnerable security protocols. Aura needed a scalable platform that could process millions in volume while maintaining near-zero fraud rates.",
    solution: "We developed a Python-based ML fraud detection model that integrates into a React/Node.js stack. The system uses advanced biometric verification and real-time transaction monitoring.",
    results: ["$12M+ Volume (Q1)", "67% Fraud Reduction", "99.2% Accuracy"],
    stack: ["Python", "TensorFlow", "React", "Node.js", "Kubernetes"],
    accent: "#7B61FF",
    liveUrl: undefined as string | undefined,
  },
  "lumina-health": {
    title: "Lumina Health",
    category: "HealthTech",
    overview: "Lumina Health connects 10k+ clinicians with patients across East Africa, providing a universal patient management system for clinics in both urban and rural settings.",
    challenge: "The primary hurdle was creating a seamless experience for doctors in areas with intermittent connectivity while ensuring absolute data privacy for sensitive patient records.",
    solution: "Using Flutter for a unified mobile/web experience and a robust Firebase backend, we built an encrypted patient record system with a custom local-first synchronization protocol.",
    results: ["10k+ Clinicians Connected", "40% Admin Time Cut", "0 Security Breaches"],
    stack: ["Flutter", "Firebase", "GraphQL", "TypeScript"],
    accent: "#FF6B35",
    liveUrl: undefined as string | undefined,
  },
  "eastern-vacations-ems": {
    title: "Eastern Vacations EMS",
    category: "TravelTech",
    overview: "Eastern Vacations & Safaris Kenya — a Mombasa-based tour and safari operator — needed to replace their manual, spreadsheet-driven workflow with a centralised digital management system capable of handling reservations, scheduling, and admin operations across their entire business.",
    challenge: "Their reservations team and admin department were working in silos: booking data was scattered across spreadsheets and WhatsApp messages, leading to double-bookings, missed follow-ups, and slow client response times — a serious problem in hospitality where speed of response directly impacts revenue.",
    solution: "We built a full Enterprise Management System with two purpose-built portal experiences: a Reservations Portal for the bookings team (safari scheduling, client itinerary generation, payment tracking) and a secure Admin Portal (operational reporting, user management, fleet visibility). The system is a Progressive Web App — installable on any device — with dark mode, role-based access control, and a branded UI in Eastern Vacations' signature safari gold palette.",
    results: ["Booking Errors Eliminated", "Admin & Reservations Unified", "PWA — Works on Any Device"],
    stack: ["React", "Vite", "Firebase", "Tailwind CSS", "Vercel"],
    accent: "#F5A623",
    liveUrl: "https://eastern-vacations-system.vercel.app/",
  },
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

  if (!study) return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-[#03000A] flex flex-col items-center justify-center text-center">
      <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#8888AA] mb-4 block">404</span>
      <h1 className="text-5xl font-bold text-[#F0F0FF] tracking-tighter mb-4">Case Study Not Found</h1>
      <p className="text-[#8888AA] mb-10">This project may be under NDA or the link is incorrect.</p>
      <Link href="/#work" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/[0.12] text-[#8888AA] hover:text-[#00FFB2] hover:border-[#00FFB2]/30 transition-all duration-300">
        ← Back to Work
      </Link>
    </main>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#03000A]">
      <div className="max-w-4xl mx-auto">
        <Link href="/#work" className="inline-flex items-center gap-2 text-[#8888AA] hover:text-[#00FFB2] transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Work
        </Link>

        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#8888AA] mb-6 inline-block">
            {study.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#F0F0FF] tracking-tighter mb-8">
            {study.title}
          </h1>
          <div className="aspect-video w-full rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br opacity-20" style={{ backgroundImage: `linear-gradient(to bottom right, ${study.accent}, transparent)` }} />
            <span className="text-3xl font-bold text-white/20 select-none">Project Mockup</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#00FFB2] mb-6">Overview</h2>
              <p className="text-[#CCCCEE] text-xl leading-relaxed font-light">{study.overview}</p>
            </section>

            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#7B61FF] mb-6">The Challenge</h2>
              <p className="text-[#8888AA] text-lg leading-relaxed">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#FF6B35] mb-6">The Solution</h2>
              <p className="text-[#8888AA] text-lg leading-relaxed">{study.solution}</p>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#00FFB2] mb-6">Results</h2>
              <div className="space-y-6">
                {study.results.map((res, i) => (
                  <div key={i} className="glass p-5 rounded-2xl border border-white/[0.08]">
                    <p className="text-2xl font-bold text-[#F0F0FF] tracking-tight">{res}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#8888AA] mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {study.stack.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-[#CCCCEE]">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-white/[0.05] text-center">
          <h3 className="text-3xl font-bold text-[#F0F0FF] mb-8">Ready for similar results?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] text-[#03000A] font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,255,178,0.3)] transition-all duration-500"
            >
              Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
            </Link>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full border text-sm font-bold tracking-widest uppercase transition-all duration-300"
                style={{ borderColor: `${study.accent}50`, color: study.accent }}
              >
                View Live Site <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
