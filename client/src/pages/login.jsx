import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/loggedInUserContext";
import axiosClient from "../utility/axiosClient";
import Cookies from "js-cookie";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginButton = useRef(null);
  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
    } else {
      const user = {
        email,
        password,
      };
      try {
        loginButton.current.disabled = true;
        loginButton.current.innerHTML = "Logging in...";
        const res = await axiosClient.post("/login", user);
        loginButton.current.disabled = false;
        loginButton.current.innerHTML = "Login";
        if (res.data.success) {
          setUser(res.data.user);
          const expirationTime = new Date();
          expirationTime.setHours(expirationTime.getHours() + 12);
          const token = res.data.token;
          console.log(token);
          Cookies.set("token", token, { expires: expirationTime });
          // set user in session storage to persist user on page refresh
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          setIsAuthenticated(true);
          document.querySelectorAll("input").forEach((input) => {
            input.style.borderColor = "gray";
          });
          document.querySelectorAll("label").forEach((label) => {
            label.style.color = "gray";
          });
          setPasswordIncorrect(false);
        }
      } catch (error) {
        console.log(error);
        if (error.response?.status === 401) {
          //set the color of input border and label to red
          document.querySelectorAll("input").forEach((input) => {
            input.style.borderColor = "red";
          });
          document.querySelectorAll("label").forEach((label) => {
            label.style.color = "red";
          });
          setPasswordIncorrect(true);
        }
      }
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center    text-gray login">
        <div className=" w-[400px] h-[500px] border border-gray rounded-lg shadow-lg py-4 bg-gradient-to-br from-[#ffffff30] to-transparent backdrop-blur-md ">
          <div className=" text-center font-bold text-2xl py-4">Login</div>
          {passwordIncorrect && (
            <div className=" text-center text-danger2 text-xs italic">
              Incorrect password
            </div>
          )}
          <form className=" flex flex-col gap-2 px-4" onSubmit={loginHandler}>
            <label className=" text-sm">Email</label>
            <input
              type="text"
              value={email}
              required
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-gray2 border border-gray rounded-sm py-1 px-2"
            ></input>
            <label className=" text-sm">Password</label>
            <input
              type="password"
              value={password}
              required
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-gray2 border border-gray rounded-sm py-1 px-2"
            ></input>
            <button
              ref={loginButton}
              type="submit"
              className=" bg-secondary w-fit mx-auto py-1 px-4 hover:bg-success text-white  rounded-sm font-bold"
            >
              Login
            </button>
          </form>
          <div className=" flex justify-center items-center flex-col gap-4 my-10">
            <Link to="/signup" className="  underline italic mx-auto block">
              don't have an account? Sign up
            </Link>
            <span className=" text-gray2">or</span>
            <button className=" hover:scale-95 bg-[#000000] w-fit mx-auto px-4 py-1 rounded-md flex justify-center items-center gap-2">
              <i className="fa-brands fa-google text-danger text-3xl"></i>
              <span className=" text-sm  "> continue with google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
