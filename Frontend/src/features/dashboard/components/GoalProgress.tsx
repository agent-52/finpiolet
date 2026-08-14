import { Car, Goal, GraduationCap, Home, Plane, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { goalOverview } from "../dashboard.types";

function getGoalColor(percentage: number): string {
  if (percentage < 50) {
    return "#f59e0b";
  } else if (percentage < 75) {
    return "#4f46e5";
  } else {
    return "#10b981";
  }
}

export default function GoalsProgress({
  goalsData,
}: {
  goalsData: goalOverview[];
}) {
  const navigate = useNavigate();
  return (
    <div className="fp-widget-card">
      <div className="fp-widget-header">
        <div>
          <h3 className="fp-widget-title">Goals Progress</h3>
          <p className="fp-widget-subtitle">{goalsData.length} active goals</p>
        </div>
        <button
          className="fp-widget-action-link"
          onClick={() => {
            navigate("/goals");
          }}
        >
          Manage
        </button>
      </div>

      <div className="fp-divider-list">
        {goalsData.map((goal) => {
          const iconBg = `${getGoalColor(goal.currentProgress)}18`;

          return (
            <div key={goal.goal.id} className="fp-goal-item">
              <div className="fp-goal-item-header">
                <div className="fp-goal-left">
                  <div
                    className="fp-goal-icon"
                    style={
                      {
                        "--goal-icon-bg": iconBg,
                        "--goal-icon-color": getGoalColor(goal.currentProgress),
                      } as React.CSSProperties
                    }
                  >
                    <Goal size={14} />
                  </div>
                  <div>
                    <p className="fp-goal-name">{goal.goal.title}</p>
                    <p className="fp-goal-deadline">
                      By {goal.goal.targetDate.getDate()}
                    </p>
                  </div>
                </div>
                <div className="fp-goal-amounts">
                  <p className="fp-goal-current">
                    ${goal.goal.currentSavedAmount.toLocaleString()}
                  </p>
                  <p className="fp-goal-target">
                    of ${goal.goal.targetAmount.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="fp-progress-track">
                <div
                  className="fp-progress-fill"
                  style={
                    {
                      "--progress-width": `${goal.currentProgress}%`,
                      "--progress-color": getGoalColor(goal.currentProgress),
                    } as React.CSSProperties
                  }
                />
              </div>

              <div className="fp-goal-footer">
                <span className="fp-goal-pct">
                  {goal.currentProgress.toFixed(0)}% reached
                </span>
                <span
                  className="fp-goal-remaining"
                  style={
                    {
                      "--goal-icon-color": getGoalColor(goal.currentProgress),
                    } as React.CSSProperties
                  }
                >
                  ${goal.remainingAmount.toLocaleString()} remaining
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
