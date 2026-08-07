// AnalyticsSkeleton.tsx
import React from "react";
import "./analytics.css";

const SkeletonPulse = ({
  style,
  className = "",
}: {
  style?: React.CSSProperties;
  className?: string;
}) => (
  <div
    className={`skeleton-pulse ${className}`}
    style={{
      background:
        "linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)",
      backgroundSize: "200% 100%",
      animation: "pulse 1.5s infinite linear",
      borderRadius: "8px",
      ...style,
    }}
  />
);

export const AnalyticsSkeleton = () => {
  return (
    <div className="analytics-page">
      <style>{`@keyframes pulse { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>

      <div className="analytics-header">
        <div>
          <SkeletonPulse
            style={{ width: "250px", height: "32px", marginBottom: "8px" }}
          />
          <SkeletonPulse style={{ width: "350px", height: "16px" }} />
        </div>
        <SkeletonPulse style={{ width: "120px", height: "40px" }} />
      </div>

      <SkeletonPulse
        style={{ width: "100%", height: "32px", marginBottom: "64px" }}
      />

      <div className="section-title">OVERVIEW</div>
      <div className="overview-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="card">
            <SkeletonPulse
              style={{ width: "80px", height: "14px", marginBottom: "16px" }}
            />
            <SkeletonPulse
              style={{ width: "150px", height: "24px", marginBottom: "32px" }}
            />
            <SkeletonPulse style={{ width: "100%", height: "40px" }} />
          </div>
        ))}
      </div>

      <div className="section-title">SPENDING & INCOME</div>
      <div className="charts-grid-2">
        <div className="card">
          <SkeletonPulse style={{ width: "100%", height: "300px" }} />
        </div>
        <div className="card">
          <SkeletonPulse style={{ width: "100%", height: "300px" }} />
        </div>
      </div>
    </div>
  );
};
