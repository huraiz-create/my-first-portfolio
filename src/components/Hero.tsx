import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Sparkles, Code2, Bot } from 'lucide-react';
import { personalProfile, heroContent } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-600/10 to-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 -left-20 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#0A101D]/80 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-cyan-300 uppercase">
                {heroContent.eyebrow}
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Curious Minds <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
                Build What Comes Next.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-4 max-w-2xl">
              {heroContent.supportingHeadline}
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-xl font-normal">
              {heroContent.supportingDescription}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {heroContent.primaryCta}
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-[#0F1424] hover:bg-[#141B30] border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all"
              >
                {heroContent.secondaryCta}
              </a>
            </div>

            {/* Location & Quick Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/8 w-full max-w-xl">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1422] border border-white/6 text-xs text-slate-300 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{heroContent.locationText}</span>
              </div>

              {/* LinkedIn Button */}
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1422] hover:bg-[#151D30] border border-white/6 hover:border-cyan-500/30 text-xs text-slate-300 hover:text-cyan-300 font-mono transition-colors"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-cyan-400" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${personalProfile.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1422] hover:bg-[#151D30] border border-white/6 hover:border-cyan-500/30 text-xs text-slate-300 hover:text-cyan-300 font-mono transition-colors"
                aria-label="Send email to Hassan Huraiz"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalProfile.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Abstract AI Graphic */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[450px] lg:h-[480px] flex items-center justify-center">
            <div className="w-full h-full rounded-2xl border border-white/10 bg-[#0B0F19]/60 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-black/60 group">
              
              {/* Corner decorative bracket aesthetics */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/60 z-20" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/60 z-20" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/60 z-20" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60 z-20" />

              {/* Top metadata pill */}
              <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-20 text-[10px] font-mono text-slate-400 border-b border-white/5 pb-2">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Bot className="w-3.5 h-3.5" />
                  <span>NEURAL TOPOLOGY // NODE 01</span>
                </span>
                <span className="text-slate-400">INTERACTIVE CANVAS</span>
              </div>

              {/* Canvas Interactive Simulation */}
              <NeuralCanvas />

              {/* Bottom status badge */}
              <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between text-[11px] font-mono bg-[#07090E]/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/5">
                <span className="text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Exploration
                </span>
                <span className="text-cyan-400 font-semibold">AJIET CSE AI & ML</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none"
            aria-label="Scroll to about section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border border-slate-700 group-hover:border-cyan-400/60 flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce"></div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
