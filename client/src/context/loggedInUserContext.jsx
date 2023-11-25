
import React, { createContext,  useEffect,  useState } from 'react';

const UserContext = createContext();
 const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  //get and set user from session storage if exists
  const userFromSession = sessionStorage.getItem("user");
  useEffect(()=>{
    if(userFromSession){
      setUser(JSON.parse(userFromSession));
    }
  },[])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
