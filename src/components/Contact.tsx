import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send, MapPin, MessageSquare, AlertCircle } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all fields before sending.');
      return;
    }

    // Construct mailto link with encoded user inputs
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalProfile.email}?subject=${subject}&body=${body}`;

    // Trigger user mail client
    window.location.href = mailtoUrl;

    setSubmitStatus(
      'Opening your email client with your prefilled message. (Backend service integration ready).'
    );
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07090E] border-t border-white/5 bg-grid-pattern">
      {/* Background radial accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/5 via-indigo-600/5 to-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SECTION 07 // DIRECT COMMUNICATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Connect and Exchange Ideas.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I'm interested in technology, AI-powered products, continuous learning, and opportunities to grow as an engineer.
          </p>
        </div>

        {/* Contact Grid: Direct Info + Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/8 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Verified Direct Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#090D18] border border-white/6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Personal Email</span>
                  </span>
                  <span className="text-[10px] text-emerald-400">Direct</span>
                </div>

                <div className="text-sm sm:text-base font-semibold text-white break-all">
                  {personalProfile.email}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`mailto:${personalProfile.email}`}
                    className="flex-1 text-center py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Open Mail App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-2xl bg-[#090D18] border border-white/6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Professional Network</span>
                  <span className="text-[10px] text-cyan-400">Active</span>
                </div>

                <div className="text-sm font-semibold text-white">
                  LinkedIn Profile
                </div>

                <a
                  href={personalProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#090D18] border border-white/6 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                    Base Location
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {personalProfile.location}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/8 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below to initiate a conversation about projects, engineering, or collaboration.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your thoughts, inquiry, or project discussion..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Draft</span>
                </button>
              </form>

              {/* Feedback and Technical Disclosure */}
              {submitStatus && (
                <div className="mt-4 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 animate-in fade-in">
                  {submitStatus}
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-white/5 flex items-start gap-2.5 text-[11px] font-mono text-slate-400">
                <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Static Portfolio Notice:</strong> This portfolio does not maintain an arbitrary database. The message triggers an authenticated mailto composition or can be connected directly to Formspree, Resend, or EmailJS backend webhooks.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
