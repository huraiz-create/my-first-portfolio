import React from 'react';
import { ArrowUpRight, Heart, Shield, Cpu } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills & Areas', href: '#skills' },
    { label: 'Academic Projects', href: '#projects' },
    { label: 'Academic Journey', href: '#academics' },
    { label: 'Exploring', href: '#exploring' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#05070B] border-t border-white/8 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row: Wordmark & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/6 items-start">
          
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#080B13] rounded-[7px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                  HH
                </div>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white font-sans uppercase">
                Hassan Huraiz
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              AI & ML Engineering Student • Generative AI Enthusiast • Aspiring AI Application Developer based in Mangaluru, India.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AJ Institute of Engineering and Technology</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Directory
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {footerNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Connect
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>

              <a
                href={`mailto:${personalProfile.email}`}
                className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <span>{personalProfile.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row: Copyright & Disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} Hassan Huraiz. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recruiter-Ready Authentic Student Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
