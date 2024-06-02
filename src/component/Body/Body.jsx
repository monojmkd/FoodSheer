import React from "react";
import "./Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ShimmerUI from "../Shimmer/ShimmerUI";
import useRestaurantsCard from "../../utils/useRestaurantsCard";

const Body = () => {
  const { filteredRestaurants, searchText, setSearchText, loading } =
    useRestaurantsCard();

  return loading ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="">
        <input
          type="text"
          className=""
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <div>No restaurants found</div>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurant={restaurant}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
