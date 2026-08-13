"use client";

import { motion } from "framer-motion";

const principles = [
  "BUILD FROM SCRATCH",
  "THINK LONG TERM",
  "ENGINEER WITH PURPOSE",
  "LEARN CONSTANTLY",
  "CREATE REAL VALUE",
  "BUILD SYSTEMS",
  "MAKE IMPACT",
];

export default function Philosophy() {
  return (
    <section className="relative py-32 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter max-w-4xl mx-auto">
              "I DON'T WANT TO ONLY USE TECHNOLOGY. <br/>
              <span className="text-white/40">I WANT TO UNDERSTAND IT, BUILD IT, AND EVENTUALLY CREATE MY OWN."</span>
            </h2>
          </motion.div>

          <div className="w-full">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-gold)] uppercase mb-12">Core Principles</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="px-6 py-3 border border-white/10 rounded-sm bg-black text-sm md:text-base font-bold tracking-widest text-white/80 uppercase hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors cursor-default"
                >
                  {principle}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
