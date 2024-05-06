import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, IMG_RESTAURANT_MENU_URL } from "../config";
import "./RestaurantMenu.css";
import ShimmerUI from "../Shimmer/ShimmerUI";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const params = useParams();
  const { id } = params;

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
    const keyword = "Recommended";
    if (recommendedList) {
      setRestaurantMenu(recommendedList);
    } else {
      setRestaurantMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    }
  }

  return !restaurantMenu?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div>
        <div className="restaurant-details">
          <img
            src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}
            alt="restaurant image"
          />
          <div>
            <h1>{restaurantDetails.name}</h1>
            <h2>{restaurantDetails.locality}</h2>
            <h2>{restaurantDetails.cuisines}</h2>
            <h2>{restaurantDetails.costForTwoMessage}</h2>
            <h3>{restaurantDetails.avgRating} stars</h3>
          </div>
        </div>
        <div>
          <h2>Recommended For You - </h2>
          <h2>Menu: </h2>
          <div className="restaurant-menu">
            <ul>
              {restaurantMenu.map((menu) => (
                <li className="menu-list" key={menu?.card?.info?.id}>
                  <img
                    className="menu-image"
                    alt="menuimage"
                    src={IMG_RESTAURANT_MENU_URL + menu?.card?.info?.imageId}
                  />
                  <h4>
                    {menu?.card?.info?.name} ({menu?.card?.info?.category}) -
                    Rs.{" "}
                    {menu?.card?.info?.price
                      ? menu?.card?.info?.price / 100
                      : menu?.card?.info?.defaultPrice / 100}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
