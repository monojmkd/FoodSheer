import React from "react";
import { IMG_CDN_URL } from "../../../utils/config";

const FoodItem = ({ menu }) => {
  const { imageId, name, price, defaultPrice } = menu?.card?.info || {};

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 bg-white">
      <img
        src={IMG_CDN_URL + imageId}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <h3 className="text-gray-600">
          Rupees: ₹{price ? price / 100 : defaultPrice / 100}
        </h3>
      </div>
    </div>
  );
};

export default FoodItem;
