const steps = [
  { icon: '↕', label: 'Transactions', desc: 'Log income & expenses', color: '#1A5C38', bg: 'var(--accent-light)', border: 'var(--accent-border)' },
  { icon: '◎', label: 'Financial Data', desc: 'Organized & categorized', color: '#0284C7', bg: '#F0F9FF', border: '#BAE6FD' },
  { icon: '◉', label: 'Analytics', desc: 'Charts & trends', color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  { icon: '◈', label: 'Budgets & Goals', desc: 'Limits & targets', color: '#D97706', bg: 'var(--yellow-light)', border: '#FDE68A' },
  { icon: '✦', label: 'AI Insights', desc: 'Personalized explanations', color: '#EC4899', bg: '#FDF2F8', border: '#FBCFE8' },
  { icon: '★', label: 'Smart Savings', desc: 'Actionable reduction plans', color: '#16A34A', bg: 'var(--green-light)', border: 'var(--green-border)' },
  { icon: '▲', label: 'Better Decisions', desc: 'Your money, your goals', color: '#18181A', bg: '#FAFAF7', border: '#E8E7E1' },
]

export default function Overview() {
  return (
    <section style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 500,
            fontFamily: "'Manrope', sans-serif",
            color: 'var(--fg)',
            letterSpacing: '-0.04em',
            marginBottom: 14,
            lineHeight: 1.1,
          }}>
            One platform. Your complete financial picture.
          </h2>
        </div>

        {/* Desktop: horizontal flow */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, overflowX: 'auto', paddingBottom: 8 }}>
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {/* Card */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px 16px',
                width: 148,
              }}>
                <div style={{
                  width: 52, height: 52,
                  borderRadius: 14,
                  background: step.bg,
                  border: `1px solid ${step.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                  color: step.color,
                  marginBottom: 12,
                  fontWeight: 600,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
                >
                  {step.icon}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 5 }}>{step.label}</div>
                <div style={{ fontSize: 11, color: 'var(--fg-muted)', lineHeight: 1.4 }}>{step.desc}</div>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div style={{ flexShrink: 0, padding: '0 4px', color: 'var(--border-strong)', fontSize: 16 }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Journey tagline */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            {['Track', 'Understand', 'Plan', 'Save', 'Improve'].map((word, i, arr) => (
              <>
                <span key={word} style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: ['var(--accent)', '#1A5C38', '#D97706', 'var(--green)', 'var(--fg)'][i],
                  letterSpacing: '-0.02em',
                }}>
                  {word}
                </span>
                {i < arr.length - 1 && (
                  <span key={`sep-${i}`} style={{ color: 'var(--border-strong)', fontSize: 14 }}>→</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
