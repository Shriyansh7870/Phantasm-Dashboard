import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <Header />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
