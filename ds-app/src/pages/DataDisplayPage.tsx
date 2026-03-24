import { useState } from 'react'
import { ChevronUp, ChevronDown, XClose, CheckCircle, AlertCircle, InfoCircle } from '@untitledui/icons'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'
import CodeBlock from '../components/layout/CodeBlock'

const USERS = [
  { name: 'Alice Johnson', role: 'Admin', status: 'active', date: 'Mar 12, 2025' },
  { name: 'Bob Williams', role: 'Editor', status: 'active', date: 'Feb 28, 2025' },
  { name: 'Carol Smith', role: 'Viewer', status: 'inactive', date: 'Jan 15, 2025' },
  { name: 'David Lee', role: 'Editor', status: 'pending', date: 'Mar 18, 2025' },
  { name: 'Eva Martinez', role: 'Admin', status: 'active', date: 'Dec 3, 2024' },
]

const statusStyle: Record<string, React.CSSProperties> = {
  active: { background: 'var(--color-success-subtle)', color: 'var(--color-success)', border: '1px solid var(--color-success)' },
  inactive: { background: 'var(--color-bg-tertiary)', color: 'var(--color-fg-tertiary)', border: '1px solid var(--color-border-primary)' },
  pending: { background: 'var(--color-warning-subtle)', color: 'var(--color-warning)', border: '1px solid var(--color-warning)' },
}

function Avatar({ name, size, status }: { name: string; size: number; status?: 'green' | 'yellow' | 'red' | 'none' }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const colors = ['#6459fe', '#8282ff', '#17b26a', '#4285f4', '#e94235']
  const bg = colors[name.charCodeAt(0) % colors.length]
  const dotColor: Record<string, string> = { green: '#34a853', yellow: '#ffba00', red: '#e94235', none: 'transparent' }

  return (
    <div style={{ position: 'relative', display: 'inline-block', flexShrink: 0 }}>
      <div style={{ width: size, height: size, borderRadius: '50%', backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: size * 0.36, fontWeight: 700, flexShrink: 0 }}>
        {initials}
      </div>
      {status && status !== 'none' && (
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: size * 0.28, height: size * 0.28, borderRadius: '50%', backgroundColor: dotColor[status], border: '2px solid var(--color-bg-primary)' }} />
      )}
    </div>
  )
}

export default function DataDisplayPage() {
  const [sortCol, setSortCol] = useState<string | null>(null)
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortCol(col); setSortDir('asc') }
  }

  return (
    <div>
      <PageHeader section="Chapter 06" title="Data Display" description="Avatars, badges, tags, tables, cards, stats, accordions, timelines, dividers, and code blocks." />
      <div style={{ padding: '40px 56px', maxWidth: 1000 }}>

        <Section title="Avatar" description="Initials fallback with size variants and status indicators">
          <ComponentRow label="Sizes">
            {[24, 32, 40, 48, 64].map(s => (
              <Avatar key={s} name="Alice Johnson" size={s} />
            ))}
          </ComponentRow>
          <ComponentRow label="With status dot" noBorder>
            <Avatar name="Alice Johnson" size={40} status="green" />
            <Avatar name="Bob Williams" size={40} status="yellow" />
            <Avatar name="Carol Smith" size={40} status="red" />
            <Avatar name="David Lee" size={40} status="none" />
          </ComponentRow>
        </Section>

        <Section title="Badge & Chip" description="Status badges, count badges, filter chips">
          <ComponentRow label="Status badges">
            {(['success', 'warning', 'error', 'info'] as const).map(v => {
              const cfg = {
                success: { bg: 'var(--color-success-subtle)', color: 'var(--color-success)', dot: 'var(--color-success)', label: 'Active' },
                warning: { bg: 'var(--color-warning-subtle)', color: 'var(--color-warning)', dot: 'var(--color-warning)', label: 'Pending' },
                error: { bg: 'var(--color-destructive-subtle)', color: 'var(--color-destructive)', dot: 'var(--color-destructive)', label: 'Error' },
                info: { bg: 'var(--color-info-subtle)', color: 'var(--color-info)', dot: 'var(--color-info)', label: 'New' },
              }[v]
              return (
                <div key={v} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 20, backgroundColor: cfg.bg, border: `1px solid ${cfg.color}20` }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: cfg.dot }} />
                  <span style={{ fontSize: 12, fontWeight: 500, color: cfg.color }}>{cfg.label}</span>
                </div>
              )
            })}
          </ComponentRow>
          <ComponentRow label="Count badges">
            {[0, 5, 12, 99, 100].map(n => (
              <div key={n} style={{ minWidth: 20, height: 20, padding: '0 6px', borderRadius: 10, backgroundColor: 'var(--color-primary)', color: 'white', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {n > 99 ? '99+' : n}
              </div>
            ))}
          </ComponentRow>
          <ComponentRow label="Filter chips" noBorder>
            {['React', 'TypeScript', 'Design System', 'API'].map((tag, i) => (
              <div key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px 4px 12px', borderRadius: 20, backgroundColor: i === 0 ? 'var(--color-primary-subtle)' : 'var(--color-bg-tertiary)', border: `1px solid ${i === 0 ? 'var(--color-primary)' : 'var(--color-border-primary)'}`, cursor: 'pointer' }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: i === 0 ? 'var(--color-primary)' : 'var(--color-fg-secondary)' }}>{tag}</span>
                <XClose style={{ width: 12, height: 12, color: i === 0 ? 'var(--color-primary)' : 'var(--color-fg-tertiary)' }} strokeWidth={2.5} />
              </div>
            ))}
          </ComponentRow>
        </Section>

        <Section title="Tag" description="Colored label tags">
          <ComponentRow label="Tag variants" noBorder>
            {[
              { label: 'Frontend', bg: '#e8f0fe', color: '#4285f4' },
              { label: 'Backend', bg: '#e8f5e9', color: '#34a853' },
              { label: 'Design', bg: 'rgba(100,89,254,0.08)', color: '#6459fe' },
              { label: 'Urgent', bg: '#fdecea', color: '#e94235' },
              { label: 'Draft', bg: '#fff8e1', color: '#f59e0b' },
            ].map(t => (
              <div key={t.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 12px', borderRadius: 9999, backgroundColor: t.bg }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: t.color }}>{t.label}</span>
              </div>
            ))}
          </ComponentRow>
        </Section>

        <Section title="Table" description="Sortable data table with status column">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border-secondary)' }}>
                {['Name', 'Role', 'Status', 'Date'].map(col => (
                  <th key={col} onClick={() => toggleSort(col)} style={{ textAlign: 'left', padding: '10px 16px', fontSize: 12, fontWeight: 600, color: 'var(--color-fg-tertiary)', cursor: 'pointer', userSelect: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      {col}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <ChevronUp style={{ width: 10, height: 10, opacity: sortCol === col && sortDir === 'asc' ? 1 : 0.3 }} strokeWidth={2.5} />
                        <ChevronDown style={{ width: 10, height: 10, opacity: sortCol === col && sortDir === 'desc' ? 1 : 0.3 }} strokeWidth={2.5} />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {USERS.map((user, i) => (
                <tr key={user.name} style={{ borderBottom: i < USERS.length - 1 ? '1px solid var(--color-border-secondary)' : 'none' }}>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Avatar name={user.name} size={32} />
                      <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-fg-primary)' }}>{user.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--color-fg-secondary)' }}>{user.role}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 20, ...statusStyle[user.status] }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'currentColor' }} />
                      <span style={{ fontSize: 12, fontWeight: 500, textTransform: 'capitalize' }}>{user.status}</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--color-fg-tertiary)' }}>{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Cards" description="Default, interactive, and selected card variants">
          <ComponentRow label="Card variants" noBorder>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { id: 0, title: 'Default Card', desc: 'Standard card with border and shadow.' },
                { id: 1, title: 'Interactive Card', desc: 'Hover to see elevated state.' },
                { id: 2, title: 'Selected Card', desc: 'Click to toggle selected state.' },
              ].map(card => (
                <div key={card.id} onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)} style={{
                  padding: 16, borderRadius: 12, border: `1px solid ${selectedCard === card.id ? 'var(--color-primary)' : 'var(--color-border-secondary)'}`,
                  backgroundColor: selectedCard === card.id ? 'var(--color-primary-subtle)' : 'var(--color-bg-primary)',
                  boxShadow: 'var(--shadow-xs)', cursor: 'pointer', width: 180, transition: 'all 150ms',
                }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-fg-primary)', marginBottom: 4 }}>{card.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-fg-tertiary)' }}>{card.desc}</div>
                </div>
              ))}
            </div>
          </ComponentRow>
        </Section>

        <Section title="Stat / Metric Card" description="KPI cards with delta indicators">
          <ComponentRow label="Metric cards" noBorder>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { label: 'Total Users', value: '24,891', delta: '+12.5%', up: true },
                { label: 'Revenue', value: '$48,250', delta: '+8.2%', up: true },
                { label: 'Churn Rate', value: '3.4%', delta: '-0.8%', up: false },
                { label: 'Avg Session', value: '4m 32s', delta: '+1m 12s', up: true },
              ].map(stat => (
                <div key={stat.label} style={{ padding: '16px 20px', borderRadius: 12, border: '1px solid var(--color-border-secondary)', backgroundColor: 'var(--color-bg-primary)', boxShadow: 'var(--shadow-xs)', minWidth: 160 }}>
                  <div style={{ fontSize: 12, color: 'var(--color-fg-tertiary)', marginBottom: 8 }}>{stat.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-fg-primary)', marginBottom: 6 }}>{stat.value}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {stat.up ? <ChevronUp style={{ width: 14, height: 14, color: 'var(--color-success)' }} strokeWidth={2.5} /> : <ChevronDown style={{ width: 14, height: 14, color: 'var(--color-destructive)' }} strokeWidth={2.5} />}
                    <span style={{ fontSize: 12, fontWeight: 600, color: stat.up ? 'var(--color-success)' : 'var(--color-destructive)' }}>{stat.delta}</span>
                    <span style={{ fontSize: 12, color: 'var(--color-fg-quaternary)' }}>vs last mo</span>
                  </div>
                </div>
              ))}
            </div>
          </ComponentRow>
        </Section>

        <Section title="Accordion" description="Collapsible content panels">
          <div>
            {[
              { title: 'What is a design token?', content: 'Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hardcoded values in order to maintain a scalable and consistent visual system.' },
              { title: 'How do I use CSS custom properties?', content: 'CSS custom properties (variables) allow you to store specific values for reuse throughout a document. Use them with the var() function: color: var(--color-primary).' },
              { title: 'What icons are included?', content: 'We use the Untitled UI icon set — a comprehensive library of 1,100+ consistent stroke-based icons optimized for digital interfaces.' },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: i < 2 ? '1px solid var(--color-border-secondary)' : 'none' }}>
                <button onClick={() => setOpenAccordion(openAccordion === i ? null : i)} style={{ width: '100%', padding: '16px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', fontFamily: 'inherit' }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-fg-primary)' }}>{item.title}</span>
                  {openAccordion === i ? <ChevronUp style={{ width: 16, height: 16, color: 'var(--color-fg-tertiary)', flexShrink: 0 }} strokeWidth={2} /> : <ChevronDown style={{ width: 16, height: 16, color: 'var(--color-fg-tertiary)', flexShrink: 0 }} strokeWidth={2} />}
                </button>
                {openAccordion === i && (
                  <div style={{ padding: '0 24px 16px', fontSize: 13, color: 'var(--color-fg-secondary)', lineHeight: '20px' }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Timeline" description="Vertical event history">
          <div style={{ padding: '24px 24px 8px' }}>
            {[
              { icon: CheckCircle, color: 'var(--color-success)', title: 'Document published', time: '2 hours ago', desc: 'Version 2.4.1 published to production.' },
              { icon: InfoCircle, color: 'var(--color-info)', title: 'Review completed', time: 'Yesterday', desc: 'All 3 reviewers approved the changes.' },
              { icon: AlertCircle, color: 'var(--color-warning)', title: 'Build warning', time: 'Mar 10', desc: 'Bundle size exceeded threshold by 2.4KB.' },
            ].map((event, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < 2 ? 20 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <event.icon style={{ width: 20, height: 20, color: event.color, flexShrink: 0 }} strokeWidth={2} />
                  {i < 2 && <div style={{ width: 2, flex: 1, backgroundColor: 'var(--color-border-secondary)', marginTop: 6 }} />}
                </div>
                <div style={{ paddingBottom: i < 2 ? 16 : 0 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-fg-primary)' }}>{event.title}</span>
                    <span style={{ fontSize: 11, color: 'var(--color-fg-quaternary)' }}>{event.time}</span>
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--color-fg-secondary)' }}>{event.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Divider" description="Horizontal separator with optional label">
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ height: 1, backgroundColor: 'var(--color-border-secondary)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1, height: 1, backgroundColor: 'var(--color-border-secondary)' }} />
              <span style={{ fontSize: 12, color: 'var(--color-fg-quaternary)', fontWeight: 500, whiteSpace: 'nowrap' }}>OR CONTINUE WITH</span>
              <div style={{ flex: 1, height: 1, backgroundColor: 'var(--color-border-secondary)' }} />
            </div>
          </div>
        </Section>

        <Section title="Code Block" description="Syntax-highlighted code with copy action">
          <CodeBlock language="tsx" code={`import { Button } from '@/components/ui'

export default function Example() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  )
}`} />
        </Section>

      </div>
    </div>
  )
}
