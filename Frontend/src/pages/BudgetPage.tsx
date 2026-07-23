import React from 'react';

import '../index.css';
import '../styles/dashboard.css';

const budgetData = [
  {
    id: 1,
    title: 'Education',
    category: 'Monthly • Education',
    iconBg: '#ecfdf5',
    iconColor: '#10b981',
    spent: '$45',
    budget: '$150',
    usedPct: 30,
    status: 'Healthy',
    remaining: '$105 remaining',
    remainingColor: '#16a34a',
    dailyAvg: '$2',
    daysLeft: '8d',
    estMonthEnd: '$61',
    progressColor: '#16a34a',
    spentColor: '#0f172a',
  },
  {
    id: 2,
    title: 'Entertainment',
    category: 'Monthly • Entertainment',
    iconBg: '#f3e8ff',
    iconColor: '#a855f7',
    spent: '$189',
    budget: '$200',
    usedPct: 95,
    status: 'Critical',
    remaining: '$11 remaining',
    remainingColor: '#ea580c',
    dailyAvg: '$8',
    daysLeft: '8d',
    estMonthEnd: '$255',
    progressColor: '#ea580c',
    spentColor: '#0f172a',
  },
  {
    id: 3,
    title: 'Food & Dining',
    category: 'Monthly • Food',
    iconBg: '#ede9fe',
    iconColor: '#8b5cf6',
    spent: '$542',
    budget: '$800',
    usedPct: 68,
    status: 'Healthy',
    remaining: '$258 remaining',
    remainingColor: '#16a34a',
    dailyAvg: '$24',
    daysLeft: '8d',
    estMonthEnd: '$730',
    progressColor: '#16a34a',
    spentColor: '#0f172a',
  },
  {
    id: 4,
    title: 'Healthcare',
    category: 'Monthly • Health',
    iconBg: '#ffe4e6',
    iconColor: '#f43f5e',
    spent: '$87',
    budget: '$250',
    usedPct: 35,
    status: 'Healthy',
    remaining: '$163 remaining',
    remainingColor: '#16a34a',
    dailyAvg: '$4',
    daysLeft: '8d',
    estMonthEnd: '$117',
    progressColor: '#16a34a',
    spentColor: '#0f172a',
  },
  {
    id: 5,
    title: 'Shopping',
    category: 'Monthly • Shopping',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    spent: '$623',
    budget: '$500',
    usedPct: 125,
    status: 'Exceeded',
    remaining: '-$123 over budget',
    remainingColor: '#dc2626',
    dailyAvg: '$27',
    daysLeft: '8d',
    estMonthEnd: '$840',
    progressColor: '#dc2626',
    spentColor: '#dc2626',
  },
  {
    id: 6,
    title: 'Transportation',
    category: 'Monthly • Transport',
    iconBg: '#fee2e2',
    iconColor: '#ef4444',
    spent: '$267',
    budget: '$300',
    usedPct: 89,
    status: 'Warning',
    remaining: '$33 remaining',
    remainingColor: '#d97706',
    dailyAvg: '$12',
    daysLeft: '8d',
    estMonthEnd: '$360',
    progressColor: '#d97706',
    spentColor: '#0f172a',
  },
  {
    id: 7,
    title: 'Travel',
    category: 'Monthly • Travel',
    iconBg: '#dbeafe',
    iconColor: '#3b82f6',
    spent: '$0',
    budget: '$400',
    usedPct: 0,
    status: 'Healthy',
    remaining: '$400 remaining',
    remainingColor: '#16a34a',
    dailyAvg: '$0',
    daysLeft: '8d',
    estMonthEnd: '$0',
    progressColor: '#16a34a',
    spentColor: '#0f172a',
  },
  {
    id: 8,
    title: 'Utilities',
    category: 'Monthly • Utilities',
    iconBg: '#fef3c7',
    iconColor: '#f59e0b',
    spent: '$162',
    budget: '$180',
    usedPct: 90,
    status: 'Critical',
    remaining: '$18 remaining',
    remainingColor: '#ea580c',
    dailyAvg: '$7',
    daysLeft: '8d',
    estMonthEnd: '$218',
    progressColor: '#ea580c',
    spentColor: '#0f172a',
  }
];

export default function BudgetsPage() {
  return (
    <div className="app-container">
      
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M17 7h4v4" />
              </svg>
            </div>
            <span className="font-bold text-base text-black">FinPilot</span>
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
            <a href="#budgets" className="nav-item active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>
              Budgets
            </a>
            <a href="#goals" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              Goals
            </a>
            <a href="#analytics" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
              Analytics
            </a>
            <a href="#ai" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.5 7.5"/></svg>
              AI Assistant
            </a>
            <a href="#planner" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Saving Planner
            </a>
            <a href="#categories" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="16" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="16" y2="18"/></svg>
              Categories
            </a>
            <a href="#profile" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Profile
            </a>
          </nav>
        </div>

        <button className="collapse-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 19l-7-7 7-7M19 19l-7-7 7-7"/></svg>
          Collapse Sidebar
        </button>
      </aside>

      {/* Right Main Container */}
      <div className="main-content">
        
        {/* Top Navbar */}
        <header className="top-navbar">
          <div>
            <div className="nav-breadcrumb-title">Budgets</div>
            <div className="nav-breadcrumb-subtitle">Manage monthly spending limits across categories.</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="search-nav-wrapper">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" placeholder="Search..." className="search-nav-input" />
            </div>

            <button className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <button className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>

            <div className="user-avatar">JD</div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="dashboard-body">
          
          {/* Header Title + Button */}
          <div className="page-header">
            <div>
              <h1 className="text-2xl font-bold text-black">Budgets</h1>
              <p className="text-xs text-gray-500 mt-1">Track spending against monthly budget goals.</p>
            </div>
            <button className="btn-black-sm">
              <span>+</span> Create Budget
            </button>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar">
            <div className="filter-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" placeholder="Search budgets..." className="input-field" />
            </div>

            <select className="filter-select">
              <option>All Categories</option>
            </select>

            <select className="filter-select">
              <option>All Statuses</option>
            </select>

            <div className="flex items-center gap-2 text-xs text-gray-500 ml-2">
              <span>Sort:</span>
              <select className="filter-select">
                <option>Name</option>
              </select>
            </div>
          </div>

          {/* Top 4 Summary Cards */}
          <div className="summary-grid">
            
            {/* Card 1 */}
            <div className="summary-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="summary-title">Active Budgets</span>
                  <div className="summary-icon-box">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  </div>
                </div>
                <div className="summary-value">8</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="badge-gray">Across all categories</span>
                <span className="badge-green">↗ +2 this month</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="summary-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="summary-title">Monthly Budget</span>
                  <div className="summary-icon-box">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                  </div>
                </div>
                <div className="summary-value">$2,780</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="badge-gray">Total allocated limit</span>
                <span className="badge-green">↗ +$200 vs last</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="summary-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="summary-title">Spent This Month</span>
                  <div className="summary-icon-box">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                </div>
                <div className="summary-value">$1,915</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="badge-gray">Across all budgets</span>
                <span className="badge-red">↘ +8.4% vs last</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="summary-card">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="summary-title">Remaining Budget</span>
                  <div className="summary-icon-box">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                </div>
                <div className="summary-value">$865</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="badge-gray">8 days remaining</span>
                <span className="badge-gray">~ -$185 vs last</span>
              </div>
            </div>

          </div>

          {/* 8 Main Budget Category Cards Grid */}
          <div className="budgets-grid">
            {budgetData.map((item) => {
              const getStatusClass = (status:any) => {
                switch (status) {
                  case 'Healthy': return 'status-healthy';
                  case 'Warning': return 'status-warning';
                  case 'Critical': return 'status-critical';
                  case 'Exceeded': return 'status-exceeded';
                  default: return 'status-healthy';
                }
              };

              return (
                <div key={item.id} className="budget-card">
                  
                  {/* Top Category Row */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="category-icon" style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="category-title">{item.title}</h4>
                      <p className="category-sub">{item.category}</p>
                    </div>
                  </div>

                  {/* Spent vs Budget Values */}
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-gray-400">Spent</span>
                      <div className="text-2xl font-bold" style={{ color: item.spentColor }}>
                        {item.spent}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-400">Budget</span>
                      <div className="text-xs font-bold text-gray-500 mt-1">{item.budget}</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${Math.min(item.usedPct, 100)}%`,
                        backgroundColor: item.progressColor
                      }}
                    />
                  </div>

                  {/* Percentage & Status Pill */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 font-medium">{item.usedPct}% used</span>
                    <span className={`status-pill ${getStatusClass(item.status)}`}>
                      • {item.status}
                    </span>
                  </div>

                  {/* Remaining Text */}
                  <div className="text-xs font-semibold" style={{ color: item.remainingColor }}>
                    {item.remaining}
                  </div>

                  {/* Bottom Stats Footer */}
                  <div className="card-stats-row">
                    <div>
                      <div className="stat-label">DAILY AVG</div>
                      <div className="stat-val">{item.dailyAvg}</div>
                    </div>
                    <div>
                      <div className="stat-label">DAYS LEFT</div>
                      <div className="stat-val">{item.daysLeft}</div>
                    </div>
                    <div>
                      <div className="stat-label">EST. MONTH-END</div>
                      <div className="stat-val">{item.estMonthEnd}</div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </main>
      </div>

    </div>
  );
}