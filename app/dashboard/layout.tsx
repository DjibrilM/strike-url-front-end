import React from "react";
import SideNav from "@/components/common/sideNav";
import Authorization from "@/components/HOC/Auth";
import { User } from "@/utils/shared/types";

const layout = ({ children }: { children: React.JSX.Element }) => {
  let userData: User | null = null;

  return (
    <Authorization user={userData}>
      <main className="">
        <SideNav />
        {children}
      </main>
    </Authorization>
  );
};

export default layout;
