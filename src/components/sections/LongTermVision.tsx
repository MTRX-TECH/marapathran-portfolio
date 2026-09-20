"use client";

import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

const futureSectors = [
  "TECHNOLOGY", "EDUCATION", "TRANSPORTATION", "HEALTHCARE", 
  "MANUFACTURING", "ENERGY", "AGRICULTURE", "LOGISTICS", 
  "TELECOMMUNICATIONS", "FINANCE", "REAL ESTATE", "MEDIA", "TOURISM"
];

export default function LongTermVision() {
  return (
    <section id="vision" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Cinematic Background effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[150vw] h-[150vw] rounded-full border-[100px] border-white/5" />
        <div className="absolute w-[100vw] h-[100vw] rounded-full border-[100px] border-white/10" />
        <div className="absolute w-[50vw] h-[50vw] rounded-full border-[100px] border-white/20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8"
          >
            THE LONG GAME
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/80 font-light leading-snug"
          >
            "From one person building from scratch <br className="hidden md:block"/>
            to an ecosystem built to create."
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {futureSectors.map((sector, index) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative p-4 border border-white/5 bg-black/50 backdrop-blur-sm text-center hover:bg-white/5 transition-colors cursor-default"
              >
                <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {sector}
                </span>
                {/* Subtle highlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-gold)]/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="inline-block px-4 py-2 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-[var(--color-brand-gold)] uppercase bg-white/5">
              Roadmap Note: These represent future sectors I plan to explore as MTRX TECH expands over time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
