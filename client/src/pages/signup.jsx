import React, { useState } from "react";
import axiosClient from "../utility/axiosClient";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields");
    } else if (password !== confirmPassword) {
      alert("Password do not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      try {
        const res = await axiosClient.post("/signup", user);
        res.data.success && window.location.replace("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center h-screen text-gray  signup">
        <div className=" w-[400px] h-[500px] border border-gray rounded-lg shadow-lg py-4">
          <div className=" flex flex-col justify-center items-center gap-2">
            <h1 className=" text-3xl font-bold ">Sign up</h1>
            <form className=" w-full px-4">
              <div className=" flex flex-col gap-1">
                <label className=" text-sm">Name</label>
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className=" border border-gray rounded-sm px-2 py-1"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label className=" text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border border-gray rounded-sm px-2 py-1"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  required
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  className=" border border-gray rounded-sm px-2 py-1"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" text-sm">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  required
                  autoComplete="off"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className=" border border-gray rounded-sm px-2 py-1"
                />
              </div>
              <div className=" flex justify-center items-center">
                <button
                  type="submit"
                  className=" bg-secondary py-1 px-4 hover:bg-success text-white my-5  rounded-sm font-bold"
                  onClick={signupHandler}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
