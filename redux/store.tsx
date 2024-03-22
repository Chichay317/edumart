import { configureStore } from "@reduxjs/toolkit";
import shopperReducer from "./shopperSlice";
import formSlice from "./cohortFormData";

export const store = configureStore({
  reducer: {
    shopper: shopperReducer,
    formInfo: formSlice,
  },
});
