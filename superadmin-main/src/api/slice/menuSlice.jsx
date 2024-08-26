import { jsonServerApi } from "./apiSlice";
export const restaurantSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      postRestaurantRegister: builder.mutation({
        query: (payload) => ({
          url: `/restaurant/add`,
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["Restaurant"],
      }),
      putMenuEdit: builder.mutation({
        query: (payload) => ({
          url: `/api/admin/restaurant/update?restaurantId=${payload.id}`,
          method: "PUT",
          body: payload,
        }),
        invalidatesTags: ["Restaurant"],
      }),
      deleteMenu: builder.mutation({
        query: (payload) => ({
          url: `/api/admin/restaurant/delete?restaurantId=${payload.id}`,
          method: "DELETE",
          body: payload,
        }),
        invalidatesTags: ["Restaurant"],
      }),
    }),
  });

export const {
  usePostRestaurantRegisterMutation,
  usePutMenuEditMutation,
  useDeleteMenuMutation,
} = restaurantSlice;
