import { useState } from "react";
import { useUpdateTransaction } from "../hooks/useUpdateTransaction";
import type { Transaction, TransactionData } from "../transaction.types";
import { Modal } from "../../../components/common/Modal";
import { Button } from "../../auth/components/Button";
import { ArrowDown, ArrowUp, Save } from "lucide-react";
import { InputWithLabel } from "../../auth/components/InputWithLabel";
import { DropBox } from "../pages/TransactionPage";

export const TransactionUpdate = ({
  modalTitle,
  modalDescription,
  isOpen,
  onClose,
  categoryArray = [],
  paymentOptionsArray = [],
  transactionDetails
}:{modalTitle:string, modalDescription:string, isOpen:boolean, onClose:() => void, categoryArray:[], paymentOptionsArray:[] , transactionDetails:Transaction}) => {

  const [formData, setFormData] = useState<TransactionData>({
    title: transactionDetails.title,
    categoryId: transactionDetails.categoryId,
    type: transactionDetails.type,
    description:( transactionDetails.description?transactionDetails.description:""),
    amount: transactionDetails.amount,
    transactionDate: transactionDetails.transactionDate,
    paymentMethodId:transactionDetails.paymentMethodId
  });
  const updateTransaction = useUpdateTransaction();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit() {
    updateTransaction.mutate(formData);
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
            value={formData.title}
            onChangeFn={handleInputChange}
          />
          <div className="flex gap-2">
            <InputWithLabel
              type="number"
              name="amount"
              placeholder=" ₹ 0.00"
              labelName="Amount"
              value={formData.amount}
              onChangeFn={handleInputChange}
            />
            <InputWithLabel
              type="date"
              name="transactionDate"
              placeholder="mm/dd/yyyy"
              labelName="Date"
              value={formData.transactionDate}
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
            value={formData.description}
            onChangeFn={handleInputChange}
          />
        </div>
        <div className="flex gap-2">
            <Button name="Cancel" className="btn-primary" onClickFn={onClose}/>
            <Button name="Save Changes" frontImg={<Save />} className="btn-primary" onClickFn={handleSubmit}/>
        </div>
      </div>
    </Modal>
  );
};

