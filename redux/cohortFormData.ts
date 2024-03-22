// formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: null,
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    resetForm: (state) => {
      state.formData = null;
    },
  },
});

export const { setFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
