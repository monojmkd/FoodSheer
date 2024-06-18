import React from "react";
import { IMG_CDN_URL } from "../../utils/config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
      <Link to={"/restaurant/" + restaurant?.info?.id}>
        <img
          src={IMG_CDN_URL + restaurant.info?.cloudinaryImageId}
          alt="restaurant"
          className="w-full h-32 md:h-52 object-cover"
        />
        <div className="p-4">
          <h4 className="text-lg md:text-xl font-bold">
            {restaurant.info?.name}
          </h4>
          <h5 className="text-sm md:text-base text-gray-600">
            {restaurant.info?.cuisines.join(", ")}
          </h5>
          <h5 className="text-sm md:text-base text-gray-600">
            {restaurant.info?.sla.deliveryTime} minutes
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
