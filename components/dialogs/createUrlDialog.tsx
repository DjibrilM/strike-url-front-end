import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Input from "postcss/lib/input";
import CreateUrlForm from "../forms/createUrlForms";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreateUrlDialog: React.FC<Props> = ({ open, onClose }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [hasAlreadyOpened, setHasAlreadyOpened] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setHasAlreadyOpened(true);
      modalRef.current!.classList.add("open");
      modalRef.current?.showModal();
    } else {
      if (!hasAlreadyOpened) return;
      modalRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      onClose={onClose}
      ref={modalRef}
      open={false}
      className="dialog bottom-[500px] min-w-[600px] rounded-lg p-4 border border-white/5 bg-[#09090b]  relative  backdrop:backdrop-animation duration-200"
    >
      <div className="">
        <button
          onClick={onClose}
          className="bg-transparent border active:scale-90 border-[#ffffff38] p-2 text-white rounded-lg"
        >
          <IoCloseOutline />
        </button>
        <div className="h-10"></div>
        <CreateUrlForm  />
      </div>
    </dialog>
  );
};

export default CreateUrlDialog;
