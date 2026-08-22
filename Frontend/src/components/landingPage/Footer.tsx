export default function Footer() {
  const col = (title: string, links: string[]) => (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(link => (
          <a key={link} href="#" style={{
            fontSize: 14,
            color: 'var(--fg-muted)',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-muted)')}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  )

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: '#fff', padding: '56px 24px 36px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top: logo + nav columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 40,
          marginBottom: 48,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32,
                background: 'var(--accent)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 13L7 9L10 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="15" cy="6" r="1.5" fill="white"/>
                </svg>
              </div>
              <span style={{ fontWeight: 600, fontSize: 17, color: 'var(--fg)', letterSpacing: '-0.02em' }}>FinPilot</span>
            </a>
            <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: 220, marginBottom: 20 }}>
              Personal finance management with intelligent insights.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                {
                  label: 'GitHub',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5A7.5 7.5 0 001.5 9c0 3.314 2.15 6.124 5.13 7.12.375.07.51-.162.51-.36 0-.178-.007-.77-.01-1.397-2.085.453-2.526-.895-2.526-.895-.34-.865-.83-1.095-.83-1.095-.679-.464.052-.455.052-.455.75.053 1.145.77 1.145.77.666 1.14 1.747.811 2.174.62.067-.48.261-.811.475-.997-1.664-.19-3.413-.832-3.413-3.7 0-.818.292-1.487.771-2.01-.077-.19-.334-.951.073-1.983 0 0 .63-.201 2.062.768A7.17 7.17 0 019 5.826c.637.003 1.279.086 1.878.252 1.43-.97 2.058-.768 2.058-.768.41 1.032.152 1.793.075 1.983.48.523.77 1.192.77 2.01 0 2.876-1.752 3.508-3.42 3.694.269.231.508.689.508 1.388 0 1.002-.009 1.81-.009 2.056 0 .2.134.434.514.36A7.502 7.502 0 0016.5 9 7.5 7.5 0 009 1.5z" fill="currentColor"/>
                    </svg>
                  )
                },
                {
                  label: 'LinkedIn',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 7.5v5M5 5.5v.5M8 12.5v-3a1.5 1.5 0 013 0v3M8 7.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )
                }
              ].map(s => (
                <a key={s.label} href="#" style={{
                  width: 34, height: 34,
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--fg-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.15s, border-color 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--fg)'
                  e.currentTarget.style.borderColor = 'var(--fg-muted)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--fg-muted)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {col('Product', ['Features', 'Analytics', 'AI Insights', 'Smart Savings', 'Goals'])}
          {col('Company', ['About', 'Contact'])}
          {col('Resources', ['Documentation', 'Privacy', 'Terms'])}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{ fontSize: 13, color: 'var(--fg-muted)' }}>
            © 2026 FinPilot. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a key={link} href="#" style={{
                fontSize: 13, color: 'var(--fg-muted)', textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-muted)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
