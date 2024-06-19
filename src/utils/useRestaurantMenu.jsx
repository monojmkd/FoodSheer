import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});

  const userLocation = useSelector((store) => store.location.userLocation);
  const lat = userLocation?.lat ? userLocation?.lat : 26.7784904;
  const lng = userLocation?.lng ? userLocation?.lng : 94.2216606;
  // const lat = 26.7784904;
  // const lng = 94.2216606;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=` +
  //   id +
  //   `&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`

  async function getRestaurantInfo() {
    const data = await fetch(
      import.meta.env.VITE_BASE_URL +
        `api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=` +
        id +
        `&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
    const groupedCard = Boolean(json?.data?.cards[4]?.groupedCard)
      ? json?.data?.cards[4]?.groupedCard
      : json?.data?.cards[5]?.groupedCard;

    // json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card?.itemCards;
    const recommendedList = Boolean(
      groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    )
      ? groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
      : groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    // groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    setRestaurantMenu(recommendedList);
    // if (recommendedList) {
    //   setRestaurantMenu(recommendedList);
    // } else {
    //   setRestaurantMenu(
    //     json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //       ?.card?.itemCards
    //   );
    // }
  }

  return [restaurantMenu, restaurantDetails];
};

export default useRestaurantMenu;
