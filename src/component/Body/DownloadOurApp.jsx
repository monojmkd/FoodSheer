import React from "react";
import appImage from "../../assets/mobile-app.png";
import appStore from "../../assets/appstore.png";
import playStore from "../../assets/playstore.png";
import kitchen from "../../assets/kitchen.png";
import pizza from "../../assets/pizza.png";
import fries from "../../assets/fries.png";
import burger from "../../assets/burger.png";

import { Link } from "react-router-dom";

const DownloadOurApp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-r from-orange-200 to-red-600 md:h-52 md:my-24 p-6 md:p-10 rounded-lg shadow-lg mt-28">
      {/* Left Section - App Screenshot */}
      <div className="w-2/3 md:w-1/5 my-6 mt-[-150px] md:mt-0 md:mb-0">
        <img
          src={appImage}
          alt="App Screenshot"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Middle Section - Download Badges */}
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/3 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold font-ptserif text-gray-800 mb-4">
          Download our Mobile App
        </h2>
        <div className="flex gap-4 mb-4">
          <Link to="https://play.google.com/store/apps?hl=en">
            <img
              src={playStore}
              alt="Google Play Store"
              className="w-24 md:w-32 h-10 md:h-14"
            />
          </Link>
          <Link to="https://www.apple.com/in/app-store/">
            <img
              src={appStore}
              alt="Apple App Store"
              className="w-24 md:w-32 h-10 md:h-14"
            />
          </Link>
        </div>
      </div>

      {/* Right Section - Cloud Kitchen */}
      <div className="flex justify-center items-center md:justify-start w-full mt-[-50px] md:mt-0 md:w-1/3 md:mr-10 gap-2 md:gap-2">
        <img
          className="w-16 md:w-28 h-16 md:h-28 rounded-full shadow-rose-300 shadow-md"
          src={pizza}
          alt="Pizza"
        />
        <img
          className="w-16 md:w-28 h-16 md:h-28 rounded-full shadow-rose-300 shadow-md"
          src={fries}
          alt="Fries"
        />
        <img
          className="w-16 md:w-28 h-16 md:h-28 rounded-full shadow-rose-300 shadow-md"
          src={burger}
          alt="Burger"
        />
        <img
          className="w-36 md:w-52 h-32 md:h-52 "
          src={kitchen}
          alt="Cloud Kitchen"
        />
      </div>
    </div>
  );
};

export default DownloadOurApp;
