import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedItem: "",
};

const handlerSlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    queryItems: (state, action) => {
      state.searchedItem = action.payload;
    },
  },
});

export const { queryItems } =
  handlerSlice.actions;

export default handlerSlice.reducer;
