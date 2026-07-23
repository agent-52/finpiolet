import React from 'react';
import '../index.css';
import '../styles/analytics.css';

export default function AnalyticsPage() {
  return (
    <div className="analytics-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M17 7h4v4" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm text-black">FinPilot</div>
              <div className="text-xs text-gray-400" style={{ fontSize: '10px' }}>AI Finance</div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <a href="#dashboard" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
              Dashboard
            </a>
            <a href="#transactions" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
              Transactions
            </a>
            <a href="#budgets" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Budgets
            </a>
            <a href="#goals" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              Goals
            </a>
            <a href="#analytics" className="nav-item active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
              Analytics
            </a>
            <a href="#ai" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              AI Assistant
            </a>
            <a href="#planner" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
              Saving Planner
            </a>
            <a href="#categories" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              Categories
            </a>
            <a href="#profile" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              Profile
            </a>
          </nav>
        </div>

        <button className="collapse-btn">
          <span>‹</span> Collapse Sidebar
        </button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        
        {/* Top Nav Header */}
        <header className="top-navbar">
          <div className="nav-title-box">
            <h2>Analytics</h2>
            <p>Understand your financial habits with powerful insights.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="search-nav-wrapper">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" placeholder="Search transactions..." className="search-nav-input" />
              <span className="text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">⌘K</span>
            </div>

            <button className="icon-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <button className="icon-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>

            <div className="user-avatar">JD</div>
          </div>
        </header>

        <main className="analytics-body">
          
          {/* Main Title Row */}
          <div className="page-title-row">
            <div>
              <h1 className="text-2xl font-bold text-black">Financial Analytics</h1>
              <p className="text-xs text-gray-500 mt-1">
                Explore spending trends, income growth, savings performance, and category insights.
              </p>
            </div>
            <button className="btn-export-green">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export Report
            </button>
          </div>

          {/* Filter Bar */}
          <div className="filter-controls-card">
            <div className="flex items-center gap-3">
              <div className="select-pill">
                <span>📅</span>
                <span>Jan 1 – Jun 30, 2024</span>
                <span>›</span>
              </div>

              <div className="segmented-toggle">
                <button className="segmented-btn active">Monthly</button>
                <button className="segmented-btn">Quarterly</button>
                <button className="segmented-btn">Yearly</button>
              </div>

              <div className="select-pill">
                <span>🍸</span>
                <span>All Categories</span>
                <span>›</span>
              </div>

              <div className="select-pill">
                <span>All Flows</span>
                <span>›</span>
              </div>

              <div className="switch-toggle ml-2">
                <div className="toggle-slider"></div>
                <span>Compare Period</span>
              </div>
            </div>

            <button className="text-xs text-gray-400 font-medium flex items-center gap-1">
              <span>↻</span> Reset Filters
            </button>
          </div>

          {/* Section 1: Overview Cards Grid */}
          <div>
            <div className="section-tag">OVERVIEW — JAN TO JUN 2024</div>
            <div className="overview-grid">
              
              {/* Card 1 */}
              <div className="metric-box">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">TOTAL INCOME</div>
                    <div className="text-2xl font-bold text-black mt-1">$47,950</div>
                  </div>
                  <div className="metric-top-icon bg-emerald-50 text-emerald-600">$</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-green-pill">↗ +4.2%</span>
                </div>
                <svg className="sparkline-overlay" viewBox="0 0 100 30" fill="none" stroke="#10b981" strokeWidth="2">
                  <path d="M0 25 L30 20 L60 22 L100 5" />
                </svg>
              </div>

              {/* Card 2 */}
              <div className="metric-box">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">TOTAL EXPENSES</div>
                    <div className="text-2xl font-bold text-black mt-1">$18,540</div>
                  </div>
                  <div className="metric-top-icon bg-rose-50 text-rose-500">💳</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-red-pill">↘ -8.3%</span>
                </div>
                <svg className="sparkline-overlay" viewBox="0 0 100 30" fill="none" stroke="#ef4444" strokeWidth="2">
                  <path d="M0 10 L30 20 L60 12 L100 25" />
                </svg>
              </div>

              {/* Card 3 */}
              <div className="metric-box">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">NET SAVINGS</div>
                    <div className="text-2xl font-bold text-black mt-1">$10,330</div>
                  </div>
                  <div className="metric-top-icon bg-blue-50 text-blue-500">🏢</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-green-pill">↗ +12.8%</span>
                </div>
                <svg className="sparkline-overlay" viewBox="0 0 100 30" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <path d="M0 22 L30 18 L60 25 L100 8" />
                </svg>
              </div>

              {/* Card 4 */}
              <div className="metric-box">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">AVG MONTHLY SPEND</div>
                    <div className="text-2xl font-bold text-black mt-1">$3,090</div>
                    <div className="text-xs text-gray-400 mt-1">6-month rolling average</div>
                  </div>
                  <div className="metric-top-icon bg-amber-50 text-amber-500">🖥️</div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge-red-pill">↘ -5.1%</span>
                </div>
                <svg className="sparkline-overlay" viewBox="0 0 100 30" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <path d="M0 15 L30 25 L60 10 L100 20" />
                </svg>
              </div>

              {/* Card 5 */}
              <div className="metric-box">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">TOP SPENDING CATEGORY</div>
                    <div className="text-xl font-bold text-black mt-1">Food & Dining</div>
                    <div className="text-xs text-gray-400 mt-1">28% of total expenses</div>
                  </div>
                  <div className="metric-top-icon bg-purple-50 text-purple-500">☕</div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge-red-pill">↘ -5.2%</span>
                </div>
                <svg className="sparkline-overlay" viewBox="0 0 100 30" fill="none" stroke="#a855f7" strokeWidth="2">
                  <path d="M0 20 L30 10 L60 25 L100 15" />
                </svg>
              </div>

              {/* Card 6 */}
              <div className="metric-box">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase">SAVINGS GROWTH</div>
                    <div className="text-2xl font-bold text-black mt-1">+75.0%</div>
                    <div className="text-xs text-gray-400 mt-1">vs. January baseline</div>
                  </div>
                  <div className="metric-top-icon bg-emerald-50 text-emerald-500">📈</div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge-green-pill">↗ +9.4%</span>
                </div>
                <svg className="sparkline-overlay" viewBox="0 0 100 30" fill="none" stroke="#10b981" strokeWidth="2">
                  <path d="M0 25 L30 20 L60 10 L100 8" />
                </svg>
              </div>

            </div>
          </div>

          {/* Section 2: Spending & Income Graphs */}
          <div>
            <div className="section-tag">SPENDING & INCOME</div>
            <div className="two-col-grid">
              
              {/* Monthly Spending Bar Chart */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Monthly Spending</h3>
                  <p>Total outflows — Jan to Jun 2024</p>
                </div>
                
                <div className="flex items-end justify-between h-48 pt-6 px-4">
                  {[
                    { month: 'Jan', val: '$3.1k', height: '75%' },
                    { month: 'Feb', val: '$2.8k', height: '65%' },
                    { month: 'Mar', val: '$3.5k', height: '85%' },
                    { month: 'Apr', val: '$2.9k', height: '68%' },
                    { month: 'May', val: '$3.2k', height: '78%' },
                    { month: 'Jun', val: '$2.8k', height: '65%' },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 h-full justify-end flex-1">
                      <div
                        className="w-8 bg-red-600 rounded-t-sm"
                        style={{ height: bar.height }}
                      />
                      <span className="text-xs text-gray-400">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Income Trend Line Chart */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Income Trend</h3>
                  <p>Monthly inflow growth — Jan to Jun 2024</p>
                </div>

                <div className="h-48 relative flex flex-col justify-between pt-2">
                  <svg className="w-full h-36" viewBox="0 0 500 150" fill="none">
                    <path
                      d="M20 90 Q100 80 180 88 T340 50 T480 60"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2.5"
                    />
                    <circle cx="20" cy="90" r="4" fill="#059669" />
                    <circle cx="112" cy="81" r="4" fill="#059669" />
                    <circle cx="204" cy="87" r="4" fill="#059669" />
                    <circle cx="296" cy="65" r="4" fill="#059669" />
                    <circle cx="388" cy="50" r="4" fill="#059669" />
                    <circle cx="480" cy="60" r="4" fill="#059669" />
                  </svg>
                  <div className="flex justify-between text-xs text-gray-400 px-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Category & Savings Breakdown */}
          <div>
            <div className="section-tag">CATEGORY & SAVINGS BREAKDOWN</div>
            <div className="two-col-grid">
              
              {/* Category Breakdown Donut */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Category Breakdown</h3>
                  <p>Spending distribution by category</p>
                </div>

                <div className="donut-layout">
                  <div className="relative w-40 h-40">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#059669" strokeWidth="5" strokeDasharray="28 100" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#0284c7" strokeWidth="5" strokeDasharray="15 100" strokeDashoffset="-28" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#9333ea" strokeWidth="5" strokeDasharray="22 100" strokeDashoffset="-43" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#eab308" strokeWidth="5" strokeDasharray="18 100" strokeDashoffset="-65" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#ec4899" strokeWidth="5" strokeDasharray="8 100" strokeDashoffset="-83" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f43f5e" strokeWidth="5" strokeDasharray="6 100" strokeDashoffset="-91" />
                    </svg>
                  </div>

                  <div className="category-list">
                    {[
                      { name: 'Food & Dining', pct: '28%', color: '#059669' },
                      { name: 'Transportation', pct: '15%', color: '#0284c7' },
                      { name: 'Shopping', pct: '22%', color: '#9333ea' },
                      { name: 'Bills & Utilities', pct: '18%', color: '#eab308' },
                      { name: 'Healthcare', pct: '8%', color: '#ec4899' },
                      { name: 'Entertainment', pct: '6%', color: '#f43f5e' },
                      { name: 'Education', pct: '3%', color: '#6366f1' },
                    ].map((c, i) => (
                      <div key={i} className="cat-row">
                        <div className="flex items-center">
                          <span className="cat-bullet" style={{ backgroundColor: c.color }} />
                          <span className="text-gray-600 font-medium">{c.name}</span>
                        </div>
                        <span className="font-bold text-black">{c.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Savings Growth Line & Area */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Savings Growth</h3>
                  <p>Actual vs. projected trajectory</p>
                </div>

                <div className="h-44 relative flex flex-col justify-between">
                  <svg className="w-full h-32" viewBox="0 0 400 120" fill="none">
                    {/* Projected Dashed Line */}
                    <path d="M10 90 L390 20" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                    {/* Actual Curve */}
                    <path d="M10 90 Q100 70 200 95 T390 40" stroke="#059669" strokeWidth="2.5" fill="none" />
                  </svg>
                  
                  <div className="flex items-center justify-center gap-6 text-xs mt-2">
                    <span className="flex items-center gap-1.5 text-blue-500 font-semibold">
                      <span className="w-3 h-0.5 bg-blue-500 border border-dashed" /> Projected
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                      <span className="w-3 h-0.5 bg-emerald-600" /> Savings
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 4: Budget & Goals */}
          <div>
            <div className="section-tag">BUDGET & GOALS</div>
            <div className="two-col-grid">
              
              {/* Budget Performance */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Budget Performance</h3>
                  <p>Budget vs. actual spending by category</p>
                </div>

                <div className="flex items-end justify-around h-44 pt-4">
                  {[
                    { cat: 'Food', b: 60, s: 80, over: false },
                    { cat: 'Transport', b: 50, s: 45, over: false },
                    { cat: 'Shopping', b: 65, s: 90, over: true },
                    { cat: 'Bills', b: 55, s: 52, over: false },
                    { cat: 'Health', b: 40, s: 25, over: false },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="flex items-end gap-1.5 h-32">
                        <div className="w-4 bg-gray-200 rounded-t-sm" style={{ height: `${item.b}%` }} />
                        <div className={`w-4 rounded-t-sm ${item.over ? 'bg-red-600' : 'bg-emerald-600'}`} style={{ height: `${item.s}%` }} />
                      </div>
                      <span className="text-xs text-gray-400">{item.cat}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mt-4">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-gray-200 rounded-sm" /> Budget</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-black rounded-sm" /> Spent</span>
                </div>
              </div>

              {/* Goal Progress */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Goal Progress</h3>
                  <p>Track your financial milestones</p>
                </div>

                <div>
                  {[
                    { name: 'Emergency Fund', val: '$9,200 of $15,000 · Due Dec 2024', pct: 61, color: '#059669', badgeBg: '#dcfce7', badgeColor: '#16a34a' },
                    { name: 'Vacation Fund', val: '$3,750 of $5,000 · Due Aug 2024', pct: 75, color: '#0284c7', badgeBg: '#e0f2fe', badgeColor: '#0284c7' },
                    { name: 'New Laptop', val: '$1,640 of $2,000 · Due Sep 2024', pct: 82, color: '#9333ea', badgeBg: '#f3e8ff', badgeColor: '#9333ea' },
                    { name: 'Investment Portfolio', val: '$18,200 of $50,000 · Due Dec 2026', pct: 36, color: '#f59e0b', badgeBg: '#fef3c7', badgeColor: '#d97706' },
                  ].map((g, i) => (
                    <div key={i} className="goal-item">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-black text-xs">{g.name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{g.val}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: g.badgeBg, color: g.badgeColor }}>
                          {g.pct}%
                        </span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${g.pct}%`, backgroundColor: g.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Section 5: Insights & Health Score */}
          <div>
            <div className="section-tag">INSIGHTS & HEALTH</div>
            <div className="two-col-grid">
              
              {/* AI Financial Insights */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>AI Financial Insights</h3>
                  <p>Automatically generated from your transaction history</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="insight-card bg-emerald-50/60 border-emerald-500">
                    <span>📊</span>
                    <div>
                      <div className="font-bold text-xs text-black">Best savings month on record</div>
                      <div className="text-xs text-gray-500 mt-0.5">June had your highest savings rate at 26.4% of income — $600 above your 6-month average.</div>
                    </div>
                  </div>

                  <div className="insight-card bg-rose-50/60 border-rose-500">
                    <span>🛍️</span>
                    <div>
                      <div className="font-bold text-xs text-black">Shopping budget exceeded</div>
                      <div className="text-xs text-gray-500 mt-0.5">Shopping hit $840 this month — 40% over your $600 limit. Consider adjusting your budget.</div>
                    </div>
                  </div>

                  <div className="insight-card bg-blue-50/60 border-blue-500">
                    <span>💰</span>
                    <div>
                      <div className="font-bold text-xs text-black">Highest income month</div>
                      <div className="text-xs text-gray-500 mt-0.5">May 2024 was your peak-earning month at $8,100 — 15% above your 6-month average.</div>
                    </div>
                  </div>

                  <div className="insight-card bg-amber-50/60 border-amber-500">
                    <span>🍽️</span>
                    <div>
                      <div className="font-bold text-xs text-black">Top expense category</div>
                      <div className="text-xs text-gray-500 mt-0.5">Food & Dining accounts for 28% of all expenses. A 10% reduction saves ~$84/month.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Health Score Gauge */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Financial Health Score</h3>
                  <p>Holistic view of spending, savings & budget adherence</p>
                </div>

                <div className="flex items-center gap-6 my-4">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="78 100" />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-3xl font-extrabold text-black">88</div>
                      <div className="text-xs font-bold text-emerald-600">EXCELLENT</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-xs flex-1">
                    <p className="text-gray-500 leading-relaxed">
                      Your financial health is excellent. You're consistently hitting savings targets and staying within budget across 5 of 6 categories.
                    </p>
                    <div className="mt-2 flex flex-col gap-1 text-gray-400">
                      <div className="flex justify-between"><span>• Excellent</span><span className="font-semibold text-black">90–100</span></div>
                      <div className="flex justify-between"><span>• Good</span><span>70–89</span></div>
                      <div className="flex justify-between"><span>• Average</span><span>50–69</span></div>
                      <div className="flex justify-between"><span>• Needs Attention</span><span>&lt; 50</span></div>
                    </div>
                  </div>
                </div>

                {/* Monthly Comparison Pill */}
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <div className="font-bold text-xs text-black">Monthly Comparison</div>
                  <div className="text-xs text-gray-400 mb-3">June vs May 2024</div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-gray-400">INCOME</div>
                      <div className="font-bold text-black mt-0.5">$8.0k</div>
                      <span className="text-red-500 text-xs">↘ -1.9%</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-gray-400">EXPENSES</div>
                      <div className="font-bold text-black mt-0.5">$2.8k</div>
                      <span className="text-red-500 text-xs">↘ -11.9%</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-gray-400">NET SAVINGS</div>
                      <div className="font-bold text-black mt-0.5">$2.1k</div>
                      <span className="text-emerald-600 text-xs">↗ +9.4%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 6: Spending Map & Export */}
          <div>
            <div className="section-tag">SPENDING MAP & EXPORT</div>
            <div className="two-col-grid">
              
              {/* Spending Heatmap Grid */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Spending Heatmap</h3>
                  <p>Daily intensity — June 2024</p>
                </div>

                <div className="heatmap-matrix">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <div key={idx} className="heatmap-row">
                      <span className="heatmap-day-label">{day}</span>
                      <div className="heatmap-cell bg-emerald-300" />
                      <div className="heatmap-cell bg-rose-200" />
                      <div className="heatmap-cell bg-rose-200" />
                      <div className="heatmap-cell bg-emerald-300" />
                      <div className="heatmap-cell bg-amber-200" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Export & Share Actions */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Export & Share</h3>
                  <p>Download your analytics report or share with your advisor.</p>
                </div>

                <div>
                  <button className="export-btn-tile bg-rose-50 text-rose-600 border-rose-100">
                    📄 Export as PDF
                  </button>
                  <button className="export-btn-tile bg-emerald-50 text-emerald-600 border-emerald-100">
                    📊 Export as CSV
                  </button>
                  <button className="export-btn-tile bg-blue-50 text-blue-600 border-blue-100">
                    🔗 Share Report
                  </button>

                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mt-4 text-xs">
                    <div className="text-gray-400 font-bold uppercase">LAST EXPORTED</div>
                    <div className="font-bold text-black mt-0.5">Jun 30, 2024 · 9:14 AM</div>
                    <div className="text-gray-400">Q2 2024 Full Report · PDF</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 7: Category Leaderboard */}
          <div>
            <div className="section-tag">CATEGORY LEADERBOARD</div>
            <div className="chart-card p-0 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-sm text-black">Top Spending Categories</h3>
                <p className="text-xs text-gray-400">Ranked by total — June 2024</p>
              </div>

              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>CATEGORY</th>
                    <th>TRANSACTIONS</th>
                    <th>AMOUNT</th>
                    <th>MOM CHANGE</th>
                    <th>TREND</th>
                    <th>SHARE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Food & Dining', icon: '🍽️', tx: 42, amt: '$840', mom: '-5.2%', isUp: false, share: '100%' },
                    { name: 'Shopping', icon: '🛍️', tx: 28, amt: '$660', mom: '+18.4%', isUp: true, share: '79%' },
                    { name: 'Bills & Utilities', icon: '⚡', tx: 8, amt: '$540', mom: '+0.8%', isUp: true, share: '64%' },
                    { name: 'Transportation', icon: '🚗', tx: 35, amt: '$450', mom: '-12.1%', isUp: false, share: '54%' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="font-bold text-black">
                        <span className="mr-2">{row.icon}</span> {row.name}
                      </td>
                      <td className="text-gray-500 font-medium">{row.tx}</td>
                      <td className="font-bold text-black">{row.amt}</td>
                      <td>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${row.isUp ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-600'}`}>
                          {row.mom}
                        </span>
                      </td>
                      <td className={row.isUp ? 'text-rose-500 font-bold' : 'text-emerald-600 font-bold'}>
                        {row.isUp ? '↑' : '↓'}
                      </td>
                      <td style={{ width: '120px' }}>
                        <div className="mini-progress-bar" style={{ width: row.share }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}