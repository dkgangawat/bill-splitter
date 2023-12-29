import  { useContext } from "react";
import { Link } from "react-router-dom";
import { MobileMenuContext } from "../context/mobilemenuContext";
import { GroupContext } from "../context/groupContext";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(MobileMenuContext);
  const { groups } = useContext(GroupContext);
  const siderBarLinks = [
    {
      icon: "fa-solid fa-gauge",
      name: "Dashboard",
      to: "/dashboard",
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
        className={` ${showSidebar ? "  w-[200px] " : "  w-[0]"}  md:flex   flex-col text-gray font-bold overflow-hidden md:overflow-auto w-0   h-[80vh]  md:w-[200px]  `}
      >
      <div className=" " onClick={()=>setShowSidebar(false)}>
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
        <div>
           <Link 
           to={`/dashboard/group/null`}
            className=" flex items-center  hover:rounded-md overflow-hidden   hover:text-gray2  mx-4 mt-2 "
          >
            <div className=" w-[40px] h-[40px] flex justify-center items-center">
              <i className="fa-solid fa-users-line"></i>
            </div>
            <span className="">Group</span>
          </Link>
          <div className="  no-scrollbar ddd" >
          {groups.map((group, index) => (
            <Link
              key={index}
              to={`/dashboard/group/${group._id}`}
              className=" ml-[60px] flex items-center my-1 text-secondary text-sm italic  hover:rounded-md overflow-hidden    mx-4"
            >
              <span className="">{group.name}</span>
            </Link>
          ))
            }
          </div>
        </div>
       
      </div>
        
      </div>
    </>
  );
};

export default Sidebar;
