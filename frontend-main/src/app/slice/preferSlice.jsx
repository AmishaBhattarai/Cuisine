import { jsonServerApi } from "./apiSlice";
export const cuisineSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      getCuisine: builder.query({
        query: () => ({
          url: "/cuisine/all",
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
  useGetCuisineQuery,
  usePostPreferencesMutation,
} = cuisineSlice;
