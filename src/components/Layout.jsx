import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#F1F4F9] h-[100vh] p-[40px] flex flex-row gap-[1.5rem] w-[100vw] relative">
      <Nav />
      <div className="w-full ">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
