import { useState } from 'react'
import { ChevronRight, ArrowLeft, Home01, Settings01, User01 } from '@untitledui/icons'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

export default function NavigationPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeVTab, setActiveVTab] = useState(0)
  const [activePage, setActivePage] = useState(3)
  const [activeStep] = useState(1)
  const [activeNav, setActiveNav] = useState(0)

  const tabs = ['Overview', 'Analytics', 'Settings', 'Billing']
  const steps = ['Account info', 'Plan selection', 'Payment', 'Confirmation']

  return (
    <div>
      <PageHeader section="Chapter 04" title="Navigation" description="Breadcrumbs, pill tabs, pill pagination, steppers, and mobile nav bar." />
      <div style={{ padding: '40px 56px', maxWidth: 1000 }}>

        <Section title="Breadcrumb" description="Hierarchical path indicator">
          <ComponentRow label="3-level breadcrumb" noBorder>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {[{ icon: Home01, label: 'Home' }, { label: 'Settings' }, { label: 'Profile' }].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {i > 0 && <ChevronRight style={{ width: 14, height: 14, color: 'var(--color-fg-quaternary)' }} strokeWidth={2} />}
                  <button style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: '2px 4px', borderRadius: 4, color: i === 2 ? 'var(--color-fg-primary)' : 'var(--color-fg-tertiary)', fontSize: 13, fontWeight: i === 2 ? 500 : 400, fontFamily: 'inherit' }}>
                    {item.icon && <item.icon style={{ width: 14, height: 14 }} strokeWidth={2} />}
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </ComponentRow>
        </Section>

        <Section title="Tabs — Pill Switcher" description="Active tab has a pill background — matches Figma design">
          <ComponentRow label="Pill tabs" noBorder>
            <div style={{ display: 'inline-flex', gap: 2, padding: 4, borderRadius: 9999, backgroundColor: 'rgba(10,18,23,0.05)' }}>
              {tabs.map((tab, i) => (
                <button key={tab} onClick={() => setActiveTab(i)} style={{
                  padding: '7px 18px', border: 'none', borderRadius: 9999,
                  background: activeTab === i ? 'white' : 'transparent',
                  cursor: 'pointer', fontSize: 13,
                  fontWeight: activeTab === i ? 600 : 400,
                  color: activeTab === i ? 'var(--color-fg-primary)' : 'var(--color-fg-tertiary)',
                  boxShadow: activeTab === i ? 'var(--shadow-xs)' : 'none',
                  transition: 'all 150ms', fontFamily: 'inherit',
                }}>
                  {tab}
                </button>
              ))}
            </div>
          </ComponentRow>
        </Section>

        <Section title="Tabs — Vertical" description="Side navigation tab variant">
          <ComponentRow label="Vertical tabs" noBorder>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderRight: '1px solid var(--color-border-secondary)', paddingRight: 16, minWidth: 160 }}>
              {tabs.map((tab, i) => (
                <button key={tab} onClick={() => setActiveVTab(i)} style={{
                  padding: '8px 12px', border: 'none', background: activeVTab === i ? 'var(--color-primary-subtle)' : 'transparent',
                  cursor: 'pointer', fontSize: 13, fontWeight: activeVTab === i ? 600 : 400,
                  color: activeVTab === i ? 'var(--color-primary)' : 'var(--color-fg-tertiary)',
                  borderRadius: 6, borderRight: `2px solid ${activeVTab === i ? 'var(--color-primary)' : 'transparent'}`,
                  textAlign: 'left', transition: 'all 150ms', fontFamily: 'inherit',
                }}>
                  {tab}
                </button>
              ))}
            </div>
            <div style={{ padding: '8px 16px', fontSize: 13, color: 'var(--color-fg-secondary)' }}>
              Selected: <strong>{tabs[activeVTab]}</strong>
            </div>
          </ComponentRow>
        </Section>

        <Section title="Pagination" description="Pill-shaped numbered page buttons">
          <ComponentRow label="7-page pagination" noBorder>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <button onClick={() => setActivePage(p => Math.max(1, p - 1))} disabled={activePage === 1} style={{ width: 36, height: 36, border: '1px solid var(--color-border-secondary)', borderRadius: 9999, background: 'var(--color-bg-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-fg-secondary)', opacity: activePage === 1 ? 0.4 : 1 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11L5 7l4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              {[1, 2, 3, '...', 5, 6, 7].map((page, i) => (
                <button key={i} onClick={() => typeof page === 'number' && setActivePage(page)} style={{
                  width: 36, height: 36,
                  border: activePage === page ? 'none' : '1px solid var(--color-border-secondary)',
                  borderRadius: 9999,
                  background: activePage === page ? '#0a1217' : 'var(--color-bg-primary)',
                  cursor: page === '...' ? 'default' : 'pointer', fontSize: 13, fontWeight: 500,
                  color: activePage === page ? 'white' : 'var(--color-fg-secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit',
                }}>
                  {page}
                </button>
              ))}
              <button onClick={() => setActivePage(p => Math.min(7, p + 1))} disabled={activePage === 7} style={{ width: 36, height: 36, border: '1px solid var(--color-border-secondary)', borderRadius: 9999, background: 'var(--color-bg-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-fg-secondary)', opacity: activePage === 7 ? 0.4 : 1 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 11l4-4-4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </ComponentRow>
        </Section>

        <Section title="Stepper" description="Horizontal multi-step progress indicator">
          <ComponentRow label="4-step wizard" noBorder>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, width: '100%' }}>
              {steps.map((step, i) => {
                const done = i < activeStep
                const active = i === activeStep
                return (
                  <div key={step} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: done ? 'var(--color-success)' : active ? 'var(--color-primary)' : 'var(--color-bg-tertiary)',
                        border: done ? 'none' : active ? 'none' : '2px solid var(--color-border-primary)',
                        color: done || active ? 'white' : 'var(--color-fg-tertiary)', fontSize: 13, fontWeight: 600,
                      }}>
                        {done ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2.5"><path d="M2 7l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" /></svg> : i + 1}
                      </div>
                      <span style={{ fontSize: 11, color: active ? 'var(--color-primary)' : done ? 'var(--color-success)' : 'var(--color-fg-tertiary)', fontWeight: active ? 600 : 400, whiteSpace: 'nowrap' }}>{step}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ flex: 1, height: 2, backgroundColor: done ? 'var(--color-success)' : 'var(--color-border-secondary)', margin: '0 8px', marginBottom: 20 }} />
                    )}
                  </div>
                )
              })}
            </div>
          </ComponentRow>
        </Section>

        <Section title="Back Button" description="Navigation arrow pattern">
          <ComponentRow label="Back action" noBorder>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-secondary)', fontSize: 13, fontWeight: 500, padding: '6px 0', fontFamily: 'inherit' }}>
              <ArrowLeft style={{ width: 16, height: 16 }} strokeWidth={2} />
              Back to Settings
            </button>
          </ComponentRow>
        </Section>

        <Section title="Bottom Navigation Bar" description="Mobile tab bar with 4 items">
          <ComponentRow label="Mobile nav bar" noBorder>
            <div style={{ display: 'flex', backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border-secondary)', borderRadius: 16, padding: '8px 4px', gap: 4, boxShadow: 'var(--shadow-lg)', width: 360 }}>
              {[
                { Icon: Home01, label: 'Home' },
                { Icon: Settings01, label: 'Settings' },
                { Icon: User01, label: 'Profile' },
                { Icon: ChevronRight, label: 'More' },
              ].map(({ Icon, label }, i) => (
                <button key={i} onClick={() => setActiveNav(i)} style={{
                  flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  padding: '8px 4px', border: 'none', borderRadius: 12,
                  background: activeNav === i ? 'var(--color-primary-subtle)' : 'transparent',
                  color: activeNav === i ? 'var(--color-primary)' : 'var(--color-fg-tertiary)',
                  cursor: 'pointer', transition: 'all 150ms',
                }}>
                  <Icon style={{ width: 20, height: 20 }} strokeWidth={2} />
                  <span style={{ fontSize: 10, fontWeight: activeNav === i ? 600 : 400, fontFamily: 'inherit' }}>{label}</span>
                </button>
              ))}
            </div>
          </ComponentRow>
        </Section>

      </div>
    </div>
  )
}
