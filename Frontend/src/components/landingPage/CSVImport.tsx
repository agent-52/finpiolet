import { useState } from 'react'

const sampleRows = [
  { date: '2026-06-01', desc: 'Zomato Order', amount: '₹450', category: 'Food' },
  { date: '2026-06-02', desc: 'Salary Credit', amount: '₹50,000', category: 'Salary' },
  { date: '2026-06-03', desc: 'Petrol Pump', amount: '₹1,000', category: 'Travel' },
  { date: '2026-06-05', desc: 'Amazon', amount: '₹2,300', category: 'Shopping' },
  { date: '2026-06-07', desc: 'Netflix', amount: '₹649', category: 'Entertainment' },
]

export default function CSVImport() {
  const [state, setState] = useState<'idle' | 'done'>('idle')

  return (
    <section style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="csv-grid">
          {/* Left: copy */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#F0F9FF',
              border: '1px solid #BAE6FD',
              borderRadius: 20,
              padding: '4px 12px',
              marginBottom: 20,
            }}>
              <span style={{ fontSize: 11 }}>📁</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#0369A1', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                CSV Import
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 600,
              color: 'var(--fg)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Bring your existing financial data with you.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-secondary)', lineHeight: 1.65, marginBottom: 28 }}>
              Import your financial statement and let FinPilot organize your transactions automatically.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Drag & drop or click to upload CSV',
                'Automatic transaction parsing',
                'AI-powered category assignment',
                'Import results and summary',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 3.5-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--fg-secondary)', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: UI mockup */}
          <div>
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              overflow: 'hidden',
            }}>
              {/* Drop zone */}
              {state === 'idle' ? (
                <div
                  onClick={() => setState('done')}
                  style={{
                    margin: 20,
                    border: '2px dashed var(--border-strong)',
                    borderRadius: 12,
                    padding: '32px 20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background 0.2s',
                    background: '#fff',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'
                    ;(e.currentTarget as HTMLDivElement).style.background = 'var(--accent-light)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-strong)'
                    ;(e.currentTarget as HTMLDivElement).style.background = '#fff'
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>📊</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>
                    Drag & Drop CSV file
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginBottom: 14 }}>
                    or click to select from your computer
                  </div>
                  <div style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'var(--accent)',
                    color: '#fff',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                  }}>
                    Choose File
                  </div>
                </div>
              ) : (
                <div style={{ margin: 20 }}>
                  <div style={{
                    background: 'var(--green-light)',
                    border: '1px solid var(--green-border)',
                    borderRadius: 10,
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 14,
                  }}>
                    <span style={{ fontSize: 18 }}>✅</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)' }}>Transactions imported successfully</div>
                      <div style={{ fontSize: 11, color: 'var(--green)', opacity: 0.8 }}>AI categorization completed · 5 transactions</div>
                    </div>
                  </div>
                  <button onClick={() => setState('idle')} style={{
                    fontSize: 11, color: 'var(--fg-muted)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 10
                  }}>
                    ← Upload another file
                  </button>
                </div>
              )}

              {/* Table */}
              <div style={{ padding: '0 20px 20px' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Preview
                </div>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
                  {/* Header */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr 90px 100px',
                    padding: '10px 14px',
                    background: 'var(--bg)',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    {['Date', 'Description', 'Amount', 'Category'].map(h => (
                      <div key={h} style={{ fontSize: 10, fontWeight: 600, color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</div>
                    ))}
                  </div>
                  {/* Rows */}
                  {sampleRows.map((row, i) => (
                    <div key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '100px 1fr 90px 100px',
                      padding: '10px 14px',
                      borderBottom: i < sampleRows.length - 1 ? '1px solid #FAFAF7' : 'none',
                      fontSize: 12,
                    }}>
                      <span style={{ color: 'var(--fg-muted)', fontFamily: 'monospace', fontSize: 11 }}>{row.date}</span>
                      <span style={{ color: 'var(--fg)', fontWeight: 500 }}>{row.desc}</span>
                      <span style={{ color: row.category === 'Salary' ? 'var(--green)' : 'var(--fg)', fontWeight: 600 }}>{row.amount}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 600,
                        background: row.category === 'Salary' ? 'var(--green-light)' : 'var(--accent-light)',
                        color: row.category === 'Salary' ? 'var(--green)' : 'var(--accent)',
                        padding: '2px 7px', borderRadius: 10,
                        display: 'inline-block',
                      }}>
                        {row.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .csv-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
