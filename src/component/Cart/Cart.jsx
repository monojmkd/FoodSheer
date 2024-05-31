import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Store/cartSlice";
import FoodItem from "./FoodItem/FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h2>Cart Items : {cartItems.length}</h2>
      {console.log(cartItems)}
      <button onClick={() => handleClearCart()}> Clear Cart</button>
      <div>
        {cartItems.map((menu) => (
          <FoodItem key={menu?.card?.info?.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
