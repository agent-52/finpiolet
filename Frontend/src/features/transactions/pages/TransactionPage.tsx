import { useState } from "react";
import { Header } from "../../../components/common/Header";
import { Sidebar } from "../../../components/common/Sidebar";
import { Button } from "../../auth/components/Button";
import { Card1 } from "../components/Card1";
import { useTransactions } from "../hooks/useTransactions";
import type { TransactionQueryObject } from "../transaction.types";
import { TransactionPageSkeleton } from "./TransactionPageSkeleton";
import { ArrowDownLeft, ArrowUpRight, Building2, CreditCard, File, Import, MoreVertical } from "lucide-react";
import { FcAddDatabase, FcExport } from "react-icons/fc";
import { TransactionType } from "../../dashboard/dashboard.types";

// (alias) type TransactionQueryObject = {
//  page?: string | undefined;
//  limit?: string | undefined;
//  search?: string | undefined;
//  type?: TransactionType | undefined;
//  categoryId?: string;
//  startDate?: string;
//  endDate?: string;
//  sortBy?: "amount" | "transactionDate" | "createdAt";
//  sortOrder?: "asc" | "desc";
// }
// import TransactionQueryObject

export const TransactionPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [categoryArray, setCategoryArray] = useState([])
  const [queryObject, setQueryObject] = useState<TransactionQueryObject>({})

  const {data, isSuccess, isError, isLoading, error} = useTransactions(queryObject)

  if(isLoading){
    return(
      <TransactionPageSkeleton />
    )
  }
  return (
    <div>
      <Header />
      <div className="transactionPage">
        {isVisible ? <Sidebar /> : null}
        {/* main page part */}
        <div className="mainTransPart">
          <div className="flex justify-between">
            <div>
              <h1>Transactions</h1>
              <p>Track and manage all your financial activity.</p>
            </div>
            <div className=" flex">
              <Button name="Import CSV" backImg={<Import />} className="btn-primary" />
              <Button name="Add Transaction" backImg={<FcAddDatabase />} className="btn-primary" />
            </div>
          </div>
          <div className="flex">
            <div>
              <input type="search" name="" id="" />
            </div>
            <div>
                <DropBox name="Type" optionArray={[{name:"All", value:"ALL"},{name:"Income", value:"INCOME"}, {name:"Expense", value:"EXPENSE"}]} />
                <DropBox name="Category" optionArray={categoryArray}/>
                {/* Date wise selection so add calender here */}
                <DropBox name="Sort" optionArray={[{name:"Date", value:"DATE"}, {name:"Amount ↑", value:"AMOUNT DESC"}]}/>
            </div>
          </div>
          <div className="flex">
            <Card1 img1Link="" heading="TOTAL TRANSACTIONS" desc1="" desc2="" mainValue=""/>
            <Card1 img1Link="" heading="TOTAL INCOME" desc1="" desc2="" mainValue=""/>
            <Card1 img1Link="" heading="TOTAL EXPENSE" desc1="" desc2="" mainValue=""/>
            <Card1 img1Link="" heading="NET CASH FLOW" desc1="" desc2="" mainValue=""/>
          </div>
          {/* shows all transactions */}
          <div>
            <div className="flex justify-between">
                <h2>All Transactions</h2>
                <Button backImg={<FcExport />} className="btn-primary" name="Export" />
            </div>

            {/* transactions table  */}
            <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 pl-2 font-medium">Transaction</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 text-right font-medium">Amount</th>
              <th className="pb-3 pl-8 font-medium">Payment Method</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right pr-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data?.transactions.map((tx) => {
              const isIncome = tx.type === TransactionType.INCOME;

              return (
                <tr key={tx.id} className="hover:bg-gray-50/60 transition-colors group">
                  {/* Transaction Name & Icon */}
                  <td className="py-4 pl-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isIncome ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'
                        }`}
                      >
                        {isIncome ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownLeft className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 leading-tight">
                          {tx.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{tx.description}</p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        isIncome
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-purple-50 text-purple-700'
                      }`}
                    >
                      {/* this should be category name i will change the backend api to return category name as well */}
                      {tx.categoryId}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="py-4">
                    <span
                      className={`text-xs font-semibold ${
                        isIncome ? 'text-emerald-600' : 'text-rose-500'
                      }`}
                    >
                      {tx.type}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-4 text-xs font-medium text-gray-500 whitespace-nowrap">
                    {tx.transactionDate.toString()}
                  </td>

                  {/* Amount */}
                  <td className="py-4 text-right">
                    <span
                      className={`text-xs font-bold ${
                        isIncome ? 'text-emerald-600' : 'text-rose-500'
                      }`}
                    >
                      {isIncome ? '+' : '-'}${Math.abs(tx.amount).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </td>

                  {/* Payment Method */}
                  <td className="py-4 pl-8">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                      {tx.paymentMethod === 'Bank Transfer' ? (
                        <Building2 className="w-3.5 h-3.5 text-gray-400" />
                      ) : (
                        <CreditCard className="w-3.5 h-3.5 text-gray-400" />
                      )}
                      <span>{tx.paymentMethod}</span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {tx.type}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 text-right pr-2">
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
            

            <div className="flex justify-between">
                <DropBox name="Rows per page" optionArray={[{name:"10", value:"10"}, {name:"5", value:"5"}, {name:"15", value:"15"}, {name:"25", value:"25"}]} />

                {/* pagination buttons */}
                <div className="flex">
                    <Button name="Previous" backImg="" className="btn-primary"/>
                    <Button name="1"  className="btn-primary"/>
                    <Button name="2" className="btn-primary"/>
                    <Button name="Next" frontImg=""  className="btn-primary"/>
                </div>
            </div>
          </div>
          <div>
            <div>
                <h1>Import Transactions</h1>
                <p>Bulk-import from your bank's CSV export</p>
            </div>
            {/* import box */}
            <div className="importBox flex items-center">
                <div>
                    <h1>Drag & Drop CSV file here</h1>
                    <p>Supports State bank of India, Bank of India, Canara Bank</p>
                    <Button name="Browse File" frontImg={<File />} className="btn-primary"/>
                    <p>Max:10MB, .csv only</p>
                </div>
            </div>
            {/* if import is happening / processing then only these column will appear  1) colum for failed rows , column to show no of successfull, skipped, failed rows , column for progress bar on file processign*/}

          </div>
        </div>
      </div>
    </div>
  );
};

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
