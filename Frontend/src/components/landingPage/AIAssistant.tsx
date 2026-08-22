import { useState } from 'react'

const conversation = [
  { role: 'user', text: 'Where did I spend the most this month?' },
  { role: 'ai', text: 'Your highest spending category was Food at ₹8,200, followed by Shopping at ₹6,400. Together they account for 34.6% of your total monthly expenses.' },
  { role: 'user', text: 'How much more should I save to reach my bike goal?' },
  { role: 'ai', text: "You're currently saving ₹6,000 per month. Based on your goal timeline, you need approximately ₹4,000 more per month to stay on track for June 2027." },
  { role: 'user', text: 'Where can I cut expenses?' },
  { role: 'ai', text: 'Your biggest flexible spending areas are Shopping and Food. Reducing them by approximately ₹2,500 and ₹1,800 respectively could create meaningful additional savings each month.' },
]

const suggestions = [
  "Where am I overspending?",
  "How much did I spend on food?",
  "Can I reach my savings goal?",
  "Where can I save more?",
]

export default function AIAssistant() {
  const [input, setInput] = useState('')

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
            Ask questions about your finances.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Chat with FinPilot using your own financial context. Get answers based on your actual financial data.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Chat window */}
          <div style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,0.07)',
          }}>
            {/* Header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: '#FAFBFF',
            }}>
              <div style={{
                width: 36, height: 36,
                background: 'var(--accent)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 13L7 9L10 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="15" cy="6" r="2" fill="white"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>FinPilot Assistant</div>
                <div style={{ fontSize: 11, color: 'var(--fg-muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} />
                  Context-aware · Your financial data
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 16, maxHeight: 380, overflowY: 'auto' }}>
              {conversation.map((msg, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  gap: 10,
                  alignItems: 'flex-end',
                }}>
                  {msg.role === 'ai' && (
                    <div style={{
                      width: 28, height: 28,
                      background: 'var(--accent)',
                      borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 10L5 7L7.5 9L11 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div style={{
                    maxWidth: '78%',
                    padding: '11px 15px',
                    borderRadius: msg.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                    background: msg.role === 'user' ? 'var(--accent)' : 'var(--bg)',
                    color: msg.role === 'user' ? '#fff' : 'var(--fg)',
                    border: msg.role === 'ai' ? '1px solid var(--border)' : 'none',
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested prompts */}
            <div style={{ padding: '12px 20px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => setInput(s)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 20,
                    border: '1px solid var(--border)',
                    background: 'var(--bg)',
                    color: 'var(--fg-secondary)',
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.background = 'var(--accent-light)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--fg-secondary)'
                    e.currentTarget.style.background = 'var(--bg)'
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: '16px 20px',
              display: 'flex',
              gap: 10,
              alignItems: 'center',
            }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about your finances..."
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  border: '1px solid var(--border)',
                  borderRadius: 9,
                  fontSize: 14,
                  color: 'var(--fg)',
                  background: 'var(--bg)',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <button
                style={{
                  width: 38, height: 38,
                  borderRadius: 9,
                  background: input ? 'var(--accent)' : 'var(--bg)',
                  border: `1px solid ${input ? 'var(--accent)' : 'var(--border)'}`,
                  cursor: input ? 'pointer' : 'default',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke={input ? '#fff' : 'var(--fg-muted)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
