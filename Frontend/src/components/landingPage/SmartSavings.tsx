import { useState } from 'react'

const plan = [
  { category: 'Food', icon: '🍽️', reduce: 1800, color: '#F59E0B' },
  { category: 'Shopping', icon: '🛍️', reduce: 2500, color: '#1A5C38' },
  { category: 'Travel', icon: '✈️', reduce: 1000, color: '#1A5C38' },
  { category: 'Entertainment', icon: '🎬', reduce: 700, color: '#EC4899' },
]

export default function SmartSavings() {
  const [target, setTarget] = useState(6000)
  const total = plan.reduce((s, p) => s + p.reduce, 0)

  return (
    <section id="smart-savings" style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="savings-grid">
          {/* Left: copy */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'var(--green-light)',
              border: '1px solid var(--green-border)',
              borderRadius: 20,
              padding: '4px 12px',
              marginBottom: 20,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Smart Savings
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
              Want to save more? Let FinPilot build the plan.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-secondary)', lineHeight: 1.65, marginBottom: 28 }}>
              Tell FinPilot how much additional money you want to save. The system analyzes your spending and identifies realistic areas where you can reduce expenses.
            </p>

            {/* Input */}
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '18px 20px',
              marginBottom: 28,
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Monthly Savings Goal
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 20, fontWeight: 600, color: 'var(--fg-muted)' }}>₹</span>
                <input
                  type="number"
                  value={target}
                  onChange={e => setTarget(Number(e.target.value))}
                  style={{
                    flex: 1,
                    fontSize: 24,
                    fontWeight: 600,
                    color: 'var(--fg)',
                    border: 'none',
                    background: 'transparent',
                    outline: 'none',
                    fontFamily: 'inherit',
                    letterSpacing: '-0.03em',
                  }}
                />
                <span style={{
                  fontSize: 12,
                  color: 'var(--fg-muted)',
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  padding: '4px 10px',
                  fontWeight: 500,
                }}>
                  / month
                </span>
              </div>
            </div>

            <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.55 }}>
              Recommendations are calculated from your spending patterns and then explained by AI.
            </p>
          </div>

          {/* Right: plan output */}
          <div>
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              overflow: 'hidden',
            }}>
              {/* Header */}
              <div style={{
                padding: '16px 20px',
                borderBottom: '1px solid var(--border)',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>Generated Savings Plan</div>
                <span style={{
                  fontSize: 11,
                  color: 'var(--green)',
                  background: 'var(--green-light)',
                  border: '1px solid var(--green-border)',
                  borderRadius: 10,
                  padding: '3px 10px',
                  fontWeight: 600,
                }}>
                  Ready
                </span>
              </div>

              {/* Plan rows */}
              <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {plan.map(item => {
                  const pct = Math.round((item.reduce / total) * 100)
                  return (
                    <div key={item.category} style={{
                      background: '#fff',
                      border: '1px solid var(--border)',
                      borderRadius: 10,
                      padding: '14px 16px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontSize: 18 }}>{item.icon}</span>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{item.category}</span>
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.02em' }}>
                          −₹{item.reduce.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div style={{ height: 4, background: 'var(--bg)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{
                          width: `${pct}%`,
                          height: '100%',
                          background: item.color,
                          borderRadius: 2,
                        }} />
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--fg-muted)', marginTop: 4 }}>{pct}% of plan</div>
                    </div>
                  )
                })}
              </div>

              {/* Total */}
              <div style={{
                margin: '0 20px 20px',
                background: 'var(--accent)',
                borderRadius: 12,
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                    Total Additional Savings
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 600, color: '#fff', letterSpacing: '-0.04em' }}>
                    ₹{total.toLocaleString('en-IN')}
                  </div>
                </div>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22,
                }}>
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .savings-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
