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
    <div className="fixed top-0 left-0 w-[100%] h-[100%] flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-[100%] h-[100%] bg-slate-800 bg-opacity-70 backdrop-blur-[10px]"
        onClick={closeModal}
      />
      <div className="relative m-10 p-5 max-w-[400px] bg-white rounded-[5px] z-10">
        <button
          className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] text-sm font-sans font-bold p-1 bg-gray-200 rounded-full w-8 h-8 border-black border-2"
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
