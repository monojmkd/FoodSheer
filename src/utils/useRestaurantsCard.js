import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

// Extended filter: matches restaurant name OR any cuisine
const filterData = (searchText, restaurants) => {
  if (!searchText.trim()) return restaurants;
  const q = searchText.toLowerCase();
  return restaurants.filter(
    (r) =>
      r?.info?.name?.toLowerCase().includes(q) ||
      r?.info?.cuisines?.join(" ").toLowerCase().includes(q),
  );
};

const useRestaurantsCard = (initialSearchText = "") => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(initialSearchText);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userLocation = useSelector((store) => store.location.userLocation);
  const lat = userLocation?.lat ?? 26.7784904;
  const lng = userLocation?.lng ?? 94.2216606;

  const getRestaurants = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `${
        import.meta.env.VITE_BASE_URL
      }api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const json = await response.json();

      // Preserve original index-based parsing that was working.
      // Fallback to cards[2] in case Swiggy shifts the position by one slot.
      const gridElements =
        json?.data?.cards[1]?.card?.card?.gridElements ??
        json?.data?.cards[2]?.card?.card?.gridElements;
      const restaurants = gridElements?.infoWithStyle?.restaurants ?? [];

      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Failed to fetch restaurants:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [lat, lng]); // correct deps — no circular allRestaurants dep

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  useEffect(() => {
    setFilteredRestaurants(filterData(searchText, allRestaurants));
  }, [searchText, allRestaurants]);

  return {
    allRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    loading,
    error,
  };
};

export default useRestaurantsCard;
