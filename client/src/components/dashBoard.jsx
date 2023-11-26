import React, { useContext, useEffect, useState } from "react";
import { GroupContext } from "../context/groupContext";

const DashboardHome = () => {
  const [Expantion, setExpention] = useState(["ddd"]);
  const [userOwe, setUserOwe] = useState(0);
  const [addExpensePopup, setAddExpensePopup] = useState(false);
  const [paidBy, setPaidBy] = useState("");
  const { groups } = useContext(GroupContext);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedGroupExpantion, setSelectedGroupExpantion] = useState([]);
  console.log(selectedGroupExpantion.friends)
  const getUserOwe = async () => {
    try {
      const res = await axiosClient.get("/api/getTotalOwe");
      setUserOwe(res.data.userOwe);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserOwe();
  }, []);

  return (
    <div className=" w-full relative">
      <div className="  w-full flex justify-between">
        <div className=" inline-block text-gray font-bold text-xl md:2xl">
          <span className=" "> You Owe: </span>
          <span className=" "> {userOwe}</span>
        </div>
        <button
          className=" py-1 px-2 bg-danger hover:bg-danger2 rounded-sm inline-block ml-auto"
          onClick={() => {
            setAddExpensePopup(true);
          }}
        >
          Add Expense
        </button>
      </div>
      {Expantion.length > 0 ? (
        <div className="">
          <select className=" bg-transparent text-gray font-bold w-full outline-none my-4" defaultValue={""}>
            <option value={""} disabled className=" text-black">
              Select a group to see expense
            </option>
            {groups.map((group, index) => (
              <option key={index} value={group._id} className=" text-black">
                {group.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className=" flex justify-center  flex-col items-center select-none text-center my-5">
          {/* <i className='fas fa-5x fa-sad-tear text-gray'></i> */}
          <i className="fa-solid fa-check fa-5x text-gray"></i>
          <h1 className="text-center text-2xl font-bold text-gray">
            You All Settle
          </h1>
          <span className=" text-gray">
            Add An by Above Add Expantion Button
          </span>
        </div>
      )}
      {addExpensePopup && (
        <div className=" w-full h-[80vh] backdrop-blur-sm absolute top-0 z-10 flex justify-center items-center ">
          <form
            className="  shadow-md border border-gray px-10 py-4 text-gray font-bold rounded-md relative"
            onSubmit={(e) => {
              e.preventDefault();
              // handleAddGroupSubmit(e);
            }}
          >
            <button
              className=" absolute top-2 right-2 hover:text-white p-2"
              onClick={() => {
                setAddExpensePopup(false);
              }}
            >
              {" "}
              <i className=" fa-solid fa-xmark"></i>{" "}
            </button>
            <span className=" py-5 block"> Add Expense</span>
            <div className=" flex  items-center">
              <label className=" text-sm w-1/2">Amount:</label>
              <input
                type="number"
                min={0}
                required
                // value={groupName}
                // onChange={(e) => setGroupName(e.target.value)}
                className=" text-center rounded-sm px-2 py-1"
              />
            </div>
            <div className=" flex  items-center">
            <label className=" text-sm w-1/2">Select Group:</label>
            <select  onChange={(e)=>{ console.log(e.target.value); setSelectedGroupExpantion(e.target.value)}} className=" bg-transparent text-gray font-bold  outline-none my-4 text-left">
            {groups.map((group, index) => (
              <option key={index} value={group.friends} className=" text-black">
                {group.name}
              </option>
            ))}
          </select>
            </div>
            <div className=" flex items-center">
            <label className=" text-sm w-1/2">Paid By:</label>
            <select className=" bg-transparent text-gray font-bold  outline-none my-4 text-left">
            {/* {selectedGroupExpantion?.map((friend, index) => (
              <option key={index} value={friend._id} className=" text-black">
                {friend.name}
              </option>
            ))} */}
          </select>
            </div>
            <div className=" flex flex-wrap items-center gap-2 py-2">
              <label className=" text-sm">description:</label>
              <input
                type="text"
                required
                // value={groupName}
                // onChange={(e) => setGroupName(e.target.value)}
                className=" border w-full border-gray rounded-sm px-2 py-1"
              />
            </div>

            <button
              type="submit"
              className=" bg-secondary  py-1 px-1 ml-auto hover:bg-success text-white my-5 block rounded-sm text-xs"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
