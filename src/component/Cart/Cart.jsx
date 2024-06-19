import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Store/cartSlice";
import FoodItem from "./FoodItem/FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrder = () => {
    setOrderPlaced(true);
    dispatch(clearCart());
    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000); // Reset orderPlaced after 3 seconds
  };

  const totalAmount = cartItems.reduce(
    (total, menu) =>
      total +
      (menu?.card?.info?.price || menu?.card?.info?.defaultPrice || 0) / 100,
    0
  );

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-16 lg:pt-20 pt-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Cart Items: {cartItems.length}</h2>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Clear Cart
        </button>
      </div>
      {orderPlaced && (
        <div className="mb-4 p-4 bg-green-200 text-green-800 rounded-lg text-center">
          Order placed successfully!
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cartItems.length === 0 ? (
          <div className="col-span-full text-center text-xl">
            Your cart is empty. Add some items to see them here!
          </div>
        ) : (
          cartItems.map((menu) => (
            <FoodItem key={menu?.card?.info?.id} menu={menu} />
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className=" p-4 bg-gray-100 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Total Amount: ₹{totalAmount.toFixed(2)}
            </h2>
            <button
              onClick={handleOrder}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
