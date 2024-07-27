// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../app/features/products/productsSlice';
import cartReducer from '../app/features/cart/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
