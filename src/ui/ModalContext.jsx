import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);

  return (
    <ModalContext.Provider value={{ open, handleCloseModal, handleOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};
