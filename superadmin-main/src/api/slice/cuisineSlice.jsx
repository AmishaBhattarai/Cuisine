import { jsonServerApi } from "./apiSlice";
export const cuisineSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      postCuisineRegister: builder.mutation({
        query: (payload) => ({
          url: "/cuisine/admin/add",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["Cuisine"],
      }),

      getCuisineList: builder.query({
        query: () => ({
          url: "/cuisine/all",
          method: "GET",
        }),
        providesTags: ["Cuisine"],
      }),
      putCuisineEdit: builder.mutation({
        query: (payload) => ({
          url: `/cuisine/admin/update?cuisineId=${payload.id}`,
          method: "PUT",
          body: payload,
        }),
        invalidatesTags: ["Cuisine"],
      }),
      deleteCuisine: builder.mutation({
        query: (payload) => ({
          url: `/cuisine/admin/delete?cuisineId=${payload.id}`,
          method: "DELETE",
          body: payload,
        }),
        invalidatesTags: ["Cuisine"],
      }),
    }),
  });

export const {
  usePostCuisineRegisterMutation,
  useGetCuisineListQuery,
  useDeleteCuisineMutation,
  usePutCuisineEditMutation,
} = cuisineSlice;
