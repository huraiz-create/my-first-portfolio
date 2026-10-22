import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { academicSubjectsExplored } from '../data/portfolioData';

export const AcademicJourney: React.FC = () => {
  return (
    <section id="academics" className="py-24 relative bg-[#07090E] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION 05 // FORMAL EDUCATION & CURRICULAR MILESTONES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Academic Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Undergraduate engineering education at AJ Institute of Engineering and Technology, combining computer science fundamentals with specialized AI & ML coursework.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Degree Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#090D18] rounded-[15px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Bachelor of Engineering (B.E.)
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  Computer Science Engineering
                </h3>
                <p className="text-base text-cyan-300 font-medium">
                  Specialization in Artificial Intelligence & Machine Learning
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>AJ Institute of Engineering and Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Mangaluru, Karnataka, India</span>
                </div>
              </div>

              <div className="pt-3">
                <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  ● Undergraduate Degree In Progress
                </div>
              </div>
            </div>

            {/* Right Curricular Focus */}
            <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-8 space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Academic Subjects & Curricular Learning Areas</span>
                </h4>
                <span className="text-[11px] font-mono text-slate-400">University Curriculum</span>
              </div>

              {/* Subject Tag Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {academicSubjectsExplored.map((subj, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#080C16] border border-white/6 hover:border-cyan-500/30 transition-colors flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-slate-200">
                      {subj.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {subj.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Authenticity Notice */}
              <div className="p-3.5 rounded-xl bg-[#0A0E1A] border border-white/5 text-xs font-mono text-slate-400 leading-relaxed">
                * Note: Subjects listed represent undergraduate syllabus topics and structured academic study. No unverified certifications or fabricated grades are displayed.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
