import { useEffect, useState } from "react";
import { DropBox } from "../../transactions/pages/TransactionPage";

export default function PageHeader({
  name,
  period,
}: {
  name?: string;
  period: string;
}) {
  const [greetingTime, setGreetingTime] = useState("");
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
  return (
    <div className="fp-page-header">
      <div className="fp-page-header-inner">
        <div>
          <h1 className="fp-page-title">
            Good {greetingTime}, {name} 👋
          </h1>
          <p className="fp-page-subtitle">
            Here's your financial overview for {period}
          </p>
        </div>
        <div className="fp-header-actions">
          <DropBox
            name="Period"
            optionArray={[
              { name: "This Month", value: "0" },
              { name: "6 Months", value: "1" },
              { name: "1 year", value: "2" },
              { name: "All Time", value: "3" },
            ]}
          />
          <button className="fp-export-btn">Export Report</button>
        </div>
      </div>
    </div>
  );
}
