import { Delete, FileWarning } from "lucide-react";
import { Modal } from "../../../components/common/Modal";
import { Button } from "../../auth/components/Button";
import { useDeleteTransaction } from "../hooks/useDeleteTransaction";
import type { Transaction } from "../transaction.types";

export const TransactionDelete = ({
  modalTitle,
  modalDescription,
  isOpen,
  onClose,
  transactionDetails
}:{modalTitle:string, modalDescription:string, isOpen:boolean, onClose:() => void, transactionDetails:Transaction}) => {

  
  const deleteTransaction = useDeleteTransaction();

  function handleSubmit() {
    deleteTransaction.mutate(transactionDetails.id);
  }
  return (
    <Modal
      title={modalTitle}
      description={modalDescription}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div>
            <h1>Delete Transaction?</h1>
            <p>You're about to permanently delete the transaction: {transactionDetails.title }
                 ( ₹ {transactionDetails.amount}). This action cannot be undone and the record will be removed from all the places</p>
        </div>
        
        <div className="flex-col gap-2">
            <Button name="Delete Transaction" frontImg={<Delete />} className="btn-primary" onClickFn={handleSubmit}/>
            <Button name="Cancel" className="btn-primary" onClickFn={onClose}/>
            
        </div>
        <div className="warningBox flex gap-2">
            <FileWarning size={14} /> 
            <p>This will also remove the transaction from your budget calculations and other financial analytics. </p>
        </div>
      </div>
    </Modal>
  );
};

