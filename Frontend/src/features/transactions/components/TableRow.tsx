import { Ic } from "./Icon";
import { ActionMenu } from "./ActionMenu";
import { CatBadge } from "./Badges";
import { fmtAmt } from "../utils";
import { METHOD_EMOJI } from "../constants";
import type { TransactionDisplay } from "../transaction.types";

interface TableRowProps {
  tx: TransactionDisplay;
  idx: number;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export function TableRow({
  tx,
  idx,
  isMenuOpen,
  onMenuToggle,
  onMenuClose,
  onEdit,
  onDuplicate,
  onDelete,
}: TableRowProps) {
  const isIncome = tx.type === "INCOME";
  return (
    <tr
      className={`data-table__row${idx % 2 !== 0 ? " data-table__row--even" : ""}`}
    >
      {/* Transaction */}
      <td className="data-table__td">
        <div className="tx-cell">
          <div
            className={`tx-icon tx-icon--${isIncome ? "income" : "expense"}`}
          >
            <Ic
              paths={[
                isIncome ? "M12 19V5M5 12l7-7 7 7" : "M12 5v14M19 12l-7 7-7-7",
              ]}
              size={15}
              color={isIncome ? "#059669" : "#dc2626"}
              sw={2.2}
            />
          </div>
          <div className="tx-info">
            <div className="tx-title">{tx.title}</div>
            {/* merchant removed */}
          </div>
        </div>
      </td>
      {/* Category */}
      <td className="data-table__td">
        <CatBadge cat={tx.cat} catC={tx.catC} />
      </td>
      {/* Type */}
      <td className="data-table__td">
        <span className={isIncome ? "type-income" : "type-expense"}>
          {tx.type}
        </span>
      </td>
      {/* Date */}
      <td className="data-table__td">
        <span className="date-text">{tx.date}</span>
      </td>
      {/* Amount */}
      <td className="data-table__td data-table__td--right">
        <span className={`amount amount--${isIncome ? "income" : "expense"}`}>
          {isIncome ? "+" : "−"}
          {fmtAmt(tx.amount)}
        </span>
      </td>
      {/* Method */}
      <td className="data-table__td">
        <span className="method-cell">
          <span>{METHOD_EMOJI[tx.method] ?? "💳"}</span>
          {tx.method}
        </span>
      </td>
      {/* Status removed */}
      {/* Actions */}
      <td className="data-table__td data-table__td--right">
        <div className="action-menu-wrap">
          <button
            className={`action-menu-btn${isMenuOpen ? " action-menu-btn--open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onMenuToggle();
            }}
            aria-label="Actions"
          >
            <Ic paths={["M12 5h.01M12 12h.01M12 19h.01"]} size={17} sw={2.5} />
          </button>
          {isMenuOpen && (
            <ActionMenu
              onEdit={onEdit}
              onDuplicate={onDuplicate}
              onDelete={onDelete}
              onClose={onMenuClose}
            />
          )}
        </div>
      </td>
    </tr>
  );
}
