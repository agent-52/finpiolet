import React, { useState, useEffect } from "react";
import type { GoalData } from "../goals.types";
import type { Goal } from "../goals.types";

interface GoalFormProps {
  initialPlan?: Goal | null;
  onSubmit: (values: GoalData) => void;
  onCancel: () => void;
}

export const GoalForm: React.FC<GoalFormProps> = ({
  initialPlan,
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [currentSavedAmount, setCurrentSavedAmount] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initialPlan) {
      setTitle(initialPlan.title);
      setTargetAmount(initialPlan.targetAmount.toString());
      setCurrentSavedAmount(initialPlan.currentSavedAmount.toString());
      const dateStr = new Date(initialPlan.targetDate)
        .toISOString()
        .split("T")[0];
      setTargetDate(dateStr);
    } else {
      setTitle("");
      setTargetAmount("");
      setCurrentSavedAmount("0");
      setTargetDate("");
      setNotes("");
    }
  }, [initialPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      targetAmount: parseFloat(targetAmount) || 0,
      currentSavedAmount: parseFloat(currentSavedAmount) || 0,
      targetDate,
      notes,
    });
  };

  return (
    <form className="goal-form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Goal Name</label>
        <input
          type="text"
          required
          className="form-input"
          placeholder="e.g. New Car, Emergency Fund"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-row-two">
        <div className="form-group">
          <label>Target Amount ($)</label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            className="form-input"
            placeholder="5000"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Already Saved ($)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            className="form-input"
            placeholder="0"
            value={currentSavedAmount}
            onChange={(e) => setCurrentSavedAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Target Date</label>
        <input
          type="date"
          required
          className="form-input"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Notes</label>
        <textarea
          className="form-textarea"
          placeholder="Optional notes about this goal..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="form-actions">
        <button type="button" className="btn-form-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-form-submit">
          {initialPlan ? "Save Changes" : "Create Goal"}
        </button>
      </div>
    </form>
  );
};
