import { useEffect, useState } from "react";
import { Sidebar } from "../../../components/common/Sidebar";

import { useCategories } from "../../categories/hooks/useCategories";

import "../../../styles/transaction.css";
import type {
  Category,
  TransactionDisplay,
  TransactionQueryObject,
} from "../transaction.types";
import { useTransactions } from "../hooks/useTransactions";
import { fmtAmt, mapTransactionToDisplay } from "../utils";
import { Topbar } from "../components/TopBar";
import { SkeletonView } from "../components/SkeletonView";
import { EmptyState } from "../components/EmptyState";
import { FilterBar } from "../components/FilterBar";
import { SummaryCard } from "../components/SummaryCard";
import { DataTable } from "../components/DataTable";
import { CSVImport } from "../components/CSVImport";
import {
  AddTransactionModal,
  DeleteTransactionModal,
  EditTransactionModal,
} from "../components/TransactionModals";

export default function TransactionPage() {
  const [viewMode, setViewMode] = useState<"normal" | "empty" | "loading">(
    "normal",
  );

  const [queryObject, setQueryObject] = useState<TransactionQueryObject>({
    page: "1",
    limit: "10",
    search: "",
    type: undefined,
    categoryId: undefined,
    startDate: undefined,
    endDate: undefined,
    sortBy: "transactionDate",
    sortOrder: "desc",
  });

  const { data, isLoading, isError, error } = useTransactions(queryObject);
  const {
    data: categoriesData,
    isError: categoriesError,
    error: categoriesFetchError,
  } = useCategories();

  // Log category fetch error, but do not interrupt UI
  useEffect(() => {
    if (categoriesError) {
      console.error("Failed to load categories:", categoriesFetchError);
    }
  }, [categoriesError, categoriesFetchError]);

  const categories: Category[] = Array.isArray(categoriesData?.categories)
    ? categoriesData.categories
    : [];

  const [modalState, setModalState] = useState<{
    kind: "add" | "edit" | "delete" | null;
    transaction?: TransactionDisplay;
  }>({ kind: null });

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const updateQuery = (updates: Partial<TransactionQueryObject>) => {
    setQueryObject((prev) => ({ ...prev, ...updates, page: "1" }));
  };

  const handleSearchChange = (search: string) => updateQuery({ search });
  const handleTypeChange = (type: string) =>
    updateQuery({
      type:
        type === "All" ? undefined : (type as TransactionQueryObject["type"]),
    });
  const handleCategoryChange = (categoryId: string) =>
    updateQuery({ categoryId: categoryId === "" ? undefined : categoryId });
  const handleStartDateChange = (startDate: string) =>
    updateQuery({ startDate });
  const handleEndDateChange = (endDate: string) => updateQuery({ endDate });
  const handlePageChange = (page: number) =>
    setQueryObject((prev) => ({ ...prev, page: String(page) }));
  const handleLimitChange = (limit: number) =>
    setQueryObject((prev) => ({ ...prev, limit: String(limit), page: "1" }));
  const handleSortChange = (sortBy: string, sortOrder: "asc" | "desc") =>
    setQueryObject((prev) => ({
      ...prev,
      sortBy: sortBy as any,
      sortOrder,
      page: "1",
    }));

  const clearFilters = () => {
    setQueryObject({
      page: "1",
      limit: queryObject.limit,
      search: "",
      type: undefined,
      categoryId: undefined,
      startDate: undefined,
      endDate: undefined,
      sortBy: "transactionDate",
      sortOrder: "desc",
    });
  };

  const hasFilters =
    !!queryObject.search ||
    !!queryObject.type ||
    !!queryObject.categoryId ||
    !!queryObject.startDate ||
    !!queryObject.endDate;

  const transactions: TransactionDisplay[] =
    data?.transactions?.map(mapTransactionToDisplay) ?? [];
  const total = data?.total ?? 0;
  const currentPage = Number(queryObject.page) || 1;
  const limit = Number(queryObject.limit) || 10;

  const totalIncome = transactions
    .filter((t) => t.type === "INCOME")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "EXPENSE")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const netFlow = totalIncome - totalExpenses;

  const openAddModal = () => setModalState({ kind: "add" });
  const openEditModal = (tx: TransactionDisplay) =>
    setModalState({ kind: "edit", transaction: tx });
  const openDeleteModal = (tx: TransactionDisplay) =>
    setModalState({ kind: "delete", transaction: tx });
  const closeModal = () => setModalState({ kind: null });

  const handleDuplicate = (tx: TransactionDisplay) => {
    console.log("Duplicate transaction:", tx);
  };

  return (
    <div className="app-layout">
      <Sidebar activePage="transactions" onNavigate={() => {}} />

      <div className="main-col">
        <Topbar count={total} />

        <main className="page-content">
          <div className="preview-switcher">
            <span className="preview-label">Preview</span>
            <span className="preview-divider" />
            {(["normal", "empty", "loading"] as const).map((m) => (
              <button
                key={m}
                className={`preview-btn${viewMode === m ? " preview-btn--active" : ""}`}
                onClick={() => setViewMode(m)}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="page-header">
            <div>
              <h1 className="page-header__title">Transactions</h1>
              <p className="page-header__subtitle">
                Track and manage all your financial activity.
              </p>
            </div>
            <div className="page-actions">
              <button className="btn btn--secondary">Import CSV</button>
              <button className="btn btn--primary" onClick={openAddModal}>
                Add Transaction
              </button>
            </div>
          </div>

          {viewMode === "loading" && <SkeletonView />}
          {viewMode === "empty" && <EmptyState onAdd={openAddModal} />}

          {viewMode === "normal" && (
            <>
              <FilterBar
                search={queryObject.search || ""}
                onSearchChange={handleSearchChange}
                typeF={queryObject.type || "All"}
                onTypeChange={handleTypeChange}
                catF={queryObject.categoryId || ""}
                onCatChange={handleCategoryChange}
                startDate={queryObject.startDate || ""}
                onStartDateChange={handleStartDateChange}
                endDate={queryObject.endDate || ""}
                onEndDateChange={handleEndDateChange}
                hasFilters={hasFilters}
                onClear={clearFilters}
                categories={categories}
              />

              <div className="summary-grid">
                <SummaryCard
                  icon="💳"
                  label="Total Transactions"
                  value={String(total)}
                  trend={`${total} total`}
                  sub="Based on current page"
                  up={true}
                  neutral={true}
                />
                <SummaryCard
                  icon="💚"
                  label="Total Income"
                  value={fmtAmt(totalIncome)}
                  trend="Current page only"
                  sub="May need separate endpoint"
                  up={true}
                />
                <SummaryCard
                  icon="🔴"
                  label="Total Expenses"
                  value={fmtAmt(totalExpenses)}
                  trend="Current page only"
                  sub="May need separate endpoint"
                  up={false}
                />
                <SummaryCard
                  icon="📊"
                  label="Net Cash Flow"
                  value={fmtAmt(netFlow)}
                  trend="Current page only"
                  sub="May need separate endpoint"
                  up={netFlow >= 0}
                />
              </div>

              <DataTable
                rows={transactions}
                total={total}
                page={currentPage}
                limit={limit}
                onPageChange={handlePageChange}
                onLimitChange={handleLimitChange}
                openMenuId={openMenuId}
                onMenuToggle={(id) =>
                  setOpenMenuId((prev) => (prev === id ? null : id))
                }
                onMenuClose={() => setOpenMenuId(null)}
                onEdit={(tx) => {
                  openEditModal(tx);
                  setOpenMenuId(null);
                }}
                onDuplicate={(tx) => {
                  handleDuplicate(tx);
                  setOpenMenuId(null);
                }}
                onDelete={(tx) => {
                  openDeleteModal(tx);
                  setOpenMenuId(null);
                }}
                sortBy={queryObject.sortBy}
                sortOrder={queryObject.sortOrder}
                onSortChange={handleSortChange}
              />

              <CSVImport />
            </>
          )}
        </main>
      </div>

      <AddTransactionModal
        isOpen={modalState.kind === "add"}
        onClose={closeModal}
        categories={categories}
      />
      {modalState.kind === "edit" && modalState.transaction && (
        <EditTransactionModal
          isOpen={true}
          onClose={closeModal}
          transaction={modalState.transaction}
          categories={categories}
        />
      )}
      {modalState.kind === "delete" && modalState.transaction && (
        <DeleteTransactionModal
          isOpen={true}
          onClose={closeModal}
          transaction={modalState.transaction}
        />
      )}
    </div>
  );
}
