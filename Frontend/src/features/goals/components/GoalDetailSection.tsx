import React from "react";
import type { GoalPlan } from "../goals.types";

interface GoalDetailSectionProps {
  goalId: number | null;
  onClose: () => void;
  onEdit: (goalId: number) => void;
  onDelete: (goalId: number) => void;
  // This prop allows injecting your hook result or calling useGetGoalDetails directly
  detailsPlan?: GoalPlan;
  isLoading?: boolean;
}

export const GoalDetailSection: React.FC<GoalDetailSectionProps> = ({
  goalId,
  onClose,
  onEdit,
  onDelete,
  detailsPlan,
  isLoading = false,
}) => {
  if (!goalId) return null;

  const plan = detailsPlan;
  const progressPercent = plan
    ? Math.min(100, Math.round(plan.progressPercentage))
    : 0;

  // SVG Circle parameters for 180x180 circle
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progressPercent / 100) * circumference;

  return (
    <div className="goal-detail-backdrop" onClick={onClose}>
      <div
        className="goal-detail-drawer"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking drawer
      >
        {/* Header */}
        <div className="detail-drawer-header">
          <div className="detail-header-info">
            <div className="goal-icon-badge">🎯</div>
            <div className="detail-title">
              <h2>{plan ? goalId : "Loading..."}</h2>
              <p>Savings Goal · Overview</p>
            </div>
          </div>
          <button className="detail-close-btn" onClick={onClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="detail-drawer-body">
          {isLoading || !plan ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
                color: "#64748b",
              }}
            >
              Loading goal details...
            </div>
          ) : (
            <>
              {/* Circular Gauge Section */}
              <div className="detail-circular-section">
                <div className="circular-chart-wrapper">
                  <svg className="circular-chart-svg" viewBox="0 0 180 180">
                    <circle
                      className="circular-bg"
                      cx="90"
                      cy="90"
                      r={radius}
                    />
                    <circle
                      className="circular-progress"
                      cx="90"
                      cy="90"
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                    />
                  </svg>
                  <div className="circular-center-text">
                    <span className="circular-percentage">
                      {progressPercent}%
                    </span>
                    <span className="circular-subtext">of goal saved</span>
                  </div>
                </div>

                {/* Target / Saved / Remaining Trio */}
                <div className="detail-stats-trio">
                  <div className="trio-item">
                    <div className="trio-dot dot-target" />
                    <span className="trio-label">TARGET</span>
                    <span className="trio-value">
                      ${plan.targetAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="trio-item">
                    <div className="trio-dot dot-saved" />
                    <span className="trio-label">SAVED</span>
                    <span className="trio-value">
                      ${plan.savedAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="trio-item">
                    <div className="trio-dot dot-remaining" />
                    <span className="trio-label">LEFT</span>
                    <span className="trio-value">
                      ${plan.remainingAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Monthly Savings Bar Chart Preview */}
              <div>
                <h4 className="detail-block-title">MONTHLY SAVINGS PROGRESS</h4>
                <div className="detail-chart-card">
                  <div className="bar-chart-preview">
                    <div className="bar-column">
                      <div className="bar-fill" style={{ height: "85%" }} />
                      <span className="bar-label">M1</span>
                    </div>
                    <div className="bar-column">
                      <div className="bar-fill" style={{ height: "65%" }} />
                      <span className="bar-label">M2</span>
                    </div>
                    <div className="bar-column">
                      <div className="bar-fill" style={{ height: "40%" }} />
                      <span className="bar-label">M3</span>
                    </div>
                    <div className="bar-column">
                      <div
                        className="bar-fill"
                        style={{ height: "15%", backgroundColor: "#f97316" }}
                      />
                      <span className="bar-label">Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Trajectory Line Preview */}
              <div>
                <h4 className="detail-block-title">SAVINGS TRAJECTORY</h4>
                <div className="detail-chart-card">
                  <div className="line-chart-preview">
                    <svg className="line-chart-svg" viewBox="0 0 300 50">
                      <polyline
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2.5"
                        points="0,40 50,35 100,28 150,30 200,18 250,15 300,5"
                      />
                    </svg>
                    <div className="line-chart-labels">
                      <span>Start</span>
                      <span>Projected Target</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div>
                <h4 className="detail-block-title">STATISTICS</h4>
                <div className="stats-grid-two">
                  <div className="mini-stat-card">
                    <p className="mini-stat-label">REQ. MONTHLY SAVINGS</p>
                    <p className="mini-stat-value">
                      ${plan.requiredMonthlySaving.toLocaleString()}
                    </p>
                  </div>
                  <div className="mini-stat-card">
                    <p className="mini-stat-label">MONTHS REMAINING</p>
                    <p className="mini-stat-value">{plan.monthsRemaining}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Action Buttons Footer */}
        {plan && (
          <div className="detail-drawer-footer">
            <button className="btn-edit-goal" onClick={() => onEdit(goalId)}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Edit Goal
            </button>
            <button
              className="btn-delete-goal"
              onClick={() => onDelete(goalId)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
