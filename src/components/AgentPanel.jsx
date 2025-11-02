import React, { useState, useRef, useEffect } from 'react'
import { askAgent } from '../lib/agent'
import { knowledge } from '../data/knowledge'
import { ArrowUpRight, TerminalSquare, X, Send } from 'lucide-react'

export default function AgentPanel() {
  const [q, setQ] = useState('What is VOLTRON in one paragraph?')
  const [messages, setMessages] = useState([])
  const [busy, setBusy] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalInput, setModalInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  async function onAsk(e) {
    e?.preventDefault()
    if (!q.trim()) return
    setBusy(true)
    setShowModal(true)
    
    const userMessage = { role: 'user', content: q }
    setMessages(prev => [...prev, userMessage])
    setQ('')
    
    try {
      const context = knowledge.map(k => `• ${k.title}: ${k.bullets.join(' ')}`).join('\n')
      const answer = await askAgent(`${q}\n\nKnowledge:\n${context}`)
      const assistantMessage = { role: 'assistant', content: answer }
      setMessages(prev => [...prev, assistantMessage])
    } catch (e) {
      const errorMessage = { role: 'error', content: e.message }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setBusy(false)
    }
  }

  async function onModalAsk(e) {
    e?.preventDefault()
    if (!modalInput.trim() || busy) return
    setBusy(true)
    
    const userMessage = { role: 'user', content: modalInput }
    setMessages(prev => [...prev, userMessage])
    setModalInput('')
    
    try {
      const context = knowledge.map(k => `• ${k.title}: ${k.bullets.join(' ')}`).join('\n')
      const answer = await askAgent(`${modalInput}\n\nKnowledge:\n${context}`)
      const assistantMessage = { role: 'assistant', content: answer }
      setMessages(prev => [...prev, assistantMessage])
    } catch (e) {
      const errorMessage = { role: 'error', content: e.message }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setBusy(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setMessages([])
    setModalInput('')
  }

  return (
    <>
      <div className="border border-emerald-500/30 rounded-xl p-4 bg-black/30 shadow-neon">
        <div className="flex items-center gap-2 mb-3">
          <TerminalSquare className="text-terminal-accent" size={18} />
          <h3 className="font-mono text-sm tracking-tight">research-agent ▓▓</h3>
        </div>
        <form onSubmit={onAsk} className="flex gap-2">
          <input
            className="flex-1 bg-black/50 border border-emerald-500/30 rounded-md px-3 py-2 text-sm font-mono outline-none focus:border-emerald-400"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask about VOLTRON, agentic control, or VLA…"
          />
          <button
            disabled={busy}
            className="px-3 py-2 text-sm font-mono rounded-md border border-emerald-500/30 hover:border-emerald-400 disabled:opacity-50"
            type="submit"
          >{busy ? '…' : 'send'}</button>
        </form>
        <div className="mt-3 text-[11px] text-terminal-dim">
          AI agent with comprehensive knowledge and external context capabilities.
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-terminal-bg border-2 border-emerald-500 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] max-w-4xl w-full max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-emerald-500/30 bg-black/50">
              <div className="flex items-center gap-2 text-emerald-400">
                <TerminalSquare size={20} />
                <span className="font-mono font-bold tracking-tight">research-agent</span>
                <span className="text-emerald-400 animate-pulse">▓</span>
              </div>
              <button
                onClick={closeModal}
                className="text-terminal-dim hover:text-emerald-400 transition-colors p-1 hover:bg-emerald-500/10 rounded"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-black/30 to-transparent">
              {messages.map((msg, idx) => (
                <div key={idx} className={`${msg.role === 'user' ? 'text-right' : ''}`}>
                  {msg.role === 'user' ? (
                    <div className="inline-block bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-4 py-2 max-w-[80%]">
                      <div className="text-[10px] text-emerald-400 font-mono mb-1">$ you</div>
                      <div className="font-mono text-sm text-terminal-text">{msg.content}</div>
                    </div>
                  ) : msg.role === 'error' ? (
                    <div className="inline-block bg-red-500/10 border border-red-500/50 rounded-lg px-4 py-2 max-w-[80%]">
                      <div className="text-[10px] text-red-400 font-mono mb-1">error</div>
                      <div className="font-mono text-sm text-red-400">{msg.content}</div>
                    </div>
                  ) : (
                    <div className="inline-block bg-black/40 border border-emerald-500/30 rounded-lg px-4 py-2 max-w-[80%]">
                      <div className="text-[10px] text-emerald-400 font-mono mb-1">research-agent</div>
                      <div 
                        className="font-mono text-sm text-terminal-text whitespace-pre-wrap leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: msg.content
                            .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong class="text-emerald-400 font-bold">$1</strong>')
                            .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-emerald-400 font-bold">$1</strong>')
                            .replace(/\*([^*]+)\*/g, '<em class="text-emerald-300 italic">$1</em>')
                            .replace(/`([^`]+)`/g, '<code class="bg-emerald-500/10 px-1 py-0.5 rounded text-emerald-300">$1</code>')
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
              
              {busy && (
                <div className="text-emerald-400 font-mono text-sm animate-pulse flex items-center gap-3">
                  <TerminalSquare className="animate-bounce" size={18} />
                  <span>Processing query...</span>
                  <span className="animate-pulse">▓▓▓</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-emerald-500/30 bg-black/50">
              <form onSubmit={onModalAsk} className="flex gap-2">
                <input
                  type="text"
                  value={modalInput}
                  onChange={(e) => setModalInput(e.target.value)}
                  placeholder="Ask a follow-up question..."
                  className="flex-1 bg-black/50 border border-emerald-500/30 rounded-md px-3 py-2 text-sm font-mono outline-none focus:border-emerald-400"
                  disabled={busy}
                />
                <button
                  type="submit"
                  disabled={busy || !modalInput.trim()}
                  className="px-4 py-2 bg-emerald-500 text-black font-mono font-bold text-sm rounded hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send size={16} />
                  send
                </button>
              </form>
              <div className="text-[10px] text-terminal-dim font-mono mt-2 text-center">
                Continue the conversation or press ESC to close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
