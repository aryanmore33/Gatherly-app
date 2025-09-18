// store.js
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../redux/Uislice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
