import { useState, useEffect, useCallback } from "react";
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
  const getRestaurants = useCallback(async () => {
    setLoading(true);
    try {
      // const url =
      //   import.meta.env.VITE_BASE_URL +
      //   `api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

      const url = `${
        import.meta.env.VITE_BASE_URL
      }api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

      // let headers = new Headers({
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      //   "User-Agent":
      //     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
      // });

      // const data = await fetch(url, {
      //   method: "GET",
      //   headers: headers,
      // });

      // const data = await fetch(
      //   import.meta.env.VITE_BASE_URL +
      //     `api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      // );
      const data = await fetch(url);
      const json = await data.json();
      const gridElements = Boolean(
        json?.data?.cards[1]?.card?.card?.gridElements
      )
        ? json?.data?.cards[1]?.card?.card?.gridElements
        : json?.data?.cards[2]?.card?.card?.gridElements;
      const restaurants = gridElements?.infoWithStyle?.restaurants || [];
      // const restaurants =
      //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants || [];
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false);
    }
  }, [allRestaurants]);

  useEffect(() => {
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
