import { useState } from 'react'
import { SearchMd, Eye, EyeOff, Check, AlertCircle, UploadCloud01, ChevronDown } from '@untitledui/icons'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

const inputBase: React.CSSProperties = {
  width: '100%', height: 48, border: 'none', outline: 'none',
  backgroundColor: 'rgba(10,18,23,0.05)', borderRadius: 32,
  padding: '0 20px', fontSize: 14,
  color: 'var(--color-fg-primary)',
  fontFamily: "'Satoshi', 'Inter', sans-serif",
}

export default function FormsPage() {
  const [showPw, setShowPw] = useState(false)
  const [checkA, setCheckA] = useState(false)
  const [checkB, setCheckB] = useState(true)
  const [radio, setRadio] = useState('b')
  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [selectOpen, setSelectOpen] = useState(false)
  const [selected, setSelected] = useState('Product Design')

  return (
    <div>
      <PageHeader
        section="Chapter 02"
        title="Form Elements"
        description="All form inputs use pill/rounded shapes with a subtle tinted background — no harsh borders."
      />
      <div style={{ padding: '40px 56px', maxWidth: 900 }}>

        {/* Text Inputs */}
        <Section title="Text Input" description="Pill-shaped, bg: rgba(10,18,23,0.05), no border">
          <ComponentRow label="Default">
            <div style={{ width: 320 }}>
              <input style={{ ...inputBase }} placeholder="Enter your name" />
            </div>
          </ComponentRow>
          <ComponentRow label="Focus">
            <div style={{ width: 320 }}>
              <input
                style={{ ...inputBase, boxShadow: '0 0 0 3px rgba(100,89,254,0.15)', outline: '1px solid var(--color-primary)' }}
                placeholder="Focused input"
                defaultValue="Suhail"
              />
            </div>
          </ComponentRow>
          <ComponentRow label="Error">
            <div style={{ width: 320 }}>
              <div style={{ position: 'relative' }}>
                <input
                  style={{ ...inputBase, boxShadow: '0 0 0 3px rgba(233,66,53,0.12)', outline: '1px solid var(--color-destructive)' }}
                  defaultValue="invalid@"
                />
                <AlertCircle style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: 'var(--color-destructive)' }} strokeWidth={2} />
              </div>
              <span style={{ fontSize: 12, color: 'var(--color-destructive)', marginTop: 6, display: 'block', paddingLeft: 12 }}>Please enter a valid email address</span>
            </div>
          </ComponentRow>
          <ComponentRow label="Disabled" noBorder>
            <div style={{ width: 320 }}>
              <input style={{ ...inputBase, opacity: 0.4, cursor: 'not-allowed' }} placeholder="Disabled input" disabled />
            </div>
          </ComponentRow>
        </Section>

        {/* Search Input */}
        <Section title="Search Input" description="Pill shape with search icon prefix">
          <ComponentRow label="Search" noBorder>
            <div style={{ width: 320, position: 'relative' }}>
              <SearchMd style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: 'var(--color-fg-tertiary)' }} strokeWidth={2} />
              <input style={{ ...inputBase, paddingLeft: 44 }} placeholder="Search..." />
            </div>
          </ComponentRow>
        </Section>

        {/* Password Input */}
        <Section title="Password Input" description="Pill with eye toggle">
          <ComponentRow label="Password" noBorder>
            <div style={{ width: 320, position: 'relative' }}>
              <input type={showPw ? 'text' : 'password'} style={{ ...inputBase, paddingRight: 48 }} defaultValue="supersecret" />
              <button onClick={() => setShowPw(v => !v)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--color-fg-tertiary)', display: 'flex' }}>
                {showPw ? <EyeOff style={{ width: 16, height: 16 }} strokeWidth={2} /> : <Eye style={{ width: 16, height: 16 }} strokeWidth={2} />}
              </button>
            </div>
          </ComponentRow>
        </Section>

        {/* Textarea */}
        <Section title="Textarea" description="Rounded corners (24px), same bg tint">
          <ComponentRow label="Textarea" noBorder>
            <div style={{ width: 380 }}>
              <textarea
                style={{ width: '100%', minHeight: 100, border: 'none', outline: 'none', backgroundColor: 'rgba(10,18,23,0.05)', borderRadius: 24, padding: '14px 20px', fontSize: 14, color: 'var(--color-fg-primary)', fontFamily: "'Satoshi', 'Inter', sans-serif", resize: 'vertical', lineHeight: '22px' }}
                placeholder="Tell us about your project..."
                defaultValue="We are building an enterprise-grade design system for internal tools and AI products."
              />
            </div>
          </ComponentRow>
        </Section>

        {/* Select */}
        <Section title="Select / Dropdown" description="Custom pill-shaped select">
          <ComponentRow label="Select" noBorder>
            <div style={{ position: 'relative', width: 280 }}>
              <button
                onClick={() => setSelectOpen(o => !o)}
                style={{ width: '100%', height: 48, borderRadius: 32, backgroundColor: 'rgba(10,18,23,0.05)', border: 'none', padding: '0 16px 0 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14, color: 'var(--color-fg-primary)', fontFamily: "'Satoshi', 'Inter', sans-serif" }}
              >
                {selected}
                <ChevronDown style={{ width: 16, height: 16, color: 'var(--color-fg-tertiary)' }} strokeWidth={2} />
              </button>
              {selectOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border-secondary)', borderRadius: 16, padding: 6, boxShadow: 'var(--shadow-lg)', zIndex: 50 }}>
                  {['Product Design', 'Engineering', 'Marketing', 'Sales', 'Operations'].map(opt => (
                    <button key={opt} onClick={() => { setSelected(opt); setSelectOpen(false) }} style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: 'none', background: selected === opt ? 'var(--color-primary-subtle)' : 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', fontSize: 13, color: selected === opt ? 'var(--color-primary)' : 'var(--color-fg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {opt}
                      {selected === opt && <Check style={{ width: 14, height: 14 }} strokeWidth={2.5} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ComponentRow>
        </Section>

        {/* Checkbox */}
        <Section title="Checkbox" description="Rounded square, fills with primary color on check">
          <ComponentRow label="Unchecked / Checked">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[{ label: 'Enable notifications', val: checkA, set: setCheckA }, { label: 'Marketing emails (checked)', val: checkB, set: setCheckB }].map(({ label, val, set }, i) => (
                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', userSelect: 'none' }}>
                  <div onClick={() => set((v: boolean) => !v)} style={{ width: 18, height: 18, borderRadius: 6, border: val ? 'none' : '1.5px solid var(--color-border-primary)', backgroundColor: val ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                    {val && <Check style={{ width: 11, height: 11, color: 'white' }} strokeWidth={3} />}
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--color-fg-primary)' }}>{label}</span>
                </label>
              ))}
            </div>
          </ComponentRow>
          <ComponentRow label="Disabled" noBorder>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.4 }}>
              <div style={{ width: 18, height: 18, borderRadius: 6, border: '1.5px solid var(--color-border-primary)' }} />
              <span style={{ fontSize: 14, color: 'var(--color-fg-primary)' }}>Disabled option</span>
            </label>
          </ComponentRow>
        </Section>

        {/* Radio */}
        <Section title="Radio Buttons" description="Full circle with primary fill">
          <ComponentRow label="Radio group" noBorder>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Option A', 'Option B', 'Option C'].map((opt, i) => {
                const val = ['a', 'b', 'c'][i]
                const checked = radio === val
                return (
                  <label key={opt} onClick={() => setRadio(val)} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', userSelect: 'none' }}>
                    <div style={{ width: 18, height: 18, borderRadius: 9999, border: checked ? 'none' : '1.5px solid var(--color-border-primary)', backgroundColor: checked ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {checked && <div style={{ width: 6, height: 6, borderRadius: 9999, backgroundColor: 'white' }} />}
                    </div>
                    <span style={{ fontSize: 14, color: 'var(--color-fg-primary)' }}>{opt}</span>
                  </label>
                )
              })}
            </div>
          </ComponentRow>
        </Section>

        {/* Toggle */}
        <Section title="Toggle Switch" description="Pill-shaped 48×28px switch">
          <ComponentRow label="Off / On">
            <div style={{ display: 'flex', gap: 20 }}>
              {[{ val: toggle, set: setToggle, label: 'Dark mode' }, { val: toggle2, set: setToggle2, label: 'Notifications' }].map(({ val, set, label }) => (
                <label key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                  <div onClick={() => set((v: boolean) => !v)} style={{ width: 48, height: 28, borderRadius: 9999, backgroundColor: val ? 'var(--color-primary)' : 'rgba(10,18,23,0.15)', position: 'relative', cursor: 'pointer', transition: 'background 200ms' }}>
                    <div style={{ position: 'absolute', top: 3, left: val ? 23 : 3, width: 22, height: 22, borderRadius: 9999, backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'left 200ms' }} />
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--color-fg-primary)' }}>{label}</span>
                </label>
              ))}
            </div>
          </ComponentRow>
          <ComponentRow label="Disabled" noBorder>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.4 }}>
              <div style={{ width: 48, height: 28, borderRadius: 9999, backgroundColor: 'rgba(10,18,23,0.15)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 3, left: 3, width: 22, height: 22, borderRadius: 9999, backgroundColor: 'white' }} />
              </div>
              <span style={{ fontSize: 14, color: 'var(--color-fg-primary)' }}>Disabled toggle</span>
            </div>
          </ComponentRow>
        </Section>

        {/* File Upload */}
        <Section title="File Upload" description="Dashed drop zone with 16px rounded corners">
          <ComponentRow label="Drop zone" noBorder>
            <div style={{ width: 380, padding: '28px 24px', borderRadius: 16, border: '2px dashed var(--color-border-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer', backgroundColor: 'rgba(10,18,23,0.02)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(10,18,23,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UploadCloud01 style={{ width: 20, height: 20, color: 'var(--color-fg-tertiary)' }} strokeWidth={2} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-fg-primary)' }}>
                  <span style={{ color: 'var(--color-primary)', cursor: 'pointer' }}>Click to upload</span> or drag and drop
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-fg-tertiary)', marginTop: 4 }}>SVG, PNG, JPG or GIF (max. 10MB)</div>
              </div>
            </div>
          </ComponentRow>
        </Section>

      </div>
    </div>
  )
}
