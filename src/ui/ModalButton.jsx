import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import NewPostForm from "./NewPostForm";

function ModalButton({ children }) {
  const { handleOpenModal } = useContext(ModalContext);
  const openNewPostModal = () => {
    handleOpenModal(<NewPostForm />);
  };
  return (
    <button
      className="px-4 py-2 text-xl bg-yellow-500 text-purple-950 w-fit shadow-2xl capitalize"
      onClick={openNewPostModal}
    >
      {children}
    </button>
  );
}

export default ModalButton;
