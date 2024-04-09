import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { MobileMenuContext } from "../context/mobilemenuContext";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { showSidebar } = useContext(MobileMenuContext);
  return (
    <>
      <div
        className={` flex relative overflow-x-auto flex-1   ${
          showSidebar ? " overflow-hidden " : ""
        }`}
      >
        <div
          className={` sideBar sticky top-[73px]  ${
            showSidebar
              ? "border-r border-r-gray "
              : "md:border-r md:border-r-gray"
          }  `}
        >
          <Sidebar />
        </div>
        <div className={` main    inline-block md:w-full text-white  p-4`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
