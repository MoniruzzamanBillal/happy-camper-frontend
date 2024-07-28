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

    // ! get single product
    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
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

    // ! update a product
    updateSingleProduct: builder.mutation({
      query: (payload) => {
        const { id, productData } = payload;

        return {
          url: `/product/${id}`,
          method: "PATCH",
          body: productData,
        };
      },
    }),

    //
  }),
});

export const {
  useGetAllProductQuery,
  useAddProductMutation,
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} = productApi;
