import { Car, GraduationCap, Home, Plane, Target } from "lucide-react";

const GOALS = [
  {
    id: "1",
    name: "Emergency Fund",
    Icon: Target,
    current: 18500,
    target: 25000,
    deadline: "Jun 2025",
    color: "#4f46e5",
  },
  {
    id: "2",
    name: "House Down Payment",
    Icon: Home,
    current: 42000,
    target: 80000,
    deadline: "Dec 2026",
    color: "#10b981",
  },
  {
    id: "3",
    name: "Europe Vacation",
    Icon: Plane,
    current: 3200,
    target: 5000,
    deadline: "Aug 2025",
    color: "#8b5cf6",
  },
  {
    id: "4",
    name: "MBA Program",
    Icon: GraduationCap,
    current: 12000,
    target: 30000,
    deadline: "Sep 2027",
    color: "#f59e0b",
  },
  {
    id: "5",
    name: "New Car",
    Icon: Car,
    current: 8800,
    target: 12000,
    deadline: "Mar 2025",
    color: "#3b82f6",
  },
];

export default function GoalsProgress() {
  return (
    <div className="fp-widget-card">
      <div className="fp-widget-header">
        <div>
          <h3 className="fp-widget-title">Goals Progress</h3>
          <p className="fp-widget-subtitle">{GOALS.length} active goals</p>
        </div>
        <button className="fp-widget-action-link">Add goal</button>
      </div>

      <div className="fp-divider-list">
        {GOALS.map((goal) => {
          const pct = Math.min((goal.current / goal.target) * 100, 100);
          const remaining = goal.target - goal.current;
          const iconBg = `${goal.color}18`;

          return (
            <div key={goal.id} className="fp-goal-item">
              <div className="fp-goal-item-header">
                <div className="fp-goal-left">
                  <div
                    className="fp-goal-icon"
                    style={
                      {
                        "--goal-icon-bg": iconBg,
                        "--goal-icon-color": goal.color,
                      } as React.CSSProperties
                    }
                  >
                    <goal.Icon size={14} />
                  </div>
                  <div>
                    <p className="fp-goal-name">{goal.name}</p>
                    <p className="fp-goal-deadline">By {goal.deadline}</p>
                  </div>
                </div>
                <div className="fp-goal-amounts">
                  <p className="fp-goal-current">
                    ${goal.current.toLocaleString()}
                  </p>
                  <p className="fp-goal-target">
                    of ${goal.target.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="fp-progress-track">
                <div
                  className="fp-progress-fill"
                  style={
                    {
                      "--progress-width": `${pct}%`,
                      "--progress-color": goal.color,
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="fp-goal-footer">
                <span className="fp-goal-pct">{pct.toFixed(0)}% reached</span>
                <span
                  className="fp-goal-remaining"
                  style={
                    { "--goal-icon-color": goal.color } as React.CSSProperties
                  }
                >
                  ${remaining.toLocaleString()} remaining
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
