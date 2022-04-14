import { configureStore } from "@reduxjs/toolkit";
import admin from "./features/admin";

const store = configureStore({
  reducer: {
    admin,
  },
});

export default store;
