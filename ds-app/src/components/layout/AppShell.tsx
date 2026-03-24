import { NavLink } from 'react-router-dom'
import {
  Home01, Settings01, Moon01, SunSetting01,
  Type01, LayoutAlt04, MessageSquare02,
  Grid01, Database01, Image01, Tool01, Star01,
} from '@untitledui/icons'

const NAV_TOP = [
  { to: '/foundations', Icon: Home01, label: 'Foundations' },
  { to: '/forms', Icon: Type01, label: 'Forms' },
  { to: '/buttons', Icon: Star01, label: 'Buttons' },
  { to: '/navigation', Icon: LayoutAlt04, label: 'Navigation' },
  { to: '/overlays', Icon: MessageSquare02, label: 'Overlays' },
  { to: '/data-display', Icon: Database01, label: 'Data Display' },
  { to: '/ai-chat', Icon: MessageSquare02, label: 'AI Chat' },
  { to: '/layout', Icon: Grid01, label: 'Layout' },
  { to: '/media', Icon: Image01, label: 'Media' },
  { to: '/utility', Icon: Tool01, label: 'Utility' },
]

type Props = { theme: 'light' | 'dark'; onThemeToggle: () => void; children: React.ReactNode }

export default function AppShell({ theme, onThemeToggle, children }: Props) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Fixed sidebar — floating pill shaped */}
      <aside style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, width: 68,
        display: 'flex', flexDirection: 'column', padding: '8px 4px',
        zIndex: 1100,
      }}>
        {/* The pill */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          backgroundColor: 'var(--color-sidebar-bg)',
          borderRadius: 99,
          border: '1px solid var(--color-border-secondary)',
          boxShadow: 'var(--shadow-xs)',
          overflow: 'hidden',
        }}>
          {/* Top section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20, gap: 12 }}>
            {/* Logo mark */}
            <div style={{
              width: 28, height: 28, borderRadius: 8, backgroundColor: '#0f0f0e',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '-0.5px' }}>EB</span>
            </div>

            {/* Nav items */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', padding: '0 10px' }}>
              {NAV_TOP.map(({ to, Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  title={label}
                  style={({ isActive }) => ({
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, height: 40, borderRadius: 6,
                    color: isActive ? 'var(--color-fg-primary)' : 'var(--color-fg-tertiary)',
                    backgroundColor: isActive ? 'rgba(10,18,23,0.08)' : 'transparent',
                    textDecoration: 'none', transition: 'all 150ms',
                  })}
                >
                  <Icon style={{ width: 18, height: 18 }} strokeWidth={2} />
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bottom section */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '0 10px 16px', gap: 2,
          }}>
            <button
              onClick={onThemeToggle}
              title="Toggle theme"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: 6, border: 'none',
                background: 'transparent', cursor: 'pointer', color: 'var(--color-fg-tertiary)',
              }}
            >
              {theme === 'light'
                ? <Moon01 style={{ width: 18, height: 18 }} strokeWidth={2} />
                : <SunSetting01 style={{ width: 18, height: 18 }} strokeWidth={2} />}
            </button>

            <button
              title="Settings"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: 6, border: 'none',
                background: 'transparent', cursor: 'pointer', color: 'var(--color-fg-tertiary)',
              }}
            >
              <Settings01 style={{ width: 18, height: 18 }} strokeWidth={2} />
            </button>

            {/* Avatar */}
            <div style={{
              width: 30, height: 30, borderRadius: 9999,
              background: 'var(--color-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginTop: 6, flexShrink: 0,
            }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#fff' }}>SU</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{
        marginLeft: 68,
        flex: 1,
        overflowY: 'auto',
        backgroundColor: 'var(--color-bg-primary)',
        minHeight: '100vh',
      }}>
        {children}
      </main>
    </div>
  )
}
