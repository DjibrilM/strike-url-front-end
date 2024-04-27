import React from "react";
import SideNav from "@/components/common/sideNav";
import Authorization from "@/components/HOC/Auth";
import { User } from "@/utils/shared/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layout = ({ children }: { children: React.JSX.Element }) => {
  let userData: User | null = null;

  return (
    <>
      <Authorization user={userData}>
        <main className="">
          <SideNav />
          {children}
          <ToastContainer
            pauseOnHover={false}
            hideProgressBar={true}
            toastStyle={{
              background: "rgb(31 41 55)",
            }}
            position="top-center"
            bodyStyle={{}}
          />
        </main>
      </Authorization>
    </>
  );
};

export default layout;
