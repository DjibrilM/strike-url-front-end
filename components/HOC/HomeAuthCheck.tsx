"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const HomeAuthCheck = ({ children }: { children: React.JSX.Element }) => {
  const [canDisplayPage, setCanDisplayPage] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth-token") as string;


    if (!token) {
      setCanDisplayPage(true);
    } else {
      router.replace("dashboard");
    }
  }, []);
  return <>{canDisplayPage && children}</>;
};

export default HomeAuthCheck;
