// group context that handles all group related functions

import React, { createContext, useState, useEffect } from "react";
import axiosClient from "../utility/axiosClient";

     const GroupContext = createContext();

const GroupContextProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const getGroups = async () => {
    try {
      const res = await axiosClient.get("/api/getGroups");
      setGroups(res.data.groups.group);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGroups();
  }, []);
  console.log(groups)
  return (
    <GroupContext.Provider
      value={{ groups, setGroups, refreshGroups: getGroups }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export  { GroupContextProvider, GroupContext };
