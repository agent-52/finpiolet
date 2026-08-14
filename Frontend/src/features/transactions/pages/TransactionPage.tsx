import { Header } from "../../../components/common/Header";
import { Sidebar } from "../../../components/common/Sidebar";
import { Button } from "../../auth/components/Button";
import { Card1 } from "../components/Card1";
import { useTransactions } from "../hooks/useTransactions";
import type { TransactionQueryObject } from "../transaction.types";
import { TransactionPageSkeleton } from "./TransactionPageSkeleton";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Building2,
  CreditCard,
  File,
  Import,
  MoreVertical,
} from "lucide-react";
import { FcAddDatabase, FcExport } from "react-icons/fc";
import { TransactionType } from "../../dashboard/dashboard.types";
import { useState, useEffect, useRef, useMemo } from "react";
import "../../../styles/transaction.css";

// export const TransactionPage = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [activePage, setActivePage] = useState("transactions");
//   const [categoryArray, setCategoryArray] = useState([]);
//   const [queryObject, setQueryObject] = useState<TransactionQueryObject>({});

//   const { data, isSuccess, isError, isLoading, error } =
//     useTransactions(queryObject);

//   if (isLoading) {
//     return <TransactionPageSkeleton />;
//   }
//   return (
//     <div>
//       <Header />
//       <div className="transactionPage">
//         {isVisible ? (
//           <Sidebar activePage={activePage} onNavigate={setActivePage} />
//         ) : null}
//         {/* main page part */}
//         <div className="mainTransPart">
//           <div className="flex justify-between">
//             <div>
//               <h1>Transactions</h1>
//               <p>Track and manage all your financial activity.</p>
//             </div>
//             <div className=" flex">
//               <Button
//                 name="Import CSV"
//                 backImg={<Import />}
//                 className="btn-primary"
//               />
//               <Button
//                 name="Add Transaction"
//                 backImg={<FcAddDatabase />}
//                 className="btn-primary"
//               />
//             </div>
//           </div>
//           <div className="flex">
//             <div>
//               <input type="search" name="" id="" />
//             </div>
//             <div>
//               <DropBox
//                 name="Type"
//                 optionArray={[
//                   { name: "All", value: "ALL" },
//                   { name: "Income", value: "INCOME" },
//                   { name: "Expense", value: "EXPENSE" },
//                 ]}
//               />
//               <DropBox name="Category" optionArray={categoryArray} />
//               {/* Date wise selection so add calender here */}
//               <DropBox
//                 name="Sort"
//                 optionArray={[
//                   { name: "Date", value: "DATE" },
//                   { name: "Amount ↑", value: "AMOUNT DESC" },
//                 ]}
//               />
//             </div>
//           </div>
//           <div className="flex">
//             <Card1
//               img1Link=""
//               heading="TOTAL TRANSACTIONS"
//               desc1=""
//               desc2=""
//               mainValue=""
//             />
//             <Card1
//               img1Link=""
//               heading="TOTAL INCOME"
//               desc1=""
//               desc2=""
//               mainValue=""
//             />
//             <Card1
//               img1Link=""
//               heading="TOTAL EXPENSE"
//               desc1=""
//               desc2=""
//               mainValue=""
//             />
//             <Card1
//               img1Link=""
//               heading="NET CASH FLOW"
//               desc1=""
//               desc2=""
//               mainValue=""
//             />
//           </div>
//           {/* shows all transactions */}
//           <div>
//             <div className="flex justify-between">
//               <h2>All Transactions</h2>
//               <Button
//                 backImg={<FcExport />}
//                 className="btn-primary"
//                 name="Export"
//               />
//             </div>

//             {/* transactions table  */}
//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
//                     <th className="pb-3 pl-2 font-medium">Transaction</th>
//                     <th className="pb-3 font-medium">Category</th>
//                     <th className="pb-3 font-medium">Type</th>
//                     <th className="pb-3 font-medium">Date</th>
//                     <th className="pb-3 text-right font-medium">Amount</th>
//                     <th className="pb-3 pl-8 font-medium">Payment Method</th>
//                     <th className="pb-3 font-medium">Status</th>
//                     <th className="pb-3 text-right pr-2 font-medium">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-50">
//                   {data?.transactions.map((tx) => {
//                     const isIncome = tx.type === TransactionType.INCOME;

//                     return (
//                       <tr
//                         key={tx.id}
//                         className="hover:bg-gray-50/60 transition-colors group"
//                       >
//                         {/* Transaction Name & Icon */}
//                         <td className="py-4 pl-2">
//                           <div className="flex items-center gap-3">
//                             <div
//                               className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
//                                 isIncome
//                                   ? "bg-emerald-50 text-emerald-600"
//                                   : "bg-rose-50 text-rose-500"
//                               }`}
//                             >
//                               {isIncome ? (
//                                 <ArrowUpRight className="w-4 h-4" />
//                               ) : (
//                                 <ArrowDownLeft className="w-4 h-4" />
//                               )}
//                             </div>
//                             <div>
//                               <p className="text-sm font-semibold text-gray-900 leading-tight">
//                                 {tx.title}
//                               </p>
//                               <p className="text-xs text-gray-400 mt-0.5">
//                                 {tx.description}
//                               </p>
//                             </div>
//                           </div>
//                         </td>

//                         {/* Category */}
//                         <td className="py-4">
//                           <span
//                             className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
//                               isIncome
//                                 ? "bg-emerald-50 text-emerald-700"
//                                 : "bg-purple-50 text-purple-700"
//                             }`}
//                           >
//                             {/* this should be category name i will change the backend api to return category name as well */}
//                             {tx.categoryId}
//                           </span>
//                         </td>

//                         {/* Type */}
//                         <td className="py-4">
//                           <span
//                             className={`text-xs font-semibold ${
//                               isIncome ? "text-emerald-600" : "text-rose-500"
//                             }`}
//                           >
//                             {tx.type}
//                           </span>
//                         </td>

//                         {/* Date */}
//                         <td className="py-4 text-xs font-medium text-gray-500 whitespace-nowrap">
//                           {tx.transactionDate.toString()}
//                         </td>

//                         {/* Amount */}
//                         <td className="py-4 text-right">
//                           <span
//                             className={`text-xs font-bold ${
//                               isIncome ? "text-emerald-600" : "text-rose-500"
//                             }`}
//                           >
//                             {isIncome ? "+" : "-"}$
//                             {Math.abs(tx.amount).toLocaleString("en-US", {
//                               minimumFractionDigits: 2,
//                             })}
//                           </span>
//                         </td>

//                         {/* Payment Method */}
//                         <td className="py-4 pl-8">
//                           <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
//                             {/* {tx.paymentMethod === 'Bank Transfer' ? (
//                         <Building2 className="w-3.5 h-3.5 text-gray-400" />
//                       ) : (
//                         <CreditCard className="w-3.5 h-3.5 text-gray-400" />
//                       )} */}
//                             {/* <span>{tx.paymentMethod}</span> */}
//                             <span>{tx.paymentMethodId}</span>
//                           </div>
//                         </td>

//                         {/* Status */}
//                         <td className="py-4">
//                           <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
//                             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
//                             {tx.type}
//                           </div>
//                         </td>

//                         {/* Actions */}
//                         <td className="py-4 text-right pr-2">
//                           <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                             <MoreVertical className="w-4 h-4" />
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             <div className="flex justify-between">
//               <DropBox
//                 name="Rows per page"
//                 optionArray={[
//                   { name: "10", value: "10" },
//                   { name: "5", value: "5" },
//                   { name: "15", value: "15" },
//                   { name: "25", value: "25" },
//                 ]}
//               />

//               {/* pagination buttons */}
//               <div className="flex">
//                 <Button name="Previous" backImg="" className="btn-primary" />
//                 <Button name="1" className="btn-primary" />
//                 <Button name="2" className="btn-primary" />
//                 <Button name="Next" frontImg="" className="btn-primary" />
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <h1>Import Transactions</h1>
//               <p>Bulk-import from your bank's CSV export</p>
//             </div>
//             {/* import box */}
//             <div className="importBox flex items-center">
//               <div>
//                 <h1>Drag & Drop CSV file here</h1>
//                 <p>Supports State bank of India, Bank of India, Canara Bank</p>
//                 <Button
//                   name="Browse File"
//                   frontImg={<File />}
//                   className="btn-primary"
//                 />
//                 <p>Max:10MB, .csv only</p>
//               </div>
//             </div>
//             {/* if import is happening / processing then only these column will appear  1) colum for failed rows , column to show no of successfull, skipped, failed rows , column for progress bar on file processign*/}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const DropBox = ({
  name,
  optionArray,
}: {
  name: string;
  optionArray: { name: string; value: string }[];
}) => {
  return (
    <div>
      <div>{name}</div>
      <select name="transactionType" id="transactionType">
        {optionArray.map((opt: { value: string; name: string }) => (
          <option value={opt.value}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
};

// ─── Types ────────────────────────────────────────────────────────────────────
type TxType = "Income" | "Expense";
type TxStatus = "Completed" | "Pending";

interface Transaction {
  id: number;
  title: string;
  merchant: string;
  cat: string;
  catC: string;
  type: TxType;
  date: string;
  dateMs: number;
  amount: number; // positive = income, negative = expense
  method: string;
  status: TxStatus;
  notes: string;
}

interface TxForm {
  type: TxType;
  title: string;
  amount: string;
  cat: string;
  date: string;
  method: string;
  notes: string;
}

interface TxErrors {
  title?: string;
  amount?: string;
  cat?: string;
  date?: string;
}

type ModalKind = "add" | "edit" | "delete" | null;
type ViewMode = "normal" | "empty" | "loading";
type SortKey =
  | "date-desc"
  | "date-asc"
  | "amount-desc"
  | "amount-asc"
  | "merchant-asc"
  | "status"
  | "type";

// ─── Constants ────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "Income",
  "Software",
  "Groceries",
  "Entertainment",
  "Transport",
  "Food & Drink",
  "Utilities",
  "Investments",
  "Cash",
];
const METHODS = ["Credit Card", "Bank Transfer", "Cash", "UPI"];

const CAT_COLOR: Record<string, string> = {
  Income: "green",
  Software: "purple",
  Groceries: "teal",
  Entertainment: "red",
  Transport: "amber",
  "Food & Drink": "amber",
  Utilities: "blue",
  Investments: "teal",
  Cash: "gray",
};

const METHOD_EMOJI: Record<string, string> = {
  Cash: "💵",
  "Credit Card": "💳",
  "Bank Transfer": "🏦",
  UPI: "📲",
};

const NAV_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    paths: ["M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", "M9 22V12h6v10"],
  },
  {
    id: "transactions",
    label: "Transactions",
    paths: [
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h4",
    ],
  },
  {
    id: "budgets",
    label: "Budgets",
    paths: [
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      "M9 14l2 2 4-4",
    ],
  },
  {
    id: "goals",
    label: "Goals",
    paths: [
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    paths: [
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    ],
  },
  {
    id: "ai",
    label: "AI Assistant",
    paths: [
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    ],
    badge: "AI",
  },
  {
    id: "planner",
    label: "Saving Planner",
    paths: [
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    ],
  },
  {
    id: "categories",
    label: "Categories",
    paths: [
      "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a2 2 0 012-2z",
    ],
  },
];

const d = (s: string): number => new Date(s).getTime();

const INIT_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    title: "Stripe Revenue Payout",
    merchant: "Stripe Inc.",
    cat: "Income",
    catC: "green",
    type: "Income",
    date: "Jul 22, 2025",
    dateMs: d("Jul 22, 2025"),
    amount: 8450.0,
    method: "Bank Transfer",
    status: "Completed",
    notes: "",
  },
  {
    id: 2,
    title: "AWS Cloud Services",
    merchant: "Amazon Web Services",
    cat: "Software",
    catC: "purple",
    type: "Expense",
    date: "Jul 21, 2025",
    dateMs: d("Jul 21, 2025"),
    amount: -342.18,
    method: "Credit Card",
    status: "Completed",
    notes: "Monthly infra bill",
  },
  {
    id: 3,
    title: "Figma Team Plan",
    merchant: "Figma Inc.",
    cat: "Software",
    catC: "purple",
    type: "Expense",
    date: "Jul 20, 2025",
    dateMs: d("Jul 20, 2025"),
    amount: -75.0,
    method: "Credit Card",
    status: "Completed",
    notes: "",
  },
  {
    id: 4,
    title: "Freelance — UI Design",
    merchant: "Acme Corp.",
    cat: "Income",
    catC: "green",
    type: "Income",
    date: "Jul 19, 2025",
    dateMs: d("Jul 19, 2025"),
    amount: 2400.0,
    method: "Bank Transfer",
    status: "Completed",
    notes: "",
  },
  {
    id: 5,
    title: "Whole Foods Market",
    merchant: "Whole Foods",
    cat: "Groceries",
    catC: "teal",
    type: "Expense",
    date: "Jul 18, 2025",
    dateMs: d("Jul 18, 2025"),
    amount: -124.57,
    method: "Credit Card",
    status: "Completed",
    notes: "",
  },
  {
    id: 6,
    title: "Netflix Subscription",
    merchant: "Netflix",
    cat: "Entertainment",
    catC: "red",
    type: "Expense",
    date: "Jul 17, 2025",
    dateMs: d("Jul 17, 2025"),
    amount: -22.99,
    method: "Credit Card",
    status: "Completed",
    notes: "",
  },
  {
    id: 7,
    title: "Uber Ride — Downtown",
    merchant: "Uber",
    cat: "Transport",
    catC: "amber",
    type: "Expense",
    date: "Jul 16, 2025",
    dateMs: d("Jul 16, 2025"),
    amount: -18.4,
    method: "UPI",
    status: "Completed",
    notes: "",
  },
  {
    id: 8,
    title: "Salary — July 2025",
    merchant: "FinPilot LLC",
    cat: "Income",
    catC: "green",
    type: "Income",
    date: "Jul 15, 2025",
    dateMs: d("Jul 15, 2025"),
    amount: 12000.0,
    method: "Bank Transfer",
    status: "Completed",
    notes: "",
  },
  {
    id: 9,
    title: "OpenAI API Credits",
    merchant: "OpenAI",
    cat: "Software",
    catC: "purple",
    type: "Expense",
    date: "Jul 14, 2025",
    dateMs: d("Jul 14, 2025"),
    amount: -58.2,
    method: "Credit Card",
    status: "Pending",
    notes: "",
  },
  {
    id: 10,
    title: "Starbucks — Pike Place",
    merchant: "Starbucks",
    cat: "Food & Drink",
    catC: "amber",
    type: "Expense",
    date: "Jul 13, 2025",
    dateMs: d("Jul 13, 2025"),
    amount: -8.75,
    method: "Cash",
    status: "Completed",
    notes: "",
  },
  {
    id: 11,
    title: "ATM Withdrawal",
    merchant: "Chase Bank",
    cat: "Cash",
    catC: "gray",
    type: "Expense",
    date: "Jul 12, 2025",
    dateMs: d("Jul 12, 2025"),
    amount: -200.0,
    method: "Cash",
    status: "Completed",
    notes: "",
  },
  {
    id: 12,
    title: "Google Workspace",
    merchant: "Google LLC",
    cat: "Software",
    catC: "purple",
    type: "Expense",
    date: "Jul 11, 2025",
    dateMs: d("Jul 11, 2025"),
    amount: -18.0,
    method: "Credit Card",
    status: "Completed",
    notes: "",
  },
  {
    id: 13,
    title: "Dividend — AAPL",
    merchant: "Apple Inc.",
    cat: "Investments",
    catC: "teal",
    type: "Income",
    date: "Jul 10, 2025",
    dateMs: d("Jul 10, 2025"),
    amount: 145.6,
    method: "Bank Transfer",
    status: "Completed",
    notes: "",
  },
  {
    id: 14,
    title: "Notion Team Plan",
    merchant: "Notion Labs",
    cat: "Software",
    catC: "purple",
    type: "Expense",
    date: "Jul 09, 2025",
    dateMs: d("Jul 09, 2025"),
    amount: -20.0,
    method: "Credit Card",
    status: "Pending",
    notes: "",
  },
  {
    id: 15,
    title: "Con Edison — Electricity",
    merchant: "Con Edison",
    cat: "Utilities",
    catC: "blue",
    type: "Expense",
    date: "Jul 08, 2025",
    dateMs: d("Jul 08, 2025"),
    amount: -138.92,
    method: "Bank Transfer",
    status: "Completed",
    notes: "",
  },
  {
    id: 16,
    title: "Airbnb Host Payout",
    merchant: "Airbnb",
    cat: "Income",
    catC: "green",
    type: "Income",
    date: "Jul 07, 2025",
    dateMs: d("Jul 07, 2025"),
    amount: 760.0,
    method: "Bank Transfer",
    status: "Completed",
    notes: "",
  },
  {
    id: 17,
    title: "Spotify Premium",
    merchant: "Spotify AB",
    cat: "Entertainment",
    catC: "red",
    type: "Expense",
    date: "Jul 06, 2025",
    dateMs: d("Jul 06, 2025"),
    amount: -11.99,
    method: "Credit Card",
    status: "Completed",
    notes: "",
  },
  {
    id: 18,
    title: "Caltrain Monthly Pass",
    merchant: "Caltrain",
    cat: "Transport",
    catC: "amber",
    type: "Expense",
    date: "Jul 05, 2025",
    dateMs: d("Jul 05, 2025"),
    amount: -120.0,
    method: "Bank Transfer",
    status: "Completed",
    notes: "",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmtAmt = (n: number) =>
  "$" +
  Math.abs(n).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const blankForm = (): TxForm => ({
  type: "Expense",
  title: "",
  amount: "",
  cat: "Software",
  date: new Date().toISOString().split("T")[0],
  method: "Credit Card",
  notes: "",
});

const txToForm = (tx: Transaction): TxForm => ({
  type: tx.type,
  title: tx.title,
  amount: String(Math.abs(tx.amount)),
  cat: tx.cat,
  date: tx.date.replace(/(\w+) (\d+), (\d+)/, (_, m, day, yr) => {
    const months: Record<string, string> = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    return `${yr}-${months[m]}-${day.padStart(2, "0")}`;
  }),
  method: tx.method,
  notes: tx.notes,
});

const formToDate = (d: string) => {
  const [yr, mo, day] = d.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[+mo - 1]} ${+day}, ${yr}`;
};

let _nextId = 19;
const nextId = () => _nextId++;

const validateForm = (f: TxForm): TxErrors => {
  const e: TxErrors = {};
  if (!f.title.trim()) e.title = "Title is required";
  if (!f.amount || isNaN(+f.amount) || +f.amount <= 0)
    e.amount = "Enter a valid positive amount";
  if (!f.cat) e.cat = "Select a category";
  if (!f.date) e.date = "Select a date";
  return e;
};

// ─── Icon component ───────────────────────────────────────────────────────────
interface IcProps {
  paths: string[];
  size?: number;
  color?: string;
  sw?: number;
}
function Ic({ paths, size = 16, color = "currentColor", sw = 1.75 }: IcProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

// ─── Sparkline ────────────────────────────────────────────────────────────────
function Sparkline({ up, color }: { up: boolean; color: string }) {
  const pts = up
    ? "0,18 10,14 20,16 30,9 40,12 50,5 60,7 70,2 80,4"
    : "0,4  10,7  20,5  30,11 40,8  50,15 60,12 70,18 80,16";
  return (
    <svg className="sparkline" width={80} height={20} viewBox="0 0 80 20">
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

// ─── Category Badge ───────────────────────────────────────────────────────────
function CatBadge({ cat, catC }: { cat: string; catC: string }) {
  return <span className={`badge badge--${catC}`}>{cat}</span>;
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: TxStatus }) {
  const cls = status === "Completed" ? "completed" : "pending";
  return (
    <span className={`status-badge status-badge--${cls}`}>
      <span className={`status-dot status-dot--${cls}`} />
      {status}
    </span>
  );
}

// ─── Summary Card ─────────────────────────────────────────────────────────────
interface SummaryCardProps {
  icon: string;
  label: string;
  value: string;
  trend: string;
  sub: string;
  up: boolean;
  neutral?: boolean;
}
function SummaryCard({
  icon,
  label,
  value,
  trend,
  sub,
  up,
  neutral,
}: SummaryCardProps) {
  const tClass = neutral ? "neutral" : up ? "up" : "down";
  const sparkColor = neutral ? "#5f6470" : up ? "#059669" : "#dc2626";
  return (
    <div className="summary-card">
      <div className="summary-card__header">
        <div>
          <div className="summary-card__label">{label}</div>
          <div className="summary-card__value">{value}</div>
        </div>
        <div className="summary-card__icon">{icon}</div>
      </div>
      <div className="summary-card__footer">
        <span className={`summary-card__trend summary-card__trend--${tClass}`}>
          {!neutral && (up ? "↑" : "↓")} {trend}
        </span>
        <Sparkline up={up} color={sparkColor} />
      </div>
      <div className="summary-card__sub">{sub}</div>
    </div>
  );
}

// ─── Topbar ───────────────────────────────────────────────────────────────────
function Topbar({ count }: { count: number }) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <span className="topbar__title">Transactions</span>
        <span className="topbar__divider" />
        <span className="topbar__subtitle">{count} records</span>
      </div>
      <div className="topbar__right">
        <div className="topbar__search-wrap">
          <span className="topbar__search-icon">
            <Ic
              paths={["M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"]}
              size={14}
            />
          </span>
          <input
            className="topbar__search-input"
            placeholder="Search anything…"
          />
        </div>
        <button className="topbar__icon-btn">
          <Ic
            paths={[
              "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
            ]}
            size={16}
          />
          <span className="topbar__notif-dot" />
        </button>
        <button className="topbar__icon-btn">
          <Ic
            paths={[
              "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
            ]}
            size={16}
          />
        </button>
        <button className="topbar__avatar-btn">
          <div className="topbar__avatar-circle">
            <span>AK</span>
          </div>
          <span className="topbar__avatar-name">Alex Kim</span>
          <Ic paths={["M19 9l-7 7-7-7"]} size={12} color="#9ba3af" />
        </button>
      </div>
    </header>
  );
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────
interface FilterBarProps {
  search: string;
  setSearch: (v: string) => void;
  typeF: string;
  setTypeF: (v: string) => void;
  catF: string;
  setCatF: (v: string) => void;
  sortK: SortKey;
  setSortK: (v: SortKey) => void;
  hasFilters: boolean;
  onClear: () => void;
}
function FilterBar({
  search,
  setSearch,
  typeF,
  setTypeF,
  catF,
  setCatF,
  sortK,
  setSortK,
  hasFilters,
  onClear,
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <span className="filter-vdivider" />

      <div className="filter-group">
        <span className="filter-label">Type</span>
        <select
          className="filter-select"
          value={typeF}
          onChange={(e) => setTypeF(e.target.value)}
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
          onChange={(e) => setCatF(e.target.value)}
        >
          <option>All</option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <button className="filter-date-btn">
        <Ic
          paths={[
            "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
          ]}
          size={13}
          color="#9ba3af"
        />
        Jul 1 – Jul 31
        <Ic paths={["M19 9l-7 7-7-7"]} size={11} color="#9ba3af" />
      </button>

      <div className="filter-group">
        <Ic
          paths={["M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"]}
          size={13}
          color="#9ba3af"
        />
        <select
          className="filter-select"
          value={sortK}
          onChange={(e) => setSortK(e.target.value as SortKey)}
        >
          <option value="date-desc">Date (Newest)</option>
          <option value="date-asc">Date (Oldest)</option>
          <option value="amount-desc">Amount (High → Low)</option>
          <option value="amount-asc">Amount (Low → High)</option>
          <option value="merchant-asc">Merchant (A–Z)</option>
          <option value="status">Status</option>
          <option value="type">Type</option>
        </select>
      </div>

      {typeF !== "All" && (
        <span className="filter-chip">
          {typeF}
          <button className="filter-chip__x" onClick={() => setTypeF("All")}>
            <Ic
              paths={["M18 6L6 18M6 6l12 12"]}
              size={11}
              color="rgba(255,255,255,0.7)"
              sw={2}
            />
          </button>
        </span>
      )}
      {catF !== "All" && (
        <span className="filter-chip">
          {catF}
          <button className="filter-chip__x" onClick={() => setCatF("All")}>
            <Ic
              paths={["M18 6L6 18M6 6l12 12"]}
              size={11}
              color="rgba(255,255,255,0.7)"
              sw={2}
            />
          </button>
        </span>
      )}
      {hasFilters && (
        <button className="filter-clear" onClick={onClear}>
          Clear filters
        </button>
      )}
    </div>
  );
}

// ─── Action Menu ──────────────────────────────────────────────────────────────
interface ActionMenuProps {
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onClose: () => void;
}
function ActionMenu({
  onEdit,
  onDuplicate,
  onDelete,
  onClose,
}: ActionMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div className="action-menu" ref={ref}>
      <button
        className="action-menu__item"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        <Ic
          paths={[
            "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
          ]}
          size={14}
          color="#5f6470"
        />
        Edit transaction
      </button>
      <button
        className="action-menu__item"
        onClick={() => {
          onDuplicate();
          onClose();
        }}
      >
        <Ic
          paths={[
            "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
          ]}
          size={14}
          color="#5f6470"
        />
        Duplicate
      </button>
      <button className="action-menu__item" onClick={() => onClose()}>
        <Ic
          paths={[
            "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
          ]}
          size={14}
          color="#5f6470"
        />
        Download receipt
      </button>
      <div className="action-menu__divider" />
      <button
        className="action-menu__item action-menu__item--danger"
        onClick={() => {
          onDelete();
          onClose();
        }}
      >
        <Ic
          paths={[
            "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          ]}
          size={14}
          color="#dc2626"
        />
        Delete
      </button>
    </div>
  );
}

// ─── Table Row ────────────────────────────────────────────────────────────────
interface TableRowProps {
  tx: Transaction;
  idx: number;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}
function TableRow({
  tx,
  idx,
  isMenuOpen,
  onMenuToggle,
  onMenuClose,
  onEdit,
  onDuplicate,
  onDelete,
}: TableRowProps) {
  const isIncome = tx.type === "Income";
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
            <div className="tx-merchant">{tx.merchant}</div>
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
      {/* Status */}
      <td className="data-table__td">
        <StatusBadge status={tx.status} />
      </td>
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

// ─── Data Table ───────────────────────────────────────────────────────────────
interface DataTableProps {
  rows: Transaction[];
  total: number;
  page: number;
  rpp: number;
  sortK: SortKey;
  onSortChange: (k: SortKey) => void;
  openMenuId: number | null;
  onMenuToggle: (id: number) => void;
  onMenuClose: () => void;
  onEdit: (tx: Transaction) => void;
  onDuplicate: (tx: Transaction) => void;
  onDelete: (tx: Transaction) => void;
  onRppChange: (n: number) => void;
  onPageChange: (n: number) => void;
}
function DataTable({
  rows,
  total,
  page,
  rpp,
  sortK,
  onSortChange,
  openMenuId,
  onMenuToggle,
  onMenuClose,
  onEdit,
  onDuplicate,
  onDelete,
  onRppChange,
  onPageChange,
}: DataTableProps) {
  const totalPages = Math.max(1, Math.ceil(total / rpp));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * rpp + 1;
  const end = Math.min(safePage * rpp, total);

  const sortTh = (
    label: string,
    asc: SortKey,
    desc: SortKey,
    align?: string,
  ) => {
    const isActive = sortK === asc || sortK === desc;
    const thClass = `data-table__th data-table__th--sortable${isActive ? " data-table__th--active" : ""}${align === "right" ? " data-table__th--right" : ""}`;
    const arrow = sortK === asc ? " ↑" : sortK === desc ? " ↓" : "";
    return (
      <th
        className={thClass}
        onClick={() => onSortChange(sortK === desc ? asc : desc)}
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
              {sortTh("Transaction", "merchant-asc", "merchant-asc")}
              <th className="data-table__th">Category</th>
              {sortTh("Type", "type", "type")}
              {sortTh("Date", "date-asc", "date-desc")}
              {sortTh("Amount", "amount-asc", "amount-desc", "right")}
              <th className="data-table__th">Payment Method</th>
              {sortTh("Status", "status", "status")}
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

      {/* Pagination */}
      <div className="pagination">
        <div className="pagination__info">
          <span className="pagination__rpp-label">Rows per page</span>
          <select
            className="pagination__rpp-select"
            value={rpp}
            onChange={(e) => {
              onRppChange(+e.target.value);
              onPageChange(1);
            }}
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
            disabled={safePage === 1}
            onClick={() => onPageChange(safePage - 1)}
          >
            <Ic paths={["M15 18l-6-6 6-6"]} size={14} /> Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pagination__btn${safePage === i + 1 ? " pagination__btn--active" : ""}`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="pagination__btn pagination__prev-next"
            disabled={safePage === totalPages}
            onClick={() => onPageChange(safePage + 1)}
          >
            Next <Ic paths={["M9 18l6-6-6-6"]} size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Transaction Form (shared by Add & Edit) ──────────────────────────────────
interface TxFormBodyProps {
  form: TxForm;
  errors: TxErrors;
  onChange: (f: TxForm) => void;
}
function TxFormBody({ form, errors, onChange }: TxFormBodyProps) {
  const up = (field: keyof TxForm, val: string) =>
    onChange({ ...form, [field]: val });
  return (
    <div className="form-body">
      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          className={`form-input${errors.title ? " form-input--error" : ""}`}
          placeholder="e.g. Netflix Subscription"
          value={form.title}
          onChange={(e) => up("title", e.target.value)}
        />
        {errors.title && <span className="form-error">{errors.title}</span>}
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Amount</label>
          <div className="form-amount-wrap">
            <span className="form-amount-prefix">$</span>
            <input
              className={`form-input form-amount-input${errors.amount ? " form-input--error" : ""}`}
              placeholder="0.00"
              value={form.amount}
              onChange={(e) => up("amount", e.target.value)}
            />
          </div>
          {errors.amount && <span className="form-error">{errors.amount}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            type="date"
            className={`form-input${errors.date ? " form-input--error" : ""}`}
            value={form.date}
            onChange={(e) => up("date", e.target.value)}
          />
          {errors.date && <span className="form-error">{errors.date}</span>}
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={form.cat}
            onChange={(e) => up("cat", e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          {errors.cat && <span className="form-error">{errors.cat}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <select
            className="form-select"
            value={form.method}
            onChange={(e) => up("method", e.target.value)}
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
          onChange={(e) => up("notes", e.target.value)}
        />
      </div>
    </div>
  );
}

// ─── Add Transaction Modal ────────────────────────────────────────────────────
interface AddModalProps {
  onClose: () => void;
  onAdd: (tx: Transaction) => void;
}
function AddModal({ onClose, onAdd }: AddModalProps) {
  const [form, setForm] = useState<TxForm>(blankForm());
  const [errors, setErrors] = useState<TxErrors>({});

  const submit = () => {
    const e = validateForm(form);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    const dateStr = formToDate(form.date);
    onAdd({
      id: nextId(),
      title: form.title.trim(),
      merchant: form.title.trim(),
      cat: form.cat,
      catC: CAT_COLOR[form.cat] ?? "gray",
      type: form.type,
      date: dateStr,
      dateMs: new Date(dateStr).getTime(),
      amount: form.type === "Expense" ? -Math.abs(+form.amount) : +form.amount,
      method: form.method,
      status: "Completed",
      notes: form.notes,
    });
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Add Transaction</h2>
            <p className="modal-subtitle">Record a new financial entry</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <Ic
              paths={["M6 18L18 6M6 6l12 12"]}
              size={15}
              color="#5f6470"
              sw={2}
            />
          </button>
        </div>

        <div className="modal-type-selector">
          {(["Expense", "Income"] as TxType[]).map((t) => (
            <button
              key={t}
              className={`modal-type-btn${form.type === t ? ` modal-type-btn--${t.toLowerCase()}` : ""}`}
              onClick={() => setForm((f) => ({ ...f, type: t }))}
            >
              {t === "Expense" ? "↓" : "↑"} {t}
            </button>
          ))}
        </div>

        <TxFormBody form={form} errors={errors} onChange={setForm} />

        <div className="modal-footer">
          <button className="btn--cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn--save" onClick={submit}>
            Save Transaction
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Edit Transaction Modal ───────────────────────────────────────────────────
interface EditModalProps {
  tx: Transaction;
  onClose: () => void;
  onSave: (tx: Transaction) => void;
}
function EditModal({ tx, onClose, onSave }: EditModalProps) {
  const [form, setForm] = useState<TxForm>(txToForm(tx));
  const [errors, setErrors] = useState<TxErrors>({});

  const submit = () => {
    const e = validateForm(form);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    const dateStr = formToDate(form.date);
    onSave({
      ...tx,
      title: form.title.trim(),
      merchant: form.title.trim(),
      cat: form.cat,
      catC: CAT_COLOR[form.cat] ?? "gray",
      type: form.type,
      date: dateStr,
      dateMs: new Date(dateStr).getTime(),
      amount: form.type === "Expense" ? -Math.abs(+form.amount) : +form.amount,
      method: form.method,
      notes: form.notes,
    });
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Edit Transaction</h2>
            <p className="modal-subtitle">Update transaction details</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <Ic
              paths={["M6 18L18 6M6 6l12 12"]}
              size={15}
              color="#5f6470"
              sw={2}
            />
          </button>
        </div>

        <div className="modal-type-selector">
          {(["Expense", "Income"] as TxType[]).map((t) => (
            <button
              key={t}
              className={`modal-type-btn${form.type === t ? ` modal-type-btn--${t.toLowerCase()}` : ""}`}
              onClick={() => setForm((f) => ({ ...f, type: t }))}
            >
              {t === "Expense" ? "↓" : "↑"} {t}
            </button>
          ))}
        </div>

        <TxFormBody form={form} errors={errors} onChange={setForm} />

        <div className="modal-footer">
          <button className="btn--cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn--save" onClick={submit}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Modal ─────────────────────────────────────────────────────────────
interface DeleteModalProps {
  tx: Transaction;
  onClose: () => void;
  onConfirm: () => void;
}
function DeleteModal({ tx, onClose, onConfirm }: DeleteModalProps) {
  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-container modal-container--sm">
        <div className="delete-icon-wrap">
          <Ic
            paths={[
              "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
            ]}
            size={22}
            color="#dc2626"
          />
        </div>
        <h2 className="delete-title">Delete Transaction?</h2>
        <p className="delete-desc">
          You're about to permanently delete <strong>{tx.title}</strong> (
          {fmtAmt(tx.amount)}). This action <strong>cannot be undone</strong>{" "}
          and the record will be removed from all reports.
        </p>
        <div className="delete-actions">
          <button
            className="btn btn--danger btn--full"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Delete Transaction
          </button>
          <button
            className="btn--cancel btn--full"
            style={{ width: "100%" }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
        <div className="delete-warning">
          <span>⚠️</span>
          <span className="delete-warning-text">
            This will also remove the transaction from your budget calculations
            and monthly reports.
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="empty-state">
      <div className="empty-svg-wrap">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          <rect x="10" y="20" width="100" height="60" rx="10" fill="#f1f2f4" />
          <rect x="20" y="32" width="40" height="8" rx="4" fill="#e2e4e8" />
          <rect x="20" y="46" width="60" height="6" rx="3" fill="#e8eaed" />
          <rect x="20" y="58" width="50" height="6" rx="3" fill="#e8eaed" />
          <rect x="20" y="70" width="35" height="6" rx="3" fill="#e8eaed" />
          <circle cx="95" cy="30" r="18" fill="#0d0d0e" />
          <path
            d="M95 24v6M95 30h4"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="95" cy="37" r="1.5" fill="#fff" />
        </svg>
      </div>
      <div>
        <h3 className="empty-title">No transactions yet</h3>
        <p className="empty-sub">
          Start tracking your financial activity. Add your first transaction to
          unlock spending insights and AI-powered recommendations.
        </p>
      </div>
      <button className="btn btn--primary" onClick={onAdd}>
        <Ic paths={["M12 4v16m8-8H4"]} size={16} color="#fff" sw={2.2} />
        Add First Transaction
      </button>
    </div>
  );
}

// ─── Skeleton View ────────────────────────────────────────────────────────────
function SkeletonView() {
  return (
    <>
      <div className="sk-filter">
        {[200, 100, 120, 130, 100, 80].map((w, i) => (
          <div key={i} className="sk" style={{ width: w, height: 36 }} />
        ))}
      </div>
      <div className="sk-cards">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="sk-card">
            <div className="sk-card-top">
              <div className="sk-card-left">
                <div className="sk" style={{ width: 70, height: 11 }} />
                <div className="sk" style={{ width: 130, height: 30 }} />
              </div>
              <div
                className="sk"
                style={{ width: 32, height: 32, borderRadius: "50%" }}
              />
            </div>
            <div className="sk" style={{ width: "100%", height: 20 }} />
            <div className="sk" style={{ width: 110, height: 11 }} />
          </div>
        ))}
      </div>
      <div className="sk-table">
        <div className="sk-table-head">
          {[160, 80, 60, 80, 70, 90, 70, 40].map((w, i) => (
            <div
              key={i}
              className="sk"
              style={{ width: w, height: 11, flex: i === 0 ? 2 : 1 }}
            />
          ))}
        </div>
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className={`sk-table-row${i % 2 !== 0 ? " sk-table-row--even" : ""}`}
          >
            <div className="sk-tx-wrap">
              <div
                className="sk"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  flexShrink: 0,
                }}
              />
              <div className="sk-tx-info">
                <div className="sk" style={{ width: 140, height: 13 }} />
                <div className="sk" style={{ width: 90, height: 11 }} />
              </div>
            </div>
            {[68, 52, 80, 64, 90, 66, 30].map((w, j) => (
              <div key={j} style={{ flex: 1 }}>
                <div
                  className="sk"
                  style={{ width: w, height: 22, borderRadius: 999 }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

// ─── CSV Import ───────────────────────────────────────────────────────────────
function CSVImport() {
  const [dragging, setDragging] = useState(false);
  return (
    <div className="csv-section">
      <div className="csv-header">
        <div className="csv-title">Import Transactions</div>
        <div className="csv-sub">
          Bulk-import from your bank's CSV export — we auto-detect column
          formats.
        </div>
      </div>

      <div
        className={`csv-drop-zone${dragging ? " csv-drop-zone--dragging" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
        }}
      >
        <div className="csv-drop-icon">
          <Ic
            paths={[
              "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
            ]}
            size={26}
            sw={1.5}
          />
        </div>
        <div>
          <div className="csv-drop-title">Drag & Drop CSV file here</div>
          <div className="csv-drop-sub">
            Supports Chase, BofA, Wells Fargo exports — or
          </div>
        </div>
        <button className="btn btn--primary btn--sm">Browse File</button>
        <div className="csv-drop-note">Max 10 MB · UTF-8 · .csv only</div>
      </div>

      <div className="csv-states">
        {/* Progress card */}
        <div className="csv-state-card">
          <div className="csv-state-top">
            <div className="csv-state-left">
              <div className="csv-state-icon csv-state-icon--blue">
                <Ic
                  paths={[
                    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  ]}
                  size={17}
                />
              </div>
              <div>
                <div className="csv-state-name">transactions_july_2025.csv</div>
                <div className="csv-state-meta">2.4 MB · Parsing rows…</div>
              </div>
            </div>
            <span className="csv-state-pct">68%</span>
          </div>
          <div className="csv-progress-track">
            <div className="csv-progress-fill" style={{ width: "68%" }} />
          </div>
          <div className="csv-progress-note">
            248 rows detected · ~4 seconds remaining
          </div>
        </div>

        {/* Success card */}
        <div className="csv-state-card">
          <div className="csv-state-top">
            <div className="csv-state-left">
              <div className="csv-state-icon csv-state-icon--green">
                <Ic
                  paths={["M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"]}
                  size={17}
                />
              </div>
              <div>
                <div className="csv-state-name">Import Complete</div>
                <div className="csv-state-meta">transactions_june_2025.csv</div>
              </div>
            </div>
          </div>
          <div className="csv-success-grid">
            {[
              { label: "Imported", val: "241", mod: "green" },
              { label: "Skipped", val: "5", mod: "amber" },
              { label: "Failed", val: "2", mod: "red" },
            ].map((s) => (
              <div
                key={s.label}
                className={`csv-success-item csv-success-item--${s.mod}`}
              >
                <div className={`csv-success-val csv-success-val--${s.mod}`}>
                  {s.val}
                </div>
                <div className="csv-success-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Failed records */}
      <div className="csv-failed">
        <div className="csv-failed-header">
          <div className="csv-failed-icon">
            <Ic
              paths={[
                "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
              ]}
              size={14}
            />
          </div>
          <span className="csv-failed-title">Failed Records</span>
          <span className="csv-failed-count">2 errors</span>
        </div>
        <table className="csv-failed-table">
          <thead>
            <tr>
              {["Row", "Title", "Amount", "Date", "Error"].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              {
                row: "#43",
                name: "Uber Eats — order…",
                amt: "—",
                date: "07/32/2025",
                err: "Invalid date format",
              },
              {
                row: "#87",
                name: "Unknown merchant",
                amt: "N/A",
                date: "07/15/2025",
                err: "Missing amount field",
              },
            ].map((r, i) => (
              <tr key={i}>
                <td>
                  <span className="csv-row-num">{r.row}</span>
                </td>
                <td>
                  <span className="csv-tx-name">{r.name}</span>
                </td>
                <td>
                  <span className="csv-tx-val">{r.amt}</span>
                </td>
                <td>
                  <span className="csv-tx-val">{r.date}</span>
                </td>
                <td>
                  <span className="badge badge--red">{r.err}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── App (Root) ───────────────────────────────────────────────────────────────
export default function TransactionPage() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(INIT_TRANSACTIONS);
  const [activePage, setActivePage] = useState("transactions");
  const [viewMode, setViewMode] = useState<ViewMode>("normal");
  const [modal, setModal] = useState<ModalKind>(null);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  // Filters
  const [search, setSearch] = useState("");
  const [typeF, setTypeF] = useState("All");
  const [catF, setCatF] = useState("All");
  const [sortK, setSortK] = useState<SortKey>("date-desc");

  // Pagination
  const [page, setPage] = useState(1);
  const [rpp, setRpp] = useState(10);

  // Filter + sort
  const processed = useMemo(() => {
    const q = search.toLowerCase();
    let result = transactions.filter(
      (tx) =>
        (tx.title.toLowerCase().includes(q) ||
          tx.merchant.toLowerCase().includes(q)) &&
        (typeF === "All" || tx.type === typeF) &&
        (catF === "All" || tx.cat === catF),
    );
    result = [...result].sort((a, b) => {
      switch (sortK) {
        case "date-desc":
          return b.dateMs - a.dateMs;
        case "date-asc":
          return a.dateMs - b.dateMs;
        case "amount-desc":
          return Math.abs(b.amount) - Math.abs(a.amount);
        case "amount-asc":
          return Math.abs(a.amount) - Math.abs(b.amount);
        case "merchant-asc":
          return a.merchant.localeCompare(b.merchant);
        case "status":
          return a.status.localeCompare(b.status);
        case "type":
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });
    return result;
  }, [transactions, search, typeF, catF, sortK]);

  // Pagination slice
  const safePage = Math.min(
    page,
    Math.max(1, Math.ceil(processed.length / rpp)),
  );
  const pageRows = processed.slice((safePage - 1) * rpp, safePage * rpp);

  // Summary stats (from full list)
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((s, t) => s + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((s, t) => s + Math.abs(t.amount), 0);
  const netFlow = totalIncome - totalExpenses;
  const hasFilters = !!search || typeF !== "All" || catF !== "All";

  const clearFilters = () => {
    setSearch("");
    setTypeF("All");
    setCatF("All");
    setPage(1);
  };

  // CRUD handlers
  const handleAdd = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);
    setPage(1);
  };

  const handleEdit = (tx: Transaction) => {
    setTransactions((prev) => prev.map((t) => (t.id === tx.id ? tx : t)));
  };

  const handleDelete = (id: number) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDuplicate = (tx: Transaction) => {
    const copy: Transaction = {
      ...tx,
      id: nextId(),
      title: tx.title + " (copy)",
      date: tx.date,
    };
    setTransactions((prev) => {
      const idx = prev.findIndex((t) => t.id === tx.id);
      const next = [...prev];
      next.splice(idx + 1, 0, copy);
      return next;
    });
  };

  // Open add modal
  const openAdd = () => {
    setSelectedTx(null);
    setModal("add");
  };

  // Open edit
  const openEdit = (tx: Transaction) => {
    setSelectedTx(tx);
    setModal("edit");
  };

  // Open delete
  const openDelete = (tx: Transaction) => {
    setSelectedTx(tx);
    setModal("delete");
  };

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="main-col">
        <Topbar count={transactions.length} />

        <main className="page-content">
          {/* Preview mode switcher */}
          <div className="preview-switcher">
            <span className="preview-label">Preview</span>
            <span className="preview-divider" />
            {(["normal", "empty", "loading"] as ViewMode[]).map((m) => (
              <button
                key={m}
                className={`preview-btn${viewMode === m ? " preview-btn--active" : ""}`}
                onClick={() => setViewMode(m)}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Page header */}
          <div className="page-header">
            <div>
              <h1 className="page-header__title">Transactions</h1>
              <p className="page-header__subtitle">
                Track and manage all your financial activity.
              </p>
            </div>
            <div className="page-actions">
              <button className="btn btn--secondary">
                <Ic
                  paths={[
                    "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                  ]}
                  size={14}
                  color="#9ba3af"
                />
                Import CSV
              </button>
              <button className="btn btn--primary" onClick={openAdd}>
                <Ic
                  paths={["M12 4v16m8-8H4"]}
                  size={15}
                  color="#fff"
                  sw={2.2}
                />
                Add Transaction
              </button>
            </div>
          </div>

          {/* ── View modes ── */}
          {viewMode === "loading" && <SkeletonView />}
          {viewMode === "empty" && <EmptyState onAdd={openAdd} />}

          {viewMode === "normal" && (
            <>
              <FilterBar
                search={search}
                setSearch={setSearch}
                typeF={typeF}
                setTypeF={setTypeF}
                catF={catF}
                setCatF={setCatF}
                sortK={sortK}
                setSortK={setSortK}
                hasFilters={hasFilters}
                onClear={clearFilters}
              />

              {/* Summary cards */}
              <div className="summary-grid">
                <SummaryCard
                  icon="💳"
                  label="Total Transactions"
                  value={String(transactions.length)}
                  trend={`${transactions.length} total`}
                  sub="2 pending · 16 completed"
                  up={true}
                  neutral={true}
                />
                <SummaryCard
                  icon="💚"
                  label="Total Income"
                  value={
                    "$" +
                    totalIncome.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }
                  trend="+8.3%"
                  sub="vs. last month (+$1,840)"
                  up={true}
                />
                <SummaryCard
                  icon="🔴"
                  label="Total Expenses"
                  value={fmtAmt(totalExpenses)}
                  trend="+3.2%"
                  sub="vs. last month (+$28)"
                  up={false}
                />
                <SummaryCard
                  icon="📊"
                  label="Net Cash Flow"
                  value={
                    (netFlow >= 0 ? "+$" : "-$") +
                    Math.abs(netFlow).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }
                  trend={netFlow >= 0 ? "+15.4%" : "-5.2%"}
                  sub="Healthy surplus this month"
                  up={netFlow >= 0}
                />
              </div>

              <DataTable
                rows={pageRows}
                total={processed.length}
                page={safePage}
                rpp={rpp}
                sortK={sortK}
                onSortChange={(k) => {
                  setSortK(k);
                  setPage(1);
                }}
                openMenuId={openMenuId}
                onMenuToggle={(id) =>
                  setOpenMenuId((prev) => (prev === id ? null : id))
                }
                onMenuClose={() => setOpenMenuId(null)}
                onEdit={(tx) => {
                  openEdit(tx);
                  setOpenMenuId(null);
                }}
                onDuplicate={(tx) => {
                  handleDuplicate(tx);
                  setOpenMenuId(null);
                }}
                onDelete={(tx) => {
                  openDelete(tx);
                  setOpenMenuId(null);
                }}
                onRppChange={setRpp}
                onPageChange={setPage}
              />

              <CSVImport />
            </>
          )}
        </main>
      </div>

      {/* ── Modals ── */}
      {modal === "add" && (
        <AddModal onClose={() => setModal(null)} onAdd={handleAdd} />
      )}
      {modal === "edit" && selectedTx && (
        <EditModal
          tx={selectedTx}
          onClose={() => setModal(null)}
          onSave={handleEdit}
        />
      )}
      {modal === "delete" && selectedTx && (
        <DeleteModal
          tx={selectedTx}
          onClose={() => setModal(null)}
          onConfirm={() => handleDelete(selectedTx.id)}
        />
      )}
    </div>
  );
}
