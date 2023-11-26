import React, { useEffect, useState } from "react";
import axiosClient from "../utility/axiosClient";

const Friends = () => {
  const [friendPopup, setFriendPopup] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    try {
      const res = await axiosClient.get("/api/getFriends");
      setFriends(res.data.friends.friends);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

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
      setFriendPopup(false);
      getFriends();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" relative">
        <button
          className=" py-1 px-2 bg-danger hover:bg-danger2 rounded-sm block ml-auto "
          onClick={() => setFriendPopup(!friendPopup)}
        >
          Add Friend
        </button>
        {
          friends.length > 0 ? (
            <div className="">
              {friends.map((friend, index) => (
                <div
                  key={index}
                  className="  justify-between items-center border border-gray rounded px-2 py-1 my-2 min-h-[40px] grid grid-cols-6"
                >
                  <span className=" text-sm text-ellipsis col-span-2">{friend.name}</span>
                  <span className=" text-sm col-span-3">{friend.email}</span>
                  <button
                    className=" text-sm text-danger"
                    onClick={async () => {
                      try {
                        const res = await axiosClient.delete("/api/deleteFriend", {
                          data: { email: friend.email },
                        });
                        alert(res.data.message);
                        getFriends();
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className=" flex justify-center  flex-col items-center select-none text-center my-5">
              {/* <i className='fas fa-5x fa-sad-tear text-gray'></i> */}
              <i className="fas fa-5x fa-sad-tear text-gray"></i>
              <h1 className="text-center text-2xl font-bold text-gray">
                No Friends Added
              </h1>
              <span className=" text-gray">
                Add An by Above Add Friend Button
              </span>
            </div>
          )
        }
        <div className=""></div>
        {/* add friend popup */}
        {friendPopup && (
          <div  className=" w-full h-[80vh] backdrop-blur-sm absolute top-0 z-10 flex justify-center items-center ">
            {/* add friend using name and email form */}
            <form
              className="  shadow-md border border-gray p-10 text-gray font-bold rounded-md relative"
              onSubmit={(e) => {
                e.preventDefault();
                handleaddFriendSubmit(e);
              }}
              
            >
            <button className=" absolute top-2 right-2 hover:text-white p-2" onClick={()=>{ setFriendPopup(false) }}> <i className=" fa-solid fa-xmark"></i> </button>

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
