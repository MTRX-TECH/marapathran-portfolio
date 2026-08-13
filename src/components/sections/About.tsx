"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden" ref={containerRef}>
      <div className="container-custom relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 tracking-tighter">
              WHO IS <br/>
              <span className="text-[var(--color-brand-gold)]">MARAPATHRAN?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div 
              className="md:col-span-8 flex flex-col gap-8 text-xl md:text-2xl font-light leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-white font-medium">
                "Hi, I'm MARAPATHRAN — a Computer Science student, entrepreneur and builder focused on creating technology from the ground up."
              </p>
              <p>
                My curiosity started during childhood through computers, laptops, PCs and gaming. 
                That curiosity gradually evolved from simply asking <span className="text-white italic">"How does this work?"</span> into 
                <span className="text-white italic"> "How can I build this myself?"</span> and eventually into 
                <span className="text-[var(--color-brand-gold)] font-medium"> "I want to build my own technology ecosystem."</span>
              </p>
              <p>
                I do not want my identity to be limited to being a conventional software developer. 
                My long-term vision is to create independent products, companies, and systems rather than simply work on existing solutions.
              </p>
            </motion.div>

            <motion.div 
              className="md:col-span-4 flex flex-col gap-6"
              style={{ y }}
            >
              <div className="p-8 border border-white/10 bg-[#050505]/50 backdrop-blur-md rounded-sm">
                <h3 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-8">Evolution</h3>
                <ul className="flex flex-col gap-6">
                  {["CURIOUS", "LEARN", "BUILD", "EXPERIMENT", "CREATE", "SCALE", "IMPACT"].map((step, i, arr) => (
                    <li key={step} className="flex flex-col relative">
                      <span className="text-lg font-bold tracking-widest text-white/90">{step}</span>
                      {i !== arr.length - 1 && (
                        <div className="h-6 w-[1px] bg-white/20 ml-2 my-2" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
