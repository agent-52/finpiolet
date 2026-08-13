import { DollarSign, Heart } from "lucide-react";

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
    Icon: DollarSign,
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
    Icon: DollarSign,
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
    Icon: DollarSign,
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
    Icon: DollarSign,
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
    Icon: DollarSign,
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
    Icon: DollarSign,
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
    Icon: DollarSign,
  },
];
export default function RecentTransactions() {
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
