import { useState, useEffect } from "react";
import { filterData } from "./helper";
import { useSelector } from "react-redux";

const useRestaurantsCard = (initialSearchText = "") => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(initialSearchText);
  const [loading, setLoading] = useState(true);
  const userLocation = useSelector((store) => store.location.userLocation);

  const lat = userLocation?.lat ? userLocation?.lat : 26.7784904;
  const lng = userLocation?.lng ? userLocation?.lng : 94.2216606;

  // const lat = 26.7784904;
  // const lng = 94.2216606;
  useEffect(() => {
    const getRestaurants = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          import.meta.env.VITE_BASE_URL +
            `api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
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
