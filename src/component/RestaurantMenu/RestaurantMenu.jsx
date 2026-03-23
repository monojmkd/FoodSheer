import { useParams } from "react-router-dom";
import { IMG_CDN_URL, IMG_RESTAURANT_MENU_URL } from "../../utils/config";
import ShimmerUI from "../Shimmer/ShimmerUI";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/cartSlice";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Hook now returns 4 values — loading and error were previously discarded
  const [restaurantMenu, restaurantDetails, loading, error] =
    useRestaurantMenu(id);

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (loading) return <ShimmerUI />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <span className="text-6xl mb-4">😕</span>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Could not load menu
        </h2>
        <p className="text-gray-400 mb-2">
          The restaurant menu failed to load. This may be a temporary issue.
        </p>
        <p className="text-xs text-red-400 font-mono bg-red-50 px-3 py-1 rounded mb-6">
          {error}
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  if (restaurantMenu.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <span className="text-6xl mb-4">🍽️</span>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Menu unavailable
        </h2>
        <p className="text-gray-400 mb-6">
          No menu items found for this restaurant right now.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 lg:pt-20 pt-16 md:p-8">
      <div className="bg-white rounded-lg shadow-md p-4 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}
            alt="restaurant"
            className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8 object-cover h-64"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">
              {restaurantDetails?.name}
            </h1>
            <h2 className="text-lg text-gray-700 mb-2">
              {restaurantDetails?.locality}
            </h2>
            <h2 className="text-lg text-gray-700 mb-2">
              {restaurantDetails?.cuisines?.join(", ")}
            </h2>
            <h2 className="text-lg text-gray-700 mb-2">
              {restaurantDetails?.costForTwoMessage}
            </h2>
            <h3 className="text-lg text-yellow-500 font-semibold">
              {restaurantDetails?.avgRating} stars ⭐
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
        <h2 className="text-xl font-semibold mb-4">Menu:</h2>
        <div className="restaurant-menu">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurantMenu.map((menu) => (
              <li
                className="menu-list bg-white rounded-lg p-4 flex items-start shadow-md"
                key={menu?.card?.info?.id}
              >
                <img
                  className="menu-image w-28 h-28 p-2 object-cover rounded-xl mb-4 md:mb-0 md:mr-4"
                  alt="menu"
                  src={IMG_RESTAURANT_MENU_URL + menu?.card?.info?.imageId}
                />
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold mb-1">
                    {menu?.card?.info?.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">
                    {menu?.card?.info?.description}
                  </p>
                  <p className="text-lg font-bold mb-2">
                    ₹{" "}
                    {menu?.card?.info?.price
                      ? menu?.card?.info?.price / 100
                      : menu?.card?.info?.defaultPrice / 100}
                  </p>
                  <button
                    className="bg-green-500 text-sm text-white px-4 py-2 rounded-full mt-auto hover:bg-green-600 transition-colors"
                    onClick={() => addFoodItem(menu)}
                  >
                    ADD
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default RestaurantMenu;
