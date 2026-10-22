import React from 'react';
import { GraduationCap, Building2, MapPin, Sparkles, BookOpen, Terminal, Lightbulb } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#07090E] border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION 02 // PROFILE OVERVIEW
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {aboutContent.heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mb-6"></div>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {aboutContent.introParagraphs.map((para, idx) => (
              <p key={idx} className="font-normal text-slate-300">
                {para}
              </p>
            ))}

            <div className="pt-4">
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-sm">
                <p className="text-xs sm:text-sm font-mono text-cyan-300 flex items-center gap-2">
                  <span className="text-base">💡</span>
                  <span>
                    <strong>Student Perspective:</strong> Focused on genuine learning, reproducible code, and building step-by-step without exaggerated claims.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Profile Overview Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-xl shadow-black/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Academic & Engineering Specs</span>
              </h3>

              <div className="space-y-4">
                {aboutContent.overviewCards.map((card, idx) => {
                  const icons: Record<string, React.ReactNode> = {
                    GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
                    Building2: <Building2 className="w-5 h-5 text-indigo-400" />,
                    MapPin: <MapPin className="w-5 h-5 text-sky-400" />,
                    Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />
                  };

                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#090D18]/80 border border-white/5 hover:border-white/15 transition-colors flex items-start gap-3.5"
                    >
                      <div className="p-2 rounded-lg bg-white/5 mt-0.5 shrink-0">
                        {icons[card.icon]}
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                          {card.label}
                        </div>
                        <div className="text-sm font-semibold text-white mt-0.5">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status pill */}
              <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Degree Status</span>
                <span className="text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40">
                  Enrolled CSE (AI & ML)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Approach Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutContent.coreValues.map((value, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0C101C]/60 border border-white/6 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                {idx === 0 && <BookOpen className="w-5 h-5" />}
                {idx === 1 && <Terminal className="w-5 h-5" />}
                {idx === 2 && <Lightbulb className="w-5 h-5" />}
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
