import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

function AspectRatioBox({ ratio, label }: { ratio: string; label: string }) {
  const [w, h] = ratio.split(':').map(Number)
  const paddingTop = `${(h / w) * 100}%`
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ position: 'relative', width: 180, paddingTop: `calc(180px * ${h} / ${w})` }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-bg-tertiary)', borderRadius: 10, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="24" height="24" rx="4" stroke="var(--color-fg-quaternary)" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="12" r="3" fill="var(--color-fg-quaternary)" />
            <path d="M4 22l7-7 5 5 4-4 8 8" stroke="var(--color-fg-quaternary)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 11, color: 'var(--color-fg-quaternary)' }}>{ratio}</span>
        </div>
      </div>
      <span style={{ fontSize: 12, color: 'var(--color-fg-tertiary)', textAlign: 'center' }}>{label}</span>
      <span style={{ fontSize: 10, color: 'var(--color-fg-quaternary)', textAlign: 'center', fontFamily: 'monospace' }}>{paddingTop}</span>
    </div>
  )
}

export default function MediaPage() {
  return (
    <div>
      <PageHeader section="Chapter 09" title="Media Components" description="Images, charts, video players, audio players, and PDF viewers." />
      <div style={{ padding: '40px 56px', maxWidth: 1000 }}>

        <Section title="Image Component" description="Aspect ratio container examples">
          <ComponentRow label="Aspect ratios" noBorder>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <AspectRatioBox ratio="1:1" label="Square" />
              <AspectRatioBox ratio="16:9" label="Widescreen" />
              <AspectRatioBox ratio="4:3" label="Standard" />
              <AspectRatioBox ratio="3:2" label="Photo" />
            </div>
          </ComponentRow>
        </Section>

        <Section title="Chart Container" description="Data visualization wrapper with title and legend">
          <div style={{ padding: 24 }}>
            <div style={{ border: '1px solid var(--color-border-secondary)', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border-secondary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-fg-primary)' }}>Revenue Trend</div>
                  <div style={{ fontSize: 12, color: 'var(--color-fg-tertiary)' }}>Last 6 months</div>
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                  {[
                    { label: 'Revenue', color: '#6459fe' },
                    { label: 'Expenses', color: '#8282ff' },
                    { label: 'Profit', color: '#34a853' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: item.color }} />
                      <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Chart area placeholder */}
              <div style={{ height: 200, backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'flex-end', padding: '24px 20px 12px', gap: 12, position: 'relative' }}>
                {/* Y axis lines */}
                {[0, 25, 50, 75, 100].map(p => (
                  <div key={p} style={{ position: 'absolute', left: 20, right: 20, top: `${100 - p}%`, borderTop: '1px solid var(--color-border-secondary)', zIndex: 0 }} />
                ))}
                {/* Bar chart */}
                {[
                  { rev: 70, exp: 45, profit: 25 },
                  { rev: 75, exp: 48, profit: 27 },
                  { rev: 68, exp: 42, profit: 26 },
                  { rev: 82, exp: 50, profit: 32 },
                  { rev: 88, exp: 52, profit: 36 },
                  { rev: 92, exp: 54, profit: 38 },
                ].map((d, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', gap: 3, alignItems: 'flex-end', zIndex: 1 }}>
                    <div style={{ flex: 1, height: `${d.rev}%`, backgroundColor: '#6459fe', borderRadius: '3px 3px 0 0', opacity: 0.8 }} />
                    <div style={{ flex: 1, height: `${d.exp}%`, backgroundColor: '#8282ff', borderRadius: '3px 3px 0 0', opacity: 0.8 }} />
                    <div style={{ flex: 1, height: `${d.profit}%`, backgroundColor: '#34a853', borderRadius: '3px 3px 0 0', opacity: 0.8 }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', padding: '8px 20px', borderTop: '1px solid var(--color-border-secondary)' }}>
                {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map(m => (
                  <div key={m} style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--color-fg-quaternary)' }}>{m}</div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Video Player" description="Styled video control UI (static)">
          <div style={{ padding: 24 }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--color-border-secondary)', backgroundColor: '#0a0a0a', maxWidth: 560 }}>
              {/* Video area */}
              <div style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }} />
                <button style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative', zIndex: 1, backdropFilter: 'blur(8px)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M6 4.5l12 5.5-12 5.5V4.5z" /></svg>
                </button>
              </div>
              {/* Controls */}
              <div style={{ padding: '10px 16px 12px', backgroundColor: '#111' }}>
                <div style={{ height: 4, backgroundColor: '#333', borderRadius: 2, marginBottom: 10, cursor: 'pointer', position: 'relative' }}>
                  <div style={{ width: '35%', height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: 2 }} />
                  <div style={{ position: 'absolute', left: '35%', top: '50%', transform: 'translate(-50%, -50%)', width: 12, height: 12, borderRadius: '50%', backgroundColor: 'white', boxShadow: '0 0 0 2px var(--color-primary)' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 5v8M5 5v8M5 9h8" strokeLinecap="round" /></svg>
                    </button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l4-4v3h8v2H7v3L3 9z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l6 5-6 5V4z" strokeLinecap="round" strokeLinejoin="round" /><line x1="14" y1="4" x2="14" y2="14" strokeLinecap="round" /></svg>
                    </button>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>2:14 / 6:23</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 5h3l3-3v12l-3-3H2V5z" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 5a3 3 0 0 1 0 6" strokeLinecap="round" /></svg>
                    </button>
                    <div style={{ width: 60, height: 3, backgroundColor: '#444', borderRadius: 2, cursor: 'pointer', position: 'relative' }}>
                      <div style={{ width: '70%', height: '100%', backgroundColor: 'white', borderRadius: 2 }} />
                    </div>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z" strokeLinejoin="round" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Audio Player" description="Waveform visualization with transport controls">
          <div style={{ padding: 24 }}>
            <div style={{ border: '1px solid var(--color-border-secondary)', borderRadius: 12, padding: '16px 20px', backgroundColor: 'var(--color-bg-primary)', maxWidth: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-fg-primary)' }}>Q1 All-Hands Recording</div>
                  <div style={{ fontSize: 11, color: 'var(--color-fg-tertiary)' }}>March 15, 2025 · 42:18</div>
                </div>
                <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 6, backgroundColor: 'var(--color-info-subtle)', color: 'var(--color-info)', fontWeight: 600 }}>MP3</span>
              </div>
              {/* Waveform */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 1.5, height: 40, marginBottom: 8 }}>
                {Array.from({ length: 80 }).map((_, i) => {
                  const h = 20 + Math.abs(Math.sin(i * 0.4) * 18 + Math.sin(i * 0.7) * 8)
                  const played = i < 28
                  return <div key={i} style={{ width: 3, height: h, borderRadius: 2, backgroundColor: played ? 'var(--color-primary)' : 'var(--color-bg-tertiary)', flexShrink: 0 }} />
                })}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>14:22</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-secondary)', display: 'flex' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8l4-4v3h8v2H6v3L2 8z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'var(--color-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><path d="M4 2.5L11 7 4 11.5V2.5z" /></svg>
                  </button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-secondary)', display: 'flex' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 8l-4 4V9H2V7h8V4l4 4z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
                <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>42:18</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="PDF Viewer" description="Document page view placeholder">
          <ComponentRow label="Page view" noBorder>
            <div style={{ border: '1px solid var(--color-border-secondary)', borderRadius: 8, overflow: 'hidden', width: 280, boxShadow: 'var(--shadow-md)' }}>
              {/* PDF toolbar */}
              <div style={{ padding: '8px 12px', backgroundColor: 'var(--color-bg-tertiary)', borderBottom: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: 'var(--color-fg-secondary)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 140 }}>Q1-Report-2025.pdf</span>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <span style={{ fontSize: 10, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>1 / 24</span>
                </div>
              </div>
              {/* Page */}
              <div style={{ height: 200, backgroundColor: 'white', padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ height: 12, backgroundColor: '#e5e7eb', borderRadius: 2, width: '60%' }} />
                <div style={{ height: 8, backgroundColor: '#f3f4f6', borderRadius: 2 }} />
                <div style={{ height: 8, backgroundColor: '#f3f4f6', borderRadius: 2, width: '85%' }} />
                <div style={{ height: 8, backgroundColor: '#f3f4f6', borderRadius: 2, width: '70%' }} />
                <div style={{ height: 40, backgroundColor: '#f0f2f5', borderRadius: 4, marginTop: 4 }} />
                <div style={{ height: 8, backgroundColor: '#f3f4f6', borderRadius: 2 }} />
                <div style={{ height: 8, backgroundColor: '#f3f4f6', borderRadius: 2, width: '90%' }} />
              </div>
            </div>
          </ComponentRow>
        </Section>

      </div>
    </div>
  )
}
