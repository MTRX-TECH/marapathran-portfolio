"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center pt-24 pb-12">
      
      {/* Absolute Minimal Grid Line */}
      <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5 pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-[var(--color-brand-red)]" />
              <p className="text-xs font-bold tracking-[0.4em] text-[var(--color-brand-silver)] uppercase">
                Founder / System Architect
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-6"
            >
              MARAPATHRAN V.
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-4xl lg:text-5xl font-black text-[var(--color-brand-silver)] leading-[0.9] tracking-tighter uppercase mb-10"
            >
              BUILDING WHAT <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-gold)' }}>COMES NEXT.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-12 max-w-lg"
            >
              <p className="text-sm md:text-base text-[var(--color-brand-silver)] font-light leading-relaxed">
                Entrepreneur engineering an independent technology ecosystem from scratch. 
                Founder and CEO of <span className="text-white font-bold">MTRX TECH</span>, focusing on high-performance digital infrastructure and enterprise software.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-6"
            >
              <a href="#projects">
                <MagneticButton className="bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-dark)] border-transparent text-xs font-bold tracking-[0.2em] px-10 py-5 rounded-none uppercase transition-colors">
                  Explore Projects
                </MagneticButton>
              </a>
              <a href="#contact" className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-silver)] hover:text-white uppercase transition-colors">
                Contact
              </a>
            </motion.div>
          </div>

          {/* Right Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh]"
          >
            {/* Structural Box Frame */}
            <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[var(--color-brand-gold)] z-20 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[var(--color-brand-red)] z-20 pointer-events-none" />

            <div className="relative w-full h-full overflow-hidden bg-[#050505] group cursor-none">
              <Image
                src="/images/founder.png"
                alt="Marapathran V"
                fill
                className="object-cover object-center grayscale contrast-[1.1] brightness-[0.8] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay gradient to blend bottom edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
