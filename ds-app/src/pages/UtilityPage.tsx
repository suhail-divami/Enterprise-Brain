import { useState } from 'react'
import { SearchMd, Copy01, Check, ArrowLeft, XClose, ChevronRight } from '@untitledui/icons'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

const KEYBOARD_SHORTCUTS = [
  { keys: ['⌘', 'K'], description: 'Open command palette' },
  { keys: ['⌘', 'S'], description: 'Save document' },
  { keys: ['⌘', 'Z'], description: 'Undo' },
  { keys: ['⌘', 'Shift', 'Z'], description: 'Redo' },
  { keys: ['Ctrl', 'C'], description: 'Copy' },
  { keys: ['Ctrl', 'V'], description: 'Paste' },
  { keys: ['Esc'], description: 'Close / dismiss' },
  { keys: ['Tab'], description: 'Focus next element' },
]

const BRAND_COLORS = [
  { name: 'Purple 100', hex: '#ede9ff' }, { name: 'Purple 200', hex: '#c7c0ff' },
  { name: 'Purple 300', hex: '#a89cff' }, { name: 'Purple 400', hex: '#8a78ff' },
  { name: 'Purple 500', hex: '#6459fe' }, { name: 'Purple 600', hex: '#5149de' },
  { name: 'Purple 700', hex: '#3c2cb8' }, { name: 'Purple 800', hex: '#281a8a' },
  { name: 'Blue 400', hex: '#85c2ff' }, { name: 'Blue 500', hex: '#4285f4' },
  { name: 'Green 400', hex: '#34d399' }, { name: 'Green 500', hex: '#34a853' },
  { name: 'Red 400', hex: '#f87171' }, { name: 'Red 500', hex: '#e94235' },
  { name: 'Yellow 400', hex: '#fbbf24' }, { name: 'Yellow 500', hex: '#ffba00' },
]

const COMMAND_RESULTS = [
  { icon: '📄', label: 'New Document', shortcut: '⌘ N', category: 'Actions' },
  { icon: '🔍', label: 'Search Files', shortcut: '⌘ F', category: 'Actions' },
  { icon: '⚙️', label: 'Open Settings', shortcut: '⌘ ,', category: 'Navigate' },
  { icon: '🏠', label: 'Go to Dashboard', shortcut: 'G D', category: 'Navigate' },
  { icon: '💬', label: 'Start AI Chat', shortcut: '⌘ J', category: 'Navigate' },
]

export default function UtilityPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [cmdOpen, setCmdOpen] = useState(false)
  const [cmdQuery, setCmdQuery] = useState('')
  const [cmdActive, setCmdActive] = useState(0)
  const [scrollVisible, setScrollVisible] = useState(true)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000)
  }

  const filteredResults = COMMAND_RESULTS.filter(r =>
    r.label.toLowerCase().includes(cmdQuery.toLowerCase())
  )

  return (
    <div>
      <PageHeader section="Chapter 10" title="Utility Components" description="Keyboard shortcuts, command palette, clipboard helpers, color primitives, error states, and scroll utilities." />
      <div style={{ padding: '40px 56px', maxWidth: 1000 }}>

        <Section title="Keyboard Shortcut Hints" description="Key combination pills for displaying hotkeys">
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {KEYBOARD_SHORTCUTS.map((shortcut, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < KEYBOARD_SHORTCUTS.length - 1 ? '1px solid var(--color-border-secondary)' : 'none' }}>
                <span style={{ fontSize: 13, color: 'var(--color-fg-secondary)' }}>{shortcut.description}</span>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  {shortcut.keys.map((key, ki) => (
                    <span key={ki} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 28, height: 24, padding: '0 8px', borderRadius: 9999, backgroundColor: 'rgba(10,18,23,0.05)', border: '1px solid var(--color-border-secondary)', fontSize: 11, fontWeight: 600, color: 'var(--color-fg-secondary)', fontFamily: 'monospace', lineHeight: 1 }}>
                      {key}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Command Palette" description="Full-screen search command launcher">
          <ComponentRow label="Trigger" noBorder>
            <button onClick={() => setCmdOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 9999, border: '1px solid var(--color-border-secondary)', background: 'rgba(10,18,23,0.03)', cursor: 'pointer', color: 'var(--color-fg-tertiary)', fontSize: 13, fontFamily: 'inherit', boxShadow: 'var(--shadow-xs)' }}>
              <SearchMd style={{ width: 14, height: 14 }} strokeWidth={2} />
              <span>Search commands...</span>
              <span style={{ display: 'inline-flex', gap: 3, marginLeft: 8 }}>
                {['⌘', 'K'].map(k => (
                  <span key={k} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 22, height: 20, padding: '0 4px', borderRadius: 4, backgroundColor: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border-primary)', fontSize: 10, fontWeight: 600, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>{k}</span>
                ))}
              </span>
            </button>
          </ComponentRow>
        </Section>

        {/* Command Palette Modal */}
        {cmdOpen && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'var(--color-bg-overlay)', zIndex: 2000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 120 }} onClick={() => setCmdOpen(false)}>
            <div style={{ width: 560, backgroundColor: 'var(--color-bg-primary)', borderRadius: 16, border: '1px solid var(--color-border-secondary)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid var(--color-border-secondary)' }}>
                <SearchMd style={{ width: 18, height: 18, color: 'var(--color-fg-tertiary)', flexShrink: 0 }} strokeWidth={2} />
                <input
                  autoFocus
                  value={cmdQuery}
                  onChange={e => { setCmdQuery(e.target.value); setCmdActive(0) }}
                  placeholder="Search commands, files, settings..."
                  style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: 'var(--color-fg-primary)', background: 'transparent', fontFamily: 'inherit' }}
                />
                <button onClick={() => setCmdOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-tertiary)', display: 'flex' }}>
                  <XClose style={{ width: 16, height: 16 }} strokeWidth={2} />
                </button>
              </div>
              <div style={{ maxHeight: 320, overflowY: 'auto' }}>
                {filteredResults.length === 0 ? (
                  <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--color-fg-tertiary)', fontSize: 13 }}>No results found for "{cmdQuery}"</div>
                ) : (
                  <div style={{ padding: '6px' }}>
                    {filteredResults.map((result, i) => (
                      <button key={i} onClick={() => setCmdOpen(false)} onMouseEnter={() => setCmdActive(i)} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: 'none', background: cmdActive === i ? 'var(--color-primary-subtle)' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left', fontFamily: 'inherit' }}>
                        <span style={{ fontSize: 16 }}>{result.icon}</span>
                        <span style={{ flex: 1, fontSize: 13, color: cmdActive === i ? 'var(--color-primary)' : 'var(--color-fg-primary)', fontWeight: cmdActive === i ? 600 : 400 }}>{result.label}</span>
                        <span style={{ fontSize: 10, color: 'var(--color-fg-quaternary)' }}>{result.category}</span>
                        <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--color-fg-tertiary)', backgroundColor: 'var(--color-bg-tertiary)', padding: '2px 6px', borderRadius: 4 }}>{result.shortcut}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ padding: '8px 16px', borderTop: '1px solid var(--color-border-secondary)', display: 'flex', gap: 12 }}>
                {[
                  { keys: ['↑', '↓'], label: 'navigate' },
                  { keys: ['↵'], label: 'select' },
                  { keys: ['Esc'], label: 'close' },
                ].map(({ keys, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {keys.map(k => (
                      <span key={k} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 20, height: 18, padding: '0 4px', borderRadius: 3, backgroundColor: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border-primary)', fontSize: 10, fontFamily: 'monospace', color: 'var(--color-fg-tertiary)' }}>{k}</span>
                    ))}
                    <span style={{ fontSize: 10, color: 'var(--color-fg-quaternary)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Section title="Copy to Clipboard" description="Interactive copy button with feedback state">
          <ComponentRow label="Copy examples" noBorder>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
              {[
                'npm install @untitledui/icons',
                'var(--color-primary)',
                'https://api.enterprisebrain.com/v1',
              ].map(text => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', backgroundColor: 'rgba(10,18,23,0.04)', borderRadius: 12, border: '1px solid var(--color-border-subtle)' }}>
                  <code style={{ flex: 1, fontSize: 12, color: 'var(--color-fg-secondary)', fontFamily: 'JetBrains Mono, monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{text}</code>
                  <button onClick={() => handleCopy(text)} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 9999, border: 'none', background: copied === text ? 'var(--color-success-subtle)' : 'rgba(10,18,23,0.06)', cursor: 'pointer', color: copied === text ? 'var(--color-success)' : 'var(--color-fg-tertiary)', fontSize: 11, fontWeight: 500, fontFamily: 'inherit', flexShrink: 0, transition: 'all 150ms' }}>
                    {copied === text ? <Check style={{ width: 12, height: 12 }} strokeWidth={2.5} /> : <Copy01 style={{ width: 12, height: 12 }} strokeWidth={2} />}
                    {copied === text ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          </ComponentRow>
        </Section>

        <Section title="Brand Color Primitives" description="Full brand primitive color palette">
          <div style={{ padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px,1fr))', gap: 10 }}>
              {BRAND_COLORS.map(color => (
                <div key={color.name} onClick={() => handleCopy(color.hex)} style={{ cursor: 'pointer' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 9999, backgroundColor: color.hex, border: '1px solid rgba(0,0,0,0.06)', marginBottom: 6 }} />
                  <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--color-fg-primary)' }}>{color.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--color-fg-quaternary)', fontFamily: 'monospace' }}>{color.hex}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="404 Error Page" description="Branded error state with navigation action">
          <div style={{ padding: '40px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ fontSize: 72, fontWeight: 800, color: 'var(--color-bg-tertiary)', lineHeight: 1, letterSpacing: '-4px', userSelect: 'none' }}>404</div>
            <div style={{ marginTop: -16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-fg-primary)', margin: '0 0 8px' }}>Page not found</h3>
              <p style={{ fontSize: 14, color: 'var(--color-fg-secondary)', margin: 0, maxWidth: 320, lineHeight: '20px' }}>The page you're looking for doesn't exist or has been moved to a different URL.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 40, padding: '0 20px', borderRadius: 9999, background: '#0a1217', border: 'none', color: 'white', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>
                <ArrowLeft style={{ width: 16, height: 16 }} strokeWidth={2} />
                Go back
              </button>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 40, padding: '0 20px', borderRadius: 9999, background: 'transparent', border: '1px solid var(--color-border-secondary)', color: 'var(--color-fg-secondary)', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>
                Home
                <ChevronRight style={{ width: 16, height: 16 }} strokeWidth={2} />
              </button>
            </div>
          </div>
        </Section>

        <Section title="Scroll to Top Button" description="Fixed position scroll utility">
          <ComponentRow label="Scroll trigger" noBorder>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button onClick={() => setScrollVisible(v => !v)} style={{ height: 36, padding: '0 16px', borderRadius: 9999, border: '1px solid var(--color-border-secondary)', background: 'transparent', fontSize: 13, cursor: 'pointer', color: 'var(--color-fg-secondary)', fontFamily: 'inherit' }}>
                Toggle scroll button
              </button>
              {scrollVisible && (
                <button style={{ width: 44, height: 44, borderRadius: 9999, background: '#0a1217', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: 'var(--shadow-md)', transition: 'all 150ms' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 11l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              )}
              <span style={{ fontSize: 12, color: 'var(--color-fg-tertiary)' }}>{scrollVisible ? 'Visible' : 'Hidden'}</span>
            </div>
          </ComponentRow>
        </Section>

      </div>
    </div>
  )
}
