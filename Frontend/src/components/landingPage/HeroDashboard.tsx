import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts'

const spendingData = [
  { month: 'Jan', spending: 38000 },
  { month: 'Feb', spending: 42000 },
  { month: 'Mar', spending: 36000 },
  { month: 'Apr', spending: 45000 },
  { month: 'May', spending: 41000 },
  { month: 'Jun', spending: 42300 },
]

const incomeExpenseData = [
  { month: 'Apr', income: 75000, expense: 45000 },
  { month: 'May', income: 75000, expense: 41000 },
  { month: 'Jun', income: 75000, expense: 42300 },
]

const transactions = [
  { name: 'Zomato', category: 'Food', amount: -450, date: 'Jun 28', icon: '🍜' },
  { name: 'Salary Credit', category: 'Income', amount: 75000, date: 'Jun 25', icon: '💼' },
  { name: 'Amazon', category: 'Shopping', amount: -2300, date: 'Jun 24', icon: '📦' },
  { name: 'Petrol Pump', category: 'Travel', amount: -1000, date: 'Jun 23', icon: '⛽' },
  { name: 'Netflix', category: 'Entertainment', amount: -649, date: 'Jun 22', icon: '🎬' },
]

const budgets = [
  { category: 'Food', spent: 8200, limit: 10000, color: '#F59E0B' },
  { category: 'Shopping', spent: 5200, limit: 8000, color: '#7C3AED' },
  { category: 'Travel', spent: 2100, limit: 4000, color: '#1A5C38' },
]

const catColors: Record<string, string> = {
  Food: '#FEF3C7',
  Shopping: '#F2FAF5',
  Travel: '#DCFCE7',
  Entertainment: '#FFE4E6',
  Income: '#ECFDF5',
  Salary: '#ECFDF5',
}

function BudgetBar({ category, spent, limit, color }: { category: string; spent: number; limit: number; color: string }) {
  const pct = Math.round((spent / limit) * 100)
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, alignItems: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#18181A' }}>{category}</span>
        <span style={{ fontSize: 11, fontWeight: 600, color }}>
          ₹{spent.toLocaleString('en-IN')}
          <span style={{ fontWeight: 400, color: '#A3A3A3' }}> / {(limit / 1000).toFixed(0)}K</span>
        </span>
      </div>
      <div style={{ height: 5, background: '#F5F4EF', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          width: `${pct}%`, height: '100%',
          background: color,
          borderRadius: 3,
        }} />
      </div>
    </div>
  )
}

export default function HeroDashboard() {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E8E7E1',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(26,92,56,0.06), 0 12px 32px rgba(0,0,0,0.06)',
      maxWidth: 1040,
      margin: '0 auto',
    }}>
      {/* Browser chrome */}
      <div style={{
        height: 44,
        background: '#F4F4F0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 18px',
        gap: 12,
        borderBottom: '1px solid #E8E7E1',
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
        </div>
        <div style={{
          flex: 1, maxWidth: 320, margin: '0 auto',
          background: '#fff',
          border: '1px solid #E8E7E1',
          borderRadius: 6,
          height: 26,
          display: 'flex', alignItems: 'center',
          padding: '0 10px', gap: 7,
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect x="1" y="1" width="8" height="8" rx="2" stroke="#A3A3A3" strokeWidth="1.2"/>
            <path d="M3.5 5h3" stroke="#A3A3A3" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: 10, color: '#A3A3A3', letterSpacing: '0.01em' }}>app.finpilot.com/dashboard</span>
        </div>
      </div>

      {/* App shell */}
      <div style={{ display: 'flex', height: 560 }}>
        {/* Sidebar */}
        <div style={{
          width: 192,
          background: '#18181A',
          padding: '22px 0',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Logo */}
          <div style={{ padding: '0 20px 24px', display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: '#1A5C38',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 10L5 7L8 9L12 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="4" r="1.5" fill="white"/>
              </svg>
            </div>
            <span style={{ fontWeight: 600, fontSize: 13, color: '#fff', letterSpacing: '-0.02em' }}>FinPilot</span>
          </div>

          {/* Nav items */}
          <div style={{ flex: 1 }}>
            {[
              { label: 'Dashboard', active: true, icon: 'M2 5h10M2 8h10M2 11h6' },
              { label: 'Transactions', active: false, icon: 'M2 4h10M2 7h10M2 10h10' },
              { label: 'Budget', active: false, icon: 'M3 12V7l4-5 4 5v5' },
              { label: 'Goals', active: false, icon: 'M7 2a5 5 0 100 10A5 5 0 007 2zm0 3v2l2 1' },
              { label: 'Analytics', active: false, icon: 'M2 11l3-4 3 2 4-6' },
              { label: 'AI Insights', active: false, icon: 'M7 2l1.5 3.5L12 7l-3.5 1.5L7 12l-1.5-3.5L2 7l3.5-1.5z' },
            ].map(item => (
              <div key={item.label} style={{
                padding: '9px 20px',
                display: 'flex', alignItems: 'center', gap: 10,
                background: item.active ? 'rgba(26,92,56,0.15)' : 'transparent',
                borderLeft: item.active ? '2px solid #16A34A' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d={item.icon} stroke={item.active ? '#86EFAC' : '#5A5A5A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 12, fontWeight: item.active ? 600 : 400, color: item.active ? '#C2E0CE' : '#5A5A5A' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom user */}
          <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #1A5C38, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', fontWeight: 700 }}>
              R
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#D4D3CC' }}>Rahul M.</div>
              <div style={{ fontSize: 10, color: '#5A5A5A' }}>June 2026</div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflow: 'auto', background: '#FAFAF7', display: 'flex', flexDirection: 'column' }}>
          {/* Top bar */}
          <div style={{
            padding: '18px 24px 0',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexShrink: 0,
          }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#18181A', letterSpacing: '-0.02em' }}>Good morning, Rahul 👋</div>
              <div style={{ fontSize: 11, color: '#A3A3A3', marginTop: 2 }}>Here's your financial overview for June 2026</div>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#1A5C38',
              borderRadius: 8, padding: '7px 14px',
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2v8" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>Add Transaction</span>
            </div>
          </div>

          <div style={{ padding: '16px 24px', flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { label: 'Total Income', value: '₹75,000', change: '+0%', color: '#059669', bg: '#ECFDF5', border: '#A7F3D0', up: true },
                { label: 'Total Expenses', value: '₹42,300', change: '+3%', color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', up: false },
                { label: 'Net Savings', value: '₹32,700', change: '+12%', color: '#1A5C38', bg: '#F2FAF5', border: '#C2E0CE', up: true },
                { label: 'Savings Rate', value: '43.6%', change: '↑ from 38%', color: '#1A5C38', bg: '#F2FAF5', border: '#C2E0CE', up: true },
              ].map(s => (
                <div key={s.label} style={{
                  background: '#fff',
                  border: '1px solid #E8E7E1',
                  borderRadius: 12,
                  padding: '14px 16px',
                }}>
                  <div style={{ fontSize: 10, color: '#A3A3A3', fontWeight: 500, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: '#18181A', letterSpacing: '-0.03em', marginBottom: 6 }}>{s.value}</div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    background: s.bg, border: `1px solid ${s.border}`,
                    borderRadius: 20, padding: '2px 7px',
                  }}>
                    <span style={{ fontSize: 9, color: s.color, fontWeight: 700 }}>
                      {s.up ? '▲' : '▼'} {s.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 12 }}>
              {/* Spending trend */}
              <div style={{ background: '#fff', border: '1px solid #E8E7E1', borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#18181A' }}>Monthly Spending</div>
                    <div style={{ fontSize: 10, color: '#A3A3A3', marginTop: 2 }}>Jan – Jun 2026</div>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: '#18181A', letterSpacing: '-0.03em' }}>₹42.3K</div>
                </div>
                <ResponsiveContainer width="100%" height={100}>
                  <AreaChart data={spendingData} margin={{ top: 4, right: 2, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="heroGradForest" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1A5C38" stopOpacity={0.15}/>
                        <stop offset="100%" stopColor="#1A5C38" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#F3F3FA" strokeDasharray="2 2" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#A3A3A3' }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{ fontSize: 11, border: '1px solid #E8E7E1', borderRadius: 7, padding: '5px 10px', background: '#fff' }}
                      formatter={(v: unknown) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Spending']}
                    />
                    <Area type="monotone" dataKey="spending" stroke="#1A5C38" strokeWidth={2} fill="url(#heroGradForest)" dot={false} activeDot={{ r: 3, fill: '#1A5C38' }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Income vs expense */}
              <div style={{ background: '#fff', border: '1px solid #E8E7E1', borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#18181A', marginBottom: 4 }}>Income vs Expense</div>
                <div style={{ fontSize: 10, color: '#A3A3A3', marginBottom: 14 }}>Last 3 months</div>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={incomeExpenseData} margin={{ top: 4, right: 2, left: 0, bottom: 0 }} barGap={3}>
                    <CartesianGrid stroke="#F3F3FA" strokeDasharray="2 2" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#A3A3A3' }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{ fontSize: 11, border: '1px solid #E8E7E1', borderRadius: 7, padding: '5px 10px' }}
                      formatter={(v: unknown) => [`₹${Number(v).toLocaleString('en-IN')}`]}
                    />
                    <Bar dataKey="income" fill="#059669" radius={[3, 3, 0, 0]} barSize={14} />
                    <Bar dataKey="expense" fill="#1A5C38" radius={[3, 3, 0, 0]} barSize={14} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12 }}>
              {/* Recent transactions */}
              <div style={{ background: '#fff', border: '1px solid #E8E7E1', borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#18181A' }}>Recent Transactions</div>
                  <span style={{ fontSize: 10, color: '#1A5C38', fontWeight: 600, cursor: 'pointer' }}>View all →</span>
                </div>
                {transactions.map((t, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: i < transactions.length - 1 ? '1px solid #F5F5FA' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: 8,
                        background: catColors[t.category] || '#F5F5FA',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13,
                      }}>
                        {t.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#18181A' }}>{t.name}</div>
                        <div style={{ fontSize: 10, color: '#A3A3A3' }}>{t.category} · {t.date}</div>
                      </div>
                    </div>
                    <span style={{
                      fontSize: 12, fontWeight: 600,
                      color: t.amount > 0 ? '#059669' : '#18181A',
                    }}>
                      {t.amount > 0 ? '+' : ''}₹{Math.abs(t.amount).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Budget */}
              <div style={{ background: '#fff', border: '1px solid #E8E7E1', borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#18181A', marginBottom: 4 }}>Budget Progress</div>
                <div style={{ fontSize: 10, color: '#A3A3A3', marginBottom: 14 }}>June 2026</div>
                {budgets.map(b => <BudgetBar key={b.category} {...b} />)}
                <div style={{
                  marginTop: 6,
                  padding: '8px 12px',
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  borderRadius: 8,
                  fontSize: 10, color: '#059669', fontWeight: 600,
                }}>
                  ✓ Savings rate 43.6% — On track!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
