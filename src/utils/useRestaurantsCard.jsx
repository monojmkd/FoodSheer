import { useState, useEffect } from "react";
import { filterData } from "./helper";

const useRestaurantsCard = (initialSearchText = "") => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(initialSearchText);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRestaurants = async () => {
      setLoading(true);
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
        setLoading(false);
      }
    };

    getRestaurants();
  }, []);

  useEffect(() => {
    const filteredData = filterData(searchText, allRestaurants);
    setFilteredRestaurants(filteredData);
  }, [searchText, allRestaurants]);

  return {
    allRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    loading,
  };
};

export default useRestaurantsCard;
