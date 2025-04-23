import React, { useState } from "react";
import { createContext } from "react";
import { ModalPropsType } from "../components/main/templates/modal/Modal";
type ModalContextPropsType = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  modalDetails: ModalPropsType;
  setModalDetails: (modalDetails: ModalPropsType) => void;
};

export const ModalContext = createContext<ModalContextPropsType>(
  {} as ModalContextPropsType
);

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState<ModalPropsType>(
    {} as ModalPropsType
  );
  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, modalDetails, setModalDetails }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
