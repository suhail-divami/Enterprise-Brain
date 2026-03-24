import { useState } from 'react'
import { XClose, CheckCircle, InfoCircle, AlertTriangle, AlertCircle } from '@untitledui/icons'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/layout/Section'
import ComponentRow from '../components/layout/ComponentRow'

function Spinner({ size = 20 }: { size?: number }) {
  return (
    <svg className="spinner" width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

type AlertVariant = 'info' | 'success' | 'warning' | 'error'
const alertConfig: Record<AlertVariant, { bg: string; border: string; icon: typeof InfoCircle; iconColor: string; title: string; msg: string }> = {
  info: { bg: 'var(--color-info-subtle)', border: 'var(--color-info)', icon: InfoCircle, iconColor: 'var(--color-info)', title: 'Heads up', msg: 'Your trial expires in 7 days. Upgrade to keep your data.' },
  success: { bg: 'var(--color-success-subtle)', border: 'var(--color-success)', icon: CheckCircle, iconColor: 'var(--color-success)', title: 'Changes saved', msg: 'Your profile has been updated successfully.' },
  warning: { bg: 'var(--color-warning-subtle)', border: 'var(--color-warning)', icon: AlertTriangle, iconColor: 'var(--color-warning)', title: 'Review required', msg: 'One or more fields need attention before submitting.' },
  error: { bg: 'var(--color-destructive-subtle)', border: 'var(--color-destructive)', icon: AlertCircle, iconColor: 'var(--color-destructive)', title: 'Payment failed', msg: 'Your card was declined. Please update your payment method.' },
}

export default function OverlaysPage() {
  const [dismissed, setDismissed] = useState<AlertVariant[]>([])
  const [progress] = useState(65)

  const dismiss = (v: AlertVariant) => setDismissed(d => [...d, v])
  const resetAlerts = () => setDismissed([])

  return (
    <div>
      <PageHeader section="Chapter 05" title="Overlays & Feedback" description="Alerts, toasts, empty states, skeletons, spinners, progress bars, and modals." />
      <div style={{ padding: '40px 56px', maxWidth: 1000 }}>

        <Section title="Alert / Inline Banner" description="Dismissible status banners for 4 severity levels">
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {(Object.keys(alertConfig) as AlertVariant[]).map(variant => {
              if (dismissed.includes(variant)) return null
              const { bg, border, icon: Icon, iconColor, title, msg } = alertConfig[variant]
              return (
                <div key={variant} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', borderRadius: 10, backgroundColor: bg, border: `1px solid ${border}`, borderLeftWidth: 4 }}>
                  <Icon style={{ width: 18, height: 18, color: iconColor, flexShrink: 0, marginTop: 1 }} strokeWidth={2} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-fg-primary)', marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'var(--color-fg-secondary)' }}>{msg}</div>
                  </div>
                  <button onClick={() => dismiss(variant)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-tertiary)', padding: 2, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <XClose style={{ width: 14, height: 14 }} strokeWidth={2} />
                  </button>
                </div>
              )
            })}
            {dismissed.length > 0 && (
              <button onClick={resetAlerts} style={{ fontSize: 12, color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', alignSelf: 'flex-start', fontFamily: 'inherit' }}>Reset banners</button>
            )}
          </div>
        </Section>

        <Section title="Toast Notifications" description="Ephemeral status messages shown as static cards here">
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { variant: 'success' as const, msg: 'Document exported successfully!' },
              { variant: 'error' as const, msg: 'Failed to connect. Retrying in 5s...' },
              { variant: 'warning' as const, msg: 'Storage is 90% full.' },
              { variant: 'info' as const, msg: 'New version available — v2.4.1' },
            ].map(({ variant, msg }) => {
              const { icon: Icon, iconColor } = alertConfig[variant]
              return (
                <div key={msg} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 18px', borderRadius: 9999, backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border-secondary)', boxShadow: 'var(--shadow-md)', maxWidth: 380 }}>
                  <Icon style={{ width: 18, height: 18, color: iconColor, flexShrink: 0 }} strokeWidth={2} />
                  <span style={{ flex: 1, fontSize: 13, color: 'var(--color-fg-primary)' }}>{msg}</span>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-quaternary)', display: 'flex' }}>
                    <XClose style={{ width: 14, height: 14 }} strokeWidth={2} />
                  </button>
                </div>
              )
            })}
          </div>
        </Section>

        <Section title="Empty State" description="Illustration + heading + CTA for empty data">
          <div style={{ padding: '48px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, backgroundColor: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="6" y="8" width="24" height="20" rx="3" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
                <path d="M12 16h12M12 21h8" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="27" cy="27" r="7" fill="var(--color-primary)" />
                <path d="M24 27h6M27 24v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-fg-primary)', margin: '0 0 6px' }}>No documents yet</h3>
              <p style={{ fontSize: 14, color: 'var(--color-fg-secondary)', margin: 0, maxWidth: 280 }}>Create your first document to get started. It only takes a few seconds.</p>
            </div>
            <button style={{ height: 40, padding: '0 20px', borderRadius: 9999, background: '#0a1217', color: 'white', border: 'none', fontSize: 14, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'inherit' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10M3 8h10" strokeLinecap="round" /></svg>
              Create Document
            </button>
          </div>
        </Section>

        <Section title="Loading Skeleton" description="Animated shimmer placeholders">
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Text skeleton */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 10 }}>Text lines</div>
              <div className="skeleton" style={{ height: 16, width: '80%', marginBottom: 8 }} />
              <div className="skeleton" style={{ height: 16, width: '60%', marginBottom: 8 }} />
              <div className="skeleton" style={{ height: 16, width: '40%' }} />
            </div>
            {/* Card skeleton */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 10 }}>Card</div>
              <div style={{ padding: 16, border: '1px solid var(--color-border-secondary)', borderRadius: 12, display: 'flex', gap: 12 }}>
                <div className="skeleton" style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div className="skeleton" style={{ height: 14, width: '50%', marginBottom: 8 }} />
                  <div className="skeleton" style={{ height: 12, width: '80%', marginBottom: 6 }} />
                  <div className="skeleton" style={{ height: 12, width: '65%' }} />
                </div>
              </div>
            </div>
            {/* Avatar skeleton */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-tertiary)', marginBottom: 10 }}>Avatar row</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="skeleton" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <div className="skeleton" style={{ height: 14, width: 120, marginBottom: 6 }} />
                  <div className="skeleton" style={{ height: 12, width: 80 }} />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Spinner" description="Loading indicator in 3 sizes">
          <ComponentRow label="Sizes" noBorder>
            {[16, 24, 32].map(size => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ color: 'var(--color-primary)' }}><Spinner size={size} /></div>
                <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)' }}>{size}px</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', backgroundColor: 'var(--color-primary)', borderRadius: 8 }}>
              <div style={{ color: 'white' }}><Spinner size={16} /></div>
              <span style={{ fontSize: 13, color: 'white', fontWeight: 600 }}>Loading...</span>
            </div>
          </ComponentRow>
        </Section>

        <Section title="Progress Bar" description="Determinate and indeterminate variants">
          <ComponentRow label="Determinate 65%">
            <div style={{ width: 320 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: 'var(--color-fg-secondary)' }}>Uploading...</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary)' }}>{progress}%</span>
              </div>
              <div style={{ height: 8, backgroundColor: 'var(--color-bg-tertiary)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${progress}%`, backgroundColor: 'var(--color-primary)', borderRadius: 4, transition: 'width 300ms ease' }} />
              </div>
            </div>
          </ComponentRow>
          <ComponentRow label="Indeterminate" noBorder>
            <div style={{ width: 320 }}>
              <div style={{ height: 8, backgroundColor: 'var(--color-bg-tertiary)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                <style>{`@keyframes indeterminate-bar { 0% { left: -40%; width: 40%; } 60% { left: 100%; width: 40%; } 100% { left: 100%; width: 40%; } }`}</style>
                <div style={{ position: 'absolute', height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: 4, animation: 'indeterminate-bar 1.5s ease infinite' }} />
              </div>
            </div>
          </ComponentRow>
        </Section>

        <Section title="Modal Preview" description="Modal dialog with backdrop simulation">
          <div style={{ padding: 24 }}>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border-secondary)' }}>
              {/* Backdrop */}
              <div style={{ padding: 40, backgroundColor: 'rgba(10,13,18,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Modal */}
                <div style={{ backgroundColor: 'var(--color-bg-primary)', borderRadius: 16, padding: 28, width: 400, boxShadow: 'var(--shadow-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-fg-primary)', margin: '0 0 4px' }}>Confirm deletion</h3>
                      <p style={{ fontSize: 13, color: 'var(--color-fg-secondary)', margin: 0 }}>This action cannot be undone. All data will be permanently removed.</p>
                    </div>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-tertiary)', display: 'flex', marginLeft: 12 }}>
                      <XClose style={{ width: 18, height: 18 }} strokeWidth={2} />
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 20, justifyContent: 'flex-end' }}>
                    <button style={{ height: 36, padding: '0 16px', borderRadius: 9999, border: '1px solid var(--color-border-secondary)', background: 'transparent', fontSize: 13, fontWeight: 500, cursor: 'pointer', color: 'var(--color-fg-secondary)', fontFamily: 'inherit' }}>Cancel</button>
                    <button style={{ height: 36, padding: '0 16px', borderRadius: 9999, border: 'none', background: 'var(--color-destructive)', fontSize: 13, fontWeight: 500, cursor: 'pointer', color: 'white', fontFamily: 'inherit' }}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Tooltip" description="4 placement examples">
          <ComponentRow label="Placements" noBorder>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              {[
                { label: 'Top', tip: 'Save changes', pos: 'top' },
                { label: 'Bottom', tip: 'Delete item', pos: 'bottom' },
                { label: 'Left', tip: 'Go back', pos: 'left' },
                { label: 'Right', tip: 'Open menu', pos: 'right' },
              ].map(({ label, tip }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{ padding: '4px 10px', backgroundColor: 'var(--color-fg-primary)', color: 'white', borderRadius: 6, fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap' }}>{tip}</div>
                  <div style={{ width: 8, height: 8, backgroundColor: 'var(--color-fg-primary)', transform: 'rotate(45deg)', marginTop: -10 }} />
                  <button style={{ height: 32, padding: '0 12px', borderRadius: 6, border: '1px solid var(--color-border-primary)', background: 'var(--color-bg-secondary)', fontSize: 12, cursor: 'pointer', color: 'var(--color-fg-secondary)', fontFamily: 'inherit' }}>{label}</button>
                </div>
              ))}
            </div>
          </ComponentRow>
        </Section>

      </div>
    </div>
  )
}
