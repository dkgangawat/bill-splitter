import React, { createContext, useState } from "react";

// Create the context
export const MobileMenuContext = createContext();

// Create the provider component
export const MobileMenuProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
