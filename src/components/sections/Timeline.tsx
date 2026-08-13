"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="timeline" className="relative py-32 bg-black overflow-hidden" ref={containerRef}>
      <div className="container-custom">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            THE JOURNEY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm tracking-widest uppercase"
          >
            From curiosity to creation.
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[var(--color-brand-gold)] md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24 relative z-10 py-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={item.period} className="relative flex flex-col md:flex-row items-start md:justify-between group">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/30 md:-translate-x-1/2 mt-1.5 transition-colors duration-500 group-hover:border-[var(--color-brand-gold)] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.5)] z-20" />
                  
                  {/* Left Content (or top on mobile) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`pl-12 md:pl-0 md:w-[45%] flex flex-col ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12 md:text-left'}`}
                  >
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-brand-gold)] mb-2 uppercase">
                      {item.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                  
                  {/* Empty space for the other side on desktop */}
                  <div className={`hidden md:block md:w-[45%] ${isEven ? 'md:order-2' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
