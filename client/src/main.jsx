import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/loggedInUserContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { MobileMenuProvider } from "./context/mobilemenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MobileMenuProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </MobileMenuProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
