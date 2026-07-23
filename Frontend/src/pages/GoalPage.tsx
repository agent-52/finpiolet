import React from 'react';
import '../index.css';
import '../styles/goal.css';

export default function GoalsPage() {
  return (
    <div className="goals-page-container">
      {/* Sidebar */}
      <aside className="goals-sidebar">
        <div>
          <div className="sidebar-brand">
            <div className="brand-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M17 7h4v4" />
              </svg>
            </div>
            <span className="font-bold text-sm text-black">FinPilot</span>
          </div>

          <nav className="nav-list">
            <a href="#dashboard" className="nav-link"><span>田</span> Dashboard</a>
            <a href="#transactions" className="nav-link"><span>≡</span> Transactions</a>
            <a href="#budgets" className="nav-link"><span>$</span> Budgets</a>
            <a href="#goals" className="nav-link active"><span>◎</span> Goals</a>
            <a href="#analytics" className="nav-link"><span>📊</span> Analytics</a>
            <a href="#ai" className="nav-link"><span>✨</span> AI Assistant</a>
            <a href="#planner" className="nav-link"><span>📅</span> Saving Planner</a>
            <a href="#categories" className="nav-link"><span>🏷️</span> Categories</a>
            <a href="#profile" className="nav-link"><span>👤</span> Profile</a>
          </nav>
        </div>

        <button className="btn-collapse">
          <span>‹</span> Collapse
        </button>
      </aside>

      {/* Main Content */}
      <div className="goals-main-wrapper">
        <header className="top-header-bar">
          <div>
            <span className="font-bold text-xs text-black block">Goals</span>
            <span className="text-xs text-gray-400">Track progress toward your financial milestones.</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="header-search-box">
              <span className="text-gray-400 text-xs">🔍</span>
              <input type="text" placeholder="Search anything..." className="header-search-input" />
            </div>
            <button className="header-icon-btn">🔔</button>
            <button className="header-icon-btn">☀️</button>
            <div className="user-avatar-badge">AJ</div>
          </div>
        </header>

        <main className="goals-body-content">
          <div className="goals-title-row">
            <div>
              <h1 className="text-xl font-bold text-black">Goals</h1>
              <p className="text-xs text-gray-500 mt-1">
                Stay on track with your long-term financial objectives.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="view-mode-pill-group">
                <button className="view-pill-btn active">Goals View</button>
                <button className="view-pill-btn">Empty State</button>
                <button className="view-pill-btn">Loading</button>
              </div>
              <button className="btn-create-goal">+ Create Goal</button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="filter-toolbar-card">
            <div className="filter-search-field">
              <span className="text-gray-400 text-xs">🔍</span>
              <input type="text" placeholder="Search goals..." className="w-full bg-transparent outline-none text-xs" />
            </div>

            <div className="filter-select-btn">Status: <strong className="text-black">All Status</strong> ›</div>
            <div className="filter-select-btn">Category: <strong className="text-black">All Categories</strong> ›</div>
            <div className="filter-select-btn">Timeline: <strong className="text-black">All Time</strong> ›</div>
            <div className="filter-select-btn" style={{ backgroundColor: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' }}>
              Sort: <strong>Newest First</strong> ›
            </div>
            <button className="text-xs text-gray-400 font-medium bg-transparent border-0 cursor-pointer">↻ Reset</button>
          </div>

          {/* Metric Cards */}
          <div className="overview-metrics-grid">
            <div className="metric-card-box">
              <div className="flex items-center justify-between">
                <span className="text-rose-500 text-sm">🎯</span>
                <svg className="sparkline-graph-svg" viewBox="0 0 80 30" fill="none" stroke="#10b981" strokeWidth="2"><path d="M0 25 L25 20 L50 15 L80 5" /></svg>
              </div>
              <div>
                <div className="text-xl font-bold text-black">7</div>
                <div className="text-xs text-gray-400">Active Goals</div>
                <div className="text-xs text-emerald-600 font-semibold">↗ +2 vs last month</div>
              </div>
            </div>

            <div className="metric-card-box">
              <div className="flex items-center justify-between">
                <span className="text-amber-700 text-sm">💼</span>
                <svg className="sparkline-graph-svg" viewBox="0 0 80 30" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M0 25 L30 18 L55 20 L80 8" /></svg>
              </div>
              <div>
                <div className="text-xl font-bold text-black">$371,999</div>
                <div className="text-xs text-gray-400">Total Target</div>
                <div className="text-xs text-emerald-600 font-semibold">↗ +$35k across all goals</div>
              </div>
            </div>

            <div className="metric-card-box">
              <div className="flex items-center justify-between">
                <span className="text-blue-500 text-sm">📈</span>
                <svg className="sparkline-graph-svg" viewBox="0 0 80 30" fill="none" stroke="#10b981" strokeWidth="2"><path d="M0 22 L30 15 L60 8 L80 5" /></svg>
              </div>
              <div>
                <div className="text-xl font-bold text-black">$131,349</div>
                <div className="text-xs text-gray-400">Total Saved</div>
                <div className="text-xs text-emerald-600 font-semibold">↗ +$8,200 this month</div>
              </div>
            </div>

            <div className="metric-card-box">
              <div className="flex items-center justify-between">
                <span className="text-purple-500 text-sm">📊</span>
                <svg className="sparkline-graph-svg" viewBox="0 0 80 30" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M0 10 L35 15 L60 8 L80 18" /></svg>
              </div>
              <div>
                <div className="text-xl font-bold text-black">45.4%</div>
                <div className="text-xs text-gray-400">Avg. Completion</div>
                <div className="text-xs text-amber-600 font-semibold">↘ -1.2% all goals combined</div>
              </div>
            </div>
          </div>

          {/* Grid Cards + Drawer */}
          <div className="goals-layout-grid">
            <div className="goals-cards-list-grid">
              {/* Emergency Fund */}
              <div className="goal-card-item selected-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">🛡️</span>
                    <div>
                      <div className="font-bold text-black text-xs">Emergency Fund</div>
                      <div className="text-xs text-gray-400">Due Aug 2025</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$18,750</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$25,000</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">75%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-emerald-600" style={{ width: '75%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$6,250</strong></span>
                  <span>$800/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-on-track">✓ On Track</span>
                </div>
              </div>

              {/* Vacation */}
              <div className="goal-card-item">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600">✈️</span>
                    <div>
                      <div className="font-bold text-black text-xs">Vacation — Amalfi</div>
                      <div className="text-xs text-gray-400">Due Jun 2025</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$3,200</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$8,500</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">38%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-amber-500" style={{ width: '38%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$5,300</strong></span>
                  <span>$450/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-behind">⚠️ Behind</span>
                </div>
              </div>

              {/* MacBook Pro */}
              <div className="goal-card-item">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">💻</span>
                    <div>
                      <div className="font-bold text-black text-xs">MacBook Pro M4</div>
                      <div className="text-xs text-gray-400">Due Dec 2024</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$3,499</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$3,499</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">100%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-blue-600" style={{ width: '100%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$0</strong></span>
                  <span>$0/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-completed">✓ Completed</span>
                </div>
              </div>

              {/* New Car */}
              <div className="goal-card-item">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">🚘</span>
                    <div>
                      <div className="font-bold text-black text-xs">New Car — Tesla</div>
                      <div className="text-xs text-gray-400">Due Mar 2027</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$12,600</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$45,000</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">28%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-emerald-600" style={{ width: '28%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$32,400</strong></span>
                  <span>$1,200/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-on-track">✓ On Track</span>
                </div>
              </div>

              {/* Home Down Payment */}
              <div className="goal-card-item">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-600">🏠</span>
                    <div>
                      <div className="font-bold text-black text-xs">Home Down Payment</div>
                      <div className="text-xs text-gray-400">Due Dec 2027</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$38,000</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$120,000</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">32%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-emerald-600" style={{ width: '32%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$82,000</strong></span>
                  <span>$2,500/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-on-track">✓ On Track</span>
                </div>
              </div>

              {/* MBA Education */}
              <div className="goal-card-item">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600">🎓</span>
                    <div>
                      <div className="font-bold text-black text-xs">MBA Education</div>
                      <div className="text-xs text-gray-400">Due Sep 2028</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$14,000</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$85,000</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">16%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-purple-600" style={{ width: '16%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$71,000</strong></span>
                  <span>$1,800/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-upcoming">🕒 Upcoming</span>
                </div>
              </div>

              {/* Investment Portfolio */}
              <div className="goal-card-item">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">💼</span>
                    <div>
                      <div className="font-bold text-black text-xs">Investment Portfolio</div>
                      <div className="text-xs text-gray-400">Due Nov 2026</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$31,500</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$50,000</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">63%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-emerald-600" style={{ width: '63%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$18,500</strong></span>
                  <span>$950/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-on-track">✓ On Track</span>
                </div>
              </div>

              {/* Wedding Fund */}
              <div className="goal-card-item">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500">💍</span>
                    <div>
                      <div className="font-bold text-black text-xs">Wedding Fund</div>
                      <div className="text-xs text-gray-400">Due Oct 2026</div>
                    </div>
                  </div>
                  <span className="text-gray-300">•••</span>
                </div>

                <div className="card-stats-row text-xs">
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">SAVED</div>
                    <div className="font-bold text-black">$9,800</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400 font-semibold">TARGET</div>
                    <div className="font-bold text-black">$35,000</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-black">28%</span>
                  </div>
                  <div className="goal-progress-bar-container">
                    <div className="goal-progress-bar-fill bg-amber-500" style={{ width: '28%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Remaining: <strong className="text-black">$25,200</strong></span>
                  <span>$700/mo</span>
                </div>

                <div className="card-actions-bar">
                  <button className="btn-card-action">📍 Details</button>
                  <button className="btn-card-action">✏️ Edit</button>
                  <span className="badge-status-pill badge-behind">⚠️ Behind</span>
                </div>
              </div>

            </div>

            {/* Right Drawer */}
            <div className="goal-detail-side-panel">
              <div className="panel-card-box">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">🛡️</span>
                    <span className="font-bold text-black text-xs">Emergency Fund</span>
                  </div>
                  <span className="badge-status-pill badge-on-track">✓ On Track</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="stat-sub-box">
                    <div className="text-gray-400">TARGET</div>
                    <div className="font-bold text-black">$25,000</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400">SAVED</div>
                    <div className="font-bold text-black">$18,750</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400">REMAINING</div>
                    <div className="font-bold text-black">$6,250</div>
                  </div>
                  <div className="stat-sub-box">
                    <div className="text-gray-400">DUE</div>
                    <div className="font-bold text-black">Aug 2025</div>
                  </div>
                </div>

                {/* Donut Progress Chart */}
                <div className="flex items-center justify-center my-4 relative">
                  <div className="w-28 h-28 relative flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#059669" strokeWidth="4" strokeDasharray="75 100" />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-base font-extrabold text-black">75%</div>
                      <div className="text-xs text-gray-400">complete</div>
                    </div>
                  </div>

                  <div className="ml-4 text-xs space-y-1">
                    <div>
                      <span className="text-gray-400 block text-xs">Saved</span>
                      <span className="font-bold text-black">$18,750</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-xs">Remaining</span>
                      <span className="font-bold text-black">$6,250</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Steps */}
                <div className="border-t border-gray-100 pt-3">
                  <div className="text-xs font-bold uppercase text-gray-400 mb-1">MILESTONES</div>
                  <div className="milestones-stepper">
                    <div className="milestone-step-item">
                      <div className="step-circle done">✓</div>
                      <span className="text-xs text-gray-500">Started</span>
                    </div>
                    <div className="milestone-step-item">
                      <div className="step-circle done">✓</div>
                      <span className="text-xs text-gray-500">25%</span>
                    </div>
                    <div className="milestone-step-item">
                      <div className="step-circle done">✓</div>
                      <span className="text-xs text-gray-500">50%</span>
                    </div>
                    <div className="milestone-step-item">
                      <div className="step-circle done">✓</div>
                      <span className="text-xs text-gray-500">75%</span>
                    </div>
                    <div className="milestone-step-item">
                      <div className="step-circle"></div>
                      <span className="text-xs text-gray-400">Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Saving Plan */}
              <div className="panel-card-box">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-black">
                    <span>🗓️</span> Saving Plan
                  </div>
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">GET /goals/1/plan</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-emerald-50/50 p-2 rounded">
                    <div className="text-gray-400">SUGGESTED MONTHLY</div>
                    <div className="font-bold text-emerald-600 text-sm">$348</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-400">MONTHS REMAINING</div>
                    <div className="font-bold text-black text-sm">18 mo</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-400">REQUIRED RATE</div>
                    <div className="font-bold text-black text-xs">7% of income</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-400">EST. COMPLETION</div>
                    <div className="font-bold text-black text-xs">Aug 2025</div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-1">Monthly contribution vs required</div>
                <div className="h-20 relative flex flex-col justify-between">
                  <svg className="w-full h-14" viewBox="0 0 280 60" fill="none">
                    <path d="M0 45 L40 43 L80 35 L120 33 L160 30 L200 28 L240 29 L280 25" stroke="#059669" strokeWidth="2" fill="none" />
                    <path d="M0 50 L280 50" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 text-xs mt-2">
                  <span className="text-emerald-600 font-semibold">— Projected</span>
                  <span className="text-gray-400">-- Required</span>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="ai-goal-box">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 mb-1">
                  <span>🪄</span> AI Goal Analysis
                </div>
                <div className="font-bold text-xs text-black mb-1">
                  You're ahead of schedule — great momentum!
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Based on your savings velocity over the past 90 days, you're on track to reach your Emergency Fund goal 2 months early. Your consistent contributions of $800/month are making a real difference.
                </p>

                <div className="space-y-1 text-xs text-emerald-800">
                  <div>⚡ Increase monthly contribution by $200 to finish 3 months early</div>
                  <div>⚡ Consider automating transfers on the 1st of each month</div>
                  <div>⚡ You're in the top 15% of savers with this goal type</div>
                </div>

                <button className="btn-full-ai-explanation">
                  ✨ View Full AI Explanation
                </button>
              </div>

              {/* Stats Box */}
              <div className="panel-card-box">
                <div className="text-xs font-bold uppercase text-gray-400 mb-2">STATISTICS</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Avg Monthly</div>
                    <div className="font-bold text-black">$800</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Current Progress</div>
                    <div className="font-bold text-black">75%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Remaining Time</div>
                    <div className="font-bold text-black">18 months</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Projected Finish</div>
                    <div className="font-bold text-black">Aug 2025</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="btn-card-action flex-1 py-1.5">✏️ Edit Goal</button>
                  <button className="btn-card-action flex-1 py-1.5 bg-rose-50 text-rose-600 border-rose-100 font-semibold">
                    🗑️ Delete Goal
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}