import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const CartSlice = createSlice({
  name: "AllCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );

      toast.success("Item Added to Cart!");
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
        toast.success("Quantity Increased!");
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
        toast.warn("Quantity can't be null!");
      } else {
        item.quantity--;
        toast.warn("Quantity Decreased!");
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      toast.warn("Item Removed from cart!");
    },
    resetCart: (state) => {
      state.products = [];
      toast.success("Cart Reset Successful!");
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
} = CartSlice.actions;
export default CartSlice.reducer;
