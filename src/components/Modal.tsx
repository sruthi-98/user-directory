import { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ children, open, setOpen }: ModalProps) => {
  const closeModal = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div>
      <div onClick={closeModal} />
      <button onClick={closeModal}>x</button>
      {children}
    </div>
  );
};
