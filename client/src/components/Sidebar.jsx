import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MobileMenuContext } from "../context/mobilemenuContext";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(MobileMenuContext);
  const siderBarLinks = [
    {
      icon: "fa-solid fa-gauge",
      name: "Dashboard",
      to: "/dashboard",
    },
    {
      icon: "fa-solid fa-users-line",
      name: "Group",
      to: "/dashboard/group",
    },
    {
      icon: "fa-solid fa-history",
      name: "History",
      to: "/dashboard/history",
    },
    //friends
    {
      icon: "fa-solid fa-user-friends",
      name: "Friends",
      to: "/dashboard/friends",
    },  
  ];
  return (
    <>
      <div
        className={` ${showSidebar ? "  w-[200px] border-r border-r-gray" : "  w-[0]"}  md:flex  md:border-r md:border-r-gray flex-col text-gray font-bold overflow-hidden md:overflow-auto w-0   h-[80vh]  md:w-[200px]  `}
      >
      <div className=" ">
      {siderBarLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className=" flex items-center  hover:rounded-md overflow-hidden  hover:text-gray2  mx-4 my-2 border-b border-b-gray"
          >
            <div className=" w-[40px] h-[40px] flex justify-center items-center">
              <i className={link.icon}></i>
            </div>
            <span className="">{link.name}</span>
          </Link>
        ))}
      </div>
        
      </div>
    </>
  );
};

export default Sidebar;
