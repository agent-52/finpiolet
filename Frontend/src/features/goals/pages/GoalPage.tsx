// GoalPage.tsx
import React, { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  ArrowRightLeft,
  PieChart,
  Target,
  BarChart2,
  Bot,
  Calendar,
  Tags,
  User,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
  MoreHorizontal,
  Eye,
  Edit2,
  Trash2,
  ShieldAlert,
  Plane,
  Laptop,
  Car,
  Home,
  GraduationCap,
  Briefcase,
  Heart,
  X,
  CheckCircle2,
  Sidebar,
  GoalIcon,
} from "lucide-react";
import "../../../styles/goal.css";
import type { Goal, GoalPlanResponse } from "../goals.types";
import { useGoals } from "../hooks/useGoals";
import { useGetGoalPlan } from "../hooks/useGetGoalPlan";
import { GoalStatus } from "../../dashboard/dashboard.types";
import { Modal } from "../../../components/common/Modal";

// --- Mock Data simulating API endpoints ---
// const mockGoals: Goal[] = [
//   {
//     id: 1,
//     userId: 101,
//     title: "Emergency Fund",
//     targetAmount: 25000,
//     currentSavedAmount: 18750,
//     targetDate: new Date("2025-08-01"),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     status: "On Track",
//     icon: <ShieldAlert size={20} />,
//   },
//   {
//     id: 2,
//     userId: 101,
//     title: "Amalfi Vacation",
//     targetAmount: 8500,
//     currentSavedAmount: 3200,
//     targetDate: new Date("2025-06-01"),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     status: "Behind",
//     icon: <Plane size={20} />,
//   },
//   {
//     id: 3,
//     userId: 101,
//     title: "MacBook Pro M4",
//     targetAmount: 3499,
//     currentSavedAmount: 3499,
//     targetDate: new Date("2024-12-01"),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     status: "Completed",
//     icon: <Laptop size={20} />,
//   },
//   {
//     id: 4,
//     userId: 101,
//     title: "Tesla Model 3",
//     targetAmount: 45000,
//     currentSavedAmount: 12600,
//     targetDate: new Date("2027-03-01"),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     status: "On Track",
//     icon: <Car size={20} />,
//   },
// ];

// const mockGetGoalPlan = (goal: Goal): GoalPlanResponse => {
//   const remainingAmount = goal.targetAmount - goal.currentSavedAmount;
//   const progressPercentage = Math.round(
//     (goal.currentSavedAmount / goal.targetAmount) * 100,
//   );
//   return {
//     success: true,
//     goalPlan: {
//       goal: goal.title,
//       targetAmount: goal.targetAmount,
//       savedAmount: goal.currentSavedAmount,
//       remainingAmount: remainingAmount,
//       progressPercentage: progressPercentage,
//       monthsRemaining: 18,
//       requiredMonthlySaving: Math.round(remainingAmount / 18),
//       status: goal.status,
//     },
//   };
// };

export default function GoalPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [goalPlan, setGoalPlan] = useState<GoalPlanResponse | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [dropdownOpenId, setDropdownOpenId] = useState<number | null>(null);

  // Modals state
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);

  const { data, isLoading, isError, error } = useGoals();

  const handleSelectGoal = (goal: Goal) => {
    setSelectedGoal(goal);
    const { data, isLoading, isError, error, isSuccess } = useGetGoalPlan(
      goal.id,
    );
    if (isSuccess) {
      setGoalPlan(data);
    }
  };

  const handleEditClick = (goal: Goal, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setEditingGoal(goal);
    setIsEditOpen(true);
    setDropdownOpenId(null);
  };

  const closeDropdownListener = useRef((e: MouseEvent) => {
    setDropdownOpenId(null);
  });

  useEffect(() => {
    if (dropdownOpenId !== null) {
      document.addEventListener("click", closeDropdownListener.current);
    } else {
      document.removeEventListener("click", closeDropdownListener.current);
    }
    return () =>
      document.removeEventListener("click", closeDropdownListener.current);
  }, [dropdownOpenId]);

  const formatCurrency = (val: number) => "$" + val.toLocaleString();
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  return (
    <div className="app-container">
      <Sidebar
      // isCollapsed={isSidebarCollapsed}
      // setIsCollapsed={setIsSidebarCollapsed}
      />

      <div className="main-content">
        <div className="content-wrapper">
          {/* LEFT FEED */}
          <div className="goals-feed">
            <div className="page-header">
              <div className="page-title">
                <h1>Financial Goals</h1>
                <p>Track and manage your long-term savings milestones.</p>
              </div>
              <div className="header-actions">
                <button className="btn-secondary">Default</button>
                <button className="btn-secondary">Empty</button>
                <button className="btn-secondary">Loading</button>
                <button
                  className="btn-primary"
                  onClick={() => setIsCreateOpen(true)}
                >
                  <Plus size={18} /> Create Goal
                </button>
              </div>
            </div>

            {/* Summary Row */}
            <div className="summary-cards">
              <div className="summary-card">
                <Target className="summary-icon" size={24} />
                <div className="summary-value">7</div>
                <div className="summary-label">Active Goals</div>
                <div className="summary-trend">+2 this month</div>
              </div>
              <div className="summary-card">
                <Briefcase
                  className="summary-icon"
                  style={{ color: "#3b82f6" }}
                  size={24}
                />
                <div className="summary-value">$371,999</div>
                <div className="summary-label">Total Target</div>
                <div className="summary-trend">+$35k added</div>
              </div>
              <div className="summary-card">
                <BarChart2 className="summary-icon" size={24} />
                <div className="summary-value">$131,349</div>
                <div className="summary-label">Total Saved</div>
                <div className="summary-trend">+$8,200 this month</div>
              </div>
              <div className="summary-card">
                <PieChart
                  className="summary-icon"
                  style={{ color: "#f59e0b" }}
                  size={24}
                />
                <div className="summary-value">45.4%</div>
                <div className="summary-label">Avg. Completion</div>
                <div
                  className="summary-trend"
                  style={{ color: "var(--danger)" }}
                >
                  -1.2% vs last month
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="filters-bar">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={18} />
                <input type="text" placeholder="Search goals..." />
              </div>
              <select className="filter-select">
                <option>All Status</option>
              </select>
              <select className="filter-select">
                <option>All Categories</option>
              </select>
              <select className="filter-select">
                <option>All Time</option>
              </select>
              <select className="filter-select">
                <option>Newest First</option>
              </select>
              <button className="btn-secondary" style={{ marginLeft: "auto" }}>
                ↻ Reset
              </button>
            </div>

            {/* Grid */}
            <div className="goals-grid">
              {data?.goals.map((goal) => {
                const isSelected = selectedGoal?.id === goal.id;
                const progress = Math.round(
                  (goal.currentSavedAmount / goal.targetAmount) * 100,
                );

                return (
                  <div
                    key={goal.id}
                    className={`goal-card ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSelectGoal(goal)}
                  >
                    <div className="card-header">
                      <div className="card-title-group">
                        <div
                          className="icon-box"
                          style={{
                            color:
                              goal.status === GoalStatus.BEHIND
                                ? "var(--warning)"
                                : goal.status === GoalStatus.COMPLETED
                                  ? "#3b82f6"
                                  : "var(--primary-green)",
                            backgroundColor:
                              goal.status === GoalStatus.BEHIND
                                ? "#fffbeb"
                                : goal.status === GoalStatus.COMPLETED
                                  ? "#eff6ff"
                                  : "#f0fdf4",
                          }}
                        >
                          {<GoalIcon />}
                        </div>
                        <div className="card-title">
                          <h3>{goal.title}</h3>
                          <p>Due {formatDate(goal.targetDate)}</p>
                        </div>
                      </div>
                      <div style={{ position: "relative" }}>
                        <button
                          className="menu-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDropdownOpenId(
                              dropdownOpenId === goal.id ? null : goal.id,
                            );
                          }}
                        >
                          <MoreHorizontal size={20} />
                        </button>

                        {/* 3 Dot Dropdown */}
                        {dropdownOpenId === goal.id && (
                          <div className="dropdown-menu">
                            <button
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectGoal(goal);
                              }}
                            >
                              <Eye size={16} /> View Details
                            </button>
                            <button
                              className="dropdown-item"
                              onClick={(e) => handleEditClick(goal, e)}
                            >
                              <Edit2 size={16} /> Edit Goal
                            </button>
                            <button
                              className="dropdown-item danger"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Trash2 size={16} /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="amounts-row">
                      <div className="amount-box">
                        <span>Saved</span>
                        <strong>
                          {formatCurrency(goal.currentSavedAmount)}
                        </strong>
                      </div>
                      <div
                        className="amount-box"
                        style={{ background: "transparent", padding: "12px 0" }}
                      >
                        <span>Target</span>
                        <strong>{formatCurrency(goal.targetAmount)}</strong>
                      </div>
                    </div>

                    <div className="progress-info">
                      <strong
                        style={{
                          fontSize: "1.2rem",
                          color: progress === 100 ? "#3b82f6" : "inherit",
                        }}
                      >
                        {progress}%
                      </strong>
                      <span
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {formatCurrency(
                          goal.targetAmount - goal.currentSavedAmount,
                        )}{" "}
                        left
                      </span>
                    </div>

                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${progress}%`,
                          backgroundColor:
                            progress === 100
                              ? "#3b82f6"
                              : goal.status === GoalStatus.BEHIND
                                ? "var(--warning)"
                                : "var(--primary-green)",
                        }}
                      ></div>
                    </div>

                    <div className="card-actions">
                      <button
                        className={`card-btn ${isSelected ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectGoal(goal);
                        }}
                      >
                        <Eye size={14} />{" "}
                        {isSelected ? "Viewing details" : "Details"}
                      </button>
                      <button
                        className="card-btn"
                        onClick={(e) => handleEditClick(goal, e)}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <div
                        className={`status-badge ${
                          goal.status === GoalStatus.ON_TRACK
                            ? "status-on-track"
                            : goal.status === GoalStatus.BEHIND
                              ? "status-behind"
                              : "status-completed"
                        }`}
                      >
                        {goal.status === GoalStatus.ON_TRACK && (
                          <CheckCircle2 size={12} />
                        )}
                        {goal.status}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL: DETAILS */}
          {selectedGoal && goalPlan && (
            <div className="goal-details-panel">
              <div className="panel-header">
                <div
                  className="icon-box"
                  style={{
                    color:
                      selectedGoal.status === GoalStatus.BEHIND
                        ? "var(--warning)"
                        : "var(--primary-green)",
                    backgroundColor:
                      selectedGoal.status === GoalStatus.BEHIND
                        ? "#fffbeb"
                        : "#f0fdf4",
                  }}
                >
                  {<GoalIcon />}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem" }}>
                    {goalPlan.goalPlan.goal}
                  </h3>
                  <div
                    className={`status-badge ${
                      selectedGoal.status === GoalStatus.ON_TRACK
                        ? "status-on-track"
                        : selectedGoal.status === GoalStatus.BEHIND
                          ? "status-behind"
                          : "status-completed"
                    }`}
                    style={{ marginTop: "4px" }}
                  >
                    {selectedGoal.status}
                  </div>
                </div>
              </div>

              <div className="panel-body">
                <div className="details-grid">
                  <div className="detail-box">
                    <span>Target</span>
                    <strong>
                      {formatCurrency(goalPlan.goalPlan.targetAmount)}
                    </strong>
                  </div>
                  <div className="detail-box">
                    <span>Saved</span>
                    <strong>
                      {formatCurrency(goalPlan.goalPlan.savedAmount)}
                    </strong>
                  </div>
                  <div className="detail-box">
                    <span>Remaining</span>
                    <strong>
                      {formatCurrency(goalPlan.goalPlan.remainingAmount)}
                    </strong>
                  </div>
                  <div className="detail-box">
                    <span>Due</span>
                    <strong>{formatDate(selectedGoal.targetDate)}</strong>
                  </div>
                </div>

                <div className="circular-progress-section">
                  <div className="circle-wrap">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                      <circle
                        className="circle-bg"
                        cx="50"
                        cy="50"
                        r="40"
                      ></circle>
                      <circle
                        className="circle-fill"
                        cx="50"
                        cy="50"
                        r="40"
                        style={{
                          strokeDasharray: 251.2,
                          strokeDashoffset:
                            251.2 -
                            (251.2 * goalPlan.goalPlan.progressPercentage) /
                              100,
                          stroke:
                            goalPlan.goalPlan.progressPercentage === 100
                              ? "#3b82f6"
                              : selectedGoal.status === GoalStatus.BEHIND
                                ? "var(--warning)"
                                : "var(--primary-green)",
                        }}
                      ></circle>
                    </svg>
                    <div className="circle-text">
                      <strong>{goalPlan.goalPlan.progressPercentage}%</strong>
                      <span>complete</span>
                    </div>
                  </div>
                  <div className="progress-legend">
                    <div className="legend-item">
                      <div
                        className="dot saved"
                        style={{
                          backgroundColor:
                            goalPlan.goalPlan.progressPercentage === 100
                              ? "#3b82f6"
                              : selectedGoal.status === GoalStatus.BEHIND
                                ? "var(--warning)"
                                : "var(--primary-green)",
                        }}
                      ></div>
                      <div>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.75rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Saved
                        </span>
                        <strong>
                          {formatCurrency(goalPlan.goalPlan.savedAmount)}
                        </strong>
                      </div>
                    </div>
                    <div className="legend-item">
                      <div className="dot remaining"></div>
                      <div>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.75rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Remaining
                        </span>
                        <strong>
                          {formatCurrency(goalPlan.goalPlan.remainingAmount)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    letterSpacing: "1px",
                    marginBottom: "12px",
                  }}
                >
                  TIMELINE
                </div>
                <div className="timeline">
                  <div className="timeline-step">
                    <div className="step-icon active">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>Started</span>
                  </div>
                  <div className="timeline-step">
                    <div className="step-icon active">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>25%</span>
                  </div>
                  <div className="timeline-step">
                    <div className="step-icon"></div>
                    <span>50%</span>
                  </div>
                  <div className="timeline-step">
                    <div className="step-icon"></div>
                    <span>75%</span>
                  </div>
                  <div className="timeline-step">
                    <div className="step-icon"></div>
                    <span>Done</span>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "12px",
                    padding: "16px",
                  }}
                >
                  <div className="saving-plan-header">
                    <h4>
                      <Calendar size={18} color="var(--primary-green)" /> Saving
                      Plan
                    </h4>
                    <span className="api-badge">
                      GET /goals/{selectedGoal.id}/plan
                    </span>
                  </div>
                  <div className="plan-grid">
                    <div className="plan-box highlight">
                      <span style={{ color: "var(--primary-green)" }}>
                        Suggested Monthly
                      </span>
                      <strong>
                        ${goalPlan.goalPlan.requiredMonthlySaving}
                      </strong>
                    </div>
                    <div className="plan-box">
                      <span>Months Remaining</span>
                      <strong>{goalPlan.goalPlan.monthsRemaining} mo</strong>
                    </div>
                    <div className="plan-box">
                      <span>Required Rate</span>
                      <strong>~18% of income</strong>
                    </div>
                    <div className="plan-box">
                      <span>Est. Completion</span>
                      <strong>{formatDate(selectedGoal.targetDate)}</strong>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      letterSpacing: "1px",
                      marginBottom: "8px",
                    }}
                  >
                    MONTHLY CONTRIBUTIONS
                  </div>
                  {/* Placeholder for the chart seen in UI */}
                  <div
                    style={{
                      height: "60px",
                      width: "100%",
                      borderBottom: "1px dashed var(--border-color)",
                      position: "relative",
                    }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,20 Q10,15 20,25 T40,20 T60,25 T80,18 T100,22"
                        fill="none"
                        stroke="var(--warning)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- CREATE MODAL --- */}
      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Create New Goal"
        description="Define a new financial milestone to track."
      >
        <div className="form-group">
          <label>Goal Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g. Emergency Fund"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Target Amount</label>
            <input type="text" className="form-input" placeholder="$0" />
          </div>
          <div className="form-group">
            <label>Current Savings</label>
            <input type="text" className="form-input" placeholder="$0" />
          </div>
        </div>
        <div className="form-group">
          <label>Target Date</label>
          <input
            type="text"
            className="form-input"
            placeholder="MM/YYYY"
            style={{ width: "50%" }}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <div className="category-bubbles">
            <button className="bubble-btn">
              <ShieldAlert size={14} /> Emergency
            </button>
            <button className="bubble-btn">
              <Plane size={14} /> Travel
            </button>
            <button className="bubble-btn">
              <Laptop size={14} /> Tech
            </button>
            <button className="bubble-btn">
              <Car size={14} /> Vehicle
            </button>
            <button className="bubble-btn">
              <Home size={14} /> Housing
            </button>
            <button className="bubble-btn">
              <GraduationCap size={14} /> Education
            </button>
            <button className="bubble-btn">
              <Briefcase size={14} /> Investment
            </button>
            <button className="bubble-btn">
              <Heart size={14} /> Lifestyle
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Priority</label>
          <div className="priority-group">
            <button className="priority-btn">High</button>
            <button className="priority-btn">Medium</button>
            <button className="priority-btn">Low</button>
          </div>
        </div>
        <div className="form-group">
          <label>
            Description{" "}
            <span
              style={{ color: "var(--text-secondary)", fontWeight: "normal" }}
            >
              — optional
            </span>
          </label>
          <textarea
            className="form-input"
            placeholder="Describe this goal..."
          ></textarea>
        </div>

        {/* We place footer directly inside modal body layout for absolute bottom positioning if needed, or inline */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          <button
            className="btn-secondary"
            onClick={() => setIsCreateOpen(false)}
          >
            Cancel
          </button>
          <button
            className="btn-primary"
            onClick={() => setIsCreateOpen(false)}
          >
            <Plus size={18} /> Create Goal
          </button>
        </div>
      </Modal>

      {/* --- EDIT MODAL --- */}
      <Modal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Edit Goal"
        description={editingGoal ? `Editing "${editingGoal.title}"` : ""}
      >
        <div className="form-group">
          <label>Goal Name</label>
          <input
            type="text"
            className="form-input"
            defaultValue={editingGoal?.title}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Target Amount</label>
            <input
              type="text"
              className="form-input"
              defaultValue={`$${editingGoal?.targetAmount}`}
            />
          </div>
          <div className="form-group">
            <label>Current Savings</label>
            <input
              type="text"
              className="form-input"
              defaultValue={`$${editingGoal?.currentSavedAmount}`}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Target Date</label>
          <input
            type="text"
            className="form-input"
            defaultValue="Jun 2025"
            style={{ width: "50%" }}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <div className="category-bubbles">
            <button className="bubble-btn">
              <ShieldAlert size={14} /> Emergency
            </button>
            <button className="bubble-btn active">
              <Plane size={14} /> Travel
            </button>
            <button className="bubble-btn">
              <Laptop size={14} /> Tech
            </button>
            <button className="bubble-btn">
              <Car size={14} /> Vehicle
            </button>
            <button className="bubble-btn">
              <Home size={14} /> Housing
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Priority</label>
          <div className="priority-group">
            <button className="priority-btn">High</button>
            <button className="priority-btn active">Medium</button>
            <button className="priority-btn">Low</button>
          </div>
        </div>
        <div className="form-group">
          <label>
            Description{" "}
            <span
              style={{ color: "var(--text-secondary)", fontWeight: "normal" }}
            >
              — optional
            </span>
          </label>
          <textarea
            className="form-input"
            defaultValue="Dream Italian vacation along the Amalfi Coast for 10 days."
          ></textarea>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          <button
            className="btn-secondary"
            onClick={() => setIsEditOpen(false)}
          >
            Cancel
          </button>
          <button className="btn-primary" onClick={() => setIsEditOpen(false)}>
            <Edit2 size={16} /> Save Changes
          </button>
        </div>
      </Modal>
    </div>
  );
}
