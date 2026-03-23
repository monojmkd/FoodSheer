import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userLocation = useSelector((store) => store.location.userLocation);
  const lat = userLocation?.lat ?? 26.7784904;
  const lng = userLocation?.lng ?? 94.2216606;

  const getRestaurantInfo = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url =
        import.meta.env.VITE_BASE_URL +
        `api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;

      const response = await fetch(url, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const json = await response.json();

      console.log("cards length:", json?.data?.cards?.length);
      json?.data?.cards?.forEach((card, i) => {
        console.log(`cards[${i}] keys:`, Object.keys(card ?? {}));
        if (card?.card?.card?.info?.id)
          console.log(`  → restaurant info found at cards[${i}]`);
        if (card?.groupedCard)
          console.log(`  → groupedCard found at cards[${i}]`);
      });

      const details =
        json?.data?.cards[2]?.card?.card?.info ??
        json?.data?.cards[3]?.card?.card?.info;
      setRestaurantDetails(details ?? {});

      // groupedCard is at cards[4] or cards[5] depending on API response variant.
      const groupedCard =
        json?.data?.cards[4]?.groupedCard ?? json?.data?.cards[5]?.groupedCard;

      const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

      // itemCards can be at index [1] or [2] within the section list.
      const itemCards =
        regularCards[1]?.card?.card?.itemCards ??
        regularCards[2]?.card?.card?.itemCards ??
        [];

      setRestaurantMenu(itemCards);
    } catch (err) {
      console.error("Failed to fetch restaurant menu:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [id, lat, lng]); // correct deps — reruns when restaurant id or location changes

  useEffect(() => {
    getRestaurantInfo();
  }, [getRestaurantInfo]);

  return [restaurantMenu, restaurantDetails, loading, error];
};

export default useRestaurantMenu;
