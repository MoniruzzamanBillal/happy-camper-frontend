import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! get all products
    getAllProduct: builder.query({
      query: (param) => {
        return {
          url: "/product/all",
          method: "GET",
          params: param,
        };
      },
    }),

    // ! get all products count
    getAllProductCount: builder.query({
      query: () => {
        return {
          url: "/product/all-count",
          method: "GET",
        };
      },
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
      query: (payload) => {
        return {
          url: "/product/add-product",
          method: "POST",
          body: payload,
        };
      },
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
  useGetAllProductCountQuery,
} = productApi;
