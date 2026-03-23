import PropTypes from "prop-types";
import { IMG_CDN_URL } from "../../utils/config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const info = restaurant?.info;

  // Offer text from Swiggy API
  const offerHeader = info?.aggregatedDiscountInfoV3?.header;
  const offerSubHeader = info?.aggregatedDiscountInfoV3?.subHeader;
  const offerText = offerHeader
    ? `${offerHeader}${offerSubHeader ? " " + offerSubHeader : ""}`
    : null;

  // Rating colour: green ≥ 4.0, amber 3.5–3.9, gray below
  const rating = parseFloat(info?.avgRating);
  const ratingColor =
    rating >= 4.0
      ? "bg-green-600"
      : rating >= 3.5
        ? "bg-yellow-500"
        : "bg-gray-500";

  return (
    <Link
      to={`/restaurant/${info?.id}`}
      className="group block border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 bg-white"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={IMG_CDN_URL + info?.cloudinaryImageId}
          alt={info?.name}
          className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Rating badge */}
        {rating > 0 && (
          <span
            className={`absolute top-2 left-2 ${ratingColor} text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1`}
          >
            ⭐ {info?.avgRating}
          </span>
        )}

        {/* Offer banner */}
        {offerText && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
            <p className="text-white text-xs font-bold uppercase tracking-wide truncate">
              {offerText}
            </p>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-3 md:p-4">
        <h4 className="text-base md:text-lg font-bold text-gray-900 truncate mb-0.5">
          {info?.name}
        </h4>
        <p className="text-xs md:text-sm text-gray-500 truncate mb-2">
          {info?.cuisines?.join(", ")}
        </p>

        {/* Meta row: delivery time + price */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <span className="flex items-center gap-1">
            🕐 {info?.sla?.deliveryTime} min
          </span>
          {info?.costForTwoMessage && (
            <span className="font-medium text-gray-700">
              {info?.costForTwoMessage}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    info: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      cloudinaryImageId: PropTypes.string,
      cuisines: PropTypes.arrayOf(PropTypes.string),
      avgRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      costForTwoMessage: PropTypes.string,
      aggregatedDiscountInfoV3: PropTypes.shape({
        header: PropTypes.string,
        subHeader: PropTypes.string,
      }),
      sla: PropTypes.shape({
        deliveryTime: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default RestaurantCard;
