const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 7h16M3 11h16M3 15h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Track Every Transaction',
    desc: 'Keep your income and expenses organized with categories, search, filters, and transaction history.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="14" width="4" height="5" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="9" y="10" width="4" height="9" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="15" y="6" width="4" height="13" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Build Smarter Budgets',
    desc: 'Set category-based spending limits and see exactly how much of your budget you\'ve used.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Plan Your Goals',
    desc: 'Set savings targets, track progress, and understand how much you need to save each month.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 16L8 11L12 14L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Understand Your Spending',
    desc: 'Turn your financial data into useful trends, breakdowns, and savings metrics.',
  },
]

export default function ValueProp() {
  return (
    <section id="features" style={{ padding: '96px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 500,
            fontFamily: "'Manrope', sans-serif",
            color: 'var(--fg)',
            letterSpacing: '-0.04em',
            marginBottom: 14,
            lineHeight: 1.1,
          }}>
            Everything you need to understand your finances.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-secondary)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            FinPilot brings your everyday financial decisions into one simple workspace.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '28px 26px',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)'
                e.currentTarget.style.borderColor = 'var(--accent-border)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                background: 'var(--accent-light)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: 18,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg)', marginBottom: 10, letterSpacing: '-0.02em' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--fg-secondary)', lineHeight: 1.6, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
