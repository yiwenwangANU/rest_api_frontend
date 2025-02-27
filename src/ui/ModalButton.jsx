import { useContext } from "react";
import { ModalContext } from "./ModalContext";

function ModalButton({ children }) {
  const { handleOpenModal } = useContext(ModalContext);
  return (
    <button
      className="px-4 py-2 text-xl bg-yellow-500 text-purple-950 w-fit shadow-2xl capitalize"
      onClick={handleOpenModal}
    >
      {children}
    </button>
  );
}

export default ModalButton;
