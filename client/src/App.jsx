import { useContext, useEffect } from "react";
import Home from "./pages/home";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Footer from "./components/footer";
import { UserContext } from "./context/loggedInUserContext";
import Dashboard from "./pages/dashbord";
import PrivateRoute from "./components/PrivateRoute";
import DashboardHome from "./components/dashBoard";
import History from "./components/history";
import Group from "./components/group";
import { useLocation } from "react-router-dom";
import Friends from "./components/Friends";
import { MobileMenuContext } from "./context/mobilemenuContext";
const App = () => {
  const { user } = useContext(UserContext);
  const { showSidebar } = useContext(MobileMenuContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    //if user exists then redirect to deshboard
    if (user && location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [user]);
  return (
    <>
      <div
        className={` container mx-auto relative ${
          showSidebar ? " overflow-x-hidden" : ""
        }`}
      >
        <div className=" flex flex-col gap-4">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/history" element={<History />} />
              <Route path="/dashboard/group/:groupid" element={<Group />} />
              <Route path="/dashboard/friends" element={<Friends />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
