import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/loggedInUserContext";
import Cookies from "js-cookie";
import logo from "../assets/logo.png"
import { MobileMenuContext } from "../context/mobilemenuContext";

const NavBar = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { user } = useContext(UserContext);
  const { showSidebar, setShowSidebar } = useContext(MobileMenuContext);

  const profileDropdownHandler = () => {
    setProfileDropdown(!profileDropdown);
  };

  //logout handler remove user from session and delete cookie
  const logoutHandler = () => {
    sessionStorage.removeItem("user");
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <>
      <div className=" flex px-4  border-b border-b-gray justify-between items-center text-white py-4 sticky top-0 bg-primary">
      <div className=" flex gap-2 items-center">
        <i className="fa-solid fa-bars text-white text-xl   w-[40px] text-center md:hidden block cursor-pointer " onClick={(e)=>{setShowSidebar(!showSidebar)}}></i>
        <Link to="/"><img src={logo} className=" h-[40px]" alt="logo"/></Link>
      </div>
      
        <div>
          {/* data to show when user logged in */}
          {user ? (
            <div className=" relative">
              <div
                className=" w-fit flex items-center gap-1 hover:bg-[#000000] cursor-pointer select-none p-1 rounded-sm "
                onClick={profileDropdownHandler}
              >
                <div className=" w-[28px] h-[28px] border border-gray rounded-[50%] overflow-hidden">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"></img>
                </div>
                <span className=" text-sm px-1">{user.name}</span>
                <i className="fa-solid fa-chevron-down scale-50"></i>
              </div>
              {/* profile dropdown */}
              {profileDropdown && (
                <div className=" absolute bg-gray2 border border-gray rounded-sm mt-2 min-w-[100px] w-full min-h-[100px] top-full">
                  <i className="fa-solid fa-caret-up absolute -top-2 left-3/4"></i>
                  <div className=" flex flex-col gap-2 p-2 text-black">
                    <Link to="/profile" className=" hover:underline hover:italic">
                      Profile
                    </Link>
                    <Link to="/settings" className=" hover:underline hover:italic">
                      Settings
                    </Link>
                    <button
                      className=" hover:underline cursor-pointer  hover:italic text-left"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className=" flex gap-2">
              <Link
                to="/login"
                className=" bg-secondary py-1 px-4 hover:bg-success  rounded-sm font-bold"
              >
                Login
              </Link>
              {/* <Link to="/signup" className=" text-secondary underline hover:italic">Sign up</Link> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
