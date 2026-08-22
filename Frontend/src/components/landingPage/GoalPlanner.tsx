import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts'

const projectionData = [
  { month: 'Jul 26', saved: 78000, target: 120000, projected: 78000 },
  { month: 'Aug 26', saved: null, target: 120000, projected: 88000 },
  { month: 'Sep 26', saved: null, target: 120000, projected: 98000 },
  { month: 'Oct 26', saved: null, target: 120000, projected: 108000 },
  { month: 'Nov 26', saved: null, target: 120000, projected: 118000 },
  { month: 'Dec 26', saved: null, target: 120000, projected: 120000 },
]

const reductions = [
  { category: 'Food', icon: '🍽️', amount: 1800 },
  { category: 'Shopping', icon: '🛍️', amount: 1500 },
  { category: 'Entertainment', icon: '🎬', amount: 700 },
]

export default function GoalPlanner() {
  return (
    <section style={{ padding: '96px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 500,
            fontFamily: "'Manrope', sans-serif",
            color: 'var(--fg)',
            letterSpacing: '-0.04em',
            marginBottom: 14,
            lineHeight: 1.1,
          }}>
            Know exactly what it takes to reach your goal.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            FinPilot calculates the monthly savings required to reach your target and identifies the gap between your current savings and your goal.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 24, alignItems: 'start' }} className="planner-grid">
          {/* Left: stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Goal card */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 30 }}>🏍️</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)' }}>Buy Bike</div>
                  <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Goal Achievement Plan</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                {[
                  { label: 'Target Amount', value: '₹1,20,000', color: 'var(--fg)' },
                  { label: 'Timeline', value: '12 months', color: 'var(--fg)' },
                  { label: 'Required Monthly', value: '₹10,000', color: 'var(--accent)' },
                  { label: 'Current Savings', value: '₹6,000', color: 'var(--fg-secondary)' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'var(--bg)', borderRadius: 10, padding: '12px 14px' }}>
                    <div style={{ fontSize: 10, color: 'var(--fg-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{s.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: s.color, letterSpacing: '-0.02em' }}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Monthly gap */}
              <div style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: 10,
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--red)', fontWeight: 600, marginBottom: 3 }}>Monthly Gap</div>
                  <div style={{ fontSize: 11, color: '#EF4444', opacity: 0.8 }}>Additional savings needed</div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--red)', letterSpacing: '-0.03em' }}>₹4,000</div>
              </div>
            </div>

            {/* Recommended reductions */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 22px' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Recommended Reductions</div>
              <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 16 }}>To close the ₹4,000 gap</div>
              {reductions.map(r => (
                <div key={r.category} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #FAFAF7',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 16 }}>{r.icon}</span>
                    <span style={{ fontSize: 13, color: 'var(--fg-secondary)', fontWeight: 500 }}>{r.category}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>
                    −₹{r.amount.toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: 12, marginTop: 4,
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>Total</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--green)' }}>
                  ₹{reductions.reduce((s, r) => s + r.amount, 0).toLocaleString('en-IN')} ✓
                </span>
              </div>
            </div>
          </div>

          {/* Right: projection chart */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '24px' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Goal Completion Projection</div>
            <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginBottom: 24 }}>With recommended adjustments · reaching ₹1,20,000 by Dec 2026</div>

            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={projectionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="projGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1A5C38" stopOpacity={0.12}/>
                    <stop offset="95%" stopColor="#1A5C38" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#F5F4EF" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#A3A3A3' }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fontSize: 10, fill: '#A3A3A3' }}
                  axisLine={false} tickLine={false}
                  tickFormatter={v => `₹${(v/1000).toFixed(0)}K`}
                  width={50}
                />
                <Tooltip
                  contentStyle={{ fontSize: 12, border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px' }}
                  formatter={(v: unknown) => [`₹${Number(v).toLocaleString('en-IN')}`]}
                />
                <ReferenceLine y={120000} stroke="var(--green)" strokeDasharray="4 4" label={{ value: 'Target ₹1.2L', fill: 'var(--green)', fontSize: 11 }} />
                <Area
                  type="monotone"
                  dataKey="projected"
                  name="Projected Savings"
                  stroke="#1A5C38"
                  strokeWidth={2.5}
                  fill="url(#projGrad)"
                  strokeDasharray="6 3"
                  dot={{ r: 3, fill: '#1A5C38' }}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div style={{
              marginTop: 20,
              padding: '12px 16px',
              background: 'var(--green-light)',
              border: '1px solid var(--green-border)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <span style={{ fontSize: 16 }}>🎯</span>
              <p style={{ fontSize: 13, color: 'var(--green)', margin: 0, fontWeight: 500 }}>
                On track to reach your goal by December 2026 — 6 months ahead of the original timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .planner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
