import { createSlice } from "@reduxjs/toolkit";

// Rehydrate cart from localStorage on startup
const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(items));
  } catch {
    // storage quota exceeded — fail silently
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      const incomingId = action.payload?.card?.info?.id;
      const existing = state.items.find(
        (item) => item?.card?.info?.id === incomingId,
      );
      if (existing) {
        // Increment quantity if item already in cart
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        // New item — add with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToStorage(state.items);
    },

    removeItem: (state, action) => {
      // action.payload = item id (card.info.id)
      const id = action.payload;
      const existing = state.items.find((item) => item?.card?.info?.id === id);
      if (existing && existing.quantity > 1) {
        // Decrement quantity
        existing.quantity -= 1;
      } else {
        // Remove entirely
        state.items = state.items.filter((item) => item?.card?.info?.id !== id);
      }
      saveCartToStorage(state.items);
    },

    removeItemCompletely: (state, action) => {
      // Removes all quantities of an item at once
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload,
      );
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const { addItem, removeItem, removeItemCompletely, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
