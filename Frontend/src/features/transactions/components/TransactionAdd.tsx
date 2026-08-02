import { ArrowDown, ArrowUp, Save } from "lucide-react";
import { Modal } from "../../../components/common/Modal";
import { Button } from "../../auth/components/Button";
import { useCreateTransaction } from "../hooks/useCreateTransaction";
import { useState } from "react";
import type{ Transaction, TransactionData } from "../transaction.types";
import { TransactionType } from "../../dashboard/dashboard.types";
import { InputWithLabel } from "../../auth/components/InputWithLabel";
import { DropBox } from "../pages/TransactionPage";
import { useUpdateTransaction } from "../hooks/useUpdateTransaction";

export const TransactionAdd = ({
  modalTitle,
  modalDescription,
  isOpen,
  onClose,
  categoryArray = [],
  paymentOptionsArray = [],
}:{modalTitle:string, modalDescription:string, isOpen:boolean, onClose:() => void, categoryArray:[], paymentOptionsArray:[]}) => {

  const [formData, setFormData] = useState<TransactionData>({
    title: "",
    categoryId: 0,
    type: TransactionType.EXPENSE,
    amount: 0,
    transactionDate: new Date(),
    paymentMethodId:0
  });
  const createTransaction = useCreateTransaction();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit() {
    createTransaction.mutate(formData);
  }
  return (
    <Modal
      title={modalTitle}
      description={modalDescription}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className="flex gap-2">
          <Button
            className="btn-primary"
            name="Expense"
            backImg={<ArrowDown />}
          />
          <Button className="btn-primary" name="Income" backImg={<ArrowUp />} />
        </div>
        <div className="flex-col gap-2">
          <InputWithLabel
            type="text"
            name="title"
            placeholder="e.g. Netflix Subscription"
            labelName="Title"
            onChangeFn={handleInputChange}
          />
          <div className="flex gap-2">
            <InputWithLabel
              type="number"
              name="amount"
              placeholder=" ₹ 0.00"
              labelName="Amount"
              onChangeFn={handleInputChange}
            />
            <InputWithLabel
              type="date"
              name="transactionDate"
              placeholder="mm/dd/yyyy"
              labelName="Date"
              onChangeFn={handleInputChange}
            />
          </div>
          <div className="flex gap-2">
            <DropBox name="Category" optionArray={categoryArray} />
            <DropBox name="Payment Method" optionArray={paymentOptionsArray} />
          </div>
          <InputWithLabel
            type="text"
            name="description"
            placeholder="Add a note"
            labelName="Notes (optional)"
            onChangeFn={handleInputChange}
          />
        </div>
        <div className="flex gap-2">
            <Button name="Cancel" className="btn-primary" onClickFn={onClose}/>
            <Button name="Save Transaction" frontImg={<Save />} className="btn-primary" onClickFn={handleSubmit}/>
        </div>
      </div>
    </Modal>
  );
};


