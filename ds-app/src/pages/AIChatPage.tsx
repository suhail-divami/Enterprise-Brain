import { useState, useRef, useEffect } from 'react'
import {
  Send01, Paperclip, RefreshCw01, ThumbsUp, ThumbsDown,
  Copy01, Check, ChevronDown, ChevronRight,
  CheckCircle, ArrowRight, User01,
} from '@untitledui/icons'

function Spinner({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg className="spinner" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeOpacity="0.25" strokeWidth="3" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

const SUGGESTED_PROMPTS = [
  { app: 'Salesforce', appColor: '#00a1e0', prompt: 'Summarize', rest: ' last quarter\'s pipeline activity' },
  { app: 'Notion', appColor: '#000000', prompt: 'Draft', rest: ' a project proposal for Q2 roadmap' },
  { app: 'Slack', appColor: '#4a154b', prompt: 'What are', rest: ' the top support tickets this week?' },
  { app: 'HubSpot', appColor: '#ff7a59', prompt: 'Analyze', rest: ' competitor pricing strategies' },
  { app: 'Jira', appColor: '#0052cc', prompt: 'Write', rest: ' a weekly engineering status update' },
]

interface Message {
  role: 'user' | 'assistant'
  content: string
  streaming?: boolean
}

const DEMO_MESSAGES: Message[] = [
  { role: 'user', content: 'Can you summarize the key findings from our Q1 performance review and highlight the top 3 areas for improvement?' },
  { role: 'assistant', content: 'Based on your Q1 performance review, here are the key findings:\n\n1. **Revenue growth** reached 18% YoY, exceeding the 15% target by 3pp.\n2. **Customer retention** dropped to 78%, down from 84% in Q4 2024.\n3. **Product velocity** improved with 12 features shipped, up from 8 in Q4.\n\nThe top 3 areas for improvement are retention strategy, support SLA adherence, and onboarding completion rates.' },
]

export default function AIChatPage() {
  const [inputVal, setInputVal] = useState('')
  const [messages, setMessages] = useState<Message[]>(DEMO_MESSAGES)
  const [streaming, setStreaming] = useState(false)
  const [thinkingOpen, setThinkingOpen] = useState(false)
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)
  const [modelOpen, setModelOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState('Enterprise Brain Pro')
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const hasContent = inputVal.trim().length > 0

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!hasContent) return
    const userMsg: Message = { role: 'user', content: inputVal.trim() }
    setMessages(prev => [...prev, userMsg])
    setInputVal('')
    setStreaming(true)
    setTimeout(() => {
      setStreaming(false)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I\'ve analyzed your request. Here\'s what I found based on the available context and data sources connected to your workspace.',
      }])
    }, 2500)
  }

  const handleCopy = (idx: number) => {
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  const hasMessages = messages.length > 0

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      backgroundColor: 'var(--color-bg-primary)',
      fontFamily: "'Satoshi', 'Inter', sans-serif",
    }}>
      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: 56, borderBottom: '1px solid var(--color-border-subtle)',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-fg-primary)' }}>Enterprise Brain</span>
        {/* Model selector */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setModelOpen(o => !o)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px',
              borderRadius: 9999,
              border: '1px solid var(--color-border-primary)',
              background: 'var(--color-bg-primary)',
              cursor: 'pointer', fontSize: 13,
              color: 'var(--color-fg-primary)',
              fontFamily: 'inherit',
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 4, background: '#0f0f0e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: 7, fontWeight: 800 }}>EB</span>
            </div>
            <span style={{ fontWeight: 500 }}>{selectedModel}</span>
            <ChevronDown style={{ width: 14, height: 14, color: 'var(--color-fg-tertiary)' }} strokeWidth={2} />
          </button>
          {modelOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 6px)', right: 0,
              minWidth: 260, backgroundColor: 'var(--color-bg-primary)',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 16, padding: 6,
              boxShadow: 'var(--shadow-lg)', zIndex: 100,
            }}>
              {[
                { name: 'Enterprise Brain Pro', badge: 'Recommended' },
                { name: 'Enterprise Brain Fast', badge: 'Fast' },
                { name: 'Enterprise Brain Mini', badge: 'Economy' },
              ].map(model => (
                <button
                  key={model.name}
                  onClick={() => { setSelectedModel(model.name); setModelOpen(false) }}
                  style={{
                    width: '100%', padding: '10px 12px',
                    borderRadius: 10, border: 'none',
                    background: selectedModel === model.name ? 'var(--color-primary-subtle)' : 'transparent',
                    cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 500, color: selectedModel === model.name ? 'var(--color-primary)' : 'var(--color-fg-primary)' }}>
                    {model.name}
                  </span>
                  <span style={{
                    fontSize: 10, padding: '2px 8px', borderRadius: 9999,
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary)', fontWeight: 600,
                  }}>{model.badge}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 868, margin: '0 auto' }}>
          {!hasMessages ? (
            /* Greeting state */
            <div style={{ padding: '80px 0 40px', textAlign: 'left' }}>
              <h1 style={{
                fontSize: 64, fontWeight: 400,
                color: 'rgba(10,18,23,0.9)',
                margin: '0 0 48px',
                lineHeight: 1.1,
                fontFamily: "'Satoshi', 'Inter', sans-serif",
                letterSpacing: '-1px',
              }}>Hello Suhail!</h1>
            </div>
          ) : (
            <div style={{ paddingTop: 40, paddingBottom: 24, display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* Greeting at top */}
              <h2 style={{
                fontSize: 32, fontWeight: 400,
                color: 'rgba(10,18,23,0.9)',
                margin: 0,
                fontFamily: "'Satoshi', 'Inter', sans-serif",
              }}>Hello Suhail!</h2>

              {/* Thinking block */}
              <div style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 12, overflow: 'hidden' }}>
                <button
                  onClick={() => setThinkingOpen(o => !o)}
                  style={{
                    width: '100%', padding: '10px 16px',
                    background: 'rgba(10,18,23,0.02)', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'inherit',
                  }}
                >
                  {thinkingOpen
                    ? <ChevronDown style={{ width: 14, height: 14, color: 'var(--color-fg-tertiary)' }} strokeWidth={2} />
                    : <ChevronRight style={{ width: 14, height: 14, color: 'var(--color-fg-tertiary)' }} strokeWidth={2} />}
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-fg-tertiary)', fontStyle: 'italic' }}>Thinking...</span>
                  <span style={{ fontSize: 11, color: 'var(--color-fg-disabled)', marginLeft: 'auto' }}>3.2s</span>
                </button>
                {thinkingOpen && (
                  <div style={{
                    padding: '10px 16px', fontSize: 12,
                    color: 'var(--color-fg-tertiary)', lineHeight: '18px',
                    fontStyle: 'italic', backgroundColor: 'rgba(10,18,23,0.02)',
                    borderTop: '1px solid var(--color-border-subtle)',
                  }}>
                    The user is asking for a Q1 summary. I need to analyze revenue, retention, and velocity metrics. Let me consider what data I have access to and structure the response in a clear hierarchical format...
                  </div>
                )}
              </div>

              {/* Tool call pill */}
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 14px', borderRadius: 9999,
                  backgroundColor: 'rgba(10,18,23,0.05)',
                  fontSize: 13, color: 'var(--color-fg-secondary)',
                }}>
                  <CheckCircle style={{ width: 14, height: 14, color: 'var(--color-success-fg)' }} strokeWidth={2} />
                  Searched knowledge base
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 14px', borderRadius: 9999,
                  backgroundColor: 'rgba(10,18,23,0.05)',
                  fontSize: 13, color: 'var(--color-fg-secondary)',
                }}>
                  <CheckCircle style={{ width: 14, height: 14, color: 'var(--color-success-fg)' }} strokeWidth={2} />
                  Retrieved Q1 data
                </div>
              </div>

              {/* Messages */}
              {messages.map((msg, idx) => (
                <div key={idx}>
                  {msg.role === 'user' ? (
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{
                        maxWidth: '72%',
                        padding: '12px 16px',
                        borderRadius: '18px 18px 4px 18px',
                        backgroundColor: '#0a1217',
                        color: 'white',
                        fontSize: 14, lineHeight: '22px',
                      }}>
                        {msg.content}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      {/* Avatar */}
                      <div style={{
                        width: 28, height: 28, borderRadius: 9999,
                        background: '#0f0f0e',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: 2,
                      }}>
                        <span style={{ color: 'white', fontSize: 8, fontWeight: 700 }}>EB</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 14, lineHeight: '22px',
                          color: 'var(--color-fg-primary)',
                        }}>
                          {msg.content.split('\n').map((line, li) => (
                            <p key={li} style={{ margin: li === 0 ? 0 : '8px 0 0' }}>{line}</p>
                          ))}
                        </div>
                        {/* Actions */}
                        <div style={{ display: 'flex', gap: 4, marginTop: 12 }}>
                          <button style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            width: 30, height: 30, borderRadius: 9999,
                            border: '1px solid var(--color-border-subtle)',
                            background: 'transparent', cursor: 'pointer',
                            color: 'var(--color-fg-tertiary)',
                          }}>
                            <ThumbsUp style={{ width: 13, height: 13 }} strokeWidth={2} />
                          </button>
                          <button style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            width: 30, height: 30, borderRadius: 9999,
                            border: '1px solid var(--color-border-subtle)',
                            background: 'transparent', cursor: 'pointer',
                            color: 'var(--color-fg-tertiary)',
                          }}>
                            <ThumbsDown style={{ width: 13, height: 13 }} strokeWidth={2} />
                          </button>
                          <button
                            onClick={() => handleCopy(idx)}
                            style={{
                              display: 'flex', alignItems: 'center', gap: 4,
                              height: 30, padding: '0 10px', borderRadius: 9999,
                              border: '1px solid var(--color-border-subtle)',
                              background: 'transparent', cursor: 'pointer',
                              color: 'var(--color-fg-tertiary)', fontSize: 12, fontFamily: 'inherit',
                            }}
                          >
                            {copiedIdx === idx
                              ? <Check style={{ width: 12, height: 12 }} strokeWidth={2} />
                              : <Copy01 style={{ width: 12, height: 12 }} strokeWidth={2} />}
                            {copiedIdx === idx ? 'Copied' : 'Copy'}
                          </button>
                          <button style={{
                            display: 'flex', alignItems: 'center', gap: 4,
                            height: 30, padding: '0 10px', borderRadius: 9999,
                            border: '1px solid var(--color-border-subtle)',
                            background: 'transparent', cursor: 'pointer',
                            color: 'var(--color-fg-tertiary)', fontSize: 12, fontFamily: 'inherit',
                          }}>
                            <RefreshCw01 style={{ width: 12, height: 12 }} strokeWidth={2} />
                            Regenerate
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Streaming indicator */}
              {streaming && (
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 9999, background: '#0f0f0e',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{ color: 'white', fontSize: 8, fontWeight: 700 }}>EB</span>
                  </div>
                  <div style={{
                    fontSize: 14, color: 'var(--color-fg-primary)', lineHeight: '22px',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <Spinner size={14} color="var(--color-fg-secondary)" />
                    <span className="blink-cursor">Generating response</span>
                  </div>
                </div>
              )}

              {/* Token usage */}
              <div style={{ paddingTop: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: 'var(--color-fg-tertiary)' }}>Context window</span>
                  <span style={{ fontSize: 12, color: 'var(--color-fg-disabled)' }}>2,048 / 128K tokens</span>
                </div>
                <div style={{ height: 4, backgroundColor: 'rgba(10,18,23,0.06)', borderRadius: 9999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '1.6%', backgroundColor: 'var(--color-primary)', borderRadius: 9999 }} />
                </div>
              </div>

              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input area — pinned to bottom */}
      <div style={{
        padding: '16px 32px 28px', flexShrink: 0,
        backgroundColor: 'var(--color-bg-primary)',
      }}>
        <div style={{ maxWidth: 868, margin: '0 auto' }}>

          {/* Suggested prompts — only show when no messages */}
          {!hasMessages && (
            <div style={{
              marginBottom: 16,
              borderRadius: 16,
              border: '1px solid var(--color-border-subtle)',
              overflow: 'hidden',
            }}>
              {SUGGESTED_PROMPTS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setInputVal(item.prompt + item.rest)}
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', gap: 16,
                    height: 60, padding: '0 20px',
                    borderTop: i > 0 ? '1px solid rgba(10,18,23,0.05)' : 'none',
                    background: 'transparent', border: 'none',
                    cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                  }}
                >
                  {/* App icon */}
                  <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    backgroundColor: item.appColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ color: 'white', fontSize: 8, fontWeight: 700 }}>{item.app.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-fg-primary)' }}>{item.prompt}</span>
                    <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--color-fg-secondary)' }}>{item.rest}</span>
                  </div>
                  <ArrowRight style={{ width: 16, height: 16, color: 'var(--color-fg-disabled)' }} strokeWidth={2} />
                </button>
              ))}
              {/* Connect apps row */}
              <button style={{
                width: '100%',
                display: 'flex', alignItems: 'center', gap: 16,
                height: 52, padding: '0 20px',
                borderTop: '1px solid rgba(10,18,23,0.05)',
                background: 'transparent', border: 'none',
                cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 6,
                  backgroundColor: 'rgba(10,18,23,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <User01 style={{ width: 14, height: 14, color: 'var(--color-fg-tertiary)' }} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 13, color: 'var(--color-fg-secondary)' }}>Connect your apps for better answers</span>
                <ArrowRight style={{ width: 14, height: 14, color: 'var(--color-fg-disabled)', marginLeft: 'auto' }} strokeWidth={2} />
              </button>
            </div>
          )}

          {/* Chat input pill */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 0,
            backgroundColor: 'rgba(10,18,23,0.05)',
            borderRadius: 32,
            height: 56,
            padding: '0 8px',
          }}>
            {/* Attach button */}
            <button style={{
              width: 36, height: 36, borderRadius: 9999, border: 'none',
              background: 'transparent', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-fg-tertiary)', flexShrink: 0, marginLeft: 4,
            }}>
              <Paperclip style={{ width: 18, height: 18 }} strokeWidth={2} />
            </button>

            {/* Input */}
            <input
              ref={inputRef}
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
              placeholder="What would you like to do?"
              style={{
                flex: 1, border: 'none', outline: 'none',
                background: 'transparent',
                fontSize: 14, color: 'var(--color-fg-primary)',
                fontFamily: "'Satoshi', 'Inter', sans-serif",
                padding: '0 8px',
              }}
            />

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={!hasContent && !streaming}
              style={{
                width: 36, height: 36, borderRadius: 9999, border: 'none',
                background: hasContent ? '#0a1217' : 'rgba(10,18,23,0.2)',
                cursor: hasContent ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', flexShrink: 0,
                opacity: !hasContent && !streaming ? 0.5 : 1,
                transition: 'background 150ms',
              }}
            >
              {streaming
                ? <Spinner size={16} color="white" />
                : <Send01 style={{ width: 16, height: 16 }} strokeWidth={2} />}
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: 10 }}>
            <span style={{ fontSize: 12, color: 'var(--color-fg-disabled)' }}>
              Enterprise Brain can make mistakes. Verify important information.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
