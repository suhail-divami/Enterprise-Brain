import {
  Home01, SearchMd, Settings01, XClose, ChevronDown, ChevronRight, ChevronUp,
  ArrowLeft, ArrowRight, Moon01, SunSetting01, Copy01, Check, Eye, EyeOff,
  Send01, Paperclip, Microphone01, RefreshCw01, ThumbsUp, ThumbsDown, User01,
  AlertCircle, CheckCircle, InfoCircle, AlertTriangle, Plus, Minus, UploadCloud01,
  File05, Image01, Grid01, Database01, BarChart01, Tool01, MessageSquare02, Type01, LayoutAlt04,
  Star01, Menu01, Users01,
} from '@untitledui/icons'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

const COLORS = [
  { label: 'Primary', cssVar: '--color-primary', hex: '#6459FE' },
  { label: 'Primary Hover', cssVar: '--color-primary-hover', hex: '#5149DE' },
  { label: 'Primary Active', cssVar: '--color-primary-active', hex: '#3C2CB8' },
  { label: 'Sidebar BG', cssVar: '--color-sidebar-bg', hex: '#f0f0ee' },
  { label: 'Destructive', cssVar: '--color-destructive', hex: '#E94235' },
  { label: 'Warning', cssVar: '--color-warning', hex: '#FFBA00' },
  { label: 'Success', cssVar: '--color-success', hex: '#34A853' },
  { label: 'Info', cssVar: '--color-info', hex: '#4285F4' },
]

const TYPE_SCALE = [
  { name: 'Display', size: '64px', weight: '400', sample: 'Hello Suhail!' },
  { name: 'H1', size: '30px', weight: '600', sample: 'Enterprise Brain Design System' },
  { name: 'H2', size: '24px', weight: '600', sample: 'Component Library & Tokens' },
  { name: 'H3', size: '18px', weight: '600', sample: 'Section Title Heading' },
  { name: 'Body', size: '14px', weight: '400', sample: 'The quick brown fox jumps over the lazy dog. Satoshi Variable is beautiful.' },
  { name: 'Caption', size: '12px', weight: '400', sample: 'Helper text, labels, and captions — always readable at any size.' },
]

const SPACING = [
  { name: '1', px: '4px' }, { name: '2', px: '8px' }, { name: '3', px: '12px' },
  { name: '4', px: '16px' }, { name: '5', px: '20px' }, { name: '6', px: '24px' },
  { name: '8', px: '32px' }, { name: '10', px: '40px' }, { name: '12', px: '48px' },
  { name: '16', px: '64px' },
]

const RADII = [
  { name: 'none', value: '0px', label: 'none' },
  { name: 'sm', value: '6px', label: '6px' },
  { name: 'md', value: '8px', label: '8px (logo)' },
  { name: 'lg', value: '12px', label: '12px (cards)' },
  { name: 'xl', value: '16px', label: '16px (cards)' },
  { name: 'input', value: '32px', label: '32px (input)' },
  { name: 'pill', value: '9999px', label: 'pill (buttons)' },
]

const SHADOWS = [
  { name: 'xs', var: '--shadow-xs' }, { name: 'sm', var: '--shadow-sm' },
  { name: 'md', var: '--shadow-md' }, { name: 'lg', var: '--shadow-lg' },
]

const ICONS = [
  { name: 'Home01', Icon: Home01 }, { name: 'SearchMd', Icon: SearchMd },
  { name: 'Settings01', Icon: Settings01 }, { name: 'XClose', Icon: XClose },
  { name: 'ChevronDown', Icon: ChevronDown }, { name: 'ChevronRight', Icon: ChevronRight },
  { name: 'ChevronUp', Icon: ChevronUp }, { name: 'ArrowLeft', Icon: ArrowLeft },
  { name: 'ArrowRight', Icon: ArrowRight }, { name: 'Moon01', Icon: Moon01 },
  { name: 'SunSetting01', Icon: SunSetting01 }, { name: 'Menu01', Icon: Menu01 },
  { name: 'Copy01', Icon: Copy01 }, { name: 'Check', Icon: Check },
  { name: 'Eye', Icon: Eye }, { name: 'EyeOff', Icon: EyeOff },
  { name: 'Send01', Icon: Send01 }, { name: 'Paperclip', Icon: Paperclip },
  { name: 'Microphone01', Icon: Microphone01 }, { name: 'RefreshCw01', Icon: RefreshCw01 },
  { name: 'ThumbsUp', Icon: ThumbsUp }, { name: 'ThumbsDown', Icon: ThumbsDown },
  { name: 'User01', Icon: User01 }, { name: 'AlertCircle', Icon: AlertCircle },
  { name: 'CheckCircle', Icon: CheckCircle }, { name: 'InfoCircle', Icon: InfoCircle },
  { name: 'AlertTriangle', Icon: AlertTriangle }, { name: 'Plus', Icon: Plus },
  { name: 'Minus', Icon: Minus }, { name: 'UploadCloud01', Icon: UploadCloud01 },
  { name: 'File05', Icon: File05 }, { name: 'Image01', Icon: Image01 },
  { name: 'Grid01', Icon: Grid01 }, { name: 'Database01', Icon: Database01 },
  { name: 'BarChart01', Icon: BarChart01 }, { name: 'Tool01', Icon: Tool01 },
  { name: 'MessageSquare02', Icon: MessageSquare02 }, { name: 'Type01', Icon: Type01 },
  { name: 'LayoutAlt04', Icon: LayoutAlt04 }, { name: 'Star01', Icon: Star01 },
  { name: 'Users01', Icon: Users01 },
]

function ColorSwatch({ label, cssVar, hex }: { label: string; cssVar: string; hex: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{
        width: 56, height: 56, borderRadius: 9999,
        backgroundColor: `var(${cssVar})`,
        border: '1px solid rgba(10,18,23,0.08)',
        flexShrink: 0,
      }} />
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-fg-primary)', marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 11, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>{hex}</div>
        <div style={{ fontSize: 10, color: 'var(--color-fg-disabled)', fontFamily: 'monospace', marginTop: 2 }}>{cssVar}</div>
      </div>
    </div>
  )
}

export default function FoundationsPage() {
  return (
    <div>
      <PageHeader
        section="Chapter 01"
        title="Foundations"
        description="Core design tokens — color, typography, spacing, radius, shadows, and icons — forming the visual language of Enterprise Brain."
      />
      <div style={{ padding: '40px 56px', maxWidth: 1100 }}>

        {/* Color Tokens */}
        <Section title="Color Tokens" description="Brand palette, semantic colors, and surface tokens">
          <div style={{ padding: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Brand & Semantic</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px,1fr))', gap: 20, marginBottom: 36 }}>
              {COLORS.map(c => <ColorSwatch key={c.cssVar} label={c.label} cssVar={c.cssVar} hex={c.hex} />)}
            </div>

            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Surface Backgrounds</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
              {[
                { label: 'BG Primary', cssVar: '--color-bg-primary', hex: '#FFFFFF' },
                { label: 'BG Secondary', cssVar: '--color-bg-secondary', hex: '#F9FAFB' },
                { label: 'BG Tertiary', cssVar: '--color-bg-tertiary', hex: '#F3F4F6' },
                { label: 'BG Inset', cssVar: '--color-bg-inset', hex: 'rgba(10,18,23,0.05)' },
                { label: 'Sidebar BG', cssVar: '--color-sidebar-bg', hex: '#F0F0EE' },
              ].map(c => (
                <div key={c.cssVar} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 12, border: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-bg-secondary)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: `var(${c.cssVar})`, border: '1px solid rgba(10,18,23,0.08)' }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-fg-primary)' }}>{c.label}</div>
                    <div style={{ fontSize: 11, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Text Colors</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { label: 'FG Primary', value: 'rgba(10,18,23,0.9)' },
                { label: 'FG Secondary', value: 'rgba(10,18,23,0.6)' },
                { label: 'FG Tertiary', value: 'rgba(10,18,23,0.4)' },
                { label: 'FG Disabled', value: 'rgba(10,18,23,0.25)' },
              ].map(c => (
                <div key={c.label} style={{ padding: '10px 16px', borderRadius: 12, border: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-bg-secondary)' }}>
                  <div style={{ fontSize: 16, fontWeight: 500, color: c.value, marginBottom: 4 }}>Aa</div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--color-fg-primary)' }}>{c.label}</div>
                  <div style={{ fontSize: 10, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography — Satoshi Variable" description="Font family: 'Satoshi', 'Inter', sans-serif">
          {TYPE_SCALE.map((t, i) => (
            <ComponentRow key={t.name} label={`${t.name} · ${t.size} / ${t.weight}`} noBorder={i === TYPE_SCALE.length - 1}>
              <span style={{
                fontSize: t.size,
                fontWeight: t.weight as React.CSSProperties['fontWeight'],
                color: 'var(--color-fg-primary)',
                lineHeight: 1.2,
                fontFamily: "'Satoshi', 'Inter', sans-serif",
                letterSpacing: t.size === '64px' ? '-1px' : 'normal',
              }}>{t.sample}</span>
            </ComponentRow>
          ))}
        </Section>

        {/* Spacing */}
        <Section title="Spacing Scale" description="4px base unit — use var(--spacing-N) tokens">
          <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SPACING.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <span style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--color-fg-tertiary)', width: 56, flexShrink: 0 }}>--sp-{s.name}</span>
                <div style={{ width: s.px, height: 20, backgroundColor: 'var(--color-primary)', borderRadius: 4, minWidth: 4, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: 'var(--color-fg-secondary)', fontFamily: 'monospace' }}>{s.px}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Border Radius */}
        <Section title="Border Radius" description="Buttons use pill (9999px) · Inputs use 32px · Cards use 16px">
          <div style={{ padding: 28, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {RADII.map(r => (
              <div key={r.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 64, height: 64,
                  backgroundColor: 'var(--color-primary-subtle)',
                  border: '2px solid var(--color-primary)',
                  borderRadius: r.value,
                }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-fg-primary)' }}>{r.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--color-fg-tertiary)', fontFamily: 'monospace' }}>{r.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Shadows */}
        <Section title="Shadows & Elevation" description="Box shadow elevation levels">
          <div style={{ padding: 28, display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            {SHADOWS.map(s => (
              <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 100, height: 64,
                  backgroundColor: 'var(--color-bg-primary)',
                  borderRadius: 12,
                  boxShadow: `var(${s.var})`,
                  border: '1px solid var(--color-border-subtle)',
                }} />
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-fg-primary)' }}>shadow-{s.name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Icons */}
        <Section title="Icons — Untitled UI" description="Stroke-based icon set at 20×20px, strokeWidth=2">
          <div style={{ padding: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px,1fr))', gap: 4 }}>
            {ICONS.map(({ name, Icon }) => (
              <div key={name} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                padding: '12px 8px', borderRadius: 10,
                backgroundColor: 'var(--color-bg-secondary)',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 9999,
                  backgroundColor: 'var(--color-bg-tertiary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ width: 18, height: 18, color: 'var(--color-fg-secondary)' }} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 9, color: 'var(--color-fg-tertiary)', textAlign: 'center', lineHeight: '13px', wordBreak: 'break-all' }}>{name}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}
