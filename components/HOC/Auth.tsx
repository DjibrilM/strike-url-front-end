"use client";
import { Seymour_One } from "next/font/google";
import React, { useEffect, useState } from "react";
import { backendApiUrl } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/zustand/user.zustand";
import instance from "@/utils/shared/Axios"; //action instance
import { User } from "@/utils/shared/types";

//fonts
const seymour_One = Seymour_One({ subsets: ["latin"], weight: ["400"] });

const Authorization = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoadding] = useState<boolean>(true);
  const userStore = useUserStore();
  const route = useRouter();
  const { isLoggedin, loginUser } = useUserStore((user) => user);

  const authorize = async (token: string) => {
    try {
      const response = await instance.post<User>(
        backendApiUrl + "/auth/verify/user/token",
        {
          token: token,
        }
      );
      loginUser({ ...response.data, isLoggedin: true });
      route.replace("dashboard");
      setTimeout(() => {
        setLoadding(false);
      }, 2000);

    } catch (error) {
      setLoadding(false);
    }
  };

  useEffect(() => {
    if (isLoggedin) return;

    const token = localStorage.getItem("auth-token") as string;
    if (!token) {
      setTimeout(() => {
        setLoadding(false);
      }, 1000);
    } else {
      authorize(token);
    }
  }, []);

  return (
    <>
      {loading && !isLoggedin ? (
        <div className="w-full h-screen flex items-center justify-center">
          <h1
            className={`${seymour_One.className} bg-white auth-loading-logo text-black rounded-full text-3xl  flex items-center justify-center w-[100px] h-[100px]`}
          >
            S
          </h1>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Authorization;
