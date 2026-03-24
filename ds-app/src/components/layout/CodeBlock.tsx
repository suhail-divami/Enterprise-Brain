import { useState } from 'react'
import { Copy01, Check } from '@untitledui/icons'

type Props = { code: string; language?: string }
export default function CodeBlock({ code, language = 'tsx' }: Props) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--color-bg-inset)', borderTop: '1px solid var(--color-border-secondary)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid var(--color-border-secondary)' }}>
        <span style={{ fontSize: 11, color: 'var(--color-fg-quaternary)', fontFamily: 'monospace' }}>{language}</span>
        <button onClick={copy} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-tertiary)', fontSize: 12, padding: '2px 8px', borderRadius: 4 }}>
          {copied ? <Check style={{ width: 14, height: 14 }} strokeWidth={2} /> : <Copy01 style={{ width: 14, height: 14 }} strokeWidth={2} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '16px', fontSize: 12, lineHeight: '20px', overflowX: 'auto', fontFamily: 'JetBrains Mono, Fira Code, monospace', color: 'var(--color-fg-secondary)' }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
