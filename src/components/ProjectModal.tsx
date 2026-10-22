import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, GitBranch, ExternalLink, Database, Code2, AlertTriangle, Layers, BookOpen } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B0F19] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0D1220]/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Project Specification & Evidence Checklist
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto space-y-8">
          
          {/* Header Title & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{project.status}</span>
              </span>
            </div>

            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem Statement Box */}
          <div className="p-5 rounded-2xl bg-[#080C14] border border-white/8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Problem Statement</span>
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              "{project.problemStatement}"
            </p>
          </div>

          {/* Objectives or Planned Features */}
          {project.isConcept && project.plannedFeatures ? (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Planned Architectural Modules & Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.plannedFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0E1322] border border-white/6 hover:border-white/12 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <h5 className="text-sm font-bold text-white">{feat.title}</h5>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-lg bg-purple-950/20 border border-purple-500/20 text-xs font-mono text-purple-300">
                ⚠️ <strong>Concept Transparency:</strong> These are planned conceptual capabilities currently under design and exploration, not features of an already deployed production platform.
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Project Objectives</span>
              </h4>
              <div className="space-y-2.5">
                {project.objectives.map((obj, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#0E1322] border border-white/6"
                  >
                    <span className="w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-slate-200">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Methodology Overview */}
          {project.methodologyOverview && (
            <div className="p-5 rounded-2xl bg-[#0E1322] border border-white/8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Methodology & Technical Approach</span>
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.methodologyOverview}
              </p>
            </div>
          )}

          {/* Proposed Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Proposed / Intended Technologies</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.proposedTechnologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#0E1424] border border-white/10 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-2">
              * Displayed as proposed tools until formal implementation benchmarks are finalized and verified.
            </p>
          </div>

          {/* Evidence Checklist (Strict Academic Disclosure) */}
          <div className="p-5 rounded-2xl bg-[#070A10] border border-white/8 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Verification & Evidence Status</span>
              </span>
              <span className="text-[11px] text-slate-400 font-normal">Authenticity Standard</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">Dataset Source</span>
                <span className="text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {project.evidence.dataset}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">Results & Screenshots</span>
                <span className="text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {project.evidence.resultsAndScreenshots}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">GitHub Repository</span>
                <span className="text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {project.evidence.githubRepo}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">Live Demo</span>
                <span className="text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {project.evidence.liveDemo}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
              In accordance with academic rigor, all deliverables will be verified with real repository commits and benchmark results prior to marking as completed.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/8 bg-[#0D1220]/90">
          <span className="text-xs font-mono text-slate-400">
            Current Stage: <strong className="text-cyan-400">{project.implementationStage}</strong>
          </span>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
