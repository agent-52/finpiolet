export default function MonthlySummary() {
  const stats = [
    { label: 'Monthly Income', value: '₹75,000', icon: '↓', color: 'var(--green)', bg: 'var(--green-light)', border: 'var(--green-border)' },
    { label: 'Monthly Expenses', value: '₹42,300', icon: '↑', color: 'var(--red)', bg: 'var(--red-light)', border: '#FECACA' },
    { label: 'Net Savings', value: '₹32,700', icon: '★', color: 'var(--accent)', bg: 'var(--accent-light)', border: 'var(--accent-border)' },
    { label: 'Savings Rate', value: '43.6%', icon: '%', color: '#1A5C38', bg: '#F2FAF5', border: '#C2E0CE' },
  ]

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
            Your month, summarized automatically.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-secondary)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            At the end of each month, FinPilot generates a personalized summary of your financial activity.
          </p>
        </div>

        {/* Monthly report */}
        <div style={{
          maxWidth: 760,
          margin: '0 auto',
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
        }}>
          {/* Report header */}
          <div style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg)',
          }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.02em' }}>
                June 2026 Financial Summary
              </div>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 3 }}>Generated automatically · Jul 1, 2026</div>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'var(--accent-light)',
              border: '1px solid var(--accent-border)',
              borderRadius: 10,
              padding: '6px 12px',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)' }}>Verified</span>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderBottom: '1px solid var(--border)' }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding: '24px 20px',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 9,
                  background: s.bg,
                  border: `1px solid ${s.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 600, color: s.color,
                  margin: '0 auto 12px',
                }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: s.color, letterSpacing: '-0.03em', marginBottom: 4 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: 'var(--fg-muted)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* AI summary */}
          <div style={{ padding: '24px 28px' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 36, height: 36,
                background: '#F2FAF5',
                border: '1px solid #C2E0CE',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12L6 8L9 11L14 5" stroke="#1A5C38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="14" cy="5" r="1.5" fill="#1A5C38"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#1A5C38', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                  AI Summary
                </div>
                <p style={{ fontSize: 14, color: 'var(--fg-secondary)', lineHeight: 1.65, margin: 0 }}>
                  This month your spending remained below your previous three-month average. Food spending increased slightly, while shopping expenses decreased. Your overall savings rate improved compared to last month, putting you in a strong position to reach your mid-year savings goal.
                </p>
              </div>
            </div>
          </div>

          {/* Breakdown bar */}
          <div style={{ padding: '0 28px 24px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Expense Breakdown
            </div>
            <div style={{ height: 8, borderRadius: 4, overflow: 'hidden', display: 'flex', gap: 1 }}>
              {[
                { pct: 29, color: '#F59E0B' },
                { pct: 23, color: '#1A5C38' },
                { pct: 11, color: '#1A5C38' },
                { pct: 10, color: '#EC4899' },
                { pct: 15, color: '#1A5C38' },
                { pct: 12, color: '#16A34A' },
              ].map((s, i) => (
                <div key={i} style={{ flex: s.pct, background: s.color, height: '100%' }} />
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginTop: 10 }}>
              {['Food', 'Shopping', 'Travel', 'Entertainment', 'Bills', 'Health'].map((cat, i) => (
                <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: ['#F59E0B','#1A5C38','#1A5C38','#EC4899','#1A5C38','#16A34A'][i] }} />
                  <span style={{ fontSize: 11, color: 'var(--fg-muted)' }}>{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
