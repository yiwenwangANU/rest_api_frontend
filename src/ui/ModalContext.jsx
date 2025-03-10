import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalData, setModalData] = useState(null);

  const handleCloseModal = () => {
    setOpen(false);
    setModalContent(null);
    setModalData(null);
  };
  const handleOpenModal = (content, data) => {
    setOpen(true);
    setModalContent(content);
    setModalData(data);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        modalContent,
        modalData,
        handleCloseModal,
        handleOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
