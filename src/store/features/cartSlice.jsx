import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      state = state.filter((_x) => _x.id !== action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
