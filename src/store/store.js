import { configureStore } from "@reduxjs/toolkit";
import { productReducer, cartReducer } from "./features";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
});

export default store;
