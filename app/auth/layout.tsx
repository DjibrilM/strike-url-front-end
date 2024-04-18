import React from "react";
import Link from "next/link";
import { Seymour_One } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const seymour_One = Seymour_One({ subsets: ["latin"], weight: ["400"] });

const AuthLayout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <main className="w-full min-h-screen pt-20 relative">
      <header className=" text-white text-3xl flex justify-center font-bold">
        <Link
          href={"/"}
          className={`${seymour_One.className} bg-white text-black rounded-full  flex items-center justify-center w-[70px] h-[70px]`}
        >
          S
        </Link>
      </header>
      <ToastContainer
        pauseOnHover={false}
        hideProgressBar={true}
        toastStyle={{
          background: "rgb(31 41 55)",
        }}
        position="top-center"
        bodyStyle={{}}
      />
      <section className="pt-40">{children}</section>
    </main>
  );
};

export default AuthLayout;
