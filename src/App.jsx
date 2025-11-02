import React from 'react'
import { profile, sections } from './data/profile'
import Section from './components/Section'
import AgentPanel from './components/AgentPanel'
import { Mail, MapPin, Github, Linkedin, BookOpen, GraduationCap, FileText, Terminal, Code2 } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0a3d2c15_1px,transparent_1px),linear-gradient(to_bottom,#0a3d2c15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-emerald-900/10 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 py-8">
        <div className="mb-8 border border-emerald-500/40 rounded-lg bg-black/60 backdrop-blur-sm shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-emerald-500/30 bg-emerald-950/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <Terminal size={14} className="text-emerald-400 ml-2" />
            <span className="text-xs font-mono text-emerald-400">~/PhD/portfolio</span>
            <span className="text-xs font-mono text-terminal-dim ml-auto">tharun@s3lab</span>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex gap-5 items-start flex-1">
                <img 
                  src={`${import.meta.env.BASE_URL}headshot.jpg`} 
                  alt="Profile" 
                  className="w-28 h-28 md:w-36 md:h-36 rounded-lg object-cover border-2 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex-shrink-0" 
                />
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 size={18} className="text-emerald-400" />
                    <h1 className="text-2xl md:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
                      {profile.name}
                    </h1>
                  </div>
                  <p className="text-emerald-300/80 text-sm font-mono mb-3">&gt; {profile.title}</p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-terminal-dim mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-emerald-500"/> 
                      {profile.location}
                    </span>
                    <a className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors" href={`mailto:${profile.email}`}>
                      <Mail size={13} className="text-emerald-500"/> 
                      {profile.email}
                    </a>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-terminal-text/90 mb-4 max-w-2xl">
                    <span className="text-emerald-400 mr-1">$</span>{profile.blurb}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {profile.links.map(l => (
                      <a 
                        key={l.label} 
                        href={l.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-emerald-500/40 rounded-md hover:border-emerald-400 hover:bg-emerald-500/10 transition-all text-xs font-mono group"
                      >
                        {l.label === 'GitHub' && <Github size={13} className="group-hover:text-emerald-400"/>} 
                        {l.label === 'LinkedIn' && <Linkedin size={13} className="group-hover:text-emerald-400"/>} 
                        {l.label === 'Scholar' && <BookOpen size={13} className="group-hover:text-emerald-400"/>} 
                        {l.label === 'Advisor' && <GraduationCap size={13} className="group-hover:text-emerald-400"/>} 
                        {l.label === 'CV (PDF)' && <FileText size={13} className="group-hover:text-emerald-400"/>} 
                        <span className="group-hover:text-emerald-400">{l.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-96 w-full">
                <AgentPanel />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Section title="education">
            <div className="space-y-3">
              {sections.education.map((e) => (
                <div key={e.degree} className="border border-emerald-500/30 rounded-lg p-4 bg-black/40 backdrop-blur-sm hover:border-emerald-400/50 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-mono text-sm font-bold text-emerald-400">{e.degree}</h3>
                    <span className="text-[11px] font-mono text-terminal-dim whitespace-nowrap bg-emerald-500/10 px-2 py-1 rounded">{e.period}</span>
                  </div>
                  <div className="text-xs text-terminal-dim font-mono mb-3">{e.school}</div>
                  <ul className="space-y-1.5 text-[13px]">
                    {e.notes.map((n, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-500 flex-shrink-0">›</span>
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="research-projects">
            <div className="space-y-3">
              {sections.research.map((r) => (
                <div key={r.title} className="border border-emerald-500/30 rounded-lg p-4 bg-black/40 backdrop-blur-sm hover:border-emerald-400/50 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-mono text-sm font-bold text-emerald-400">{r.title}</h3>
                    <span className="text-[11px] font-mono text-terminal-dim whitespace-nowrap bg-emerald-500/10 px-2 py-1 rounded">{r.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {r.tags.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded border border-emerald-500/40 bg-emerald-500/5 text-emerald-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5 text-[13px]">
                    {r.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-500 flex-shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="mt-6">
          <Section title="publications">
            <ol className="space-y-3">
              {sections.publications.map((p, idx) => (
                <li key={p.title} className="flex gap-3">
                  <span className="text-emerald-400 font-mono text-sm font-bold flex-shrink-0">[{idx + 1}]</span>
                  <div className="text-[13px]">
                    <span className="font-mono font-semibold text-terminal-text">{p.title}</span>
                    <span className="text-terminal-dim"> — {p.venue}</span>
                    {p.links?.length ? (
                      <span className="ml-2 inline-flex flex-wrap gap-2">
                        {p.links.map(l => (
                          <a 
                            key={l.href} 
                            href={l.href} 
                            className="text-emerald-400 hover:text-emerald-300 underline text-xs" 
                            target="_blank" 
                            rel="noreferrer"
                          >
                            [{l.label}]
                          </a>
                        ))}
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        </div>

        <footer className="mt-8 pt-6 border-t border-emerald-500/20 text-center">
          <p className="text-xs font-mono text-terminal-dim">
            <span className="text-emerald-500">$</span> © {new Date().getFullYear()} {profile.name} — research portfolio
            <span className="text-emerald-500 animate-pulse ml-1">▓</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
