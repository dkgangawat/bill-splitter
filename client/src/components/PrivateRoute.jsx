import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function PrivateRoute({ children, auth }) {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated)
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
