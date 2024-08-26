import { jsonServerApi } from "./apiSlice";
export const restaurantSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      postRestaurantRegister: builder.mutation({
        query: (payload) => ({
          url: "/account/register/business",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["Restaurant"],
      }),

      getRestaurantList: builder.query({
        query: () => ({
          url: "/api/restaurant/list",
          method: "GET",
        }),
        providesTags: ["Restaurant"],
      }),
      getRestaurantByID: builder.query({
        query: (payload) => ({
          url: `/api/restaurant/${payload.restaurantId}`,
          method: "GET",
        }),
        invalidatesTags: ["Restaurant"],
      }),
      getRestaurantMenuByID: builder.query({
        query: (payload) => ({
          url: `/api/restaurant/menu/${payload.restaurantId}`,
          method: "GET",
        }),
        invalidatesTags: ["Restaurant"],
      }),
      getRestaurantMenuByLatLon: builder.query({
        query: (payload) => ({
          url: `/api/restaurant/getRestaurant/${payload.latitude}/${payload.longitude}`,
          method: "GET",
        }),
        invalidatesTags: ["Restaurant"],
      }),
    }),
  });

export const {
  usePostRestaurantRegisterMutation,
  useGetRestaurantListQuery,
  useGetRestaurantByIDQuery,
  useGetRestaurantMenuByIDQuery,
  useGetRestaurantMenuByLatLonQuery,
} = restaurantSlice;
