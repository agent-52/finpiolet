

import React, { useState } from 'react';
import '../index.css';
import "../styles/transaction.css"



const sampleTransactions = [
  {
    id: 1,
    title: 'Stripe Revenue Payout',
    subtitle: 'Stripe Inc.',
    category: 'Income',
    type: 'Income',
    date: 'Jul 22, 2025',
    amount: '+$8,450.00',
    amountColor: '#16a34a',
    paymentMethod: '🏦 Bank Transfer',
    status: 'Completed',
    isIncome: true,
  },
  {
    id: 2,
    title: 'AWS Cloud Services',
    subtitle: 'Amazon Web Services',
    category: 'Software',
    type: 'Expense',
    date: 'Jul 21, 2025',
    amount: '-$342.18',
    amountColor: '#dc2626',
    paymentMethod: '💳 Credit Card',
    status: 'Completed',
    isIncome: false,
  },
  {
    id: 3,
    title: 'Figma Team Plan',
    subtitle: 'Figma Inc.',
    category: 'Software',
    type: 'Expense',
    date: 'Jul 20, 2025',
    amount: '-$75.00',
    amountColor: '#dc2626',
    paymentMethod: '💳 Credit Card',
    status: 'Completed',
    isIncome: false,
  },
  {
    id: 4,
    title: 'Freelance — UI Design',
    subtitle: 'Acme Corp.',
    category: 'Income',
    type: 'Income',
    date: 'Jul 19, 2025',
    amount: '+$2,400.00',
    amountColor: '#16a34a',
    paymentMethod: '🏦 Bank Transfer',
    status: 'Completed',
    isIncome: true,
  },
  {
    id: 5,
    title: 'Whole Foods Market',
    subtitle: 'Whole Foods',
    category: 'Groceries',
    type: 'Expense',
    date: 'Jul 18, 2025',
    amount: '-$124.57',
    amountColor: '#dc2626',
    paymentMethod: '💳 Credit Card',
    status: 'Completed',
    isIncome: false,
  },
];

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState('Normal');

  return (
    <div className="app-container">
      
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
            <span className="font-bold text-base text-black">FinPilot</span>
          </div>

          <nav className="sidebar-nav">
            <a href="#dashboard" className="nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
              Dashboard
            </a>
            <a href="#transactions" className="nav-item active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
              Transactions
            </a>
            <a href="#budgets" className="nav-item">
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
              <span className="badge-ai">AI</span>
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
          Collapse sidebar
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        
        {/* Top Nav */}
        <header className="top-navbar">
          <div className="nav-breadcrumb">
            Transactions <span className="nav-date-tag">| July 2025</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="search-nav-wrapper">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" placeholder="Search anything..." className="search-nav-input" />
            </div>

            <button className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <button className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>

            <div className="flex items-center gap-2 cursor-pointer">
              <div className="user-avatar">AK</div>
              <span className="text-xs font-semibold text-black">Alex Kim</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="dashboard-body">
          
          {/* State Switcher Bar */}
          <div className="preview-bar">
            <span className="preview-label">PREVIEW</span>
            {['Normal', 'Empty', 'Loading'].map((tab) => (
              <button
                key={tab}
                className={`preview-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Title Row */}
          <div className="page-title-row">
            <div>
              <h1 className="text-2xl font-bold text-black">Transactions</h1>
              <p className="text-xs text-gray-500 mt-1">Track and manage all your financial activity.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-secondary-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Import CSV
              </button>
              <button className="btn-black-sm">
                <span>+</span> Add Transaction
              </button>
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="filter-bar">
            <div className="filter-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" placeholder="Search transactions..." className="input-field" />
            </div>

            <div className="filter-label-inline">
              Type:
              <select className="filter-select">
                <option>All</option>
              </select>
            </div>

            <div className="filter-label-inline">
              Category:
              <select className="filter-select">
                <option>All</option>
              </select>
            </div>

            <select className="filter-select">
              <option>Jul 1 – Jul 31</option>
            </select>

            <select className="filter-select">
              <option>Date</option>
            </select>
          </div>

          {/* Metric Summary Cards */}
          <div className="summary-grid">
            
            {/* Metric 1 */}
            <div className="metric-card">
              <div>
                <div className="flex items-center justify-between">
                  <span className="metric-title">TOTAL TRANSACTIONS</span>
                  <span className="text-lg">💳</span>
                </div>
                <div className="metric-val">18</div>
              </div>
              <svg className="sparkline-svg" viewBox="0 0 100 30" fill="none" stroke="#94a3b8" strokeWidth="2">
                <path d="M0 25 L30 20 L60 22 L100 10" />
              </svg>
              <div className="mt-4">
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">18 total</span>
                <p className="text-xs text-gray-400 mt-2">2 pending • 16 completed</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="metric-card">
              <div>
                <div className="flex items-center justify-between">
                  <span className="metric-title">TOTAL INCOME</span>
                  <span className="text-lg">💚</span>
                </div>
                <div className="metric-val">$23,755.60</div>
              </div>
              <svg className="sparkline-svg" viewBox="0 0 100 30" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M0 25 L30 18 L60 20 L100 5" />
              </svg>
              <div className="mt-4">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">↑ +8.3%</span>
                <p className="text-xs text-gray-400 mt-2">vs. last month (+$1,840)</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="metric-card">
              <div>
                <div className="flex items-center justify-between">
                  <span className="metric-title">TOTAL EXPENSES</span>
                  <span className="text-lg">🔴</span>
                </div>
                <div className="metric-val">$1,159.00</div>
              </div>
              <svg className="sparkline-svg" viewBox="0 0 100 30" fill="none" stroke="#ef4444" strokeWidth="2">
                <path d="M0 10 L30 15 L60 12 L100 22" />
              </svg>
              <div className="mt-4">
                <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded">↓ +3.2%</span>
                <p className="text-xs text-gray-400 mt-2">vs. last month (+$28)</p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="metric-card">
              <div>
                <div className="flex items-center justify-between">
                  <span className="metric-title">NET CASH FLOW</span>
                  <span className="text-lg">📊</span>
                </div>
                <div className="metric-val">+$22,596.60</div>
              </div>
              <svg className="sparkline-svg" viewBox="0 0 100 30" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M0 22 L30 19 L60 21 L100 8" />
              </svg>
              <div className="mt-4">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">↑ +15.4%</span>
                <p className="text-xs text-gray-400 mt-2">Healthy surplus this month</p>
              </div>
            </div>

          </div>

          {/* Transactions Data Table Card */}
          <div className="table-container-card">
            <div className="table-header-title">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-black">All Transactions</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">18</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="btn-secondary-sm text-xs">≡ Columns</button>
                <button className="btn-secondary-sm text-xs">↓ Export</button>
              </div>
            </div>

            <table className="tx-table">
              <thead>
                <tr>
                  <th>TRANSACTION</th>
                  <th>CATEGORY</th>
                  <th>TYPE</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>PAYMENT METHOD</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {sampleTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className={`circle-icon-btn ${tx.isIncome ? 'circle-income' : 'circle-expense'}`}>
                          {tx.isIncome ? '↑' : '↓'}
                        </div>
                        <div>
                          <div className="font-bold text-black">{tx.title}</div>
                          <div className="text-xs text-gray-400">{tx.subtitle}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`category-tag ${tx.isIncome ? 'tag-income' : tx.category === 'Software' ? 'tag-software' : 'tag-groceries'}`}>
                        {tx.category}
                      </span>
                    </td>
                    <td>
                      <span className={`font-semibold text-xs ${tx.isIncome ? 'text-green-600' : 'text-red-500'}`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className="text-gray-500 font-medium text-xs">{tx.date}</td>
                    <td>
                      <span className="font-bold" style={{ color: tx.amountColor }}>
                        {tx.amount}
                      </span>
                    </td>
                    <td className="text-gray-600 font-medium text-xs">{tx.paymentMethod}</td>
                    <td>
                      <span className="status-completed">• {tx.status}</span>
                    </td>
                    <td>
                      <button className="icon-btn text-gray-400">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Import CSV Section */}
          <div className="mb-8">
            <h2 className="import-section-title">Import Transactions</h2>
            <p className="import-section-sub">
              Bulk-import from your bank's CSV export — we auto-detect column formats.
            </p>

            {/* Drag Drop Area */}
            <div className="drag-drop-zone">
              <div className="upload-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <p className="font-bold text-sm text-black">Drag & Drop CSV file here</p>
              <p className="text-xs text-gray-400 mt-1">
                Supports Chase, Bank of America, Wells Fargo exports — or
              </p>
              <button className="btn-black-sm mt-3">Browse File</button>
              <p className="text-xs text-gray-400 mt-3">Max 10 MB • UTF-8 • .csv only</p>
            </div>

            {/* CSV Status Cards Grid */}
            <div className="csv-status-grid">
              
              {/* Card 1: Uploading */}
              <div className="csv-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-lg">📄</span>
                    <div>
                      <h4 className="font-bold text-xs text-black">transactions_july_2025.csv</h4>
                      <p className="text-xs text-gray-400">2.4 MB • Parsing rows...</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600">68%</span>
                </div>
                <div className="progress-line-bg">
                  <div className="progress-line-fill" style={{ width: '68%' }} />
                </div>
                <p className="text-xs text-gray-400 mt-3">248 rows detected • ~4 seconds remaining</p>
              </div>

              {/* Card 2: Completed Stats */}
              <div className="csv-card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <h4 className="font-bold text-xs text-black">Import Complete</h4>
                    <p className="text-xs text-gray-400">transactions_june_2025.csv</p>
                  </div>
                </div>

                <div className="stats-3-box">
                  <div className="stat-metric-tile tile-green">
                    <div className="text-lg font-bold text-green-600">241</div>
                    <div className="text-xs text-gray-500">Imported</div>
                  </div>
                  <div className="stat-metric-tile tile-yellow">
                    <div className="text-lg font-bold text-amber-600">5</div>
                    <div className="text-xs text-gray-500">Skipped</div>
                  </div>
                  <div className="stat-metric-tile tile-red">
                    <div className="text-lg font-bold text-red-500">2</div>
                    <div className="text-xs text-gray-500">Failed</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Failed Records Table */}
            <div className="table-container-card">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <span className="text-red-500 font-bold text-xs">⚠️ Failed Records</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">2 errors</span>
              </div>
              <table className="tx-table">
                <thead>
                  <tr>
                    <th>ROW</th>
                    <th>TITLE</th>
                    <th>AMOUNT</th>
                    <th>DATE</th>
                    <th>ERROR REASON</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-xs text-gray-400 font-medium">#43</td>
                    <td className="font-medium text-black">Uber Eats — order...</td>
                    <td className="text-gray-400">—</td>
                    <td className="text-xs text-gray-500">07/32/2025</td>
                    <td>
                      <span className="bg-red-50 text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full border border-red-200">
                        Invalid date format
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xs text-gray-400 font-medium">#87</td>
                    <td className="font-medium text-black">Unknown merchant</td>
                    <td className="text-gray-400">N/A</td>
                    <td className="text-xs text-gray-500">07/15/2025</td>
                    <td>
                      <span className="bg-red-50 text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full border border-red-200">
                        Missing amount field
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Screenshot 3 Modals / Dialog Cards Showcase */}
          <div className="components-preview-wrapper">
            <h2 className="font-bold text-lg text-black mb-1">UI Component States</h2>
            <p className="text-xs text-gray-500 mb-6">
              Design previews of modals and dialog states — rendered as reference components.
            </p>

            <div className="modals-flex-grid">
              {/* Card 1: Add Transaction */}
              <AddTransactionModal onClose={() => {}} onSave={() => {}} />

              {/* Card 2: Edit Transaction */}
              <EditTransactionModal onClose={() => {}} onSave={() => {}} />

              {/* Card 3: Delete Transaction */}
              <DeleteTransactionModal onDelete={() => {}} onCancel={() => {}} />
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}

function DeleteTransactionModal({ onDelete, onCancel }:{onDelete:any, onCancel:any}) {
  return (
    <div className="modal-card modal-card-sm">
      <div className="delete-icon-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </div>

      <h3 className="text-base font-bold text-black">Delete Transaction?</h3>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        You're about to permanently delete <strong className="text-black">AWS Cloud Services</strong> ($342.18). This action <strong className="text-black">cannot be undone</strong> and the record will be removed from all reports.
      </p>

      <div className="flex flex-col gap-2 mt-5">
        <button
          className="btn-primary rounded-md font-semibold text-xs"
          style={{ backgroundColor: '#dc2626' }}
          onClick={onDelete}
        >
          Delete Transaction
        </button>
        <button
          className="btn-secondary-sm justify-center w-full"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>

      {/* Yellow Warning Alert */}
      <div className="warning-alert-box">
        <span style={{ fontSize: '12px' }}>⚠️</span>
        <div>
          This will also remove the transaction from your budget calculations and monthly reports for July 2025.
        </div>
      </div>
    </div>
  );
}

 function EditTransactionModal({ onClose, onSave }:{onClose:any, onSave:any}) {
  return (
    <div className="modal-card modal-card-lg">
      <div className="modal-header">
        <div>
          <h3 className="text-sm font-bold text-black">Edit Transaction</h3>
          <p className="text-xs text-gray-400 mt-1">Update transaction details</p>
        </div>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
      </div>

      {/* Segmented Expense/Income */}
      <div className="segmented-control">
        <button className="segmented-btn active-expense">
          ↓ Expense
        </button>
        <button className="segmented-btn">
          ↑ Income
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {/* Title */}
        <div>
          <label className="form-label">Title</label>
          <input
            type="text"
            defaultValue="AWS Cloud Services"
            className="form-input-box font-medium"
          />
        </div>

        {/* Amount & Date */}
        <div className="form-row-2">
          <div>
            <label className="form-label">Amount</label>
            <input
              type="text"
              defaultValue="$ 342.18"
              className="form-input-box"
            />
          </div>
          <div>
            <label className="form-label">Date</label>
            <input
              type="text"
              defaultValue="07/21/2025"
              className="form-input-box"
            />
          </div>
        </div>

        {/* Category & Payment Method */}
        <div className="form-row-2">
          <div>
            <label className="form-label">Category</label>
            <select className="form-input-box" defaultValue="Software">
              <option>Software</option>
              <option>Entertainment</option>
            </select>
          </div>
          <div>
            <label className="form-label">Payment Method</label>
            <select className="form-input-box" defaultValue="Credit Card">
              <option>Credit Card</option>
              <option>Bank Transfer</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="form-label">Notes</label>
          <textarea
            rows={2}
            defaultValue="Monthly AWS infrastructure bill — EC2 + S3 + CloudFront"
            className="form-input-box text-xs"
            style={{ resize: 'none' }}
          />
        </div>

        {/* Buttons */}
        <div className="form-row-2 mt-2">
          <button className="btn-secondary-sm justify-center" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-black-sm justify-center" onClick={onSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

 function AddTransactionModal({ onClose, onSave }:{onClose:any, onSave:any}) {
  return (
    <div className="modal-card modal-card-lg">
      <div className="modal-header">
        <div>
          <h3 className="text-sm font-bold text-black">Add Transaction</h3>
          <p className="text-xs text-gray-400 mt-1">Record a new financial entry</p>
        </div>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
      </div>

      {/* Segmented Expense/Income */}
      <div className="segmented-control">
        <button className="segmented-btn active-expense">
          ↓ Expense
        </button>
        <button className="segmented-btn">
          ↑ Income
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {/* Title */}
        <div>
          <label className="form-label">Title</label>
          <input
            type="text"
            placeholder="e.g. Netflix Subscription"
            className="form-input-box"
          />
        </div>

        {/* Amount & Date */}
        <div className="form-row-2">
          <div>
            <label className="form-label">Amount</label>
            <input
              type="text"
              placeholder="$ 0.00"
              className="form-input-box"
            />
          </div>
          <div>
            <label className="form-label">Date</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="form-input-box"
            />
          </div>
        </div>

        {/* Category & Payment Method */}
        <div className="form-row-2">
          <div>
            <label className="form-label">Category</label>
            <select className="form-input-box">
              <option>Entertainment</option>
              <option>Software</option>
              <option>Groceries</option>
            </select>
          </div>
          <div>
            <label className="form-label">Payment Method</label>
            <select className="form-input-box">
              <option>Credit Card</option>
              <option>Bank Transfer</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="form-label">Notes <span className="text-gray-400 font-normal">(optional)</span></label>
          <textarea
            rows={2}
            placeholder="Add a note..."
            className="form-input-box"
            style={{ resize: 'none' }}
          />
        </div>

        {/* Buttons */}
        <div className="form-row-2 mt-2">
          <button className="btn-secondary-sm justify-center" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-black-sm justify-center" onClick={onSave}>
            Save Transaction
          </button>
        </div>
      </div>
    </div>
  );
}