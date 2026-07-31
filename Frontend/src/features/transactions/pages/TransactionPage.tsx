import { useState } from "react";
import { Header } from "../../../components/common/Header";
import { Sidebar } from "../../../components/common/Sidebar";
import { Button } from "../../auth/components/Button";
import { Card1 } from "../components/Card1";

export const TransactionPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [categoryArray, setCategoryArray] = useState([])
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
              <Button name="Import CSV" backImg="" />
              <Button name="Add Transaction" backImg="" />
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
                <Button backImg="" name="Export" />
            </div>

            {/* transactions table  */}
            <table>

            </table>

            <div className="flex justify-between">
                <DropBox name="Rows per page" optionArray={[{name:"10", value:"10"}, {name:"5", value:"5"}, {name:"15", value:"15"}, {name:"25", value:"25"}]} />

                {/* pagination buttons */}
                <div className="flex">
                    <Button name="Previous" backImg=""/>
                    <Button name="1" />
                    <Button name="2"/>
                    <Button name="Next" frontImg="" />
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
                    <Button name="Browse File"/>
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
