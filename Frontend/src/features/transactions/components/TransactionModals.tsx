import { useState } from "react";
import { Modal } from "../../../components/common/Modal";
import { useCreateTransaction } from "../hooks/useCreateTransaction";
import { useDeleteTransaction } from "../hooks/useDeleteTransaction";
import { useUpdateTransaction } from "../hooks/useUpdateTransaction";
import { METHODS } from "../constants";
import {
  validateTransactionForm,
  prepareTransactionData,
  fmtAmt,
} from "../utils";
import type { TransactionDisplay, Category } from "../transaction.types";
import type { TransactionType } from "../../dashboard/dashboard.types";
import { PaymentMethod } from "../../dashboard/dashboard.types";

// Helper to get category ID from name (if needed for edit modal default)
const getCategoryIdByName = (categories: Category[], name: string) => {
  return categories.find((c) => c.name === name)?.id ?? 0;
};

// ---------- Add Transaction Modal ----------
export function AddTransactionModal({
  isOpen,
  onClose,
  categories,
}: {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}) {
  const [form, setForm] = useState({
    type: "Expense" as TransactionType,
    title: "",
    amount: "",
    categoryId: categories[0]?.id || 0, // default first category
    date: new Date().toISOString().split("T")[0],
    paymentMethod: PaymentMethod.CREDITCARD,
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const createMutation = useCreateTransaction();

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const validationErrors = validateTransactionForm({
      title: form.title,
      amount: form.amount,
      categoryId: form.categoryId,
      date: form.date,
    });
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const data = prepareTransactionData({
      type: form.type,
      title: form.title,
      amount: form.amount,
      categoryId: form.categoryId,
      date: form.date,
      paymentMethod: form.paymentMethod,
      notes: form.notes,
    });

    createMutation.mutate(data, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Transaction"
      description="Record a new financial entry"
    >
      <div className="form-body">
        <div className="modal-type-selector">
          {(["EXPENSE", "INCOME"] as TransactionType[]).map((t) => (
            <button
              key={t}
              className={`modal-type-btn${form.type === t ? ` modal-type-btn--${t.toLowerCase()}` : ""}`}
              onClick={() => handleChange("type", t)}
            >
              {t === "EXPENSE" ? "↓" : "↑"} {t}
            </button>
          ))}
        </div>

        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className={`form-input${errors.title ? " form-input--error" : ""}`}
            placeholder="e.g. Netflix Subscription"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Amount</label>
            <input
              className={`form-input${errors.amount ? " form-input--error" : ""}`}
              type="number"
              step="0.01"
              value={form.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
            />
            {errors.amount && (
              <span className="form-error">{errors.amount}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              type="date"
              className={`form-input${errors.date ? " form-input--error" : ""}`}
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
            {errors.date && <span className="form-error">{errors.date}</span>}
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={form.categoryId}
              onChange={(e) =>
                handleChange("categoryId", Number(e.target.value))
              }
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <span className="form-error">{errors.categoryId}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              value={form.paymentMethod}
              onChange={(e) => handleChange("paymentMethod", e.target.value)}
            >
              {METHODS.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Notes <span className="form-optional">(optional)</span>
          </label>
          <textarea
            className="form-textarea"
            rows={3}
            placeholder="Add a note…"
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>
      </div>

      <div className="modal-footer">
        <button className="btn--cancel" onClick={onClose}>
          Cancel
        </button>
        <button
          className="btn--save"
          onClick={handleSubmit}
          disabled={createMutation.isPending}
        >
          {createMutation.isPending ? "Saving..." : "Save Transaction"}
        </button>
      </div>
    </Modal>
  );
}

// ---------- Edit Transaction Modal ----------
export function EditTransactionModal({
  isOpen,
  onClose,
  transaction,
  categories,
}: {
  isOpen: boolean;
  onClose: () => void;
  transaction: TransactionDisplay;
  categories: Category[];
}) {
  const [form, setForm] = useState({
    type: transaction.type,
    title: transaction.title,
    amount: String(Math.abs(transaction.amount)),
    categoryId: getCategoryIdByName(categories, transaction.cat),
    date: transaction.dateMs
      ? new Date(transaction.dateMs).toISOString().split("T")[0]
      : "",
    paymentMethod: transaction.method,
    notes: transaction.notes,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const updateMutation = useUpdateTransaction();

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const validationErrors = validateTransactionForm({
      title: form.title,
      amount: form.amount,
      categoryId: form.categoryId,
      date: form.date,
    });
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const data = prepareTransactionData({
      type: form.type,
      title: form.title,
      amount: form.amount,
      categoryId: form.categoryId,
      date: form.date,
      paymentMethod: form.paymentMethod,
      notes: form.notes,
    });

    updateMutation.mutate(
      { id: transaction.id, transactionData: data },
      {
        onSuccess: () => onClose(),
      },
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Transaction"
      description="Update transaction details"
    >
      <div className="form-body">
        <div className="modal-type-selector">
          {(["EXPENSE", "INCOME"] as TransactionType[]).map((t) => (
            <button
              key={t}
              className={`modal-type-btn${form.type === t ? ` modal-type-btn--${t.toLowerCase()}` : ""}`}
              onClick={() => handleChange("type", t)}
            >
              {t === "EXPENSE" ? "↓" : "↑"} {t}
            </button>
          ))}
        </div>

        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className={`form-input${errors.title ? " form-input--error" : ""}`}
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Amount</label>
            <input
              className={`form-input${errors.amount ? " form-input--error" : ""}`}
              type="number"
              step="0.01"
              value={form.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
            />
            {errors.amount && (
              <span className="form-error">{errors.amount}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              type="date"
              className={`form-input${errors.date ? " form-input--error" : ""}`}
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
            {errors.date && <span className="form-error">{errors.date}</span>}
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={form.categoryId}
              onChange={(e) =>
                handleChange("categoryId", Number(e.target.value))
              }
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              value={form.paymentMethod}
              onChange={(e) => handleChange("paymentMethod", e.target.value)}
            >
              {METHODS.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Notes <span className="form-optional">(optional)</span>
          </label>
          <textarea
            className="form-textarea"
            rows={3}
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>
      </div>

      <div className="modal-footer">
        <button className="btn--cancel" onClick={onClose}>
          Cancel
        </button>
        <button
          className="btn--save"
          onClick={handleSubmit}
          disabled={updateMutation.isPending}
        >
          {updateMutation.isPending ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </Modal>
  );
}

// ---------- Delete Transaction Modal (unchanged) ----------
export function DeleteTransactionModal({
  isOpen,
  onClose,
  transaction,
}: {
  isOpen: boolean;
  onClose: () => void;
  transaction: TransactionDisplay;
}) {
  const deleteMutation = useDeleteTransaction();

  const handleDelete = () => {
    deleteMutation.mutate(transaction.id, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Transaction?"
      description={`Delete ${transaction.title}?`}
    >
      <div className="delete-desc">
        You're about to permanently delete <strong>{transaction.title}</strong>{" "}
        ({fmtAmt(transaction.amount)}). This action cannot be undone.
      </div>
      <div className="delete-actions">
        <button
          className="btn btn--danger btn--full"
          onClick={handleDelete}
          disabled={deleteMutation.isPending}
        >
          {deleteMutation.isPending ? "Deleting..." : "Delete Transaction"}
        </button>
        <button className="btn--cancel btn--full" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
