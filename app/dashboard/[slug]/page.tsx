"use client";

import React from "react";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";
import UrlDataTab from "@/components/UrlDataTab/urlDataTab";
import { backendApiUrl } from "@/utils/constant";
import instance from "@/utils/shared/Axios";
import { Url } from "@/utils/shared/types";
import useSWR from "swr";
import { Loader } from "lucide-react";
import Visibility from "@/components/common/Visible";

async function fetchUrls(url: string) {
  const response = await instance<Url>(url);
  return response.data;
}

const page = (props: { params: { slug: string }; searchParams: {} }) => {
  const { data, error, isLoading, isValidating } = useSWR<Url>(
    "urls/find/one/url/" + props.params.slug,
    fetchUrls as any
  );

  return (
    <main className="ml-[100px] p-4">


      <Visibility visible={data !== undefined && data !== null}>
        <div className="flex gap-4">
          <div className="w-[200px] h-[200px] text-gray-800 text-4xl flex items-center justify-center bg-white/90 rounded-lg">
            <IoIosLink />
          </div>

          <div className="">
            <p className="text-white/90 my-3">
              Tile : <span className="mx-2" />
              {data?.title}
            </p>

            <p className="text-white/90 my-3">
              🔗url :
              <span className="mx-2" />
              <Link className="text-blue-500" href={data?.url || ""}>
                {data?.url}
              </Link>
            </p>
            <p className="text-white/90 my-3">
              🔗Short Url :
              <span className="mx-2" />
              <Link className="text-blue-500" href={data?.shortUrl || ""}>
                {data?.shortUrl}
              </Link>
            </p>

            <p className="max-w-[500px] absolute line-clamp-3 cursor-pointer hover:line-clamp-none text-white/90 text-sm mt-5">
              {data?.description}
            </p>
          </div>
        </div>

        <UrlDataTab data={data!} />
      </Visibility>
    </main>
  );
};

export default page;
