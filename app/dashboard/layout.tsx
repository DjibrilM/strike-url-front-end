import React from "react";
import SideNav from "@/components/common/sideNav";

const layout = ({children}:{children:React.JSX.Element}) => {
  return (
    <main className="flex">
      <SideNav />
      <div className="">
        {children}
      </div>
    </main>
  );
};

export default layout;
