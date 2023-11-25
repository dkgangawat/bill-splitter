import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className=" border-t border-t-gray">
        {/* <div>
          <img src={logo} className=" h-[40px]" alt="logo" />
        </div> */}

        <div className=" flex justify-center items-center text-white py-4">
          <div className=" flex gap-4">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <hr className=" border-t border-t-gray w-1/3  mx-auto" />
        <div className=" flex justify-center items-center text-white py-4">
          <span className=" text-sm">
            © 2023 All Rights Reserved. Developed by{" "}
            <a href="https://www.linkedin.com/in/deepak-bairwa/">
              Deepak Bairwa
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
