import React, { useRef } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ShimmerUI from "../Shimmer/ShimmerUI";
import useRestaurantsCard from "../../utils/useRestaurantsCard";
import HeroSection from "./HeroSection";
import { FaSearch } from "react-icons/fa";
import VecPerson from "./VecPerson";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import DownloadOurApp from "./DownloadOurApp";

const Body = () => {
  const { filteredRestaurants, searchText, setSearchText, loading } =
    useRestaurantsCard();

  const restaurantSectionRef = useRef(null);

  const scrollToRestaurants = () => {
    if (restaurantSectionRef.current) {
      restaurantSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return loading ? (
    <ShimmerUI />
  ) : (
    <div className="px-4 md:px-8 lg:px-16 lg:pt-14">
      <HeroSection scrollToRestaurants={scrollToRestaurants} />
      <hr className="my-4" />
      {/* Search Section and Person Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-yellow-100 to-red-300 rounded-r-2xl shadow-lg transform transition-all duration-300 hover:scale-105 p-4 md:p-8">
        <div className="flex flex-col md:h-40 h:auto w-full md:w-1/2 p-5">
          <div className="flex flex-col gap-3 p-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Search for your favourite restaurant . .
            </h1>
            <div className="flex items-center bg-white rounded-full lg:p-2 h-10 shadow-inner">
              <FaSearch size={20} className="text-green-600 ml-2" />
              <input
                className="border-none outline-none pl-2 text-lg rounded-full"
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {/* <button className="bg-green-500 text-white rounded-full px-4 py-2 ml-2 text-end hover:bg-green-600 transition-colors">
                Search
              </button> */}
            </div>
          </div>
        </div>
        <VecPerson />
      </div>

      <hr className="my-4" />
      <div ref={restaurantSectionRef} className="mx-auto">
        {filteredRestaurants.length === 0 ? (
          <div className="flex flex-col items-center mt-20">
            <div className="flex flex-col items-center bg-red-100 p-8 rounded-lg border border-red-200">
              <h2 className="text-3xl font-bold text-red-700 mb-4">
                Sorry !! The Kitchen is Closed
              </h2>
              <p className="text-lg text-gray-700">Try again later</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant?.info?.id}
                restaurant={restaurant}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center mt-4">
        <ScrollToTop />
      </div>
      <div>
        <DownloadOurApp />
      </div>
    </div>
  );
};

export default Body;
