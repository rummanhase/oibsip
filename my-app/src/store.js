import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from './reducers/pizzaReducers';

export const store = configureStore({
  reducer: {
    getAllPizzaReducer: getAllPizzaReducer
  }
})
