import { configureStore } from "@reduxjs/toolkit";
import admin from "./features/admin";
import category from "./features/category";

const store = configureStore({
  reducer: {
    admin,
    category,
  },
});

export default store;
