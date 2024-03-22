import { UserInfo } from "../type";
import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../type";

interface ShopperState {
  userInfo: null | UserInfo;
  favoriteData: StoreProduct[];
}

const initialState: ShopperState = {
  userInfo: null,
  favoriteData: [],
};

export const shopperSlice = createSlice({
  name: "edumart",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      state.userInfo = null;
    },

    addToFavorite: (state, action) => {
      const favoriteItem = action.payload;
      const isAlreadyFavorite = state.favoriteData.some(
        (item) => item.id === favoriteItem.id
      );

      if (!isAlreadyFavorite) {
        state.favoriteData.push(favoriteItem);
      }
    },

    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item.id !== action.payload
      );
    },

    resetFavoriteData: (state) => {
      state.favoriteData = [];
    },
  },
});

export const {
  resetFavoriteData,
  addToFavorite,
  deleteFavorite,
  addUser,
  removeUser,
} = shopperSlice.actions;

export default shopperSlice.reducer;
