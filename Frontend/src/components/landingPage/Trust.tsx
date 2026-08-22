const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="8" cy="15" r="1.5" fill="currentColor"/>
        <rect x="12" y="14" width="5" height="2" rx="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Your Data',
    desc: 'Your financial information powers your personalized dashboards and insights. Your data stays yours.',
    color: 'var(--accent)',
    bg: 'var(--accent-light)',
    border: 'var(--accent-border)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v5c0 5 4.5 9 8 10 3.5-1 8-5 8-10V7l-8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Deterministic Finance',
    desc: 'Financial calculations and planning are handled by FinPilot\'s financial engine — not estimated by AI.',
    color: 'var(--green)',
    bg: 'var(--green-light)',
    border: 'var(--green-border)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M18 11l2 2-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI as an Assistant',
    desc: 'AI explains your data and patterns instead of being the source of financial calculations. Clear boundary, clear trust.',
    color: '#1A5C38',
    bg: '#F2FAF5',
    border: '#C2E0CE',
  },
]

export default function Trust() {
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
            Built around your financial data.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="trust-grid">
          {cards.map(card => (
            <div
              key={card.title}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '32px 28px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.07)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 52, height: 52,
                borderRadius: 14,
                background: card.bg,
                border: `1px solid ${card.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: card.color,
                marginBottom: 20,
              }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg)', marginBottom: 12, letterSpacing: '-0.02em' }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--fg-secondary)', lineHeight: 1.65, margin: 0 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
