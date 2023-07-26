import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from './reducers/pizzaReducers';
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer } from "./reducers/customerReducer";

export const store = configureStore({
  reducer: {
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer
  }
})
