import { useState } from 'react'
import { Plus, Send01, ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from '@untitledui/icons'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

// ALL buttons are pill-shaped (border-radius: 9999px) per the Figma design
const btnBase: React.CSSProperties = {
  height: 40, padding: '0 20px', borderRadius: 9999, fontSize: 14, fontWeight: 500,
  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
  transition: 'all 150ms', border: 'none', fontFamily: "'Satoshi', 'Inter', sans-serif",
}

function Spinner() {
  return (
    <svg className="spinner" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function ButtonsPage() {
  const [loading, setLoading] = useState(false)

  const handleLoad = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div>
      <PageHeader section="Chapter 03" title="Buttons" description="All buttons use pill shape (border-radius: 9999px) per the Figma design. Primary dark = #0a1217, Primary brand = #6459fe." />
      <div style={{ padding: '40px 56px', maxWidth: 1000 }}>

        <Section title="Primary — Dark (Figma style)" description="bg: #0a1217, text white, pill shaped">
          <ComponentRow label="Default">
            <button style={{ ...btnBase, background: '#0a1217', color: 'white' }}>Primary Button</button>
          </ComponentRow>
          <ComponentRow label="Brand purple">
            <button style={{ ...btnBase, background: 'var(--color-primary)', color: 'white' }}>Brand Primary</button>
          </ComponentRow>
          <ComponentRow label="Hover">
            <button style={{ ...btnBase, background: 'var(--color-primary-hover)', color: 'white' }}>Hover State</button>
          </ComponentRow>
          <ComponentRow label="Loading">
            <button onClick={handleLoad} style={{ ...btnBase, background: '#0a1217', color: 'white' }}>
              {loading ? <><Spinner /> Saving...</> : 'Click to Load'}
            </button>
          </ComponentRow>
          <ComponentRow label="Disabled" noBorder>
            <button style={{ ...btnBase, background: '#0a1217', color: 'white', opacity: 0.3, cursor: 'not-allowed' }} disabled>Disabled</button>
          </ComponentRow>
        </Section>

        <Section title="Secondary (Outlined)" description="Pill outlined, primary color border">
          <ComponentRow label="Default">
            <button style={{ ...btnBase, background: 'transparent', color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)' }}>Secondary</button>
          </ComponentRow>
          <ComponentRow label="Hover">
            <button style={{ ...btnBase, background: 'var(--color-primary-subtle)', color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)' }}>Secondary Hover</button>
          </ComponentRow>
          <ComponentRow label="Disabled" noBorder>
            <button style={{ ...btnBase, background: 'transparent', color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)', opacity: 0.4, cursor: 'not-allowed' }} disabled>Disabled</button>
          </ComponentRow>
        </Section>

        <Section title="Ghost" description="Transparent background, pill shaped">
          <ComponentRow label="Default">
            <button style={{ ...btnBase, background: 'transparent', color: 'var(--color-fg-secondary)' }}>Ghost Button</button>
          </ComponentRow>
          <ComponentRow label="Hover">
            <button style={{ ...btnBase, background: 'rgba(10,18,23,0.05)', color: 'var(--color-fg-primary)' }}>Ghost Hover</button>
          </ComponentRow>
          <ComponentRow label="Disabled" noBorder>
            <button style={{ ...btnBase, background: 'transparent', color: 'var(--color-fg-disabled)', cursor: 'not-allowed' }} disabled>Disabled</button>
          </ComponentRow>
        </Section>

        <Section title="Destructive" description="Dangerous or irreversible actions">
          <ComponentRow label="Filled">
            <button style={{ ...btnBase, background: 'var(--color-destructive)', color: 'white' }}>Delete Account</button>
          </ComponentRow>
          <ComponentRow label="Outlined" noBorder>
            <button style={{ ...btnBase, background: 'transparent', color: 'var(--color-destructive)', border: '1.5px solid var(--color-destructive)' }}>Remove</button>
          </ComponentRow>
        </Section>

        <Section title="Sizes" description="sm (32px) · md (40px) · lg (48px) — all pill">
          <ComponentRow label="sm / md / lg" noBorder>
            <button style={{ ...btnBase, height: 32, padding: '0 14px', fontSize: 13, background: '#0a1217', color: 'white' }}>Small</button>
            <button style={{ ...btnBase, background: '#0a1217', color: 'white' }}>Medium</button>
            <button style={{ ...btnBase, height: 48, padding: '0 24px', fontSize: 15, background: '#0a1217', color: 'white' }}>Large</button>
          </ComponentRow>
        </Section>

        <Section title="Icon + Label" description="Pills with icon on left or right">
          <ComponentRow label="Icon left">
            <button style={{ ...btnBase, background: '#0a1217', color: 'white' }}>
              <Plus style={{ width: 16, height: 16 }} strokeWidth={2} /> New Document
            </button>
            <button style={{ ...btnBase, background: 'transparent', color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)' }}>
              <CheckCircle style={{ width: 16, height: 16 }} strokeWidth={2} /> Approve
            </button>
          </ComponentRow>
          <ComponentRow label="Icon right" noBorder>
            <button style={{ ...btnBase, background: '#0a1217', color: 'white' }}>
              Continue <ArrowRight style={{ width: 16, height: 16 }} strokeWidth={2} />
            </button>
            <button style={{ ...btnBase, background: 'transparent', color: 'var(--color-fg-secondary)' }}>
              <ArrowLeft style={{ width: 16, height: 16 }} strokeWidth={2} /> Go back
            </button>
          </ComponentRow>
        </Section>

        <Section title="Icon Only (Circle)" description="Equal width/height = perfect circle pill">
          <ComponentRow label="sm / md / lg" noBorder>
            {[
              { size: 32, iconSize: 14 },
              { size: 40, iconSize: 16 },
              { size: 48, iconSize: 20 },
            ].map(({ size, iconSize }) => (
              <button key={size} style={{ width: size, height: size, borderRadius: 9999, border: '1px solid var(--color-border-secondary)', background: 'var(--color-bg-primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-fg-secondary)' }}>
                <Plus style={{ width: iconSize, height: iconSize }} strokeWidth={2} />
              </button>
            ))}
            <button style={{ width: 40, height: 40, borderRadius: 9999, background: '#0a1217', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Send01 style={{ width: 16, height: 16 }} strokeWidth={2} />
            </button>
          </ComponentRow>
        </Section>

        <Section title="Segmented / Button Group" description="Connected pill group">
          <ComponentRow label="Pill tabs" noBorder>
            <div style={{ display: 'inline-flex', gap: 2, padding: 4, borderRadius: 9999, backgroundColor: 'rgba(10,18,23,0.05)' }}>
              {['Day', 'Week', 'Month'].map((label, i) => (
                <button key={label} style={{ padding: '6px 16px', borderRadius: 9999, border: 'none', background: i === 1 ? 'white' : 'transparent', color: i === 1 ? 'var(--color-fg-primary)' : 'var(--color-fg-tertiary)', fontSize: 13, fontWeight: i === 1 ? 600 : 400, cursor: 'pointer', fontFamily: 'inherit', boxShadow: i === 1 ? 'var(--shadow-xs)' : 'none', transition: 'all 150ms' }}>
                  {label}
                </button>
              ))}
            </div>
          </ComponentRow>
        </Section>

        <Section title="FAB — Floating Action Button" description="Large circle, primary bg">
          <ComponentRow label="Circle FAB">
            <button style={{ width: 56, height: 56, borderRadius: 9999, background: '#0a1217', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: 'var(--shadow-lg)' }}>
              <Plus style={{ width: 24, height: 24 }} strokeWidth={2} />
            </button>
          </ComponentRow>
          <ComponentRow label="Extended FAB" noBorder>
            <button style={{ height: 56, padding: '0 24px', borderRadius: 9999, background: '#0a1217', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, color: 'white', fontSize: 15, fontWeight: 500, boxShadow: 'var(--shadow-lg)', fontFamily: "'Satoshi', 'Inter', sans-serif" }}>
              <Plus style={{ width: 20, height: 20 }} strokeWidth={2} /> New Chat
            </button>
          </ComponentRow>
        </Section>

        <Section title="Status Buttons" description="Pill-shaped status actions">
          <ComponentRow label="States" noBorder>
            <button style={{ ...btnBase, background: 'var(--color-success-subtle)', color: 'var(--color-success)', border: '1px solid var(--color-success)' }}>
              <CheckCircle style={{ width: 16, height: 16 }} strokeWidth={2} /> Approved
            </button>
            <button style={{ ...btnBase, background: 'var(--color-destructive-subtle)', color: 'var(--color-destructive)', border: '1px solid var(--color-destructive)' }}>
              <AlertCircle style={{ width: 16, height: 16 }} strokeWidth={2} /> Error
            </button>
            <button style={{ ...btnBase, background: 'var(--color-warning-subtle)', color: '#b37800', border: '1px solid var(--color-warning)' }}>
              Warning
            </button>
          </ComponentRow>
        </Section>

      </div>
    </div>
  )
}
