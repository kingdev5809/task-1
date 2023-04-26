import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import users from "../Redux/userSlice";

const store = configureStore({
  reducer: { users },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
