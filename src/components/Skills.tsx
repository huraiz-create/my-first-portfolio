import React from 'react';
import { Cpu, Code, Globe, LineChart, Sparkles, AlertCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-generative':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'programming-cs':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'web-product':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'data-problem-solving':
        return <LineChart className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#07090E] border-t border-white/5 bg-dot-pattern">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[350px] bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              SECTION 03 // LEARNING AREAS & TECHNICAL INTERESTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Skills & Learning Areas
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Structured into key academic and engineering pillars — displayed as active technical interests and exploration tracks rather than arbitrary percentage bars.
            </p>
          </div>

          {/* Academic Transparency Note */}
          <div className="shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0E1322] border border-white/10 text-xs font-mono text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Honest representation of academic coursework & active learning</span>
          </div>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/8 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-400 font-semibold">
                        {category.code}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#090D18] hover:bg-[#121929] border border-white/8 hover:border-white/20 text-xs font-medium text-slate-200 transition-all hover:scale-[1.02]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Learning Status</span>
                <span className="text-slate-300">Active Curriculum & Exploration</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note Box */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#0B0F1B] border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="text-cyan-400 font-bold">Accuracy Standard:</span>
            <span>Skill levels are presented as exploratory and curricular domains rather than unverified certifications.</span>
          </div>
          <span className="text-cyan-400 shrink-0 font-semibold">Curriculum-Aligned</span>
        </div>

      </div>
    </section>
  );
};
