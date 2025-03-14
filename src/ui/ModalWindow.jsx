import { useContext, useRef } from "react";
import { ModalContext } from "../context/ModalContext";
import Overlay from "./Overlay";
import { XMarkIcon } from "@heroicons/react/16/solid";

function ModalWindow() {
  const { open, modalContent, handleCloseModal } = useContext(ModalContext);

  const modalref = useRef();
  //  Detect onside click of the modal and close the modal, disabled currently

  //   useEffect(() => {
  //     const handleOutsideClick = (event) => {
  //       if (modalref.current && !modalref.current.contains(event.target))
  //         handleCloseModal();
  //     };
  //     document.addEventListener("mousedown", handleOutsideClick);
  //     return () => document.removeEventListener("mousedown", handleOutsideClick);
  //   }, [handleCloseModal]);

  if (!open) return;
  else
    return (
      <Overlay>
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            ref={modalref}
            className="bg-white rounded-xl h-fit relative overflow-auto md:w-2/3 lg:w-5/12 "
          >
            <XMarkIcon
              className="w-6 h-6 p-1 absolute top-2 right-2 hover:bg-slate-100 hover:rounded-2xl hover:cursor-pointer"
              onClick={handleCloseModal}
            />
            {modalContent}
          </div>
        </div>
      </Overlay>
    );
}

export default ModalWindow;
