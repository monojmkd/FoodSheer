import React from "react";
// import "./Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ShimmerUI from "../Shimmer/ShimmerUI";
import useRestaurantsCard from "../../utils/useRestaurantsCard";
import HeroSection from "./HeroSection";

const Body = () => {
  const { filteredRestaurants, searchText, setSearchText, loading } =
    useRestaurantsCard();

  return loading ? (
    <ShimmerUI />
  ) : (
    <div className="mx-32">
      <div>
        <input
          type="text"
          className=""
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <HeroSection />
      <div className="mx-auto p-4">
        {filteredRestaurants.length === 0 ? (
          <div className="text-center text-xl">No restaurants found</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant?.info?.id}
                restaurant={restaurant}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
