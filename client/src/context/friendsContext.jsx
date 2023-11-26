// group context that handles all group related functions

import React, { createContext, useState, useEffect } from "react";
import axiosClient from "../utility/axiosClient";

const FriendsContext = createContext();

const FriendsContextProvider = ({ children }) => {
  const [Friend, setFriends] = useState([]);

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

  console.log(Friend);
  return (
    <FriendsContext.Provider
      value={{ friends: Friend, setFriends, refreshFriends: getFriends }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export { FriendsContextProvider, FriendsContext };
