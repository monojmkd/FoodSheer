import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, IMG_RESTAURANT_MENU_URL } from "../config";
import "./RestaurantMenu.css";
import ShimmerUI from "../Shimmer/ShimmerUI";
import useRestaurant from "../../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const [restaurantMenu, restaurantDetails] = useRestaurant(id);

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
                  <button onClick={() => addFoodItem(menu)}>Add</button>
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
