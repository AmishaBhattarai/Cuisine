import { jsonServerApi } from "./apiSlice";
export const contactSlice =
  jsonServerApi.injectEndpoints({
    endpoints: (builder) => ({
      postContact: builder.mutation({
        query: (payload) => ({
          url: "/api/request",
          method: "POST",
          body: payload.data,
        }),
        invalidatesTags: ["Contact"],
      }),
    }),
  });

export const { usePostContactMutation } =
  contactSlice;
