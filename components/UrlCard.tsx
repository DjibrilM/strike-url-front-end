"use client";
import React, { useEffect } from "react";
import { IoIosLink } from "react-icons/io";
import { IoIosExpand } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";
import { Url } from "@/utils/shared/types";
import { FaRegTrashAlt } from "react-icons/fa";


const UrlCard = ({ url }: { url: Url }) => {
  return (
    <li className="flex gap-4  h-[160px] bg-[#ffffff0a] border-r border-white/5 border rounded-lg p-2">
      <div className="h-full w-[80px] flex items-center justify-center text-2xl rounded-lg bg-white/90">
        <IoIosLink />
      </div>

      <div className="flex items-center w-full">
        <div className="w-full h-full">
          <p className="flex flex-col">
            <Link href={url.shortUrl} className="text-[12px] text-blue-600">
              {url.shortUrl}
            </Link>
            <Link
              href={url.url}
              className="text-[10px] relative bottom-1 text-white/50"
            >
              {url.url}
            </Link>
          </p>

          <div className="w-full h-[45%] bg-[#ffffff0a] p-3  rounded-lg">
            <p className="line-clamp  text-sm text-white">{url.description}</p>
          </div>

          <p className="bg-green-300 mt-2 w-max rounded-lg p-2 text-[12px] items-center gap-2 flex">
            <HiOutlineEye />
            <span>{url.strikes?.length || 0}</span>
          </p>
        </div>

        <div className="">
          <Link
            className="h-10 mx-4 w-10 mr flex items-center justify-center rounded-lg text-black bg-white "
            href={""}
          >
            <IoIosExpand />
          </Link>
          <button
            className="h-10 mt-2 active:bg-red-400 mx-4 w-10 mr flex items-center justify-center rounded-lg text-black bg-red-500 "
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
};

export default UrlCard;
