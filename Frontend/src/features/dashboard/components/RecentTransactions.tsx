import { DollarSign, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { RecentTransaction } from "../dashboard.types";

export default function RecentTransactions({
  transactionsData,
}: {
  transactionsData: RecentTransaction[];
}) {
  const navigate = useNavigate();
  return (
    <div className="fp-widget-card">
      <div className="fp-widget-header">
        <div>
          <h3 className="fp-widget-title">Recent Transactions</h3>
          <p className="fp-widget-subtitle">Last 30 days</p>
        </div>
        <button
          className="fp-widget-action-link"
          onClick={() => {
            navigate("/transactions");
          }}
        >
          View all
        </button>
      </div>

      <div className="fp-divider-list">
        {transactionsData.map((tx) => (
          <div key={tx.id} className="fp-tx-item">
            <div
              className={`fp-tx-icon ${tx.type === "INCOME" ? "fp-tx-icon--emerald" : "fp-tx-icon--indigo"}`}
            >
              <DollarSign size={14} />
            </div>

            <div className="fp-tx-info">
              <p className="fp-tx-description">{tx.description}</p>
              <p className="fp-tx-merchant">{tx.paymentMethod}</p>
            </div>

            <div className="fp-tx-category-col">
              <span
                className={`fp-tx-badge ${tx.type === "INCOME" ? "fp-badge--emerald" : "fp-badge--indigo"}`}
              >
                {tx.category.name}
              </span>
            </div>

            <div className="fp-tx-amount-col">
              <p
                className={`fp-tx-amount${tx.type === "INCOME" ? " fp-tx-amount--credit" : ""}`}
              >
                {tx.type === "INCOME" ? "+" : "-"}$
                {tx.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="fp-tx-date">{tx.transactionDate.getDate()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
