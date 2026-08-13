"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden font-sans">
      <div className="container-custom relative z-10 w-full">
        
        {/* Clean Portfolio Header */}
        <div className="border-b border-white/20 pb-4 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl font-black tracking-tighter uppercase text-white">
            Selected Work
          </h2>
          <div className="text-xs tracking-[0.2em] text-[var(--color-brand-silver)] uppercase">
            01 / 2026
          </div>
        </div>

        {/* High-End Portfolio Grid */}
        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const number = (index + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
              >
                {/* Visual Container */}
                <div className="w-full lg:w-1/2 h-[40vh] md:h-[50vh] relative overflow-hidden bg-[#050505] border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                  <Image 
                    src="/images/founder.png" // Placeholder, in real world this is project image
                    alt={project.title}
                    fill
                    className="object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Subtle Number */}
                  <div className="absolute top-4 left-4 text-[var(--color-brand-silver)]/30 font-oswald text-4xl font-black z-10">
                    {number}
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)] px-2 py-1">
                      {project.statusType}
                    </span>
                    <span className="text-xs text-[var(--color-brand-silver)] uppercase tracking-widest">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="text-base text-[var(--color-brand-silver)] font-light leading-relaxed mb-8 max-w-xl">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="bg-white/5 px-3 py-1 text-[10px] tracking-widest text-white uppercase">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="bg-white/5 px-3 py-1 text-[10px] tracking-widest text-white/50 uppercase">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-6">
                    <a href={project.github || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-[var(--color-brand-red)] transition-colors group/link">
                      View Source
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
