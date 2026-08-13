"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function SkillsRoadmap() {
  return (
    <section id="skills" className="relative py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container-custom">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            BUILDING MY STACK
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm tracking-widest uppercase"
          >
            Honest assessment of technical capabilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Current */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[var(--color-brand-gold)] via-white/10 to-transparent" />
            <div className="pl-8">
              <h3 className="text-xl font-bold text-white tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-gold)] shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                Currently Using
              </h3>
              <div className="flex flex-col gap-6">
                {skillCategories.current.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-lg text-white font-medium">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Building */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
            <div className="pl-8">
              <h3 className="text-xl font-bold text-white tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                Learning
              </h3>
              <div className="flex flex-col gap-6">
                {skillCategories.building.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-lg text-white font-medium">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Next */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
            <div className="pl-8">
              <h3 className="text-xl font-bold text-white/50 tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/10" />
                Next Frontier
              </h3>
              <div className="flex flex-col gap-6">
                {skillCategories.next.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-end border-b border-white/5 pb-2 opacity-50">
                    <span className="text-lg text-white font-medium">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
