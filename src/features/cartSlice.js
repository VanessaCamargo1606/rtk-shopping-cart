import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData"; // Importo el listado de productos

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {  // Agregar items al carrito
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {  // Calcular el total de items agregados al carrito
      let { totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { quantity } = cartItem;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalQuantity: 0,
        }
      );
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
