type Props = { title: string; description?: string; children: React.ReactNode }
export default function Section({ title, description, children }: Props) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-fg-primary)', margin: '0 0 6px' }}>{title}</h2>
        {description && <p style={{ fontSize: 14, color: 'var(--color-fg-secondary)', margin: 0 }}>{description}</p>}
      </div>
      <div style={{ backgroundColor: 'var(--color-bg-primary)', borderRadius: 12, border: '1px solid var(--color-border-secondary)', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}
