import { jsonServerApi } from "./apiSlice";

export const userSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      postLogin: builder.mutation({
        query: (payload) => ({
          url: "/api/auth/login",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["User"],
      }),
      postReset: builder.mutation({
        query: (payload) => ({
          url: "/api/auth/reset",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["User"],
      }),
      getUser: builder.query({
        query: () => ({
          url: "/api/users/profile",
          method: "GET",
        }),
        providesTags: ["User"],
      }),
      postRegister: builder.mutation({
        query: (payload) => ({
          url: "/api/auth/register",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["User"],
      }),
      postLogout: builder.mutation({
        query: (payload) => ({
          url: "/api/auth/logout",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["User"],
      }),
    }),
  });

export const {
  usePostLoginMutation,
  useGetUserQuery,
  usePostResetMutation,
  usePostRegisterMutation,
} = userSlice;
