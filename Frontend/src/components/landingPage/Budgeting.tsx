const budgets = [
  { category: 'Food', spent: 4300, limit: 5000, icon: '🍽️', pct: 86 },
  { category: 'Shopping', spent: 5200, limit: 8000, icon: '🛍️', pct: 65 },
  { category: 'Travel', spent: 2100, limit: 4000, icon: '✈️', pct: 52 },
  { category: 'Bills', spent: 3200, limit: 3500, icon: '📄', pct: 91 },
  { category: 'Entertainment', spent: 900, limit: 2000, icon: '🎬', pct: 45 },
  { category: 'Health', spent: 1400, limit: 3000, icon: '💊', pct: 47 },
]

function BudgetCard({ category, spent, limit, pct, icon }: { category: string; spent: number; limit: number; pct: number; icon: string }) {
  const barColor = pct >= 90 ? 'var(--red)' : pct >= 80 ? 'var(--yellow)' : 'var(--accent)'
  const alertBadge = pct >= 100
    ? { text: 'Over budget', bg: 'var(--red-light)', color: 'var(--red)', border: '#FECACA' }
    : pct >= 90
    ? { text: '90% used', bg: '#FFF7ED', color: '#C2410C', border: '#FED7AA' }
    : pct >= 80
    ? { text: '80% used', bg: 'var(--yellow-light)', color: 'var(--yellow)', border: '#FDE68A' }
    : null

  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '18px 20px',
      transition: 'box-shadow 0.2s, transform 0.2s',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.07)'
      ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
      ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
    }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
            {icon}
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{category}</div>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Budget: ₹{limit.toLocaleString('en-IN')}</div>
          </div>
        </div>
        {alertBadge && (
          <span style={{
            fontSize: 10,
            fontWeight: 600,
            background: alertBadge.bg,
            color: alertBadge.color,
            border: `1px solid ${alertBadge.border}`,
            borderRadius: 12,
            padding: '3px 9px',
          }}>
            {alertBadge.text}
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div style={{ height: 6, background: 'var(--bg)', borderRadius: 3, overflow: 'hidden', marginBottom: 10 }}>
        <div style={{
          width: `${Math.min(pct, 100)}%`,
          height: '100%',
          background: barColor,
          borderRadius: 3,
          transition: 'width 0.8s ease',
        }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)' }}>
          ₹{spent.toLocaleString('en-IN')} <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>spent</span>
        </span>
        <span style={{ fontSize: 13, fontWeight: 600, color: barColor }}>{pct}%</span>
      </div>

      <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginTop: 4 }}>
        ₹{(limit - spent).toLocaleString('en-IN')} remaining
      </div>
    </div>
  )
}

export default function Budgeting() {
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
            Stop guessing. Start budgeting.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-secondary)', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            Set monthly spending limits for the categories that matter and see how your actual spending compares to your plan.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          marginBottom: 32,
        }}>
          {budgets.map(b => <BudgetCard key={b.category} {...b} />)}
        </div>

        {/* Callout */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--accent-border)',
          borderRadius: 12,
          padding: '20px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          maxWidth: 560,
          margin: '0 auto',
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: 'var(--accent-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v6l4 2" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="7" stroke="var(--accent)" strokeWidth="1.8"/>
            </svg>
          </div>
          <p style={{ fontSize: 14, color: 'var(--fg-secondary)', margin: 0, lineHeight: 1.5 }}>
            Know when you're approaching your limit — <strong style={{ color: 'var(--fg)' }}>before you overspend.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
