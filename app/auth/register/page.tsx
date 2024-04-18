import React from "react";
import Link from "next/link";
import AuthForm from "@/components/forms/AuthForm";

const page = (props: any) => {
  return (
    <>
      <section className="h-full px-5">
        <AuthForm page={props.searchParams.route} />
      </section>

      <footer className="w-full h-20  border-white/20 border-t flex items-center justify-center  bg-white/5 absolute bottom-0">
        <Link
          className="text-blue-500  text-center"
          href={"login/?route=login"}
        >
          Already have an account? login
        </Link>
      </footer>
    </>
  );
};

export default page;
