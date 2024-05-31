import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7784904&lng=94.21539600000001&restaurantId=" +
        id +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
    const recommendedList =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    if (recommendedList) {
      setRestaurantMenu(recommendedList);
    } else {
      setRestaurantMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    }
  }

  return [restaurantMenu, restaurantDetails];
};

export default useRestaurant;
