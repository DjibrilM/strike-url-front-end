import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CreateUrlForm from "../forms/CreateUrlForms";
import instance from "@/utils/shared/Axios";
import { Url } from "@/utils/shared/types";
import { mutate } from "swr";
import { backendApiUrl } from "@/utils/constant";

async function fetchUrls(url: string) {
  const response = await instance<Url[]>(url);
  return response.data;
}

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
      className="dialog mx-auto bottom-[500px] max-w-[600px] w-full rounded-lg p-4 border border-white/5 bg-[#09090b]  relative  backdrop:backdrop-animation duration-200"
    >
      <div className="">
        <button
          onClick={onClose}
          className="bg-transparent border active:scale-90 border-[#ffffff38] p-2 text-white rounded-lg"
        >
          <IoCloseOutline />
        </button>
        <div className="h-10"></div>
        <CreateUrlForm
          completed={onClose}
        />
      </div>
    </dialog>
  );
};

export default CreateUrlDialog;
