import React from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex">
      <div className="h-full flex-col fixed inset-y-0 z-50 ">
        <Sidebar />
      </div>
      <div className="w-full ml-24 overflow-y-hidden">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
