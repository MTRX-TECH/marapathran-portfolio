import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Code2, Layers, Cpu, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(
    (p) => p.id === id || (id === "secure-online-transaction" && p.id === "canteen-pay")
  );

  if (!project) {
    return { title: "Project Not Found — MARAPATHRAN V" };
  }

  return {
    title: `${project.title} — Source & System Architecture | MARAPATHRAN V`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = projects.findIndex(
    (p) => p.id === id || (id === "secure-online-transaction" && p.id === "canteen-pay")
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-brand-gold)] selection:text-black font-sans pb-32">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container-custom max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white/70 hover:text-[var(--color-brand-gold)] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Selected Work
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)] px-2.5 py-1">
              Project {project.number}
            </span>
            <span className="text-xs text-[var(--color-brand-silver)] uppercase tracking-widest hidden sm:inline-block">
              {project.status}
            </span>
          </div>
        </div>
      </header>

      <div className="container-custom max-w-6xl mx-auto px-6 pt-12 md:pt-16">
        {/* Hero Meta & Title */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--color-brand-gold)] font-bold">
              MTRX TECH // PROJECT ARCHITECTURE
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs tracking-widest uppercase text-white/60">
              {project.repoStatus || "Active Engineering Project"}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase text-white">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-brand-silver)] max-w-3xl font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Big Project Visual Banner */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-none overflow-hidden border border-white/15 bg-[#0a0a0c] shadow-2xl mb-16">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/80">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 uppercase tracking-widest text-[10px]">
              Interface Capture // {project.title}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-[var(--color-brand-gold)] text-black font-bold px-4 py-1.5 flex items-center gap-2 tracking-wider text-[11px] uppercase hover:bg-white transition-colors"
              >
                GitHub Repository
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Content Breakdown: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-white/10 pt-16 mb-20">
          {/* Left Column: Context & Architectural Overview */}
          <div className="lg:col-span-2 space-y-12">
            {/* Context & Concept */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Layers className="text-[var(--color-brand-gold)]" size={20} />
                <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                  System Context & Concept
                </h2>
              </div>

              {project.context && (
                <div className="bg-white/[0.02] border border-white/10 p-6">
                  <h3 className="text-xs uppercase tracking-widest text-[var(--color-brand-gold)] mb-2 font-semibold">
                    Strategic Purpose
                  </h3>
                  <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                    {project.context}
                  </p>
                </div>
              )}

              {project.concept && (
                <div className="bg-white/[0.02] border border-white/10 p-6">
                  <h3 className="text-xs uppercase tracking-widest text-white/50 mb-2 font-semibold">
                    Architectural Concept
                  </h3>
                  <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                    {project.concept}
                  </p>
                </div>
              )}
            </div>

            {/* Architecture Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Cpu className="text-[var(--color-brand-gold)]" size={20} />
                  <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                    Key Technical Highlights
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/10"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[var(--color-brand-gold)] flex-shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-white/85 font-light leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Directory / Source Tree Structure */}
            {project.directoryStructure && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Terminal className="text-[var(--color-brand-gold)]" size={20} />
                  <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                    Source Code Tree & Modular Layout
                  </h2>
                </div>

                <div className="relative bg-[#07090e] border border-white/15 p-6 overflow-x-auto font-mono text-xs md:text-sm text-white/90 leading-relaxed shadow-inner">
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10 text-white/40 text-[11px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2">Repository Workspace Tree</span>
                  </div>
                  <pre className="text-emerald-400/90 whitespace-pre">
                    {project.directoryStructure}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Tech Stack & System Capabilities */}
          <div className="space-y-12">
            {/* Tech Stack */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Code2 className="text-[var(--color-brand-gold)]" size={20} />
                  <h2 className="text-lg font-bold uppercase tracking-wider text-white">
                    Technologies Used
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/5 border border-white/10 px-3 py-1.5 text-xs tracking-wider text-white font-mono uppercase hover:border-[var(--color-brand-gold)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Summary */}
            {project.architecture && (
              <div className="p-6 bg-white/[0.02] border border-white/10 space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-brand-gold)] font-bold">
                  Core Architecture
                </h3>
                <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Core Modules & Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[var(--color-brand-gold)]" size={20} />
                  <h2 className="text-lg font-bold uppercase tracking-wider text-white">
                    Platform Capabilities
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs md:text-sm text-white/75 font-light">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Pagination: Prev / Next Projects */}
        <div className="border-t border-white/15 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-[var(--color-brand-gold)] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] text-white/40 block">Previous</span>
                <span className="font-bold">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/#projects"
            className="text-xs uppercase tracking-[0.2em] font-bold text-black bg-[var(--color-brand-gold)] px-6 py-3 hover:bg-white transition-colors"
          >
            All Selected Work
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-[var(--color-brand-gold)] transition-colors text-right group"
            >
              <div>
                <span className="text-[10px] text-white/40 block">Next</span>
                <span className="font-bold">{nextProject.title}</span>
              </div>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
}
