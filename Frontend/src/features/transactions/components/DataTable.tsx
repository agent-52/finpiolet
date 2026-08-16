import { Ic } from "./Icon";
import { TableRow } from "./TableRow";
import type { TransactionDisplay } from "../transaction.types";

interface DataTableProps {
  rows: TransactionDisplay[];
  total: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  openMenuId: number | null;
  onMenuToggle: (id: number) => void;
  onMenuClose: () => void;
  onEdit: (tx: TransactionDisplay) => void;
  onDuplicate: (tx: TransactionDisplay) => void;
  onDelete: (tx: TransactionDisplay) => void;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  onSortChange: (sortBy: string, sortOrder: "asc" | "desc") => void;
}

export function DataTable({
  rows,
  total,
  page,
  limit,
  onPageChange,
  onLimitChange,
  openMenuId,
  onMenuToggle,
  onMenuClose,
  onEdit,
  onDuplicate,
  onDelete,
  sortBy,
  sortOrder,
  onSortChange,
}: DataTableProps) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  const handleSort = (field: string) => {
    const isAsc = sortBy === field && sortOrder === "asc";
    onSortChange(field, isAsc ? "desc" : "asc");
  };

  const sortTh = (label: string, field: string, align?: string) => {
    const isActive = sortBy === field;
    const arrow = isActive ? (sortOrder === "asc" ? " ↑" : " ↓") : "";
    return (
      <th
        className={`data-table__th data-table__th--sortable${isActive ? " data-table__th--active" : ""}${align === "right" ? " data-table__th--right" : ""}`}
        onClick={() => handleSort(field)}
      >
        {label}
        {isActive && <span className="sort-indicator">{arrow}</span>}
      </th>
    );
  };

  return (
    <div className="table-container">
      <div className="table-toolbar">
        <div className="table-toolbar__left">
          <span className="table-toolbar__title">All Transactions</span>
          <span className="table-toolbar__count">{total}</span>
        </div>
        <div className="table-toolbar__right">
          <button className="btn btn--ghost">
            <Ic paths={["M4 6h16M4 12h8m-8 6h16"]} size={13} color="#9ba3af" />
            Columns
          </button>
          <button className="btn btn--ghost">
            <Ic
              paths={[
                "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
              ]}
              size={13}
              color="#9ba3af"
            />
            Export
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              {sortTh("Transaction", "title")}
              <th className="data-table__th">Category</th>
              {sortTh("Type", "type")}
              {sortTh("Date", "transactionDate")}
              {sortTh("Amount", "amount", "right")}
              <th className="data-table__th">Payment Method</th>
              {/* Removed Status column */}
              <th className="data-table__th data-table__th--right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((tx, idx) => (
              <TableRow
                key={tx.id}
                tx={tx}
                idx={idx}
                isMenuOpen={openMenuId === tx.id}
                onMenuToggle={() => onMenuToggle(tx.id)}
                onMenuClose={onMenuClose}
                onEdit={() => onEdit(tx)}
                onDuplicate={() => onDuplicate(tx)}
                onDelete={() => onDelete(tx)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pagination__info">
          <span className="pagination__rpp-label">Rows per page</span>
          <select
            className="pagination__rpp-select"
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
          >
            {[5, 10, 15, 25].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span className="pagination__range">
            <strong>
              {start}–{end}
            </strong>{" "}
            of <strong>{total}</strong> records
          </span>
        </div>
        <div className="pagination__pages">
          <button
            className="pagination__btn pagination__prev-next"
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
          >
            <Ic paths={["M15 18l-6-6 6-6"]} size={14} /> Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pagination__btn${page === i + 1 ? " pagination__btn--active" : ""}`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="pagination__btn pagination__prev-next"
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Next <Ic paths={["M9 18l6-6-6-6"]} size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
