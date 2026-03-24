type TokenItem = { name: string; value: string; description?: string }
type Props = { tokens: TokenItem[] }
export default function TokenGrid({ tokens }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 1, backgroundColor: 'var(--color-border-secondary)' }}>
      {tokens.map(t => (
        <div key={t.name} style={{ backgroundColor: 'var(--color-bg-primary)', padding: '16px' }}>
          <code style={{ fontSize: 11, color: 'var(--color-primary)', display: 'block', marginBottom: 4 }}>{t.name}</code>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-fg-primary)', display: 'block', marginBottom: 2 }}>{t.value}</span>
          {t.description && <span style={{ fontSize: 11, color: 'var(--color-fg-tertiary)' }}>{t.description}</span>}
        </div>
      ))}
    </div>
  )
}
