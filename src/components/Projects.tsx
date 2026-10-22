import React, { useState } from 'react';
import { Clock, ArrowRight, Sparkles, Layers, BarChart2, BookOpen, Cpu, ShieldCheck } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#07090E] border-t border-white/5 bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              SECTION 04 // FEATURED ACADEMIC PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Academic & Concept Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Genuine academic engineering explorations and structured AI application concepts. Clearly marked with their real verification status.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1424] border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Honest Status Verification</span>
          </div>
        </div>

        {/* 2 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={project.id}
                className="group glass-panel rounded-3xl border border-white/8 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/40 hover:-translate-y-1"
              >
                {/* Visual Cover Header (Custom CSS/SVG Composition) */}
                <div className="relative h-56 sm:h-64 w-full bg-[#0A0E18] overflow-hidden border-b border-white/8 flex items-center justify-center p-6">
                  
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>

                  {/* Project A Visual Cover: Technical ML Performance & Feature Schematic */}
                  {isFirst ? (
                    <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-3">
                      <div className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-[#0F1526]/90 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                        <span className="flex items-center gap-1.5">
                          <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>ACADEMIC FEATURE CORRELATION</span>
                        </span>
                        <span className="text-slate-400">PIPELINE SCHEMATIC</span>
                      </div>

                      {/* Schematic Visual Flow */}
                      <div className="grid grid-cols-3 gap-2 w-full text-center">
                        <div className="p-2.5 rounded-lg bg-[#070B14] border border-white/8">
                          <div className="text-[10px] font-mono text-slate-400">INPUT DATA</div>
                          <div className="text-xs font-bold text-white mt-1">Student Factors</div>
                          <div className="h-1 bg-cyan-400/40 rounded-full mt-2"></div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30">
                          <div className="text-[10px] font-mono text-cyan-400">ML MODEL</div>
                          <div className="text-xs font-bold text-cyan-200 mt-1">Supervised Est.</div>
                          <div className="h-1 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#070B14] border border-white/8">
                          <div className="text-[10px] font-mono text-slate-400">OUTPUT</div>
                          <div className="text-xs font-bold text-white mt-1">Performance</div>
                          <div className="h-1 bg-indigo-400/40 rounded-full mt-2"></div>
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-md bg-[#070A12] border border-white/5 text-[10px] font-mono text-slate-400">
                        <span>Status: Proposed Exploration</span>
                        <span className="text-cyan-400">Python • Pandas • Scikit</span>
                      </div>
                    </div>
                  ) : (
                    /* Project B Visual Cover: AI Academic Companion Blueprint Schematic */
                    <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-3">
                      <div className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-[#140F26]/90 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                        <span className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-purple-400" />
                          <span>AI COMPANION ARCHITECTURE</span>
                        </span>
                        <span className="text-slate-400">CONCEPT BLUEPRINT</span>
                      </div>

                      {/* Blueprint Feature Grid */}
                      <div className="grid grid-cols-3 gap-2 w-full text-center">
                        <div className="p-2.5 rounded-lg bg-[#070B14] border border-white/8">
                          <div className="text-[10px] font-mono text-slate-400">PYQ ARCHIVE</div>
                          <div className="text-xs font-bold text-white mt-1">Branch & Sem</div>
                          <div className="h-1 bg-purple-400/40 rounded-full mt-2"></div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/30">
                          <div className="text-[10px] font-mono text-purple-400">GENAI ENGINE</div>
                          <div className="text-xs font-bold text-purple-200 mt-1">3-Tier Explanations</div>
                          <div className="h-1 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#070B14] border border-white/8">
                          <div className="text-[10px] font-mono text-slate-400">STUDY HUB</div>
                          <div className="text-xs font-bold text-white mt-1">Marks & Insights</div>
                          <div className="h-1 bg-cyan-400/40 rounded-full mt-2"></div>
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-md bg-[#070A12] border border-white/5 text-[10px] font-mono text-slate-400">
                        <span>Concept Design</span>
                        <span className="text-purple-400">Planned GenAI Learning Hub</span>
                      </div>
                    </div>
                  )}

                  {/* Corner Accent Glow */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl pointer-events-none ${isFirst ? 'bg-cyan-500/15' : 'bg-purple-500/15'}`} />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Status Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {project.shortDescription}
                    </p>

                    {/* Highlights / Planned features preview */}
                    {isFirst ? (
                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Key Objectives:</div>
                        <ul className="text-xs text-slate-300 space-y-1.5 pl-4 list-disc marker:text-cyan-400">
                          <li>Explore student performance patterns and influential academic factors.</li>
                          <li>Investigate suitable machine learning approaches for predictive modeling.</li>
                        </ul>
                      </div>
                    ) : (
                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Planned Capabilities:</div>
                        <ul className="text-xs text-slate-300 space-y-1.5 pl-4 list-disc marker:text-purple-400">
                          <li>Multi-tier AI explanations (easy, medium, advanced) calibrated to student need.</li>
                          <li>Previous-year question organization and recurring topic detection.</li>
                        </ul>
                      </div>
                    )}

                    {/* Proposed Tech Stack Tags */}
                    <div className="mb-6">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Proposed Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.proposedTechnologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-[#090D18] border border-white/6 text-[11px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-6 border-t border-white/8 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      {isFirst ? 'Academic Specification' : 'System Architecture Blueprint'}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide transition-all shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/25 cursor-pointer"
                    >
                      <span>{isFirst ? 'Explore Project Details' : 'View Project Concept'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed review */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
