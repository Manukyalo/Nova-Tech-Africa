"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 relative z-10 w-full bg-background" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white leading-tight">
            Let&apos;s Build Something <br/><span className="text-gradient">Great</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            Ready to scale your business with world-class engineering? Send us a message and our team will get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 text-gray-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-[#00f0ff] group-hover:scale-110 group-hover:bg-[#00f0ff]/10 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xl group-hover:text-white transition-colors duration-300">hello@novatechafrica.com</span>
            </div>
            <div className="flex items-center gap-6 text-gray-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-[#7000ff] group-hover:scale-110 group-hover:bg-[#7000ff]/10 transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xl group-hover:text-white transition-colors duration-300">Nairobi, Kenya (Global Reach)</span>
            </div>
            <div className="flex items-center gap-6 text-gray-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-[#00f0ff] group-hover:scale-110 group-hover:bg-[#00f0ff]/10 transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xl group-hover:text-white transition-colors duration-300">+254 700 000 000</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <form className="glass p-8 md:p-12 rounded-3xl flex flex-col gap-6 border border-white/5 shadow-2xl bg-black/40">
            <h3 className="text-3xl font-semibold text-white mb-4 font-heading">Send a Message</h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-widest">First Name</label>
                <input type="text" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all" placeholder="John" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-widest">Last Name</label>
                <input type="text" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#7000ff] focus:ring-1 focus:ring-[#7000ff] transition-all" placeholder="Doe" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-widest">Email Address</label>
              <input type="email" className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-widest">Message</label>
              <textarea rows={4} className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#7000ff] focus:ring-1 focus:ring-[#7000ff] transition-all resize-none" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="button" className="mt-6 w-full py-5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#7000ff] text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(112,0,255,0.4)]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
