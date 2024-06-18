import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import locationSlice from "./locationSlice";
import toggleSlice from "./toggleSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    toggle: toggleSlice,
    location: locationSlice,
  },
});

export default store;
