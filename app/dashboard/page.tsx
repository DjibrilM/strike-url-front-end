"use client";
import React from "react";
import useSWR from "swr";
import UrlCard from "@/components/UrlCard";
import instance from "@/utils/shared/Axios";
import Visibility from "@/components/common/Visible";
import { Loader } from "lucide-react";
import { Url } from "@/utils/shared/types";

import EmptyResult from "@/components/common/EmptyResult";

async function fetchUrls(url: string) {
  const response = await instance<Url[]>(url);
  return response.data;
}

const page = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    "/urls/user/all",
    fetchUrls
  );
  


  return (
    <main className="ml-[100px] p-4">
      <Visibility visible={data ? true : false}>
        {data?.length! > 0 && (
          <h2 className="text-2xl text-white mb-2">Your links🔗</h2>
        )}
        <ul className="gap-4 grid grid-cols-2">
          {data?.map((url) => (
            <UrlCard key={url.id} url={url} />
          ))}
        </ul>

        <Visibility visible={data?.length! < 1}>
          <EmptyResult className="mt-10" title="No link yet." />
        </Visibility>
      </Visibility>

      <Visibility visible={isLoading || isValidating}>
        <div className="w-full text-white flex items-center  h-full justify-center">
          <Loader className="h-10 animate-spin" />
        </div>
      </Visibility>
    </main>
  );
};

export default page;
