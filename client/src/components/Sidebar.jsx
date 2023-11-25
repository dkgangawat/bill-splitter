import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const siderBarLinks = [
    {
      icon: "fa-solid fa-gauge",
      name: "Dashboard",
    },
    {
      icon: "fa-solid fa-users-line",
      name: "Group",
    },
    {
      icon: "fa-solid fa-history",
      name: "History",
    },
  ];
  return (
    <>
      <div className=" flex flex-col text-gray font-bold">
        {siderBarLinks.map((link, index) => (
          <Link
            key={index}
            to="/dashboard"
            className=" flex items-center  hover:rounded-md overflow-hidden hover:text-gray2  mx-4 my-2 border-b border-b-gray"
          >
            <div className=" w-[40px] h-[40px] flex justify-center items-center">
              <i className={link.icon}></i>
            </div>
            <span className="">{link.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
