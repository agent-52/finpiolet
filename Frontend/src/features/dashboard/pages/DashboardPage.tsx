import { useState } from "react";

import "../../../styles/dashboard.css";
import { Sidebar } from "../../../components/common/Sidebar";
import TopNav from "../components/TopNav";
import PageHeader from "../components/PageHeader";
import KPICards from "../components/KpiCards";
import { SpendingTrendChart } from "../components/SpendingTrendChart";
import { IncomeVsExpenseChart } from "../components/IncomeVsExpenseChart";
import CategoryBreakdownChart from "../components/CategoryBreakdownChart";
import RecentTransactions from "../components/RecentTransactions";
import BudgetOverview from "../components/BudgetOverview";
import GoalsProgress from "../components/GoalProgress";
import { DahboardSkeleton } from "./DashboardSkeleton";
import { ErrorPage } from "../../../components/feedback/ErrorPage";

import { useDashboard } from "../hooks/useDashboard";
import { useAuthStore } from "../../auth/store/authStore";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("dashboard");
  const { data, isLoading, isError, error } = useDashboard();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [period, setPeriod] = useState("this month .");
  const user = useAuthStore((state) => state.user);

  if (isLoading || !data) {
    return <DahboardSkeleton />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="fp-app">
      {isSidebarOpen ? (
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
      ) : null}

      <div className="fp-main-wrapper">
        <TopNav user={user} />

        <main className="fp-page-content">
          <PageHeader name={user?.name} period={period} />
          <KPICards overviewData={data.overview} />

          <div className="fp-charts-grid">
            <SpendingTrendChart />
            <IncomeVsExpenseChart />
            <CategoryBreakdownChart />
          </div>

          <div className="fp-bottom-grid">
            <RecentTransactions transactionsData={data.recentTransactions} />
            <div className="fp-right-col">
              <BudgetOverview />
              <GoalsProgress goalsData={data.goalOverview} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
