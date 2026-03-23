import PropTypes from "prop-types";
import { IMG_CDN_URL } from "../../../utils/config";

const FoodItem = ({ menu, onRemove, onRemoveAll }) => {
  const { imageId, name, price, defaultPrice } = menu?.card?.info || {};
  const quantity = menu?.quantity || 1;
  const unitPrice = (price || defaultPrice || 0) / 100;
  const totalPrice = (unitPrice * quantity).toFixed(2);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col transition-all duration-200 hover:shadow-md">
      {/* Image */}
      <div className="relative">
        <img
          src={IMG_CDN_URL + imageId}
          alt={name}
          className="w-full h-36 object-cover"
        />
        {/* Remove all button */}
        <button
          onClick={onRemoveAll}
          className="absolute top-2 right-2 bg-white/90 hover:bg-red-100 text-red-500 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow transition-colors"
          title="Remove from cart"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <h2 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2">
          {name}
        </h2>
        <p className="text-xs text-gray-400">₹{unitPrice.toFixed(2)} each</p>

        {/* Quantity row + total */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          {/* Quantity stepper */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-1 py-0.5">
            <button
              onClick={onRemove}
              className="w-6 h-6 rounded-full bg-white text-gray-700 font-bold text-sm flex items-center justify-center shadow-sm hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              −
            </button>
            <span className="text-sm font-bold text-gray-800 min-w-[16px] text-center">
              {quantity}
            </span>
            <button
              disabled // ADD is on menu page — stepper here only decrements
              className="w-6 h-6 rounded-full bg-white text-gray-300 font-bold text-sm flex items-center justify-center shadow-sm cursor-not-allowed"
              title="Add more from the restaurant page"
            >
              +
            </button>
          </div>
          <span className="text-sm font-bold text-gray-800">₹{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  menu: PropTypes.shape({
    quantity: PropTypes.number,
    card: PropTypes.shape({
      info: PropTypes.shape({
        id: PropTypes.string,
        imageId: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        defaultPrice: PropTypes.number,
      }),
    }),
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onRemoveAll: PropTypes.func.isRequired,
};

export default FoodItem;
