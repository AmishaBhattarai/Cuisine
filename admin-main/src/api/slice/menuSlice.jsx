import { jsonServerApi } from "./apiSlice";
export const restaurantSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      postMenuRegister: builder.mutation({
        query: (payload) => ({
          url: `/api/menu/admin/add?restaurantId=${payload.id}`,
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["Menu"],
      }),
      putMenuEdit: builder.mutation({
        query: (payload) => ({
          url: `/api/menu/admin/update?menuItemId=${payload.id}`,
          method: "PUT",
          body: payload,
        }),
        invalidatesTags: ["Menu"],
      }),
      deleteMenu: builder.mutation({
        query: (payload) => ({
          url: `/api/menu/admin/delete?menuItemId=${payload.id}`,
          method: "DELETE",
          body: payload,
        }),
        invalidatesTags: ["Menu"],
      }),
    }),
  });

export const {
  usePostMenuRegisterMutation,
  usePutMenuEditMutation,
  useDeleteMenuMutation,
} = restaurantSlice;
