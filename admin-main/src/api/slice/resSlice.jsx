import { createSlice } from "@reduxjs/toolkit";

const resSlice = createSlice({
  name: "res",
  initialState: {
    data: null,
  },
  reducers: {
    setResaturant: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const { setResaturant, logOut } =
  resSlice.actions;

export default resSlice.reducer;
