type Props = { label: string; children: React.ReactNode; noBorder?: boolean }
export default function ComponentRow({ label, children, noBorder }: Props) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '200px 1fr',
      padding: '20px 24px', gap: 24,
      borderBottom: noBorder ? 'none' : '1px solid var(--color-border-secondary)',
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-fg-tertiary)' }}>{label}</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>{children}</div>
    </div>
  )
}
