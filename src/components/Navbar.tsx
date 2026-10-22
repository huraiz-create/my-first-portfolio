import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'academics', 'exploring', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills & Areas', href: '#skills', id: 'skills' },
    { label: 'Academic Projects', href: '#projects', id: 'projects' },
    { label: 'Academic Journey', href: '#academics', id: 'academics' },
    { label: 'What I\'m Exploring', href: '#exploring', id: 'exploring' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/85 backdrop-blur-md border-b border-white/8 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg p-1"
          aria-label="Hassan Huraiz - Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-[#090D16] rounded-[11px] flex items-center justify-center">
              <span className="text-xs font-mono font-bold tracking-tight text-cyan-400 group-hover:text-white transition-colors">
                HH
              </span>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
              <span>Hassan Huraiz</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block"></span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
              CSE • AI & ML
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0F1422]/70 border border-white/6 px-3 py-1.5 rounded-full shadow-inner shadow-black/40" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA and External Link */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 bg-[#0F1422]/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all"
            aria-label="LinkedIn Profile (opens in new tab)"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>

          <a
            href="#contact"
            className="text-xs font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold px-4 py-1.5 rounded-lg transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#07090E]/95 border-b border-white/10 p-6 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg border border-white/10 text-slate-200 text-sm font-medium flex items-center justify-center gap-1.5 bg-[#0F1422]"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-semibold text-sm"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
