import React from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={IMG_CDN_URL + restaurant.info?.cloudinaryImageId}
        alt="restaurant image"
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h4 className="text-xl font-bold">
          <Link to={"/restaurant/" + restaurant?.info?.id}>
            {restaurant.info?.name}
          </Link>
        </h4>
        <h5 className="text-gray-600">
          {restaurant.info?.cuisines.join(", ")}
        </h5>
        <h5 className="text-gray-600">
          {restaurant.info?.sla.deliveryTime} minutes
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
