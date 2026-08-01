import { useEffect, useState } from "react";
import { ErrorPage } from "../../../components/feedback/ErrorPage";
import { useDashboard } from "../hooks/useDashboard";
import { DahboardSkeleton } from "./DashboardSkeleton";
import { Sidebar } from "../../../components/common/Sidebar";
import { Header2 } from "../../../components/common/Header2";
import { DropBox } from "../../transactions/pages/TransactionPage";
import { Button } from "../../auth/components/Button";
import { Divide, DownloadIcon, Goal, IndianRupee, PiggyBank, ShoppingBag, Wallet } from "lucide-react";
import { useAuthStore } from "../../auth/store/authStore";
import { Card1 } from "../components/Card1";
import { AnalyticsCardWrapper } from "../components/AnalyticsCardLayout";
import { RecentTransactionCard } from "../components/RecentTransactionCard";
import { BudgetOverviewCard } from "../components/BudgetOverviewCard";
import { GoalOverviewCard } from "../components/GoalOverviewCard";

export const DashboardPage = () => {
  const { data, isLoading, isError, error } = useDashboard();

  //local states
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [greetingTime, setGreetingTime] = useState("");
  const [period, setPeriod] = useState("");
  const user = useAuthStore((state) => state.user);

  //useEffect
  useEffect(() => {
    const today = new Date();
    const currentHour = today.getHours();
    if (currentHour < 12) {
      setGreetingTime("Morning");
    } else if (currentHour < 18) {
      setGreetingTime("Afternoon");
    } else {
      setGreetingTime("Evening");
    }
  }, []);

  //functions
  function handlePeriodSelection(e:React.MouseEvent<HTMLSelectElement>) {
    const {value} = e.target
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
    <div className="dashboardPage flex">
      {isSidebarOpen ? <Sidebar /> : null}
      <div className="flex-col">
        <Header2 />
        <div className="mainDashboardScreen">
          <div className="flex justify-between">
            <div>
              <h1>
                Good {greetingTime} {user?.name} 👋
              </h1>
              <p>Here's your financial overview for {period}</p>
            </div>
            <div className=" flex gap-1">
              <DropBox
                name="Period"
                optionArray={[
                  { name: "This Month", value: "0" },
                  { name: "6 Months", value: "1" },
                  { name: "1 year", value: "2" },
                  { name: "All Time", value: "3" },
                ]}
              />
              <Button
                name="Export Report"
                className="btn-secondary"
                frontImg={<DownloadIcon size={14} />}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Card1
              title="Total Income"
              titleValue={"₹" + `${data?.overview.totalIncome}`}
              description={period}
              icon={<IndianRupee />}
            />
            <Card1
              title="Total Expenses"
              titleValue={"₹" + `${data?.overview.totalExpenses}`}
              description={period}
              icon={<ShoppingBag />}
            />
            <Card1
              title="Total Savings"
              titleValue={"₹" + `${data?.overview.totalSavings}`}
              description={"Net " + period}
              icon={<PiggyBank />}
            />
            <Card1
              title="Top Spending Category"
              titleValue={"₹" + `${data?.overview.topSpendingCategory.categoryName}`}
              description={`${data?.overview.topSpendingCategory.amount}`}
              icon={<Wallet />}
            />
          </div>

          <div className="analyticsSection">
            <AnalyticsCardWrapper title="Monthly Spending Trend" description="12-months overview" children= {<div></div>}/>

            <AnalyticsCardWrapper title="Category Breakdown" description="This month's spend" children= {<div></div>}/>
          </div>
        
          <div className="flex-wrap">
            {/* Recent transactions */}
            <div className="recent-transactions">
              <div className="flex justify-between">
                <div>
                  <h2>Recent Transactions</h2>
                  <p>Last few days</p>
                </div>
                <div>view all</div>
              </div>
              {data?.recentTransactions.map((transaction) => {
                return (<RecentTransactionCard title={transaction.title} description={transaction.description} label={transaction.categoryId} amount={transaction.amount} date={transaction.createdAt}/>)
              })}
              
            </div>
            {/* Budgets overview */}

            <div className="budgets-overview-section">
              <div className="flex justify-between">
                <div>
                  <h2>Budget Overview</h2>
                  <p></p>
                </div>
                <div>Manage</div>
              </div>
              {data?.budgetOverview.map((budget) => {
                return(<BudgetOverviewCard title={budget.name} budget={budget.budget} spent={budget.spent} remaining={budget.remaining} percentage={budget.usagePercentage} />)
              })}
            </div>
            {/* Goals overview */}
            <div className="goals-overview-section">
              <div className="flex justify-between">
                <div>
                  <h2>Goals Progress</h2>
                  <p>{data?.totalGoals} active goals</p>
                </div>
                <div>Add goal</div>
              </div>
              {data?.goalOverview.map((goal) => {
                return (<GoalOverviewCard backImg={<Goal size={14}/>} title={goal.goal.title} remaniningMonths={goal.remainingMonths} currentAmount={goal.goal.currentSavedAmount} targetAmount={goal.goal.targetAmount} percentage={goal.currentProgress} remainingAmount={goal.remainingAmount} requiredSavingPerMonth={goal.requiredMonthlySavings} />)
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
