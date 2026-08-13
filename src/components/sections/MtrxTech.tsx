"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ecosystemNodes } from "@/data/ecosystem";

export default function MtrxTech() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="mtrx-tech" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a]/40 via-black to-black pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4"
          >
            MTRX TECH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-brand-gold)] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-8"
          >
            BORN TO MAKE IMPACT
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/60 max-w-2xl mx-auto font-light text-lg"
          >
            MTRX TECH is the technology company I'm building to explore what comes next. A vision for an interconnected ecosystem.
          </motion.p>
        </div>

        {/* Interactive Ecosystem */}
        <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          {/* Central Hub */}
          <div className="absolute z-20 w-32 h-32 rounded-full border border-white/20 bg-black/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <span className="text-white font-bold tracking-widest uppercase text-sm text-center">
              MTRX<br/>TECH
            </span>
          </div>

          {/* Nodes */}
          {ecosystemNodes.map((node, index) => {
            const angle = (index * 360) / ecosystemNodes.length;
            const radius = 220; // Distance from center
            
            // Calculate positions (using basic trigonometry, converted to percentages for responsive ish layout if needed, but fixed px is easier here)
            // Just use CSS transforms
            return (
              <motion.div
                key={node.id}
                className="absolute z-30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Connection Line to Center (SVG) */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-[220px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/5 origin-left -z-10 transition-opacity duration-300"
                    style={{ transform: `translateY(-50%) rotate(${angle + 180}deg)` }}
                  />
                  
                  <div className={`w-24 h-24 rounded-full border transition-all duration-300 flex items-center justify-center bg-black/90 backdrop-blur-sm ${
                    activeNode === node.id ? 'border-[var(--color-brand-gold)] shadow-[0_0_30px_rgba(197,160,89,0.3)]' : 'border-white/10 group-hover:border-white/40'
                  }`}>
                    <span className={`text-xs font-bold tracking-wider text-center px-2 transition-colors ${
                      activeNode === node.id ? 'text-[var(--color-brand-gold)]' : 'text-white/70'
                    }`}>
                      {node.title.replace('MTRX ', '')}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {activeNode === node.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-[#111] border border-white/10 rounded-sm z-50 pointer-events-none"
                      >
                        <p className="text-[10px] text-[var(--color-brand-gold)] font-bold tracking-widest mb-2 uppercase">
                          {node.status}
                        </p>
                        <h4 className="text-sm font-bold text-white mb-2">{node.title}</h4>
                        <p className="text-xs text-white/70 leading-relaxed">
                          {node.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
