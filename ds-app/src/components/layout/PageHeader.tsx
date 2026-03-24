type Props = { section: string; title: string; description: string }

export default function PageHeader({ section, title, description }: Props) {
  return (
    <div style={{
      padding: '48px 56px 40px',
      borderBottom: '1px solid var(--color-border-subtle)',
      backgroundColor: 'var(--color-bg-primary)',
    }}>
      {/* Section pill badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '4px 12px',
        borderRadius: 9999,
        backgroundColor: 'var(--color-primary-subtle)',
        border: '1px solid rgba(100,89,254,0.15)',
        marginBottom: 16,
      }}>
        <span style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--color-primary)',
        }}>{section}</span>
      </div>
      <h1 style={{
        fontSize: 30, fontWeight: 600, color: 'var(--color-fg-primary)',
        margin: '0 0 10px', lineHeight: 1.2,
        fontFamily: "'Satoshi', 'Inter', sans-serif",
      }}>{title}</h1>
      <p style={{
        fontSize: 15, color: 'var(--color-fg-secondary)', margin: 0,
        maxWidth: 600, lineHeight: '24px',
      }}>{description}</p>
    </div>
  )
}
