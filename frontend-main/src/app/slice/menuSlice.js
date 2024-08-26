import { jsonServerApi } from "./apiSlice";
export const menuSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      getMenuByID: builder.query({
        query: (payload) => ({
          url: `/api/restaurant/menu/${payload.id}`,
          method: "GET",
        }),
        invalidatesTags: ["Menu"],
      }),
      postPreferences: builder.mutation({
        query: (payload) => ({
          url: `/api/users/${payload.userId}/preferences`,
          method: "POST",
          body: payload.data,
        }),
        invalidatesTags: ["User"],
      }),
    }),
  });

export const {
  useGetMenuByIDQuery,
  usePostPreferencesMutation,
} = menuSlice;
