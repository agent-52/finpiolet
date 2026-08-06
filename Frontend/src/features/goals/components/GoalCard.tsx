import React from "react";
import type { Goal, GoalPlan } from "../goals.types";
import { GoalStatus } from "../../dashboard/dashboard.types";

interface GoalCardProps {
  goal: Goal;
  onClick: (goalId: number) => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({ goal, onClick }) => {
  const isCompleted = goal.status === GoalStatus.COMPLETED;
  const progressPercent = Math.min(
    100,
    Math.round(goal.currentSavedAmount / goal.targetAmount),
  );

  const remainingAmount = goal.targetAmount - goal.currentSavedAmount;

  const formattedTargetDate = new Date(goal.targetDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div className="goal-card" onClick={() => onClick(goal.id)}>
      {/* Top Title & Icon */}
      <div className="goal-card-header">
        <div className="goal-icon-badge">🎯</div>
        <div className="goal-card-title">
          <h3>{goal.title}</h3>
          <span>Savings Goal · Personal</span>
        </div>
      </div>

      {/* Amounts */}
      <div className="goal-amounts-row">
        <div className="goal-amount-main">
          <span>Saved</span>${goal.currentSavedAmount.toLocaleString()}
        </div>
        <div className="goal-target-label">
          <span>Target</span>${goal.targetAmount.toLocaleString()}
        </div>
      </div>

      {/* Progress Bar & Status Badge */}
      <div className="goal-progress-section">
        <div className="goal-progress-meta">
          <span className="progress-percentage">{progressPercent}% saved</span>
          <span
            className={`status-badge ${
              isCompleted ? "completed" : "in-progress"
            }`}
          >
            {isCompleted ? "Completed" : "In Progress"}
          </span>
        </div>
        <div className="progress-bar-track">
          <div
            className={`progress-bar-fill ${isCompleted ? "completed" : ""}`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="goal-remaining-text">
          {remainingAmount > 0
            ? `$${remainingAmount.toLocaleString()} remaining`
            : "Target reached!"}
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="goal-card-footer">
        {/* <div className="footer-metric">
          <span className="footer-metric-label">Monthly Req.</span>
          <span className="footer-metric-value">
            ${requiredMonthlySavings.toLocaleString()}/mo
          </span>
        </div>
        <div className="footer-metric">
          <span className="footer-metric-label">Time Left</span>
          <span className="footer-metric-value">
            {remainingMonths > 0 ? `${remainingMonths} mos` : "0 mos"}
          </span>
        </div> */}
        <div className="footer-metric">
          <span className="footer-metric-label">Target Date</span>
          <span className="footer-metric-value">{formattedTargetDate}</span>
        </div>
      </div>
    </div>
  );
};
