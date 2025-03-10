import { useContext } from "react";
import Button from "./Button";
import { ModalContext } from "./ModalContext";

function ConfirmDelete({ resourceName, onConfirm, disabled }) {
  const { handleCloseModal } = useContext(ModalContext);
  return (
    <div className="w-[40rem] flex flex-col gap-[1.2rem]">
      <h1>Delete {resourceName}</h1>
      <p className="text-gray-500 mb-[1.2rem]">
        Are you sure you want to delete {resourceName} permanently? This action
        cannot be undone.
      </p>
      <div className="flex justify-end gap-[1.2rem]">
        <Button
          variant="secondary"
          disabled={disabled}
          onClick={handleCloseModal}
        >
          Cancel
        </Button>
        <Button variant="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
