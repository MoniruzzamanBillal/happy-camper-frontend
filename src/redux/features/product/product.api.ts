import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! get all products
    getAllProduct: builder.query({
      query: () => ({
        url: "/product/all",
        method: "GET",
      }),
    }),

    // ! add product
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product/add-product",
        method: "POST",
        body: payload,
      }),
    }),

    //
  }),
});

export const { useGetAllProductQuery, useAddProductMutation } = productApi;
