import { useEffect, useState } from "react";
// import { ErrorPage } from "../../../components/feedback/ErrorPage";
// import { useDashboard } from "../hooks/useDashboard";
// import { DahboardSkeleton } from "./DashboardSkeleton";
// import { Sidebar } from "../../../components/common/Sidebar";
// import { Header2 } from "../../../components/common/Header2";
// import { DropBox } from "../../transactions/pages/TransactionPage";
// import { Button } from "../../auth/components/Button";
// import {
//   Divide,
//   DownloadIcon,
//   Goal,
//   IndianRupee,
//   PiggyBank,
//   ShoppingBag,
//   Wallet,
// } from "lucide-react";
// import { useAuthStore } from "../../auth/store/authStore";
// import { Card1 } from "../components/Card1";
// import { AnalyticsCardWrapper } from "../components/AnalyticsCardLayout";
// import { RecentTransactionCard } from "../components/RecentTransactionCard";
// import { BudgetOverviewCard } from "../components/BudgetOverviewCard";
// import { GoalOverviewCard } from "../components/GoalOverviewCard";
// import { useNavigate } from "react-router-dom";

// export const DashboardPage = () => {
//   const { data, isLoading, isError, error } = useDashboard();
//   const navigate = useNavigate();

//   //local states
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [greetingTime, setGreetingTime] = useState("");
//   const [period, setPeriod] = useState("");
//   const user = useAuthStore((state) => state.user);

//   //useEffect
//   useEffect(() => {
//     const today = new Date();
//     const currentHour = today.getHours();
//     if (currentHour < 12) {
//       setGreetingTime("Morning");
//     } else if (currentHour < 18) {
//       setGreetingTime("Afternoon");
//     } else {
//       setGreetingTime("Evening");
//     }
//   }, []);

//   //functions
//   function handlePeriodSelection(e: React.MouseEvent<HTMLSelectElement>) {
//     const { value } = e.target;
//     value == "1"
//       ? setPeriod("last 6 months .")
//       : value == "2"
//         ? setPeriod("last year .")
//         : value == "3"
//           ? setPeriod("all time .")
//           : setPeriod("this month .");
//   }

//   if (isLoading) {
//     return <DahboardSkeleton />;
//   }
//   if (isError) {
//     return <ErrorPage />;
//   }
//   return (
//     <div className="dashboardPage flex">
//       {isSidebarOpen ? <Sidebar /> : null}
//       <div className="flex-col">
//         <Header2 />
//         <div className="mainDashboardScreen">
//           <div className="flex justify-between">
//             <div>
//               <h1>
//                 Good {greetingTime} {user?.name} 👋
//               </h1>
//               <p>Here's your financial overview for {period}</p>
//             </div>
//             <div className=" flex gap-1">
//               <DropBox
//                 name="Period"
//                 optionArray={[
//                   { name: "This Month", value: "0" },
//                   { name: "6 Months", value: "1" },
//                   { name: "1 year", value: "2" },
//                   { name: "All Time", value: "3" },
//                 ]}
//               />
//               <Button
//                 name="Export Report"
//                 className="btn-secondary"
//                 frontImg={<DownloadIcon size={14} />}
//               />
//             </div>
//           </div>
//           <div className="flex gap-3">
//             <Card1
//               title="Total Income"
//               titleValue={"₹" + `${data?.overview.totalIncome}`}
//               description={period}
//               icon={<IndianRupee />}
//             />
//             <Card1
//               title="Total Expenses"
//               titleValue={"₹" + `${data?.overview.totalExpenses}`}
//               description={period}
//               icon={<ShoppingBag />}
//             />
//             <Card1
//               title="Total Savings"
//               titleValue={"₹" + `${data?.overview.totalSavings}`}
//               description={"Net " + period}
//               icon={<PiggyBank />}
//             />
//             <Card1
//               title="Top Spending Category"
//               titleValue={
//                 "₹" + `${data?.overview.topSpendingCategory.categoryName}`
//               }
//               description={`${data?.overview.topSpendingCategory.amount}`}
//               icon={<Wallet />}
//             />
//           </div>

//           <div className="analyticsSection">
//             <AnalyticsCardWrapper
//               title="Monthly Spending Trend"
//               description="12-months overview"
//               children={<div></div>}
//             />

//             <AnalyticsCardWrapper
//               title="Category Breakdown"
//               description="This month's spend"
//               children={<div></div>}
//             />
//           </div>

//           <div className="flex-wrap">
//             {/* Recent transactions */}
//             <div className="recent-transactions">
//               <div className="flex justify-between">
//                 <div>
//                   <h2>Recent Transactions</h2>
//                   <p>Last few days</p>
//                 </div>
//                 <div
//                   onClick={() => {
//                     navigate("/transactions");
//                   }}
//                 >
//                   view all
//                 </div>
//               </div>
//               {data?.recentTransactions.map((transaction) => {
//                 return (
//                   <RecentTransactionCard
//                     title={transaction.title}
//                     description={transaction.description}
//                     label={transaction.categoryId}
//                     amount={transaction.amount}
//                     date={transaction.createdAt}
//                   />
//                 );
//               })}
//             </div>
//             {/* Budgets overview */}

//             <div className="budgets-overview-section">
//               <div className="flex justify-between">
//                 <div>
//                   <h2>Budget Overview</h2>
//                   <p></p>
//                 </div>
//                 <div>Manage</div>
//               </div>
//               {data?.budgetOverview.map((budget) => {
//                 return (
//                   <BudgetOverviewCard
//                     title={budget.name}
//                     budget={budget.budget}
//                     spent={budget.spent}
//                     remaining={budget.remaining}
//                     percentage={budget.usagePercentage}
//                   />
//                 );
//               })}
//             </div>
//             {/* Goals overview */}
//             <div className="goals-overview-section">
//               <div className="flex justify-between">
//                 <div>
//                   <h2>Goals Progress</h2>
//                   <p>{data?.totalGoals} active goals</p>
//                 </div>
//                 <div
//                   onClick={() => {
//                     navigate("/goals");
//                   }}
//                 >
//                   Add goal
//                 </div>
//               </div>
//               {data?.goalOverview.map((goal) => {
//                 return (
//                   <GoalOverviewCard
//                     backImg={<Goal size={14} />}
//                     title={goal.goal.title}
//                     remaniningMonths={goal.remainingMonths}
//                     currentAmount={goal.goal.currentSavedAmount}
//                     targetAmount={goal.goal.targetAmount}
//                     percentage={goal.currentProgress}
//                     remainingAmount={goal.remainingAmount}
//                     requiredSavingPerMonth={goal.requiredMonthlySavings}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import {
  LayoutDashboard,
  ArrowLeftRight,
  PiggyBank,
  Target,
  CreditCard,
  BarChart2,
  Settings,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Search,
  Bell,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Wallet,
  Home,
  Car,
  Heart,
  Tv,
  Zap,
  Coffee,
  Utensils,
  ArrowDownLeft,
  Plane,
  GraduationCap,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../../../styles/dashboard.css";

/* =============================================
   DATA CONSTANTS
   ============================================= */

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: ArrowLeftRight, label: "Transactions", id: "transactions" },
  { icon: PiggyBank, label: "Budgets", id: "budgets" },
  { icon: Target, label: "Goals", id: "goals" },
  { icon: CreditCard, label: "Accounts", id: "accounts" },
  { icon: BarChart2, label: "Analytics", id: "analytics" },
];

const BOTTOM_NAV_ITEMS = [
  { icon: Settings, label: "Settings", id: "settings" },
  { icon: HelpCircle, label: "Help", id: "help" },
];

const SPENDING_TREND_DATA = [
  { month: "Jan", spending: 6200 },
  { month: "Feb", spending: 5800 },
  { month: "Mar", spending: 7100 },
  { month: "Apr", spending: 6500 },
  { month: "May", spending: 6900 },
  { month: "Jun", spending: 7320 },
  { month: "Jul", spending: 6800 },
  { month: "Aug", spending: 7500 },
  { month: "Sep", spending: 6100 },
  { month: "Oct", spending: 6700 },
  { month: "Nov", spending: 7200 },
  { month: "Dec", spending: 7320 },
];

const INCOME_VS_EXPENSE_DATA = [
  { month: "Jul", income: 11200, expense: 6800 },
  { month: "Aug", income: 11900, expense: 7500 },
  { month: "Sep", income: 10800, expense: 6100 },
  { month: "Oct", income: 12100, expense: 6700 },
  { month: "Nov", income: 12500, expense: 7200 },
  { month: "Dec", income: 12840, expense: 7320 },
];

const CATEGORY_DATA = [
  { name: "Housing", value: 2400, color: "#4f46e5" },
  { name: "Food", value: 1640, color: "#10b981" },
  { name: "Transport", value: 820, color: "#f59e0b" },
  { name: "Healthcare", value: 480, color: "#ef4444" },
  { name: "Entertainment", value: 680, color: "#8b5cf6" },
  { name: "Shopping", value: 1300, color: "#3b82f6" },
];

const TRANSACTIONS = [
  {
    id: "1",
    description: "Salary Deposit",
    merchant: "Acme Corp",
    category: "Income",
    amount: 6420,
    type: "credit" as const,
    date: "Dec 31",
    iconVariant: "fp-tx-icon--emerald",
    badgeVariant: "fp-badge--emerald",
    Icon: ArrowDownLeft,
  },
  {
    id: "2",
    description: "Monthly Rent",
    merchant: "PropManage LLC",
    category: "Housing",
    amount: 2400,
    type: "debit" as const,
    date: "Dec 28",
    iconVariant: "fp-tx-icon--indigo",
    badgeVariant: "fp-badge--indigo",
    Icon: Home,
  },
  {
    id: "3",
    description: "Whole Foods Market",
    merchant: "Whole Foods",
    category: "Food",
    amount: 187.5,
    type: "debit" as const,
    date: "Dec 27",
    iconVariant: "fp-tx-icon--green",
    badgeVariant: "fp-badge--green",
    Icon: Utensils,
  },
  {
    id: "4",
    description: "Spotify Premium",
    merchant: "Spotify",
    category: "Entertainment",
    amount: 9.99,
    type: "debit" as const,
    date: "Dec 26",
    iconVariant: "fp-tx-icon--purple",
    badgeVariant: "fp-badge--purple",
    Icon: Tv,
  },
  {
    id: "5",
    description: "Gas Station",
    merchant: "Shell",
    category: "Transport",
    amount: 64.2,
    type: "debit" as const,
    date: "Dec 25",
    iconVariant: "fp-tx-icon--amber",
    badgeVariant: "fp-badge--amber",
    Icon: Car,
  },
  {
    id: "6",
    description: "CVS Pharmacy",
    merchant: "CVS",
    category: "Healthcare",
    amount: 32.8,
    type: "debit" as const,
    date: "Dec 24",
    iconVariant: "fp-tx-icon--red",
    badgeVariant: "fp-badge--red",
    Icon: Heart,
  },
  {
    id: "7",
    description: "Electric Bill",
    merchant: "PG&E",
    category: "Utilities",
    amount: 118.0,
    type: "debit" as const,
    date: "Dec 23",
    iconVariant: "fp-tx-icon--yellow",
    badgeVariant: "fp-badge--yellow",
    Icon: Zap,
  },
  {
    id: "8",
    description: "Blue Bottle Coffee",
    merchant: "Blue Bottle",
    category: "Food",
    amount: 14.5,
    type: "debit" as const,
    date: "Dec 22",
    iconVariant: "fp-tx-icon--orange",
    badgeVariant: "fp-badge--green",
    Icon: Coffee,
  },
];

const BUDGETS = [
  { category: "Housing", spent: 2400, budget: 2500, color: "#4f46e5" },
  { category: "Food & Dining", spent: 1640, budget: 1800, color: "#10b981" },
  { category: "Transport", spent: 820, budget: 600, color: "#f59e0b" },
  { category: "Entertainment", spent: 680, budget: 800, color: "#8b5cf6" },
  { category: "Healthcare", spent: 480, budget: 500, color: "#ef4444" },
  { category: "Shopping", spent: 1300, budget: 1000, color: "#3b82f6" },
];

const GOALS = [
  {
    id: "1",
    name: "Emergency Fund",
    Icon: Target,
    current: 18500,
    target: 25000,
    deadline: "Jun 2025",
    color: "#4f46e5",
  },
  {
    id: "2",
    name: "House Down Payment",
    Icon: Home,
    current: 42000,
    target: 80000,
    deadline: "Dec 2026",
    color: "#10b981",
  },
  {
    id: "3",
    name: "Europe Vacation",
    Icon: Plane,
    current: 3200,
    target: 5000,
    deadline: "Aug 2025",
    color: "#8b5cf6",
  },
  {
    id: "4",
    name: "MBA Program",
    Icon: GraduationCap,
    current: 12000,
    target: 30000,
    deadline: "Sep 2027",
    color: "#f59e0b",
  },
  {
    id: "5",
    name: "New Car",
    Icon: Car,
    current: 8800,
    target: 12000,
    deadline: "Mar 2025",
    color: "#3b82f6",
  },
];

/* =============================================
   SIDEBAR COMPONENT
   ============================================= */

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="fp-sidebar">
      <div className="fp-sidebar-logo">
        <div className="fp-sidebar-logo-inner">
          <div className="fp-sidebar-logo-mark">FP</div>
          <span className="fp-sidebar-logo-name">FinPilot</span>
        </div>
      </div>

      <nav className="fp-sidebar-nav">
        <div className="fp-sidebar-nav-group">
          {NAV_ITEMS.map(({ icon: Icon, label, id }) => {
            const isActive = activePage === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`fp-sidebar-nav-item${isActive ? " fp-sidebar-nav-item--active" : ""}`}
              >
                <span className="fp-sidebar-nav-icon">
                  <Icon size={16} />
                </span>
                <span className="fp-sidebar-nav-label">{label}</span>
                {isActive && (
                  <span className="fp-sidebar-nav-chevron">
                    <ChevronRight size={12} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="fp-sidebar-section">
          <span className="fp-sidebar-section-title">Workspace</span>
          <div className="fp-sidebar-nav-group">
            <button className="fp-sidebar-nav-item">
              <span className="fp-sidebar-ws-dot fp-sidebar-ws-dot--green">
                P
              </span>
              <span className="fp-sidebar-nav-label">Personal</span>
            </button>
            <button className="fp-sidebar-nav-item">
              <span className="fp-sidebar-ws-dot fp-sidebar-ws-dot--purple">
                J
              </span>
              <span className="fp-sidebar-nav-label">Joint</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="fp-sidebar-bottom">
        <div className="fp-sidebar-bottom-group">
          {BOTTOM_NAV_ITEMS.map(({ icon: Icon, label, id }) => (
            <button key={id} className="fp-sidebar-nav-item">
              <span className="fp-sidebar-nav-icon">
                <Icon size={16} />
              </span>
              <span className="fp-sidebar-nav-label">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* =============================================
   TOP NAV COMPONENT
   ============================================= */

function TopNav() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fp-topnav">
      <div className="fp-topnav-search">
        <span className="fp-topnav-search-icon">
          <Search size={15} />
        </span>
        <input
          type="text"
          placeholder="Search transactions, accounts…"
          className="fp-topnav-search-input"
        />
        <span className="fp-topnav-search-kbd">⌘K</span>
      </div>

      <div className="fp-topnav-right">
        <button className="fp-topnav-icon-btn">
          <Bell size={16} />
          <span className="fp-notif-dot" />
        </button>

        <div className="fp-topnav-divider" />

        <div className="fp-profile-btn-wrapper">
          <button
            className="fp-topnav-profile-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="fp-topnav-avatar">AJ</div>
            <div className="fp-topnav-user-info">
              <p className="fp-topnav-user-name">Alex Johnson</p>
              <p className="fp-topnav-user-plan">Personal Plan</p>
            </div>
            <span className="fp-topnav-chevron">
              <ChevronDown size={14} />
            </span>
          </button>

          {showUserMenu && (
            <>
              <div
                className="fp-topnav-overlay"
                onClick={() => setShowUserMenu(false)}
              />
              <div className="fp-topnav-dropdown">
                <div className="fp-dropdown-header">
                  <p className="fp-dropdown-header-name">Alex Johnson</p>
                  <p className="fp-dropdown-header-email">alex@finpilot.com</p>
                </div>
                {[
                  "Profile",
                  "Account Settings",
                  "Billing",
                  "Notifications",
                ].map((item) => (
                  <button key={item} className="fp-dropdown-item">
                    {item}
                  </button>
                ))}
                <div className="fp-dropdown-danger-zone">
                  <button className="fp-dropdown-item fp-dropdown-item--danger">
                    Sign out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

/* =============================================
   PAGE HEADER COMPONENT
   ============================================= */

function PageHeader() {
  return (
    <div className="fp-page-header">
      <div className="fp-page-header-inner">
        <div>
          <h1 className="fp-page-title">Good morning, Alex 👋</h1>
          <p className="fp-page-subtitle">
            Here's your financial overview for December 2024.
          </p>
        </div>
        <div className="fp-header-actions">
          <button className="fp-period-btn">
            <span className="fp-period-btn-label">Period:</span>
            <span className="fp-period-btn-value">This Month</span>
            <span className="fp-period-btn-chevron">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <button className="fp-export-btn">Export Report</button>
        </div>
      </div>
    </div>
  );
}

/* =============================================
   KPI CARDS COMPONENT
   ============================================= */

interface KPICardProps {
  title: string;
  value: string;
  sub: string;
  trend: number;
  iconWrapClass: string;
  Icon: React.ComponentType<{ size?: number }>;
}

function KPICard({
  title,
  value,
  sub,
  trend,
  iconWrapClass,
  Icon,
}: KPICardProps) {
  const isUp = trend >= 0;
  return (
    <div className="fp-kpi-card">
      <div className="fp-kpi-card-header">
        <span className="fp-kpi-card-title">{title}</span>
        <div className={`fp-kpi-icon-wrap ${iconWrapClass}`}>
          <Icon size={16} />
        </div>
      </div>
      <div className="fp-kpi-card-body">
        <p className="fp-kpi-card-value">{value}</p>
        <p className="fp-kpi-card-sub">{sub}</p>
      </div>
      <div className="fp-kpi-card-trend">
        <span
          className={`fp-trend-badge ${isUp ? "fp-trend-badge--up" : "fp-trend-badge--down"}`}
        >
          {isUp ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {isUp ? "+" : ""}
          {trend}%
        </span>
        <span className="fp-trend-label">vs last month</span>
      </div>
    </div>
  );
}

function KPICards() {
  return (
    <div className="fp-kpi-grid fp-section-mb">
      <KPICard
        title="Total Income"
        value="$12,840"
        sub="This month"
        trend={8.2}
        iconWrapClass="fp-kpi-icon-wrap--indigo"
        Icon={DollarSign}
      />
      <KPICard
        title="Total Expenses"
        value="$7,320"
        sub="This month"
        trend={-3.5}
        iconWrapClass="fp-kpi-icon-wrap--amber"
        Icon={ShoppingBag}
      />
      <KPICard
        title="Total Savings"
        value="$5,520"
        sub="Net this month"
        trend={14.8}
        iconWrapClass="fp-kpi-icon-wrap--emerald"
        Icon={PiggyBank}
      />
      <KPICard
        title="Top Category"
        value="Housing"
        sub="$2,400 spent"
        trend={2.1}
        iconWrapClass="fp-kpi-icon-wrap--purple"
        Icon={Wallet}
      />
    </div>
  );
}

/* =============================================
   CHART TOOLTIP COMPONENTS
   ============================================= */

interface TooltipPayloadItem {
  name: string;
  value: number;
  color: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

function SpendingTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="fp-chart-tooltip">
      <p className="fp-chart-tooltip-label">{label}</p>
      <p className="fp-chart-tooltip-value">
        ${payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}

function IncomeExpenseTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="fp-chart-tooltip">
      <p className="fp-chart-tooltip-label">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="fp-chart-tooltip-row">
          <span className="fp-chart-tooltip-row-label">{p.name}</span>
          <span
            className="fp-chart-tooltip-row-value"
            style={{ color: p.color }}
          >
            ${p.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

/* =============================================
   SPENDING TREND CHART
   ============================================= */

function SpendingTrendChart() {
  return (
    <div className="fp-chart-card">
      <div className="fp-chart-header">
        <h3 className="fp-chart-title">Monthly Spending Trend</h3>
        <p className="fp-chart-subtitle">12-month overview</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={SPENDING_TREND_DATA}
          margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f1f5"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<SpendingTooltip />} />
          <Line
            type="monotone"
            dataKey="spending"
            stroke="#4f46e5"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#4f46e5",
              strokeWidth: 2,
              stroke: "#fff",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/* =============================================
   INCOME VS EXPENSE CHART
   ============================================= */

function IncomeVsExpenseChart() {
  return (
    <div className="fp-chart-card">
      <div className="fp-chart-header">
        <h3 className="fp-chart-title">Income vs Expenses</h3>
        <p className="fp-chart-subtitle">Last 6 months</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={INCOME_VS_EXPENSE_DATA}
          margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
          barGap={4}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f1f5"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<IncomeExpenseTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
          />
          <Bar
            dataKey="income"
            name="Income"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
            maxBarSize={28}
          />
          <Bar
            dataKey="expense"
            name="Expense"
            fill="#4f46e5"
            radius={[4, 4, 0, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* =============================================
   CATEGORY BREAKDOWN CHART
   ============================================= */

const RADIAN = Math.PI / 180;

type PieLabelProps = {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
};

function renderPieLabel({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  percent = 0,
}: PieLabelProps) {
  if (percent < 0.07) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: 11, fontWeight: 600 }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

function CategoryBreakdownChart() {
  return (
    <div className="fp-chart-card">
      <div className="fp-chart-header">
        <h3 className="fp-chart-title">Category Breakdown</h3>
        <p className="fp-chart-subtitle">This month's spend</p>
      </div>
      <div className="fp-chart-pie-wrapper">
        <ResponsiveContainer width="55%" height={180}>
          <PieChart>
            <Pie
              data={CATEGORY_DATA}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={80}
              dataKey="value"
              labelLine={false}
              label={renderPieLabel}
            >
              {CATEGORY_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="fp-chart-legend-list">
          {CATEGORY_DATA.map((cat) => (
            <div key={cat.name} className="fp-chart-legend-item">
              <div className="fp-chart-legend-left">
                <span
                  className="fp-chart-legend-dot"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="fp-chart-legend-name">{cat.name}</span>
              </div>
              <span className="fp-chart-legend-value">
                ${cat.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =============================================
   RECENT TRANSACTIONS COMPONENT
   ============================================= */

function RecentTransactions() {
  return (
    <div className="fp-widget-card">
      <div className="fp-widget-header">
        <div>
          <h3 className="fp-widget-title">Recent Transactions</h3>
          <p className="fp-widget-subtitle">Last 30 days</p>
        </div>
        <button className="fp-widget-action-link">View all</button>
      </div>

      <div className="fp-divider-list">
        {TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="fp-tx-item">
            <div className={`fp-tx-icon ${tx.iconVariant}`}>
              <tx.Icon size={14} />
            </div>

            <div className="fp-tx-info">
              <p className="fp-tx-description">{tx.description}</p>
              <p className="fp-tx-merchant">{tx.merchant}</p>
            </div>

            <div className="fp-tx-category-col">
              <span className={`fp-tx-badge ${tx.badgeVariant}`}>
                {tx.category}
              </span>
            </div>

            <div className="fp-tx-amount-col">
              <p
                className={`fp-tx-amount${tx.type === "credit" ? " fp-tx-amount--credit" : ""}`}
              >
                {tx.type === "credit" ? "+" : "-"}$
                {tx.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="fp-tx-date">{tx.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =============================================
   BUDGET OVERVIEW COMPONENT
   ============================================= */

function BudgetOverview() {
  return (
    <div className="fp-widget-card">
      <div className="fp-widget-header">
        <div>
          <h3 className="fp-widget-title">Budget Overview</h3>
          <p className="fp-widget-subtitle">December 2024</p>
        </div>
        <button className="fp-widget-action-link">Manage</button>
      </div>

      <div className="fp-divider-list">
        {BUDGETS.map((item) => {
          const pct = Math.min((item.spent / item.budget) * 100, 100);
          const isOver = item.spent > item.budget;
          const barColor = isOver ? "#ef4444" : item.color;
          const remaining = item.budget - item.spent;

          return (
            <div key={item.category} className="fp-budget-item">
              <div className="fp-budget-item-header">
                <div className="fp-budget-left">
                  <span
                    className="fp-budget-dot"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="fp-budget-category">{item.category}</span>
                </div>
                <div className="fp-budget-amounts">
                  <span
                    className={`fp-budget-spent${isOver ? " fp-budget-spent--over" : ""}`}
                  >
                    ${item.spent.toLocaleString()}
                  </span>
                  <span className="fp-budget-of">
                    {" "}
                    / ${item.budget.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="fp-progress-track">
                <div
                  className="fp-progress-fill"
                  style={
                    {
                      "--progress-width": `${pct}%`,
                      "--progress-color": barColor,
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="fp-budget-footer">
                <span className="fp-budget-pct">{pct.toFixed(0)}% used</span>
                <span
                  className={`fp-budget-remaining ${isOver ? "fp-budget-remaining--over" : "fp-budget-remaining--ok"}`}
                >
                  {isOver
                    ? `$${Math.abs(remaining).toLocaleString()} over`
                    : `$${remaining.toLocaleString()} left`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =============================================
   GOALS PROGRESS COMPONENT
   ============================================= */

function GoalsProgress() {
  return (
    <div className="fp-widget-card">
      <div className="fp-widget-header">
        <div>
          <h3 className="fp-widget-title">Goals Progress</h3>
          <p className="fp-widget-subtitle">{GOALS.length} active goals</p>
        </div>
        <button className="fp-widget-action-link">Add goal</button>
      </div>

      <div className="fp-divider-list">
        {GOALS.map((goal) => {
          const pct = Math.min((goal.current / goal.target) * 100, 100);
          const remaining = goal.target - goal.current;
          const iconBg = `${goal.color}18`;

          return (
            <div key={goal.id} className="fp-goal-item">
              <div className="fp-goal-item-header">
                <div className="fp-goal-left">
                  <div
                    className="fp-goal-icon"
                    style={
                      {
                        "--goal-icon-bg": iconBg,
                        "--goal-icon-color": goal.color,
                      } as React.CSSProperties
                    }
                  >
                    <goal.Icon size={14} />
                  </div>
                  <div>
                    <p className="fp-goal-name">{goal.name}</p>
                    <p className="fp-goal-deadline">By {goal.deadline}</p>
                  </div>
                </div>
                <div className="fp-goal-amounts">
                  <p className="fp-goal-current">
                    ${goal.current.toLocaleString()}
                  </p>
                  <p className="fp-goal-target">
                    of ${goal.target.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="fp-progress-track">
                <div
                  className="fp-progress-fill"
                  style={
                    {
                      "--progress-width": `${pct}%`,
                      "--progress-color": goal.color,
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="fp-goal-footer">
                <span className="fp-goal-pct">{pct.toFixed(0)}% reached</span>
                <span
                  className="fp-goal-remaining"
                  style={
                    { "--goal-icon-color": goal.color } as React.CSSProperties
                  }
                >
                  ${remaining.toLocaleString()} remaining
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =============================================
   ROOT APP COMPONENT
   ============================================= */

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="fp-app">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="fp-main-wrapper">
        <TopNav />

        <main className="fp-page-content">
          <PageHeader />
          <KPICards />

          <div className="fp-charts-grid">
            <SpendingTrendChart />
            <IncomeVsExpenseChart />
            <CategoryBreakdownChart />
          </div>

          <div className="fp-bottom-grid">
            <RecentTransactions />
            <div className="fp-right-col">
              <BudgetOverview />
              <GoalsProgress />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
