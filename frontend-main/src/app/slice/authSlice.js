import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    phone: null,
    email: null,
    lat: null,
    lon: null,
    id: null,
    pref: false,
    token: null,
    role: null,
    cuisines: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const {
        user,
        phone,
        role,
        email,
        token,
        id,
        cuisines,
        pref,
        lat,
        lon,
      } = action.payload;
      state.user = user;
      state.email = email;
      state.lat = lat;
      state.id = id;
      state.cuisines = cuisines;
      state.lon = lon;
      state.pref = pref;
      state.phone = phone;
      state.role = role;
      state.token = token;
    },
    logOut: (state, action) => {
      localStorage.removeItem("persist:_user");
      state.user = null;
      state.email = null;
      state.phone = null;
      state.role = null;
      state.lat = null;
      state.id = null;
      state.lon = null;
      state.token = null;
      state.cuisines = null;
      window.location.reload();
    },
  },
});

export const { setCredentials, logOut } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) =>
  state.auth.user;
export const selectCurrentPhone = (state) =>
  state.auth.phone;
