import "./app.css";
import "./styles/landingPage.css";

import Nav from "./components/landingPage/Nav";
import Hero from "./components/landingPage/Hero";
import ValueProp from "./components/landingPage/ValueProp";
import Transactions from "./components/landingPage/Transactions";
import Budgeting from "./components/landingPage/Budgeting";
import Goals from "./components/landingPage/Goals";
import Analytics from "./components/landingPage/Analytics";
import AIInsights from "./components/landingPage/AIInsights";
import AIAssistant from "./components/landingPage/AIAssistant";
import SmartSavings from "./components/landingPage/SmartSavings";
import GoalPlanner from "./components/landingPage/GoalPlanner";
import CSVImport from "./components/landingPage/CSVImport";
import MonthlySummary from "./components/landingPage/MonthlySummary";
import Overview from "./components/landingPage/Overview";
import Trust from "./components/landingPage/Trust";
import FinalCTA from "./components/landingPage/FinalCTA";
import Footer from "./components/landingPage/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Nav />
      <Hero />
      <ValueProp />
      <Transactions />
      <Budgeting />
      <Goals />
      <Analytics />
      <AIInsights />
      <AIAssistant />
      <SmartSavings />
      <GoalPlanner />
      <CSVImport />
      <MonthlySummary />
      <Overview />
      <Trust />
      <FinalCTA />
      <Footer />
    </div>
  );
}
