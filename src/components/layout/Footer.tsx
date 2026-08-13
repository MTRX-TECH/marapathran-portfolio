import Link from "next/link";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-widest text-white mb-2">MARAPATHRAN V</h2>
            <p className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-6">
              Founder & CEO — MTRX TECH
            </p>
            <p className="text-xl italic text-[var(--color-brand-gold)] font-light">
              "Born to Make Impact"
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              {["About", "Projects", "Vision", "MTRX TECH", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm tracking-wider text-white/70 hover:text-white transition-colors interactive"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-6">Connect</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://linkedin.com/in/marapathranv" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm tracking-wider text-white/70 hover:text-white transition-colors interactive">
                  <LinkedinIcon /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/MTRX-TECH" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm tracking-wider text-white/70 hover:text-white transition-colors interactive">
                  <GithubIcon /> GitHub
                </a>
              </li>
              <li>
                <a href="https://instagram.com/marapathran_dev.x" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm tracking-wider text-white/70 hover:text-white transition-colors interactive">
                  <InstagramIcon /> Instagram (Personal)
                </a>
              </li>
              <li>
                <a href="https://instagram.com/MTRX_TECH" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm tracking-wider text-white/70 hover:text-white transition-colors interactive">
                  <InstagramIcon /> Instagram (Brand)
                </a>
              </li>
              <li>
                <a href="mailto:mtrx.tch512@gmail.com" className="flex items-center gap-3 text-sm tracking-wider text-white/70 hover:text-white transition-colors interactive mt-4 pt-4 border-t border-white/10">
                  <Mail size={16} /> mtrx.tch512@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs tracking-widest text-white/30 uppercase">
          <p>© {new Date().getFullYear()} MARAPATHRAN V. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Engineered from Scratch</p>
        </div>
      </div>
    </footer>
  );
}
