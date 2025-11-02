import { ChevronRight } from 'lucide-react'

export default function Section({ title, children }) {
  return (
    <section className="relative border border-emerald-500/40 rounded-lg bg-black/60 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-950/50 to-transparent border-b border-emerald-500/30">
        <ChevronRight size={14} className="text-emerald-400" />
        <h2 className="font-mono text-emerald-400 text-sm font-bold tracking-tight uppercase">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-emerald-400/30 to-transparent ml-2" />
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
        </div>
      </div>
      
      <div className="p-4 text-sm text-terminal-text">
        {children}
      </div>
    </section>
  )
}
