import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  removeItemCompletely,
} from "../../Store/cartSlice";
import FoodItem from "./FoodItem/FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrder = () => {
    if (isSubmitting) return; // prevent double-click
    setIsSubmitting(true);
    // Simulate an async order submission
    setTimeout(() => {
      dispatch(clearCart());
      setOrderPlaced(true);
      setIsSubmitting(false);
      setTimeout(() => setOrderPlaced(false), 4000);
    }, 800);
  };

  // Sum raw paisa values first to avoid float precision issues
  const totalPaisa = cartItems.reduce(
    (sum, item) =>
      sum +
      (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0) *
        (item.quantity || 1),
    0,
  );
  const totalAmount = (totalPaisa / 100).toFixed(2);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-16 lg:pt-24 pt-24 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
          <p className="text-gray-500 text-sm mt-1">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="text-sm text-red-500 hover:text-red-700 border border-red-300 hover:border-red-500 px-4 py-2 rounded-full transition-colors"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Order success banner */}
      {orderPlaced && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl text-center border border-green-200 flex items-center justify-center gap-2">
          <span className="text-xl">🎉</span>
          <span className="font-semibold">
            Order placed successfully! Get ready for your meal.
          </span>
        </div>
      )}

      {/* Empty state */}
      {cartItems.length === 0 && !orderPlaced && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="text-6xl mb-4">🛒</span>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-400 mb-6">
            Add some delicious food from our restaurants!
          </p>
          <a
            href="/"
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Browse Restaurants
          </a>
        </div>
      )}

      {/* Cart items grid */}
      {cartItems.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
            {cartItems.map((menu) => (
              <FoodItem
                key={menu?.card?.info?.id}
                menu={menu}
                onRemove={() => dispatch(removeItem(menu?.card?.info?.id))}
                onRemoveAll={() =>
                  dispatch(removeItemCompletely(menu?.card?.info?.id))
                }
              />
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-md ml-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Order Summary
            </h3>
            <div className="space-y-2 mb-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Items ({totalItems})</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-gray-800 text-base">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
            <button
              onClick={handleOrder}
              disabled={isSubmitting}
              className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-200 ${
                isSubmitting
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 active:scale-95"
              }`}
            >
              {isSubmitting ? "Placing order..." : "Place Order →"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
