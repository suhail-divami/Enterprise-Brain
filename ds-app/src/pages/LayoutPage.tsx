import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

const BREAKPOINTS = [
  { name: 'sm', value: '640px', cols: 'max-w-sm' },
  { name: 'md', value: '768px', cols: 'max-w-md' },
  { name: 'lg', value: '1024px', cols: 'max-w-lg' },
  { name: 'xl', value: '1280px', cols: 'max-w-xl' },
  { name: '2xl', value: '1536px', cols: 'max-w-2xl' },
]

const SPACING_VIS = [
  { name: '1', px: 4 }, { name: '2', px: 8 }, { name: '3', px: 12 },
  { name: '4', px: 16 }, { name: '5', px: 20 }, { name: '6', px: 24 },
  { name: '8', px: 32 }, { name: '10', px: 40 }, { name: '12', px: 48 },
  { name: '16', px: 64 }, { name: '20', px: 80 },
]

export default function LayoutPage() {
  return (
    <div>
      <PageHeader section="Chapter 08" title="Layout System" description="Grid, spacing, breakpoints, page layout patterns, and split pane demos." />
      <div style={{ padding: '40px 56px', maxWidth: 1000 }}>

        <Section title="12-Column Grid" description="Visual representation of the 12-column layout grid">
          <div style={{ padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 8 }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{ backgroundColor: 'var(--color-primary)', opacity: 0.15 + (i % 4) * 0.05, borderRadius: 4, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--color-primary)' }}>{i + 1}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: '12 cols', span: 12, note: 'Full width' },
                { label: '8 cols', span: 8, note: '66%' },
                { label: '6 cols', span: 6, note: '50%' },
                { label: '4 cols', span: 4, note: '33%' },
                { label: '3 cols', span: 3, note: '25%' },
              ].map(({ label, span, note }) => (
                <div key={label} style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 8 }}>
                  <div style={{ gridColumn: `span ${span}`, backgroundColor: 'var(--color-primary-subtle)', border: '1px solid var(--color-primary)', borderRadius: 6, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-primary)' }}>{label}</span>
                    <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)' }}>{note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Page Layout Patterns" description="Common page structure compositions">
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Sidebar + Main */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sidebar + Main</div>
              <div style={{ display: 'flex', gap: 6, height: 80 }}>
                <div style={{ width: 60, height: '100%', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: 6, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 9, color: 'var(--color-fg-tertiary)', writingMode: 'vertical-rl', fontWeight: 600 }}>SIDEBAR</span>
                </div>
                <div style={{ flex: 1, backgroundColor: 'var(--color-bg-secondary)', borderRadius: 6, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)', fontWeight: 600 }}>MAIN CONTENT</span>
                </div>
              </div>
            </div>
            {/* Sidebar + Main + Right Panel */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sidebar + Main + Right Panel</div>
              <div style={{ display: 'flex', gap: 6, height: 80 }}>
                <div style={{ width: 60, height: '100%', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: 6, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 9, color: 'var(--color-fg-tertiary)', writingMode: 'vertical-rl', fontWeight: 600 }}>NAV</span>
                </div>
                <div style={{ flex: 1, backgroundColor: 'var(--color-bg-secondary)', borderRadius: 6, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)', fontWeight: 600 }}>CONTENT</span>
                </div>
                <div style={{ width: 80, height: '100%', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: 6, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 9, color: 'var(--color-fg-tertiary)', writingMode: 'vertical-rl', fontWeight: 600 }}>DETAILS</span>
                </div>
              </div>
            </div>
            {/* Top header + main */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Top Header + Content</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, height: 80 }}>
                <div style={{ height: 24, backgroundColor: 'var(--color-bg-tertiary)', borderRadius: 6, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 9, color: 'var(--color-fg-tertiary)', fontWeight: 600 }}>HEADER</span>
                </div>
                <div style={{ flex: 1, backgroundColor: 'var(--color-bg-secondary)', borderRadius: 6, border: '1px solid var(--color-border-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)', fontWeight: 600 }}>MAIN CONTENT AREA</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Spacing Scale Visualization" description="4px base unit — visual bar chart">
          <div style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 100 }}>
              {SPACING_VIS.map(s => (
                <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1 }}>
                  <div style={{ width: '100%', backgroundColor: 'var(--color-primary)', borderRadius: '3px 3px 0 0', height: Math.min(s.px * 1.2, 80), opacity: 0.7 + (s.px / 200) * 0.3 }} />
                  <span style={{ fontSize: 9, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>{s.px}</span>
                  <span style={{ fontSize: 8, color: 'var(--color-fg-quaternary)' }}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Breakpoints" description="Responsive breakpoint reference">
          <div style={{ padding: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {BREAKPOINTS.map(bp => (
                <div key={bp.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'monospace', width: 30 }}>{bp.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace', width: 60 }}>{bp.value}</span>
                  <div style={{ flex: 1, height: 16, borderRadius: 4, backgroundColor: 'var(--color-primary)', opacity: 0.15 + (BREAKPOINTS.findIndex(b => b.name === bp.name) * 0.15), maxWidth: parseInt(bp.value) / 8 }} />
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Split Pane" description="Resizable split panel layout demo">
          <ComponentRow label="Horizontal split" noBorder>
            <div style={{ display: 'flex', width: '100%', height: 120, border: '1px solid var(--color-border-secondary)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ flex: '0 0 40%', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '3px solid var(--color-primary)', cursor: 'col-resize' }}>
                <span style={{ fontSize: 12, color: 'var(--color-fg-tertiary)', fontWeight: 600 }}>Panel A (40%)</span>
              </div>
              <div style={{ flex: 1, backgroundColor: 'var(--color-bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 12, color: 'var(--color-fg-tertiary)', fontWeight: 600 }}>Panel B (60%)</span>
              </div>
            </div>
          </ComponentRow>
        </Section>

      </div>
    </div>
  )
}
