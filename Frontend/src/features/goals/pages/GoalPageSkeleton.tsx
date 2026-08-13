import React from "react";
import "../../../styles/goal.css";

export const GoalPageSkeleton: React.FC = () => {
  return (
    <div className="goals-page-container">
      {/* Header Bar Skeleton */}
      <div className="skeleton-header-bar">
        <div>
          <div
            className="skeleton-shimmer skeleton-title"
            style={{ marginBottom: "8px" }}
          />
          <div
            className="skeleton-shimmer"
            style={{ width: "240px", height: "16px" }}
          />
        </div>
        <div className="skeleton-shimmer skeleton-btn" />
      </div>

      {/* Summary Metrics Grid Skeleton */}
      <div className="skeleton-summary-grid">
        <div className="skeleton-shimmer skeleton-summary-card" />
        <div className="skeleton-shimmer skeleton-summary-card" />
        <div className="skeleton-shimmer skeleton-summary-card" />
        <div className="skeleton-shimmer skeleton-summary-card" />
      </div>

      {/* Goal Cards Grid Skeleton */}
      <div className="skeleton-cards-grid">
        <div className="skeleton-shimmer skeleton-card" />
        <div className="skeleton-shimmer skeleton-card" />
        <div className="skeleton-shimmer skeleton-card" />
        <div className="skeleton-shimmer skeleton-card" />
        <div className="skeleton-shimmer skeleton-card" />
        <div className="skeleton-shimmer skeleton-card" />
      </div>
    </div>
  );
};
