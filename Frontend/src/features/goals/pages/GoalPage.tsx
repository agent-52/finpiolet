import React, { useState, useMemo } from "react";
import "../../../styles/goal.css";
import { GoalCard } from "../components/GoalCard";
import { GoalDetailSection } from "../components/GoalDetailSection";
import { GoalForm } from "../components/GoalForm";
import { GoalPageSkeleton } from "./GoalPageSkeleton";
import type { GoalData } from "../goals.types";
import { GoalStatus } from "../../dashboard/dashboard.types";
import { useGoals } from "../hooks/useGoals";
import { useGetGoalPlan } from "../hooks/useGetGoalPlan";

// Replace this wrapper with your custom Modal Component
const ModalWrapper: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="goal-detail-backdrop"
      onClick={onClose}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "480px",
          padding: "24px",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "700", margin: 0 }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const GoalPage: React.FC = () => {
  const { data: goals, isLoading: isGoalsLoading } = useGoals();

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // State for drawer & modal
  const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingGoalId, setEditingGoalId] = useState<number | null>(null);

  // Hook for selected goal details
  const { data: goalDetails, isLoading: isDetailsLoading } =
    useGetGoalPlan(selectedGoalId);

  // Top Summary Metric Calculations
  const summaryMetrics = useMemo(() => {
    const activeGoals = goals?.goals.filter(
      (g) => g.status === GoalStatus.IN_PROGRESS,
    ).length;
    const totalTarget = goals?.goals.reduce(
      (acc, curr) => acc + curr.targetAmount,
      0,
    );
    const totalSaved = goals?.goals.reduce(
      (acc, curr) => acc + curr.currentSavedAmount,
      0,
    );
    const totalRemaining =
      totalTarget && totalSaved ? totalTarget - totalSaved : 0;

    return { activeGoals, totalTarget, totalSaved, totalRemaining };
  }, [goals]);

  // Filtered Goals Array
  const filteredGoals = useMemo(() => {
    return goals?.goals.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "ALL" || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [goals, searchQuery, statusFilter]);

  const handleCreateNewClick = () => {
    setEditingGoalId(null);
    setIsFormModalOpen(true);
  };

  const handleEditGoalClick = (goalId: number) => {
    setEditingGoalId(goalId);
    setIsFormModalOpen(true);
  };

  const handleDeleteGoalClick = (goalId: number) => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      // Dispatch your delete API call here
      setSelectedGoalId(null);
    }
  };

  const handleFormSubmit = (values: GoalData) => {
    if (editingGoalId) {
      // Dispatch your update goal mutation
      console.log("Updating goal:", editingGoalId, values);
    } else {
      // Dispatch your create goal mutation
      console.log("Creating new goal:", values);
    }
    setIsFormModalOpen(false);
  };

  if (isGoalsLoading) {
    return <GoalPageSkeleton />;
  }

  return (
    <div className="goals-page-container">
      {/* Top Header */}
      <header className="goals-header-bar">
        <div className="goals-title-section">
          <h1>Goals</h1>
          <p>Track your savings against target dates and milestones.</p>
        </div>
        <button className="create-goal-btn" onClick={handleCreateNewClick}>
          <span>+</span> Create Goal
        </button>
      </header>

      {/* Search & Filter Bar */}
      <section className="goals-filter-bar">
        <div className="search-input-wrapper">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="goals-search-input"
            placeholder="Search goals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All Statuses</option>
          <option value={GoalStatus.IN_PROGRESS}>In Progress</option>
          <option value={GoalStatus.COMPLETED}>Completed</option>
        </select>
      </section>

      {/* Summary KPI Cards */}
      <section className="goals-summary-grid">
        <div className="summary-card">
          <div>
            <div className="summary-card-header">
              <div className="summary-icon-box">🎯</div>
              <p className="summary-label">ACTIVE GOALS</p>
            </div>
            <h3 className="summary-value">{summaryMetrics.activeGoals}</h3>
          </div>
          <div className="summary-footer">
            <span>Across all goals</span>
            <span className="summary-trend trend-positive">On track</span>
          </div>
        </div>

        <div className="summary-card">
          <div>
            <div className="summary-card-header">
              <div className="summary-icon-box">💰</div>
              <p className="summary-label">TOTAL TARGET</p>
            </div>
            <h3 className="summary-value">
              ${summaryMetrics.totalTarget?.toLocaleString()}
            </h3>
          </div>
          <div className="summary-footer">
            <span>Combined financial objective</span>
          </div>
        </div>

        <div className="summary-card">
          <div>
            <div className="summary-card-header">
              <div className="summary-icon-box">📈</div>
              <p className="summary-label">TOTAL SAVED</p>
            </div>
            <h3 className="summary-value">
              ${summaryMetrics.totalSaved?.toLocaleString()}
            </h3>
          </div>
          <div className="summary-footer">
            <span>Current liquid progress</span>
            <span className="summary-trend trend-positive">Healthy</span>
          </div>
        </div>

        <div className="summary-card">
          <div>
            <div className="summary-card-header">
              <div className="summary-icon-box">⏳</div>
              <p className="summary-label">REMAINING TO SAVE</p>
            </div>
            <h3 className="summary-value">
              ${summaryMetrics.totalRemaining.toLocaleString()}
            </h3>
          </div>
          <div className="summary-footer">
            <span>Left to reach targets</span>
          </div>
        </div>
      </section>

      {/* Goal Cards Grid */}
      <section className="goals-cards-grid">
        {filteredGoals?.map((plan) => (
          <GoalCard
            key={plan.id}
            goal={plan}
            onClick={(id) => setSelectedGoalId(id)}
          />
        ))}
      </section>

      {/* Slide-over Right Detail Section */}
      <GoalDetailSection
        goalId={selectedGoalId}
        detailsPlan={goalDetails?.goalPlan}
        isLoading={isDetailsLoading}
        onClose={() => setSelectedGoalId(null)}
        onEdit={handleEditGoalClick}
        onDelete={handleDeleteGoalClick}
      />

      {/* Create / Edit Goal Modal */}
      <ModalWrapper
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title={editingGoalId ? "Edit Savings Goal" : "Create Goal"}
      >
        <GoalForm
          initialPlan={
            editingGoalId
              ? goals?.goals.find((g) => g.id === editingGoalId) || null
              : null
          }
          onSubmit={handleFormSubmit}
          onCancel={() => setIsFormModalOpen(false)}
        />
      </ModalWrapper>
    </div>
  );
};
