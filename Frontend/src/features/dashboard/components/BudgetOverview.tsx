const BUDGETS = [
  { category: "Housing", spent: 2400, budget: 2500, color: "#4f46e5" },
  { category: "Food & Dining", spent: 1640, budget: 1800, color: "#10b981" },
  { category: "Transport", spent: 820, budget: 600, color: "#f59e0b" },
  { category: "Entertainment", spent: 680, budget: 800, color: "#8b5cf6" },
  { category: "Healthcare", spent: 480, budget: 500, color: "#ef4444" },
  { category: "Shopping", spent: 1300, budget: 1000, color: "#3b82f6" },
];

export default function BudgetOverview() {
  return (
    <div className="fp-widget-card">
      <div className="fp-widget-header">
        <div>
          <h3 className="fp-widget-title">Budget Overview</h3>
          <p className="fp-widget-subtitle">December 2024</p>
        </div>
        <button className="fp-widget-action-link">Manage</button>
      </div>

      <div className="fp-divider-list">
        {BUDGETS.map((item) => {
          const pct = Math.min((item.spent / item.budget) * 100, 100);
          const isOver = item.spent > item.budget;
          const barColor = isOver ? "#ef4444" : item.color;
          const remaining = item.budget - item.spent;

          return (
            <div key={item.category} className="fp-budget-item">
              <div className="fp-budget-item-header">
                <div className="fp-budget-left">
                  <span
                    className="fp-budget-dot"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="fp-budget-category">{item.category}</span>
                </div>
                <div className="fp-budget-amounts">
                  <span
                    className={`fp-budget-spent${isOver ? " fp-budget-spent--over" : ""}`}
                  >
                    ${item.spent.toLocaleString()}
                  </span>
                  <span className="fp-budget-of">
                    {" "}
                    / ${item.budget.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="fp-progress-track">
                <div
                  className="fp-progress-fill"
                  style={
                    {
                      "--progress-width": `${pct}%`,
                      "--progress-color": barColor,
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="fp-budget-footer">
                <span className="fp-budget-pct">{pct.toFixed(0)}% used</span>
                <span
                  className={`fp-budget-remaining ${isOver ? "fp-budget-remaining--over" : "fp-budget-remaining--ok"}`}
                >
                  {isOver
                    ? `$${Math.abs(remaining).toLocaleString()} over`
                    : `$${remaining.toLocaleString()} left`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
