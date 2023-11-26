import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/loggedInUserContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { MobileMenuProvider } from "./context/mobilemenuContext.jsx";
import { GroupContextProvider } from "./context/groupContext.jsx";
import { FriendsContextProvider } from "./context/friendsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GroupContextProvider>
        <FriendsContextProvider>
          <MobileMenuProvider>
            <UserProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </UserProvider>
          </MobileMenuProvider>
        </FriendsContextProvider>
      </GroupContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
