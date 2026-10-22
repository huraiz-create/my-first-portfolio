import React from 'react';
import { GraduationCap, Sparkles, Globe, ArrowUpRight, Compass } from 'lucide-react';
import { explorationThemes } from '../data/portfolioData';

export const WhatImExploring: React.FC = () => {
  const getThemeIcon = (id: string) => {
    switch (id) {
      case 'ai-education':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'generative-ai':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'web-development':
        return <Globe className="w-6 h-6 text-sky-400" />;
      default:
        return <Compass className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="exploring" className="py-24 relative bg-[#07090E] border-t border-white/5 bg-dot-pattern">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION 06 // CURRENT DIRECTION & INQUIRY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Turning Curiosity into Useful Technology.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Active exploratory vectors where I spend my time outside the syllabus—prototyping ideas, studying emerging models, and learning how to build thoughtful digital products.
          </p>
        </div>

        {/* 3 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {explorationThemes.map((theme, idx) => (
            <div
              key={theme.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/8 relative flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getThemeIcon(theme.id)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/30 text-cyan-300">
                    {theme.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                  {theme.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {theme.description}
                </p>

                {/* Key Inquiries / Highlights */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide mb-2">
                    Active Study Focus:
                  </div>
                  {theme.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Vector 0{idx + 1}</span>
                <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Exploratory</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Exploratory disclaimer */}
        <div className="mt-12 text-center text-xs font-mono text-slate-400">
          Framed as genuine intellectual and development exploration, not established commercial consulting.
        </div>

      </div>
    </section>
  );
};
