"use client";

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import CreateUrlDialog from "../dialogs/createUrlDialog";
import { useUserStore } from "@/zustand/user.zustand";

import { Seymour_One } from "next/font/google";
import Link from "next/link";

const seymour_One = Seymour_One({ subsets: ["latin"], weight: ["400"] });

const sideNav = () => {
  const [openCreateUrlModal, setOpenCreateUrlModal] = useState<boolean>(false);
  const { profile } = useUserStore();

  return (
    <aside className="h-screen fixed flex-col flex justify-between w-[100px] bg-[#ffffff0a] border-r border-white/5">
      <Link
        href={"dashboard"}
        className="w-[50px] mx-auto h-[50px] text-3xl flex items-center justify-center mt-10 bg-white text-black rounded-full"
      >
        <h1 className={seymour_One.className}>s</h1>
      </Link>

      <div className="mb-10">
        <button
          onClick={() => setOpenCreateUrlModal(true)}
          className="bg-white w-[40px] active:bg-white/90 h-[40px] text-2xl flex items-center justify-center mx-auto rounded-full text-black"
        >
          <GoPlus />
        </button>

        <button className="bg-white mt-10 w-[40px] active:bg-white/90 h-[40px] text-2xl flex items-center justify-center mx-auto rounded-full text-black">
          <h1>{profile}</h1>
        </button>

        <CreateUrlDialog
          onClose={() => setOpenCreateUrlModal(false)}
          open={openCreateUrlModal}
        />
      </div>
    </aside>
  );
};

export default sideNav;
