import { Ic } from "./Icon";

export function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="empty-state">
      <div className="empty-svg-wrap">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          <rect x="10" y="20" width="100" height="60" rx="10" fill="#f1f2f4" />
          <rect x="20" y="32" width="40" height="8" rx="4" fill="#e2e4e8" />
          <rect x="20" y="46" width="60" height="6" rx="3" fill="#e8eaed" />
          <rect x="20" y="58" width="50" height="6" rx="3" fill="#e8eaed" />
          <rect x="20" y="70" width="35" height="6" rx="3" fill="#e8eaed" />
          <circle cx="95" cy="30" r="18" fill="#0d0d0e" />
          <path
            d="M95 24v6M95 30h4"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="95" cy="37" r="1.5" fill="#fff" />
        </svg>
      </div>
      <div>
        <h3 className="empty-title">No transactions yet</h3>
        <p className="empty-sub">
          Start tracking your financial activity. Add your first transaction to
          unlock spending insights and AI-powered recommendations.
        </p>
      </div>
      <button className="btn btn--primary" onClick={onAdd}>
        <Ic paths={["M12 4v16m8-8H4"]} size={16} color="#fff" sw={2.2} />
        Add First Transaction
      </button>
    </div>
  );
}
