"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
import MagneticButton from "../ui/MagneticButton";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const formData = new FormData(e.currentTarget);
    // Append the Web3Forms Access Key
    formData.append("access_key", "3d469baf-8fe4-4267-beea-98ad245b9fd0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus("success");
        // Reset the form
        (e.target as HTMLFormElement).reset();
        
        // Reset success state after a few seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
        console.error("Form submission failed:", data);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative pt-32 bg-black overflow-hidden">
      <div className="container-custom relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-32">
          {/* Left Text */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-none"
            >
              LET'S BUILD <br/>
              <span className="text-[var(--color-brand-gold)]">SOMETHING.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 font-light max-w-lg mb-12"
            >
              Got a project in mind, want to collaborate, or just talk tech? Drop me a line — I'm always open to discussing new ideas and building real software.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="mailto:marapathranv@gmail.com">
                <MagneticButton className="px-6 py-3 text-xs bg-white text-black hover:bg-white/90 border-transparent flex items-center gap-2">
                  <Mail size={16} /> EMAIL ME
                </MagneticButton>
              </a>
              <a href="https://linkedin.com/in/marapathranv" target="_blank" rel="noreferrer">
                <MagneticButton className="px-6 py-3 text-xs border-white/20 hover:border-white flex items-center gap-2">
                  <LinkedinIcon /> LINKEDIN
                </MagneticButton>
              </a>
              <a href="https://github.com/MTRX-TECH" target="_blank" rel="noreferrer">
                <MagneticButton className="px-6 py-3 text-xs border-white/20 hover:border-white flex items-center gap-2">
                  <GithubIcon /> GITHUB
                </MagneticButton>
              </a>
              <a href="https://instagram.com/founder.apex" target="_blank" rel="noreferrer">
                <MagneticButton className="px-6 py-3 text-xs border-white/20 hover:border-white flex items-center gap-2">
                  <InstagramIcon /> INSTAGRAM
                </MagneticButton>
              </a>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#050505] border border-white/10 p-8 md:p-12 relative"
          >
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors placeholder:text-white/20"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors placeholder:text-white/20"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors resize-none placeholder:text-white/20"
                  placeholder="Tell me about your idea..."
                />
              </div>

              {/* Honeypot Spam Protection for Web3Forms */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button 
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={`mt-4 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  submitStatus === "success" 
                    ? "bg-green-500/10 border border-green-500/50 text-green-400" 
                    : submitStatus === "error"
                    ? "bg-red-500/10 border border-red-500/50 text-red-400"
                    : "border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-black disabled:opacity-50"
                }`}
              >
                {isSubmitting 
                  ? "SENDING MESSAGE..." 
                  : submitStatus === "success" 
                  ? "MESSAGE SENT — I'LL BE IN TOUCH" 
                  : submitStatus === "error"
                  ? "FAILED TO SEND — PLEASE TRY AGAIN"
                  : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center pb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-8"
          >
            THE JOURNEY HAS <br className="hidden md:block"/> JUST STARTED.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-2 mb-12"
          >
            <p className="text-xl font-bold tracking-[0.3em] text-white uppercase">MARAPATHRAN V</p>
            <p className="text-sm font-medium tracking-widest text-white/50 uppercase">FOUNDER & CEO — MTRX TECH</p>
            <p className="text-xs font-bold tracking-[0.4em] text-[var(--color-brand-gold)] mt-4 uppercase">BORN TO MAKE IMPACT</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://instagram.com/MTRX_TECH" target="_blank" rel="noreferrer">
              <MagneticButton className="bg-[var(--color-brand-gold)] text-black border-transparent hover:bg-white px-10 py-5 text-sm font-bold">
                FOLLOW THE JOURNEY
              </MagneticButton>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
