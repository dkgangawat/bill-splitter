import React, { useContext, useEffect } from "react";
import Home from "./pages/home";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Footer from "./components/footer";
import { UserContext } from "./context/loggedInUserContext";
import Dashboard from "./pages/dashbord";
import { AuthContext } from "./context/authContext";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  const { user } = useContext(UserContext);
  const {isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    //if user exists then redirect to deshboard
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);
  return (
    <>
      <div className=" max-w-[1200px] mx-auto relative">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute> }/>
        </Routes>
        <Footer />
      </div>
    </>
  );a
};

export default App;
