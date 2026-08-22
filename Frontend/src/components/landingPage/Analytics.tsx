import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, AreaChart, Area
} from 'recharts'

const spendingTrend = [
  { month: 'Jan', spending: 38000, income: 75000 },
  { month: 'Feb', spending: 42000, income: 75000 },
  { month: 'Mar', spending: 36000, income: 75000 },
  { month: 'Apr', spending: 45000, income: 87000 },
  { month: 'May', spending: 41000, income: 75000 },
  { month: 'Jun', spending: 42300, income: 75000 },
]

const categoryBreakdown = [
  { name: 'Food', value: 8200, color: '#F59E0B' },
  { name: 'Shopping', value: 6400, color: '#1A5C38' },
  { name: 'Travel', value: 3100, color: '#1A5C38' },
  { name: 'Bills', value: 9800, color: '#1A5C38' },
  { name: 'Entertainment', value: 2800, color: '#EC4899' },
  { name: 'Health', value: 4200, color: '#16A34A' },
]

const savingsRate = [
  { month: 'Jan', rate: 38 },
  { month: 'Feb', rate: 34 },
  { month: 'Mar', rate: 42 },
  { month: 'Apr', rate: 29 },
  { month: 'May', rate: 39 },
  { month: 'Jun', rate: 43.6 },
]

const insights = [
  { label: 'Food spending', change: '+18%', positive: false, desc: 'vs last month' },
  { label: 'Shopping', change: '-9%', positive: true, desc: 'vs last month' },
  { label: 'Savings rate', change: '+12%', positive: true, desc: 'vs last month' },
]

const RADIAN = Math.PI / 180
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.08) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function Analytics() {
  const total = categoryBreakdown.reduce((s, c) => s + c.value, 0)

  return (
    <section id="analytics" style={{ padding: '96px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--accent)',
            textTransform: 'uppercase', marginBottom: 14,
          }}>
            Financial Analytics
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 500,
            fontFamily: "'Manrope', sans-serif",
            color: 'var(--fg)',
            letterSpacing: '-0.04em',
            marginBottom: 14,
            lineHeight: 1.1,
          }}>
            See the patterns behind your spending.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            FinPilot turns your transaction history into clear financial analytics so you can understand where your money is going and how your habits are changing.
          </p>
        </div>

        {/* Charts grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="analytics-grid">
          {/* Spending trend */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Monthly Spending Trend</div>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 20 }}>Jan – Jun 2026</div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={spendingTrend} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="spendGradA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1A5C38" stopOpacity={0.12}/>
                    <stop offset="95%" stopColor="#1A5C38" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#F5F4EF" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#A3A3A3' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#A3A3A3' }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v/1000).toFixed(0)}K`} width={44} />
                <Tooltip
                  contentStyle={{ fontSize: 12, border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px' }}
                  formatter={(v: unknown) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Spending']}
                />
                <Area type="monotone" dataKey="spending" stroke="#1A5C38" strokeWidth={2.5} fill="url(#spendGradA)" dot={{ r: 3, fill: '#1A5C38' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Income vs expense */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Income vs Expense</div>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 20 }}>Monthly comparison</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={spendingTrend} margin={{ top: 4, right: 4, left: 0, bottom: 0 }} barGap={3}>
                <CartesianGrid stroke="#F5F4EF" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#A3A3A3' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#A3A3A3' }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v/1000).toFixed(0)}K`} width={44} />
                <Tooltip
                  contentStyle={{ fontSize: 12, border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px' }}
                  formatter={(v: unknown) => [`₹${Number(v).toLocaleString('en-IN')}`]}
                />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="income" name="Income" fill="#16A34A" radius={[4, 4, 0, 0]} barSize={18} />
                <Bar dataKey="spending" name="Expense" fill="#1A5C38" radius={[4, 4, 0, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 20 }} className="analytics-grid-3">
          {/* Category breakdown */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Spending by Category</div>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 16 }}>June 2026</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <ResponsiveContainer width={140} height={140}>
                <PieChart>
                  <Pie
                    data={categoryBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={65}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomLabel}
                  >
                    {categoryBreakdown.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {categoryBreakdown.map(c => (
                  <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: 'var(--fg-secondary)', flex: 1 }}>{c.name}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg)' }}>₹{(c.value / 1000).toFixed(1)}K</span>
                    <span style={{ fontSize: 10, color: 'var(--fg-muted)' }}>{((c.value / total) * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Savings rate */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Savings Rate</div>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 16 }}>% of income saved</div>
            <div style={{ fontSize: 32, fontWeight: 600, color: 'var(--green)', letterSpacing: '-0.04em', marginBottom: 16 }}>43.6%</div>
            <ResponsiveContainer width="100%" height={110}>
              <LineChart data={savingsRate} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#F5F4EF" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#A3A3A3' }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[20, 50]} />
                <Tooltip
                  contentStyle={{ fontSize: 11, border: '1px solid var(--border)', borderRadius: 6, padding: '4px 8px' }}
                  formatter={(v: unknown) => [`${v}%`, 'Rate']}
                />
                <Line type="monotone" dataKey="rate" stroke="#16A34A" strokeWidth={2.5} dot={{ r: 3, fill: '#16A34A' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Key insights */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>Key Insights</div>
            <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginBottom: 20 }}>vs previous month</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {insights.map(ins => (
                <div key={ins.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  background: ins.positive ? 'var(--green-light)' : 'var(--red-light)',
                  borderRadius: 10,
                  border: `1px solid ${ins.positive ? 'var(--green-border)' : '#FECACA'}`,
                }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 1 }}>{ins.label}</div>
                    <div style={{ fontSize: 10, color: 'var(--fg-muted)' }}>{ins.desc}</div>
                  </div>
                  <span style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: ins.positive ? 'var(--green)' : 'var(--red)',
                    letterSpacing: '-0.02em',
                  }}>
                    {ins.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .analytics-grid { grid-template-columns: 1fr !important; }
          .analytics-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
