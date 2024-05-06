import React from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + restaurant.info?.cloudinaryImageId}
        alt="restaurant image"
      />
      <h4>
        {" "}
        <Link to={"/restaurant/" + restaurant?.info?.id}>
          {restaurant.info?.name}
        </Link>
      </h4>
      <h5>{restaurant.info?.cuisines.join(",")}</h5>
      <h5>{restaurant.info?.sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
