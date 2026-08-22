const insightCards = [
  {
    tag: 'Monthly Summary',
    tagColor: '#1A5C38',
    tagBg: 'var(--accent-light)',
    tagBorder: 'var(--accent-border)',
    text: 'You spent ₹42,300 this month, with food and shopping accounting for 38% of your total expenses.',
    icon: '📊',
  },
  {
    tag: 'Spending Insight',
    tagColor: '#D97706',
    tagBg: 'var(--yellow-light)',
    tagBorder: '#FDE68A',
    text: 'Your food spending increased by 18% compared to last month.',
    icon: '🍽️',
  },
  {
    tag: 'Savings Insight',
    tagColor: '#16A34A',
    tagBg: 'var(--green-light)',
    tagBorder: 'var(--green-border)',
    text: 'Your savings rate improved by 12% this month. At this pace, you could reach your bike goal 2 months earlier.',
    icon: '💰',
  },
]

export default function AIInsights() {
  return (
    <section id="ai-insights" style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="insights-grid">
          {/* Left: copy */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#F2FAF5',
              border: '1px solid #C2E0CE',
              borderRadius: 20,
              padding: '4px 12px',
              marginBottom: 20,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A5C38' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#1A5C38', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                AI Insights
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
              Your finances, explained.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-secondary)', lineHeight: 1.65, marginBottom: 28 }}>
              FinPilot analyzes your financial data and turns it into clear, personalized insights that are easy to understand.
            </p>

            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '14px 18px',
              marginBottom: 28,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                <circle cx="8" cy="8" r="7" stroke="var(--fg-muted)" strokeWidth="1.5"/>
                <path d="M8 5v3.5l2 2" stroke="var(--fg-muted)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--fg-secondary)' }}>AI explains your financial patterns.</strong> FinPilot's backend handles the actual financial calculations.
              </p>
            </div>

            <div style={{ display: 'flex', flex: 'column', flexDirection: 'column', gap: 12 }}>
              {[
                'Personalized monthly summaries',
                'Category-level spending analysis',
                'Savings rate tracking',
                'Budget performance insights',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: 'var(--fg-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: insight cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {insightCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '20px 22px',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
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
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{card.icon}</div>
                  <div>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: card.tagColor,
                      background: card.tagBg,
                      border: `1px solid ${card.tagBorder}`,
                      borderRadius: 10,
                      padding: '3px 9px',
                      display: 'inline-block',
                      marginBottom: 10,
                    }}>
                      {card.tag}
                    </span>
                    <p style={{ fontSize: 14, color: 'var(--fg)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* AI indicator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 16px',
              background: '#F2FAF5',
              border: '1px solid #C2E0CE',
              borderRadius: 10,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A5C38', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 12, color: '#1A5C38', fontWeight: 500 }}>
                AI-powered analysis · Updated automatically each month
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .insights-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
