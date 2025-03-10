import { useContext, useRef } from "react";
import { ModalContext } from "./ModalContext";
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
            className="bg-white rounded-xl w-2/3 h-fit relative overflow-auto"
          >
            <XMarkIcon
              className="w-10 h-10 absolute top-2 right-2 hover:bg-slate-100 hover:cursor-pointer"
              onClick={handleCloseModal}
            />
            {modalContent}
          </div>
        </div>
      </Overlay>
    );
}

export default ModalWindow;
