import React from "react";

const Home = () => {
  return (
    <div className=" text-white py-10 ">
      <h2 className=" md:text-2xl text-lg font-bold mb-5">
        Your Ultimate Solution for Effortless Expense Management
      </h2>
      <div className=" text-white   p-4 rounded-md py-5">
        <h3 className=" md:text-xl text-lg font-bold my-4">
          Why Register with Bill spliter?
        </h3>
        <div className=" flex flex-wrap gap-4 ">
          <span className=" flex-1 min-w-[400px] text-justify">
            Embark on a journey towards financial freedom with Bill spliter! We
            comprehend the challenges that come with sharing expenses, and
            that's why we've crafted an intuitive and feature-packed web
            application to redefine your expense management experience.
            <br />
            <br />
            we believe that managing shared finances should be as smooth as the
            friendships and experiences they fund. Our platform is not just a
            tool; it's your companion in navigating the complexities of shared
            expenses.
          </span>
          <div className=" w-1/3 min-w-[250px] h-[250px]">
            <img src="https://plus.unsplash.com/premium_photo-1661762564971-a468a1bd8f22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
      <div className=" text-white   p-4 rounded-md py-5">
        {/* <h3 className=" md:text-xl text-lg font-bold my-4">
          Why Register with Bill spliter?
        </h3> */}
        <div className=" flex flex-wrap gap-4 ">
          <ul>
            <li className="  text-justify">
              Say goodbye to the days of cumbersome expense tracking. Bill
              spliter welcomes you with an interface designed for simplicity and
              ease of use. No more tangled spreadsheets or confusing
              calculations
            </li>
            <li className="  text-justify">
              sharing expenses becomes a breeze. Whether it's splitting a dinner
              bill, planning a trip, or organizing a group outing, our platform
              handles the math, so you can focus on making memories.
            </li>
            <li className="  text-justify">
              We keeps you in the loop with real-time updates on what you owe
              and what others owe you. No more guesswork or awkward
              conversations about money—just clear, transparent financial
              insights at your fingertips.
            </li>
            <li className=" text-justify">
              Planning a group activity? group management feature lets you
              create and manage expenses within a group seamlessly. Add members,
              split costs, and ensure everyone pays their fair share
              effortlessly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
