import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handleCloseModal = () => {
    setOpen(false);
    setModalContent(null);
  };
  const handleOpenModal = (content) => {
    setOpen(true);
    setModalContent(content);
  };

  return (
    <ModalContext.Provider
      value={{ open, modalContent, handleCloseModal, handleOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
