import { useState } from "react";

import "../../../styles/dashboard.css";
import { Sidebar } from "../components/Sidebar";
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
import { useNavigate } from "react-router-dom";
import { useDashboard } from "../hooks/useDashboard";
import { useAuthStore } from "../../auth/store/authStore";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("dashboard");
  const { data, isLoading, isError, error } = useDashboard();
  const navigate = useNavigate();

  //local states
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [period, setPeriod] = useState("this month .");
  const user = useAuthStore((state) => state.user);

  //useEffect

  //functions
  function handlePeriodSelection(e: React.MouseEvent<HTMLSelectElement>) {
    const { value } = e.target;
    value == "1"
      ? setPeriod("last 6 months .")
      : value == "2"
        ? setPeriod("last year .")
        : value == "3"
          ? setPeriod("all time .")
          : setPeriod("this month .");
  }

  if (isLoading) {
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
        <TopNav />

        <main className="fp-page-content">
          <PageHeader
            name={user?.name}
            period={period}
            handlePeriod={handlePeriodSelection}
          />
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
