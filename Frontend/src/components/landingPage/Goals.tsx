import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts'

const goals = [
  {
    name: 'Buy Bike',
    emoji: '🏍️',
    target: 120000,
    saved: 72000,
    pct: 60,
    deadline: 'June 2027',
    monthly: [
      { month: 'Jan', saved: 8000 },
      { month: 'Feb', saved: 10000 },
      { month: 'Mar', saved: 9000 },
      { month: 'Apr', saved: 11000 },
      { month: 'May', saved: 12000 },
      { month: 'Jun', saved: 10000 },
    ],
  },
  {
    name: 'Buy Laptop',
    emoji: '💻',
    target: 80000,
    saved: 50000,
    pct: 62.5,
    deadline: 'February 2027',
    monthly: [
      { month: 'Jan', saved: 7000 },
      { month: 'Feb', saved: 8000 },
      { month: 'Mar', saved: 9000 },
      { month: 'Apr', saved: 8500 },
      { month: 'May', saved: 9000 },
      { month: 'Jun', saved: 8500 },
    ],
  },
  {
    name: 'Emergency Fund',
    emoji: '🛡️',
    target: 200000,
    saved: 80000,
    pct: 40,
    deadline: 'December 2027',
    monthly: [
      { month: 'Jan', saved: 12000 },
      { month: 'Feb', saved: 13000 },
      { month: 'Mar', saved: 14000 },
      { month: 'Apr', saved: 13000 },
      { month: 'May', saved: 14000 },
      { month: 'Jun', saved: 14000 },
    ],
  },
]

function GoalCard({ goal }: { goal: typeof goals[0] }) {
  const remaining = goal.target - goal.saved
  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: '24px',
      transition: 'box-shadow 0.2s, transform 0.2s',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
      ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
      ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
    }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 28 }}>{goal.emoji}</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.01em' }}>{goal.name}</div>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginTop: 2 }}>Target: {goal.deadline}</div>
          </div>
        </div>
        <div style={{
          fontSize: 18,
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '-0.03em',
        }}>
          {goal.pct}%
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 7, background: 'var(--bg)', borderRadius: 4, overflow: 'hidden', marginBottom: 12 }}>
        <div style={{
          width: `${goal.pct}%`,
          height: '100%',
          background: 'linear-gradient(90deg, var(--accent), #1A5C38)',
          borderRadius: 4,
        }} />
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Target', value: `₹${(goal.target / 1000).toFixed(0)}K` },
          { label: 'Saved', value: `₹${(goal.saved / 1000).toFixed(0)}K`, color: 'var(--green)' },
          { label: 'Remaining', value: `₹${(remaining / 1000).toFixed(0)}K`, color: 'var(--fg-secondary)' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center', background: 'var(--bg)', borderRadius: 8, padding: '10px 8px' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: s.color || 'var(--fg)' }}>{s.value}</div>
            <div style={{ fontSize: 10, color: 'var(--fg-muted)', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Monthly chart */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Monthly Progress
        </div>
        <ResponsiveContainer width="100%" height={80}>
          <BarChart data={goal.monthly} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#F5F4EF" strokeDasharray="2 2" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#A3A3A3' }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ fontSize: 11, border: '1px solid var(--border)', borderRadius: 6, padding: '4px 8px' }}
              formatter={(v: unknown) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Saved']}
            />
            <Bar dataKey="saved" fill="var(--accent)" radius={[3, 3, 0, 0]} barSize={20} opacity={0.85} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default function Goals() {
  return (
    <section id="goals" style={{ padding: '96px 24px', background: '#fff' }}>
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
            Turn financial goals into a plan.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-secondary)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            Set a target, choose a deadline, and track your progress toward the things you actually want to achieve.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {goals.map(g => <GoalCard key={g.name} goal={g} />)}
        </div>
      </div>
    </section>
  )
}
