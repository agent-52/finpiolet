import { Ic } from "./Icon";
import type { Category } from "../transaction.types"; // assume Category type imported

interface FilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  typeF: string;
  onTypeChange: (v: string) => void;
  catF: string;
  onCatChange: (v: string) => void;
  startDate: string;
  onStartDateChange: (v: string) => void;
  endDate: string;
  onEndDateChange: (v: string) => void;
  hasFilters: boolean;
  onClear: () => void;
  categories: Category[]; // dynamic categories
}

export function FilterBar({
  search,
  onSearchChange,
  typeF,
  onTypeChange,
  catF,
  onCatChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  hasFilters,
  onClear,
  categories,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-search-wrap">
        <span className="filter-search-icon">
          <Ic
            paths={["M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"]}
            size={14}
          />
        </span>
        <input
          className="filter-search-input"
          placeholder="Search transactions…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <span className="filter-vdivider" />

      <div className="filter-group">
        <span className="filter-label">Type</span>
        <select
          className="filter-select"
          value={typeF}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          {["All", "Income", "Expense"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <span className="filter-label">Category</span>
        <select
          className="filter-select"
          value={catF}
          onChange={(e) => onCatChange(e.target.value)}
        >
          <option value="">All</option>
          {categories.length > 0
            ? categories.map((c) => (
                <option key={c.id} value={String(c.id)}>
                  {c.name}
                </option>
              ))
            : null}
        </select>
      </div>

      <div className="filter-group">
        <span className="filter-label">From</span>
        <input
          type="date"
          className="filter-select"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <span className="filter-label">To</span>
        <input
          type="date"
          className="filter-select"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>

      {hasFilters && (
        <button className="filter-clear" onClick={onClear}>
          Clear filters
        </button>
      )}
    </div>
  );
}
