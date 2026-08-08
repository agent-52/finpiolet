import { useEffect } from "react";
import { useCurrentUser } from "./features/auth/hooks/useCurrentUser";
import { useAuthStore } from "./features/auth/store/authStore";
import "./app.css";
import { Header } from "./components/common/Header";
import { Button } from "./features/auth/components/Button";
import { ArrowBigRight, ArrowRight, ChevronsRight } from "lucide-react";
import { FeatureCard } from "./components/landingPage/FeatureCard";

const featureArray = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 7h16M3 11h16M3 15h10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Track Every Transaction",
    desc: "Keep your income and expenses organized with categories, search, filters, and transaction history.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="14"
          width="4"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="9"
          y="10"
          width="4"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="15"
          y="6"
          width="4"
          height="13"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    title: "Build Smarter Budgets",
    desc: "Set category-based spending limits and see exactly how much of your budget you've used.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M11 7v4l3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Plan Your Goals",
    desc: "Set savings targets, track progress, and understand how much you need to save each month.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 16L8 11L12 14L19 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Understand Your Spending",
    desc: "Turn your financial data into useful trends, breakdowns, and savings metrics.",
  },
];

function App() {
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const { data, isLoading, isError, isSuccess } = useCurrentUser();
  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      login(data.user);
    }
  }, [isSuccess, data, login]);

  useEffect(() => {
    if (isError) {
      logout();
    }
  }, [isError, logout]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-col">
      <Header />
      <div className="hero">
        <div className="eyebrow">Personal Finance Platform</div>
        <div>
          <h1>
            Take Control of <span className="">Your Money .</span>
          </h1>
          <h2>
            Track your spending, plan your budget, reach your goals, and
            understand your finances — all in one place.
          </h2>
          <p>
            FinPilot gives you a complete view of your finances with powerful
            analytics and personalized AI insights that help you make better
            financial decisions.
          </p>
        </div>
        <div className="flex-col">
          <div className="flex">
            <Button
              name="Get Started Free"
              frontImg={<ArrowRight size={14} />}
              className="btn-primary"
            />
            <Button name="Explore Features" className="btn-primary" />
          </div>
          <p>
            No complicated spreadsheets. No scattered finance apps. Just one
            clear view of your money.
          </p>
        </div>
        <div className="dashboardMockupContainer">
          {/* <DashboardMockup /> */}
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="featuresSection">
        <div className="flex-col">
          <h2>Everything you need to understand your finances.</h2>
          <p>
            FinPilot brings your everyday financial decisions into one simple
            workspace.
          </p>
        </div>
        <div className="flex">
          {featureArray.map((feature) => (
            <div key={feature.title}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="transactionSection flex">
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <div className="flex-col">
            <p>TRANSACTION</p>
            <h2>Know where your money goes.</h2>
            <p>
              Keep every transaction organized and searchable. Track both income
              and expenses, assign categories, and quickly understand your
              day-to-day spending.
            </p>
            <div>
              <div>
                <span className="right-circle">
                  <ChevronsRight />
                </span>
                Income and expense tracking{" "}
              </div>
              <div>
                <span className="right-circle">
                  <ChevronsRight />
                </span>
                Custom categories
              </div>
              <div>
                <span className="right-circle">
                  <ChevronsRight />
                </span>
                Search and filtering
              </div>
              <div>
                <span className="right-circle">
                  <ChevronsRight />
                </span>
                Transaction editing
              </div>
              <div>
                <span className="right-circle">
                  <ChevronsRight />
                </span>
                Transaction history
              </div>
            </div>
            <div>
              <Button
                name="Start Tracking"
                className="btn-primary"
                frontImg={<ArrowRight size={14} />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="budget-section"></div>
    </div>
  );
}

export default App;
