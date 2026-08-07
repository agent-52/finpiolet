// // AnalyticsPage.tsx
// import React from 'react';
// import {
//   BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart
// } from 'recharts';
// import {
//   Download, Share2, Search, Bell, Settings,
//   DollarSign, CreditCard, Monitor, Coffee, TrendingUp,
//   AlertCircle, CheckCircle, TrendingDown, Clock, PieChart as PieIcon,
//   ShoppingCart, Zap, Truck, Heart
// } from 'lucide-react';
// import './analytics.css';
// import { AnalyticsSkeleton } from './AnalyticsPageSkeleton';

// // --- MOCK HOOK FOR DEMONSTRATION (Replace with your actual hook) ---
// const useGetAnalytics = () => {
//   return {
//     isLoading: false,
//     data: {
//       success: true,
//       analytics: {
//         overview: {
//           totalIncome: { amount: 47950, trend: 4.2, sparkline: [10, 15, 12, 18, 20, 24] },
//           totalExpenses: { amount: 18540, trend: -8.3, sparkline: [24, 20, 18, 15, 12, 10] },
//           netSavings: { amount: 10330, trend: 12.8, sparkline: [5, 8, 12, 15, 18, 25] },
//           avgMonthlySpend: { amount: 3090, trend: -5.1, sparkline: [15, 12, 18, 14, 10, 8] },
//           topSpendingCategory: { name: 'Food & Dining', subtext: '28% of total expenses', trend: -5.2, sparkline: [8, 10, 12, 9, 7, 5] },
//           savingsGrowth: { percentage: 75.0, trend: 9.4, sparkline: [10, 15, 20, 25, 30, 40] }
//         },
//         monthlySpendingTrend: [
//           { month: 'Jan', amount: 3100 }, { month: 'Feb', amount: 2900 }, { month: 'Mar', amount: 3600 },
//           { month: 'Apr', amount: 2800 }, { month: 'May', amount: 3100 }, { month: 'Jun', amount: 2700 }
//         ],
//         incomeTrend: [
//           { month: 'Jan', amount: 6800 }, { month: 'Feb', amount: 7200 }, { month: 'Mar', amount: 6900 },
//           { month: 'Apr', amount: 7800 }, { month: 'May', amount: 8100 }, { month: 'Jun', amount: 8000 }
//         ],
//         categoryBreakdown: [
//           { category: 'Food & Dining', amount: 5191, percentage: 28, color: '#10b981' },
//           { category: 'Transportation', amount: 2781, percentage: 15, color: '#3b82f6' },
//           { category: 'Shopping', amount: 4078, percentage: 22, color: '#8b5cf6' },
//           { category: 'Bills & Utilities', amount: 3337, percentage: 18, color: '#f59e0b' },
//           { category: 'Healthcare', amount: 1483, percentage: 8, color: '#ef4444' },
//           { category: 'Entertainment', amount: 1112, percentage: 6, color: '#ec4899' },
//           { category: 'Education', amount: 556, percentage: 3, color: '#6366f1' }
//         ],
//         savingsTrajectory: [
//           { month: 'Jan', projected: 1400, actual: 1300 },
//           { month: 'Feb', projected: 1600, actual: 1500 },
//           { month: 'Mar', projected: 1800, actual: 1100 },
//           { month: 'Apr', projected: 2000, actual: 1700 },
//           { month: 'May', projected: 2200, actual: 1900 },
//           { month: 'Jun', projected: 2500, actual: 2100 }
//         ],
//         budgetPerformance: [
//           { category: 'Food', budget: 700, spent: 750 },
//           { category: 'Transport', budget: 400, spent: 380 },
//           { category: 'Shopping', budget: 600, spent: 840 },
//           { category: 'Bills', budget: 500, spent: 500 },
//           { category: 'Health', budget: 300, spent: 180 }
//         ],
//         goalProgress: [
//           { name: 'Emergency Fund', current: 9200, target: 15000, dueDate: 'Dec 2024', color: '#10b981' },
//           { name: 'Vacation Fund', current: 3750, target: 5000, dueDate: 'Aug 2024', color: '#3b82f6' },
//           { name: 'New Laptop', current: 1640, target: 2000, dueDate: 'Sep 2024', color: '#8b5cf6' },
//           { name: 'Investment Portfolio', current: 18200, target: 50000, dueDate: 'Dec 2026', color: '#f59e0b' }
//         ],
//         insights: [
//           { type: 'success', title: 'Best savings month on record', description: 'June had your highest savings rate at 26.4% of income — $600 above your 6-month average.' },
//           { type: 'danger', title: 'Shopping budget exceeded', description: 'Shopping hit $840 this month — 40% over your $600 limit. Consider adjusting your budget.' },
//           { type: 'warning', title: 'Highest income month', description: 'May 2024 was your peak-earning month at $8,100 — 15% above your 6-month average.' },
//           { type: 'info', title: 'Financial consistency score', description: 'Spending patterns are 84% consistent month-over-month — well above the 70% benchmark.' }
//         ],
//         financialHealth: {
//           score: 88,
//           label: 'Excellent',
//           description: "Your financial health is excellent. You're consistently hitting savings targets and staying within budget across 5 of 6 categories.",
//           metrics: {
//             income: { current: 8000, previous: 8100, trend: -1.9 },
//             expenses: { current: 2800, previous: 3100, trend: -11.9 },
//             netSavings: { current: 2100, previous: 1900, trend: 9.4 }
//           }
//         },
//         spendingHeatmap: Array.from({ length: 35 }, (_, i) => ({
//           day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i % 7],
//           week: `W${Math.floor(i / 7) + 1}`,
//           intensity: Math.floor(Math.random() * 5) as 0|1|2|3|4 // 0 to 4
//         })),
//         categoryLeaderboard: [
//           { category: 'Food & Dining', transactions: 42, amount: 840, momChange: -5.2, trend: 'down', share: 100, color: '#10b981' },
//           { category: 'Shopping', transactions: 28, amount: 660, momChange: 18.4, trend: 'up', share: 79, color: '#8b5cf6' },
//           { category: 'Bills & Utilities', transactions: 8, amount: 540, momChange: 0.8, trend: 'up', share: 64, color: '#f59e0b' },
//           { category: 'Transportation', transactions: 35, amount: 450, momChange: -12.1, trend: 'down', share: 54, color: '#3b82f6' },
//           { category: 'Healthcare', transactions: 6, amount: 240, momChange: -3.3, trend: 'down', share: 29, color: '#ef4444' }
//         ]
//       }
//     }
//   };
// };

// // --- SUB-COMPONENTS ---

// const Formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

// const TrendBadge = ({ trend }: { trend: number }) => {
//   const isUp = trend > 0;
//   return (
//     <div className={`trend-badge ${isUp ? 'trend-up' : 'trend-down'}`}>
//       {isUp ? <TrendingUp size={`${14}`}/> : <TrendingDown size={`${14}`}/>}
//       {Math.abs(trend)}%
//     </div>
//   );
// };

// const Sparkline = ({ data, color }: { data: number[], color: string }) => {
//   const chartData = data.map((val, i) => ({ index: i, value: val }));
//   return (
//     <div style={{ width: '80px', height: '40px' }}>
//       <ResponsiveContainer height="100%" width="100%">
//         <LineChart data={chartData}>
//           <Line dataKey="value" dot={false} isAnimationActive={false} stroke={color} strokeWidth={2} type="monotone"/>
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// // Main Export Component
// export default function AnalyticsPage() {
//   const { data: rawData, isLoading } = useGetAnalytics();

//   if (isLoading || !rawData) return <AnalyticsSkeleton/>;

//   const { analytics: data } = rawData;

//   const getIconForCategory = (cat: string) => {
//     switch (cat) {
//       case 'Food & Dining': return <Coffee color="#10b981" size={`${16}`}/>;
//       case 'Shopping': return <ShoppingCart color="#8b5cf6" size={`${16}`}/>;
//       case 'Bills & Utilities': return <Zap color="#f59e0b" size={`${16}`}/>;
//       case 'Transportation': return <Truck color="#3b82f6" size={`${16}`}/>;
//       case 'Healthcare': return <Heart color="#ef4444" size={`${16}`}/>;
//       default: return <PieIcon size={`${16}`}/>;
//     }
//   };

//   return (
//     <div className="analytics-page">
//       {/* Header */}
//       <div className="analytics-header">
//         <div>
//           <h1>Financial Analytics</h1>
//           <p>Explore spending trends, income growth, savings performance, and category insights.</p>
//         </div>
//         <button className="btn-export">
//           <Download size={`${18}`}/> Export Report
//         </button>
//       </div>

//       {/* Filters (Static UI implementation) */}
//       <div className="filters-bar">
//         <div className="filter-group">
//           <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//             <Clock size={`${14}`}/> Jan 1 – Jun 30, 2024
//           </button>
//         </div>
//         <div className="filter-group" style={{ background: '#f1f5f9', padding: '4px', borderRadius: '8px', border: 'none' }}>
//           <button style={{ border: 'none', background: 'white', padding: '6px 12px', borderRadius: '4px', fontWeight: 600, boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>Monthly</button>
//           <button style={{ border: 'none', background: 'transparent', padding: '6px 12px', color: '#64748b' }}>Quarterly</button>
//           <button style={{ border: 'none', background: 'transparent', padding: '6px 12px', color: '#64748b' }}>Yearly</button>
//         </div>
//         <div className="filter-group">
//           <button className="btn-outline">All Categories</button>
//           <button className="btn-outline">All Flows</button>
//         </div>
//         <div className="filter-group" style={{ borderRight: 'none' }}>
//            <span style={{ fontSize: '13px', color: '#64748b' }}>Compare Period</span>
//         </div>
//       </div>

//       {/* OVERVIEW SECTION */}
//       <div className="section-title">OVERVIEW — JAN TO JUN 2024</div>
//       <div className="overview-grid">
//         {/* Card 1: Total Income */}
//         <div className="card metric-card">
//           <div className="metric-top">
//             <span className="metric-label">TOTAL INCOME</span>
//             <div className="metric-icon" style={{ background: '#dcfce7', color: '#16a34a' }}><DollarSign size={`${18}`}/></div>
//           </div>
//           <div className="metric-value">{Formatter.format(data.overview.totalIncome.amount)}</div>
//           <div className="metric-bottom">
//             <TrendBadge trend={`${data.overview.totalIncome.trend}`}/>
//             <Sparkline color="#16a34a" data={`${data.overview.totalIncome.sparkline}`}/>
//           </div>
//         </div>

//         {/* Card 2: Total Expenses */}
//         <div className="card metric-card">
//           <div className="metric-top">
//             <span className="metric-label">TOTAL EXPENSES</span>
//             <div className="metric-icon" style={{ background: '#fee2e2', color: '#dc2626' }}><CreditCard size={`${18}`}/></div>
//           </div>
//           <div className="metric-value">{Formatter.format(data.overview.totalExpenses.amount)}</div>
//           <div className="metric-bottom">
//             <TrendBadge trend={`${data.overview.totalExpenses.trend}`}/>
//             <Sparkline color="#dc2626" data={`${data.overview.totalExpenses.sparkline}`}/>
//           </div>
//         </div>

//         {/* Card 3: Net Savings */}
//         <div className="card metric-card">
//           <div className="metric-top">
//             <span className="metric-label">NET SAVINGS</span>
//             <div className="metric-icon" style={{ background: '#e0e7ff', color: '#4f46e5' }}><Building size={`${18}`}/></div>
//           </div>
//           <div className="metric-value">{Formatter.format(data.overview.netSavings.amount)}</div>
//           <div className="metric-bottom">
//             <TrendBadge trend={`${data.overview.netSavings.trend}`}/>
//             <Sparkline color="#4f46e5" data={`${data.overview.netSavings.sparkline}`}/>
//           </div>
//         </div>

//         {/* Card 4: Avg Monthly Spend */}
//         <div className="card metric-card">
//           <div className="metric-top">
//             <span className="metric-label">AVG MONTHLY SPEND</span>
//             <div className="metric-icon" style={{ background: '#fef3c7', color: '#d97706' }}><Monitor size={`${18}`}/></div>
//           </div>
//           <div className="metric-value">{Formatter.format(data.overview.avgMonthlySpend.amount)}</div>
//           <div className="metric-sub">6-month rolling average</div>
//           <div className="metric-bottom">
//             <TrendBadge trend={`${data.overview.avgMonthlySpend.trend}`}/>
//             <Sparkline color="#d97706" data={`${data.overview.avgMonthlySpend.sparkline}`}/>
//           </div>
//         </div>

//         {/* Card 5: Top Spending Category */}
//         <div className="card metric-card">
//           <div className="metric-top">
//             <span className="metric-label">TOP SPENDING CATEGORY</span>
//             <div className="metric-icon" style={{ background: '#f3e8ff', color: '#9333ea' }}><Coffee size={`${18}`}/></div>
//           </div>
//           <div className="metric-value">{data.overview.topSpendingCategory.name}</div>
//           <div className="metric-sub">{data.overview.topSpendingCategory.subtext}</div>
//           <div className="metric-bottom">
//             <TrendBadge trend={`${data.overview.topSpendingCategory.trend}`}/>
//             <Sparkline color="#9333ea" data={`${data.overview.topSpendingCategory.sparkline}`}/>
//           </div>
//         </div>

//         {/* Card 6: Savings Growth */}
//         <div className="card metric-card">
//           <div className="metric-top">
//             <span className="metric-label">SAVINGS GROWTH</span>
//             <div className="metric-icon" style={{ background: '#dcfce7', color: '#16a34a' }}><TrendingUp size={`${18}`}/></div>
//           </div>
//           <div className="metric-value">+{data.overview.savingsGrowth.percentage.toFixed(1)}%</div>
//           <div className="metric-sub">vs. January baseline</div>
//           <div className="metric-bottom">
//             <TrendBadge trend={`${data.overview.savingsGrowth.trend}`}/>
//             <Sparkline color="#16a34a" data={`${data.overview.savingsGrowth.sparkline}`}/>
//           </div>
//         </div>
//       </div>

//       {/* SPENDING & INCOME */}
//       <div className="section-title">SPENDING & INCOME</div>
//       <div className="charts-grid-2">
//         <div className="card">
//           <div className="card-header">
//             <div>
//               <h3 className="card-title">Monthly Spending</h3>
//               <p className="card-subtitle">Total outflows — Jan to Jun 2024</p>
//             </div>
//           </div>
//           <div style={{ height: 250 }}>
//             <ResponsiveContainer height="100%" width="100%">
//               <BarChart data={`${data.monthlySpendingTrend}`}>
//                 <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" vertical={`${false}`}/>
//                 <XAxis '#64748b' 12, axisLine={`${false}`} dataKey="month" fill: fontSize: tick={`${{" tickLine={`${false}`} }}/>
//                 <YAxis '#64748b' 12, axisLine={`${false}`} fill: fontSize: tick={`${{" tickFormatter={`${(val)" tickLine={`${false}`} }}> `$${val/1000}k`} />
//                 <Tooltip '#f8fafc' '0 '8px', 'none', -1px 4px 6px border: borderRadius: boxShadow: contentStyle={`${{" cursor={`${{" fill: rgba(0,0,0,0.1)' }}/>
//                 <Bar 0, 0]} 4, barSize={`${32}`} dataKey="amount" fill="#dc2626" radius={`${[4,"/>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-header">
//             <div>
//               <h3 className="card-title">Income Trend</h3>
//               <p className="card-subtitle">Monthly inflow growth — Jan to Jun 2024</p>
//             </div>
//           </div>
//           <div style={{ height: 250 }}>
//             <ResponsiveContainer height="100%" width="100%">
//               <LineChart data={`${data.incomeTrend}`}>
//                 <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" vertical={`${false}`}/>
//                 <XAxis '#64748b' 12, axisLine={`${false}`} dataKey="month" fill: fontSize: tick={`${{" tickLine={`${false}`} }}/>
//                 <YAxis '#64748b' 12, axisLine={`${false}`} fill: fontSize: tick={`${{" tickFormatter={`${(val)" tickLine={`${false}`} }}> `$${val/1000}k`} domain={[0, 10000]} />
//                 <Tooltip '0 '8px', 'none', -1px 4px 6px border: borderRadius: boxShadow: contentStyle={`${{" rgba(0,0,0,0.1)' }}/>
//                 <Line '#10b981', '#fff' 2, 4, dataKey="amount" dot={`${{" fill: r: stroke="#10b981" stroke: strokeWidth={`${3}`} strokeWidth: type="monotone" }}/>
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* CATEGORY & SAVINGS BREAKDOWN */}
//       <div className="section-title">CATEGORY & SAVINGS BREAKDOWN</div>
//       <div className="charts-grid-2">
//         <div className="card">
//           <div className="card-header">
//             <div>
//               <h3 className="card-title">Category Breakdown</h3>
//               <p className="card-subtitle">Spending distribution by category</p>
//             </div>
//           </div>
//           <div style={{ display: 'flex', height: 250, alignItems: 'center' }}>
//             <div style={{ width: '50%', height: '100%' }}>
//               <ResponsiveContainer height="100%" width="100%">
//                 <PieChart>
//                   <Pie data={`${data.categoryBreakdown}`} dataKey="amount" innerRadius={`${60}`} outerRadius={`${100}`} paddingAngle={`${2}`}>
//                     {data.categoryBreakdown.map((entry, index) => (
//                       <Cell fill={`${entry.color}`} key={`${`cell-${index}`}`}/>
//                     ))}
//                   </Pie>
//                   <Tooltip/>
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//             <div style={{ width: '50%', paddingLeft: '20px' }}>
//               {data.categoryBreakdown.map(cat => (
//                 <div key={cat.category} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color }} />
//                     <span style={{ color: '#475569' }}>{cat.category}</span>
//                   </div>
//                   <strong style={{ color: '#0f172a' }}>{cat.percentage}%</strong>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-header">
//             <div>
//               <h3 className="card-title">Savings Growth</h3>
//               <p className="card-subtitle">Actual vs. projected trajectory</p>
//             </div>
//           </div>
//           <div style={{ height: 250 }}>
//             <ResponsiveContainer height="100%" width="100%">
//               <ComposedChart data={`${data.savingsTrajectory}`}>
//                 <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" vertical={`${false}`}/>
//                 <XAxis '#64748b' 12, axisLine={`${false}`} dataKey="month" fill: fontSize: tick={`${{" tickLine={`${false}`} }}/>
//                 <YAxis '#64748b' 12, axisLine={`${false}`} fill: fontSize: tick={`${{" tickFormatter={`${(val)" tickLine={`${false}`} }}> `$${val}`} />
//                 <Tooltip/>
//                 <Line dataKey="projected" dot={`${false}`} name="Projected" stroke="#3b82f6" strokeDasharray="5 5" strokeWidth={`${2}`} type="monotone"/>
//                 <Line dataKey="actual" dot={`${false}`} name="Savings" stroke="#10b981" strokeWidth={`${3}`} type="monotone"/>
//               </ComposedChart>
//             </ResponsiveContainer>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '12px', marginTop: '8px' }}>
//               <span style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '2px', borderTop: '2px dashed #3b82f6' }}/> Projected</span>
//               <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '2px', background: '#10b981' }}/> Savings</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BUDGET & GOALS */}
//       <div className="section-title">BUDGET & GOALS</div>
//       <div className="charts-grid-2">
//         <div className="card">
//           <div className="card-header">
//             <div>
//               <h3 className="card-title">Budget Performance</h3>
//               <p className="card-subtitle">Budget vs. actual spending by category</p>
//             </div>
//           </div>
//           <div style={{ height: 250 }}>
//             <ResponsiveContainer height="100%" width="100%">
//               <BarChart barGap={`${0}`} data={`${data.budgetPerformance}`}>
//                 <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" vertical={`${false}`}/>
//                 <XAxis '#64748b' 12, axisLine={`${false}`} dataKey="category" fill: fontSize: tick={`${{" tickLine={`${false}`} }}/>
//                 <YAxis '#64748b' 12, axisLine={`${false}`} fill: fontSize: tick={`${{" tickFormatter={`${(val)" tickLine={`${false}`} }}> `$${val}`} />
//                 <Tooltip 'transparent' cursor={`${{" fill: }}/>
//                 <Bar 0, 0]} 4, barSize={`${12}`} dataKey="budget" fill="#e2e8f0" name="Budget" radius={`${[4,"/>
//                 {/* Dynamically coloring spent bar based on over budget or not */}
//                 <Bar 0, 0]} 4, barSize={`${12}`} dataKey="spent" name="Spent" radius={`${[4,">
//                   {data.budgetPerformance.map((entry, index) => (
//                     <Cell fill={`${entry.spent" key={`${`cell-${index}`}`}> entry.budget ? '#ef4444' : '#10b981'} />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '12px', marginTop: '8px' }}>
//               <span style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '12px', background: '#e2e8f0', borderRadius: '2px' }}/> Budget</span>
//               <span style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '12px', height: '12px', background: '#0f172a', borderRadius: '2px' }}/> Spent</span>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-header">
//             <div>
//               <h3 className="card-title">Goal Progress</h3>
//               <p className="card-subtitle">Track your financial milestones</p>
//             </div>
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             {data.goalProgress.map((goal, i) => {
//               const percentage = Math.round((goal.current / goal.target) * 100);
//               return (
//                 <div key={i} className="goal-item">
//                   <div className="goal-header">
//                     <div>
//                       <span className="goal-name">{goal.name}</span>
//                       <span className="goal-sub">{Formatter.format(goal.current)} of {Formatter.format(goal.target)} · Due {goal.dueDate}</span>
//                     </div>
//                     <span className="goal-percent" style={{ color: goal.color }}>{percentage}%</span>
//                   </div>
//                   <div className="progress-track">
//                     <div className="progress-fill" style={{ width: `${percentage}%`, background: goal.color }} />
//                   </div>
//                   <span className="goal-remaining">{Formatter.format(goal.target - goal.current)} remaining</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* INSIGHTS & HEALTH */}
//       <div className="section-title">INSIGHTS & HEALTH</div>
//       <div className="charts-grid-3">
//         <div className="card" style={{ background: '#f8fafc', border: 'none' }}>
//           <div className="card-header">
//             <div>
//               <h3 className="card-title">AI Financial Insights</h3>
//               <p className="card-subtitle">Automatically generated from your transaction history</p>
//             </div>
//           </div>
//           <div>
//             {data.insights.map((insight, i) => {
//               const iconMap = {
//                 success: <TrendingUp color="#22c55e" size={`${18}`}/>,
//                 danger: <ShoppingCart color="#ef4444" size={`${18}`}/>,
//                 warning: <DollarSign color="#f59e0b" size={`${18}`}/>,
//                 info: <Zap color="#8b5cf6" size={`${18}`}/>
//               };
//               return (
//                 <div key={i} className={`insight-item insight-${insight.type}`}>
//                   <div>{iconMap[insight.type]}</div>
//                   <div className="insight-content">
//                     <h4>{insight.title}</h4>
//                     <p>{insight.description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//           <div className="card">
//              <div className="card-header">
//                 <div>
//                   <h3 className="card-title">Financial Health Score</h3>
//                   <p className="card-subtitle">Holistic view of spending, savings & budget adherence</p>
//                 </div>
//               </div>
//               <div className="health-score-container">
//                 <div className="health-gauge">
//                   <ResponsiveContainer height="100%" width="100%">
//                     <PieChart>
//                       <Pie - 100 cx="50%" cy="50%" data={`${[{" data.financialHealth.score dataKey="value" endAngle={`${-270}`} innerRadius={`${45}`} outerRadius={`${55}`} startAngle={`${90}`} stroke="none" value: { }, }]}>
//                         <Cell fill="#10b981"/>
//                         <Cell fill="#f1f5f9"/>
//                       </Pie>
//                     </PieChart>
//                   </ResponsiveContainer>
//                   <div className="health-gauge-text">
//                     <h2>{data.financialHealth.score}</h2>
//                     <span>{data.financialHealth.label}</span>
//                   </div>
//                 </div>
//                 <div className="health-legend">
//                   <p>{data.financialHealth.description}</p>
//                   <div className="legend-items">
//                     <div className="legend-item"><span style={{ color: '#10b981' }}>● Excellent</span> <span>90-100</span></div>
//                     <div className="legend-item"><span style={{ color: '#3b82f6' }}>● Good</span> <span>70-89</span></div>
//                     <div className="legend-item"><span style={{ color: '#f59e0b' }}>● Average</span> <span>50-69</span></div>
//                     <div className="legend-item"><span style={{ color: '#ef4444' }}>● Needs Attention</span> <span>&lt; 50</span></div>
//                   </div>
//                 </div>
//               </div>
//           </div>

//           <div className="card">
//             <h3 className="card-title" style={{ marginBottom: '4px' }}>Monthly Comparison</h3>
//             <p className="card-subtitle" style={{ marginBottom: '16px' }}>June vs May 2024</p>
//             <div className="health-metrics">
//                <div className="metric-row">
//                  <div>
//                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', display: 'block' }}>INCOME</span>
//                    <span style={{ fontSize: '18px', fontWeight: 700 }}>${(data.financialHealth.metrics.income.current/1000).toFixed(1)}k <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 400, textDecoration: 'line-through' }}>${(data.financialHealth.metrics.income.previous/1000).toFixed(1)}k</span></span>
//                  </div>
//                  <TrendBadge trend={`${data.financialHealth.metrics.income.trend}`}/>
//                </div>
//                <div className="metric-row">
//                  <div>
//                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', display: 'block' }}>EXPENSES</span>
//                    <span style={{ fontSize: '18px', fontWeight: 700 }}>${(data.financialHealth.metrics.expenses.current/1000).toFixed(1)}k <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 400, textDecoration: 'line-through' }}>${(data.financialHealth.metrics.expenses.previous/1000).toFixed(1)}k</span></span>
//                  </div>
//                  <TrendBadge trend={`${data.financialHealth.metrics.expenses.trend}`}/>
//                </div>
//                <div className="metric-row" style={{ borderBottom: 'none' }}>
//                  <div>
//                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', display: 'block' }}>NET SAVINGS</span>
//                    <span style={{ fontSize: '18px', fontWeight: 700 }}>${(data.financialHealth.metrics.netSavings.current/1000).toFixed(1)}k <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 400, textDecoration: 'line-through' }}>${(data.financialHealth.metrics.netSavings.previous/1000).toFixed(1)}k</span></span>
//                  </div>
//                  <TrendBadge trend={`${data.financialHealth.metrics.netSavings.trend}`}/>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SPENDING MAP & EXPORT */}
//       <div className="section-title">SPENDING MAP & EXPORT</div>
//       <div className="charts-grid-3">
//          <div className="card">
//             <div className="card-header" style={{ marginBottom: '8px' }}>
//               <div>
//                 <h3 className="card-title">Spending Heatmap</h3>
//                 <p className="card-subtitle">Daily intensity — June 2024</p>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#64748b' }}>
//                 Less
//                 <div className="heatmap-cell heat-1" style={{ width: 12, height: 12 }} />
//                 <div className="heatmap-cell heat-2" style={{ width: 12, height: 12 }} />
//                 <div className="heatmap-cell heat-3" style={{ width: 12, height: 12 }} />
//                 <div className="heatmap-cell heat-4" style={{ width: 12, height: 12 }} />
//                 More
//               </div>
//             </div>
//             <div className="heatmap-container">
//               <div className="heatmap-y-axis">
//                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
//               </div>
//               <div style={{ flexGrow: 1 }}>
//                 <div className="heatmap-x-axis">
//                   <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
//                 </div>
//                 <div className="heatmap-grid">
//                   {data.spendingHeatmap.map((cell, i) => (
//                     <div key={i} className={`heatmap-cell heat-${cell.intensity}`} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//          </div>

//          <div className="card">
//             <div className="card-header">
//               <div>
//                 <h3 className="card-title">Export & Share</h3>
//                 <p className="card-subtitle">Download your analytics report or share with your advisor.</p>
//               </div>
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
//                <button className="btn-outline" style={{ background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca', display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px' }}>
//                  <Download size={`${16}`}/> Export as PDF
//                </button>
//                <button className="btn-outline" style={{ background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0', display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px' }}>
//                  <Download size={`${16}`}/> Export as CSV
//                </button>
//                <button className="btn-outline" style={{ background: '#eff6ff', color: '#3b82f6', borderColor: '#bfdbfe', display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px' }}>
//                  <Share2 size={`${16}`}/> Share Report
//                </button>
//             </div>
//             <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
//               <span style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase' }}>LAST EXPORTED</span>
//               <p style={{ margin: '4px 0 0 0', fontSize: '13px', fontWeight: 600 }}>Jun 30, 2024 · 9:14 AM</p>
//               <p style={{ margin: '0', fontSize: '13px', color: '#64748b' }}>Q2 2024 Full Report - PDF</p>
//             </div>
//          </div>
//       </div>

//       {/* CATEGORY LEADERBOARD */}
//       <div className="section-title">CATEGORY LEADERBOARD</div>
//       <div className="card">
//          <div className="card-header">
//             <div>
//               <h3 className="card-title">Top Spending Categories</h3>
//               <p className="card-subtitle">Ranked by total — June 2024</p>
//             </div>
//           </div>
//           <table className="leaderboard-table">
//             <thead>
//               <tr>
//                 <th style={{ width: '30%' }}>CATEGORY</th>
//                 <th>TRANSACTIONS</th>
//                 <th>AMOUNT</th>
//                 <th>MOM CHANGE</th>
//                 <th>TREND</th>
//                 <th style={{ width: '15%' }}>SHARE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.categoryLeaderboard.map((row, i) => (
//                 <tr key={i}>
//                   <td>
//                     <div className="category-cell">
//                       {getIconForCategory(row.category)}
//                       {row.category}
//                     </div>
//                   </td>
//                   <td style={{ color: '#64748b' }}>{row.transactions}</td>
//                   <td style={{ fontWeight: 600 }}>${row.amount}</td>
//                   <td>
//                     <span className={row.momChange > 0 ? 'text-red' : 'text-green'} style={{ background: row.momChange > 0 ? '#fef2f2' : '#f0fdf4', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>
//                       {row.momChange > 0 ? '+' : ''}{row.momChange}%
//                     </span>
//                   </td>
//                   <td>
//                     {row.trend === 'up' ? <TrendingUp className="text-red" size={`${16}`}/> : <TrendingDown className="text-green" size={`${16}`}/>}
//                   </td>
//                   <td>
//                     <div className="share-bar-container">
//                       <div style={{ flexGrow: 1, background: '#f1f5f9', height: '6px', borderRadius: '3px' }}>
//                         <div className="share-bar" style={{ width: `${row.share}%`, background: row.color }} />
//                       </div>
//                       <span style={{ fontSize: '12px', color: '#64748b', minWidth: '32px' }}>{row.share}%</span>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//       </div>

//     </div>
//   );
// }
