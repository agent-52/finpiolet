import { useEffect, useState } from "react";
import { ErrorPage } from "../../../components/feedback/ErrorPage";
import { useDashboard } from "../hooks/useDashboard";
import { DahboardSkeleton } from "./DashboardSkeleton";
import { Sidebar } from "../../../components/common/Sidebar";
import { Header2 } from "../../../components/common/Header2";
import { DropBox } from "../../transactions/pages/TransactionPage";
import { Button } from "../../auth/components/Button";
import { Divide, DownloadIcon, IndianRupee, PiggyBank, ShoppingBag, Wallet } from "lucide-react";
import { useAuthStore } from "../../auth/store/authStore";
import { Card1 } from "../components/Card1";
import { AnalyticsCardWrapper } from "../components/AnalyticsCardLayout";

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
            {/* Budgets overview */}
            {/* Goals overview */}
          </div>

        </div>
      </div>
    </div>
  );
};
