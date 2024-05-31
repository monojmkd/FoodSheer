import React from "react";
import { IMG_CDN_URL } from "../../config";

const FoodItem = ({ menu }) => {
  return (
    <div>
      <img src={IMG_CDN_URL + menu?.card?.info?.imageId} />
      <h2>{menu?.card?.info?.name}</h2>
      <h3>
        Rupees :{" "}
        {menu?.card?.info?.price
          ? menu?.card?.info?.price / 100
          : menu?.card?.info?.defaultPrice / 100}
      </h3>
    </div>
  );
};

export default FoodItem;
