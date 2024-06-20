import React from "react";
import heroimage from "../../assets/heroimage.png";
import arrowimage from "../../assets/arrow.png";

const HeroSection = ({ scrollToRestaurants }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly p-4 lg:pt-18 pt-24 md:p-10">
      {/* Left Text Section */}
      <div className="text-center md:text-left md:w-1/3 relative mb-8 md:mb-0">
        <div className="absolute top-0 left-16 lg:left-0 transform -translate-x-1/3 -translate-y-1/4">
          <div className="w-28 h-28  bg-red-100 rounded-full"></div>
        </div>
        <img
          className="absolute left-52 lg:left-80"
          src={arrowimage}
          alt="arrow"
        />
        <h1 className="text-6xl lg:text-6xl font-bold font-ptserif mb-4 relative z-10">
          <span className="relative z-20">Fastest</span> <br />
          <span className="text-orange-500">Delivery</span> &<br />
          Easy <span className="text-orange-500">Pickup</span>
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          When you are too lazy to cook, we are just a click away!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center"
            onClick={scrollToRestaurants}
          >
            <svg
              className="w-5 h-5 pr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 3H7.1a1 1 0 00-.87.51L3.48 8H1a1 1 0 100 2h2.04l1.2 6h11.53l1.2-6H19a1 1 0 100-2h-2.48l-2.75-4.49A1 1 0 0012.9 3zM10 16a2 2 0 110-4 2 2 0 010 4zm5.5 0a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            Order Now
          </button>
          <button className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414 3.707 11.707A1 1 0 112.293 10.293l7-7A1 1 0 0110 3z" />
            </svg>
            How to order
          </button>
        </div>
      </div>
      {/* Center Image */}
      <div className="relative md:w-1/2 mb-8 md:mb-0">
        <img
          src={heroimage}
          alt="Delivery"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      {/* Right Text Section */}
      <div className="flex flex-col text-white gap-6 md:ml-16 md:w-1/5">
        <div className="bg-red-500 rounded-2xl p-2 text-center">
          <p className="text-base font-bold">🚴‍♂️ Fast delivery</p>
          <p className="text-sm">Promise to deliver within 30 mins</p>
        </div>
        <div className="bg-red-500 rounded-2xl p-2 text-center">
          <p className="text-base font-bold">📦 Pick Up</p>
          <p className="text-sm">Pickup delivery at your doorstep</p>
        </div>
        <div className="bg-red-500 rounded-2xl p-2 text-center">
          <p className="text-base font-bold">🍽️ Dine in</p>
          <p className="text-sm">Enjoy your food fresh, crispy, and hot</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
