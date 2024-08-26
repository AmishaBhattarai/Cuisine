import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logOut } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_BACKEND_URL}`,
  credentials: "include",
  prepareHeaders: async (
    headers,
    { getState }
  ) => {
    const token = getState().authReducer.token;
    if (token) {
      headers.set(
        "Authorization",
        `Bearer ${token}`
      );
    }
    return headers;
  },
});

const baseQueryWithAuthCred = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(
    args,
    api,
    extraOptions
  );
  if (
    result?.error?.status === 403 ||
    result?.error?.status === 401
  ) {
    logOut();
  }
  return result;
};

export const jsonServerApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithAuthCred,
  endpoints: () => ({}),
  tagTypes: ["User", "Restaurant", "Menu"],
});
