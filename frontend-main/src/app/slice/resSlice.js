import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suggest: "",
};

const resSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {
    suggestion: (state, action) => {
      state.suggest = action.payload;
    },
  },
});

export const { suggestion } = resSlice.actions;

export default resSlice.reducer;
