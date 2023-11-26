import React, { useContext, useEffect, useState } from "react";
import axiosClient from "../utility/axiosClient";
import { Link, useParams } from "react-router-dom";
import { GroupContext } from "../context/groupContext";
import { FriendsContext } from "../context/friendsContext";

const Group = () => {
  const { groupid } = useParams();
  const [groupPopup, setGroupPopup] = useState(groupid === "null" ? true : false);
  const [groupName, setGroupName] = useState("");
  const { friends } = useContext(FriendsContext);
  const { groups, setGroups, refreshGroups } = useContext(GroupContext);
  const [newFriends, setNewFriends] = useState([]);
  const group =
    groupid == null ? {} : groups.find((group) => group._id === groupid);
  const [notAddedFriends, setNotAddedFriends] = useState([]); // friends that are not added to the group

  useEffect(() => {
    const groupFriendsSet = new Set(group?.friends?.map((friend) => friend._id));
    const filteredFriends = friends?.filter(
      (friend) => !groupFriendsSet.has(friend._id)
    );
    setNotAddedFriends(filteredFriends);
  }, [group, friends]);
  const handleAddGroupSubmit = async (e) => {
    e.preventDefault();
    if (!groupName) {
      alert("Please fill all the fields");
      return;
    }
    const group = {
      name: groupName,
      friends: [],
    };
    try {
      const res = await axiosClient.post("/api/createGroup", group);
      alert(res.data.message);
      setGroupPopup(false);
      refreshGroups();
      // getGroups();
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewFriend = (id, name, email) => {
    const friend = {
      _id: id,
      name: name,
      email: email,
    };
    if (newFriends.find((friend) => friend._id === id)) {
      setNewFriends(newFriends.filter((friend) => friend._id !== id));
    } else {
      setNewFriends([...newFriends, friend]);
    }
  };

  const handleAddFriendsToGroup = async (e) => {
    try {
      e.target.disabled = true;
      const res = await axiosClient.post("/api/addFriendToGroup", {
        name: group.name,
        friends: newFriends,
      });
      alert(res.data.message);
      refreshGroups();
      setNewFriends([]);
      //update setNotAddedFriends
      const groupFriendsSet = new Set(
        res.data.group.group.friends.map((friend) => friend._id)
      );
      const filteredFriends = friends.filter(
        (friend) => !groupFriendsSet.has(friend._id)
      );
      setNotAddedFriends(filteredFriends);
      e.target.disabled = false;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" relative">
        <div>
          {/* add group button */}
          <button
            className=" py-1 px-2 bg-danger hover:bg-danger2 rounded-sm block ml-auto "
            onClick={() => {
              setGroupPopup(true);
            }}
          >
            {" "}
            <i className="fas fa-plus"></i> Add Group
          </button>
          {groupid !== "null" && (
            <div>
              <div className=" max-w-[600px] mx-auto">
                <div>
                  <div className=" w-full h-[150px]  relative">
                    <img
                      className=" w-full h-full object-cover z-0"
                      draggable={false}
                      src="https://c4.wallpaperflare.com/wallpaper/886/638/359/photography-landscape-nature-morning-wallpaper-preview.jpg"
                      height={100}
                      alt={`image of ${group.name}`}
                    />
                    <h1 className=" z-10 absolute bottom-0 px-4 text-black text-3xl font-bold ">
                      {group.name}
                    </h1>
                  </div>
                  <div className=" mt-2">
                    <div className="">
                      <h1 className=" text-lg md:text-xl">Friends</h1>
                      {group.friends.length !== 0 ? (
                        <>
                          {group.friends.map((friend, index) => (
                            <div
                              key={index}
                              className=" flex items-center gap-2 my-2"
                            >
                              <img
                                className=" w-[40px] h-[40px] object-cover rounded-full"
                                src={
                                  friend.avatar
                                    ? friend.avatar
                                    : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                                }
                                alt={friend.name}
                              />
                              <div>
                                <div className="">
                                  <span>{friend.email}</span>
                                  <span className=" block text-sm text-gray">
                                    {friend.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <div className=" flex justify-center">
                          {" "}
                          <span className=" w-full text-gray text-center">
                            No friend add to {group.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <h1 className=" text-lg md:text-xl py-5">
                          Add friends to {group.name}
                        </h1>
                        <button
                          disabled={newFriends.length === 0}
                          className={`ml-2 bg-secondary text hover:text-secondary2 px-2  rounded ${
                            newFriends.length === 0
                              ? " cursor-not-allowed opacity-70"
                              : " cursor-pointer opacity-100"
                          }}`}
                          onClick={handleAddFriendsToGroup}
                        >
                          <i className="fas fa-plus"></i> done
                        </button>
                      </div>

                      {notAddedFriends.length !== 0 ? (
                        <>
                          {notAddedFriends.map((friend, index) => (
                            <div
                              key={index}
                              className=" flex items-center gap-2"
                            >
                              <input
                                id={friend._id}
                                type="checkbox"
                                className=""
                                onChange={() => {
                                  handleNewFriend(
                                    friend._id,
                                    friend.name,
                                    friend.email
                                  );
                                }}
                              />
                              <label
                                htmlFor={friend._id}
                                className=" cursor-pointer w-full "
                              >
                                <div className="flex items-center gap-2 my-2 ">
                                  <img
                                    className=" w-[40px] h-[40px] object-cover rounded-full"
                                    src={
                                      friend.avatar
                                        ? friend.avatar
                                        : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                                    }
                                    alt={friend.name}
                                  />
                                  <div>
                                    <div className="">
                                      <span>{friend.email}</span>
                                      <span className=" block text-sm text-gray">
                                        {friend.name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          ))}
                        </>
                      ) : (
                        <div className=" flex justify-center">
                          {" "}
                          <Link
                            to={"/"}
                            className=" w-full text-secondary text-center"
                          >
                            Add friend circle
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}

          {/* add group popup */}
          {groupPopup && (
            <div className=" w-full h-[80vh] backdrop-blur-sm absolute top-0 z-10 flex justify-center items-center ">
              <form
                className="  shadow-md border border-gray px-10 py-4 text-gray font-bold rounded-md relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddGroupSubmit(e);
                }}
              >
                <button
                  className=" absolute top-2 right-2 hover:text-white p-2"
                  onClick={() => {
                    setGroupPopup(false);
                  }}
                >
                  {" "}
                  <i className=" fa-solid fa-xmark"></i>{" "}
                </button>
                <span> Create A New Group</span>
                <div className=" flex items-center gap-2 py-2">
                  <label className=" text-sm">Group Name:</label>
                  <input
                    type="text"
                    required
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className=" border border-gray rounded-sm px-2 py-1"
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-secondary  py-1 px-1 ml-auto hover:bg-success text-white my-5 block rounded-sm text-xs"
                >
                  Add Friend
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Group;
