import React, { useState } from "react";
import axiosClient from "../utility/axiosClient";

const Friends = () => {
  const [friendPopup, setFriendPopup] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");

  const handleaddFriendSubmit = async (e) => {
    e.preventDefault();
    if (!friendName || !friendEmail) {
      alert("Please fill all the fields");
      return;
    }
    const friend = {
      name: friendName,
      email: friendEmail,
    };
    try {
      const res = await axiosClient.post("/api/addFriend", friend);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" relative">
        <button
          className=" py-1 px-2 bg-danger hover:bg-danger2 rounded-sm block ml-auto"
          onClick={() => setFriendPopup(!friendPopup)}
        >
          Add Friend
        </button>

        {/* add friend popup */}
        {friendPopup && (
          <div className=" w-full h-[80vh] backdrop-blur-sm absolute flex justify-center items-center ">
            {/* add friend using name and email form */}
            <form
              className="  shadow-md border border-gray p-10 text-gray font-bold rounded-md"
              onSubmit={(e) => {
                e.preventDefault();
                handleaddFriendSubmit(e);
              }}
            >
              <div className=" flex flex-col gap-2">
                <label className=" text-sm">Name</label>
                <input
                  type="text"
                  required
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                  className=" border border-gray rounded-sm px-2 py-1"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" text-sm">Email</label>
                <input
                  type="email"
                  required
                  value={friendEmail}
                  onChange={(e) => setFriendEmail(e.target.value)}
                  className=" border border-gray rounded-sm px-2 py-1"
                />
              </div>
              <div className=" flex justify-center items-center">
                <button
                  type="submit"
                  className=" bg-secondary py-1 px-4 hover:bg-success text-white my-5  rounded-sm font-bold"
                >
                  Add Friend
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Friends;
