import React, { useEffect, useState } from "react";
import "./Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { filterData } from "../../utils/helper";
import ShimmerUI from "../Shimmer/ShimmerUI";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7784904&lng=94.21539600000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is done
    }
  }

  // Filter restaurants based on search text
  useEffect(() => {
    const filteredData = filterData(searchText, allRestaurants);
    setFilteredRestaurants(filteredData);
  }, [searchText, allRestaurants]);

  // Show shimmer UI when loading or when there are no restaurants to display
  if (loading) {
    return <ShimmerUI />;
  }

  return (
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
