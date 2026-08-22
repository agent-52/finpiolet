import { useState } from "react";
import { Link } from "react-router-dom";

const txns = [
  {
    name: "Zomato Order",
    category: "Food",
    amount: -450,
    date: "Jun 28, 2026",
    type: "expense",
  },
  {
    name: "Salary Credit",
    category: "Income",
    amount: 75000,
    date: "Jun 25, 2026",
    type: "income",
  },
  {
    name: "Amazon Purchase",
    category: "Shopping",
    amount: -2300,
    date: "Jun 24, 2026",
    type: "expense",
  },
  {
    name: "Petrol Pump",
    category: "Travel",
    amount: -1000,
    date: "Jun 23, 2026",
    type: "expense",
  },
  {
    name: "Netflix Subscription",
    category: "Entertainment",
    amount: -649,
    date: "Jun 22, 2026",
    type: "expense",
  },
  {
    name: "Swiggy Order",
    category: "Food",
    amount: -380,
    date: "Jun 21, 2026",
    type: "expense",
  },
  {
    name: "Freelance Payment",
    category: "Income",
    amount: 12000,
    date: "Jun 20, 2026",
    type: "income",
  },
];

const categories = [
  "All",
  "Food",
  "Shopping",
  "Travel",
  "Entertainment",
  "Income",
];

const categoryColor: Record<string, string> = {
  Food: "#FEF3C7",
  Shopping: "#F2FAF5",
  Travel: "#DCFCE7",
  Entertainment: "#FFE4E6",
  Income: "#F0FDF4",
  Salary: "#F0FDF4",
};

export default function Transactions() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filtered = txns.filter((t) => {
    if (activeFilter !== "All" && t.category !== activeFilter) return false;
    if (activeType === "Income" && t.type !== "income") return false;
    if (activeType === "Expense" && t.type !== "expense") return false;
    return true;
  });

  return (
    <section style={{ padding: "96px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="transactions-grid"
        >
          {/* Left: mockup */}
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.07)",
            }}
          >
            {/* Search bar */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "8px 12px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="4.5"
                    stroke="var(--fg-muted)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.5 9.5l2.5 2.5"
                    stroke="var(--fg-muted)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>
                  Search transactions...
                </span>
              </div>
            </div>

            {/* Filter pills */}
            <div
              style={{
                padding: "12px 20px",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 500,
                    cursor: "pointer",
                    border:
                      activeFilter === cat
                        ? "1px solid var(--accent)"
                        : "1px solid var(--border)",
                    background:
                      activeFilter === cat
                        ? "var(--accent-light)"
                        : "transparent",
                    color:
                      activeFilter === cat
                        ? "var(--accent)"
                        : "var(--fg-secondary)",
                    transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              ))}
              <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                {["All", "Income", "Expense"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    style={{
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontSize: 11,
                      fontWeight: 500,
                      cursor: "pointer",
                      border:
                        activeType === t
                          ? "1px solid var(--accent)"
                          : "1px solid var(--border)",
                      background:
                        activeType === t
                          ? "var(--accent-light)"
                          : "transparent",
                      color:
                        activeType === t
                          ? "var(--accent)"
                          : "var(--fg-secondary)",
                      transition: "all 0.15s",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Transaction list */}
            <div style={{ padding: "0 20px 16px" }}>
              {filtered.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom:
                      i < filtered.length - 1 ? "1px solid #FAFAF7" : "none",
                    transition: "background 0.1s",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 9,
                        background: categoryColor[t.category] || "#F5F4EF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                      }}
                    >
                      {t.type === "income" ? "↓" : "↑"}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--fg)",
                          marginBottom: 2,
                        }}
                      >
                        {t.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--fg-muted)" }}>
                        <span
                          style={{
                            background: categoryColor[t.category] || "#F5F4EF",
                            padding: "1px 7px",
                            borderRadius: 10,
                            fontWeight: 500,
                          }}
                        >
                          {t.category}
                        </span>
                        {" · "}
                        {t.date}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 14 }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: t.amount > 0 ? "var(--green)" : "var(--fg)",
                      }}
                    >
                      {t.amount > 0 ? "+" : ""}₹
                      {Math.abs(t.amount).toLocaleString("en-IN")}
                    </span>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--fg-muted)",
                          padding: 2,
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--fg-muted)")
                        }
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M2 10.5L5 10l5.5-5.5-3-3L2 7v3.5z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--fg-muted)",
                          padding: 2,
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--red)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--fg-muted)")
                        }
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M2 3.5h9M4 3.5V2.5h5v1M5 6v4M8 6v4M3 3.5l.5 7h6l.5-7"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Transactions
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 600,
                color: "var(--fg)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Know where your money goes.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--fg-secondary)",
                lineHeight: 1.65,
                marginBottom: 28,
              }}
            >
              Keep every transaction organized and searchable. Track both income
              and expenses, assign categories, and quickly understand your
              day-to-day spending.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 36px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                "Income and expense tracking",
                "Custom categories",
                "Search and filtering",
                "Transaction editing",
                "Transaction history",
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "var(--green-light)",
                      border: "1px solid var(--green-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5 3.5-4"
                        stroke="var(--green)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--fg-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to={"/signin"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent)",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 24px",
                borderRadius: 9,
                fontWeight: 600,
                fontSize: 14,
                transition: "background 0.15s, transform 0.1s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-hover)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start Tracking
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .transactions-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
