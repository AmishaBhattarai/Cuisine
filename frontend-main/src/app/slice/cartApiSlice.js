import { jsonServerApi } from "./apiSlice";
export const cartApiSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      postCartRegister: builder.mutation({
        query: (payload) => ({
          url: "/api/carts",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["Cart"],
      }),

      getCartList: builder.query({
        query: () => ({
          url: "/api/cart",
          method: "GET",
        }),
        providesTags: ["Cart"],
      }),
    }),
  });

export const {
  usePostCartRegisterMutation,
  useGetCartListQuery,
} = cartApiSlice;
