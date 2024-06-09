import React from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
      <Link to={"/restaurant/" + restaurant?.info?.id}>
        <img
          src={IMG_CDN_URL + restaurant.info?.cloudinaryImageId}
          alt="restaurant image"
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h4 className="text-xl font-bold">{restaurant.info?.name}</h4>
          <h5 className="text-gray-600">
            {restaurant.info?.cuisines.join(", ")}
          </h5>
          <h5 className="text-gray-600">
            {restaurant.info?.sla.deliveryTime} minutes
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
